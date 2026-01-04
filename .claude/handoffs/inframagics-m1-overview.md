# Inframagics M1: Demo Polish & Storytelling

**Milestone**: M1: Demo Polish & Storytelling
**Total Estimate**: 32 AI-hours
**Goal**: Polish demo for customer discovery conversations

## EPICs

| # | Title | FEATUREs | Estimate |
|---|-------|----------|----------|
| #52 | Demo Data & Reset | #56, #57, #58 | 5 AI-hours |
| #53 | Chat Interface Polish | #59-#63 | 10 AI-hours |
| #54 | Workflow Visualization | #64-#66 | 8 AI-hours |
| #55 | UX Polish | #67-#70 | 9 AI-hours |

## Execution Waves

### Wave 1 (Parallel - No Dependencies)
Run these in parallel sessions:
- `wave1-session1.md`: #59, #60, #61 (Chat commands)
- `wave1-session2.md`: #62, #63 (Chat polish)
- `wave1-session3.md`: #64 (Workflow parser)
- `wave1-session4.md`: #67, #68, #70 (UX basics)

### Wave 2 (After Wave 1)
- `wave2-session1.md`: #56 (Demo seed data)
- `wave2-session2.md`: #65 (Workflow diagram)
- `wave2-session3.md`: #69 (Mobile responsive)

### Wave 3 (After Wave 2)
- `wave3-session1.md`: #57, #66 (Demo reset, step icons)

### Wave 4 (After Wave 3)
- `wave4-session1.md`: #58 (Demo mode banner)

## Handoff Sequence

Execute in order:
1. Run all Wave 1 sessions in parallel
2. After Wave 1 complete → Run Wave 2 in parallel
3. After Wave 2 complete → Run Wave 3
4. After Wave 3 complete → Run Wave 4
5. Integration testing
6. Deploy to staging
