# Phase Implementation Plan

**Start Date**: April 12, 2026  
**MVP Target**: April 20, 2026 (8 days)  
**Project**: Terminal Portfolio Site (imrickjames.com)

**Current progress**:
- Terminal portfolio is built, deployed, and visible on `imrickjames.com`
- Radix preview modal and theme toggle are implemented
- GitHub repo is connected and Vercel is receiving deploys

---

## Phase 0: Content & Strategy ✓ COMPLETE
**Status**: Done  
**Time**: 2-3 hours  
**Deliverables**:
- [x] `content-brief.md` - Template for your story, projects, skills
- [x] `tokens.json` - Design tokens (Apple Terminal Clear Dark theme)
- [x] `architecture.md` - Technical architecture & file structure

**What You Need to Do Now**:
1. Open `content-brief.md`
2. Fill in the `[YOUR ANSWER HERE]` sections with:
   - Your elevator pitch (2 sentences)
   - 3-5 key projects (from resume/LinkedIn)
   - Key skills & differentiators
   - Social links (email, LinkedIn, Substack, etc.)
   - Terminal command descriptions

**Estimated Time**: **30-60 minutes** (depends on how quickly you can recall projects + craft pitch)

**Blocking Next Phase?**: YES - Phase 1 needs content finalized

---

## Phase 1: Foundation & Repo Setup
**Duration**: April 13-14 (Days 2-3)  
**Time Budget**: 6-8 hours  
**Status**: Complete

### Tasks

- [ ] Create GitHub repo: `imrickjames/imrickjames.com` (public)
- [ ] Initialize Next.js project (TypeScript)
  ```bash
  npx create-next-app@latest imrickjames.com --typescript --tailwind
  ```
- [ ] Install dependencies:
  ```bash
  npm install jquery jquery-terminal
  npm install --save-dev @types/jquery-terminal
  ```
- [ ] Create directory structure (see `architecture.md`)
- [ ] Connect GitHub repo to Vercel:
  - Log into Vercel
  - "New Project" → Select GitHub repo
  - Deploy
- [ ] Verify auto-deploy: Push dummy commit → Vercel deploys
- [ ] Test live URL: `imrickjames-portfolio.vercel.app` loads

### Deliverable

- [ ] Public GitHub repo with working Next.js boilerplate
- [ ] Live Vercel deployment (blank Next.js page)
- [ ] Auto-deploy on GitHub push confirmed

### Success Criteria

- [ ] GitHub repo exists and is public
- [ ] `imrickjames-portfolio.vercel.app` is accessible
- [ ] Pushing to GitHub triggers Vercel build automatically

---

## Phase 2: Terminal UI Foundation
**Duration**: April 14-15 (Days 3-4)  
**Time Budget**: 8-10 hours  
**Status**: Complete

### Tasks

- [ ] Create `components/Terminal.tsx` (React component)
  - Embed jQuery Terminal
  - Load `tokens.json` for styling
  - Apply Clear Dark theme
- [ ] Create `lib/tokens.ts` to load and export tokens
- [ ] Create `styles/terminal.css` with theme colors + typography
- [ ] Implement basic command router/handler infrastructure
- [ ] Create `lib/commandRegistry.ts` with command metadata
- [ ] Implement client-side `help` command (lists all commands)
- [ ] Add typing animation effect (optional but nice)
- [ ] Ensure terminal fills viewport on desktop/mobile
- [ ] Add cursor styling + blinking effect

### Deliverable

- [ ] Terminal UI renders at full viewport
- [ ] Typing `help` displays list of available commands
- [ ] Clear Dark theme applied (dark background, bright text, cyan accents)
- [ ] Typing animation feels responsive
- [ ] Works on desktop, tablet, mobile

### Success Criteria

- [ ] Deployed to Vercel
- [ ] Terminal is visible and interactive
- [ ] `help` command works and displays readable command list
- [ ] Mobile responsive (readable on phones)

---

## Phase 3: Core Content Pages
**Duration**: April 15-16 (Days 4-5)  
**Time Budget**: 10-12 hours  
**Status**: Complete

### Tasks

- [ ] Create `/pages/api/commands/execute.ts` (command router)
  - Routes incoming commands to specific handlers
  - Handles unknown commands gracefully
- [ ] Create `/pages/api/commands/about.ts`
  - Return formatted bio + elevator pitch
  - Include key skills
  - ASCII art optional but nice
- [ ] Create `/pages/api/commands/work.ts`
  - Return list of 3-5 projects
  - Format: `[1] Project Title (Year)` + one-liner
- [ ] Create `/pages/api/commands/contact.ts`
  - Return contact info
  - Email + LinkedIn + Substack + Twitter (if applicable)
  - Formatted as clickable links
- [ ] Create `/pages/api/commands/resume.ts`
  - Link to resume PDF or text version
- [ ] Update `Terminal.tsx` to make API calls to command handlers
- [ ] Test all commands in local dev
- [ ] Deploy to Vercel

### Deliverable

- [ ] Commands working: `about`, `work`, `contact`, `resume`
- [ ] Each command returns formatted, readable output
- [ ] Links in `contact` are clickable
- [ ] All commands deployed and accessible

