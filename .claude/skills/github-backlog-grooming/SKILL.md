---
description: Expert skill for milestone planning, issue creation, and backlog assessment—optimized for Claude Code single-prompt development. Use for Inframagics and Omnisonant project management.
trigger: backlog|groom|milestone|sprint|story points|estimate|issue sizing|decompose|epic
---

# GitHub Backlog Grooming

Expert skill for milestone planning, issue creation, and backlog assessment—optimized for Claude Code single-prompt development.

## Core Principle

> **Every FEATURE issue must be completable by Claude Code in a single prompt session.**

An issue is correctly sized when Claude Code can read it once, understand the full scope, and generate all code without follow-up questions.

---

## Forth AI Repositories

| Product | GitHub | Local Path |
|---------|--------|------------|
| Inframagics | `Forth-AI/inframagics` | `Tech/products/inframagics/` |
| Omnisonant | `Forth-AI/omnisonant` | `Tech/products/omnisonant/` |

---

## Issue Hierarchy: EPICs vs FEATUREs

### Structure

```
EPIC (Size: XL) — Container issue, NOT for Claude Code execution
├── FEATURE (Size: S-L) — Leaf issue, Claude Code executes these
├── FEATURE (Size: S-L)
└── FEATURE (Size: S-L)
```

### Rules

| Type | Size | Claude Code | Purpose |
|------|------|-------------|---------|
| EPIC | XL only | NO — never assign | Container for related FEATUREs |
| FEATURE | S, M, L only | YES — assign directly | Single-prompt executable work |

**Key distinction:**
- **EPIC** = Planning artifact (tracks progress via sub-issues)
- **FEATURE** = Execution artifact (Claude Code reads and implements)

---

## Issue Sizing Guide

Use GitHub Project's native **Size** and **Estimate** fields.

### Size Field (T-Shirt Sizing)

| Size | Estimate | Files | Endpoints | LOC | Claude Code |
|------|----------|-------|-----------|-----|-------------|
| **XS** | 1 | 1-2 | 1 | <100 | Single function/fix |
| **S** | 2 | 2-4 | 1-2 | 100-300 | Single endpoint |
| **M** | 3 | 3-6 | 2-4 | 300-600 | CRUD for one resource |
| **L** | 5 | 5-8 | 3-5 | 500-800 | Feature with tests |
| **XL** | 8 | >8 | >5 | >800 | **EPIC only — split into FEATUREs!** |

> **Rule**: Size XL = EPIC (container). Never assign XL to Claude Code.

### Complexity Signals

**XL → Create EPIC, then split:**
- "Implement full X service" → EPIC with CRUD FEATUREs
- "Add authentication" → EPIC with middleware, routes, tokens FEATUREs
- Multiple unrelated acceptance criteria
- Cross-service changes
- >3 new provider integrations

**M or smaller (Ready for Claude Code):**
- Single API resource (CRUD for one entity)
- Clear input/output boundaries
- Self-contained with explicit dependencies
- Testable in isolation

---

## Issue Types

Use GitHub Issue Types (not labels) for categorization:

| Type | When to Use |
|------|-------------|
| **Feature** | New functionality |
| **Bug** | Defects, broken behavior |
| **Enhancement** | Improvements to existing features |
| **Documentation** | Docs, comments, READMEs |

---

## EPIC Template

```markdown
## Overview

**Product:** `inframagics` | `omnisonant`

[2-3 sentence high-level description of what this EPIC delivers]

---

## Sub-Issues (FEATUREs)

| # | Title | Size | Est | Status |
|---|-------|------|-----|--------|
| #XX | FEATURE 1 title | S | 2 | 🔴 |
| #XX | FEATURE 2 title | M | 3 | 🔴 |
| #XX | FEATURE 3 title | S | 2 | 🔴 |

**Total Estimate:** X AI-hours

---

## Scope

### In Scope
- [What's included]

### Out of Scope
- [What's excluded — reference future EPICs if applicable]

---

## Dependencies

- Depends on: #XX (if any)
- Blocks: #XX (if any)

---

## Success Criteria

- [ ] All sub-issues closed
- [ ] Integration tested
- [ ] [Business outcome achieved]
```

---

## FEATURE Template (Claude Code Optimized)

```markdown
## Description

**Product:** `inframagics` | `omnisonant`
**Path:** `src/` or `app/`
**Parent EPIC:** #XX (if applicable)
**Depends On:** #XX, library-name

[1-2 sentence scope]

### Scope
- IN: [included]
- OUT: [excluded]

---

## Interface Definitions

\`\`\`typescript
// File: src/types/workspace.ts

interface CreateWorkspaceDTO {
  name: string;
  description?: string;
}

interface WorkspaceResponse {
  id: string;
  name: string;
  createdAt: string;
}
\`\`\`

---

## Zod Schemas

\`\`\`typescript
// File: src/schemas/workspace.ts
import { z } from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().optional(),
});
\`\`\`

---

## API Routes

| Method | Path | Handler | Request | Response |
|--------|------|---------|---------|----------|
| POST | `/api/workspaces` | `create` | CreateWorkspaceDTO | WorkspaceResponse |
| GET | `/api/workspaces/:id` | `get` | - | WorkspaceResponse |

---

## Acceptance Criteria

### Application
- [ ] Routes match table
- [ ] Zod validation on inputs
- [ ] Error responses with proper status codes
- [ ] Structured logging

### Tests
- [ ] Unit tests for schemas
- [ ] Integration tests for routes
- [ ] 80% coverage

---

## Configuration

| Variable | Type | Default | Required |
|----------|------|---------|----------|
| `DATABASE_URL` | string | - | Yes |
```

