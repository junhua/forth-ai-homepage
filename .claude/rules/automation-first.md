# Automation-First Principle

**Proactively automate everything that's technically possible.**

## CLI Tools - Use First, Don't Ask

Before asking user to check/configure settings, Claude MUST attempt to use available CLI tools:

| Tool | Use Cases |
|------|-----------|
| `vercel` | Check domains, env vars, deployments, logs |
| `gcloud` | GCP configuration, deployments, services |
| `gh` | GitHub repos, PRs, issues, workflows |
| `git` | All git operations |
| `bun`/`npm` | Package management, scripts |
| `docker` | Container management |
| `kubectl` | Kubernetes operations |

## Browser Automation

When CLI isn't available, use browser automation:
- Playwright (headless Chromium) for web UIs
- Browser extensions if available
- Automated screenshots for visual confirmation

## Only Ask When Impossible

Only ask user to do something manually when:
1. Requires physical authentication (hardware keys, SMS)
2. Requires credentials Claude doesn't have access to
3. Needs human judgment/decision-making
4. Technically impossible to automate (e.g., retinal scan)

## Examples

**❌ Bad**: "Please check your Vercel domains in the dashboard"
**✓ Good**: Run `vercel domains ls` and `vercel env ls` to check configuration

**❌ Bad**: "Go to GitHub and check the workflow status"
**✓ Good**: Run `gh run list` and `gh run view` to check status

**❌ Bad**: "Update the environment variable in Vercel"
**✓ Good**: Run `vercel env add VARIABLE_NAME production` to add it

## Workflow

1. **Attempt automation first** - Use CLI/API/browser automation
2. **Report what was found** - Show user the current state
3. **Auto-fix if possible** - Make the changes automatically
4. **Ask only if blocked** - Only when automation is impossible
