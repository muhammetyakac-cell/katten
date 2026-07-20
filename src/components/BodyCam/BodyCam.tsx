'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import styles from './BodyCam.module.css';

export default function BodyCam() {
  const t = useTranslations('bodycam');
  const [time, setTime] = useState('');

  useEffect(() => {
    // Generate a realistic bodycam timestamp
    const updateTime = () => {
      const now = new Date();
      setTime(
        `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ` +
        `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')} REC`
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.bodyCam} id="bodycam">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className="section__label">{t('sectionSubtitle')}</span>
            <h2 className="section__title">{t('sectionTitle')}</h2>
            <p className="section__description">{t('description')}</p>

            <ul className={styles.features}>
              <li className={styles.featureItem}>
                <span className={styles.check}>✓</span>
                <span>{t('features.0')}</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.check}>✓</span>
                <span>{t('features.1')}</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.check}>✓</span>
                <span>{t('features.2')}</span>
              </li>
              <li className={styles.featureItem}>
                <span className={styles.check}>✓</span>
                <span>{t('features.3')}</span>
              </li>
            </ul>
          </div>

          <div className={styles.visual}>
            <div className={styles.cameraCard}>
              <img 
                src="/images/cat_bodycam.png" 
                alt="Cat on bodycam" 
                className={styles.cameraImage} 
              />
              {/* Decorative mesh background for the camera feel */}
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.15,
                backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)',
                backgroundSize: '10px 10px',
                pointerEvents: 'none'
              }} />
              
              <div className={styles.uiOverlay}>
                <div className={styles.uiTop}>
                  <div className={styles.recIndicator}>
                    <div className={`${styles.recDot} ${styles.recPulsing}`} />
                    REC
                  </div>
                  <div className={styles.battery}>
                    🔋 87%
                  </div>
                </div>
                
                <div className={styles.uiBottom}>
                  <div>CAM-01 [ANTWERPEN]</div>
                  <div>{time}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
