import Image from 'next/image';
import { FadeUp } from './Motion';

export const caseImage = (id: string) => `/images/cases/${id}.png`;

/** Case study gallery: each row splits the content width evenly between its images. */
export default function Gallery({ rows, alt }: { rows: string[][]; alt: string }) {
  return (
    <section className="gallery" aria-label={`${alt} gallery`}>
      {rows.map((row, r) => (
        <FadeUp key={r} className={`gallery-row cols-${row.length}`}>
          {row.map((id, i) => (
            <div className="gallery-item" key={`${id}-${i}`}>
              <Image
                src={caseImage(id)}
                alt={`${alt}, image ${r + 1}.${i + 1}`}
                fill
                sizes={row.length === 1 ? '(max-width: 720px) 100vw, 1265px' : `(max-width: 720px) 100vw, ${Math.round(1265 / row.length)}px`}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </FadeUp>
      ))}
    </section>
  );
}
