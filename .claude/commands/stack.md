---
description: Verify latest stable versions and fetch documentation for the tech stack
---

Before writing any code, verify the current stable versions and load relevant documentation.

## Step 1: Check Latest Stable Versions

Use WebSearch to find the current stable version for each technology:

1. **Framework**:
   - Search: "Next.js latest stable version"

2. **Styling**:
   - Search: "Tailwind CSS latest stable version"

3. **AI**:
   - Search: "Vercel AI SDK latest version"

4. **Testing**:
   - Search: "Vitest latest stable version"
   - Search: "Playwright latest stable version"

## Step 2: Fetch Documentation

Use DeepWiki MCP to load key documentation:

```
mcp__deepwiki__read_wiki_contents for:
- vercel/next.js
- vercel/ai
- tailwindlabs/tailwindcss
- microsoft/playwright
```

Focus on:
- App Router patterns (Next.js)
- AI SDK streaming and tool usage (Vercel AI)
- Latest config format (Tailwind)
- Test patterns (Playwright)

## Step 3: Output Version Lock

Output a version summary for the project:

```markdown
## Version Lock (as of [date])

| Technology | Version | Notes |
|------------|---------|-------|
| Next.js | X.X.X | App Router |
| Tailwind CSS | X.X | |
| Vercel AI SDK | X.X.X | |
| Vitest | X.X.X | |
| Playwright | X.X.X | |
| Node.js | X.X (LTS) | |

## Key Documentation Notes

[Any breaking changes or important patterns to follow]
```

## Step 4: Save to Project

If starting a new project, save the version lock to the project's README.md.

## Usage

```
/stack
```

This ensures code is written against current stable versions with correct patterns.
