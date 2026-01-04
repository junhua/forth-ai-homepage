# Wave 1 Session 2: Chat Polish (Pending Approvals, Streaming)

**Issues**: #62, #63
**Estimate**: 4 AI-hours
**Dependencies**: None

## Setup

```bash
cd /Users/junhua/Workspace/ForthAI/Tech/products/inframagics
git checkout staging && git pull origin staging
git checkout -b feature/62-63-chat-polish
```

## Context

Polish the chat interface:
1. Pending approvals query: "What's pending approval?"
2. Streaming responses with typing indicator

## Implementation

### Issue #62: Chat command - Pending approvals

Read issue body: `gh issue view 62 --repo Forth-AI/inframagics`

Files to create:
```
src/tools/pending-approvals-tool.ts
src/schemas/pending-approvals.ts
src/tools/__tests__/pending-approvals-tool.test.ts
```

### Issue #63: Chat response streaming polish

Read issue body: `gh issue view 63 --repo Forth-AI/inframagics`

Files to create:
```
src/components/chat/StreamingMessage.tsx
src/components/chat/TypingIndicator.tsx
src/hooks/useStreamingChat.ts
src/components/chat/__tests__/StreamingMessage.test.tsx
```

## Acceptance Criteria

- [ ] Pending approvals query returns grouped summary
- [ ] Urgent items (>48h) flagged
- [ ] Typing indicator shows during AI thinking
- [ ] Text streams word-by-word
- [ ] Smooth auto-scroll
- [ ] All tests pass, 80% coverage

## Finalize

```bash
bun run test
bun run build
git add .
git commit -m "feat(chat): add pending approvals query and streaming polish (#62, #63)"
git push -u origin feature/62-63-chat-polish
gh pr create --base staging --title "feat(chat): Pending approvals and streaming polish" --body "Closes #62, Closes #63

## Summary
- Pending approvals query with grouped summary
- Streaming responses with typing indicator
- Smooth auto-scroll during streaming

## Test plan
- [ ] Unit tests for pending approvals
- [ ] Component tests for streaming

🤖 Generated with [Claude Code](https://claude.com/claude-code)"
```
