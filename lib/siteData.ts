export type CaseStudy = {
  slug: string;
  company: string;
  title: string;
  years: string;
  industry: string;
  nda: boolean;
  image: string;
  summary: string;
  problem: string;
  solution: string;
  outcome: string;
  skills: string[];
  /** Gallery rows rendered before The Outcome. Each entry is an image ID in /images/cases. */
  gallery: string[][];
  /** Infinite image carousel rendered after The Outcome. */
  carousel?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'paypal-ai-ready-design-system',
    company: 'PayPal',
    title: 'AI-Ready Design System',
    years: '2024–Present',
    industry: 'Fintech / Payments',
    nda: true,
    image: '/images/paypal-ai.jpg',
    summary: "Rebuilt PayPal's consumer app design system so AI tools could actually use it.",
    problem:
      "PayPal's design system worked for humans, but AI tools saw naming collisions, undocumented intent, and tokens that described colors instead of meaning. As AI entered the workflow, the system became a liability.",
    solution:
      'Audited and upgraded 72 components across documentation, token architecture, naming conventions, and design-to-code connection. Established machine-readable metadata, a three-tier token structure, semantic prop patterns, Figma Code Connect mappings, and a clear source-of-truth hierarchy.',
    outcome:
      'Designers can now prototype directly in Figma Make, Claude Code, and similar AI tools, with the system working with them instead of against them. Significant reduction in design-to-dev friction across the org.',
    skills: ['Design systems', 'Token architecture', 'AI workflow integration', 'Design-to-code infrastructure', 'Documentation strategy'],
    gallery: [['zujUsDO357z0EKYa4V6KwAc5dd0'], ['0l1uO06wZIcJk6xI1wNtEj6v6E'], ['5vPoE0wHYleNGHjueKtb4Xezzqc', 'zWlNOzx9ibVbVa3NWk1QhokR9o'], ['5ksVABJB8VseafYDFs55E5ed8o'], ['r0Ua88NRWwyscI2LA9ENH2veo']],
    carousel: ['bHm176cXrPvb1boE5r8XbkNscrc', '5ksVABJB8VseafYDFs55E5ed8o', 'gF9w48y8Pon0B2lmQWNVYuyDt9w', '5vPoE0wHYleNGHjueKtb4Xezzqc'],
  },
  {
    slug: 'paypal-money-movement',
    company: 'PayPal',
    title: 'Money Movement',
    years: '2024–Present',
    industry: 'Fintech / Payments',
    nda: true,
    image: '/images/paypal-money.jpg',
    summary: "Unify PayPal's fragmented money movement experience to reduce drop-off and unlock the full value of P2P at scale.",
    problem:
      "PayPal's money movement products (P2P, Xoom, Crypto, Bill Split) were architecturally disconnected: inconsistent IA, poor feature discoverability, and drop-off rates ranging from 26% to 64% at key funnel steps. P2P drives ~70% of account funding and ~30% of new user acquisition, so the fragmentation had real business impact.",
    solution:
      'Designed a unified Money Movement experience built on top of the Core + Common design systems: tokenized brand and UI, cross-product consistency, and a cohesive flow architecture that connected previously siloed products.',
    outcome:
      'Launching 2026. Addresses drop-off rates of 26–64% across key funnel steps in a product that drives ~70% of PayPal’s account funding and ~30% of new user acquisition.',
    skills: ['Product design', 'Design systems', 'Information architecture', 'Cross-product unification', 'Fintech flows'],
    gallery: [['xHUVGlAW4LAnpDyEDDZlezB55y0'], ['Tw7erYlROnmdxEDMmqcKN5vHqA', 'l1IdgFvjZszn1wPWtaFq3dytug']],
  },
  {
    slug: 'medium-design-system',
    company: 'Medium',
    title: 'Design System',
    years: '2022–2023',
    industry: 'Publishing / Media',
    nda: false,
    image: '/images/medium.jpg',
    summary: 'Reset how Medium designs: from a fragmented legacy system to a modern, token-driven design system built to scale.',
    problem:
      "Medium's design system was outdated and inconsistent, with mismatched color tokens, a $140k/year font license for Charter, and no structured path from design to code.",
    solution:
      'Rebuilt the system from scratch: new semantic color tokens (Lite → MDS migration), a typography system (Charter → Source Serif Pro), an icon library, a cross-platform component library (Android, iOS, Web), automated token pipelines via Specify, and full documentation in Notion.',
    outcome:
      'Eliminated $140k in annual font licensing with minimal reader impact. Shipped MDS v0.0.1 with 12+ components, automated token sync, and new cross-functional collaborators actively contributing.',
    skills: ['Design systems', 'Token architecture', 'Typography', 'Cross-platform design', 'Release management'],
    gallery: [['zujUsDO357z0EKYa4V6KwAc5dd0'], ['0l1uO06wZIcJk6xI1wNtEj6v6E'], ['5vPoE0wHYleNGHjueKtb4Xezzqc', 'zWlNOzx9ibVbVa3NWk1QhokR9o'], ['5ksVABJB8VseafYDFs55E5ed8o'], ['r0Ua88NRWwyscI2LA9ENH2veo']],
    carousel: ['bHm176cXrPvb1boE5r8XbkNscrc', '5ksVABJB8VseafYDFs55E5ed8o', 'gF9w48y8Pon0B2lmQWNVYuyDt9w', '5vPoE0wHYleNGHjueKtb4Xezzqc'],
  },
  {
    slug: 'stash-text-components',
    company: 'Stash',
    title: 'Text Components',
    years: '2021–2022',
    industry: 'Fintech / Investing',
    nda: false,
    image: '/images/stash.jpg',
    summary: 'Centralize 14,000+ text strings across all platforms into a single, auto-updating source of truth.',
    problem:
      'Stash had 60+ errors in transaction text, 14 different ways to enter an amount, and 14,000+ hard-coded, manually-edited text strings spread across platforms, making compliance management a constant risk.',
    solution:
      'Led a 6-week sprint with 6 engineers and 1 content designer to build a centralized text component system using Ditto: semantic component naming, variable support, and single-source publishing to all platforms.',
    outcome:
      '12,000+ hours saved annually, 20% faster shipping, 30%+ speed increase in content workflows, and 10k employee hours returned to the org.',
    skills: ['Design systems', 'Content design infrastructure', 'Cross-functional leadership', 'Ditto'],
    gallery: [['vWulccYYkgEQYkKjFrTN1f7HFDM'], ['eRrPR4KLLv8XFo63fumprBpFV0'], ['OsTHl0H5kkoQ5PD1U7qZ5ZTqSvw', 'X6rUuyqplwM1TUj9MRIg5Bxv5s'], ['TFb85DRdf7bs0op7yuqOkilnzw']],
    carousel: ['Do0dAlUjJ6ZwlirDjSRPH3D7E', 'TFb85DRdf7bs0op7yuqOkilnzw', 'OsTHl0H5kkoQ5PD1U7qZ5ZTqSvw', 'TFb85DRdf7bs0op7yuqOkilnzw'],
  },
  {
    slug: 'plaid-flexible-link',
    company: 'Plaid',
    title: 'Flexible Link',
    years: '2019–2021',
    industry: 'Fintech / Developer Tools',
    nda: false,
    image: '/images/plaid.jpg',
    summary: 'Redesign Plaid Link from a static SDK into a flexible, server-driven platform built to scale across thousands of integrations.',
    problem:
      "Building Link was a broken developer experience: thousands of static Sketch screens, no scalable component model, and no clear path to support Plaid's growing product surface.",
    solution:
      'Led design across 2 quarters with 8 engineers and 1 PM to migrate from Sketch to Figma, build a new component and layout system, establish a cross-platform icon and illustration library, and move toward a server-driven UI architecture using directed graphs.',
    outcome:
      "Reduced the screen count from thousands to hundreds via a core reusable component set. The new architecture was featured on Plaid's engineering blog as a foundational infrastructure shift.",
    skills: ['Design systems', 'Cross-platform design', 'Figma migration', 'Component architecture', 'Developer tooling'],
    gallery: [['ChBDn6GQ2d7eRrYz7m7eZe3SbjQ'], ['OIAKcz6SKXlijhB7l9jW4YUtRc']],
  },
];

