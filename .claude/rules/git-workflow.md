# Git Workflow

## Branch Strategy

**Default branch**: `main` (production)
**Integration branch**: `staging` (pre-production)

## Feature Implementation Flow

When implementing a FEATURE or EPIC issue:

### 1. Create Branch from Staging

```bash
git checkout staging
git pull origin staging
git checkout -b feature/{issue-number}-{short-description}
# or for EPICs:
git checkout -b epic/{issue-number}-{short-description}
```

**Naming examples:**
- `feature/26-expense-nl-input`
- `feature/38-notification-center`
- `epic/4-user-expense-requests`

### 2. Implement Changes

- Commit frequently with meaningful messages
- Reference issue number in commits: `feat(expense): add NL parsing #26`
- Run tests before pushing

### 3. Create PR Targeting Staging

```bash
git push -u origin feature/{branch-name}
gh pr create --base staging --title "feat: {description}" --body "Closes #{issue-number}"
```

**PR requirements:**
- Target: `staging` branch (never `main` directly)
- Link issue with `Closes #XX` or `Fixes #XX`
- Include test results in PR description

### 4. After Merge

- Delete feature branch after merge
- Issue auto-closes when PR merges (if linked correctly)

## Branch Protection

| Branch | Direct Push | PR Required | Reviews |
|--------|-------------|-------------|---------|
| `main` | No | Yes | 1 |
| `staging` | No | Yes | 0 (self-merge OK) |
| `feature/*` | Yes | - | - |

## Prompt Template

When writing prompts for Claude Code feature implementation, include:

```
Before starting:
1. git checkout staging && git pull
2. git checkout -b feature/{issue-number}-{short-name}

After implementation:
1. Run tests
2. git push -u origin feature/{branch-name}
3. gh pr create --base staging --title "feat: {title}" --body "Closes #{issue-number}"
```
