import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getBookings, logoutAdmin, updateBookingStatus } from '@/lib/actions';
import styles from './admin.module.css';

// Client-side icons can just be emojis here since it's a server component
function StatusBadge({ status }: { status: string }) {
  switch (status) {
    case 'pending': return <span className={`${styles.badge} ${styles.badgePending}`}>Bekliyor</span>;
    case 'confirmed': return <span className={`${styles.badge} ${styles.badgeConfirmed}`}>Onaylandı</span>;
    case 'completed': return <span className={`${styles.badge} ${styles.badgeCompleted}`}>Tamamlandı</span>;
    case 'cancelled': return <span className={`${styles.badge} ${styles.badgeCancelled}`}>İptal Edildi</span>;
    default: return <span className={styles.badge}>{status}</span>;
  }
}

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
                  <th>Oluşturulma</th>
                  <th>Müşteri</th>
                  <th>Tarihler</th>
                  <th>Detaylar</th>
                  <th>Durum</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking: any) => (
                  <tr key={booking.id}>
                    <td>{new Date(booking.createdAt!).toLocaleDateString('tr-TR')}</td>
                    <td>
                      <strong>{booking.user.name}</strong><br/>
                      <span className={styles.mutedText}>{booking.user.email}</span><br/>
                      <span className={styles.mutedText}>{booking.user.phone}</span>
                    </td>
                    <td>
                      {new Date(booking.startDate).toLocaleDateString('tr-TR')} - {new Date(booking.endDate).toLocaleDateString('tr-TR')}
                    </td>
                    <td className={styles.notesCell}>
                      <pre className={styles.notesText}>{booking.notes}</pre>
                    </td>
                    <td>
                      <StatusBadge status={booking.status || 'pending'} />
                    </td>
                    <td>
                      <div className={styles.actionsCell}>
                        {booking.status === 'pending' && (
                          <>
                            <form action={updateBookingStatus} className={styles.actionForm}>
                              <input type="hidden" name="bookingId" value={booking.id} />
                              <input type="hidden" name="status" value="confirmed" />
                              <button type="submit" className={`${styles.actionBtn} ${styles.actionConfirm}`}>Onayla</button>
                            </form>
                            <form action={updateBookingStatus} className={styles.actionForm}>
                              <input type="hidden" name="bookingId" value={booking.id} />
                              <input type="hidden" name="status" value="cancelled" />
                              <button type="submit" className={`${styles.actionBtn} ${styles.actionCancel}`}>İptal</button>
                            </form>
                          </>
                        )}
                        {booking.status === 'confirmed' && (
                          <form action={updateBookingStatus} className={styles.actionForm}>
                            <input type="hidden" name="bookingId" value={booking.id} />
                            <input type="hidden" name="status" value="completed" />
                            <button type="submit" className={`${styles.actionBtn} ${styles.actionComplete}`}>Tamamla</button>
                          </form>
                        )}
                        {(booking.status === 'confirmed' || booking.status === 'completed') && (
                          <form action={updateBookingStatus} className={styles.actionForm}>
                            <input type="hidden" name="bookingId" value={booking.id} />
                            <input type="hidden" name="status" value="cancelled" />
                            <button type="submit" className={`${styles.actionBtn} ${styles.actionCancel}`}>İptal</button>
                          </form>
                        )}
                      </div>
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
