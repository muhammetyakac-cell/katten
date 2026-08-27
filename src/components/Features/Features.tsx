import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import styles from './Features.module.css';

export default function Features() {
  const t = useTranslations('features');
  
  const featureData = [
    { icon: '🍽️', img: '/images/cat_feeding.png', slug: 'feeding' },
    { icon: '📹', img: '/images/cat_bodycam.png', slug: 'bodycam' },
    { icon: '📸', img: '/images/cat_playing.png', slug: 'playtime' },
    { icon: '🩺', img: '/images/cat_health.png', slug: 'health' },
    { icon: '💊', img: '/images/cat_meds.png', slug: 'medication' },
    { icon: '🚑', img: '/images/cat_emergency.png', slug: 'daily-visits' },
    { icon: '🌱', img: '/images/cat_plants.png', slug: 'plants' },
    { icon: '🛡️', img: '/images/cat_security.png', slug: 'mail' },
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
            <Link key={index} href={`/diensten/${data.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image src={data.img} alt={t(`items.${index}.title`)} className={styles.cardImage} width={400} height={300} />
                  <div className={styles.iconOverlay}>{data.icon}</div>
                </div>
                <h3 className={styles.title}>{t(`items.${index}.title`)}</h3>
                <p className={styles.description}>{t(`items.${index}.description`)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
