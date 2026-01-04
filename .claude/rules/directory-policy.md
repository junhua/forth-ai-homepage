# Directory Policy

**Workspace Root**: `/Users/junhua/Workspace/ForthAI/`

## Repository Structure

| Directory | Purpose | Git |
|-----------|---------|-----|
| `SSOT/` | Company meta, strategy, docs | Single repo |
| `Tech/` | Pte Ltd code (products + demos) | Multiple repos |
| `Research/` | Foundation projects (papers + code) | Multiple repos |
| `Business/` | Pte Ltd marketing/sales | Single repo |
| `Private/` | Junhua only (keys, finance) | Not tracked |

## Tech Directory Structure

```
Tech/
├── products/               # Products (separate repos, Vercel-deployed)
│   ├── inframagics/        # git@github.com:Forth-AI/inframagics.git (App)
│   ├── inframagics-www/    # git@github.com:Forth-AI/inframagics-www.git (Marketing)
│   ├── omnisonant/         # git@github.com:Forth-AI/omnisonant.git (App)
│   └── omnisonant-www/     # git@github.com:Forth-AI/omnisonant-www.git (Marketing)
├── demos/                  # Experimental/spec-only demos
│   └── voice/              # Voice specs (code in products/omnisonant)
└── libs/                   # Shared libraries (if needed)
```

## Rules

1. **Clone to correct location**: External repos go under `Tech/products/` or `Research/`
2. **Never clone to workspace root**: `/Users/junhua/Workspace/ForthAI/<repo>` is wrong
3. **Demos vs Products**: Demos in `Tech/demos/`, production code in `Tech/products/`
4. **Specs can precede code**: `Tech/demos/voice/SPEC.md` → `Tech/products/omnisonant/`

## Current Products

| Product | Location | GitHub |
|---------|----------|--------|
| Inframagics | `Tech/products/inframagics/` | `Forth-AI/inframagics` |
| Inframagics WWW | `Tech/products/inframagics-www/` | `Forth-AI/inframagics-www` |
| Omnisonant | `Tech/products/omnisonant/` | `Forth-AI/omnisonant` |
| Omnisonant WWW | `Tech/products/omnisonant-www/` | `Forth-AI/omnisonant-www` |
| Voice Demo | `Tech/products/omnisonant-voice-demo/` | None (local only) |

## Inframagics Deployment

**GitHub**: `Forth-AI/inframagics` (code + issues in single repo)
**Archived**: `demo-inframagics-frontend` (migrated Jan 2026)

Two Vercel instances:

| Instance | URL | GitHub Integration |
|----------|-----|-------------------|
| `inframagics-www` | https://inframagics.com | `Forth-AI/inframagics-www` |
| `inframagics` | https://app.inframagics.com | `Forth-AI/inframagics` |

**Whitelist**: `j@forth.ai`

Deploy:
- Marketing: `vercel --prod` in inframagics-www
- App: Push to `main` or `vercel --prod` in inframagics

## Omnisonant Deployment

Three Vercel instances:

| Instance | URL | Purpose |
|----------|-----|---------|
| `omnisonant-www` | https://omnisonant.com | Marketing/home page |
| `omnisonant` | https://app.omnisonant.com | App (auth, demo, admin) |
| `omnisonant-voice-demo` | https://omnisonant-voice-demo.vercel.app | Voice demo only (OAuth + Voice) |

Deploy commands:
- Home page: `vercel --prod` in omnisonant-www project
- App: `vercel --prod` in omnisonant project
- Voice Demo: `vercel --prod` in omnisonant-voice-demo project

## Voice Demo Project

Standalone voice demo with minimal dependencies (no Prisma, no database).

**Features**: Google OAuth + OpenAI Realtime API voice demo
**Whitelist**: `j@forth.ai`, `marc.bardi@gmail.com`, `fanfanlin31@gmail.com`, `richard.parry.88@gmail.com`

**Custom domain**: https://voice.demo.forth.ai
