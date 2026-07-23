import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  const t = useTranslations('footer');
  const ts = useTranslations('services');
  const tc = useTranslations('contact');
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="site-footer">
      <div className="container">
        <div className={styles.footerTop}>
          {/* Column 1: Brand & Bio */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} title="Katten - Kattenoppas in Antwerpen" aria-label="Katten Home">
              <span className={styles.logoIcon}>🐾</span>
              <span>Kat<span className={styles.logoAccent}>ten</span></span>
            </Link>
            <p className={styles.brandDescription}>
              {t('description')}
            </p>
            <ul className={styles.socialLinks}>
              <li>
                <a href="https://facebook.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook" id="social-facebook">
                  f
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" id="social-instagram">
                  IG
                </a>
              </li>
              <li>
                <a href="https://wa.me/" className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp" id="social-whatsapp">
                  WA
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.footerCol}>
            <h4>{t('links.title')}</h4>
            <ul className={styles.linksList}>
              <li><Link href="/" title={t('links.home')}>{t('links.home')}</Link></li>
              <li><Link href="/diensten" title={t('links.services')} aria-label={t('links.services')}>{t('links.services')}</Link></li>
              <li><Link href="/over-ons" title={t('links.about')} aria-label={t('links.about')}>{t('links.about')}</Link></li>
              <li><Link href="/blog" title="Blog" aria-label="Blog">Blog</Link></li>
              <li><Link href="/contact" title={t('links.contact')} aria-label={t('links.contact')}>{t('links.contact')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className={styles.footerCol}>
            <h4>{ts('pageTitle')}</h4>
            <ul className={styles.linksList}>
              <li><Link href="/diensten/daily-visits" title={ts('servicesList.0.title')}>{ts('servicesList.0.title')}</Link></li>
              <li><Link href="/diensten/feeding" title={ts('servicesList.1.title')}>{ts('servicesList.1.title')}</Link></li>
              <li><Link href="/diensten/medication" title={ts('servicesList.4.title')}>{ts('servicesList.4.title')}</Link></li>
              <li><Link href="/diensten/bodycam" title={ts('servicesList.5.title')}>{ts('servicesList.5.title')}</Link></li>
              <li><Link href="/diensten/health" title={ts('servicesList.6.title')}>{ts('servicesList.6.title')}</Link></li>
            </ul>
          </div>

          {/* Column 4: Service Areas (Local SEO Goldmine!) */}
          <div className={styles.footerCol}>
            <h4>{t('districts.title')}</h4>
            <ul className={styles.linksList}>
              <li><Link href="/diensten/antwerpen-zuid" title={t('districts.zuid')}>{t('districts.zuid')}</Link></li>
              <li><Link href="/diensten/berchem" title={t('districts.berchem')}>{t('districts.berchem')}</Link></li>
              <li><Link href="/diensten/deurne" title={t('districts.deurne')}>{t('districts.deurne')}</Link></li>
              <li><Link href="/diensten/merksem" title={t('districts.merksem')}>{t('districts.merksem')}</Link></li>
              <li><Link href="/diensten/wilrijk" title={t('districts.wilrijk')}>{t('districts.wilrijk')}</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className={styles.footerCol}>
            <h4>{t('links.contact')}</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span>{tc('info.address')}</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span>{tc('info.phone')}</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <span>{tc('info.email')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Legal Links */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            {t('copyright', { year: currentYear })}
          </div>
          <ul className={styles.legalLinks}>
            <li><Link href="/privacy" title={t('legal.privacy')}>{t('legal.privacy')}</Link></li>
            <li><Link href="/voorwaarden" title={t('legal.terms')}>{t('legal.terms')}</Link></li>
            <li><Link href="/cookies" title={t('legal.cookies')}>{t('legal.cookies')}</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