---

## Sub-Issues: Linking FEATUREs to EPICs

### Create Sub-Issue Link

```bash
# Get issue node IDs first
EPIC_ID=$(gh api graphql -f query='
  query { repository(owner: "Forth-AI", name: "omnisonant") {
    issue(number: EPIC_NUMBER) { id }
  }}' | jq -r '.data.repository.issue.id')

FEATURE_ID=$(gh api graphql -f query='
  query { repository(owner: "Forth-AI", name: "omnisonant") {
    issue(number: FEATURE_NUMBER) { id }
  }}' | jq -r '.data.repository.issue.id')

# Link FEATURE as sub-issue of EPIC
gh api graphql -f query='
  mutation {
    addSubIssue(input: {
      issueId: "'$EPIC_ID'"
      subIssueId: "'$FEATURE_ID'"
    }) {
      issue { number title }
      subIssue { number title }
    }
  }'
```

### List Sub-Issues of an EPIC

```bash
gh api graphql -f query='
{
  repository(owner: "Forth-AI", name: "omnisonant") {
    issue(number: EPIC_NUMBER) {
      title
      subIssues(first: 20) {
        nodes {
          number
          title
          state
        }
      }
    }
  }
}'
```

---

## Assessing Existing Issues

### Quick Health Check

```bash
# Omnisonant issue assessment
gh issue view {NUMBER} --repo Forth-AI/omnisonant --json number,title,body,labels | jq -r '
  "Issue #\(.number): \(.title)
  Labels: \([.labels[].name] | if length == 0 then "NONE" else join(", ") end)
  Has Interfaces: \(if (.body | test("## Interface|```typescript")) then "YES" else "NO" end)
  Has Routes: \(if (.body | test("## API Routes|\\| Method")) then "YES" else "NO" end)
  Has Schemas: \(if (.body | test("## Zod|z\\.object")) then "YES" else "NO" end)
  Has Criteria: \(if (.body | test("## Acceptance|\\- \\[ \\]")) then "YES" else "NO" end)"
'
```

### Assessment Scoring (0-2 per dimension)

| Dimension | 0 (Missing) | 1 (Partial) | 2 (Complete) |
|-----------|-------------|-------------|--------------|
| Scope | Vague | Some details | Explicit boundaries |
| Interfaces | No types | Partial | Full DTO/Response/Entity |
| File Paths | None | Directory only | Exact paths with comments |
| Routes | Not listed | Text only | Table with handlers |
| Schemas | None | Mentioned | Full Zod code |
| Acceptance | None | Vague list | Testable checkboxes |
| Config | None | Listed | Table with defaults |
| Tests | None | "Add tests" | Specific test files |

**Score Interpretation:**
- 14-16: Ready for Claude Code
- 10-13: Minor grooming needed
- 6-9: Major grooming needed
- 0-5: Rewrite required

### Bulk Milestone Assessment

```bash
gh api graphql -f query='
{
  repository(owner: "Forth-AI", name: "omnisonant") {
    milestone(number: {MILESTONE_NUMBER}) {
      issues(first: 50, states: OPEN) {
        nodes {
          number
          title
          body
          labels(first: 5) { nodes { name } }
        }
      }
    }
  }
}' | jq -r '
  .data.repository.milestone.issues.nodes[] |
  "#\(.number): \(.title)
    Labels: \([.labels.nodes[].name] | if length == 0 then "MISSING" else join(", ") end)
    Interfaces: \(if (.body | test("## Interface|```typescript")) then "OK" else "MISSING" end)
    Routes: \(if (.body | test("## API Routes|\\| Method")) then "OK" else "MISSING" end)
    Schemas: \(if (.body | test("## Zod|z\\.object")) then "OK" else "MISSING" end)
    Criteria: \(if (.body | test("## Acceptance|\\- \\[ \\]")) then "OK" else "MISSING" end)
  "
'
```

---

## Breaking Down EPICs into FEATUREs

### Decomposition Strategies

**1. By CRUD Operation**
```
EPIC: "Implement Workspaces API"
FEATUREs:
  - Workspaces: Create (POST /api/workspaces) [S]
  - Workspaces: Read (GET /api/workspaces/:id, list) [S]
  - Workspaces: Update (PATCH /api/workspaces/:id) [S]
  - Workspaces: Delete (DELETE /api/workspaces/:id) [S]
