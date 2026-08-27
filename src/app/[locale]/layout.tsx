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
    metadataBase: new URL('https://kattenhond.store'),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale,
      siteName: 'KattenHond',
      url: 'https://kattenhond.store',
      images: [{ url: '/images/hero_background.png', width: 1200, height: 630, alt: 'KattenHond — Kattensitservice & Huisdierverzorging' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/hero_background.png'],
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
    name: 'KattenHond — Kattensitservice & Huisdierverzorging',
    image: 'https://kattenhond.store/images/hero_background.png',
    description: messages?.metadata ? (messages.metadata as any).description : 'Professionele kattenverzorging aan huis in de regio Antwerpen door KattenHond.',
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
    telephone: '+32475940656',
    priceRange: '€€',
    founder: {
      '@type': 'Person',
      name: 'KattenHond Team'
    }
  };

  return (
    <html lang={locale} className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          type="text/javascript"
          data-cmp-ab="1"
          src="https://cdn.consentmanager.net/delivery/autoblocking/9ec20d2c62816.js"
          data-cmp-host="b.delivery.consentmanager.net"
          data-cmp-cdn="cdn.consentmanager.net"
          data-cmp-codesrc="16"
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18130314578" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18130314578');
            `,
          }}
        />
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
