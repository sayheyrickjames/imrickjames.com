import { useState } from 'react';
import SiteLayout from '../components/SiteLayout';
import { FadeUp, Hl } from '../components/Motion';
import { ArrowUpRight } from '../components/Icons';
import { contact as c } from '../lib/siteData';

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(c.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${c.email}`;
    }
  };
  return (
    <button type="button" className="link-card" onClick={copy}>
      <span className="top">
        Email <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
      </span>
      <strong>{c.email}</strong>
    </button>
  );
}

export default function Contact() {
  return (
    <SiteLayout title="Contact" description="Get in touch with Rick James.">
      <section className="wrap page-head">
        <p className="eyebrow">Contact</p>
        <h1 className="h-hero">Get in touch</h1>
        <p className="h-card muted" style={{ marginTop: 24, maxWidth: 700 }}>
          Open to <Hl>new opportunities</Hl> and interesting conversations. Feel free to reach out.
        </p>
      </section>
      <section className="wrap">
        <FadeUp className="link-cards">
          <a className="link-card primary" href={`mailto:${c.email}`}>
            <span className="top">
              Get in touch <ArrowUpRight />
            </span>
            <strong>{c.email}</strong>
          </a>
          <CopyEmail />
          <a className="link-card" href={c.linkedin} target="_blank" rel="noreferrer">
            <span className="top">
              LinkedIn <ArrowUpRight />
            </span>
            <strong>
              linkedin.com/in/<wbr />
              sayheyrickjames
            </strong>
          </a>
        </FadeUp>
      </section>
    </SiteLayout>
  );
}
