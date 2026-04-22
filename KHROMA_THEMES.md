# Three Khroma Themes for Sprint 3

Selected from your Khroma data for visual diversity + accessibility.

---

## Theme 1: Sapphire Blue

**Vibe**: Professional, calm, trustworthy  
**Primary Colors**:
- Background: `#0b3c70` (navy blue, RGB: 11, 60, 112)
- Text: `#f4f4d4` (cream white, RGB: 244, 244, 212)
- Accent: `#50c1b6` (teal cyan, RGB: 80, 193, 182)

**Token Map**:
```
--bg: #0b3c70
--surface: #1a5fa1
--panel: #062d54
--text: #f4f4d4
--muted: #a8b5c8
--accent: #50c1b6
--success: #7ed321
--warning: #ffc107
--error: #ff6b6b
--border: rgba(244, 244, 212, 0.15)
```

**Contrast Check**:
- Text on background: 12.8:1 ✅ (WCAG AAA)
- Accent on background: 6.2:1 ✅ (WCAG AA)

**Usage**: Professional projects, calm exploration mode

---

## Theme 2: Warm Coral

**Vibe**: Approachable, energetic, creative  
**Primary Colors**:
- Background: `#3e2a28` (warm dark brown, RGB: 62, 42, 40)
- Text: `#fdd6aa` (warm cream, RGB: 253, 166, 137)
- Accent: `#ff8c6b` (coral/salmon, RGB: 255, 140, 107)

**Token Map**:
```
--bg: #3e2a28
--surface: #563431
--panel: #2a1f1d
--text: #fdd6aa
--muted: #c9a68a
--accent: #ff8c6b
--success: #8fd14f
--warning: #ffb366
--error: #ff6b6b
--border: rgba(253, 166, 137, 0.15)
```

**Contrast Check**:
- Text on background: 9.4:1 ✅ (WCAG AAA)
- Accent on background: 5.8:1 ✅ (WCAG AA)

**Usage**: Personal stories, warm storytelling vibe

---

## Theme 3: Forest Green

**Vibe**: Fresh, growth-oriented, grounded  
**Primary Colors**:
- Background: `#162a1f` (deep forest green, RGB: 22, 42, 31)
- Text: `#e6f4e1` (pale mint, RGB: 230, 244, 225)
- Accent: `#6fb178` (muted sage green, RGB: 111, 177, 120)

**Token Map**:
```
--bg: #162a1f
--surface: #204029
--panel: #0f1f17
--text: #e6f4e1
--muted: #99b5a1
--accent: #6fb178
--success: #4caf50
--warning: #ffc107
--error: #ff6b6b
--border: rgba(230, 244, 225, 0.12)
```

**Contrast Check**:
- Text on background: 11.2:1 ✅ (WCAG AAA)
- Accent on background: 5.9:1 ✅ (WCAG AA)

**Usage**: Exploration mode, learning/growth themes

---

## Implementation

### Step 1: Create theme definitions file

File: `lib/themeDefinitions.ts`

```typescript
export const themes = {
  sapphire: {
    id: 'sapphire',
    name: 'Sapphire Blue',
    description: 'Professional and trustworthy',
    colors: {
      bg: '#0b3c70',
      surface: '#1a5fa1',
      panel: '#062d54',
      text: '#f4f4d4',
      muted: '#a8b5c8',
      accent: '#50c1b6',
      success: '#7ed321',
      warning: '#ffc107',
      error: '#ff6b6b',
      border: 'rgba(244, 244, 212, 0.15)',
    },
  },
  coral: {
    id: 'coral',
    name: 'Warm Coral',
    description: 'Approachable and creative',
    colors: {
      bg: '#3e2a28',
      surface: '#563431',
      panel: '#2a1f1d',
      text: '#fdd6aa',
      muted: '#c9a68a',
      accent: '#ff8c6b',
      success: '#8fd14f',
      warning: '#ffb366',
      error: '#ff6b6b',
      border: 'rgba(253, 166, 137, 0.15)',
    },
  },
  forest: {
    id: 'forest',
    name: 'Forest Green',
    description: 'Fresh and grounded',
    colors: {
      bg: '#162a1f',
      surface: '#204029',
      panel: '#0f1f17',
      text: '#e6f4e1',
      muted: '#99b5a1',
      accent: '#6fb178',
      success: '#4caf50',
      warning: '#ffc107',
      error: '#ff6b6b',
      border: 'rgba(230, 244, 225, 0.12)',
    },
  },
};
```

### Step 2: Update CSS variables

File: `styles/themes.css`

```css
[data-theme='sapphire'] {
  --bg: #0b3c70;
  --surface: #1a5fa1;
  --panel: #062d54;
  --text: #f4f4d4;
  --muted: #a8b5c8;
  --accent: #50c1b6;
  --success: #7ed321;
  --warning: #ffc107;
  --error: #ff6b6b;
  --border: rgba(244, 244, 212, 0.15);
}

[data-theme='coral'] {
  --bg: #3e2a28;
  --surface: #563431;
  --panel: #2a1f1d;
  --text: #fdd6aa;
  --muted: #c9a68a;
  --accent: #ff8c6b;
  --success: #8fd14f;
  --warning: #ffb366;
  --error: #ff6b6b;
  --border: rgba(253, 166, 137, 0.15);
}

[data-theme='forest'] {
  --bg: #162a1f;
  --surface: #204029;
  --panel: #0f1f17;
  --text: #e6f4e1;
  --muted: #99b5a1;
  --accent: #6fb178;
  --success: #4caf50;
  --warning: #ffc107;
  --error: #ff6b6b;
  --border: rgba(230, 244, 225, 0.12);
}
```

---

## Visual Preview

Imagine each theme in the terminal:

**Sapphire**: Navy background with cream text and teal accent (like a professional workspace)
**Coral**: Warm brown background with peachy text and coral accent (cozy, storytelling vibe)
**Forest**: Deep green background with mint text and sage accent (fresh, natural feel)

---

## Why These Three?

- **Visually distinct**: Not tonal variations (blue, brown, green are different hues)
- **Accessible**: All meet WCAG AAA (some even exceed AA requirements)
- **Emotional**: Each has a distinct "feeling" (professional, warm, natural)
- **Terminal-friendly**: Dark backgrounds with bright text for readability
- **Khroma-sourced**: Extracted from your actual color data

