# Wave 1 Session 1: Chat Commands (Expense, Access, Invoice)

**Issues**: #59, #60, #61
**Estimate**: 6 AI-hours
**Dependencies**: None

## Setup

```bash
cd /Users/junhua/Workspace/ForthAI/Tech/products/inframagics
git checkout staging && git pull origin staging
git checkout -b feature/59-61-chat-commands
```

## Context

Implement three chat commands for the demo workflow:
1. Submit expense: "Submit expense for Sarah - $1,200 team lunch"
2. Request access: "Grant production access to contractor John"
3. Create invoice: "Create invoice for Acme Corp, $12,500"

Each command should:
- Parse natural language input
- Create the corresponding record
- Evaluate and return triggered policies
- Format response for chat display

## Implementation

### Issue #59: Chat command - Submit expense

Read issue body: `gh issue view 59 --repo Forth-AI/inframagics`

Files to create:
```
src/tools/expense-chat-tool.ts
src/lib/chat/expense-parser.ts
src/lib/chat/policy-evaluator.ts
src/schemas/expense-chat.ts
src/tools/__tests__/expense-chat-tool.test.ts
src/lib/chat/__tests__/expense-parser.test.ts
```

### Issue #60: Chat command - Request access

Read issue body: `gh issue view 60 --repo Forth-AI/inframagics`

Files to create:
```
src/tools/access-request-tool.ts
src/lib/chat/access-parser.ts
src/schemas/access-request.ts
src/tools/__tests__/access-request-tool.test.ts
```

### Issue #61: Chat command - Create invoice

Read issue body: `gh issue view 61 --repo Forth-AI/inframagics`

Files to create:
```
src/tools/invoice-tool.ts
src/lib/chat/invoice-parser.ts
src/schemas/invoice.ts
src/tools/__tests__/invoice-tool.test.ts
```

## Acceptance Criteria

- [ ] All three chat commands parse input correctly
- [ ] Records created in database
- [ ] Policy evaluation returns triggered policies
- [ ] All unit tests pass
- [ ] 80% coverage per file

## Finalize

```bash
bun run test
bun run build
git add .
git commit -m "feat(chat): add expense, access, invoice commands (#59, #60, #61)"
git push -u origin feature/59-61-chat-commands
gh pr create --base staging --title "feat(chat): Add expense, access, invoice chat commands" --body "Closes #59, Closes #60, Closes #61

## Summary
- Expense submission via chat with policy triggers
- Access request via chat with security policy triggers
- Invoice creation via chat with approval policy triggers

## Test plan
- [ ] Unit tests for all parsers
- [ ] Integration tests for chat flow

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```
