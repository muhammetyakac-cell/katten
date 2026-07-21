'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import styles from './Hero.module.css';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className={styles.hero} id="hero">
      {/* Floating cute cat emojis */}
      <div className={styles.floatingCat + ' ' + styles.cat1}>🐱</div>
      <div className={styles.floatingCat + ' ' + styles.cat2}>🐾</div>
      <div className={styles.floatingCat + ' ' + styles.cat3}>🐈</div>
      <div className={styles.floatingCat + ' ' + styles.cat4}>🧶</div>
      <div className={styles.floatingCat + ' ' + styles.cat5}>😻</div>
      <div className={styles.floatingCat + ' ' + styles.cat6}>🐾</div>
      <div className={styles.floatingCat + ' ' + styles.cat7}>💕</div>
      <div className={styles.floatingCat + ' ' + styles.cat8}>🐱</div>

      {/* Paw trail decoration */}
      <div className={styles.pawTrail}>
        {Array.from({length: 8}).map((_, i) => (
          <span key={i} className={styles.pawPrint} style={{ animationDelay: `${i * 0.3}s` }}>🐾</span>
        ))}
      </div>
      
      <div className={`container ${styles.heroContent}`}>
        <div className={`${styles.catBadge} animate-fade-in-up`}>
          <span>😻</span> Antwerpen
        </div>
        <h1 className={`${styles.title} animate-fade-in-up`}>
          {t('titleStart')} <span className="gradient-text">{t('titleHighlight')}</span>
        </h1>
        <p className={`${styles.subtitle} animate-fade-in-up delay-200`}>
          {t('subtitle')}
        </p>
        
        <div className={`${styles.actions} animate-fade-in-up delay-400`}>
          <Link href="/contact" className={`btn btn--primary btn--large ${styles.cuteBtn}`} id="hero-book-btn">
            🐾 {t('bookNow')}
          </Link>
          <Link href="/diensten" className={`btn btn--secondary btn--large ${styles.cuteBtn}`} id="hero-learn-btn">
            😺 {t('learnMore')}
          </Link>
        </div>

        <div className={`${styles.statsRow} animate-fade-in-up delay-600`}>
          <div className={styles.statItem}>
            <span className={styles.statEmoji}>🐱</span>
            <span className={styles.statValue}>500+</span>
            <span className={styles.statLabel}>{t('stats.cats')}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statEmoji}>🏠</span>
            <span className={styles.statValue}>2000+</span>
            <span className={styles.statLabel}>{t('stats.visits')}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statEmoji}>📹</span>
            <span className={styles.statValue}>100%</span>
            <span className={styles.statLabel}>{t('stats.bodycam')}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statEmoji}>⭐</span>
            <span className={styles.statValue}>4.9</span>
            <span className={styles.statLabel}>{t('stats.rating')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
