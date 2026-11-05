import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  return (
    <motion.span className="word" style={{ opacity }}>
      {word}
    </motion.span>
  );
}

/** Split "plain [[highlighted phrase]] plain" into segments. */
function segments(text: string) {
  const parts = text.split(/(\[\[.*?\]\])/).filter(Boolean);
  return parts.map((t, i) =>
    t.startsWith('[[')
      ? // Space after a chip only when the next text starts with a space (not punctuation).
        { hl: true, words: t.slice(2, -2).split(' '), spaceAfter: (parts[i + 1] ?? ' ').startsWith(' ') }
      : { hl: false, words: t.trim().split(' ').filter(Boolean), spaceAfter: true }
  );
}

/** Grey chip behind a phrase, as on the live site. */
export function Hl({ children }: { children: ReactNode }) {
  return <span className="hl">{children}</span>;
}

/** Render a string with [[phrase]] markup as text with highlight chips. */
export function rich(text: string) {
  return text.split(/(\[\[.*?\]\])/).map((t, i) => (t.startsWith('[[') ? <Hl key={i}>{t.slice(2, -2)}</Hl> : t));
}

/**
 * Words fade from grey to full colour as the block scrolls through the viewport.
 * Wrap a phrase in [[double brackets]] to render it as a highlight chip.
 */
export function ScrollReveal({ text, as: Tag = 'h1', className }: { text: string; as?: 'h1' | 'h2' | 'p'; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'start 0.35'] });
  const segs = segments(text);
  const plain = text.replace(/\[\[|\]\]/g, '');
  const total = segs.reduce((n, s) => n + s.words.length, 0);
  const MotionTag = motion[Tag] as typeof motion.h1;

  if (reduce)
    return (
      <Tag className={className}>
        {segs.map((s, i) => (s.hl ? <Hl key={i}>{s.words.join(' ')}</Hl> : <span key={i}>{s.words.join(' ')} </span>))}
      </Tag>
    );

  let n = 0;
  return (
    <MotionTag ref={ref as never} className={className} aria-label={plain}>
      {segs.map((s, i) => {
        const words = s.words.map((w) => {
          const k = n++;
          return <Word key={k} word={w} progress={scrollYProgress} range={[k / total, (k + 1) / total]} />;
        });
        return s.hl ? (
          <span key={i} className="hl" aria-hidden style={{ marginRight: s.spaceAfter ? '0.26em' : 0 }}>
            {words}
          </span>
        ) : (
          <span key={i} aria-hidden>
            {words}
          </span>
        );
      })}
    </MotionTag>
  );
}

export function FadeUp({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Roll({ children }: { children: string }) {
  return (
    <span className="roll">
      <span>{children}</span>
      <span aria-hidden>{children}</span>
    </span>
  );
}
