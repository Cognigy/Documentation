---
title: "Migration Guide: DNS Name Change for AI Copilot Services"
slug: "ai-copilot-new-dns-names-migration"
hidden: false
---

# Migration Guide: DNS Name Change for AI Copilot Services

[![Version badge](https://img.shields.io/badge/Added in-v4.68-blue.svg)](../../../release-notes/4.68.md)

As part of our ongoing efforts to rebrand and improve our product offerings, the "Agent Assist" services were renamed to "AI Copilot". This guide provides step-by-step instructions for customers to update the DNS names for the `agent-assist-backend` and `agent-assist-frontend` services.

!!! warning "Important: DNS Name Change Required"
The rebranding from "Agent Assist" to "AI Copilot" necessitates a DNS name change for the backend and frontend services. This change must be made before executing the helm upgrade command for the next release. The intention is to move the existing DNS names to the `legacyHost` field and introduce new DNS names in the `host` field in the `values.yaml` file.

!!! note "Minimal Service Interruption"
This DNS name change is designed to ensure minimal service interruption. AI Copilot Workspace sessions will persist for 7 days, allowing customers ample time to apply the change and transition to the new DNS names seamlessly.

## Prerequisites

- Ensure you have administrative access to your DNS settings.
- Backup your current `values.yaml` file.

## Pre-Migration Tasks

Before starting the migration, accomplish the following preliminary tasks.

### Update Your `values.yaml` File

Locate the `agentAssistBackend` and `agentAssistFrontend` sections in your `values.yaml` file. You will make changes here to specify the new DNS names while retaining the old ones for the transition period.

```yaml
agentAssistBackend:
  host: "new-ai-copilot-backend.example.com" # Set your new DNS name here
  legacyHost: "existing-agent-assist-backend.example.com" # Move the current DNS name here
  tls:
    enabled: true/false # Reflect your current TLS setting
    existingSecret: "your-existing-tls-secret" # If TLS is enabled, specify the secret

agentAssistFrontend:
  host: "new-ai-copilot-frontend.example.com" # Set your new DNS name here
  legacyHost: "existing-agent-assist-frontend.example.com" # Move the current DNS name here
  tls:
    enabled: true/false # Reflect your current TLS setting
    existingSecret: "your-existing-tls-secret" # If TLS is enabled, specify the secret
```

### Validate DNS Configuration

Ensure the new DNS names are correctly configured in your DNS provider's settings. It's crucial to have the new DNS names resolve properly before proceeding with the Helm upgrade.

## Migration Process

### Execute Helm Upgrade

After updating your `values.yaml` file with the new and legacy DNS names, proceed with the Helm upgrade command. This will apply the DNS changes to your environment.

```bash
    helm upgrade --install --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version 4.68.0 --values cognigy-ai-values.yaml
```

### Monitor the Transition

After the upgrade, monitor the services to ensure they are accessible via both the new and legacy DNS names. This dual accessibility ensures that ongoing sessions are not interrupted during the transition period.

## Post-Migration

### Transition to New DNS Names

Once you have confirmed that the new DNS names are fully operational and all AI Copilot sessions have migrated (typically after 7 days), you can finalize the transition by removing the legacy DNS names from your DNS provider's settings.

The migration is now complete. By following these steps, you will have successfully transitioned your services to the new DNS names as part of the rebranding to AI Copilot, with minimal impact on your operations.
