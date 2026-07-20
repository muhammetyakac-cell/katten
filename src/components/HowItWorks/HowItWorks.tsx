import { useTranslations } from 'next-intl';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  const t = useTranslations('howItWorks');
  const icons = ['📅', '🤝', '🏠', '📱'];

  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className="container">
        <div className="section__header text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="section__title">{t('sectionTitle')}</h2>
          <p className="section__description">{t('sectionSubtitle')}</p>
        </div>

        <div className={styles.timeline}>
          {icons.map((icon, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.iconWrapper}>
                {icon}
                <span className={styles.stepNumber}>{index + 1}</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{t(`steps.${index}.title`)}</h3>
                <p className={styles.description}>{t(`steps.${index}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
