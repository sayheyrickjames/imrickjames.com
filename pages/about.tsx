import Link from 'next/link';
import SiteLayout from '../components/SiteLayout';
import LogoGrid from '../components/LogoGrid';
import { FadeUp, ScrollReveal } from '../components/Motion';
import { ArrowUpRight } from '../components/Icons';
import { process as steps, skillGroups } from '../lib/siteData';

const tools = ['Figma', 'Notion', 'Claude', 'GitHub Copilot'];

export default function About() {
  return (
    <SiteLayout title="About" description="A decade of design systems work, built for an AI-first world.">
      <section className="wrap page-head">
        <p className="eyebrow">About Me</p>
        <h1 className="h-hero" style={{ maxWidth: 1000 }}>
          A decade of design systems work, built for an AI-first world.
        </h1>
        <div style={{ marginTop: 40, maxWidth: 800 }}>
          <ScrollReveal as="h2" className="h-card" text="I’ve spent a decade shipping design for our favorite brands. Now I’m sharing what I learned, and why it still matters in an AI-first world." />
        </div>
      </section>

      <section className="wrap">
        <FadeUp className="row-split">
          <p className="eyebrow">What I Bring</p>
          <ul className="about-grid" style={{ gridTemplateColumns: '1fr' }}>
            <li>Craft and pragmatism: high-quality work that actually ships.</li>
            <li>Design systems at scale: building the foundations teams build on.</li>
            <li>AI-first thinking: understanding where AI changes the practice, and where it still doesn’t.</li>
          </ul>
        </FadeUp>

        <FadeUp className="row-split">
          <div>
            <p className="eyebrow">Skills</p>
          </div>
          <div>
            <h2 className="h-card" style={{ marginBottom: 40 }}>
              The specific things I bring to a design systems team, day to day.
            </h2>
            <div className="about-grid">
              {skillGroups.map((g) => (
                <div key={g.title}>
                  <h3>{g.title}</h3>
                  <ul>
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp className="row-split">
          <p className="eyebrow">Tools</p>
          <div>
            <h2 className="h-section" style={{ marginBottom: 24 }}>
              What I build with.
            </h2>
            <div className="tags">
              {tools.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp className="row-split">
          <p className="eyebrow">Where I’ve Worked</p>
          <div>
            <h2 className="h-section">Five companies, one throughline: design systems that scale, plus earlier years at Apple and Pinterest.</h2>
            <ul style={{ marginTop: 32, display: 'grid', gap: 12, fontSize: 24 }}>
              <li>PayPal <span className="muted">AI-Ready Design System · Money Movement, 2024–Present</span></li>
              <li>Medium <span className="muted">Medium Design System, 2022–2023</span></li>
              <li>Stash <span className="muted">Text Components, 2021–2022</span></li>
              <li>Plaid <span className="muted">Flexible Link, 2019–2021</span></li>
            </ul>
            <LogoGrid />
          </div>
        </FadeUp>

        <FadeUp className="row-split">
          <p className="eyebrow">How I Work</p>
          <div>
            <h2 className="h-section" style={{ marginBottom: 40 }}>
              A decade spent making design systems people actually want to use.
            </h2>
            <div className="steps">
              {steps.map((s, i) => (
                <div key={s.title}>
                  <p className="muted">{String(i + 1).padStart(2, '0')}</p>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
            <Link href="/work" className="pill lg" style={{ marginTop: 48 }}>
              Our Work <ArrowUpRight />
            </Link>
          </div>
        </FadeUp>
      </section>
    </SiteLayout>
  );
}
