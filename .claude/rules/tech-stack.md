# Tech Stack Versions

**Always use the latest stable versions.** Before starting any project:

1. Search for current stable versions of core dependencies
2. Use exact versions, not ranges (e.g., `"next": "15.1.0"` not `"^15.0.0"`)
3. Verify compatibility between dependencies

## Default Stack (December 2025)

| Category | Package | Min Version |
|----------|---------|-------------|
| Framework | Next.js | 15.x |
| Language | TypeScript | 5.x (strict mode) |
| Styling | Tailwind CSS | 4.x |
| AI | Vercel AI SDK | 5.x |
| Database | Prisma | 6.x |
| Auth | NextAuth.js | 5.x (beta) |
| Runtime | Bun | 1.x |

## Version Check Commands

```bash
# Check latest versions before starting
npm view next version
npm view typescript version
npm view tailwindcss version
npm view ai version
npm view prisma version
npm view next-auth version
```

## Update Frequency

- Check versions at project start
- Update this file when major versions release
- Test compatibility before upgrading existing projects
