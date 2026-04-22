# Portfolio Feature Roadmap: Strategic Plan

**Date**: April 21, 2026  
**Status**: MVP complete, enhancement phase  
**Goal**: Transform terminal portfolio into an interactive, accessible, personalized experience  

---

## Current State Summary

✅ **Live & Deployed**  
- Terminal portfolio at imrickjames.com (Vercel auto-deploy working)
- Dark/light theme toggle (persisted to localStorage)
- 5 project previews with Radix modal system
- Command fuzzy-matching (Levenshtein distance)
- GitHub synced ✓

🔍 **Khroma Data Unlocked**  
- 60+ color palette favorites available
- 50+ RGB color combinations to work with
- Can generate 10-15 distinct, cohesive themes

---

## Feature Wishlist → Prioritized Phases

### What You Asked For
1. Theme controls outside terminal (Storybook-inspired) — **Phase 2B**
2. Multi-theme system from Khroma data — **Phase 2A**
3. Interactive theme builder (Material Design Builder style) — **Phase 3A**
4. Draggable/resizable terminal window — **Phase 3B**
5. Accessibility best practices (contrast, alt tags, WCAG) — **Phase 2B** (prerequisite)
6. Location-based greeting ("Hey Denverite") — **Phase 1B**
7. Auto-typing prompt/nudge on load — **Phase 1A**
8. Choose-Your-Own-Adventure branching story — **Phase 2A**

---

## Phased Implementation Plan

### 🔄 UPDATED ROADMAP (Locked Decisions)

**Execution Path**: Sprint 1 (Quick Wins) → Skip Sprint 2 → Sprint 3 (Theme Controls, Incremental) → Sprint 4 (Draggable Window + CYOA)

**Mobile-First**: All features designed for mobile first, enhanced on desktop  
**Three Khroma Themes**: Sapphire Blue, Warm Coral, Forest Green (see KHROMA_THEMES.md)  
**Draggable Terminal**: Re-prioritized — Sprint 4 (was backlog). Min/max size constraints, mobile drag-friendly.  
**Theme Customizer**: Inspired by Material Theme Builder (material-foundation.github.io/material-theme-builder) — bg, core colors, type, weights  
**Controls Outside Terminal**: Done in Sprint 1D — toggle sits above shell, never overlaps content

---

### Phase 1: Quick Wins (Low Effort, High Engagement)
**Duration**: 2-3 days | **Impact**: Medium | **Effort**: Low  
**Goal**: Delight visitors immediately with personalization and subtle guidance

#### 1A: Auto-Typing Nudge System
**What**: If user doesn't type anything within 5 seconds, terminal auto-types a gentle prompt.  
**Why**: New visitors don't always know what to do; nudge them toward exploration  
**Implementation**:
- Add idle timer in Terminal.tsx
- Auto-type commands like `help`, `about`, or context-aware suggestions
- Cost: ~1-2 hours

**Code Touches**:
- Terminal.tsx: Add setTimeout on load, detect user input
- terminal.css: Optional "pulse" animation on prompt text

**Dependencies**: None ✓

---

#### 1B: Geo-Location Greeting
**What**: Detect visitor's location → customize greeting with location hint  
**Why**: Personal touch; makes portfolio feel aware and thoughtful  
**Example**: "Welcome to Rick James' terminal portfolio. Type `help` to begin. (Hey there, Coloradoan!)"

**Implementation**:
- Use geolocation API (IP-based, free options: `ipapi.co` or `geojs.io`)
- Update greeting in PreviewModal or Terminal on mount
- Store in state, don't require permission
- Cost: ~1-2 hours

**Co⏸️ Phase 2A: Choose-Your-Own-Adventure Story (BACKLOG)
**Status**: Deferred for later (after Sprint 3)  
**Reason**: Sprint 3 theme controls are higher ROI per hour right now  
**When Ready**: Will integrate `adventure` command once themes + controls are solid

---

### Phase 3: Theme Controls & Interactive Customization (Incremental Milestones)
**Duration**: 7 days in smaller chunks | **Impact**: Very High | **Effort**: Medium-High  
**Goal**: Build accessible, mobile-first theme system with user control

**See**: [SPRINT_3_MILESTONES.md](SPRINT_3_MILESTONES.md) for detailed breakdown

#### Milestone Overview (3.1 → 3.7)
1. **3.1**: Control Bar Foundation — Move toggle outside terminal (2h)
2. **3.2**: Three-Theme Segmented UI — Sapphire, Coral, Forest switcher (2.5h)
3. **3.3**: Accessibility Audit — WCAG AA baseline (1.5h)
4. **3.4**: Theme Customizer — Interactive color sliders, inspired by Material Theme Builder (bg, core colors, type, weights) (2.5h)
5. **3.5**: Preset Gallery — Browse & apply themes (2h)
6. **3.6**: Settings Panel — Centralized accessibility controls (2h)
7. **3.7**: Mobile Polish — Touch-first optimization (1.5h)

**Total Sprint 3**: ~14 hours (in shippable increments)

---

## ⏮️ DEFERRED FEATURES (BACKLOG)

### Draggable/Resizable Terminal Window
**Status**: Sprint 4 (re-prioritized from backlog — confirmed by Rick)  
**Why**: High delight factor; aligns with terminal window aesthetic  
**Constraints**: Min size (readable), max size (viewport bounds), mobile drag via touch  
**Reference**: Consider react-rnd or custom pointer events; always respect mobile touch