### Success Criteria

- [ ] Type `about` → see your bio
- [ ] Type `work` → see list of projects
- [ ] Type `contact` → see email + social links (clickable)
- [ ] Type `resume` → link to resume
- [ ] MVP ready to share with family/friends

---

## Phase 4: Nested Exploration & Interactivity
**Duration**: April 16-17 (Days 5-6)  
**Time Budget**: 8-10 hours  
**Status**: In progress

### Tasks

- [x] Enhance `/pages/api/commands/work.ts` to handle subcommand
  - `work 1` → show Project 1 deep-dive
  - `work 2` → show Project 2 deep-dive
  - Include: problem, solution, outcome, skills, link
- [x] Add command suggestions
  - After `work` command: *"type `work 1` for details on Project 1..."*
- [ ] Implement `ls` or `tree` command (easter egg)
  - Optional directory structure visualization
- [x] Add tab completion/autocomplete (jQuery Terminal feature)
- [x] Add command history (up/down arrows navigate history)
- [ ] Test nested exploration

### Deliverable

- [ ] Type `work 1` → see detailed project case study
- [ ] Terminal suggests next commands after each output
- [ ] Command history works (arrow keys)
- [ ] Autocomplete suggests commands as you type

### Success Criteria

- [ ] Project deep-dives are accessible and detailed
- [ ] User experience feels intuitive (terminal suggests next steps)
- [ ] All exploration paths work

---

## Phase 5: Polish & Extras
**Duration**: April 17-18 (Days 6-7)  
**Time Budget**: 6-8 hours  
**Status**: Started

### Tasks

- [ ] Add ASCII art banner on load
  - Your name + tagline + welcome message
- [ ] Add visual dividers between outputs (for readability)
- [x] Implement dark/light theme toggle (optional)
  - `theme dark` / `theme light` command
- [ ] Test mobile responsiveness thoroughly
- [ ] Add SEO basics:
  - Meta title, description
  - Open Graph tags (for social sharing)
  - Twitter card
- [ ] Add custom 404 page (optional)
- [ ] Optimize images/assets if any
- [ ] Write README.md with setup instructions

### Optional (if time/budget allows):

- [ ] Voice narration setup
  - Browser Web Speech API: Add `voice on/off` command
  - Optional narration text for key commands
  - Defer TTS API integration to later
- [ ] Easter eggs (hidden commands)
- [ ] Animated text effects (fade-in, scroll effect)

### Deliverable

- [ ] Polished, production-ready terminal
- [ ] Shareable link for family/friends
- [ ] README with project documentation

### Success Criteria

- [ ] No broken links or errors
- [ ] Responsive on all devices
- [ ] Looks professional and "feels like Rick"
- [ ] Social sharing works (meta tags correct)

---

## Phase 6: Foundation for Growth
**Timeline**: After MVP launch  
**Status**: Planned but not started

### Deferred Features (Phase 6+)

- [ ] Voice narration with AI (Eleven Labs or Google TTS)
  - Narrate portfolio or specific commands
  - Cost analysis needed
- [ ] Substack integration
  - Fetch recent posts
  - Display in terminal via `blog` command
- [ ] Analytics dashboard
  - Track which commands users type most
  - Page visit heatmaps
- [ ] GitHub integration
  - Display recent commits/projects
  - Link to GitHub profile
- [ ] Case study videos/embeds
  - Embedded demos or explainer videos
- [ ] Design system export
  - Auto-generate Figma components from tokens.json
- [ ] CMS integration (Sanity, Contentful)
  - Manage project content from web UI
  - No code changes needed to deploy
- [ ] Contact form
  - Let visitors email you directly from terminal
  - Backend: SendGrid or similar

---

## Critical Path (MVP by April 20)

| Date | Phase | Task | Done? |
|------|-------|------|-------|
| Sat 13 | 1 | Repo + Vercel setup | [ ] |
| Sun 14 | 2 | Terminal UI built | [ ] |
| Mon 15 | 3 | Core commands working | [ ] |
| Tue 16 | 4 | Nested exploration | [ ] |
| Wed 17 | 5 | Polish + share | [ ] |
| Thu 18-20 | — | Buffer/refinement | [ ] |

**Key Blocker**: Content brief (Phase 0) MUST be completed before Phase 1 can start.

---

## How to Track Progress

1. This file documents all phases
2. Each phase has a checklist of tasks
3. As you complete tasks, mark `[x]` to show progress
4. At end of each phase, update "Status" to "Complete"
5. Keep this file in the repo for reference

---

## Questions Before Phase 1?

Before we proceed to setting up the repo, confirm:

1. **GitHub username**: `imrickjames`? (for repo URL)
2. **Do you have a GoDaddy account login?** (we'll set up custom domain afterward)
3. **Preferred commit message style**: Conventional commits (`feat:`, `fix:`) or casual? (optional)

Once you've completed `content-brief.md` (Phase 0), reply with:
> Phase 0 complete! Ready for Phase 1.

And we'll lock in and execute Phase 1 (repo setup).
