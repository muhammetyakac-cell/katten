import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { getAllBlogPosts } from '@/lib/blog-data';

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

  // Add static routes for each locale
  routes.forEach((route) => {
    const languages: Record<string, string> = {};
    locales.forEach((locale) => {
      languages[locale] = `${host}/${locale}${route}`;
    });
    languages['x-default'] = `${host}/${defaultLocale}${route}`;

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

  // Add all blog posts to sitemap (SEO critical!)
  const allPosts = getAllBlogPosts();
  allPosts.forEach((post) => {
    sitemapEntries.push({
      url: `${host}/${post.locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  return sitemapEntries;
}
