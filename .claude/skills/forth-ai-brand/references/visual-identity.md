# Visual Identity

## Design Philosophy

**Dark-first. Glass-forward. Glow-accented. Implicit over explicit.**

The aesthetic communicates:
- **Intelligence** — Dark, sophisticated, understated
- **Future** — Glowing accents, subtle gradients
- **Clarity** — Glass effects, layered depth
- **Joy** — Amber warmth, subtle animations

### Elegance Principles

| Principle | Implementation |
|-----------|----------------|
| **Show, don't tell** | Let typography and layout communicate hierarchy, not labels |
| **Implicit structure** | Visual weight guides the eye, not explicit dividers |
| **Breathing room** | Generous whitespace, not cramped information density |
| **Earned elements** | Every visual element must justify its existence |

---

## Color Palette

### Dark Theme (Primary)

```css
:root {
  /* Backgrounds — Dark gradient system */
  --bg-primary: #0a0a0c;      /* Deepest black — main canvas */
  --bg-secondary: #111114;    /* Elevated surfaces */
  --bg-tertiary: #18181c;     /* Interactive elements */
  --bg-elevated: #1f1f24;     /* Cards, modals */

  /* Text — High contrast hierarchy */
  --text-primary: #fafafa;    /* Headlines, important content */
  --text-secondary: #a1a1aa;  /* Body text, descriptions */
  --text-muted: #71717a;      /* Captions, metadata */

  /* Accent — Amber warmth */
  --accent: #f59e0b;
  --accent-soft: rgba(245, 158, 11, 0.15);

  /* Semantic */
  --success: #22c55e;
  --warning: #eab308;
  --danger: #ef4444;

  /* Borders — Subtle glass edges */
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-default: rgba(255, 255, 255, 0.1);

  /* Glass effect */
  --glass: rgba(255, 255, 255, 0.03);
}
```

---

## Typography

### Font Stack

| Role | Font | Source |
|------|------|--------|
| **Headlines, brand** | Clash Display | fontshare.com |
| **Body, UI** | General Sans | fontshare.com |
| **Code, technical** | Geist Mono | vercel.com/font |

### Font Loading

```html
<link rel="preconnect" href="https://api.fontshare.com" crossorigin>
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=general-sans@400,500,600&display=swap" rel="stylesheet">
```

### Type Scale

| Element | Size | Weight | Font |
|---------|------|--------|------|
| H1 | clamp(42px, 7vw, 72px) | 600 | Clash Display |
| H2 | clamp(24px, 3.5vw, 32px) | 600 | Clash Display |
| H3 | 18px | 600 | Clash Display |
| Body | 15px | 400 | General Sans |
| Small | 14px | 400 | General Sans |
| Caption | 13px | 400 | General Sans |

### Gradient Text (Accent)

```css
.accent-word {
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Effects

### Glass Morphism

```css
.glass-card {
  background: var(--glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--border-subtle);
}
```

### Noise Texture

```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.015;
  background-image: url("data:image/svg+xml,..."); /* feTurbulence noise */
  z-index: 9999;
}
```

### Hover States

```css
.card {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border-color: var(--border-default);
}
```

### Accent Glow (CTAs)

```css
.cta-primary {
  background: var(--accent);
  color: #000;
  box-shadow: 0 4px 20px rgba(245, 158, 11, 0.4);
}
```

---

## Component Patterns

### Pills (Tags/Categories)

```css
.pill {
  padding: 8px 16px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 14px;
  font-weight: 500;
}
```

### Icon Containers

```css
.icon-box {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-soft);
  color: var(--accent);
}
```

### Venue/Status Badges

```css
.badge {
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 12px;
  font-weight: 600;
}
```

---

## Spacing

### Base Unit: 4px

| Token | Value | Use |
|-------|-------|-----|
| `--space-2` | 8px | Icon gaps |
| `--space-3` | 12px | Tight padding |
| `--space-4` | 16px | Standard padding |
| `--space-6` | 24px | Card padding |
| `--space-8` | 32px | Section gaps |
| `--space-12` | 48px | Section padding |

### Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--radius` | 12px | Standard |
| `--radius-lg` | 16px | Cards |
| `--radius-xl` | 20px | Large panels |
| `--radius-full` | 999px | Pills |

---

## Avoid

- Blue/purple gradients (AI cliché)
- Inter, Roboto, Open Sans (generic)
- Excessive borders and dividers
- Dense information layouts
- Explicit labels where visual hierarchy suffices
- Drop shadows on everything
- Too many competing visual elements
