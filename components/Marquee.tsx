import type { ReactNode } from 'react';

/**
 * Infinite horizontal ticker. Content is rendered twice and the track slides by
 * exactly one copy, so the loop is seamless. Pauses on hover; static under reduced motion.
 */
export default function Marquee({
  children,
  duration = 40,
  className = '',
  label,
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
  label?: string;
}) {
  return (
    <div className={`marquee ${className}`} role={label ? 'region' : undefined} aria-label={label}>
      <div className="marquee-track" style={{ animationDuration: `${duration}s` }}>
        <div className="marquee-group">{children}</div>
        <div className="marquee-group" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
