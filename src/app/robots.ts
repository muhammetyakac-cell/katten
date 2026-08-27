import { MetadataRoute } from 'next';

const host = 'https://kattenhond.store';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/*/admin/'],
    },
    sitemap: `${host}/sitemap.xml`,
  };
}
