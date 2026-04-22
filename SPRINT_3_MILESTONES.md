# Sprint 3: Theme Controls - Incremental Milestones

**Focus**: Move controls outside terminal → build accessible theme system → interactive customization  
**Mobile-first**: All milestones designed for mobile, enhanced on desktop  
**Total**: ~13.5 hours spread across smaller, shippable increments

---

## Milestone 3.1: Control Bar Foundation (2 hours)
**Goal**: Move theme toggle outside terminal; establish control surface  
**Mobile**: Bottom fixed bar (doesn't cover terminal content)  
**Desktop**: Top-right floating panel

### What ships
- ✅ ThemeToggle component moved to fixed position
- ✅ Terminal fills remaining space (no overlap)
- ✅ Mobile: Bottom safe-area aware (accounts for notches)
- ✅ Desktop: Subtle shadow, unobtrusive
- ✅ Accessible: Keyboard focus, ARIA labels

### Code changes
- components/ControlBar.tsx (new, mobile-first)
- pages/index.tsx (layout restructure)
- styles/globals.css (flexbox layout)
- styles/terminal.css (full viewport terminal)

### Testing
- [ ] Theme persists across page reload
- [ ] No text covered on mobile (any screen size)
- [ ] Keyboard navigation works
- [ ] Dark/light switch works

---

## Milestone 3.2: Three-Theme Segmented Controller (2.5 hours)
**Goal**: Replace simple toggle with 3-button segmented selector  
**Themes**: [Sapphire Blue], [Warm Coral], [Forest Green] (from Khroma)  
**Mobile**: Full-width buttons, clear labels, accessible tap targets (44px+)  
**Desktop**: Compact horizontal bar

### What ships
- ✅ Three distinct Khroma-based themes
- ✅ Segmented control UI (accessible buttons)
- ✅ Real-time switching
- ✅ Persists selection
- ✅ Smooth CSS transitions between themes
- ✅ Keyboard & mouse support

### Code changes
- lib/themeSystem.ts (theme definitions from Khroma)
- styles/themes.css (CSS variables for each theme)
- components/ControlBar.tsx (segmented selector)
- Terminal.tsx (remove old toggle, use ControlBar)
- styles/terminal.css (transition smoothing)

### Testing
- [ ] All three themes render correctly
- [ ] Contrast passes WCAG AA (4.5:1 for text)
- [ ] Transitions smooth on low-end devices
- [ ] Mobile tap targets are 44px+ (accessibility)
- [ ] Keyboard: Arrow keys move between themes

---

## Milestone 3.3: Accessibility Baseline (1.5 hours)
**Goal**: Audit & fix all contrast, focus, ARIA issues  
**Scope**: Terminal text, controls, modals  
**Standards**: WCAG AA

### What ships
- ✅ No contrast issues (minimum 4.5:1 for normal text)
- ✅ All interactive elements have focus indicators
- ✅ ARIA labels on buttons, controls
- ✅ Semantic HTML structure
- ✅ Screen reader tested

### Tools
- axe DevTools (scan for issues)
- Lighthouse (Chrome DevTools)
- Manual keyboard navigation test

### Testing
- [ ] axe scan passes (zero critical issues)
- [ ] Lighthouse accessibility score ≥95
- [ ] Keyboard-only navigation possible
- [ ] Focus visible on all buttons
- [ ] Screen reader announces all controls

---

## Milestone 3.4: Theme Customizer UI (2.5 hours)
**Goal**: Interactive controls for tweaking theme colors  
**Mobile**: Vertical stack of sliders (full width)  
**Desktop**: Horizontal panel, collapsible  
**Scope**: 3 main adjustments (background, text, accent)

### What ships
- ✅ Color sliders for background, text, accent
- ✅ Live preview in terminal (real-time)
- ✅ "Reset to preset" button (fallback if user breaks contrast)
- ✅ Save custom theme to localStorage
- ✅ Touch-friendly sliders (mobile)
- ✅ All changes accessible (ARIA live regions)

### Code changes
- components/ThemeBuilder.tsx (new, mobile-first)
- lib/colorUtils.ts (RGB↔HSL conversion)
- ControlBar.tsx (integrate builder toggle)
- Terminal.tsx (live theme preview)

### Testing
- [ ] Sliders work on touch & mouse
- [ ] Real-time preview (no lag)
- [ ] Can't create invalid contrasts (visual warning)
- [ ] Custom theme persists
- [ ] Reset button works
- [ ] WCAG AA maintained even with user edits

---

## Milestone 3.5: Preset Themes Gallery (2 hours)
**Goal**: Users can browse & apply pre-built themes from Khroma  
**Mobile**: Scrollable horizontal list of theme cards  
**Desktop**: Grid of 6-9 theme previews

### What ships
- ✅ 6-9 pre-built themes (curated from Khroma data)
- ✅ Click to apply instantly
- ✅ "Current" indicator (which is active)
- ✅ Each theme shows 3-color preview swatch
- ✅ Works offline (no API calls)

### Code changes
- lib/presetThemes.ts (theme collection)
- components/ThemeGallery.tsx (new)
- ControlBar.tsx (integrate gallery)
- Styling: mobile grid, desktop grid

### Testing
- [ ] All presets load without errors
- [ ] Theme switching instant
- [ ] Mobile: scrollable without text overlap
- [ ] Desktop: grid responsive
- [ ] Keyboard: Tab through themes, Enter to select

---

## Milestone 3.6: Settings Panel (2 hours)
**Goal**: Centralized control for accessibility, theme, performance  
**Mobile**: Modal/sidebar (don't cover terminal)  
**Desktop**: Floating panel

### What ships
- ✅ Theme selector (3-button, gallery, or custom)
- ✅ Accessibility toggles:
  - Reduce motion (prefers-reduced-motion)
  - High contrast mode (boost all contrasts to 7:1)
  - Larger text (scales terminal font size)
- ✅ Performance options (enable/disable animations)
- ✅ Reset all settings button
- ✅ All settings persist to localStorage

### Code changes
- components/SettingsPanel.tsx (new)
- ControlBar.tsx (Settings icon/button)
- lib/accessibilitySettings.ts (settings logic)
- styles/globals.css (CSS custom properties for scaling)

### Testing
- [ ] All toggles work
- [ ] Reduce motion disables transitions
- [ ] High contrast passes 7:1 ratio
- [ ] Font scaling doesn't break layout (mobile)
- [ ] Settings persist across sessions

---

## Milestone 3.7: Mobile Optimization & Polish (1.5 hours)
**Goal**: Ensure all milestones work perfectly on mobile  
**Scope**: Touch interactions, safe areas, responsive layouts

### What ships
- ✅ Touch-friendly tap targets (44px+ minimum)
- ✅ Safe area insets respected (notches, home indicators)
- ✅ No horizontal scrolling (mobile web)
- ✅ Controls never cover terminal text
- ✅ Keyboard handling for mobile (virtual keyboard)
- ✅ Fast interactions (no lag on low-end devices)

### Testing checklist
- [ ] iPhone 12 mini (smallest common screen)
- [ ] iPad (tablet experience)
- [ ] Android phone (various sizes)
- [ ] Portrait & landscape
- [ ] Touch keyboard appearing/disappearing
- [ ] No flickering or repaints

---

## Summary: 3.1 → 3.7 Sequential Approach

```
Milestone → Hours → Cumulative → Ships
3.1: Control Bar Foundation       2h    →  2h   → (Baseline)
3.2: Three-Theme Segmented UI    2.5h  →  4.5h  → (First themes)
3.3: Accessibility Audit         1.5h  →  6h    → (Baseline quality)
3.4: Theme Customizer            2.5h  →  8.5h  → (Interactive)
3.5: Preset Gallery              2h    → 10.5h  → (Visual browsing)
3.6: Settings Panel              2h    → 12.5h  → (Centralized control)
3.7: Mobile Polish               1.5h  → 14h    → ✅ DONE
```

**Total**: ~14 hours (instead of 13.5)

---

## Why This Order?

1. **Foundation first** (3.1): Build the outer structure before content
2. **Themes ASAP** (3.2): Visual payoff; makes the site feel different
3. **Accessibility early** (3.3): Baseline quality; informs later work
4. **Interactivity** (3.4-3.5): Users feel agency over their experience
5. **Polish** (3.6-3.7): Final refinement, edge cases, mobile

---

## Mobile-First Implementation Notes

- **All metrics** in px or relative units (not viewport-specific)
- **Breakpoints**: 375px (mobile), 768px (tablet), 1024px (desktop)
- **Safe areas**: Use env() for notches: `env(safe-area-inset-bottom)`
- **Buttons**: Minimum 44px × 44px (WCAG mobile touch)
- **Controls**: Fixed position never overlaps scrollable content
- **Testing**: Chrome DevTools device emulation + real devices

