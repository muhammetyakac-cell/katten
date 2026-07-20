import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getBookings, logoutAdmin } from '@/lib/actions';
import styles from './admin.module.css';

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token');
  
  if (!token) {
    redirect('/nl/admin/login');
  }

  const bookings = await getBookings();

  return (
    <div className={styles.adminContainer}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}><span>⚙️</span> Katten Admin Paneli</h1>
          <form action={logoutAdmin}>
            <button type="submit" className={styles.logoutButton}>Çıkış Yap</button>
          </form>
        </header>

        <main className={styles.dashboardCard}>
          {bookings.length === 0 ? (
            <div className={styles.emptyState}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📭</div>
              <h2>Henüz rezervasyon talebi yok</h2>
              <p>Yeni talepler geldiğinde burada listelenecektir.</p>
            </div>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Müşteri</th>
                  <th>Tarihler</th>
                  <th>Durum</th>
                  <th>Detaylar</th>
                  <th>Oluşturulma</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking: any) => (
                  <tr key={booking.id}>
                    <td>
                      <div className={styles.userCell}>
                        <span className={styles.userName}>{booking.user?.name || 'İsimsiz'}</span>
                        <span className={styles.userContact}>{booking.user?.email}</span>
                        <span className={styles.userContact}>{booking.user?.phone}</span>
                      </div>
                    </td>
                    <td>
                      {booking.startDate} - {booking.endDate}
                    </td>
                    <td>
                      <span className={`${styles.statusBadge} ${booking.status === 'pending' ? styles.statusPending : styles.statusConfirmed}`}>
                        {booking.status === 'pending' ? 'Bekliyor' : 'Onaylandı'}
                      </span>
                    </td>
                    <td>
                      <div style={{ whiteSpace: 'pre-wrap', fontSize: '0.85rem' }}>
                        {booking.notes}
                      </div>
                    </td>
                    <td style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                      {new Date(booking.createdAt).toLocaleDateString('tr-TR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </main>
      </div>
    </div>
  );
}
