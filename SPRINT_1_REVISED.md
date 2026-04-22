# Sprint 1: Foundation + Quick Wins

**Focus**: Accessibility baseline + mobile-first foundation + quick wins  
**Total**: ~7.5 hours  
**Goal**: Ship a solid, accessible, mobile-friendly starting point. Everything passes WCAG AA. No overlapping controls on phone.

---

## 1A: Auto-Typing Nudge (1.5 hours)
**What**: If user doesn't type for 5 seconds, terminal nudges them  
**Mobile-first**: Works perfectly on small screens  
**Accessibility**: Respectful of reduced motion preferences

### Tasks
- [ ] Code: Terminal.tsx (idle timer, auto-type logic)
- [ ] Code: terminal.css (pulse animation, optional)
- [ ] Accessibility: Respect `prefers-reduced-motion`
- [ ] Test: Nudge appears after 5 seconds
- [ ] Test: User input cancels nudge
- [ ] Test: Mobile (all screen sizes)

---

## 1B: Geo-Location Greeting (1.5 hours)
**What**: Detect visitor location, add personalized greeting hint  
**Example**: "Welcome to Rick James' terminal portfolio. Type `help` to begin. (Hey there, Denverite!)"  
**Mobile-first**: Works on all devices, zero performance impact

### Tasks
- [ ] Code: GeoGreeting.tsx (new lightweight component)
- [ ] Code: /api/geo endpoint (IP lookup, minimal)
- [ ] Integration: Terminal.tsx (update greeting on load)
- [ ] Privacy: No user tracking, IP-based only
- [ ] Test: Greeting shows location
- [ ] Test: Works without location permission
- [ ] Test: Mobile performance (no lag)

---

## 1C: Accessibility Audit & WCAG AA Baseline (1.5 hours)
**CRITICAL**: Everything must pass. No partial compliance.  
**Standard**: WCAG AA minimum (4.5:1 contrast, keyboard nav, ARIA, etc.)  
**Next sprint relies on this baseline.**

### Audit Scope
- [ ] **Colors & Contrast**
  - Terminal text on background: 4.5:1 minimum
  - Buttons on background: 4.5:1 minimum
  - All three dark theme variants checked
  - Light theme checked
  - Error/warning/success colors all checked
  
- [ ] **Keyboard Navigation**
  - All interactive elements reachable via Tab
  - Focus order logical
  - No keyboard traps
  - Modals trap focus correctly

- [ ] **ARIA & Semantics**
  - Buttons have accessible names
  - Links have visible text (no bare URLs)
  - Form inputs labeled
  - Headings hierarchical
  
- [ ] **Text & Readability**
  - Line height adequate (1.5+ for body text)
  - Text not justified (left-aligned)
  - No motion that can't be disabled
  - Text resizable without breaking layout

### Tools
- [ ] axe DevTools (Chrome extension) — Full scan
- [ ] Lighthouse (Chrome DevTools) — a11y score ≥95
- [ ] Manual keyboard testing (Tab through everything)
- [ ] Color contrast checker (any issues found)

### Fixes (as needed)
- [ ] Update terminal.css with corrected tokens
- [ ] Add focus ring styles (visible, 2px+)
- [ ] Add ARIA labels to buttons/controls
- [ ] Fix any color contrast issues
- [ ] Ensure reduced motion preference respected

### Definition of Done
- ✅ axe scan: Zero critical/serious issues
- ✅ Lighthouse a11y: ≥95 score
- ✅ Manual keyboard nav: All controls accessible
- ✅ Visual check: All text readable (dark + light theme)

---

## 1D: Mobile-First Polish (1.5 hours)
**CRITICAL**: Controls never overlap terminal content on phone.  
**Goal**: You can show someone on mobile this week with zero embarrassment.

### Mobile Layouts
- [ ] **Screen Sizes Tested**
  - iPhone SE (375px) ← Smallest
  - iPhone 12 (390px)
  - iPhone 14 Pro Max (430px)
  - iPad (768px, portrait)
  - Android phone (360px-412px range)

- [ ] **Terminal Layout**
  - Full viewport on small screens (minus safe areas)
  - No horizontal scroll
  - Content never cut off by notch/home indicator
  - All text readable (font size ≥12px)

- [ ] **Controls Positioning**
  - NEVER overlap terminal text
  - Option A: Bottom fixed bar (safe area aware)
  - Option B: Inside terminal header (no overlap)
  - Option C: Collapsible top bar
  - Decision: Test and pick best option

- [ ] **Touch Interactions**
  - Button tap targets: 44px × 44px minimum (Apple WCAG Mobile)
  - Adequate spacing between buttons (8px+)
  - No accidental taps when scrolling
  - Virtual keyboard doesn't break layout

- [ ] **Performance**
  - No jank on low-end Android device
  - Smooth theme transitions
  - No layout reflow on scroll

### Tasks
- [ ] Code: Audit & fix layout in pages/index.tsx
- [ ] Code: Update styles/globals.css (safe areas)
- [ ] Code: Update terminal.css (responsive sizing)
- [ ] Design: Decide control positioning (bottom vs. top vs. header)
- [ ] Test: All screen sizes above
- [ ] Test: Portrait & landscape
- [ ] Test: Virtual keyboard appearing/disappearing
- [ ] Test: Performance (no lag)

### Testing Devices (Real if possible)
- [ ] iPhone 12 mini or SE
- [ ] iPad (portrait + landscape)
- [ ] Android phone (if available)
- [ ] Chrome DevTools device emulation (fallback)

---

## 1E: Sprint 1 Integration Testing (1 hour)
**Goal**: All features work together; nothing breaks

### Integration Tests
- [ ] Auto-type nudge works on all devices
- [ ] Geo-greeting displays correctly
- [ ] Theme toggle works (persistence, visual)
- [ ] All text readable (no contrast issues)
- [ ] Keyboard navigation works end-to-end
- [ ] Mobile layout stable on all screen sizes
- [ ] No console errors/warnings
- [ ] No layout shifts or jank

### Final Checks
- [ ] axe scan pass: Zero critical issues
- [ ] Lighthouse pass: a11y ≥95
- [ ] Visual review: Everything looks good on phone
- [ ] Performance: Loads fast, no lag

---

## Sprint 1 Summary

```
1A: Auto-type nudge          1.5h  → Delight
1B: Geo-greeting            1.5h  → Personalization
1C: Accessibility audit     1.5h  → WCAG AA baseline
1D: Mobile polish           1.5h  → Phone-ready
1E: Integration testing     1h    → Confidence

Total: 7.5 hours
```

**What You Get**:
- ✅ Accessible foundation (WCAG AA locked in)
- ✅ Mobile-ready (show on phone with confidence)
- ✅ Delightful touches (auto-type, geo-greeting)
- ✅ No embarrassing overlaps or contrast issues
- ✅ Ready for Sprint 3 to build on

---

## Key Principles

**Accessibility First**: Everything tested before Sprint 3. No "we'll fix it later."  
**Mobile First**: If it works on phone, it works everywhere.  
**No Partial Compliance**: Pass/fail. No "some things pass."  
**User Delight**: Quick wins make it fun.

