import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { routing } from '@/i18n/routing';
import "../globals.css";

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  // Use next-intl server-side getTranslations
  const { getTranslations } = await import('next-intl/server');
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: "website",
      locale: locale,
    },
    alternates: {
      canonical: '/',
      languages: {
        'nl': '/nl',
        'en': '/en',
        'fr': '/fr',
        'tr': '/tr',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  // LocalBusiness Structured Data for Local SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PetService',
    name: 'Katten — Kattensitservice',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop',
    description: messages?.metadata ? (messages.metadata as any).description : 'Professionele kattenverzorging aan huis in de regio Antwerpen.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Antwerpen',
      addressCountry: 'BE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.2194,
      longitude: 4.4025
    },
    areaServed: {
      '@type': 'City',
      name: 'Antwerpen'
    },
    telephone: '+32470000000',
    priceRange: '€€',
    founder: {
      '@type': 'Person',
      name: 'Biologist Founder'
    }
  };

  return (
    <html lang={locale} className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <link rel="alternate" hrefLang="nl" href="https://katten.vercel.app/nl" />
        <link rel="alternate" hrefLang="en" href="https://katten.vercel.app/en" />
        <link rel="alternate" hrefLang="fr" href="https://katten.vercel.app/fr" />
        <link rel="alternate" hrefLang="tr" href="https://katten.vercel.app/tr" />
        <link rel="alternate" hrefLang="x-default" href="https://katten.vercel.app/nl" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
