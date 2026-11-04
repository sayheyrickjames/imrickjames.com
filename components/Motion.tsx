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

/** Words fade from grey to full colour as the block scrolls through the viewport. */
export function ScrollReveal({ text, as: Tag = 'h1', className }: { text: string; as?: 'h1' | 'h2' | 'p'; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'start 0.35'] });
  const words = text.split(' ');
  const MotionTag = motion[Tag] as typeof motion.h1;

  if (reduce) return <Tag className={className}>{text}</Tag>;
  return (
    <MotionTag ref={ref as never} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
      ))}
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
