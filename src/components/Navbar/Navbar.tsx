'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import styles from './Navbar.module.css';

const localeLabels: Record<string, { label: string; flag: string }> = {
  nl: { label: 'Nederlands', flag: '🇧🇪' },
  en: { label: 'English', flag: '🇬🇧' },
  fr: { label: 'Français', flag: '🇫🇷' },
  tr: { label: 'Türkçe', flag: '🇹🇷' },
};

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
  }, [pathname]);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
  };

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuOpen : ''}`}
      id="main-navigation"
    >
      <div className={styles.navbarInner}>
        <Link href="/" className={styles.logo} id="nav-logo">
          <span className={styles.logoIcon}>🐾</span>
          <span>Katten<span className={styles.logoAccent}>sitter</span></span>
        </Link>

        <ul className={styles.navLinks} id="nav-links">
          <li>
            <Link href="/" className={styles.navLink} id="nav-home">
              {t('home')}
            </Link>
          </li>
          <li>
            <Link href="/diensten" className={styles.navLink} id="nav-services">
              {t('services')}
            </Link>
          </li>
          <li>
            <Link href="/over-ons" className={styles.navLink} id="nav-about">
              {t('about')}
            </Link>
          </li>
          <li>
            <Link href="/blog" className={styles.navLink} id="nav-blog" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink} id="nav-contact" onClick={() => setMenuOpen(false)}>
              {t('contact')}
            </Link>
          </li>
          <li className={styles.mobileCtaWrapper}>
            <Link href="/contact" className={`btn btn--primary ${styles.mobileCta}`} onClick={() => setMenuOpen(false)}>
              {t('bookNow')}
            </Link>
          </li>
        </ul>

        <div className={styles.navActions}>
          <div className={styles.langSwitcher}>
            <button
              className={styles.langButton}
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Language selector"
              id="lang-switcher"
            >
              {localeLabels[locale]?.flag} {locale.toUpperCase()}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 8L1 3h10z" />
              </svg>
            </button>
            {langOpen && (
              <ul className={styles.langDropdown} id="lang-dropdown">
                {routing.locales.map((loc) => (
                  <li key={loc}>
                    <button
                      className={`${styles.langOption} ${loc === locale ? styles.langOptionActive : ''}`}
                      onClick={() => switchLocale(loc)}
                      id={`lang-${loc}`}
                    >
                      {localeLabels[loc]?.flag} {localeLabels[loc]?.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.desktopCtaWrapper}>
            <Link href="/contact" className={`btn btn--primary ${styles.ctaButton}`} id="nav-cta">
              {t('bookNow')}
            </Link>
          </div>

          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="menu-toggle"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
