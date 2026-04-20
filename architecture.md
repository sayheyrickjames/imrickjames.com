# Architecture: Terminal Portfolio Site

## Overview

**Stack**: Next.js + React + jQuery Terminal + Vercel Functions (Serverless)  
**Deployment**: Vercel (GitHub-connected, auto-deploy)  
**Database**: None (Phase 0-2); optional CMS or database in Phase 4+  
**Frontend Hosting**: Vercel  
**Backend Hosting**: Vercel Functions (serverless Node.js)  
**Domain**: `imrickjames.com` (currently GoDaddy; move to Vercel DNS later)

---

## Technology Decisions

### Why Next.js?
- Built-in API routes (`/pages/api/`) = Vercel Functions automatically
- React for component-driven UI
- TypeScript support (optional but recommended)
- SSR/SSG flexibility (future-proof)
- Excellent Vercel integration

### Why jQuery Terminal?
- Lightweight (~30KB)
- Pure browser-based (no PTY needed)
- JSON-RPC support for backend communication
- Built-in command history, autocomplete, formatting
- Active maintenance
- Easy to theme

### Why Vercel Functions?
- Serverless = no server to maintain
- Scales automatically
- Free tier sufficient for portfolio
- Seamless Next.js integration
- Environment variables built-in

---

## File Structure

```
imrickjames.com/
├── pages/
│   ├── api/
│   │   ├── commands/
│   │   │   ├── about.ts       # Handles /api/commands/about
│   │   │   ├── work.ts        # Handles /api/commands/work
│   │   │   ├── contact.ts     # Handles /api/commands/contact
│   │   │   ├── resume.ts      # Handles /api/commands/resume
│   │   │   └── execute.ts     # Router /api/commands/execute
│   │   └── health.ts          # Health check for monitoring
│   ├── _app.tsx              # Next.js app wrapper (global styles, etc.)
│   ├── _document.tsx         # HTML document structure
│   ├── index.tsx             # Home page (Terminal component)
│   └── 404.tsx               # Custom 404 (optional)
├── components/
│   ├── Terminal.tsx          # Main Terminal wrapper
│   └── CommandRegistry.ts    # Command metadata + routing
├── lib/
│   ├── tokens.ts             # Load & export design tokens
│   ├── commands.ts           # Command implementations (client-side helpers)
│   ├── types.ts              # TypeScript interfaces
│   └── constants.ts          # Constants (port, URLs, etc.)
├── public/
│   ├── tokens.json           # Design tokens (copied here in build)
│   └── resume.pdf            # Your resume (optional)
├── styles/
│   ├── globals.css           # Global styles
│   ├── terminal.css          # Terminal-specific styles
│   └── tokens.css            # CSS variables generated from tokens.json
├── .env.local                # Local environment variables (gitignored)
├── .gitignore                # Git ignore file
├── next.config.js            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies
├── vercel.json               # Vercel deployment config (optional)
├── README.md                 # Project documentation
├── content-brief.md          # Content strategy (this phase)
├── architecture.md           # This file
└── tokens.json               # Design tokens (this phase)
```

---

## Data Flow

### User Input Flow

```
User types in Terminal
    ↓
jQuery Terminal captures input
    ↓
executeCommand() function called
    ↓
POST to /api/commands/execute with { command, args }
    ↓
Next.js API route routes to handler (e.g., /api/commands/work.ts)
    ↓
Handler processes, returns { output, status, metadata }
    ↓
jQuery Terminal renders output in terminal
```

### Command Handler Structure

Each command handler (`about.ts`, `work.ts`, etc.) exports:

```typescript
// Example: /api/commands/about.ts
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { args } = req.body;

  const output = `
╔════════════════════════════════════════╗
║ ABOUT ME                               ║
╚════════════════════════════════════════╝

[Your elevator pitch and bio here]

Skills: Design Systems, Product Design, AI/ML UX...

Learn more: type "work" to see my projects
`;

  return res.status(200).json({ output, status: 'success' });
}
```

---

## Command Specification

### Phase 2-3: Core Commands

**Command**: `help`
- **Handler**: Client-side (no API call)
- **Output**: Formatted list of all available commands + one-liner descriptions
- **Args**: None

**Command**: `about`
- **Handler**: `/api/commands/about.ts`
- **Output**: Your elevator pitch, key skills, call-to-action
- **Args**: None

**Command**: `work`
- **Handler**: `/api/commands/work.ts`
- **Output**: List of 3-5 projects (title, year, one-liner)
- **Args**: Optional `[1-5]` for specific project deep-dive

**Command**: `contact`
- **Handler**: `/api/commands/contact.ts`
- **Output**: Email, LinkedIn, Substack, Twitter links
- **Args**: None

**Command**: `resume`
- **Handler**: `/api/commands/resume.ts`
- **Output**: Link to resume PDF + embedded text version (optional)
- **Args**: None

### Phase 4: Extended Commands (Optional)

**Command**: `theme`
- **Output**: Toggle between dark/light theme (client-side)
- **Args**: `on`, `off`, or toggle default

**Command**: `clear`
- **Output**: Clears terminal (built-in jQuery Terminal, custom styling)
- **Args**: None

**Command**: `ls` or `tree`
- **Handler**: Client-side easter egg
- **Output**: Directory structure visualization (fun!)
- **Args**: None

---

## Styling Strategy

### Design Token System

1. **tokens.json** (Phase 0)
   - Single source of truth for colors, typography, spacing, animation
   - Manually maintained (can integrate with Figma later)

