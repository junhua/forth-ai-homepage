---
name: tasks
description: Initialize or manage AI-native task tracking for a project
arguments:
  - name: action
    description: "Action to perform: init, status, add, done"
    required: false
---

# Task Management

Manage development tasks using the AI-native development lifecycle.

## Actions

### `/tasks init`
Initialize task tracking in the current project by creating a TASKS.md file.

### `/tasks status`
Show current task board summary (In Progress, Review, Blocked counts).

### `/tasks add [title]`
Add a new task to the backlog with proper template.

### `/tasks done [task-id]`
Move a task to Done and archive it.

## Instructions

Based on the action requested:

**If `init` or no action specified:**
1. Check if TASKS.md exists in the current project root
2. If not, create it using the template from `.claude/skills/ai-native-dev/TASKS-TEMPLATE.md`
3. Customize the project name
4. Report success

**If `status`:**
1. Read TASKS.md
2. Count tasks in each state
3. Show summary with any blocked items highlighted

**If `add`:**
1. Read TASKS.md
2. Generate next task ID (e.g., TASK-007)
3. Add task to P1 backlog with template
4. Ask for spec details if not provided

**If `done`:**
1. Find the task by ID
2. Move it to Done section with today's date
3. Update Last Updated timestamp

## Output Format

Always update the "Last Updated" timestamp when modifying TASKS.md.

For status, output:
```
📋 Task Board: [Project Name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔨 In Progress: X
👀 Review:      X
🚫 Blocked:     X
📝 Backlog:     X
✅ Done:        X (this sprint)

[If blocked, show blockers]
```
