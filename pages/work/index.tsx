import Link from 'next/link';
import SiteLayout from '../../components/SiteLayout';
import { ArrowUpRight } from '../../components/Icons';
import CaseStudyCard from '../../components/CaseStudyCard';
import { ScrollReveal } from '../../components/Motion';
import { caseStudies } from '../../lib/siteData';

export default function Work() {
  return (
    <SiteLayout title="Work" description="Design systems case studies with real, measurable outcomes.">
      <section className="wrap page-head">
        <h1 className="h-hero">Designing Success</h1>
        <div style={{ marginTop: 24, maxWidth: 900 }}>
          <ScrollReveal as="h2" className="h-card" text="See how I’ve turned a decade of design systems work into case studies with real, measurable outcomes." />
        </div>
      </section>
      <section className="wrap">
        <div className="grid even">
          {caseStudies.map((s, i) => (
            <CaseStudyCard key={s.slug} study={s} priority={i === 0} />
          ))}
        </div>
      </section>
      <section className="wrap section">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <p className="eyebrow">My Story</p>
          <div>
            <ScrollReveal as="h2" className="h-section" text="See how a decade of shipping design systems shaped the way I approach product work." />
            <Link href="/about" className="pill ghost story-link">
              About Us <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
