import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { getBlogPostsByLocale } from '@/lib/blog-data';
import styles from './blog.module.css';

const blogMeta: Record<string, { title: string; subtitle: string; readMore: string }> = {
  nl: {
    title: 'Katten Blog',
    subtitle: 'Handige tips, verhalen en advies over kattenverzorging in Antwerpen. Geschreven door een gediplomeerd bioloog.',
    readMore: 'Lees verder',
  },
  en: {
    title: 'Katten Blog',
    subtitle: 'Helpful tips, stories and advice about cat care in Antwerp. Written by a qualified biologist.',
    readMore: 'Read more',
  },
  fr: {
    title: 'Blog Katten',
    subtitle: 'Conseils utiles, histoires et avis sur la garde de chats a Anvers. Redige par un biologiste qualifie.',
    readMore: 'Lire la suite',
  },
  tr: {
    title: 'Katten Blog',
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
                    <img src={post.image} alt={post.title} className={styles.image} loading="lazy" />
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
