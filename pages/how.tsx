import Link from 'next/link';
import SiteLayout from '../components/SiteLayout';
import { FadeUp } from '../components/Motion';
import Marquee from '../components/Marquee';
import BeforeAfter from '../components/BeforeAfter';
import { LogoMarquee } from '../components/LogoGrid';
import { caseImage } from '../components/Gallery';
import { ArrowUpRight } from '../components/Icons';
import { caseStudies } from '../lib/siteData';

const swatches = [
  ['Black', '#f5f5f5'],
  ['70', '#a3a3a3'],
  ['50', '#878787'],
  ['30', '#3f3f3f'],
  ['20', '#222'],
  ['5', '#111'],
  ['White', '#0a0a0a'],
];

const ingredients = [
  ['Framework', 'Next.js and React, written in TypeScript. Every page is statically generated.'],
  ['Motion', 'Framer Motion for scroll reveals and parallax, Lenis for smooth scrolling, and plain CSS for the tickers and hover rolls.'],
  ['Components', 'A wordmark ticker, a floating pill navigation, and a drag-to-compare slider for before/after images, all built for this site.'],
  ['Icon set', 'Simple Icons for real company marks instead of generic placeholders.'],
  ['Build partner', 'Claude Code and GitHub Copilot, working directly in the GitHub repository.'],
];

const numbers = [
  [String(caseStudies.length), 'Case studies'],
  ['1', 'Hosting provider'],
  ['1', 'Typeface'],
  ['0', 'Lines of code written by hand'],
];

const notable = [
  ['Data-driven case studies', 'Add an entry to one data file and a new case study appears everywhere (grid, detail page, terminal history) with zero manual layout work.'],
  ['NDA tagging', 'Confidential work gets flagged automatically, with a shortened public summary instead of hiding the project entirely.'],
  ['Per-case design system deep dives', 'Some case studies include a token reference, a type scale, or a component anatomy breakdown, built specifically for that project.'],
  ['Before / after comparisons', 'A drag-to-compare slider, ready to drop real before/after images into once I have them. Try it below.'],
];

export default function How() {
  return (
    <SiteLayout title="How This Was Made" description="The stack, the system, and the process behind this site, including how much of it Claude actually built.">
      <section className="wrap narrow page-head">
        <p className="eyebrow">Site Info</p>
        <h1 className="h-hero">How this was made</h1>
        <p className="how-lede">
          A look at the stack, the system, and the process behind this site, including how much of it Claude actually built.
        </p>
      </section>

      <section className="wrap narrow">
        <FadeUp className="row-split">
          <p className="eyebrow">Stack</p>
          <div>
            <h2 className="h-section">Built with Next.js, hosted on Vercel.</h2>
            <p className="muted" style={{ marginTop: 24 }}>
              The code lives on GitHub and every push deploys automatically. Domain via GoDaddy.
            </p>
          </div>
        </FadeUp>

        <FadeUp className="row-split">
          <p className="eyebrow">Design System</p>
          <div>
            <h2 className="h-section">A deliberately small system</h2>
            <p style={{ margin: '24px 0' }} className="muted">
              Typography: <span style={{ color: 'var(--s-fg)' }}>Manrope</span> across the entire site. One family, a few weights.
            </p>
            <p style={{ margin: '24px 0' }} className="muted">
              Color: monochrome only, seven steps
            </p>
            <div className="swatches">
              {swatches.map(([n, bg]) => (
                <div key={n} className="swatch">
                  <i style={{ background: bg }} />
                  {n}
                </div>
              ))}
            </div>
            <p style={{ marginTop: 24 }} className="muted">
              Spacing: 8, 16, 24, 32, 48, 64, 80, 120. One scale, reused everywhere.
            </p>
          </div>
        </FadeUp>

        <FadeUp className="row-split">
          <p className="eyebrow">Ingredients</p>
          <div>
            <h2 className="h-section">What this is built from</h2>
            <p className="muted" style={{ margin: '16px 0 32px' }}>
              Nothing here needs a page builder. Here’s exactly where each piece came from.
            </p>
            <ul className="data-list two" style={{ marginTop: 0 }}>
              {ingredients.map(([t, b]) => (
                <li key={t}>
                  <strong>{t}</strong>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </section>

      <Marquee className="how-ticker" duration={30} label="Companies I’ve worked with">
        <LogoMarquee />
      </Marquee>

      <section className="wrap narrow">
        <FadeUp className="row-split">
          <p className="eyebrow">By the numbers</p>
          <div>
            <h2 className="h-section">A quick tally</h2>
            <div className="numbers two">
              {numbers.map(([n, l]) => (
                <div key={l}>
                  <strong>{n}</strong>
                  <span className="muted">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp className="row-split">
          <p className="eyebrow">Notable</p>
          <div>
            <h2 className="h-section">A few things worth pointing out</h2>
            <ul className="data-list">
              {notable.map(([t, b], i) => (
                <li key={t} className="stack">
                  <span className="muted">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <strong>{t}</strong>
                    <p className="muted" style={{ marginTop: 8 }}>
                      {b}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 40 }}>
              <BeforeAfter
                before={caseImage('zujUsDO357z0EKYa4V6KwAc5dd0')}
                after={caseImage('0l1uO06wZIcJk6xI1wNtEj6v6E')}
                alt="Design system screens"
              />
            </div>
          </div>
        </FadeUp>

        <FadeUp className="row-split">
          <p className="eyebrow">Credits</p>
          <div>
            <h2 className="h-section">Built with Claude Code</h2>
            <p className="muted" style={{ marginTop: 24, maxWidth: 820 }}>
              Claude handled the implementation: components, page wiring, copy edits, layout. I kept{' '}
              <span style={{ color: 'var(--s-fg)' }}>concept, writing, taste, and the final call</span> on every pixel. This page is basically a
              byproduct of that collaboration.
            </p>
            <p style={{ marginTop: 40 }}>Questions about any of this?</p>
            <Link href="/contact" className="pill" style={{ marginTop: 16 }}>
              Get in touch <ArrowUpRight />
            </Link>
          </div>
        </FadeUp>
      </section>
    </SiteLayout>
  );
}
