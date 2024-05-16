---
title: "Migration Guide: DNS Name Change"
slug: "ai-copilot-new-dns-names-migration"
hidden: false
---

# Migration Guide: DNS Name Change for AI Copilot Services

[![Version badge](https://img.shields.io/badge/Added in-v4.68-blue.svg)](../../../release-notes/4.68.md)

As part of our ongoing efforts to rebrand and improve our product offerings, the **Agent Assist** services were renamed to **AI Copilot**. This guide provides step-by-step instructions for customers to update the DNS names for the `agent-assist-backend` and `agent-assist-frontend` services.

!!! warning "DNS Name Change Required"
    The rebranding from **Agent Assist** to **AI Copilot** requires a DNS name change for both the backend and frontend services. This change must be completed before executing the `helm upgrade` command for the next release. The objective is to transfer the existing DNS names to the `legacyHost` field and introduce new DNS names in the `host` field in the `values.yaml` file.

!!! note "Minimal Service Interruption"
    This DNS name change is meant to minimize service interruptions. AI Copilot sessions will remain active for 7 days, giving you enough time to apply the change and transition smoothly to the new DNS names.

## Prerequisites

- Cognigy.AI Helm chart version 4.68.0 or higher is required.

## Pre-Migration Tasks

- Ensure you have administrative access to your DNS settings.
- Back up your current `values.yaml` file.

### Update `values.yaml`

In the top-level `ingress` section of your `values.yaml` file, find the `agentAssistBackend` and `agentAssistFrontend` blocks. In these blocks, specify the new DNS names while retaining the old (legacy) ones for the transition period. 
The example of how to update the `values.yaml` file:

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

Ensure the new DNS names are correctly configured in your DNS provider's settings. Before proceeding with the Helm upgrade, you must have the new DNS names resolved properly.

## Migration Process

### Execute Helm Upgrade

Once you've updated your `values.yaml` file with the new and legacy DNS names, proceed with the Helm upgrade command to apply the DNS changes to your environment.

```bash
    helm upgrade --install --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version <helm-chart-version> --values cognigy-ai-values.yaml
```
Replace `<helm-chart-version>` with the version of the Helm chart you are using. The migration guide is based on the assumption that you are using at least version 4.68.0 of the Helm chart.

### Monitor the Transition

After the upgrade, monitor the services to ensure they are accessible via both the new and legacy DNS names. This dual accessibility ensures that ongoing sessions are not interrupted during the transition period.

## Post-Migration

### Transition to New DNS Names

Once you have confirmed that the new DNS names are fully operational and all AI Copilot sessions have migrated (usually after 7 days), finalize the transition by removing the legacy DNS names from your DNS provider's settings.

The migration is now complete. By following these steps, you have successfully transitioned your services to the new DNS names as part of the rebranding to AI Copilot, with minimal impact on your operations.
