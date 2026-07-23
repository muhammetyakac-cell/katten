import { MetadataRoute } from 'next';

const host = 'https://www.kattensitter.be';

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
