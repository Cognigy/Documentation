---
title: "Migration Guide: Agent Assist to Cognigy.AI Helm Chart"
slug: "agent-assist-to-cognigy-ai-helm-chart-migration"
hidden: false
---

# Migration Guide: Agent Assist to Cognigy.AI Helm Chart

[![Version badge](https://img.shields.io/badge/Added in-v4.64-blue.svg)](../../../release-notes/4.64.md)

This guide provides step-by-step instructions for migrating Agent Assist[^*] services to the `cognigy-ai-app` Helm chart.

[^*]: As of release 4.65, Agent Assist has been renamed to AI Copilot.

!!! warning "Helm Chart Migration Required"
    As of release 4.65, the Agent Assist services have been fully integrated into the `cognigy-ai-app` Helm chart. This integration implies that the services provided by this Helm chart will be incompatible with versions 4.65 and onwards of the Cognigy.AI platform. Users must migrate to the new chart to continue receiving updates and support. 
    Note that the `agent-assist-genesys-notifications-forwarder` will no longer be compatible with release 4.64 and earlier versions, as it now requires integration with RabbitMQ. Users are advised to plan their upgrade strategies accordingly to ensure smooth transitions and continued functionality.

!!! note "Downtime"
    Switching the `ingress` as part of the migration process will create a period of downtime. The product will be unavailable until all the new pods in the `county-ai` namespace are up and running, and the agent-assist namespace is deleted. Plan this migration accordingly to minimize the impact.

## Prerequisites

### Upgrade the current installation of Agent Assist to v4.64

The migration to the `cognigy-ai-app` Helm chart requires Agent Assist v4.64 or later. If you are running an earlier version, upgrade to v4.64 or later before proceeding with the migration.

## Pre-Migration Tasks

Before starting the migration, accomplish the following preliminary tasks.

### Copy Agent Assist Namespace Secrets

You need to copy the existing secrets from the `agent-assist` namespace to the `cognigy-ai` namespace. The required secret is `cognigy-agent-assist` (MongoDB connection string).

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

### Prepare values.yaml for Migration

Configure the `values.yaml` file with new values for the `ingress` and the c`ognigyAgentAssist` sections:

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

This `agent-assist-api-key` secret contains an `api-key` field and is used for authenticating both the Agent Assist API Rest and WebSocket API.

### Add Environment Variables

Remove old `extraEnvVars` containing `AGENT_ASSIST_WORKSPACE_API_ACCESS_TOKEN` in case they are defined from the `cognigy-ai-app` Helm chart:

```yaml
serviceAi:
  # ...
  # Remove the following lines
  extraEnvVars:
    - name: AGENT_ASSIST_WORKSPACE_API_ACCESS_TOKEN
      valueFrom:
        secretKeyRef:
          name: agent-assist-workspace-credentials
          key: api-access-token

serviceEndpoint:
  # ...
  # Remove the following lines
  extraEnvVars:
    - name: AGENT_ASSIST_WORKSPACE_API_ACCESS_TOKEN
      valueFrom:
        secretKeyRef:
          name: agent-assist-workspace-credentials
          key: api-access-token

serviceHandover:
  # ...
  # Remove the following lines
  extraEnvVars:
    - name: AGENT_ASSIST_WORKSPACE_API_ACCESS_TOKEN
      valueFrom:
        secretKeyRef:
          name: agent-assist-workspace-credentials
          key: api-access-token

cognigyEnv:
  # ...
  # Remove the following variables
  AGENT_ASSIST_WORKSPACE_FRONTEND_URL_WITH_PROTOCOL=
  AGENT_ASSIST_WORKSPACE_API_BASE_URL_WITH_PROTOCOL=
```

Update the `cognigyEnv` section to ensure it reflects the correct domain names for your environment:

```yaml
cognigyEnv:
  # Only enable it if you want to forward Genesys notifications to Agent Assist,
  FEATURE_ENABLE_AGENT_ASSIST_WORKSPACE_GENESYS_CREDENTIALS_WHITELIST: "*"
```

## Migration Process

To initiate the migration, complete the following tasks.

### Migrate to Cognigy. AI Helm Chart

After completing the pre-migration tasks, proceed with the migration by deploying the `cognigy-ai-app ` Helm chart with the updated `values.yaml` file.

### Uninstall the Agent Assist Namespace

After successfully migrating, uninstall the `agent-assist` namespace:

```bash
helm uninstall agent-assist --namespace agent-assist
kubectl delete ns agent-assist
```

The migration is complete. You can now use the `cognigy-ai-app` Helm chart to manage your Agent Assist services.