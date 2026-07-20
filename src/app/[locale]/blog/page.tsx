import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { getAllBlogPosts } from '@/lib/blog-data';
import styles from './blog.module.css';

export const metadata = {
  title: 'Blog | Kattenoppas Antwerpen',
  description: 'Lees onze nieuwste artikelen over kattenverzorging, oppas aan huis en tips voor uw kat tijdens vakanties in Antwerpen.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.heroSection}>
          <div className="container">
            <h1 className={styles.heroTitle}>Katten Blog</h1>
            <p className={styles.heroSubtitle}>
              Handige tips, verhalen en advies over kattenverzorging in Antwerpen.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className={styles.blogGrid}>
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.id} className={styles.blogCard}>
                  <div className={styles.imageWrapper}>
                    <img src={post.image} alt={post.title} className={styles.image} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.meta}>
                      <span>{new Date(post.date).toLocaleDateString('nl-BE')}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className={styles.title}>{post.title}</h2>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <span className={styles.readMore}>
                      Lees verder <span>→</span>
                    </span>
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
