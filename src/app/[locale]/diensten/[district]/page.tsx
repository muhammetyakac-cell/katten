import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import Pricing from '@/components/Pricing/Pricing';
import CTA from '@/components/CTA/CTA';
import { getDistrictBySlug, getAllDistricts } from '@/lib/district-data';
import styles from './district.module.css';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string; district: string }>;
}): Promise<Metadata> {
  const { locale, district: slug } = await params;
  const item = getDistrictBySlug(slug);

  if (!item) {
    return { title: 'District Not Found | Katten' };
  }

  const lang = (locale in item.name ? locale : 'nl') as keyof typeof item.name;

  return {
    title: `${item.title[lang]} | Katten`,
    description: item.description[lang],
    keywords: item.keywords[lang] || item.keywords.nl,
    openGraph: {
      title: item.title[lang],
      description: item.description[lang],
      images: [item.image],
    },
  };
}

export async function generateStaticParams() {
  const all = getAllDistricts();
  return all.map((d) => ({
    district: d.slug,
  }));
}

export default async function DistrictPage({
  params
}: {
  params: Promise<{ locale: string; district: string }>;
}) {
  const { locale, district: slug } = await params;
  const item = getDistrictBySlug(slug);

  if (!item) {
    notFound();
  }

  const lang = (locale in item.name ? locale : 'nl') as keyof typeof item.name;

  // LocalBusiness Schema for this exact District
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'PetService',
    name: `Katten — Kattensitservice ${item.name[lang]}`,
    description: item.description[lang],
    image: `https://katten.vercel.app${item.image}`,
    areaServed: {
      '@type': 'AdministrativeArea',
      name: item.name[lang],
      postalCode: item.postalCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: item.geo.latitude,
      longitude: item.geo.longitude,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Antwerpen',
      postalCode: item.postalCode,
      addressCountry: 'BE',
    },
    telephone: '+32470000000',
    priceRange: '€€',
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `https://katten.vercel.app/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Diensten',
        item: `https://katten.vercel.app/${locale}/diensten`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: item.name[lang],
        item: `https://katten.vercel.app/${locale}/diensten/${item.slug}`,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <section className={styles.heroSection}>
          <div className="container">
            <div className={styles.breadcrumb}>
              <Link href="/">Home</Link> <span>/</span> <Link href="/diensten">Diensten</Link> <span>/</span> <span className={styles.activeBreadcrumb}>{item.name[lang]}</span>
            </div>
            <span className={styles.districtBadge}>📍 Postcode {item.postalCode}</span>
            <h1 className={styles.title}>{item.title[lang]}</h1>
            <p className={styles.subtitle}>{item.subtitle[lang]}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.grid}>
              <div className={styles.mainContent}>
                <h2 className={styles.sectionHeading}>
                  {lang === 'nl' ? 'Waarom kiezen kattenbaasjes in ' + item.name[lang] + ' voor Katten?' :
                   lang === 'fr' ? 'Pourquoi choisir Katten à ' + item.name[lang] + '?' :
                   lang === 'tr' ? item.name[lang] + ' bölgesinde neden Katten seçilmeli?' :
                   'Why cat owners in ' + item.name[lang] + ' choose Katten?'}
                </h2>
                <p className={styles.text}>{item.description[lang]}</p>

                <div className={styles.highlightsBox}>
                  <h3>
                    {lang === 'nl' ? '✨ Voordelen in uw wijk (' + item.name[lang] + '):' :
                     lang === 'fr' ? '✨ Avantages dans votre quartier:' :
                     lang === 'tr' ? '✨ Bölgenizdeki Avantajlarımız:' :
                     '✨ Highlights in your area:'}
                  </h3>
                  <ul className={styles.highlightsList}>
                    {item.highlights[lang].map((h, i) => (
                      <li key={i}><span>🐾</span> {h}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.ctaBoxInline}>
                  <h3>
                    {lang === 'nl' ? 'Woont u in ' + item.name[lang] + '?' :
                     lang === 'fr' ? 'Vous habitez à ' + item.name[lang] + '?' :
                     lang === 'tr' ? item.name[lang] + ' bölgesinde mi oturuyorsunuz?' :
                     'Living in ' + item.name[lang] + '?'}
                  </h3>
                  <p>
                    {lang === 'nl' ? 'Boek vandaag nog een gratis kennismakingsgesprek aan huis. Wij komen graag bij u langs!' :
                     lang === 'fr' ? 'Réservez une rencontre gratuite à domicile dès aujourd\'hui!' :
                     lang === 'tr' ? 'Bugün evinizde ücretsiz bir tanışma randevusu alın. Kapınıza kadar geliyoruz!' :
                     'Book a free in-home meet & greet today. We come directly to your door!'}
                  </p>
                  <Link href="/contact" className="btn btn--primary btn--large">
                    🐾 {lang === 'nl' ? 'Gratis Kennismaking Boeken' : lang === 'fr' ? 'Réserver une Rencontre' : lang === 'tr' ? 'Ücretsiz Tanışma Randevusu' : 'Book Free Meet & Greet'}
                  </Link>
                </div>
              </div>

              <div className={styles.sidebar}>
                <div className={styles.card}>
                  <img src={item.image} alt={item.name[lang]} className={styles.sidebarImage} />
                  <div className={styles.sidebarInfo}>
                    <h4>📍 {item.name[lang]}</h4>
                    <p><strong>Postcode:</strong> {item.postalCode}</p>
                    <p><strong>Status:</strong> ✅ Actief & Beschikbaar</p>
                    <p><strong>Garantie:</strong> 📹 100% HD Bodycam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.pricingSection}>
          <Pricing />
        </div>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
