---
description: Set session focus to Inframagics development
allowed-tools: ""
---

# SESSION FOCUS: INFRAMAGICS

**Goal**: Working on Inframagics — Agent-native workspace that replaces enterprise systems + operations teams.

**Focus**: $ARGUMENTS

Common focus areas:
- `app` — Main application (inframagics.com)
- `homepage` — Marketing site (inframagics-www)
- `demo` — Demo features and flows
- `product planning` — Roadmap, features, strategy
- Or any specific task: "fix policy editor", "add email integration", etc.

**Note**: Best used at session start or in a fresh conversation for clean context.

---

## Product Context

**Inframagics** — Agent-native workspace for the next unicorns

| Attribute | Value |
|-----------|-------|
| Target | Baby-corns (fast-growing startups, next unicorns) |
| Value prop | Eliminate SI fees, shrink ops team, instant policy changes |
| Core capabilities | Policies/SOPs, Request handling, Knowledge organization |
| Demo | https://inframagics.com |

**Strategic context**: Part of two-wedge test with Omnisonant. Goal: 5 discovery conversations. Week 5: pick ONE, kill the other.

---

## Locations

| What | Where |
|------|-------|
| **GitHub** | `git@github.com:Forth-AI/inframagics.git` |
| **Local** | `/Users/junhua/Workspace/ForthAI/Tech/products/inframagics/` |
| **Demo** | https://inframagics.com |

**Deploy**: `cd /Users/junhua/Workspace/ForthAI/Tech/products/inframagics && vercel --prod`

---

## Tech Stack

- **Framework**: Next.js 15+, TypeScript strict, Tailwind CSS 4.x
- **Database**: Prisma 6.x
- **Runtime**: bun (not npm/node)
- **Current version**: V0.0.8

---

## Design Reference

Use the **inframagics-design** skill for:
- Baby-corn test: "Would a 50-person startup use this without training?"
- AI-native principles: AI does work, human confirms (not AI assists)
- Natural language everything: No forms, no dropdowns
- Policies before rejection: User never surprised by a policy
- Interface patterns: Universal input, policy maker view, end user view

---

## Changelog

When updating the changelog:
- **Google Doc**: `1R82stImt9wlCaYV4RuTJSM7Z0OTV55NO_wFQgY6C8Vc`
- **User**: `j@forth.ai`
- **Format**: One version per day, newest at top, user-friendly language
- See `.claude/rules/inframagics-changelog.md` for full rules

---

## Key Files to Read

On session start, read these for current context:
1. `/Users/junhua/Workspace/ForthAI/Tech/products/inframagics/CLAUDE.md` — repo-specific instructions
2. `/Users/junhua/Workspace/ForthAI/SSOT/Product/status.md` — current product status
3. `/Users/junhua/Workspace/ForthAI/SSOT/GTM/status.md` — demo/GTM status

---

## Session Start

I'm now focused on **Inframagics** development. I will:

1. Read the key files above for current context
2. Apply inframagics-design skill for any design/feature work
3. Use bun for all package operations
4. Track changes in the changelog when shipping features
5. Keep the goal in mind: build demo, book discovery conversations

{{#if $ARGUMENTS}}
**Focus area**: $ARGUMENTS

I'll read the context files and begin working on this immediately.
{{else}}
What would you like to work on? (e.g., app, homepage, demo, product planning, or a specific task)
{{/if}}
