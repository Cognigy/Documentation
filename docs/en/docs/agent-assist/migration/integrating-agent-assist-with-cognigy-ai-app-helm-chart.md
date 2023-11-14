---
 title: "Migration Guide: Integrating Agent Assist with Cognigy.AI App Helm Chart" 
 slug: "migration-guide-integrating-agent-assist-with-cognigy-ai-app-helm-chart" 
 hidden: false 
---

# Migration Guide: Integrating Agent Assist with Cognigy.AI App Helm Chart

[![Version badge](https://img.shields.io/badge/Added in-v4.64-blue.svg)](../../../release-notes/4.64.md)

This guide provides step-by-step instructions to migrate Agent Assist services to the cognigy-ai-app helm chart.

## Pre-Migration Tasks

Before initiating the migration, complete the following preparatory steps.

### Copying agent-assist Namespace Secrets

You need to copy the existing secrets from the `agent-assist` namespace to the `cognigy-ai` namespace. The required secrets are:

- `cognigy-agent-assist` - MongoDB connection string

Use the `copy-secret.sh` script to copy these secrets:

```bash
#!/bin/bash

# Define secret and namespaces
sourceNamespace="agent-assist"
destinationNamespace="cognigy-ai"
secret="cognigy-agent-assist"

# Check if kubectl is installed
if ! command -v kubectl &> /dev/null
then
    echo "kubectl could not be found, please install it to run this script."
    exit 1
fi

# Copy the secret
echo "Copying $secret from $sourceNamespace to $destinationNamespace..."
kubectl get secret $secret --namespace $sourceNamespace -o yaml |\
sed '/namespace:/d' |\
kubectl apply --namespace=$destinationNamespace -f -

echo "Secret copied successfully."

```

Run the script:

```bash
chmod +x copy-secret.sh
./copy-secret.sh
```

### Preparing `values.yaml` for Migration

Configure the `values.yaml` file with new values for the ingress and the cognigyAgentAssist section:

```yaml
ingress:
  # ...
  agentAssistBackend:
    host: ""
  agentAssistFrontend:
    host: ""

cognigyAgentAssist:
  # Only enable it if you want to forward Genesys notifications to Agent Assist,
  # enableGenesysNotificationsForwarder: true
  enabled: true
```

This secret `agent-assist-api-key` contains an `api-key` field and is used for authenticating the Agent Assist API Rest and WebSocket API.

### Setting Environment Variables

Update the `cognigyEnv` section to reflect the correct domain names for your environment:

```yaml
cognigyEnv:
  # Only enable it if you want to forward Genesys notifications to Agent Assist,
  FEATURE_ENABLE_AGENT_ASSIST_WORKSPACE_GENESYS_CREDENTIALS_WHITELIST: "*"
```

## Migration Process

### Note on Downtime

Switching the ingress as part of the migration process will create a period of downtime. During this time, until all the new pods in the `cognigy-ai` namespace are up and running and the `agent-assist` namespace is deleted, the product will be unavailable. Plan this migration accordingly to minimize impact.

### Migrating to cognigy-ai-app Helm Chart

After completing the pre-migration tasks, proceed with the migration by deploying the `cognigy-ai-app ` Helm chart with the updated `values.yaml` file.

### Uninstall the Agent Assist Namespace

After successfully migrating, uninstall the `agent-assist` namespace:

```bash
helm uninstall agent-assist
```
