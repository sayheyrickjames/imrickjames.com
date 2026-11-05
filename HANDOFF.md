# Handoff: finish migrating imrickjames.com off Framer

## Goal
Rebuild the live Framer site (https://imrickjames.com) in this Next.js repo (pages router, Next 14.2.5) as a close visual and motion match, then host it on Vercel. Improvements are welcome. Framer must not be cancelled until the new site is live and verified.

## Status (updated 2026-11-04)
- `npx tsc --noEmit` and `npm run build` pass. Nothing is committed or deployed.
- Compared against the live site at 1440px and 390px. No horizontal overflow on any page at 390px.
- Done this session: case study galleries and carousels, How page rebuilt to match the live sections, logo ticker, before/after slider, real Plaid logo, Framer removed from the About tools list, footer layout matched to live, mobile menu added, and a terminal `echo` bug fixed (see below).
- Run with `npm run dev -- -p 3000`.
- Screenshot tip: headless Chrome `--screenshot` does not scroll, so FadeUp sections below the fold look blank. Scroll through the page (for example over the DevTools protocol) before capturing.

## Hosting facts
- imrickjames.com is currently served by Framer. The domain is registered at GoDaddy.
- Vercel (project `portfolio`) currently hosts only terminal.imrickjames.com, from this repo.
- Supabase is not used anywhere in the repo.
- `next.config.js` rewrites `/` to `/terminal` only when the host is terminal.imrickjames.com. Keep this working. `/portfolio` is a password page and is unchanged.

## Structure
- `lib/siteData.ts`: all content (5 case studies, skills, process, companies, terminal history, contact).
- `styles/site.css`: the design system.
  - Dark and light themes via `html[data-site-theme]` CSS variables.
  - Breakpoints at 1024px and 720px, and `prefers-reduced-motion` support.
- `pages/_document.tsx`: sets the theme before first paint.
- `components/`:
  - `SiteLayout`: fixed pill nav, theme toggle, Lenis smooth scroll, footer.
  - `Motion`: `ScrollReveal`, `FadeUp`, `Roll`.
  - `CaseStudyCard`, `TerminalWidget`, `SkillsAccordion`, `LogoGrid`, `Icons`.
- Pages:
  - `pages/index.tsx`
  - `pages/work/index.tsx`
  - `pages/work/[slug].tsx` (parallax hero)
  - `pages/about.tsx`
  - `pages/contact.tsx`
  - `pages/how.tsx`
- `pages/terminal.tsx`: the original terminal app, moved from `pages/index.tsx`. `globals.css`, `terminal.css` and `tokens.css` are global. Make sure site CSS does not leak into `/terminal`.
- `content-brief.md`: original case study copy.

## Design tokens (from live Framer site)
- Fonts: Manrope (weight 500) and JetBrains Mono for the terminal.
- Dark theme: background `#0a0a0a`, text `#f5f5f5`.
- Light theme: white background, black text. The footer is always black.
- Muted greys: `#a3a3a3`, `#878787`, `#969696`.
- Type scale:
  - Hero h1: 64px / 1.2
  - Section h1: 40px / 1.4
  - Card title: 24px
  - Nav: 18px
  - Terminal: 13px
- Layout:
  - Side padding: 80px
  - Content width: 1265px
  - Case grid: 2 columns with a 40px gap, and the first card full width
  - Card image radius: about 28px
- Pill buttons are about 40px tall. The Contact pill inverts the theme.
- Motion:
  - Scroll-reveal headline words go grey to white.
  - Rolling-text hover on nav and footer links.
  - Fade-ups.
  - Lenis smooth scroll.

## Remaining TODO
1. Owner review of the copy on `/how`. It was rewritten for the Next.js and Vercel stack because the live copy describes Framer. Check the "0 lines of code written by hand" tally and the tools list on `/about` (now Figma, Notion, Claude, GitHub Copilot).
2. The before/after slider on `/how` uses two PayPal AI gallery images as placeholders. Swap in a real before/after pair when one exists. The component is `components/BeforeAfter.tsx`.
3. GitHub URL confirmed from the git remote: https://github.com/sayheyrickjames.
4. Spot-check the remaining pages (`/`, `/work`, `/about`, `/contact`) against the live site in light mode.
5. Do not commit `.claude/`, `tsconfig.tsbuildinfo` or `public/portfolio-link.*`. Add the Co-authored-by trailer to commits.

## Notes
- Gallery and carousel image IDs live in `lib/siteData.ts` (`gallery`, `carousel`). The files are in `public/images/cases/<id>.png`. The row layout follows the live site: full, full, two-up, full, full.
- `components/Terminal.tsx` stored the bare jQuery element in `$termRef` instead of the terminal instance. Because of that, the idle nudge and the geo greeting threw `echo is not a function`. This bug was already on terminal.imrickjames.com and is fixed here.

## Cutover (after the owner approves a Vercel preview)
1. Push a branch so Vercel builds a preview.
2. In Vercel, go to Project → Domains and add imrickjames.com and www.
3. In GoDaddy, update the DNS records to the values Vercel shows. Keep terminal.imrickjames.com as is.
4. Verify with `curl -I https://imrickjames.com`. The `server: Framer` header should be gone.
5. Only then cancel Framer, exporting any assets first.
6. Check the Supabase dashboard. If no projects are in use, cancel it.
