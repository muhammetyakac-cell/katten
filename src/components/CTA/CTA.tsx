import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import styles from './CTA.module.css';

export default function CTA() {
  const t = useTranslations('cta');

  return (
    <section className={styles.cta} id="cta">
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>{t('title')}</h2>
          <p className={styles.description}>{t('subtitle')}</p>
          <div className={styles.buttons}>
            <Link href="/contact" className="btn btn--primary btn--large">
              {t('primaryButton')}
            </Link>
            <Link href="/diensten" className="btn btn--secondary btn--large">
              {t('secondaryButton')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
