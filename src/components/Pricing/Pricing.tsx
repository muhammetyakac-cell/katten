import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import styles from './Pricing.module.css';

export default function Pricing() {
  const t = useTranslations('pricing');

  return (
    <section className={styles.pricing} id="pricing">
      <div className="container">
        <div className="section__header text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="section__title">{t('sectionTitle')}</h2>
          <p className="section__description">{t('sectionSubtitle')}</p>
        </div>

        <div className={styles.grid}>
          {/* Basis Plan */}
          <div className={styles.card}>
            <h3 className={styles.name}>{t('plans.0.name')}</h3>
            <div className={styles.priceWrapper}>
              <span className={styles.currency}>€</span>
              <span className={styles.price}>{t('plans.0.price')}</span>
              <span className={styles.period}>{t('perVisit')}</span>
            </div>
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}><span className={styles.check}>✓</span><span>{t('plans.0.features.0')}</span></li>
              <li className={styles.featureItem}><span className={styles.check}>✓</span><span>{t('plans.0.features.1')}</span></li>
              <li className={styles.featureItem}><span className={styles.check}>✓</span><span>{t('plans.0.features.2')}</span></li>
            </ul>
            <div className={styles.buttonWrapper}>
              <Link href="/contact" className={`btn btn--secondary ${styles.cardButton}`}>
                {t('plans.0.cta')}
              </Link>
            </div>
          </div>

          {/* Standaard Plan (Popular) */}
          <div className={styles.cardPopular}>
            <div className={styles.badge}>{t('mostPopular')}</div>
            <h3 className={styles.name}>{t('plans.1.name')}</h3>
            <div className={styles.priceWrapper}>
              <span className={styles.currency}>€</span>
              <span className={styles.price}>{t('plans.1.price')}</span>
              <span className={styles.period}>{t('perVisit')}</span>
            </div>
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}><span className={styles.check}>✓</span><span>{t('plans.1.features.0')}</span></li>
              <li className={styles.featureItem}><span className={styles.check}>✓</span><span>{t('plans.1.features.1')}</span></li>
              <li className={styles.featureItem}><span className={styles.check}>✓</span><span>{t('plans.1.features.2')}</span></li>
              <li className={styles.featureItem}><span className={styles.check}>✓</span><span>{t('plans.1.features.3')}</span></li>
            </ul>
            <div className={styles.buttonWrapper}>
              <Link href="/contact" className={`btn btn--primary ${styles.cardButton}`}>
                {t('plans.1.cta')}
              </Link>
            </div>
          </div>

          {/* Premium Plan */}
          <div className={styles.card}>
            <h3 className={styles.name}>{t('plans.2.name')}</h3>
            <div className={styles.priceWrapper}>
              <span className={styles.currency}>€</span>
              <span className={styles.price}>{t('plans.2.price')}</span>
              <span className={styles.period}>{t('perVisit')}</span>
            </div>
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}><span className={styles.check}>✓</span><span>{t('plans.2.features.0')}</span></li>
              <li className={styles.featureItem}><span className={styles.check}>✓</span><span>{t('plans.2.features.1')}</span></li>
              <li className={styles.featureItem}><span className={styles.check}>✓</span><span>{t('plans.2.features.2')}</span></li>
              <li className={styles.featureItem}><span className={styles.check}>✓</span><span>{t('plans.2.features.3')}</span></li>
              <li className={styles.featureItem}><span className={styles.check}>✓</span><span>{t('plans.2.features.4')}</span></li>
            </ul>
            <div className={styles.buttonWrapper}>
              <Link href="/contact" className={`btn btn--secondary ${styles.cardButton}`}>
                {t('plans.2.cta')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
