import type { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SiteLayout from '../../components/SiteLayout';
import { FadeUp } from '../../components/Motion';
import { ArrowUpRight } from '../../components/Icons';
import Gallery, { caseImage } from '../../components/Gallery';
import Marquee from '../../components/Marquee';
import { caseStudies, type CaseStudy } from '../../lib/siteData';

const tokenTiers = [
  { tier: 'Primitive', rows: [['blue.60'], ['gray.10'], ['gray.90']] },
  {
    tier: 'Semantic',
    rows: [
      ['color-background-brand', 'blue.60'],
      ['color-text-primary', 'gray.90'],
      ['color-border-subtle', 'gray.10'],
    ],
  },
  {
    tier: 'Component',
    rows: [
      ['button-background-primary', 'color-background-brand'],
      ['card-border-default', 'color-border-subtle'],
    ],
  },
];

const anatomy = [
  ['Container', 'radius.md (8px), fill: button-background-primary'],
  ['Label', 'type.label.md, color: color-text-on-brand'],
  ['States', 'hover, pressed, and disabled all map to their own background token'],
  ['Spacing', 'space.400 horizontal, space.200 vertical'],
];

const typeRamp = [
  ['Display', '56px / Bold', 56, 700],
  ['Heading 1', '40px / Bold', 40, 700],
  ['Heading 2', '32px / Semibold', 32, 600],
  ['Heading 3', '24px / Semibold', 24, 600],
  ['Body', '18px / Regular', 18, 400],
  ['Caption', '14px / Regular', 14, 400],
] as const;

const spacing = [4, 8, 16, 24, 32, 48, 64];

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: caseStudies.map((s) => ({ params: { slug: s.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ study: CaseStudy; next: CaseStudy }> = async ({ params }) => {
  const index = caseStudies.findIndex((s) => s.slug === params?.slug);
  if (index === -1) return { notFound: true };
  return { props: { study: caseStudies[index], next: caseStudies[(index + 1) % caseStudies.length] } };
};

export default function CaseStudyPage({ study, next }: { study: CaseStudy; next: CaseStudy }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <SiteLayout title={`${study.company} ${study.title}`} description={study.summary}>
      <article className="wrap">
        <header className="page-head cs-head">
          <div className="meta-row">
            <div>
              <span>Industry</span>
              {study.industry}
            </div>
            <div>
              <span>Client</span>
              {study.company}
            </div>
            <div>
              <span>Confidentiality</span>
              {study.nda ? 'NDA (details limited)' : 'Public'}
            </div>
          </div>
          <h1 className="cs-title">{study.summary}</h1>
        </header>

        <div className="cs-hero" ref={heroRef}>
          <motion.div style={{ y, position: 'absolute', inset: '-8% 0' }}>
            <Image src={study.image} alt="" fill priority sizes="1265px" style={{ objectFit: 'cover' }} />
          </motion.div>
        </div>

        <FadeUp className="cs-block">
          <h2 className="h-section">The Problem</h2>
          <div className="body">
            <p>{study.problem}</p>
          </div>
        </FadeUp>

        <FadeUp className="cs-block">
          <h2 className="h-section">The Solution</h2>
          <div className="body">
            <p>{study.solution}</p>
          </div>
        </FadeUp>

        {study.slug === 'paypal-ai-ready-design-system' && (
          <>
            <FadeUp className="cs-block">
              <div>
                <p className="eyebrow">The Pattern</p>
              </div>
              <div>
                <h2 className="h-section">A three-tier token system</h2>
                <p className="muted" style={{ margin: '16px 0 32px' }}>
                  An illustrative example of the primitive → semantic → component pattern used to rebuild the system. (Actual token names are confidential.)
                </p>
                <div className="steps">
                  {tokenTiers.map((t) => (
                    <div key={t.tier}>
                      <h3>{t.tier}</h3>
                      {t.rows.map(([name, from]) => (
                        <p key={name} style={{ margin: '12px 0' }}>
                          <code>{name}</code>
                          {from && <span className="muted"> from {from}</span>}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <FadeUp className="cs-block">
              <div>
                <p className="eyebrow">The Anatomy</p>
              </div>
              <div>
                <h2 className="h-section">How one component maps to tokens</h2>
                <ul className="data-list">
                  {anatomy.map(([n, b], i) => (
                    <li key={n}>
                      <span className="muted">{String(i + 1).padStart(2, '0')}</span>
                      <strong>{n}</strong>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </>
        )}

        {study.slug === 'medium-design-system' && (
          <FadeUp className="cs-block">
            <div>
              <p className="eyebrow">The Scale</p>
            </div>
            <div>
              <h2 className="h-section">The type ramp, top to bottom</h2>
              <ul className="data-list">
                {typeRamp.map(([name, spec, size, weight]) => (
                  <li key={name} style={{ alignItems: 'center' }}>
                    <span style={{ fontSize: size, fontWeight: weight, lineHeight: 1 }}>Aa</span>
                    <span>{name}</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
              <h3 className="h-card" style={{ margin: '48px 0 16px' }}>
                Spacing scale (8pt grid)
              </h3>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
                {spacing.map((s) => (
                  <div key={s} style={{ textAlign: 'center' }}>
                    <div style={{ width: s, height: s, background: 'var(--s-fg)', borderRadius: 2, margin: '0 auto 8px' }} />
                    <span className="muted">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        )}

        {study.gallery.length > 0 && <Gallery rows={study.gallery} alt={`${study.company} ${study.title}`} />}

        <FadeUp className="cs-block">
          <h2 className="h-section">The Outcome</h2>
          <div className="body">
            <p>{study.outcome}</p>
            <div className="tags" style={{ marginTop: 32 }}>
              {study.skills.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </article>

      {study.carousel && (
        <Marquee className="cs-carousel" duration={45} label={`${study.company} ${study.title} screens`}>
          {study.carousel.map((id, i) => (
            <div className="cs-carousel-item" key={`${id}-${i}`}>
              <Image src={caseImage(id)} alt="" fill sizes="(max-width: 720px) 80vw, 640px" style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </Marquee>
      )}

      <article className="wrap">
        <section className="next">
          <p className="eyebrow">Next case study</p>
          <Link href={`/work/${next.slug}`}>
            <h2 className="h-hero">
              {next.company} {next.title} <span className="next-arrow"><ArrowUpRight /></span>
            </h2>
          </Link>
        </section>
      </article>
    </SiteLayout>
  );
}
