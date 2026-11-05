import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Manrope, JetBrains_Mono } from 'next/font/google';
import { useEffect, useState, type ReactNode } from 'react';
import Lenis from 'lenis';
import { contact } from '../lib/siteData';
import { ArrowUpRight, Moon, Sun } from './Icons';
import { Roll } from './Motion';

const manrope = Manrope({ subsets: ['latin'], display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], display: 'swap', variable: '--font-mono' });

type Props = { title?: string; description?: string; children: ReactNode };

function ThemeSwitch() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  useEffect(() => {
    setTheme((document.documentElement.getAttribute('data-site-theme') as 'light' | 'dark') ?? 'light');
  }, []);
  const flip = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-site-theme', next);
    try {
      localStorage.setItem('site-theme', next);
    } catch {}
    setTheme(next);
  };
  return (
    <button className="toggle" onClick={flip} aria-label="Toggle light and dark mode">
      <span className="knob">{theme === 'dark' ? <Moon /> : <Sun />}</span>
    </button>
  );
}

export default function SiteLayout({ title, description, children }: Props) {
  const { pathname, asPath } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => setMenuOpen(false), [asPath]);
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);
  const fullTitle = title ? `${title} · Rick James` : "I'm Rick James!";
  const desc = description ?? 'A product designer building systems teams use to ship products people love.';

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis();
    let raf = requestAnimationFrame(function loop(t) {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    });
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`site ${manrope.className} ${mono.variable}`}>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="site-header">
        <Link href="/" className="logo">
          Rick James!
        </Link>
        <nav className="nav-center" aria-label="Main">
          {[
            ['/work', 'Work'],
            ['/about', 'About'],
          ].map(([href, label]) => (
            <Link key={href} href={href} aria-current={pathname.startsWith(href) ? 'page' : undefined}>
              <Roll>{label}</Roll>
            </Link>
          ))}
        </nav>
        <div className="nav-right">
          <ThemeSwitch />
          <Link href="/contact" className="pill">
            Contact
          </Link>
          <button
            className="menu-btn"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <i />
            <i />
          </button>
        </div>
      </header>
      {menuOpen && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile">
          {[
            ['/work', 'Work'],
            ['/about', 'About'],
            ['/how', 'How'],
            ['/contact', 'Contact'],
          ].map(([href, label]) => (
            <Link key={href} href={href} aria-current={pathname.startsWith(href) ? 'page' : undefined}>
              {label}
            </Link>
          ))}
        </nav>
      )}

      <main>{children}</main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="foot-top">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let’s build together</h2>
              <Link className="pill foot-pill" href="/contact">
                Contact <ArrowUpRight />
              </Link>
            </div>
            <div className="foot-cols">
              <ul>
                {[
                  ['/', 'Home'],
                  ['/work', 'Work'],
                  ['/about', 'About'],
                  ['/how', 'How'],
                ].map(([href, label]) => (
                  <li key={href}>
                    <Link href={href}>
                      <Roll>{label}</Roll>
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                <li>
                  <a className="ext" href={contact.linkedin} target="_blank" rel="noreferrer">
                    <Roll>LinkedIn</Roll> <ArrowUpRight />
                  </a>
                </li>
                <li>
                  <a className="ext" href={contact.github} target="_blank" rel="noreferrer">
                    <Roll>Github</Roll> <ArrowUpRight />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Rick James. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
