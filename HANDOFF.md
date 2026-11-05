# imrickjames.com: how it's set up

The Framer migration finished on 2026-11-04. imrickjames.com and terminal.imrickjames.com are both served by Vercel (project `portfolio`, team `imrickjames`) from `main` in this repo.

## Hosting and DNS
- Domain registered at GoDaddy, with DNS on GoDaddy nameservers.
  - `A @` → `216.198.79.1` (Vercel)
  - `CNAME www` → Vercel. www 308-redirects to imrickjames.com.
  - `CNAME terminal` → Vercel
- Email is Google Workspace. Never change the MX records or the SPF TXT record.
- Rollback: restore `A @` to Framer's `31.43.160.6` and `31.43.161.6`, and `CNAME www` to `sites.framer.app`. This only works while the Framer site is still published.
- `next.config.js` rewrites `/` to `/terminal` when the host is terminal.imrickjames.com.
- Supabase is not used by this repo.

## Code map
- `lib/siteData.ts`: all site content (case studies, galleries, skills, process, contact).
  - `[[phrase]]` in text renders as a highlight chip, via `ScrollReveal` or `rich()` in `components/Motion.tsx`.
- `styles/site.css`: the design system.
  - Light theme by default, with dark as an option. Themes are set with `html[data-site-theme]` variables.
  - Breakpoints at 1024px and 720px.
- `components/`:
  - `SiteLayout`: header, mobile menu, theme toggle, Lenis smooth scroll, footer.
  - `Gallery`, `Marquee`, `BeforeAfter`, `CaseStudyCard`, `LogoGrid`, `TerminalWidget`, `SkillsAccordion`.
- Pages:
  - `pages/index.tsx`
  - `pages/work/index.tsx`
  - `pages/work/[slug].tsx`
  - `pages/about.tsx`
  - `pages/contact.tsx`
  - `pages/how.tsx`
- The terminal app: `pages/terminal.tsx` and `components/Terminal.tsx`.
- `/portfolio` is the password page.
- Case study images live in `public/images/cases/<framer-image-id>.png`.

## Credits and licence
The layout is based on Dawid Pietrasiak's free "Pearl" Framer template. Framer's Community Terms (Limited Commercial License, section 7.3.1) allow use and modification in your own projects, and they don't require attribution, so the site carries no visible credit. Two restrictions still apply:
- Don't redistribute the design as a standalone template.
- Don't describe the design as your own original work, for example in copy on `/how`.

## Open items
- Before/after slider on `/how`: it uses two PayPal gallery images as placeholders. Swap in a real pair when one exists.
- Framer: the Basic site plan is cancelled and stays active until 2026-11-23. Until then, the rollback above still works. After that date the Framer site goes offline, and nothing else is needed.

## Working notes
- Run locally with `npm run dev -- -p 3000`.
- Headless Chrome `--screenshot` does not scroll, so FadeUp sections below the fold look blank. Scroll the page first.
- Pushes must use the `sayheyrickjames` GitHub account.
- Do not commit `.claude/` or `tsconfig.tsbuildinfo`. Both are gitignored.
