import SiteLayout from '../../components/SiteLayout';
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
        <div className="grid">
          {caseStudies.map((s, i) => (
            <CaseStudyCard key={s.slug} study={s} priority={i === 0} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
