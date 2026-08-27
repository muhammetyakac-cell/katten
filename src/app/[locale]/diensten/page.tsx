import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Pricing from '@/components/Pricing/Pricing';
import FAQ from '@/components/FAQ/FAQ';
import CTA from '@/components/CTA/CTA';
import styles from './diensten.module.css';
import { Metadata } from 'next';

const dienstenMeta: Record<string, { title: string; description: string }> = {
  nl: { title: 'Alle Diensten — KattenHond | Kattenoppas & Hondenoppas Antwerpen', description: 'Ontdek alle diensten van KattenHond: dagelijkse huisbezoeken, hondenoppas, hondenuitlaatservice, medicatie, bodycam en meer in Antwerpen en Vlaanderen.' },
  en: { title: 'All Services — KattenHond | Cat & Dog Sitting Antwerp', description: 'Discover all KattenHond services: daily visits, dog sitting, dog walking, medication, bodycam and more in Antwerp and Flanders.' },
  fr: { title: 'Tous les Services — KattenHond | Garde Chat & Chien Anvers', description: 'Découvrez tous les services KattenHond : visites quotidiennes, garde de chien, promenade, médicaments, bodycam et plus à Anvers.' },
  tr: { title: 'Tüm Hizmetler — KattenHond | Kedi & Köpek Bakımı Antwerp', description: 'KattenHond hizmetlerini keşfedin: günlük ziyaretler, köpek bakıcılığı, köpek gezdirme, ilaç, yaka kamerası ve daha fazlası.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = dienstenMeta[locale] || dienstenMeta.nl;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://kattenhond.store/${locale}/diensten` },
    openGraph: { title: meta.title, description: meta.description, url: `https://kattenhond.store/${locale}/diensten`, type: 'website' },
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.description },
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  const tFooter = await getTranslations({ locale, namespace: 'footer' });

  const services = [
    
    { icon: '🏡', id: 'kattenoppas-aan-huis', slug: 'kattenoppas-aan-huis', titleNl: 'Kattenoppas aan Huis', titleEn: 'In-Home Cat Sitting', titleFr: 'Garde de Chat à Domicile', titleTr: 'Evde Kedi Bakımı' },
    { icon: '🏨', id: 'kattenpension-alternatief', slug: 'kattenpension-alternatief', titleNl: 'Kattenpension Alternatief', titleEn: 'Cat Boarding Alternative', titleFr: 'Alternative Pension', titleTr: 'Kedi Oteli Alternatifi' },
    { icon: '👩‍⚕️', id: 'professionele-kattensitter', slug: 'professionele-kattensitter', titleNl: 'Professionele Kattensitter', titleEn: 'Professional Cat Sitter', titleFr: 'Cat Sitter Professionnel', titleTr: 'Profesyonel Kedi Bakıcısı' },
    { icon: '🏠', id: 'daily-visits', slug: 'daily-visits', titleNl: 'Dagelijkse Huisbezoeken', titleEn: 'Daily Home Visits', titleFr: 'Visites Quotidiennes', titleTr: 'Günlük Ev Ziyaretleri' },
    { icon: '🐶', id: 'hondenoppas', slug: 'hondenoppas', titleNl: 'Hondenoppas aan Huis', titleEn: 'In-Home Dog Sitting', titleFr: 'Garde de Chien à Domicile', titleTr: 'Evde Köpek Bakıcılığı' },
    { icon: '🦮', id: 'hondenuitlaatservice', slug: 'hondenuitlaatservice', titleNl: 'Hondenuitlaatservice', titleEn: 'Dog Walking Service', titleFr: 'Service Promenade Chien', titleTr: 'Köpek Gezdirme Servisi' },
    
    { icon: '🌙', id: 'nachtoppas-housesitting', slug: 'nachtoppas-housesitting', titleNl: 'Nachtoppas & Housesitting', titleEn: 'Overnight Sitting', titleFr: 'Garde de Nuit', titleTr: 'Gece Bakımı' },
    { icon: '🐹', id: 'kleine-huisdieren', slug: 'kleine-huisdieren', titleNl: 'Kleine Huisdieren', titleEn: 'Small Pets Care', titleFr: 'Petits Animaux', titleTr: 'Küçük Evcil Hayvanlar' },
    { icon: '🍼', id: 'kitten-care', slug: 'kitten-care', titleNl: 'Kitten Care', titleEn: 'Kitten Care', titleFr: 'Soins Chatons', titleTr: 'Yavru Kedi Bakımı' },
    { icon: '🐾', id: 'puppy-care', slug: 'puppy-care', titleNl: 'Puppyverzorging & Begeleiding', titleEn: 'Puppy Care & Potty Breaks', titleFr: 'Soins pour Chiots', titleTr: 'Yavru Köpek (Puppy) Bakımı' },
    { icon: '🍽️', id: 'feeding', slug: 'feeding', titleNl: 'Voeding & Vers Water', titleEn: 'Feeding & Fresh Water', titleFr: 'Alimentation & Eau', titleTr: 'Beslenme ve Su' },
    { icon: '🧹', id: 'litter', slug: 'litter', titleNl: 'Kattenbak Hygiëne', titleEn: 'Litter Box Cleaning', titleFr: 'Hygiène de la Litière', titleTr: 'Kum Hijyeni' },
    { icon: '🎮', id: 'playtime', slug: 'playtime', titleNl: 'Spelen & Aandacht', titleEn: 'Playtime & Affection', titleFr: 'Jeux & Câlins', titleTr: 'Oyun ve İlgi' },
    { icon: '🩺', id: 'health', slug: 'health', titleNl: 'Gezondheidsmonitoring', titleEn: 'Health & Wellness Check', titleFr: 'Suivi de Santé', titleTr: 'Sağlık Takibi' },
    { icon: '💊', id: 'medication', slug: 'medication', titleNl: 'Medicatie Toediening', titleEn: 'Medication Administration', titleFr: 'Médicaments & Soins', titleTr: 'İlaç Uygulaması' },
    { icon: '📹', id: 'bodycam', slug: 'bodycam', titleNl: '100% HD Bodycam', titleEn: '100% HD Bodycam Proof', titleFr: 'Garantie Bodycam HD', titleTr: 'HD Yaka Kamerası' },
    { icon: '🌱', id: 'plants', slug: 'plants', titleNl: 'Plantenverzorging', titleEn: 'Plant Watering', titleFr: 'Arrosage Plantes', titleTr: 'Çiçek Sulama' },
    { icon: '📫', id: 'mail', slug: 'mail', titleNl: 'Post & Woningcontrole', titleEn: 'Mail & Home Check', titleFr: 'Courrier & Surveillance', titleTr: 'Posta ve Ev Güvenliği' },
  ];

  const districts = [
    
    { slug: 'antwerpen-centrum', name: 'Antwerpen Centrum & Meir', postal: '2000' },
    { slug: 'het-eilandje', name: 'Het Eilandje & MAS', postal: '2000' },
    { slug: 'zurenborg', name: 'Zurenborg & Cogels-Osylei', postal: '2018' },
    { slug: 'linkeroever', name: 'Linkeroever & Sint-Annastrand', postal: '2050' },
    { slug: 'willebroek', name: 'Willebroek & Blaasveld', postal: '2830' },
    { slug: 'mechelen', name: 'Mechelen Centrum & Omstreken', postal: '2800' },
    { slug: 'boom', name: 'Boom & Rupelstreek', postal: '2850' },
    { slug: 'brasschaat', name: 'Brasschaat & Vriesdonk', postal: '2930' },
    { slug: 'schoten', name: 'Schoten & Koningshof', postal: '2900' },
    { slug: 'kapellen', name: 'Kapellen & Hoogboom', postal: '2950' },
    { slug: 'edegem', name: 'Edegem & Molenveld', postal: '2650' },
    { slug: 'kontich', name: 'Kontich & Waarloos', postal: '2550' },
    { slug: 'mortsel', name: 'Mortsel & Fort 4', postal: '2640' },
    { slug: 'antwerpen-zuid', name: 'Antwerpen Zuid & Centrum', postal: '2000 & 2018' },
    { slug: 'berchem', name: 'Berchem & Zurenborg', postal: '2600' },
    { slug: 'deurne', name: 'Deurne & Rivierenhof', postal: '2100' },
    { slug: 'merksem', name: 'Merksem & Bouckenborgh', postal: '2170' },
    { slug: 'wilrijk', name: 'Wilrijk & Park van Eden', postal: '2610' },
    { slug: 'hoboken', name: 'Hoboken & Polder', postal: '2660' },
    { slug: 'borgerhout', name: 'Borgerhout & Te Boelaer', postal: '2140' },
    { slug: 'aartselaar', name: 'Aartselaar & Cleydael', postal: '2630' },
    { slug: 'zwijndrecht', name: 'Zwijndrecht & Linkeroever', postal: '2050' },
    { slug: 'lier', name: 'Lier & Zimmertoren', postal: '2500' },
    { slug: 'beveren', name: 'Beveren & Waasland', postal: '9120' },
    { slug: 'sint-niklaas', name: 'Sint-Niklaas', postal: '9100' },
    { slug: 'gent', name: 'Gent & Oost-Vlaanderen', postal: '9000' },
    { slug: 'brussel', name: 'Brussel / Bruxelles', postal: '1000' },
  ];

  const readMoreText = {
    nl: 'Bekijk details & Tarieven →',
    en: 'View details & Pricing →',
    fr: 'Détails & Tarifs →',
    tr: 'Detaylar ve Fiyatlar →'
  }[locale] || 'View details →';

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.heroSection}>
          <div className="container">
            <span className={styles.heroLabel}>🐾 KattenHond • {t('pageSubtitle')}</span>
            <h1 className={styles.heroTitle}>{t('pageTitle')}</h1>
            <p className={styles.heroDescription}>{t('intro')}</p>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className="container">
            <div className={styles.servicesGrid}>
              {services.map((service, index) => {
                const title = locale === 'nl' ? service.titleNl :
                              locale === 'fr' ? service.titleFr :
                              locale === 'tr' ? service.titleTr :
                              service.titleEn;
                const desc = index < 9 ? t(`servicesList.${index}.description`) :
                  (locale === 'nl' ? 'Professionele verzorging en persoonlijke aandacht aan huis met 100% HD Bodycam garantie.' :
                   locale === 'fr' ? 'Soins professionnels et attentionnés à domicile avec garantie vidéo Bodycam HD.' :
                   locale === 'tr' ? '100% HD Yaka kamerası güvencesiyle profesyonel evde bakım ve şefkatli ilgi.' :
                   'Professional in-home care with 100% HD Bodycam transparency.');

                return (
                  <div key={service.id} id={service.id} className={styles.serviceCard}>
                    <div className={styles.serviceIcon}>{service.icon}</div>
                    <h3 className={styles.serviceTitle}>{title}</h3>
                    <p className={styles.serviceDescription}>{desc}</p>
                    <div style={{ marginTop: '1.25rem' }}>
                      <Link href={`/diensten/${service.slug}`} className="btn btn--secondary" style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}>
                        {readMoreText}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* District Regions Navigation */}
        <section className="section" style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className={styles.heroLabel}>📍 {tFooter('serviceArea.title')}</span>
              <h2 style={{ fontSize: '2.25rem', fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}>
                {locale === 'nl' ? 'Onze Werkgebieden in Antwerpen & Vlaanderen' :
                 locale === 'fr' ? 'Nos Villes et Quartiers d\'Intervention' :
                 locale === 'tr' ? 'Hizmet Verdiğimiz Şehir ve İlçeler' :
                 'Our Service Districts & Cities in Flanders'}
              </h2>
              <p style={{ maxWidth: '650px', margin: '0.75rem auto 0', color: 'var(--color-text-secondary)' }}>
                {locale === 'nl' ? 'KattenHond is actief in Antwerpen, Willebroek, Mechelen, Brasschaat en omliggende gemeenten. Klik op uw gemeente voor lokale tarieven en beschikbaarheid.' :
                 locale === 'fr' ? 'KattenHond intervient à Anvers, Willebroek, Malines, Brasschaat et leurs environs. Cliquez sur votre commune pour les disponibilités.' :
                 locale === 'tr' ? 'KattenHond Anvers, Willebroek, Mechelen, Brasschaat ve çevre belediyelerde aktiftir. Bölgenizi seçerek müsaitlik durumunu inceleyin.' :
                 'KattenHond operates in Antwerp, Willebroek, Mechelen, Brasschaat and surrounding regions. Select your district for local rates and availability.'}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {districts.map((d) => (
                <Link
                  key={d.slug}
                  href={`/diensten/${d.slug}`}
                  className="glass-card"
                  style={{ padding: '1.5rem', textAlign: 'center', textDecoration: 'none', display: 'block', transition: 'all 0.3s ease' }}
                >
                  <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '0.5rem' }}>📍</span>
                  <h3 style={{ fontSize: '1.125rem', color: 'var(--color-text-primary)', marginBottom: '0.25rem' }}>{d.name}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary-light)' }}>Postcode {d.postal}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.pricingWrapper}>
          <Pricing />
        </div>

        <FAQ locale={locale} />
        
        <CTA />
      </main>
      <Footer />
    </>
  );
}
