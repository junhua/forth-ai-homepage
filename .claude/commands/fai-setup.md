---
description: Setup ForthAI workspace for a new team member
---

# ForthAI Workspace Setup

Setting up the complete ForthAI workspace structure for a new team member.

## Steps

1. **Create workspace directory**
```bash
mkdir -p ~/Workspace/ForthAI
cd ~/Workspace/ForthAI
```

2. **Clone all repositories**
```bash
# Company meta (you're here)
git clone git@github.com:Forth-AI/ssot.git SSOT

# Business & marketing materials
git clone git@github.com:Forth-AI/doc-business.git Business

# Research projects
git clone git@github.com:junhua/non-llm-ai-for-finance.git Research/non-llm-ai-for-finance

# Tech - demos
git clone git@github.com:Forth-AI/demo-agentic-accounting.git Tech/demos/accounting

# Tech - homepage
git clone git@github.com:Forth-AI/forth-ai-homepage.git Tech/forth-ai-homepage
```

3. **Verify structure**
After setup, you should have:
```
ForthAI/
├── SSOT/              # Company meta, strategy, status
├── Business/          # Marketing & sales materials
├── Research/          # Research projects
└── Tech/              # Product & demo code
```

4. **Read the docs**
- Start with `SSOT/Strategy/okrs.md` — understand current objectives
- Read `SSOT/CLAUDE.md` — principles and protocols
- Check `SSOT/Strategy/priorities.md` — what to work on now

## For Junhua Only

If you're Junhua, also create the Private folder:
```bash
mkdir -p ~/Workspace/ForthAI/Private
# Move sensitive content here (keys, finance)
```

## Verify Setup

Run this to confirm everything is in place:
```bash
ls -la ~/Workspace/ForthAI/
```

Expected output should show: SSOT, Business, Research, Tech (and Private for Junhua).
