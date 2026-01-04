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
- Use git@github.com:Forth-AI/omnisonant.git for Omnisonant's product repo
- Use git@github.com:Forth-AI/inframagics.git for Inframagics's product repo
- use bun
- Use nextjs 16
- DO NOT add Claude or Claude Code as GitHub commit Co-Author