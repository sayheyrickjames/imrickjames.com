import Image from 'next/image';
import Link from 'next/link';
import type { CaseStudy } from '../lib/siteData';
import { ArrowUpRight } from './Icons';
import { FadeUp } from './Motion';

export default function CaseStudyCard({ study, priority }: { study: CaseStudy; priority?: boolean }) {
  return (
    <FadeUp className="card">
      <Link href={`/work/${study.slug}`} style={{ display: 'block' }}>
        <div className="media">
          <Image
            src={study.image}
            alt={`${study.company} ${study.title}`}
            fill
            sizes="(max-width: 720px) 100vw, 1265px"
            priority={priority}
            style={{ objectFit: 'cover' }}
          />
          {study.nda && <span className="nda">NDA</span>}
          <span className="go">
            <ArrowUpRight />
          </span>
        </div>
        <div className="meta">
          <p className="eyebrow">{study.company}</p>
          <h3 className="h-card">{study.title}</h3>
        </div>
      </Link>
    </FadeUp>
  );
}
