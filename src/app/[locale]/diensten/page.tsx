import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Pricing from '@/components/Pricing/Pricing';
import FAQ from '@/components/FAQ/FAQ';
import CTA from '@/components/CTA/CTA';
import styles from './diensten.module.css';

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  const tFooter = await getTranslations({ locale, namespace: 'footer' });

  const services = [
    { icon: '🏠', id: 'daily-visits', slug: 'daily-visits' },
    { icon: '🍽️', id: 'feeding', slug: 'feeding' },
    { icon: '🧹', id: 'litter', slug: 'litter' },
    { icon: '🎮', id: 'playtime', slug: 'playtime' },
    { icon: '💊', id: 'medication', slug: 'medication' },
    { icon: '📹', id: 'bodycam', slug: 'bodycam' },
    { icon: '🩺', id: 'health', slug: 'health' },
    { icon: '🌱', id: 'plants', slug: 'plants' },
    { icon: '📫', id: 'mail', slug: 'mail' },
  ];

  const districts = [
    { slug: 'antwerpen-zuid', name: tFooter('districts.zuid'), postal: '2000 & 2018' },
    { slug: 'berchem', name: tFooter('districts.berchem'), postal: '2600' },
    { slug: 'deurne', name: tFooter('districts.deurne'), postal: '2100' },
    { slug: 'merksem', name: tFooter('districts.merksem'), postal: '2170' },
    { slug: 'wilrijk', name: tFooter('districts.wilrijk'), postal: '2610' },
  ];

  const readMoreText = {
    nl: 'Lees meer & Bekijk details →',
    en: 'Read more & View details →',
    fr: 'En savoir plus & Détails →',
    tr: 'Detayları İncele →'
  }[locale] || 'Read more →';

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.heroSection}>
          <div className="container">
            <span className={styles.heroLabel}>🐾 {t('pageSubtitle')}</span>
            <h1 className={styles.heroTitle}>{t('pageTitle')}</h1>
            <p className={styles.heroDescription}>{t('intro')}</p>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div key={service.id} id={service.id} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{t(`servicesList.${index}.title`)}</h3>
                  <p className={styles.serviceDescription}>{t(`servicesList.${index}.description`)}</p>
                  <div style={{ marginTop: '1.25rem' }}>
                    <Link href={`/diensten/${service.slug}`} className="btn btn--secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                      {readMoreText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* District Regions Navigation */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className={styles.heroLabel}>📍 {tFooter('serviceArea.title')}</span>
              <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}>
                {locale === 'nl' ? 'Onze Werkgebieden in Antwerpen' :
                 locale === 'fr' ? 'Nos Quartiers d\'Intervention à Anvers' :
                 locale === 'tr' ? 'Anvers\'teki Hizmet Bölgelerimiz' :
                 'Our Antwerp Service Districts'}
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {districts.map((d) => (
                <Link
                  key={d.slug}
                  href={`/diensten/${d.slug}`}
                  className="glass-card"
                  style={{ padding: '1.5rem', textAlign: 'center', textDecoration: 'none', display: 'block', transition: 'all 0.3s ease' }}
                >
                  <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '0.5rem' }}>📍</span>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>{d.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary-light)' }}>Postcode {d.postal}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.pricingWrapper}>
          <Pricing />
        </div>

        <FAQ locale={locale} />
        
        <CTA />
      </main>
      <Footer />
    </>
  );
}