2. **tokens.css** (Phase 1)
   - CSS variables generated from tokens.json
   - Example:
     ```css
     :root {
       --color-background: #263238;
       --color-foreground: #eeffff;
       --color-accent: #80cbc4;
       --font-family: 'SF Mono', Monaco, Menlo, monospace;
       --font-size: 13px;
       --spacing-sm: 8px;
       --spacing-md: 16px;
     }
     ```

3. **terminal.css** (Phase 1)
   - jQuery Terminal theme styling
   - Terminal container, command input, output formatting
   - Uses CSS variables from tokens.css

4. **globals.css** (Phase 1)
   - Page-level styling
   - Reset, body background, fonts

### Responsive Design

- Desktop: Terminal full viewport (1024px+)
- Tablet: Terminal with padding (768px - 1023px)
- Mobile: Terminal with adjusted font size + padding (< 768px)

---

## Environment Variables

### `.env.local` (Development)

```
# Not needed for Phase 0-2 (static content)
# Future variables:
# NEXT_PUBLIC_API_URL=http://localhost:3000/api
# DATABASE_URL=...
# VOICE_API_KEY=...
```

### Vercel Environment Variables (Production)

Set in Vercel dashboard:
- `NEXT_PUBLIC_DOMAIN=imrickjames.com`
- `NEXT_PUBLIC_DEPLOYMENT_ENV=production`

---

## Deployment Pipeline

### Phase 1: Initial Setup

1. Create GitHub repo: `imrickjames/imrickjames.com` (public)
2. Push initial Next.js project
3. Connect to Vercel (login, select repo, deploy)
   - Vercel auto-detects Next.js
   - Assigns temporary URL: `imrickjames-portfolio.vercel.app`
4. Configure custom domain (GoDaddy → Vercel DNS)
   - Add CNAME/A records in GoDaddy
   - Enable in Vercel project settings
5. Enable auto-deploy on GitHub push

### Phase 2+: Iterative Deployment

- Push branch → GitHub → Vercel builds & deploys preview URL
- Push to main → Vercel deploys to production (`imrickjames.com`)
- Zero downtime deployments

---

## Development Workflow

### Local Setup

```bash
# Clone repo
git clone https://github.com/imrickjames/imrickjames.com.git
cd imrickjames.com

# Install dependencies
npm install

# Start dev server
npm run dev
# Navigate to http://localhost:3000

# Open terminal environment
# In new terminal tab, watch for changes:
npm run dev
```

### Testing Commands

- Type `help` → should list all commands
- Type `about` → should return formatted bio
- Type `work` → should list projects
- Type `work 1` → should show project 1 details

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server locally (testing)
npm run start

# Push to GitHub to trigger Vercel deploy
git add .
git commit -m "feat: add [feature]"
git push origin main
```

---

## Performance & Optimization

### Phase 0-2: Baseline
- Static content, no database → fast by default
- jQuery Terminal load: ~30KB (gzipped)
- Next.js bundle: ~80-100KB (gzipped)
- Terminal renders instantly

### Phase 3+: Monitoring (Optional)
- Use Vercel Analytics (free)
- Monitor API response times
- Track user commands (optional, for UX insights)

### Future Optimization (Phase 5+)
- Image optimization (if adding project images)
- Code splitting for larger bundles
- Service Worker for offline mode (optional)

---

## Security & Privacy

### Phase 0-2: Low Risk
- No user input beyond commands
- No database
- No authentication needed
- Static content only

### Future Considerations
- CSRF protection (if adding contact form)
- Rate limiting on API endpoints (if scaling)
- Environment variable protection

---

## Testing Strategy

### Phase 0-2: Manual Testing
- Test each command in local dev
- Test on desktop + mobile browsers
- Share preview URL for feedback

### Phase 3+: Automated Testing (Optional)
```bash
# Example Jest test
describe('about command', () => {
  test('returns formatted output', async () => {
    const res = await fetch('/api/commands/about', {
      method: 'POST',
      body: JSON.stringify({ args: [] })
    });
    const data = await res.json();
    expect(data.status).toBe('success');
    expect(data.output).toContain('about');
  });
});
```

---

## Future Extensibility

### Phase 4+: Database Integration
- Switch to headless CMS (Contentful, Sanity) for project content
- Query via GraphQL/REST instead of hardcoding
- Enable project management from web UI

### Phase 5+: Backend Features
- Contact form handler (send email via SendGrid/Mailgun)
- Blog integration (fetch from Substack RSS)
- Project showcase enhancements (image galleries, embeds)
- AI voice narration API integration

### Phase 6+: Advanced
- Multiuser sessions (show what others are typing in real-time)
- Analytics dashboard
- Admin panel for content updates

---

## References & Resources

- **jQuery Terminal**: https://jcubic.pl/jquery.terminal/
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Functions**: https://vercel.com/docs/concepts/functions/serverless-functions
- **Terminal Themes**: https://github.com/skkily/TerminalTheme_MacOS26_Spec
- **Apple Terminal Colors**: https://github.com/lysyi3m/macos-terminal-themes

---

## Decisions Locked

- ✅ Framework: Next.js + React
- ✅ Terminal UI: jQuery Terminal
- ✅ Backend: Vercel Functions (serverless)
- ✅ Deployment: Vercel + GitHub
- ✅ Theme: Apple Terminal Clear Dark
- ✅ Design System: JSON tokens exported to Figma later
- ✅ Scope: MVP (static content, 5 core commands, no database)

---

## Next Steps (Phase 1)

1. Fill in `content-brief.md` with your story, projects, skills
2. Create GitHub repo: `imrickjames/imrickjames.com`
3. Initialize Next.js project with structure above
4. Push to GitHub and connect to Vercel
5. Verify auto-deploy works on push

Estimated time: **2-3 hours** for experienced developer; **4-5 hours** with setup help.