```

**2. By Layer (Vertical)**
```
EPIC: "Add voice agent management"
FEATUREs:
  - Voice Agents: Schema + Repository [S]
  - Voice Agents: API Routes + Validation [M]
  - Voice Agents: Vapi Provider Integration [M]
```

**3. By Feature (Horizontal)**
```
EPIC: "Implement call sessions"
FEATUREs:
  - Sessions: State Machine + Lifecycle [M]
  - Sessions: WebSocket Handling [M]
  - Sessions: Audio Processing [L]
```

**4. By Concern (Cross-cutting)**
```
EPIC: "Add auth to all services"
FEATUREs:
  - Auth: NextAuth Middleware [S]
  - Auth: API Route Protection [S]
  - Auth: OAuth Provider Setup [M]
```

### Split Validation

After splitting, verify each FEATURE:
- [ ] Single responsibility
- [ ] Size S, M, or L (never XL)
- [ ] 3-8 files estimated
- [ ] Clear parent EPIC reference
- [ ] Independent testability
- [ ] No cross-service dependencies (or explicit)

---

## Milestone Planning

### Structure Template

```
Milestone: {NAME}
├── EPIC: Foundation
│   ├── FEATURE: Infrastructure setup
│   └── FEATURE: Shared library
├── EPIC: Core Features
│   ├── FEATURE: Primary endpoint
│   └── FEATURE: Integration
└── EPIC: Polish
    ├── FEATURE: Provider integration
    └── FEATURE: Testing/documentation
```

### Milestone Commands

```bash
# Create milestone
gh api repos/Forth-AI/omnisonant/milestones \
  --method POST \
  --field title="v0.1.0" \
  --field description="MVP release" \
  --field due_on="2025-01-15T00:00:00Z"

# Check progress
gh api graphql -f query='
{
  repository(owner: "Forth-AI", name: "omnisonant") {
    milestones(first: 10, states: OPEN) {
      nodes {
        title
        progressPercentage
        issues(states: OPEN) { totalCount }
        closedIssues: issues(states: CLOSED) { totalCount }
      }
    }
  }
}' | jq -r '.data.repository.milestones.nodes[] |
  "\(.title): \(.progressPercentage)% (\(.closedIssues.totalCount)/\(.closedIssues.totalCount + .issues.totalCount))"'
```

---

## Product Labels

### Omnisonant Labels

| Label | Use For |
|-------|---------|
| `enhancement` | Improvements |
| `bug` | Defects |
| `epic:production` | Production-related EPICs |
| `voice` | Voice/telephony features |
| `vapi` | Vapi integration |

### Inframagics Labels

| Label | Use For |
|-------|---------|
| `feature` | New functionality |
| `bug` | Defects |
| `enhancement` | Improvements |
| `ui` | Frontend/interface work |
| `api` | Backend/API work |

---

## Workflow: Create EPIC with FEATUREs

```bash
# 1. Create EPIC
gh issue create --repo Forth-AI/omnisonant \
  --title "[EPIC] Feature Area Name" \
  --label "epic:production" \
  --milestone "v0.1.0" \
  --body-file epic-template.md

# 2. Create FEATUREs
gh issue create --repo Forth-AI/omnisonant \
  --title "FEATURE 1 specific title" \
  --label "enhancement" \
  --milestone "v0.1.0" \
  --body-file feature-template.md

# 3. Link FEATUREs to EPIC (use sub-issues commands above)

# 4. List for review
gh issue list --repo Forth-AI/omnisonant --state open --json number,title,labels
```

---

## Anti-Patterns

| Anti-Pattern | Problem | Fix |
|--------------|---------|-----|
| XL assigned to Claude | Too large | Convert to EPIC, split into FEATUREs |
| "Implement full X" | Vague scope | EPIC with specific FEATUREs |
| EPIC without sub-issues | Not trackable | Add FEATUREs before starting |
| No interfaces | Claude guesses | Add TypeScript types |
| No file paths | Wrong location | Add `// File:` comments |
| No test requirements | Untested code | Specify test files |

---

## Best Practices

1. **EPICs are containers** — Never assign XL issues to Claude Code
2. **FEATUREs are executable** — Each FEATURE = one Claude Code session
3. **File paths in code blocks** — `// File: src/x/y.ts`
4. **Complete type chain** — DTO → Response → Entity
5. **Testable criteria** — Each checkbox verifiable
6. **Scope boundaries** — Explicit IN/OUT lists
7. **Dependencies first** — Reference parent EPIC
8. **No ambiguity** — If Claude would ask, add it

---

## AI-Native Estimation

Per `SSOT/.claude/rules/ai-native.md`:

| Human thinking | AI thinking |
|----------------|-------------|
| "2 weeks" | "4 AI-hours across parallel sessions" |
| "Testing is expensive" | "Testing is cheap" |
| "Documentation is burden" | "Documentation is near-zero cost" |

**Estimate in AI-hours, not human hours.**

---

## References

- GitHub CLI: `gh help issue`, `gh help api`
- GraphQL API: https://docs.github.com/en/graphql
- Forth AI Priorities: `Strategy/priorities.md`
- Sub-issues API: https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/adding-sub-issues
