# Wave 1 Session 4: UX Basics (Skeletons, Transitions, Errors)

**Issues**: #67, #68, #70
**Estimate**: 6 AI-hours
**Dependencies**: None

## Setup

```bash
cd /Users/junhua/Workspace/ForthAI/Tech/products/inframagics
git checkout staging && git pull origin staging
git checkout -b feature/67-68-70-ux-basics
```

## Context

Add foundational UX polish:
1. Loading skeletons for all lists
2. Page transitions and animations
3. Error boundaries with graceful fallbacks

## Implementation

### Issue #67: Loading skeletons for all lists

Read issue body: `gh issue view 67 --repo Forth-AI/inframagics`

Files to create:
```
src/components/ui/Skeleton.tsx
src/components/ui/ListSkeleton.tsx
src/components/ui/__tests__/Skeleton.test.tsx
```

### Issue #68: Page transitions and animations

Read issue body: `gh issue view 68 --repo Forth-AI/inframagics`

Files to create:
```
src/components/transitions/PageTransition.tsx
src/components/transitions/ListTransition.tsx
src/lib/animation-utils.ts
```

### Issue #70: Error boundaries and fallbacks

Read issue body: `gh issue view 70 --repo Forth-AI/inframagics`

Files to create:
```
src/components/ErrorBoundary.tsx
src/components/ErrorFallback.tsx
src/components/__tests__/ErrorBoundary.test.tsx
```

## Acceptance Criteria

- [ ] Skeleton loaders for policy, expense, approval, notification lists
- [ ] Smooth page transitions (fade + slide)
- [ ] List items animate on load (staggered)
- [ ] Error boundaries wrap major sections
- [ ] Fallback UI with retry button
- [ ] Respects prefers-reduced-motion
- [ ] All tests pass, 80% coverage

## Finalize

```bash
bun run test
bun run build
git add .
git commit -m "feat(ux): add skeletons, transitions, error boundaries (#67, #68, #70)"
git push -u origin feature/67-68-70-ux-basics
gh pr create --base staging --title "feat(ux): Skeletons, transitions, and error boundaries" --body "Closes #67, Closes #68, Closes #70

## Summary
- Loading skeleton components for all list views
- Smooth page transitions and list animations
- Error boundaries with graceful fallbacks

## Test plan
- [ ] Visual tests for skeletons
- [ ] Component tests for error boundaries

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```
