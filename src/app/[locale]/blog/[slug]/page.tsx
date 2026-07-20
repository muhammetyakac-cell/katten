import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog-data';
import styles from './post.module.css';
import ReactMarkdown from 'react-markdown';

// Dynamic SEO metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  
  if (!post) {
    return { title: 'Post Niet Gevonden | Katten' };
  }

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.image],
    }
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <article>
          <header className={styles.postHero}>
            <div className="container">
              <span className={styles.category}>Kattenoppas Advies</span>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <span>🗓️</span> {new Date(post.date).toLocaleDateString('nl-BE')}
                </div>
                <div className={styles.metaItem}>
                  <span>⏱️</span> {post.readTime} leestijd
                </div>
                <div className={styles.metaItem}>
                  <span>✍️</span> {post.author}
                </div>
              </div>
            </div>
          </header>

          <div className="container">
            <div className={styles.imageWrapper}>
              <img src={post.image} alt={post.title} className={styles.image} />
            </div>

            <div className={styles.contentContainer}>
              <div className={styles.content}>
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
              
              <div className={styles.ctaBox}>
                <h3>Klaar om met een gerust hart op reis te gaan?</h3>
                <p>Boek vandaag nog een gratis kennismakingsgesprek met onze professionele kattenoppassers in Antwerpen.</p>
                <Link href="/contact" className="btn btn--primary">
                  Neem Contact Op
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
