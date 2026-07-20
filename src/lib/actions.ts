'use server';

import { db } from './db';
import { users, bookings } from './db/schema';
import { eq } from 'drizzle-orm';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function submitBooking(formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const catsCount = formData.get('cats') as string;
    const plan = formData.get('service') as string;
    const startDateStr = formData.get('startDate') as string;
    const endDateStr = formData.get('endDate') as string;
    const message = formData.get('message') as string;

    // Check if user exists
    const existingUsers = await db.select().from(users).where(eq(users.email, email)).limit(1);
    let userId;

    if (existingUsers.length > 0) {
      userId = existingUsers[0].id;
      // Update phone/name if missing
      await db.update(users)
        .set({ name, phone })
        .where(eq(users.id, userId));
    } else {
      const insertedUsers = await db.insert(users)
        .values({ email, name, phone })
        .returning({ id: users.id });
      userId = insertedUsers[0].id;
    }

    // Insert booking
    // Note: We don't have services seeded yet, so we'll store plan and cat count in notes
    const combinedNotes = `Plan: ${plan}\nKediler: ${catsCount}\n\nMesaj: ${message}`;
    
    await db.insert(bookings).values({
      userId,
      startDate: startDateStr,
      endDate: endDateStr,
      notes: combinedNotes,
      status: 'pending',
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting booking:', error);
    return { success: false, error: 'Bir hata oluştu.' };
  }
}

export async function getBookings() {
  try {
    const results = await db.query.bookings.findMany({
      with: {
        user: true,
      },
      orderBy: (bookings, { desc }) => [desc(bookings.createdAt)],
    });
    
    return results;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return [];
  }
}

export async function loginAdmin(password: string) {
  if (password === 'admin123') {
    (await cookies()).set('admin_token', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });
    return { success: true };
  }
  return { success: false, error: 'Hatalı şifre' };
}

export async function logoutAdmin() {
  (await cookies()).delete('admin_token');
  redirect('/nl/admin/login');
}

export async function updateBookingStatus(formData: FormData): Promise<void> {
  try {
    const bookingId = parseInt(formData.get('bookingId') as string, 10);
    const newStatus = formData.get('status') as string;

    if (!bookingId || !newStatus) {
      console.error('Missing data');
      return;
    }

    // Verify admin
    const token = (await cookies()).get('admin_token');
    if (!token || token.value !== 'authenticated') {
      console.error('Unauthorized');
      return;
    }

    await db.update(bookings)
      .set({ status: newStatus })
      .where(eq(bookings.id, bookingId));

    revalidatePath('/', 'layout');
  } catch (error) {
    console.error('Error updating status:', error);
  }
}
