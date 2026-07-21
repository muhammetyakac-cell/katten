import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const host = 'https://katten.vercel.app'; // Update this to your real domain when purchased

export default function sitemap(): MetadataRoute.Sitemap {
  const defaultLocale = routing.defaultLocale;
  const locales = routing.locales;

  // The core routes of your application
  const routes = [
    '',
    '/diensten',
    '/over-ons',
    '/contact',
    '/blog',
    '/privacy',
    '/voorwaarden',
    '/cookies'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    // Determine alternating languages for this route
    const languages: Record<string, string> = {};
    locales.forEach((locale) => {
      languages[locale] = `${host}/${locale}${route}`;
    });
    // Add x-default pointing to the default locale
    languages['x-default'] = `${host}/${defaultLocale}${route}`;

    // Add entry for each locale so they appear as separate URLs in sitemap
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${host}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages,
        },
      });
    });
  });

  return sitemapEntries;
}
