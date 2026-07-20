'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './contact.module.css';
import { submitBooking } from '@/lib/actions';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const result = await submitBooking(formData);
      
      if (result.success) {
        setSubmitted(true);
      } else {
        alert(result.error || 'Bir hata oluştu.');
      }
    } catch (err) {
      alert('Beklenmeyen bir hata oluştu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.heroSection}>
          <div className="container">
            <h1 className={styles.heroTitle}>{t('pageTitle')}</h1>
            <p className={styles.heroSubtitle}>{t('pageSubtitle')}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.contactGrid}>
              
              {/* Contact Info */}
              <div className={styles.infoPanel}>
                <h2 className={styles.infoPanelTitle}>
                  <span>💬</span>
                  {t('info.title')}
                </h2>
                
                <div className={styles.infoItems}>
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>📍</div>
                    <div className={styles.infoContent}>
                      <span className={styles.infoValue}>{t('info.address')}</span>
                    </div>
                  </div>
                  
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>📞</div>
                    <div className={styles.infoContent}>
                      <span className={styles.infoValue}>
                        <a href="tel:+3231234567">{t('info.phone')}</a>
                      </span>
                    </div>
                  </div>
                  
                  <div className={styles.infoItem}>
                    <div className={styles.infoIcon}>✉️</div>
                    <div className={styles.infoContent}>
                      <span className={styles.infoValue}>
                        <a href="mailto:info@katten-sit.be">{t('info.email')}</a>
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.infoDivider}></div>
                
                <div className={styles.hoursSection}>
                  <h3 className={styles.hoursTitle}>
                    <span>⏰</span>
                  </h3>
                  <p className={styles.hoursText}>{t('info.hours')}</p>
                  <div className={styles.emergencyBadge}>
                    <span>🚨</span>
                    {t('info.emergency')}
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className={styles.formPanel}>
                {submitted ? (
                  <div className={styles.successMessage}>
                    <div className={styles.successIcon}>🎉</div>
                    <h3 className={styles.successTitle}>{t('form.successTitle')}</h3>
                    <p className={styles.successText}>{t('form.successMessage')}</p>
                  </div>
                ) : (
                  <>
                    <h2 className={styles.formTitle}>
                      <span>📅</span>
                      {t('form.title')}
                    </h2>
                    
                    <form className={styles.formGrid} onSubmit={handleSubmit}>
                      <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.formLabel}>{t('form.firstName')}</label>
                        <input type="text" id="name" name="name" required className={styles.formInput} placeholder={t('form.firstNamePlaceholder')} />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.formLabel}>{t('form.email')}</label>
                        <input type="email" id="email" name="email" required className={styles.formInput} placeholder={t('form.emailPlaceholder')} />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.formLabel}>{t('form.phone')}</label>
                        <input type="tel" id="phone" name="phone" required className={styles.formInput} placeholder={t('form.phonePlaceholder')} />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="cats" className={styles.formLabel}>{t('form.numberOfCats')}</label>
                        <input type="number" id="cats" name="cats" min="1" max="10" required className={styles.formInput} placeholder="1" />
                      </div>
                      
                      <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                        <label htmlFor="service" className={styles.formLabel}>{t('form.plan')}</label>
                        <select id="service" name="service" required className={`${styles.formInput} ${styles.formSelect}`}>
                          <option value="basis">{t('form.planOptions.basis')}</option>
                          <option value="standaard">{t('form.planOptions.standaard')}</option>
                          <option value="premium">{t('form.planOptions.premium')}</option>
                        </select>
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="startDate" className={styles.formLabel}>{t('form.startDate')}</label>
                        <input type="date" id="startDate" name="startDate" required className={styles.formInput} />
                      </div>
                      
                      <div className={styles.formGroup}>
                        <label htmlFor="endDate" className={styles.formLabel}>{t('form.endDate')}</label>
                        <input type="date" id="endDate" name="endDate" required className={styles.formInput} />
                      </div>
                      
                      <div className={`${styles.formGroup} ${styles.formGroupFull}`}>
                        <label htmlFor="message" className={styles.formLabel}>{t('form.message')}</label>
                        <textarea id="message" name="message" className={`${styles.formInput} ${styles.formTextarea}`} placeholder={t('form.messagePlaceholder')}></textarea>
                      </div>
                      
                      <div className={styles.formActions}>
                        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                          {isSubmitting ? t('form.submitting') : t('form.submit')}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
