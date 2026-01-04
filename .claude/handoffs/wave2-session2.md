# Wave 2 Session 2: Workflow Diagram

**Issues**: #65
**Estimate**: 3 AI-hours
**Dependencies**: #64 (workflow parser) complete

## Setup

```bash
cd /Users/junhua/Workspace/ForthAI/Tech/products/inframagics
git checkout staging && git pull origin staging
git checkout -b feature/65-workflow-diagram
```

## Context

Render visual workflow diagram from parsed steps. This creates the "wow moment" when AI parses natural language into visual workflow.

## Implementation

### Issue #65: Workflow diagram component

Read issue body: `gh issue view 65 --repo Forth-AI/inframagics`

Files to create:
```
src/components/workflow/WorkflowDiagram.tsx
src/components/workflow/WorkflowStepNode.tsx
src/components/workflow/WorkflowConnector.tsx
src/components/workflow/__tests__/WorkflowDiagram.test.tsx
```

### Visual Design

```
┌─────────────────┐
│   🕐 WAIT       │
│   24 hours      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   ✓ APPROVAL    │
│   Finance       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   📧 NOTIFY     │
│   Procurement   │
└─────────────────┘
```

## Acceptance Criteria

- [ ] Renders vertical step flow
- [ ] Connecting lines between steps
- [ ] Animation on initial render
- [ ] Highlight active step capability
- [ ] Responsive width
- [ ] Tests pass, 80% coverage

## Finalize

```bash
bun run test
bun run build
git add .
git commit -m "feat(workflow): add visual workflow diagram component (#65)"
git push -u origin feature/65-workflow-diagram
gh pr create --base staging --title "feat(workflow): Visual workflow diagram" --body "Closes #65

## Summary
- Workflow diagram rendering from parsed steps
- Animated step creation
- Responsive layout

## Test plan
- [ ] Component tests with various step counts
- [ ] Snapshot tests for visual consistency

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```
