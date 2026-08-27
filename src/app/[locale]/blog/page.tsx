import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { getBlogPostsByLocale } from '@/lib/blog-data';
import styles from './blog.module.css';
import { Metadata } from 'next';

const blogPageMeta: Record<string, { title: string; description: string }> = {
  nl: { title: 'KattenHond Blog — Tips & Advies over Kattenverzorging', description: 'Handige tips, verhalen en advies over kattenverzorging en hondenoppas in Antwerpen. Geschreven door een gediplomeerd bioloog.' },
  en: { title: 'KattenHond Blog — Cat Care Tips & Advice', description: 'Helpful tips, stories and advice about cat and dog care in Antwerp. Written by a qualified biologist.' },
  fr: { title: 'Blog KattenHond — Conseils Garde de Chats', description: 'Conseils utiles, histoires et avis sur la garde de chats et chiens à Anvers. Rédigé par un biologiste qualifié.' },
  tr: { title: 'KattenHond Blog — Kedi Bakım İpuçları', description: 'Antwerp bölgesinde kedi ve köpek bakımı hakkında faydalı ipuçları, hikayeler ve tavsiyeler.' },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const meta = blogPageMeta[locale] || blogPageMeta.nl;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://kattenhond.store/${locale}/blog` },
    openGraph: { title: meta.title, description: meta.description, url: `https://kattenhond.store/${locale}/blog`, type: 'website' },
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.description },
  };
}

const blogMeta: Record<string, { title: string; subtitle: string; readMore: string }> = {
  nl: {
    title: 'KattenHond Blog',
    subtitle: 'Handige tips, verhalen en advies over kattenverzorging in Antwerpen. Geschreven door een gediplomeerd bioloog.',
    readMore: 'Lees verder',
  },
  en: {
    title: 'KattenHond Blog',
    subtitle: 'Helpful tips, stories and advice about cat care in Antwerp. Written by a qualified biologist.',
    readMore: 'Read more',
  },
  fr: {
    title: 'Blog KattenHond',
    subtitle: 'Conseils utiles, histoires et avis sur la garde de chats a Anvers. Redige par un biologiste qualifie.',
    readMore: 'Lire la suite',
  },
  tr: {
    title: 'KattenHond Blog',
    subtitle: 'Anvers bolgesinde kedi bakimi hakkinda faydali ipuclari, hikayeler ve tavsiyeler. Diplomali bir biyolog tarafindan yazildi.',
    readMore: 'Devamini oku',
  },
};

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const posts = getBlogPostsByLocale(locale);
  const meta = blogMeta[locale] || blogMeta.nl;

  return (
    <>
      <Navbar />
      <main>
        <section className={styles.heroSection}>
          <div className="container">
            <span className={styles.heroLabel}>🐾 Blog</span>
            <h1 className={styles.heroTitle}>{meta.title}</h1>
            <p className={styles.heroSubtitle}>{meta.subtitle}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.blogGrid}>
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className={styles.blogCard}>
                  <div className={styles.imageWrapper}>
                    <Image src={post.image} alt={post.title} className={styles.image} width={600} height={400} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.meta}>
                      <span>{new Date(post.date).toLocaleDateString(locale === 'nl' ? 'nl-BE' : locale === 'fr' ? 'fr-BE' : locale === 'tr' ? 'tr-TR' : 'en-GB')}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className={styles.title}>{post.title}</h2>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.author}>✍️ {post.author}</span>
                      <span className={styles.readMore}>
                        {meta.readMore} <span>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
