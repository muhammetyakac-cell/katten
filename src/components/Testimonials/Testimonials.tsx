import { useTranslations } from 'next-intl';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  
  // Generating arrays of length 3 to map over based on the json structure
  const items = [0, 1, 2];

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">
        <div className="section__header text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 className="section__title">{t('sectionTitle')}</h2>
          <p className="section__description">{t('sectionSubtitle')}</p>
        </div>

        <div className={styles.grid}>
          {items.map((index) => (
            <div key={index} className={styles.card}>
              <div className={styles.quoteIcon}>"</div>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>"{t(`items.${index}.text`)}"</p>
              
              <div className={styles.authorWrapper}>
                <div className={styles.avatar}>{['😺', '😸', '😻'][index]}</div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{t(`items.${index}.name`)}</span>
                  <span className={styles.location}>{t(`items.${index}.location`)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
