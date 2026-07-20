import { useTranslations } from 'next-intl';
import styles from './Features.module.css';

export default function Features() {
  const t = useTranslations('features');
  
  const icons = ['🍽️', '📹', '📸', '🩺', '💊', '🚑', '🌱', '🛡️'];

  return (
    <section className={styles.features} id="features">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t('sectionTitle')}</h2>
          <p className="section__description">{t('sectionSubtitle')}</p>
        </div>

        <div className={styles.grid}>
          {icons.map((icon, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{icon}</div>
              <h3 className={styles.title}>{t(`items.${index}.title`)}</h3>
              <p className={styles.description}>{t(`items.${index}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
