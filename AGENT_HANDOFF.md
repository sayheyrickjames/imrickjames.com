# Agent Handoff: Terminal Portfolio Upgrade

## Current state
- Terminal portfolio is implemented in `components/Terminal.tsx` using jQuery Terminal.
- The `/api/commands/execute` endpoint now supports preview responses for commands.
- `work 1` through `work 5` open a Radix modal preview.
- `resume` opens a resume preview with a link.
- Theme switching is implemented with a Radix switch and persisted to `localStorage`.
- The project builds successfully with `npm run build`.

## Key files
- `components/Terminal.tsx` — terminal UI and command handling
- `components/PreviewModal.tsx` — Radix dialog preview component
- `components/ThemeToggle.tsx` — Radix switch for light/dark mode
- `pages/api/commands/execute.ts` — command router and preview response logic
- `styles/globals.css` — theme variables and root styling
- `styles/terminal.css` — terminal layout, modal styling, and control styles

## What was added
- `type: 'preview'` API response support
- `/api/commands/execute` handles numeric project shortcuts and opens previews
- A modal UI for readable project/case-study display
- Theme toggle with persistent `portfolio-theme`
- CSS support for both dark and light themes

## Next implementation ideas
1. Add a dedicated `story` / `adventure` command path for branching exploration.
2. Improve project previews with richer layout, images, or cards.
3. Add a full resume preview page or embedded PDF viewer.
4. Create a `components/CaseStudyCard.tsx` and a more polished project gallery.
5. Add Storybook for `ThemeToggle`, `PreviewModal`, and terminal wrapper components.

## How to continue
- Keep the terminal as the primary interaction model.
- Add new commands by extending `commandDescriptions` and `/api/commands/execute.ts`.
- Use `PreviewModal` for visually richer content and preserve terminal text fallback.
- Keep `jQuery Terminal` but enhance UX with hints and command suggestions.
