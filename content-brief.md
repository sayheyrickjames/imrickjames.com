# Portfolio Content Brief

## Your Story

### Elevator Pitch (1-2 sentences)
Who are you? Why should someone care about your work right now?

I've spent a decade shipping design for our favorite brands. Now I'm sharing what I learned — and why it still matters in an AI-first world.

---

## Key Skills & Differentiators

What makes you unique? (Especially in relation to AI + design systems)

1. Craft and pragmatism — high-quality work that actually ships
2. Design systems at scale — building the foundations teams build on
3. AI-first thinking — understanding where AI changes the practice and where it doesn't
4. Cross-brand range — PayPal, Plaid, Airbnb, Square; different scales, consistent quality
5. Public teaching — translating a decade of experience into content others can use

---

## Flagship Projects

### Project 1: PayPal AI-Ready Design System
- **Year**: 2024–present
- **Company/Context**: PayPal
- **One-liner**: Rebuilt PayPal's design system from the inside out so AI tools could actually use it.
- **Problem**: PayPal's design system worked for humans — but AI tools saw naming collisions, undocumented intent, and tokens that described colors instead of meaning. As AI entered the workflow, the system became a liability.
- **Solution**: Audited and upgraded 72 components across documentation, token architecture, naming conventions, and design-to-code connection. Established machine-readable metadata, three-tier token structure, semantic prop patterns, Figma Code Connect mappings, and a clear source-of-truth hierarchy.
- **Outcome**: Designers can now prototype directly in Figma Make, Claude Code, and similar AI tools — with the system working with them instead of against them. Significant reduction in design-to-dev friction across the org.
- **Skills Used**: Design systems, token architecture, AI workflow integration, design-to-code infrastructure, documentation strategy
- **Link/URL**: 

### Project 2: PayPal Money Movement
- **Year**: 2024–present
- **Company/Context**: PayPal
- **One-liner**: Unify PayPal's fragmented money movement experience to reduce drop-off and unlock the full value of P2P at scale.
- **Problem**: PayPal's money movement products (P2P, Xoom, Crypto, Bill Split) were architecturally disconnected — inconsistent IA, poor feature discoverability, and drop-off rates ranging from 26% to 64% at key funnel steps. P2P drives ~70% of account funding and ~30% of new user acquisition, so the fragmentation had real business impact.
- **Solution**: Designed a unified Money Movement experience built on top of the Core + Common design systems — tokenized brand and UI, cross-product consistency, and a cohesive flow architecture that connected previously siloed products.
- **Outcome**: Launching 2026. Addresses drop-off rates of 26–64% across key funnel steps in a product that drives ~70% of PayPal's account funding and ~30% of new user acquisition.
- **Skills Used**: Product design, design systems, information architecture, cross-product unification, fintech flows
- **Link/URL**: 

### Project 3: Medium Design System (MDS)
- **Year**: 2022–2023
- **Company/Context**: Medium
- **One-liner**: Reset how Medium designs — from a fragmented legacy system to a modern, token-driven design system built to scale.
- **Problem**: Medium's design system was outdated and inconsistent, with mismatched color tokens, a $140k/year font license for Charter, and no structured path from design to code.
- **Solution**: Rebuilt the system from scratch — new semantic color tokens (Lite → MDS migration), typography system (Charter → Source Serif Pro), icon library, component library with cross-platform support (Android, iOS, Web), automated token pipelines via Specify, and full documentation in Notion.
- **Outcome**: Eliminated $140k in annual font licensing with minimal reader impact. Shipped MDS v0.0.1 with 12+ components, automated token sync, and new cross-functional collaborators actively contributing.
- **Skills Used**: Design systems, token architecture, typography, cross-platform design, release management
- **Link/URL**: 

### Project 4: Stash Text Components
- **Year**: 2021–2022
- **Company/Context**: Stash
- **One-liner**: Centralize 14,000+ text strings across all platforms into a single, auto-updating source of truth.
- **Problem**: Stash had 60+ errors in transaction text, 14 different ways to enter an amount, and 14,000+ hard-coded, manually-edited text strings spread across platforms — making compliance management a constant risk.
- **Solution**: Led a 6-week sprint with 6 engineers and 1 content designer to build a centralized text component system using Ditto — semantic component naming, variable support, single-source publishing to all platforms.
- **Outcome**: 12,000+ hours saved annually, 20% faster shipping, 30%+ speed increase in content workflows, and 10k employee hours returned to the org.
- **Skills Used**: Design systems, content design infrastructure, cross-functional leadership, Ditto
- **Link/URL**: 

### Project 5: Plaid Flexible Link
- **Year**: 2019–2021
- **Company/Context**: Plaid
- **One-liner**: Redesign Plaid Link from a static SDK into a flexible, server-driven platform built to scale across thousands of integrations.
- **Problem**: Building Link was a broken developer experience — thousands of static Sketch screens, no scalable component model, and no clear path to support Plaid's growing product surface.
- **Solution**: Led design across 2 quarters with 8 engineers and 1 PM to migrate from Sketch to Figma, build a new component and layout system, establish a cross-platform icon and illustration library, and move toward a server-driven UI architecture using directed graphs.
- **Outcome**: Reduced the screen count from thousands to hundreds via a core reusable component set. The new architecture was featured on Plaid's engineering blog as a foundational infrastructure shift.
- **Skills Used**: Design systems, cross-platform design, Figma migration, component architecture, developer tooling
- **Link/URL**: 

---

## Social & Contact Info

- **Email**: sayhey@imrickjames.com
- **LinkedIn**: https://www.linkedin.com/in/sayheyrickjames/
- **Portfolio**: https://bit.ly/3Q6N0LU
- **Substack**: 
- **Twitter/X**: 
- **GitHub**: 
- **Other**: 

---

## Terminal Commands & Information Architecture

### Root Commands

| Command | Description | Output Type |
|---------|-------------|-------------|
| `help` | Lists all available commands | List of commands |
| `about` | Your elevator pitch + skills | Formatted text |
| `work` | Lists your projects | List of projects |
| `work [1-5]` | Deep-dive into a specific project | Project details |
| `contact` | Your contact information | Links + email |
| `resume` | Link to your resume or text version | Link or formatted text |

### Navigation Flow

**Discovery Path**: Visitor types `help` → sees commands → types `work` → sees projects → types `work 1` for deep-dive

**Guided Path**: After initial load, terminal might suggest: *"Try typing `work` to see my recent projects, or `about` to learn more about me."*

---

## Design & Visual Direction

### Theme Reference
- **Base**: Apple Terminal "Clear Dark" theme
- **Inspiration**: Clean, minimalist, high-contrast
- **Feeling**: Professional but approachable; tech-forward but not sterile

### Terminal Aesthetic Goals
- [ ] Dark background with bright text
- [ ] Clear readability at all text sizes
- [ ] Cyan/teal accents (from theme)
- [ ] Command responses feel like a real shell (not a UI simulation)
- [ ] Optional: ASCII art banner on load

---

## Notes & Decisions

- Airbnb and Square work intentionally placed in a supporting role
- Earlier career (Apple, Pinterest) available as context but not featured projects

