import Link from 'next/link';
import SiteLayout from '../components/SiteLayout';
import CaseStudyCard from '../components/CaseStudyCard';
import SkillsAccordion from '../components/SkillsAccordion';
import LogoGrid from '../components/LogoGrid';
import TerminalWidget from '../components/TerminalWidget';
import { ScrollReveal } from '../components/Motion';
import { ArrowUpRight } from '../components/Icons';
import { caseStudies } from '../lib/siteData';

export default function Home() {
  return (
    <SiteLayout>
      <section className="wrap hero">
        <p className="eyebrow">Product Design · Design Systems · AI-First Thinking</p>
        <ScrollReveal className="h-hero" text="A product designer building systems teams use to ship products people love." />
        <TerminalWidget />
      </section>

      <section className="wrap">
        <div className="grid">
          {caseStudies.map((s, i) => (
            <CaseStudyCard key={s.slug} study={s} priority={i === 0} />
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <p className="eyebrow">Designing Success</p>
          <div>
            <ScrollReveal as="h2" className="h-section" text="See how I’ve turned a decade of systems work into case studies with real, measurable outcomes." />
            <Link href="/work" className="pill ghost story-link">
              My Work <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <p className="eyebrow">Skills</p>
          <SkillsAccordion />
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <p className="eyebrow">My Story</p>
          <div>
            <ScrollReveal as="h2" className="h-section" text="See how a decade of shipping design systems shaped the way I approach product work." />
            <Link href="/about" className="pill ghost story-link">
              Read more <ArrowUpRight />
            </Link>
          </div>
        </div>
        <LogoGrid />
      </section>
    </SiteLayout>
  );
}
