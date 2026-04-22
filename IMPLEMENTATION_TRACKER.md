# Implementation Tracker

**Status**: Ready to execute  
**Last Updated**: April 21, 2026  
**Current Sprint**: 1 + 3  

---

## Sprint 1: Quick Wins (4 hours total)

### 1A: Auto-Typing Nudge (1.5 hours)
- [ ] Code: Terminal.tsx (add idle timer)
- [ ] Code: terminal.css (pulse animation)
- [ ] Test: Nudge appears after 5 seconds of inactivity
- [ ] Test: User input cancels nudge
- [ ] Test: Works on mobile
- **Status**: Not started

### 1B: Geo-Location Greeting (1.5 hours)
- [ ] Code: GeoGreeting.tsx (new component)
- [ ] Code: /api/geo endpoint (minimal)
- [ ] Integration: Terminal.tsx greeting update
- [ ] Test: Greeting shows location hint
- [ ] Test: Works without location permission
- [ ] Test: Mobile-friendly
- **Status**: Not started

### Sprint 1 Polish (1 hour)
- [ ] Test on mobile (iOS + Android)
- [ ] Test on desktop (Chrome, Safari, Firefox)
- [ ] Check console for errors
- [ ] Verify no console warnings
- **Status**: Not started

---

## Sprint 3: Theme Controls (14 hours total, in milestones)

### 3.1: Control Bar Foundation (2 hours)
- [ ] Code: ControlBar.tsx (new, mobile-first)
- [ ] Code: pages/index.tsx (layout restructure)
- [ ] Code: styles/globals.css (flex layout)
- [ ] Styling: Bottom safe-area aware on mobile
- [ ] Styling: Unobtrusive on desktop
- [ ] A11y: Keyboard navigation, ARIA labels
- [ ] Test: Theme toggle persists
- [ ] Test: No text covered on mobile
- **Status**: Not started

### 3.2: Three-Theme Segmented UI (2.5 hours)
- [ ] Code: lib/themeDefinitions.ts (3 themes)
- [ ] Code: styles/themes.css (CSS variables)
- [ ] Code: ControlBar.tsx (segmented buttons)
- [ ] Integration: Terminal.tsx (use ControlBar)
- [ ] Test: All 3 themes render correctly
- [ ] Test: WCAG AA contrast pass (all themes)
- [ ] Test: Smooth transitions
- [ ] Test: Mobile tap targets 44px+
- [ ] Test: Keyboard arrow keys work
- **Status**: Not started

### 3.3: Accessibility Audit (1.5 hours)
- [ ] Tool: axe DevTools scan
- [ ] Tool: Lighthouse audit
- [ ] Fix: Contrast issues (if any)
- [ ] Fix: Focus indicators
- [ ] Fix: ARIA labels & roles
- [ ] Test: Keyboard-only navigation
- [ ] Test: Screen reader (if possible)
- [ ] Test: axe score = zero critical issues
- [ ] Test: Lighthouse a11y score ≥95
- **Status**: Not started

### 3.4: Theme Customizer (2.5 hours)
- [ ] Code: ThemeBuilder.tsx (new)
- [ ] Code: lib/colorUtils.ts (RGB↔HSL)
- [ ] Code: ControlBar.tsx (integrate builder)
- [ ] Code: Terminal.tsx (live preview)
- [ ] Features: Color sliders for bg, text, accent
- [ ] Features: Reset to preset button
- [ ] Features: Save custom theme
- [ ] Test: Sliders work on touch & mouse
- [ ] Test: Real-time preview (no lag)
- [ ] Test: Contrast warning system
- [ ] Test: Custom theme persists
- **Status**: Not started

### 3.5: Preset Themes Gallery (2 hours)
- [ ] Code: lib/presetThemes.ts (6-9 themes)
- [ ] Code: ThemeGallery.tsx (new component)
- [ ] Code: ControlBar.tsx (integrate gallery)
- [ ] Design: Theme preview swatches
- [ ] Design: Current indicator
- [ ] Test: Gallery loads correctly
- [ ] Test: Theme switching instant
- [ ] Test: Mobile scrollable
- [ ] Test: Desktop grid responsive
- [ ] Test: Keyboard navigation
- **Status**: Not started

### 3.6: Settings Panel (2 hours)
- [ ] Code: SettingsPanel.tsx (new)
- [ ] Code: lib/accessibilitySettings.ts (logic)
- [ ] Code: ControlBar.tsx (settings toggle)
- [ ] Features: Theme selector (all 3 options)
- [ ] Features: Reduce motion toggle
- [ ] Features: High contrast toggle (7:1)
- [ ] Features: Font size scaling
- [ ] Features: Reset all settings
- [ ] Test: All toggles functional
- [ ] Test: Settings persist
- [ ] Test: No layout breaks on mobile
- **Status**: Not started

### 3.7: Mobile Polish (1.5 hours)
- [ ] Test: iPhone 12 mini (375px)
- [ ] Test: iPad (768px, landscape)
- [ ] Test: Android phone (various sizes)
- [ ] Test: Portrait & landscape
- [ ] Test: Virtual keyboard (iOS/Android)
- [ ] Test: Safe area insets
- [ ] Test: Touch targets 44px+
- [ ] Test: No horizontal scroll
- [ ] Performance: No lag on low-end devices
- **Status**: Not started

---

## Backlog (For Later)

### Sprint 2: Story + Multi-Theme (Deferred)
**Blocker**: Story content from Rick (answer STORY_QUESTIONS.md)
**When**: After Sprint 3 complete, or in parallel once story content ready
**Tasks**:
- [ ] Story research questions answered by Rick
- [ ] Story structure drafted (I'll create)
- [ ] Story content written (collaborative)
- [ ] Adventure command implementation
- [ ] Integration with terminal

### Draggable Terminal Window
**Priority**: Lower ROI, defer indefinitely
**When**: If bandwidth allows after all sprints
**Reason**: Theme controls deliver more engagement per hour
**Note**: Document saved in backlog for future reference

---

## Deployment & Monitoring

### Before Each Release
- [ ] Code compiles without errors
- [ ] No console errors/warnings
- [ ] Manual testing complete (all tests above)
- [ ] Accessibility check (axe + manual)
- [ ] Mobile testing (iOS + Android)

### After Deployment
- [ ] Verify on production (imrickjames.com)
- [ ] Check theme persists on reload
- [ ] Monitor Vercel logs (no build issues)
- [ ] Get feedback from Rick (if needed)

---

## Document Links

- [SPRINT_3_MILESTONES.md](SPRINT_3_MILESTONES.md) — Detailed milestone breakdown
- [KHROMA_THEMES.md](KHROMA_THEMES.md) — Three themes with color codes
- [STORY_QUESTIONS.md](STORY_QUESTIONS.md) — Questions for story content (later)
- [FEATURE_ROADMAP.md](FEATURE_ROADMAP.md) — Full feature documentation

---

## Notes

- **Mobile-first**: All work prioritizes mobile UX; desktop is enhanced UX
- **Incremental shipping**: Each milestone ships independently; no big monolithic PR
- **Testing**: Manual testing emphasized (especially on real devices)
- **Accessibility**: WCAG AA minimum for all features; AAA where possible

