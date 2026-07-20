import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import CTA from '@/components/CTA/CTA';
import styles from './over-ons.module.css';

export default function AboutPage() {
  const t = useTranslations('about');
  const th = useTranslations('hero');

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.heroSection}>
          <div className="container">
            <h1 className={styles.heroTitle}>{t('pageTitle')}</h1>
            <p className={styles.heroSubtitle}>{t('pageSubtitle')}</p>
          </div>
        </section>

        {/* Story */}
        <section className={styles.storySection}>
          <div className="container">
            <div className={styles.storyGrid}>
              <div className={styles.storyImageWrapper}>
                <img src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1000&auto=format&fit=crop" alt="Cat care" className={styles.storyImage} />
              </div>
              <div className={styles.storyCard}>
                <h2 className={styles.storyTitle}>
                  <span className={styles.storyTitleIcon}>📖</span>
                  {t('story.title')}
                </h2>
                <p className={styles.storyParagraph}>{t('story.paragraphs.0')}</p>
                <p className={styles.storyParagraph}>{t('story.paragraphs.1')}</p>
                <p className={styles.storyParagraph}>{t('story.paragraphs.2')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section (Biologist) */}
        <section className={styles.bioSection}>
          <div className="container">
            <div className={styles.bioGrid}>
              <div className={styles.bioCard}>
                <h2 className={styles.storyTitle}>
                  <span className={styles.storyTitleIcon}>🔬</span>
                  {t('bio.title')}
                </h2>
                <p className={styles.storyParagraph}>{t('bio.text')}</p>
              </div>
              <div className={styles.bioImageWrapper}>
                <img src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=1000&auto=format&fit=crop" alt="Biologist cat care" className={styles.bioImage} />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className={styles.valuesSection}>
          <div className="container">
            <h2 className={styles.valuesSectionTitle}>{t('values.title')}</h2>
            <div className={styles.valuesGrid}>
              {[0, 1, 2, 3].map((index) => (
                <div key={index} className={styles.valueCard}>
                  <div className={styles.valueIcon}>{['🤝', '🔍', '❤️', '⭐'][index]}</div>
                  <h3 className={styles.valueTitle}>{t(`values.items.${index}.title`)}</h3>
                  <p className={styles.valueDescription}>{t(`values.items.${index}.description`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className={styles.bodycamSection}>
          <div className="container">
            <div className={styles.bodycamCard}>
              <div>
                <h2 className={styles.bodycamTitle}>
                  <span className={styles.bodycamTitleIcon}>🎯</span>
                  {t('mission.title')}
                </h2>
                <p className={styles.bodycamText}>{t('mission.text')}</p>
              </div>
              <div className={styles.bodycamVisual}>✨</div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className={styles.serviceAreaSection}>
          <div className="container container--narrow">
            <h2 className={styles.serviceAreaTitle}>{t('serviceArea.title')}</h2>
            <p className={styles.serviceAreaText}>{t('serviceArea.text')}</p>
            <div className={styles.areasGrid}>
              {['Antwerpen Centrum', 'Zuid', 'Eilandje', 'Berchem', 'Borgerhout', 'Deurne', 'Merksem', 'Hoboken'].map((area, idx) => (
                <div key={idx} className={styles.areaTag}>{area}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsGrid}>
              {[0, 1, 2, 3].map((index) => (
                <div key={index} className={styles.statCard}>
                  <div className={styles.statIcon}>{['📅', '🐱', '🏠', '💖'][index]}</div>
                  <div className={styles.statValue}>{['5+', '500+', '2000+', '100%'][index]}</div>
                  <div className={styles.statLabel}>
                    {index === 0 && 'Years'}
                    {index === 1 && th('stats.cats')}
                    {index === 2 && th('stats.visits')}
                    {index === 3 && th('stats.rating')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <CTA />
      </main>
      <Footer />
    </>
  );
}
