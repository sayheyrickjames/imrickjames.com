import Head from 'next/head';
import { FormEvent, useMemo, useState } from 'react';

const slideUrl = 'https://www.figma.com/deck/2RlQmR3W44aEPnpe8O0EEa/Portfolio-Presentation--2026-?node-id=4001-4635&t=ZaOipKDE9AJUYTKj-1';
const defaultPassword = '2026';

export default function PortfolioPage() {
  const expectedPassword = useMemo(() => {
    return process.env.NEXT_PUBLIC_PORTFOLIO_PASSWORD || defaultPassword;
  }, []);

  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password.trim() === expectedPassword.trim()) {
      setIsUnlocked(true);
      setError('');
      return;
    }

    setIsUnlocked(false);
    setError('That password did not match. Please try again.');
  };

  return (
    <>
      <Head>
        <title>Portfolio | Rick James</title>
        <meta
          name="description"
          content="Password-protected portfolio access for Rick James's work."
        />
      </Head>

      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 1.25rem',
          background:
            'radial-gradient(circle at top left, rgba(100, 181, 246, 0.16), transparent 28%), linear-gradient(180deg, #10181d 0%, #152028 100%)',
          color: '#f4f7fa',
        }}
      >
        <section
          style={{
            width: '100%',
            maxWidth: '720px',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '24px',
            padding: '2rem',
            background: 'rgba(19, 29, 35, 0.94)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.28)',
          }}
        >
          <p style={{ margin: 0, color: '#80cbc4', letterSpacing: '0.22em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
            Protected portfolio link
          </p>
          <h1 style={{ margin: '0.4rem 0 0.75rem', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', lineHeight: 1.15 }}>
            Portfolio
          </h1>
          <p style={{ margin: '0 0 1.5rem', color: '#c7d0d6', lineHeight: 1.65 }}>
            This page is password protected.
          </p>

          {!isUnlocked ? (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.85rem' }}>
              <label
                htmlFor="portfolio-password"
                style={{
                  position: 'absolute',
                  width: '1px',
                  height: '1px',
                  padding: 0,
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0 0 0 0)',
                  whiteSpace: 'nowrap',
                  border: 0,
                }}
              >
                Enter password
              </label>
              <input
                id="portfolio-password"
                name="portfolio-password"
                type="password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  if (error) {
                    setError('');
                  }
                }}
                placeholder="Enter the password"
                style={{
                  border: '1px solid rgba(255,255,255,0.16)',
                  borderRadius: '12px',
                  padding: '0.9rem 1rem',
                  background: '#11191f',
                  color: '#f5f7fa',
                  fontSize: '1rem',
                }}
              />
              {error ? <p style={{ margin: 0, color: '#f07178' }}>{error}</p> : null}
              <button
                type="submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  borderRadius: '999px',
                  padding: '0.95rem 1.2rem',
                  background: '#64b5f6',
                  color: '#071018',
                  fontWeight: 700,
                  cursor: 'pointer',
                  width: 'fit-content',
                  fontFamily: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Unlock
              </button>
            </form>
          ) : (
            <div style={{ display: 'grid', gap: '1rem' }}>
              <a
                href={slideUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '999px',
                  padding: '0.95rem 1.2rem',
                  background: '#64b5f6',
                  color: '#071018',
                  fontWeight: 700,
                  textDecoration: 'none',
                  width: 'fit-content',
                }}
              >
                Continue
              </a>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
