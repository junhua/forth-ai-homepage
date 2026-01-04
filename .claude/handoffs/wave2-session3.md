# Wave 2 Session 3: Mobile Responsive Layout

**Issues**: #69
**Estimate**: 3 AI-hours
**Dependencies**: None (can run parallel with other Wave 2)

## Setup

```bash
cd /Users/junhua/Workspace/ForthAI/Tech/products/inframagics
git checkout staging && git pull origin staging
git checkout -b feature/69-mobile-responsive
```

## Context

Ensure demo looks polished on tablets and phones. Key demo moments often happen on mobile devices during conversations.

## Implementation

### Issue #69: Mobile responsive layout

Read issue body: `gh issue view 69 --repo Forth-AI/inframagics`

Files to create/modify:
```
src/styles/responsive.css
src/components/layout/MobileNav.tsx
src/components/layout/ResponsiveContainer.tsx
src/hooks/useBreakpoint.ts
src/components/layout/__tests__/ResponsiveContainer.test.tsx
```

### Breakpoints

| Name | Width | Target |
|------|-------|--------|
| sm | 640px | Mobile |
| md | 768px | Tablet |
| lg | 1024px | Desktop |
| xl | 1280px | Large desktop |

### Key Responsive Areas

1. **Chat Interface**: Stack vertically on mobile
2. **Approval Cards**: Single column on mobile
3. **Navigation**: Hamburger menu on mobile
4. **Workflow Diagram**: Horizontal scroll on mobile

## Acceptance Criteria

- [ ] Chat interface works on 375px width
- [ ] Navigation collapses to hamburger on mobile
- [ ] Approval cards stack properly
- [ ] Touch-friendly tap targets (44px min)
- [ ] No horizontal scroll on any breakpoint
- [ ] Tests pass, 80% coverage

## Finalize

```bash
bun run test
bun run build
git add .
git commit -m "feat(layout): add mobile responsive layout (#69)"
git push -u origin feature/69-mobile-responsive
gh pr create --base staging --title "feat(layout): Mobile responsive layout" --body "Closes #69

## Summary
- Responsive breakpoints and container
- Mobile navigation with hamburger menu
- Touch-friendly UI adjustments

## Test plan
- [ ] Test on 375px, 768px, 1024px viewports
- [ ] Component tests for responsive behavior

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```
