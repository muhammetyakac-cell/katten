import { useTranslations } from 'next-intl';
import styles from './Features.module.css';

export default function Features() {
  const t = useTranslations('features');
  
  const featureData = [
    { icon: '🍽️', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=500&auto=format&fit=crop' },
    { icon: '📹', img: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=500&auto=format&fit=crop' },
    { icon: '📸', img: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=500&auto=format&fit=crop' },
    { icon: '🩺', img: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=500&auto=format&fit=crop' },
    { icon: '💊', img: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=500&auto=format&fit=crop' },
    { icon: '🚑', img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=500&auto=format&fit=crop' },
    { icon: '🌱', img: 'https://images.unsplash.com/photo-1501820488136-72669149e0d4?q=80&w=500&auto=format&fit=crop' },
    { icon: '🛡️', img: 'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?q=80&w=500&auto=format&fit=crop' },
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
