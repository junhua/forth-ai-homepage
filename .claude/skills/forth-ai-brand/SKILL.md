---
name: forth-ai-brand
description: Apply Forth AI brand guidelines when creating frontends. Use for UI components, pages, applications, and design systems. Enforces radical simplicity, implicit elegance, abstract graphics, and the Forth AI visual identity.
---

# Forth AI Design System

**Forth AI** is the AI-native enterprise. All interfaces must embody radical simplicity, implicit elegance, and joyful usability.

## Source Documents

Before building, read these canonical documents:

| Document | Path | Contains |
|----------|------|----------|
| **Design Doctrine** | `SSOT/Product/design-doctrine.md` | UX philosophy, layout doctrine, interaction principles |
| **Brand Guide** | `SSOT/GTM/brand-guide.md` | Visual identity, colors, typography, messaging |
| **Design Principles** | `references/design-principles.md` | Elegance, graphics, universal interface |
| **Visual Identity** | `references/visual-identity.md` | Colors, fonts, effects, components |

---

## Core Philosophy (Quick Reference)

### Implicit Over Explicit

**Design should communicate through implication, not declaration.**

| Explicit (Avoid) | Implicit (Prefer) |
|------------------|-------------------|
| Section labels everywhere | Typography hierarchy conveys structure |
| "Click here" text | Visual affordance invites interaction |
| Borders around everything | Whitespace creates separation |
| Explanatory paragraphs | Layout communicates meaning |

### Show, Don't Tell

- Let visual hierarchy replace labels
- Use position and size to indicate importance
- Trust users to understand structure from design
- Remove every element that can be removed

### The One Interface

**Google Search simplicity × ChatGPT polymorphism × Enterprise predictability.**

One universal input box handles everything. If a user needs a different page for a similar task, the design has failed.

### Speed = Product Value

| Metric | Target |
|--------|--------|
| Perceived latency | <500ms |
| First token | <600ms |
| Response style | Always streaming |
| Loading states | Skeletal placeholders, never spinners |

### Restraint

- Hide advanced features until intent is signaled
- Reveal tools contextually
- First-time users must feel like they already know how to use it

---

## Visual Identity (Quick Reference)

### Colors (Dark-First)

```css
/* Backgrounds */
--bg-primary: #0a0a0c;
--bg-secondary: #111114;
--bg-tertiary: #18181c;
--bg-elevated: #1f1f24;

/* Text */
--text-primary: #fafafa;
--text-secondary: #a1a1aa;
--text-muted: #71717a;

/* Accent — Amber */
--accent: #f59e0b;
--accent-soft: rgba(245, 158, 11, 0.15);

/* Semantic */
--success: #22c55e;
--warning: #eab308;
--danger: #ef4444;

/* Borders */
--border-subtle: rgba(255, 255, 255, 0.06);
--border-default: rgba(255, 255, 255, 0.1);
```

### Typography

| Use | Font |
|-----|------|
| Headlines, brand | Clash Display |
| Body, UI | General Sans |
| Code, technical | Geist Mono |

### Effects

- **Glass**: `backdrop-filter: blur(12px)` with subtle white overlay
- **Noise texture**: 2% opacity grain overlay
- **Glow**: Amber accent shadows on CTAs and active elements

---

## Canonical Components

### Universal Input Bar

The centerpiece. Identical across all modules.

```tsx
<input
  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
  style={{
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border-default)',
    color: 'var(--text-primary)',
  }}
  placeholder="Ask anything..."
/>
```

### Result Card

```tsx
<div
  className="rounded-xl p-4"
  style={{
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border-subtle)',
  }}
>
  <h3 style={{ fontFamily: "'Clash Display', sans-serif" }}>Title</h3>
  <p style={{ color: 'var(--text-secondary)' }}>Description</p>
  <div className="flex gap-2 mt-4">
    <Button>Edit</Button>
    <Button>Automate</Button>
    <Button>Run</Button>
  </div>
</div>
```

### Status Badges

```css
.status-draft { background: rgba(113, 113, 122, 0.2); color: #a1a1aa; }
.status-sent { background: rgba(59, 130, 246, 0.2); color: #60a5fa; }
.status-paid { background: rgba(34, 197, 94, 0.2); color: #4ade80; }
.status-overdue { background: rgba(239, 68, 68, 0.2); color: #f87171; }
```

---

## Abstract Graphics

### When to Create Graphics

Graphics reinforce meaning — they don't decorate.

| Context | Graphic Type |
|---------|--------------|
| Hero section | Animated abstract illustration |
| Empty states | Static metaphorical illustration |
| Feature cards | Icon in accent container |
| Loading | Subtle animated indicator |

### Graphic Design Principles

**Meaningful abstraction:**
- Simple geometric shapes (circles, lines, rectangles)
- Each element represents something conceptual
- Relationships between shapes tell a story
- Negative space matters

**Example concepts:**
```
Foundation strokes → Platform/base
Rising blocks → Growth/building
Connection dots → Ideas/nodes
Linking lines → Relationships
```

### Animation Patterns

| Type | Meaning | Timing |
|------|---------|--------|
| Fade + rise | Emergence | 0.4-0.8s |
| Draw path | Connection | 1-1.5s |
| Pulse | Activity | 2s loop |
| Stagger | Sequence | 100-150ms delay |

**CSS for draw-on effect:**
```css
.line {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: draw 1.2s ease-out forwards;
}
@keyframes draw { to { stroke-dashoffset: 0; } }
```

### When NOT to Use Graphics

- When text alone is clearer
- When animation distracts from content
- When graphic doesn't reinforce meaning
- On mobile (hide or simplify)

---

## Do NOT Add

- New sidebars or persistent panels
- Section labels where hierarchy is clear
- Decorative graphics without meaning
- More than 6 colors
- Borders everywhere
- Any feature that breaks the "one box" metaphor

---

## Design Checklist

Before shipping any interface:

**Elegance**
- [ ] Implicit over explicit — structure communicates without labels
- [ ] Visual hierarchy is clear without borders/dividers
- [ ] Every element earns its place (can't remove anything)
- [ ] Typography alone conveys importance

**Visual Identity**
- [ ] Brand fonts (Clash Display, General Sans)
- [ ] Dark theme with amber accent
- [ ] Glass effects where appropriate
- [ ] Meaningful graphics (not decoration)

**Usability**
- [ ] Zero learning curve (30-second test)
- [ ] Single obvious entry point
- [ ] Speed targets met (<500ms)
- [ ] Reversible actions available
- [ ] Sparks joy

---

## The Goal

A feeling of **effortless capability** — a system that "just works" for any task without overwhelming the user.
