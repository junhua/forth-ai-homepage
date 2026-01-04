# Wave 1 Session 3: Workflow Parser

**Issues**: #64
**Estimate**: 3 AI-hours
**Dependencies**: None

## Setup

```bash
cd /Users/junhua/Workspace/ForthAI/Tech/products/inframagics
git checkout staging && git pull origin staging
git checkout -b feature/64-workflow-parser
```

## Context

Parse natural language workflow descriptions into structured step definitions. This is critical for the "wow moment" in demos.

Example input:
> "When new vendor submitted: wait 24 hours for documentation, then get finance approval, then notify procurement to set up payment terms"

Parsed output:
```typescript
{
  trigger: "When new vendor submitted",
  steps: [
    { type: 'WAIT', label: '24 hours', params: { duration: 24, unit: 'hours' } },
    { type: 'APPROVAL', label: 'Finance approval', params: { approver: 'finance' } },
    { type: 'NOTIFY', label: 'Notify procurement', params: { recipient: 'procurement', message: 'set up payment terms' } }
  ],
  confidence: 0.95
}
```

## Implementation

### Issue #64: Workflow step parser from NL

Read issue body: `gh issue view 64 --repo Forth-AI/inframagics`

Files to create:
```
src/lib/workflow/parser.ts
src/lib/workflow/step-detector.ts
src/schemas/workflow.ts
src/lib/workflow/__tests__/parser.test.ts
```

Step types to detect:
- WAIT: "wait X hours/days", "after X time"
- APPROVAL: "get X approval", "require X sign-off"
- ACTION: "do X", "process X", "create X"
- NOTIFY: "notify X", "send to X", "email X"
- CHECK: "if X", "check X", "verify X"

## Acceptance Criteria

- [ ] Parses WAIT with duration extraction
- [ ] Parses APPROVAL with approver detection
- [ ] Parses ACTION and NOTIFY steps
- [ ] Returns confidence score
- [ ] Handles all demo scenario workflows
- [ ] All tests pass, 80% coverage

## Finalize

```bash
bun run test
bun run build
git add .
git commit -m "feat(workflow): add NL workflow step parser (#64)"
git push -u origin feature/64-workflow-parser
gh pr create --base staging --title "feat(workflow): Natural language workflow parser" --body "Closes #64

## Summary
- Parse natural language into structured workflow steps
- Support WAIT, APPROVAL, ACTION, NOTIFY, CHECK step types
- Confidence scoring for parsed results

## Test plan
- [ ] Unit tests for each step type
- [ ] Test all demo scenario workflows

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```
