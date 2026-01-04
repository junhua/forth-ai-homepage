# Inframagics Roles & MVP Specification

**Last Updated**: 2026-01-01
**Full Spec**: `Product/inframagics-roles-capabilities.md`

## Design Philosophy: Claude Code for Non-Engineers

**Core analogy**: Inframagics mirrors Claude Code experience for non-engineers.

| Claude Code | Inframagics |
|-------------|-------------|
| Terminal/CLI | Chat interface (Genspark-style) |
| User mode: Write code, commit | User mode: Submit requests, execute tasks |
| Admin mode: Create rules/MCP/skills | Admin mode: Create policies, SOPs, workflows |
| System evolves as you use it | System learns and improves over time |

**Key difference**: Inframagics is for people extremely uncomfortable with terminal/CLI.

## Unified Interface, Role-Based AI Behavior

**Same UI for all roles** — inspired by Genspark:
- **Main window**: Chat interface for AI instructions
- **Left sidebar**: Business functions directory (Finance, HR, Customers, IT)

**AI behavior changes based on role, not the interface:**
- **Admin AI**: Focuses on policies, SOPs, settings, system configuration
- **User AI**: Clarify request → Reason → Retrieve policies/workflows → Execute

## Role Framework

| Role | Scale | Priority | Description |
|------|-------|----------|-------------|
| **Admin** | 10+ | P0/MVP | System owner, policy creator, approver |
| **User** | 10+ | P0/MVP | Request submitter, information seeker |
| **Manager** | 30+ | P1/v1.1 | Team approver, delegator |
| **Policy Owner** | 100+ | P2/v1.2 | Domain specialist |
| **External** | 300+ | P3/v2.0 | Vendors, auditors |

## The Virtuous Cycle

```
User friction → Admin creates policy → System improves → Future users benefit
```

This is why Inframagics replaces the ops team, not just the tools.

## MVP Definition

**Target**: Seed/Growth (10-100 employees)
**Value**: "Expenses without ops team"

### MVP Roles
- Admin: Create policies, approve all, view dashboard
- User: Submit expenses, track status, ask questions

### MVP Function: Finance (Expenses Only)

## Roadmap

```
MVP → Admin + User, Finance (Expenses)
v1.1 → + Manager, + HR (Time Off)
v1.2 → + Policy Owner, + Procurement/IT
v2.0 → + External, Full suite
```