export const skillGroups = [
  { title: 'Design Systems', items: ['Token Architecture', 'Naming Systems', 'Component APIs', 'Source-of-Truth Hierarchies'] },
  { title: 'Product Design', items: ['Product Flows', 'Information Architecture', 'Cross-Product Consistency', 'Fintech UX', 'Responsive Design Solutions'] },
  { title: 'AI Workflow', items: ['Figma Code Connect', 'Machine-Readable Metadata', 'AI-Native Documentation', 'Design-to-Code'] },
  { title: 'Cross-Platform', items: ['Android', 'iOS', 'Web', 'One Consistent System'] },
];

export const process = [
  { title: 'Diagnose', body: 'I start by mapping where a system breaks (for people, for tooling, or for scale) before touching a single component.' },
  { title: 'Architect', body: 'Token structures, naming systems, and component APIs get rebuilt with intent, not just polish.' },
  { title: 'Ship with proof', body: 'Every system change ships with a [[measurable before/after]]: hours saved, friction removed, adoption gained.' },
  { title: 'Hand off the system', body: 'Documentation and a clear source-of-truth hierarchy outlive the initial build.' },
];

export const companies = ['PayPal', 'Plaid', 'Medium', 'Stash', 'Airbnb', 'Square', 'Apple', 'Pinterest'] as const;

export const terminalHistory = [
  '2024–Present  ·  PayPal: AI-Ready Design System',
  '2024–Present  ·  PayPal: Money Movement',
  '2022–2023  ·  Medium: Design System',
  '2021–2022  ·  Stash: Text Components',
  '2019–2021  ·  Plaid: Flexible Link',
];

export const contact = {
  email: 'rick@imrickjames.com',
  linkedin: 'https://www.linkedin.com/in/sayheyrickjames/',
  github: 'https://github.com/sayheyrickjames',
};
