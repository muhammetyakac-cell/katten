'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.floatingCat + ' ' + styles.cat1}>🐱</div>
      <div className={styles.floatingCat + ' ' + styles.cat2}>🐾</div>
      <div className={styles.floatingCat + ' ' + styles.cat3}>🐈</div>
      <div className={styles.floatingCat + ' ' + styles.cat4}>🧶</div>
      
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.title} animate-fade-in-up`}>
            {t('titleStart')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h1>
          <p className={`${styles.subtitle} animate-fade-in-up delay-200`}>
            {t('subtitle')}
          </p>
          
          <div className={`${styles.actions} animate-fade-in-up delay-400`}>
            <Link href="/contact" className="btn btn--primary btn--large" id="hero-book-btn">
              {t('bookNow')}
            </Link>
            <Link href="/diensten" className="btn btn--secondary btn--large" id="hero-learn-btn">
              {t('learnMore')}
            </Link>
          </div>

          <div className={`glass-card ${styles.statsRow} animate-fade-in-up delay-600`}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>500+</span>
              <span className={styles.statLabel}>{t('stats.cats')}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>2000+</span>
              <span className={styles.statLabel}>{t('stats.visits')}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>100%</span>
              <span className={styles.statLabel}>{t('stats.bodycam')}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>4.9★</span>
              <span className={styles.statLabel}>{t('stats.rating')}</span>
            </div>
          </div>
        </div>

        <div className={`${styles.heroImageWrapper} animate-fade-in-up delay-400`}>
          <img 
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop" 
            alt="Happy cat looking at camera" 
            className={styles.heroImage} 
          />
        </div>
      </div>
    </section>
  );
}
