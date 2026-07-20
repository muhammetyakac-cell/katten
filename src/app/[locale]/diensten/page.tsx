import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Pricing from '@/components/Pricing/Pricing';
import CTA from '@/components/CTA/CTA';
import styles from './diensten.module.css';

export default function ServicesPage() {
  const t = useTranslations('services');

  const services = [
    { icon: '🍽️', id: 'feeding' },
    { icon: '💧', id: 'water' },
    { icon: '🧹', id: 'litter' },
    { icon: '🎮', id: 'playtime' },
    { icon: '💊', id: 'medication' },
    { icon: '📹', id: 'bodycam' },
    { icon: '🩺', id: 'health' },
    { icon: '🌱', id: 'plants' },
    { icon: '📫', id: 'mail' },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.heroSection}>
          <div className="container">
            <span className={styles.heroLabel}>{t('pageSubtitle')}</span>
            <h1 className={styles.heroTitle}>{t('pageTitle')}</h1>
            <p className={styles.heroDescription}>{t('intro')}</p>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div key={service.id} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{t(`servicesList.${index}.title`)}</h3>
                  <p className={styles.serviceDescription}>{t(`servicesList.${index}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.pricingWrapper}>
          <Pricing />
        </div>
        
        <CTA />
      </main>
      <Footer />
    </>
  );
}
