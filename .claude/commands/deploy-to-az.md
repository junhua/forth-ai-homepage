---
description: Deploy current project to Azure Container Apps
arguments:
  - name: app
    description: App name (omnisonant, inframagics)
    required: false
---

# Deploy to Azure

Deploy the current project to Azure Container Apps.

## Configuration

| App | Local Path | Deploy Target |
|-----|------------|---------------|
| inframagics | `Tech/products/inframagics/` | Vercel (vercel --prod) |
| omnisonant | `Tech/products/omnisonant/` | Azure: vapi-demo / ca-vapi-demo / crvapidemo.azurecr.io |

## Steps

1. **Verify Prerequisites**
   - Check if Dockerfile exists in current directory
   - Verify Azure CLI is logged in: `az account show`
   - Load ACR credentials from `/tmp/vapi-demo-creds.txt` or `~/.config/forth-ai/keys`

2. **Build Docker Image**
   ```bash
   # Get git SHA for tagging
   GIT_SHA=$(git rev-parse --short HEAD)

   # Build image
   docker build -t crvapidemo.azurecr.io/omnisonant:$GIT_SHA .
   docker tag crvapidemo.azurecr.io/omnisonant:$GIT_SHA crvapidemo.azurecr.io/omnisonant:latest
   ```

3. **Push to ACR**
   ```bash
   # Login to ACR
   az acr login --name crvapidemo

   # Push images
   docker push crvapidemo.azurecr.io/omnisonant:$GIT_SHA
   docker push crvapidemo.azurecr.io/omnisonant:latest
   ```

4. **Deploy to Container Apps**
   ```bash
   az containerapp update \
     --name ca-vapi-demo \
     --resource-group vapi-demo \
     --image crvapidemo.azurecr.io/omnisonant:$GIT_SHA
   ```

5. **Verify Deployment**
   - Get app URL: `az containerapp show --name ca-vapi-demo -g vapi-demo --query "properties.configuration.ingress.fqdn" -o tsv`
   - Health check the endpoint

## Output

Report:
- Image tag deployed
- Container App URL
- Deployment status (success/failure)
- Any errors encountered

## Argument Handling

If `$ARGUMENTS.app` is provided:
- `omnisonant` → Deploy to ca-vapi-demo in vapi-demo resource group
- Future apps can be added to the configuration table

If no argument, detect from current directory or ask user.
