# Cleanup — Reflect & Organize

Periodic hygiene for ForthAI workspace. Reflects first, then cleans.

---

## Part 1: Reflect

Before cleaning, assess current state:

### What's been happening?
- What tasks were worked on recently?
- What files were created/modified?
- Any decisions made that should be logged?

### Is anything off-track?
- Work that violates the 5-step principles?
- Complexity added that should be deleted?
- Optimization of things that shouldn't exist?

### What's the actual priority now?
- Are we working on the right thing?
- What should come next based on the three pillars (Product/Research/GTM)?

**Output a brief reflection summary before proceeding to cleanup.**

---

## Part 2: Structure Compliance

Check files are in correct locations:

```
Tech/           → All code (product, demos, research)
SSOT/           → All documentation (status, planning, operations)
```

**Note**: Personal brand (junhua.me) moved to separate workspace at `../../junhua.me/`

**Scan for:**
- Code files (.ts, .tsx, .py, .js, .go, etc.) in SSOT/ → move to Tech/
- Heavy documentation in Tech/ → move to SSOT/
- Misplaced files in root

---

## Part 3: Status Freshness

Check status.md files:
- SSOT/Product/status.md
- SSOT/Research/status.md
- SSOT/GTM/status.md

**Flag if:**
- Last updated >7 days ago
- "Current State" doesn't match reality
- "Next Steps" are stale

**Auto-update status files with current state.**

---

## Part 4: Entropy Check

**Verbosity:**
- Files over 200 lines → flag for compression
- Duplicate content → flag for consolidation

**Dead references:**
- Links to moved/deleted files
- References to old structure

**Decision gaps:**
- Major changes without logged decisions?

---

## Part 5: Code Activity Sync

Sync documentation with actual code activity in Tech/.

### Mapping

| Tech/ folder | Status file | Notes |
|--------------|-------------|-------|
| `Tech/product/` | `Product/status.md` | PaaS codebase |
| `Tech/research/` | `Research/status.md` | Paper experiment code |
| `Tech/demos/` | `GTM/status.md` | Presales demos |

**Note**: Personal brand (junhua.me) is tracked in separate workspace.

### Process

**Step 1: Discover git repos**

Scan for `.git` directories in Tech/:
- Root level repos: `Tech/product/.git`
- Nested repos: `Tech/demos/demo-name/.git`, `Tech/research/paper-name/.git`

**Step 2: Get recent activity (last 7 days)**

For each discovered repo, run:
```bash
git -C [repo-path] log --oneline --since="7 days ago" --no-merges
```

Also check for uncommitted changes:
```bash
git -C [repo-path] status --porcelain
```

**Step 3: Detect drift**

Compare git activity against status files:

| Drift Type | Symptom | Action |
|------------|---------|--------|
| **Undocumented work** | Commits exist, not in status.md | Add to "In Progress" or "Done" |
| **Stale documentation** | Status says "In Progress", no recent commits | Flag for review |
| **Uncommitted work** | Working tree dirty | Note in status, consider committing |
| **Empty folder** | No .git, no files | Note as "Not started" |

**Step 4: Auto-update status files**

For each pillar with code activity:

1. Summarize recent commits (group by feature/purpose, not raw list)
2. Update "In Progress" section with active work
3. Move completed items to appropriate section
4. Update "Last Updated" timestamp
5. Add "Recent Activity" subsection if significant work occurred

### Output per repo

```
Tech/demos/my-demo/:
  Commits (7d): 3 commits
  Summary: Added new feature, fixed bugs
  Uncommitted: clean
  Status sync: GTM/status.md updated
```

---

## Output Format

```
## Reflection

[Brief assessment of current state and direction]

## Cleanup Report

### Structure
- [x] All code in Tech/ ✓
- [ ] [issue found] → [action]

### Status Files
- [x] Product/status.md — fresh
- [ ] Research/status.md — stale, updating...

### Code Activity Sync
- [ ] Tech/demos/ — no git repos found
- [ ] Tech/product/ — empty, matches "Conceptual" status
- [ ] Tech/research/ — empty, matches status

### Entropy
- [ ] [file] flagged for [reason]

### Decisions to Log
- [ ] [decision that should be documented]

## Recommended Next Action

[What to focus on now based on reflection]
```

---

## Behavior

- **Auto-fix:** File locations, status updates, code activity sync
- **Report:** Verbosity issues, decision gaps, drift between code and docs
- **Ask before:** Destructive changes, major reorganization
