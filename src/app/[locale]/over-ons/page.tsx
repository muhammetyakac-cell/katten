import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import CTA from '@/components/CTA/CTA';
import styles from './over-ons.module.css';
import { Metadata } from 'next';

const aboutMeta: Record<string, { title: string; description: string }> = {
  nl: { title: 'Over KattenHond — Wie Zijn Wij | Kattensitter Antwerpen', description: 'Leer het team achter KattenHond kennen. Professionele kattenverzorging en huisdierverzorging aan huis in Antwerpen door gediplomeerde biologen.' },
  en: { title: 'About KattenHond — Who We Are | Cat Sitter Antwerp', description: 'Meet the team behind KattenHond. Professional in-home cat and pet care in Antwerp by qualified biologists.' },
  fr: { title: 'À Propos de KattenHond — Qui Sommes-Nous | Garde de Chat Anvers', description: 'Découvrez l\'équipe derrière KattenHond. Garde professionnelle de chats et animaux à domicile à Anvers.' },
  tr: { title: 'KattenHond Hakkında — Biz Kimiz | Kedi Bakıcısı Antwerp', description: 'KattenHond ekibini tanıyın. Antwerp bölgesinde diplomalı biyologlar tarafından profesyonel evde kedi ve evcil hayvan bakımı.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = aboutMeta[locale] || aboutMeta.nl;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://kattenhond.store/${locale}/over-ons` },
    openGraph: { title: meta.title, description: meta.description, url: `https://kattenhond.store/${locale}/over-ons`, type: 'website' },
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.description },
  };
}

export default function AboutPage() {
  const t = useTranslations('about');

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['AboutPage', 'Organization'],
    name: 'KattenHond',
    url: 'https://kattenhond.store',
    logo: 'https://kattenhond.store/images/hero_background.png',
    description: t('pageSubtitle'),
    founder: {
      '@type': 'Person',
      name: 'KattenHond Team',
      jobTitle: 'Biologist & Founder'
    },
    areaServed: {
      '@type': 'City',
      name: 'Antwerp'
    }
  };
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className={styles.storyGrid}>
              <div className={styles.storyImageWrapper}>
                <Image src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1000&auto=format&fit=crop" alt="Cat care" className={styles.storyImage} width={1000} height={667} />
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
                <Image src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=1000&auto=format&fit=crop" alt="Biologist cat care" className={styles.bioImage} width={1000} height={667} />
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
              {[
                { name: 'Antwerpen Centrum', slug: 'antwerpen-zuid' },
                { name: 'Zuid', slug: 'antwerpen-zuid' },
                { name: 'Eilandje', slug: 'antwerpen-zuid' },
                { name: 'Berchem', slug: 'berchem' },
                { name: 'Borgerhout', slug: 'borgerhout' },
                { name: 'Deurne', slug: 'deurne' },
                { name: 'Merksem', slug: 'merksem' },
                { name: 'Hoboken', slug: 'hoboken' },
              ].map((area, idx) => (
                <Link key={idx} href={`/diensten/${area.slug}`} className={styles.areaTag} style={{ textDecoration: 'none', color: 'inherit' }}>{area.name}</Link>
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
