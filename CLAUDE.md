# CLAUDE.md — Forth AI

## Identity

**Forth AI** (forth.ai) — Independent research lab
**Founders**: Junhua (Jeph) Liu, Kwan Hui Lim
**Model**: AI-native organization (human direction + Claude Code workforce)

**R&D Focus**:
- Workforce Reskilling — How organizations adapt to AI-native work
- AI Safety & Responsibility — Reliable, accountable AI systems
- AI-Native Enterprise — Production-ready agentic systems

**Legal Structure** (internal only):
- Foundation (CLG) — Workforce reskilling, AI safety R&D (open by default)
- Pte Ltd — Enterprise products (proprietary by default)

---

## Decision Authority

| Domain | Owner |
|--------|-------|
| Strategy, OKRs, financials | Junhua |
| External-facing work | Junhua |
| Research direction | Kwan Hui + Junhua |
| Product roadmap, GTM | Junhua |
| Code implementation | Claude Code (autonomous) |

**When in doubt**: Ask Junhua for strategic/financial/external. Execute autonomously for implementation.

---

## Strategy-First Execution

**North star**: `Strategy/okrs.md` and `Strategy/priorities.md`

Before any task:
1. Which OKR does this serve?
2. Is this the current priority?
3. If no clear connection — question why it exists

Work that doesn't connect to OKRs is entropy. Delete it or update OKRs.

---

## Execution Principles

Apply Musk's 5-step algorithm in sequence:

1. **Question requirements** — "Your requirements are definitely dumb." Ask why it needs to exist.
2. **Delete** — Remove any part you can. If not adding back 10% of deletions, not deleting enough.
3. **Simplify** — Don't optimize what shouldn't exist. Simplification beats optimization.
4. **Accelerate** — Move faster only after steps 1-3. Speed in wrong direction is waste.
5. **Automate last** — Never automate a flawed process.

---

## Minimal Entropy

- **Single source of truth**: Each fact in ONE place. Reference, don't duplicate.
- **Clear ownership**: Every task/decision/document has one owner.
- **Explicit > implicit**: State assumptions. Document decisions. Name the "why."
- **Compression**: Fewer words is better.
- **Clean handoffs**: Status files enable seamless session continuation.

---

## AI-Native Workforce

**Estimate in AI-hours, not human hours.**

| Human thinking | AI thinking |
|----------------|-------------|
| "2 weeks" | "4 AI-hours across parallel sessions" |
| "Testing is expensive" | "Testing is cheap" |
| "Documentation is burden" | "Documentation is near-zero cost" |

**Parallelize**: Multiple Claude sessions run simultaneously. Design for independence.

**Task design**: Clear specs, bounded scope, verifiable outputs, minimal dependencies.

---

## Quality Standards

AI builds fast, so build bulletproof. Quality is non-negotiable.

**Every feature**: E2E tests, integration tests, unit tests, TypeScript strict mode
**Every bug fix**: Regression test written BEFORE the fix

**Guardrails**: TypeScript strict, ESLint/Prettier in CI, pre-commit hooks, all tests pass, error monitoring

---

## Working Protocol

**Status tracking**: Maintain `status.md` in active folders. Update before ending sessions.

**Decision logging**: `/Operations/decisions/YYYY-MM-DD-topic.md` for significant decisions.

**Session handoffs**: Write everything to files. Next session continues without asking "what were we doing?"

---

## IP Rules

| Entity | Default | License |
|--------|---------|---------|
| Foundation | Open | Apache 2.0 / CC BY 4.0 |
| Pte Ltd | Proprietary | Proprietary |

**Shared**: Brand ("Forth AI"), demos (Pte Ltd owns code, Foundation references)

---

## Folder Structure

```
SSOT/           # Company meta (shared)
├── Strategy/   # OKRs, priorities (north star)
├── Product/    # Pte Ltd execution
├── Research/   # Foundation publications
├── Training/   # Foundation workshops
├── GTM/        # Pte Ltd go-to-market
└── Operations/ # Decisions, processes

Research/       # Foundation projects (papers + code)
Tech/           # Pte Ltd code (product + demos)
Business/       # Pte Ltd marketing/sales
Private/        # Junhua only (keys, finance)
```

---

## Key References

- **Strategy**: `Strategy/okrs.md`, `Strategy/priorities.md`
- **Status**: `Product/status.md`, `Research/status.md`, `Training/status.md`, `GTM/status.md`
- **Decisions**: `Operations/decisions/`
- **Brand**: `GTM/brand-guide.md`

---

## Quick Facts

- Main domain: **forth.ai**
- Push demos to Vercel via CLI (not GitHub trigger)
- Fetch/update today's date on first prompt
