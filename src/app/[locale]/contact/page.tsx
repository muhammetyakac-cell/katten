import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './contact.module.css';
import ContactForm from './ContactForm';
import { Metadata } from 'next';

const contactMeta: Record<string, { title: string; description: string }> = {
  nl: { title: 'Contact & Reserveren — KattenHond | Boek Kattenoppas Antwerpen', description: 'Neem contact op met KattenHond voor kattenoppas en hondenoppas in Antwerpen. Boek online of bel +32 475 94 06 56.' },
  en: { title: 'Contact & Book — KattenHond | Cat Sitter Antwerp', description: 'Contact KattenHond for cat and dog sitting in Antwerp. Book online or call +32 475 94 06 56.' },
  fr: { title: 'Contact & Réserver — KattenHond | Garde de Chat Anvers', description: 'Contactez KattenHond pour la garde de chats et chiens à Anvers. Réservez en ligne ou appelez +32 475 94 06 56.' },
  tr: { title: 'İletişim & Rezervasyon — KattenHond | Kedi Bakıcısı Antwerp', description: 'Antwerp\'te kedi ve köpek bakımı için KattenHond ile iletişime geçin. Online rezervasyon yapın veya +32 475 94 06 56 arayın.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = contactMeta[locale] || contactMeta.nl;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://kattenhond.store/${locale}/contact` },
    openGraph: { title: meta.title, description: meta.description, url: `https://kattenhond.store/${locale}/contact`, type: 'website' },
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.description },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

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
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
