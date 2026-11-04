import { motion } from 'framer-motion';
import { terminalHistory } from '../lib/siteData';

const line = {
  hidden: { opacity: 0, y: 4 },
  show: { opacity: 1, y: 0 },
};

export default function TerminalWidget() {
  return (
    <motion.div
      className="term"
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.12, delayChildren: 0.6 }}
      aria-label="Career history, styled as a terminal"
    >
      <div className="term-bar">
        <div className="term-dots">
          <i />
          <i />
          <i />
        </div>
        <span className="term-title">~/rick-james</span>
      </div>
      <div className="term-body">
        <motion.pre variants={line}>
          <span className="prompt">~</span> rickjames history
        </motion.pre>
        <div>
          {terminalHistory.map((l) => (
            <motion.pre key={l} variants={line}>
              {l}
            </motion.pre>
          ))}
        </div>
        <div>
          <motion.pre variants={line}>On branch main</motion.pre>
          <motion.pre variants={line}>Changes to be committed:</motion.pre>
          <motion.pre variants={line} className="ok">
            {'  '}modified: career.roadmap
          </motion.pre>
          <motion.pre variants={line} className="new">
            {'  '}new file: open-to-interviewing.md
          </motion.pre>
        </div>
        <motion.pre variants={line}>
          <span className="prompt">~</span> <span className="cursor" />
        </motion.pre>
      </div>
    </motion.div>
  );
}
