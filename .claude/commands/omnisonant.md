---
description: Set session focus to Omnisonant development
allowed-tools: ""
---

# SESSION FOCUS: OMNISONANT

**Goal**: Working on Omnisonant — AI voice agents that replace call center staff.

**Focus**: $ARGUMENTS

Common focus areas:
- `app` — Main application (app.omnisonant.com)
- `homepage` — Marketing site (omnisonant.com)
- `demo` — Voice demo features
- `product planning` — Roadmap, features, strategy
- Or any specific task: "fix campaign wizard", "add dark mode", etc.

**Note**: Best used at session start or in a fresh conversation for clean context.

---

## Product Context

**Omnisonant** — Every channel, one voice.

| Attribute | Value |
|-----------|-------|
| Tagline | AI voice agents that handle calls so humans don't have to |
| Target | SMBs (dental clinics, real estate, e-commerce) + voice AI resellers |
| Value prop | 95% cost reduction, 24/7 availability, perfect consistency |
| Core use cases | Appointment scheduling, lead qualification, customer support |

**Strategic context**: Part of two-wedge test with Inframagics. Goal: 5 discovery conversations. Week 5: pick ONE, kill the other.

---

## Locations

| What | Where |
|------|-------|
| **GitHub** | `git@github.com:Forth-AI/omnisonant.git` |
| **Local** | `/Users/junhua/Workspace/ForthAI/Tech/products/omnisonant/` |
| **Marketing** | https://omnisonant.com (Vercel: omnisonant-www) |
| **App** | https://app.omnisonant.com (Vercel: omnisonant) |

**Deploy**: `cd /Users/junhua/Workspace/ForthAI/Tech/products/omnisonant && vercel --prod`

---

## Tech Stack

- **Framework**: Next.js 15+, TypeScript strict, Tailwind CSS 4.x
- **Database**: Prisma 6.x
- **Voice pipelines**: Vapi + Twilio (production) / OpenAI Realtime (web demo)
- **Runtime**: bun (not npm/node)
- **Current version**: V0.0.4

---

## Design Reference

Use the **omnisonant-design** skill for:
- Voice agent design principles (sound human, be honest, fast and focused)
- Conversation patterns and script templates
- UI patterns (admin dashboard, agent builder, campaign manager)
- Anti-patterns to avoid (IVR in disguise, amnesia agent, etc.)

---

## Changelog

When updating the changelog:
- **Google Doc**: `1Dcmb1-0Hc69CDHe3peZ7pkFEqLwdFvLxReo1pRMyt_g`
- **User**: `j@forth.ai`
- **Format**: One version per day, newest at top, user-friendly language
- See `.claude/rules/omnisonant-changelog.md` for full rules

---

## Key Files to Read

On session start, read these for current context:
1. `/Users/junhua/Workspace/ForthAI/Tech/products/omnisonant/CLAUDE.md` — repo-specific instructions
2. `/Users/junhua/Workspace/ForthAI/SSOT/Product/status.md` — current product status
3. `/Users/junhua/Workspace/ForthAI/Tech/products/omnisonant/e2e/TEST-STATUS.md` — test coverage

---

## Session Start

I'm now focused on **Omnisonant** development. I will:

1. Read the key files above for current context
2. Apply omnisonant-design skill for any design/feature work
3. Use bun for all package operations
4. Track changes in the changelog when shipping features
5. Keep the goal in mind: build demo, book discovery conversations

{{#if $ARGUMENTS}}
**Focus area**: $ARGUMENTS

I'll read the context files and begin working on this immediately.
{{else}}
What would you like to work on? (e.g., app, homepage, demo, product planning, or a specific task)
{{/if}}
