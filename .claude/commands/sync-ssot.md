---
description: Sync SSOT's CLAUDE.md and .claude folder to all Tech and Research projects
---

# Sync SSOT to All Projects

Sync the SSOT `CLAUDE.md` and `.claude/` folder (commands, skills, hooks, settings) to all ForthAI projects so they can run independently on Claude Code web.

## Target Projects

**Tech:**
- `Tech/forth-ai-homepage`
- `Tech/demos/accounting`
- `Tech/demos/invoicing`

**Research:**
- `Research/shopee-collaborations/llm-recsys`
- `Research/shopee-collaborations/sia`
- `Research/shopee-collaborations/sit-recommender`
- `Research/non-llm-ai-for-finance`

## Instructions

1. Run the sync script below using Bash
2. Report which projects were updated
3. Note any new projects that should be added to the list

## Sync Script

```bash
#!/bin/bash
SSOT_DIR="/Users/junhua/Workspace/ForthAI/SSOT"
SSOT_CLAUDE="$SSOT_DIR/.claude"
SSOT_CLAUDEMD="$SSOT_DIR/CLAUDE.md"

PROJECTS=(
  "/Users/junhua/Workspace/ForthAI/Tech/forth-ai-homepage"
  "/Users/junhua/Workspace/ForthAI/Tech/demos/accounting"
  "/Users/junhua/Workspace/ForthAI/Tech/demos/invoicing"
  "/Users/junhua/Workspace/ForthAI/Research/shopee-collaborations/llm-recsys"
  "/Users/junhua/Workspace/ForthAI/Research/shopee-collaborations/sia"
  "/Users/junhua/Workspace/ForthAI/Research/shopee-collaborations/sit-recommender"
  "/Users/junhua/Workspace/ForthAI/Research/non-llm-ai-for-finance"
)

echo "Syncing SSOT to all projects..."
echo ""

for project in "${PROJECTS[@]}"; do
  if [ -d "$project" ]; then
    # Sync CLAUDE.md
    cp "$SSOT_CLAUDEMD" "$project/CLAUDE.md"

    # Remove existing .claude (except .local.md files which are project-specific)
    if [ -d "$project/.claude" ]; then
      find "$project/.claude" -type f ! -name "*.local.md" -delete 2>/dev/null
      find "$project/.claude" -type d -empty -delete 2>/dev/null
    fi

    # Copy fresh .claude folder from SSOT
    cp -r "$SSOT_CLAUDE" "$project/"

    echo "✓ Synced: $(basename "$project")"
  else
    echo "✗ Not found: $project"
  fi
done

echo ""
echo "Sync complete!"
```

Run this script, then confirm success.
