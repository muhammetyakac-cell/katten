import { useTranslations } from 'next-intl';
import styles from './Features.module.css';

export default function Features() {
  const t = useTranslations('features');
  
  const featureData = [
    { icon: '🍽️', img: '/images/cat_feeding.png' },
    { icon: '📹', img: '/images/cat_bodycam.png' },
    { icon: '📸', img: '/images/cat_playing.png' },
    { icon: '🩺', img: '/images/cat_health.png' },
    { icon: '💊', img: '/images/cat_meds.png' },
    { icon: '🚑', img: '/images/cat_emergency.png' },
    { icon: '🌱', img: '/images/cat_plants.png' },
    { icon: '🛡️', img: '/images/cat_security.png' },
  ];

  return (
    <section className={styles.features} id="features">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t('sectionTitle')}</h2>
          <p className="section__description">{t('sectionSubtitle')}</p>
        </div>

        <div className={styles.grid}>
          {featureData.map((data, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={data.img} alt={t(`items.${index}.title`)} className={styles.cardImage} />
                <div className={styles.iconOverlay}>{data.icon}</div>
              </div>
              <h3 className={styles.title}>{t(`items.${index}.title`)}</h3>
              <p className={styles.description}>{t(`items.${index}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
