import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog-data';
import styles from './post.module.css';
import ReactMarkdown from 'react-markdown';

const ctaMeta: Record<string, { category: string; readTime: string; ctaTitle: string; ctaDesc: string; ctaBtn: string; backBtn: string }> = {
  nl: {
    category: 'Kattenoppas Advies',
    readTime: 'leestijd',
    ctaTitle: 'Klaar om met een gerust hart op reis te gaan?',
    ctaDesc: 'Boek vandaag nog een gratis kennismakingsgesprek met onze professionele kattenoppassers in Antwerpen.',
    ctaBtn: '🐾 Neem Contact Op',
    backBtn: '← Terug naar Blog',
  },
  en: {
    category: 'Cat Care Advice',
    readTime: 'read',
    ctaTitle: 'Ready to travel with peace of mind?',
    ctaDesc: 'Book a free meet & greet today with our professional cat sitters in Antwerp.',
    ctaBtn: '🐾 Contact Us',
    backBtn: '← Back to Blog',
  },
  fr: {
    category: 'Conseils Garde de Chats',
    readTime: 'de lecture',
    ctaTitle: 'Pret a voyager en toute serenite ?',
    ctaDesc: 'Reservez une rencontre gratuite avec nos gardes de chats professionnels a Anvers.',
    ctaBtn: '🐾 Contactez-nous',
    backBtn: '← Retour au Blog',
  },
  tr: {
    category: 'Kedi Bakim Tavsiyeleri',
    readTime: 'okuma',
    ctaTitle: 'Huzurla seyahate cikmaya hazir misiniz?',
    ctaDesc: 'Anvers teki profesyonel kedi bakicilarimizla ucretsiz bir tanisma gorusmesi ayirtin.',
    ctaBtn: '🐾 Iletisime Gecin',
    backBtn: '← Blog sayfasina don',
  },
};

// Dynamic SEO metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return { title: 'Post Not Found | Katten' };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.image],
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const ui = ctaMeta[locale] || ctaMeta[post.locale] || ctaMeta.nl;

  // JSON-LD Article schema for SEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.seoDescription,
    image: post.image.startsWith('/') ? `https://katten.vercel.app${post.image}` : post.image,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Katten - Kattensitservice Antwerpen',
    },
    inLanguage: post.locale,
    keywords: post.keywords.join(', '),
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
        name: 'Blog',
        item: `https://katten.vercel.app/${locale}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://katten.vercel.app/${locale}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <article>
          <header className={styles.postHero}>
            <div className="container">
              <Link href="/blog" className={styles.backLink}>{ui.backBtn}</Link>
              <span className={styles.category}>{ui.category}</span>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <span>🗓️</span> {new Date(post.date).toLocaleDateString(post.locale === 'nl' ? 'nl-BE' : post.locale === 'fr' ? 'fr-BE' : post.locale === 'tr' ? 'tr-TR' : 'en-GB')}
                </div>
                <div className={styles.metaItem}>
                  <span>⏱️</span> {post.readTime} {ui.readTime}
                </div>
                <div className={styles.metaItem}>
                  <span>✍️</span> {post.author}
                </div>
              </div>
            </div>
          </header>

          <div className="container">
            <div className={styles.imageWrapper}>
              <img src={post.image} alt={post.title} className={styles.image} loading="lazy" />
            </div>

            <div className={styles.contentContainer}>
              <div className={styles.content}>
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>

              {/* SEO Keywords Tags */}
              <div className={styles.tags}>
                {post.keywords.map((kw, i) => (
                  <span key={i} className={styles.tag}>{kw}</span>
                ))}
              </div>
              
              <div className={styles.ctaBox}>
                <h3>{ui.ctaTitle}</h3>
                <p>{ui.ctaDesc}</p>
                <Link href="/contact" className="btn btn--primary">
                  {ui.ctaBtn}
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
