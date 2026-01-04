# Wave 4 Session 1: Demo Mode Banner

**Issues**: #58
**Estimate**: 2 AI-hours
**Dependencies**: #57 (demo reset endpoint)

## Setup

```bash
cd /Users/junhua/Workspace/ForthAI/Tech/products/inframagics
git checkout staging && git pull origin staging
git checkout -b feature/58-demo-mode-banner
```

## Context

Final polish: Show demo mode indicator and reset button. This makes it clear during demos that data is ephemeral and can be reset with one click.

## Implementation

### Issue #58: Demo mode banner component

Read issue body: `gh issue view 58 --repo Forth-AI/inframagics`

Files to create:
```
src/components/demo/DemoModeBanner.tsx
src/components/demo/ResetButton.tsx
src/hooks/useDemoMode.ts
src/components/demo/__tests__/DemoModeBanner.test.tsx
```

### Banner Design

```
┌──────────────────────────────────────────────────────────┐
│ 🎭 DEMO MODE — Data resets automatically  [Reset Now]    │
└──────────────────────────────────────────────────────────┘
```

- Fixed at top of viewport
- Subtle background (amber/yellow)
- One-click reset button
- Dismissible (remembers preference)

### Environment Detection

```typescript
// File: src/hooks/useDemoMode.ts
export function useDemoMode() {
  const isDemoMode = process.env.NEXT_PUBLIC_DEMO_MODE === 'true';
  const resetDemo = async () => {
    await fetch('/api/demo/reset', { method: 'POST' });
    window.location.reload();
  };
  return { isDemoMode, resetDemo };
}
```

## Acceptance Criteria

- [ ] Banner only shows when NEXT_PUBLIC_DEMO_MODE=true
- [ ] Reset button calls /api/demo/reset
- [ ] Page reloads after reset
- [ ] Banner dismissible with cookie memory
- [ ] Accessible (keyboard navigation, screen reader)
- [ ] Tests pass, 80% coverage

## Finalize

```bash
bun run test
bun run build
git add .
git commit -m "feat(demo): add demo mode banner with reset button (#58)"
git push -u origin feature/58-demo-mode-banner
gh pr create --base staging --title "feat(demo): Demo mode banner with reset" --body "Closes #58

## Summary
- Demo mode banner component
- One-click reset functionality
- Environment-based visibility

## Test plan
- [ ] Component tests for banner
- [ ] Integration test for reset flow
- [ ] Verify env var detection

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```
