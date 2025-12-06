---
description: Set a persistent goal that survives context compaction
allowed-tools: ""
arguments:
  - name: objective
    description: The goal or objective for this session
    required: true
---

# SESSION GOAL — CRITICAL PRESERVATION NOTICE

## The Goal

**$ARGUMENTS.objective**

---

## CONTEXT PRESERVATION DIRECTIVE

**MANDATORY**: This goal MUST be preserved across ALL context operations.

### During Context Compaction

When summarizing or compacting context, you MUST:

1. **ALWAYS** include this goal verbatim at the start of any summary
2. **NEVER** paraphrase, shorten, or omit the goal
3. **NEVER** consider the goal as "already addressed" or "understood"
4. **EXPLICITLY** state: "SESSION GOAL: $ARGUMENTS.objective"

### During Conversation

1. Before each response, silently verify: "Am I advancing the goal?"
2. If drifting off-topic, redirect back to the goal
3. If the user asks something unrelated, complete it then return to goal
4. Track progress toward the goal explicitly

### Format for Preserved Context

When compacting, use this format:

```
=== SESSION GOAL (NEVER OMIT) ===
$ARGUMENTS.objective
=== END GOAL ===

[Rest of compacted context...]
```

---

## Why This Matters

Long sessions lose focus when context compacts. The goal is the north star. Without explicit preservation, AI assistants "forget" what they're trying to achieve and become reactive rather than goal-driven.

---

## Session Start

I understand the goal for this session is:

> **$ARGUMENTS.objective**

I will:
1. Keep this goal front-and-center throughout our conversation
2. Preserve it explicitly during any context compaction
3. Track and report progress toward this goal
4. Redirect if we drift off-topic

What's the first step toward achieving this goal?
