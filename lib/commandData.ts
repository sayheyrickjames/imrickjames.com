export const aboutOutput = `ABOUT ME

I've spent a decade shipping design for our favorite brands. Now I'm sharing what I learned — and why it still matters in an AI-first world.

Key skills:
  • Craft and pragmatism — high-quality work that actually ships
  • Design systems at scale — building the foundations teams build on
  • AI-first thinking — understanding where AI changes the practice and where it doesn't
  • Cross-brand range — PayPal, Plaid, Airbnb, Square; different scales, consistent quality
  • Public teaching — translating a decade of experience into content others can use

Try 'work' to see flagship projects or 'contact' to get in touch.`;

export const projects = [
  {
    id: 1,
    title: 'PayPal AI-Ready Design System',
    year: '2024–present',
    company: 'PayPal',
    oneLiner: 'Rebuilt PayPal\'s design system from the inside out so AI tools could actually use it.',
    problem:
      'PayPal\'s design system worked for humans — but AI tools saw naming collisions, undocumented intent, and tokens that described colors instead of meaning. As AI entered the workflow, the system became a liability.',
    solution:
      'Audited and upgraded 72 components across documentation, token architecture, naming conventions, and design-to-code connection. Established machine-readable metadata, three-tier token structure, semantic prop patterns, Figma Code Connect mappings, and a clear source-of-truth hierarchy.',
    outcome:
      'Designers can now prototype directly in Figma Make, Claude Code, and similar AI tools — with the system working with them instead of against them. Significant reduction in design-to-dev friction across the org.',
    skills: 'Design systems, token architecture, AI workflow integration, design-to-code infrastructure, documentation strategy',
    link: '',
  },
  {
    id: 2,
    title: 'PayPal Money Movement',
    year: '2024–present',
    company: 'PayPal',
    oneLiner: 'Unify PayPal\'s fragmented money movement experience to reduce drop-off and unlock the full value of P2P at scale.',
    problem:
      'PayPal\'s money movement products (P2P, Xoom, Crypto, Bill Split) were architecturally disconnected — inconsistent IA, poor feature discoverability, and drop-off rates ranging from 26% to 64% at key funnel steps. P2P drives ~70% of account funding and ~30% of new user acquisition, so the fragmentation had real business impact.',
    solution:
      'Designed a unified Money Movement experience built on top of the Core + Common design systems — tokenized brand and UI, cross-product consistency, and a cohesive flow architecture that connected previously siloed products.',
    outcome:
      'Launching 2026. Addresses drop-off rates of 26–64% across key funnel steps in a product that drives ~70% of PayPal\'s account funding and ~30% of new user acquisition.',
    skills: 'Product design, design systems, information architecture, cross-product unification, fintech flows',
    link: '',
  },
  {
    id: 3,
    title: 'Medium Design System (MDS)',
    year: '2022–2023',
    company: 'Medium',
    oneLiner: 'Reset how Medium designs — from a fragmented legacy system to a modern, token-driven design system built to scale.',
    problem:
      'Medium\'s design system was outdated and inconsistent, with mismatched color tokens, a $140k/year font license for Charter, and no structured path from design to code.',
    solution:
      'Rebuilt the system from scratch — new semantic color tokens (Lite → MDS migration), typography system (Charter → Source Serif Pro), icon library, component library with cross-platform support (Android, iOS, Web), automated token pipelines via Specify, and full documentation in Notion.',
    outcome:
      'Eliminated $140k in annual font licensing with minimal reader impact. Shipped MDS v0.0.1 with 12+ components, automated token sync, and new cross-functional collaborators actively contributing.',
    skills: 'Design systems, token architecture, typography, cross-platform design, release management',
    link: '',
  },
  {
    id: 4,
    title: 'Stash Text Components',
    year: '2021–2022',
    company: 'Stash',
    oneLiner: 'Centralize 14,000+ text strings across all platforms into a single, auto-updating source of truth.',
    problem:
      'Stash had 60+ errors in transaction text, 14 different ways to enter an amount, and 14,000+ hard-coded, manually-edited text strings spread across platforms — making compliance management a constant risk.',
    solution:
      'Led a 6-week sprint with 6 engineers and 1 content designer to build a centralized text component system using Ditto — semantic component naming, variable support, single-source publishing to all platforms.',
    outcome:
      '12,000+ hours saved annually, 20% faster shipping, 30%+ speed increase in content workflows, and 10k employee hours returned to the org.',
    skills: 'Design systems, content design infrastructure, cross-functional leadership, Ditto',
    link: '',
  },
  {
    id: 5,
    title: 'Plaid Flexible Link',
    year: '2019–2021',
    company: 'Plaid',
    oneLiner: 'Redesign Plaid Link from a static SDK into a flexible, server-driven platform built to scale across thousands of integrations.',
    problem:
      'Building Link was a broken developer experience — thousands of static Sketch screens, no scalable component model, and no clear path to support Plaid\'s growing product surface.',
    solution:
      'Led design across 2 quarters with 8 engineers and 1 PM to migrate from Sketch to Figma, build a new component and layout system, establish a cross-platform icon and illustration library, and move toward a server-driven UI architecture using directed graphs.',
    outcome:
      'Reduced the screen count from thousands to hundreds via a core reusable component set. The new architecture was featured on Plaid\'s engineering blog as a foundational infrastructure shift.',
    skills: 'Design systems, cross-platform design, Figma migration, component architecture, developer tooling',
    link: '',
  },
];

export const contactOutput = `CONTACT

Email: sayhey@imrickjames.com
LinkedIn: https://www.linkedin.com/in/sayheyrickjames/
Portfolio: https://bit.ly/3Q6N0LU

Feel free to email me directly or connect on LinkedIn.`;

export const resumeOutput = `RESUME

Your resume is available here:
  https://bit.ly/3Q6N0LU

If you want a PDF version, add one to /public/resume.pdf and update the resume handler.`;
