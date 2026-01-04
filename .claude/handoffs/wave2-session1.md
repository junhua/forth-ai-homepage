# Wave 2 Session 1: Demo Seed Data

**Issues**: #56
**Estimate**: 2 AI-hours
**Dependencies**: Wave 1 complete (chat commands exist)

## Setup

```bash
cd /Users/junhua/Workspace/ForthAI/Tech/products/inframagics
git checkout staging && git pull origin staging
git checkout -b feature/56-demo-seed-data
```

## Context

Create seed script with realistic demo data matching the presale demo scenarios. Data should support all demo workflows.

## Implementation

### Issue #56: Demo seed data script

Read issue body: `gh issue view 56 --repo Forth-AI/inframagics`

Files to create:
```
prisma/seed.ts
scripts/demo-seed.ts
src/schemas/demo-seed.ts
src/lib/demo-data.ts
scripts/__tests__/demo-seed.test.ts
```

### Demo Data Content

**Users:**
- admin@demo.inframagics.com (Admin, Operations)
- sarah@demo.inframagics.com (User, Engineering)
- mike@demo.inframagics.com (User, Sales)

**Policies:**
- Expense Approval (>$500 → manager, >$2000 → finance)
- Large Purchase (>$5000 → VP)
- Production Access (eng lead + security for contractors)
- Vendor Onboarding (finance sign-off + W-9)

**Sample Items:**
- 4 pending expenses (various amounts to trigger different policies)
- 2 pending invoices ($2,500 and $12,500)
- 1 pending access request (contractor)
- 3 vendors (1 pending W-9)

## Acceptance Criteria

- [ ] `bun run seed:demo` populates all demo data
- [ ] Seed is idempotent (can run multiple times)
- [ ] Data matches demo workflow scenarios
- [ ] All relationships properly connected
- [ ] Tests pass, 80% coverage

## Finalize

```bash
bun run test
bun run build
git add .
git commit -m "feat(demo): add demo seed data script (#56)"
git push -u origin feature/56-demo-seed-data
gh pr create --base staging --title "feat(demo): Demo seed data script" --body "Closes #56

## Summary
- Seed script with realistic demo data
- Users, policies, expenses, invoices, access requests
- Idempotent execution

## Test plan
- [ ] Run seed:demo and verify data
- [ ] Unit tests for seed validation

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```
