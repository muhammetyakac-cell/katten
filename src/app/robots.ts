import { MetadataRoute } from 'next';

const host = 'https://katten.vercel.app'; // Update to real domain when purchased

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
