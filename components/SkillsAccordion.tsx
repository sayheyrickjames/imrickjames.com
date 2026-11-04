import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { skillGroups } from '../lib/siteData';
import { ArrowDown } from './Icons';

export default function SkillsAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="acc">
      {skillGroups.map((g, i) => {
        const isOpen = open === i;
        return (
          <div className="acc-row" key={g.title}>
            <button className="acc-btn" aria-expanded={isOpen} aria-controls={`acc-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
              {g.title}
              <ArrowDown />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`acc-${i}`}
                  className="acc-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.7, 0, 0.2, 1] }}
                >
                  <ul className="acc-items">
                    {g.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
