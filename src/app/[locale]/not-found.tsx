import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 1rem',
        }}>
          <div>
            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>??</div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '3rem',
              color: 'var(--color-text-primary)',
              marginBottom: '1rem',
            }}>
              404 — Pagina Niet Gevonden
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--color-text-secondary)',
              maxWidth: '500px',
              margin: '0 auto 2rem',
              lineHeight: 1.6,
            }}>
              Oeps! Deze pagina bestaat niet of is verplaatst. Onze katten hebben deze pagina waarschijnlijk verstopt.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/" className="btn btn--primary btn--large">
                ?? Terug naar Home
              </Link>
              <Link href="/diensten" className="btn btn--secondary btn--large">
                ?? Onze Diensten
              </Link>
              <Link href="/contact" className="btn btn--secondary btn--large">
                ?? Contact
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
