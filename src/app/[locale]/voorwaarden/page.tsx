import { useTranslations } from 'next-intl';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from '../legal.module.css';

export default function TermsPage() {
  const t = useTranslations('terms');

  const sections: { title: string; content: string }[] = [];
  for (let i = 0; i < 8; i++) {
    sections.push({
      title: t(`sections.${i}.title`),
      content: t(`sections.${i}.content`),
    });
  }

  return (
    <>
      <Navbar />
      <main className={styles.legalPage}>
        <div className="container">
          <div className={styles.header}>
            <span className={styles.subtitle}>{t('pageSubtitle')}</span>
            <h1 className={styles.title}>{t('pageTitle')}</h1>
            <p className={styles.lastUpdated}>{t('lastUpdated')}</p>
          </div>
          <p className={styles.intro}>{t('intro')}</p>
          <div className={styles.sections}>
            {sections.map((section, index) => (
              <div key={index} className={styles.section}>
                <span className={styles.sectionNumber}>{index + 1}</span>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <p className={styles.sectionContent}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
