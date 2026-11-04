import SiteLayout from '../components/SiteLayout';
import { FadeUp } from '../components/Motion';
import { ArrowUpRight } from '../components/Icons';
import { contact as c } from '../lib/siteData';

export default function Contact() {
  return (
    <SiteLayout title="Contact" description="Get in touch with Rick James.">
      <section className="wrap page-head">
        <p className="eyebrow">Contact</p>
        <h1 className="h-hero">Get in touch</h1>
        <p className="h-card muted" style={{ marginTop: 24, maxWidth: 700 }}>
          Open to new opportunities and interesting conversations. Feel free to reach out.
        </p>
      </section>
      <section className="wrap">
        <FadeUp className="link-cards">
          <a className="link-card" href={`mailto:${c.email}`}>
            <span className="top">Email <ArrowUpRight /></span>
            <strong>{c.email}</strong>
          </a>
          <a className="link-card" href={c.linkedin} target="_blank" rel="noreferrer">
            <span className="top">LinkedIn <ArrowUpRight /></span>
            <strong>linkedin.com/in/sayheyrickjames</strong>
          </a>
        </FadeUp>
      </section>
    </SiteLayout>
  );
}