### Choose-Your-Own-Adventure Story
**Status**: Backlog (requires story content from Rick)  
**Why**: Will pair perfectly with theme system + controls in Phase 2A  
**When**: After Sprint 3, integrate as new `adventure` command  
**Progress**: Story questions drafted (see STORY_QUESTIONS.md)

---

## OLD CONTENT (Archive)

### Phase 2A: Choose-Your-Own-Adventure Story + Multi-Theme System
**Status**: ARCHIVED (See backlog above)
**Duration**: 5-7 days | **Impact**: Very High | **Effort**: Medium  
**Goal**: Make portfolio interactive, memorable, and multi-sensory

#### 2A-1: Story Structure & Content (DEFERRED)
**Dependencies**: None ✓  
**Privacy Note**: IP-based geo is privacy-friendly (no user tracking)

---

### Phase 2A: Choose-Your-Own-Adventure Story + Multi-Theme System
**Duration**: 5-7 days | **Impact**: Very High | **Effort**: Medium  
**Goal**: Make portfolio interactive, memorable, and multi-sensory

#### 2A-1: Story Structure & Content
**What**: A branching narrative about Rick (funny, genuine, exploring different sides)  
**Why**: Gives visitors a unique way to learn about you; creates replay value

**Story Mapping** (based on CYOA best practices):
- **Start Node**: "You've entered Rick's terminal. What interests you?"
  - Choice A: "Show me the work"
  - Choice B: "Tell me something funny"
  - Choice C: "How do you think about design?"

- **Work Path** → Leads to project summaries, then choices to dig deeper or pivot
- **Funny Path** → Humorous anecdotes about design fails, AI mishaps, etc.
- **Philosophy Path** → Rick's thinking on craft, systems, AI in design

- **Multiple Endings**: Success (visitor impressed), Friendship (visitor subscribes), Discovery (visitor finds hidden gem)

**Implementation**:
- Create `lib/adventureData.ts` with node graph structure
- Add `adventure` command handler in execute.ts
- Terminal shows branching choices as numbered commands
- Cost: ~3-4 hours (story writing + structure)

**Code Touches**:
- lib/adventureData.ts: Node definitions (id, text, choices array)
- pages/api/commands/adventure.ts: New endpoint
- Terminal.tsx: Render numbered choices, track state
- Styling: terminal.css for choice highlighting

**Dependencies**: Story content needs to be written by Rick first

---

#### 2A-2: Multi-Theme System
**What**: Build 10-15 distinct themes from Khroma data; switch via command or UI  
**Why**: Lets visitors personalize experience; showcases your design thinking

**Theme Generation from Khroma**:
- Extract palettes from Khroma JSON's `selectedColors` array
- Generate tokens for each theme (background, text, accent, etc.)
- Create smooth transitions between themes

**Implementation**:
- Create `lib/themeSystem.ts` with theme definitions
- Map Khroma RGB to design tokens (bg, text, accent, success, warning, error)
- Add `themes` command: `themes` lists available, `theme [name]` switches
- Persist selected theme to localStorage
- Cost: ~2-3 hours

**Co# (See SPRINT_3_MILESTONES.md for detailed breakdown of each milestone)

---

## Cost-Effectiveness Analysis

| Feature | Impact | Effort | ROI | Priority |
|---------|--------|--------|-----|----------|
| Auto-typing nudge | Medium | Very Low | ⭐⭐⭐⭐ | P1 |
| Geo-greeting | Medium | Very Low | ⭐⭐⭐⭐ | P1 |
| Multi-theme | Very High | Low-Medium | ⭐⭐⭐⭐⭐ | P2 |
| Story/Adventure | Very High | Medium | ⭐⭐⭐⭐⭐ | P2 |
| Accessibility | High (required) | Medium | ⭐⭐⭐⭐⭐ | P2 |
| Control redesign | Medium | Medium | ⭐⭐⭐ | P3 |
| Theme builder | High | Medium-High | ⭐⭐⭐⭐ | P3 |
| Draggable terminal | Medium | High | ⭐⭐ | P4 |

---

## Mobile Considerations

- **Auto-typing nudge**: ✓ Works fine, consider screen-size adjustments
- **Geo-greeting**: ✓ Works great on mobile
- **Multi-theme**: ✓ Works fine, might need touch-friendly theme selector
- **Story/Adventure**: ✓ Excellent mobile experience (command-based)
- **Controls redesign**: ⚠️ Needs mobile-specific UX (bottom bar or hamburger)
- **Theme builder**: ⚠️ Sliders work on touch, but small screen needs care
- **Draggable terminal**: ⚠️ Complex on mobile; might disable drag, allow resize tap

---

## Dependencies & Blockers

```
Sprint 1: No blockers ✓
Sprint 2: Needs story content from Rick (can start code structure in parallel)
Sprint 3: Depends on Sprint 2 completion
```

---

## Next Steps & Decisions Needed

1. **Story Content**: Do you want to write the CYOA story, or shall I draft something funny/genuine?
2. **Execution Order**: Want to start with Sprint 1 (quick wins), or go straight to Sprint 2 (bigger features)?
3. **Draggable Terminal**: Keep or deprioritize? (cool but lower ROI)
4. **Theme Builder**: Interactive or just pre-set themes?
5. **Mobile Priority**: How important is touch-first experience vs. desktop?

---

## Estimated Total Work

- **Sprint 1**: 4 hours
- **Sprint 2**: 11 hours  
- **Sprint 3**: 13.5 hours
- **Total**: ~28.5 hours (3.5-4 weeks at 8 hrs/week, or 1 week at full-time)

