# Wave 3 Session 1: Demo Reset & Step Icons

**Issues**: #57, #66
**Estimate**: 5 AI-hours
**Dependencies**: #56 (demo seed data), #64 (workflow parser)

## Setup

```bash
cd /Users/junhua/Workspace/ForthAI/Tech/products/inframagics
git checkout staging && git pull origin staging
git checkout -b feature/57-66-demo-reset-icons
```

## Context

Two related features:
1. Demo reset endpoint to restore seed data between demos
2. Visual icons for workflow step types (enhances diagram)

## Implementation

### Issue #57: Demo reset endpoint

Read issue body: `gh issue view 57 --repo Forth-AI/inframagics`

Files to create:
```
src/app/api/demo/reset/route.ts
src/lib/demo-reset.ts
src/schemas/demo-reset.ts
src/app/api/demo/__tests__/reset.test.ts
```

### Issue #66: Step type icons

Read issue body: `gh issue view 66 --repo Forth-AI/inframagics`

Files to create:
```
src/components/workflow/StepIcon.tsx
src/components/workflow/icons/index.ts
src/components/workflow/__tests__/StepIcon.test.tsx
```

### Step Type → Icon Mapping

| Step Type | Icon | Description |
|-----------|------|-------------|
| WAIT | 🕐 Clock | Time delay |
| APPROVAL | ✓ Check | Requires sign-off |
| ACTION | ⚡ Lightning | Automated task |
| NOTIFY | 📧 Envelope | Send notification |
| CHECK | 🔍 Magnify | Condition check |

## Acceptance Criteria

### Demo Reset
- [ ] POST /api/demo/reset restores seed data
- [ ] Clears all user-created data
- [ ] Re-runs seed script
- [ ] Returns success message with stats

### Step Icons
- [ ] Icon component for each step type
- [ ] Accessible with aria-labels
- [ ] Consistent sizing (24x24, 32x32)
- [ ] Tests pass, 80% coverage

## Finalize

```bash
bun run test
bun run build
git add .
git commit -m "feat(demo): add reset endpoint and step icons (#57, #66)"
git push -u origin feature/57-66-demo-reset-icons
gh pr create --base staging --title "feat(demo): Demo reset and step type icons" --body "Closes #57, Closes #66

## Summary
- Demo reset API endpoint
- Step type icons for workflow visualization
- Icon accessibility improvements

## Test plan
- [ ] Reset endpoint integration test
- [ ] Icon component tests
- [ ] Visual snapshot tests

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```
