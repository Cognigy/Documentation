---
 title: "Migration Guide: Integrating Agent Assist with Cognigy.AI App Helm Chart" 
 slug: "migration-guide-integrating-agent-assist-with-cognigy-ai-app-helm-chart" 
 hidden: false 
---

# Migration Guide: Integrating Agent Assist with Cognigy.AI App Helm Chart

[![Version badge](https://img.shields.io/badge/Added in-v4.64-blue.svg)](../../../release-notes/4.64.md)

## Copying agent-assist namespace secrets

The first step is to copy the existing secrets of agent-assist namespace and create them in the cognigy-ai namespace These are:

- agent-assist-api-key - API auth token
- cognigy-agent-assist - MongoDB connection string

The rest of the secrets are no longer necessary.

You can use the following script `copy-secrets.sh` to copy the secrets:

```bash
#!/bin/bash

# Define secrets and namespaces
sourceNamespace="agent-assist"
destinationNamespace="cognigy-ai"
secrets=("cognigy-agent-assist" "agent-assist-api-key")

# Check if kubectl is installed
if ! command -v kubectl &> /dev/null
then
    echo "kubectl could not be found, please install it to run this script."
    exit 1
fi

# Copy each secret
for secret in "${secrets[@]}"; do
  echo "Copying $secret from $sourceNamespace to $destinationNamespace..."
  kubectl get secret $secret --namespace $sourceNamespace -o yaml |\
  sed '/namespace:/d' |\
  kubectl apply --namespace=$destinationNamespace -f -
done

echo "Secrets copied successfully."
```

Then run the script:

```bash
chmod +x copy-secrets.sh
./copy-secrets.sh
```

## New values

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

  existingSecret: "agent-assist-api-key"
```

The existing secret would be the value of the secret `agent-assist-api-key` copied from the agent-assist namespace.

This secret contains an `api-key` field and is used for authenticating the Agent Assist API Rest and WebSocket API.

## Environment variables

```yaml
cognigyEnv:
  # Only enable it if you want to forward Genesys notifications to Agent Assist,
  FEATURE_ENABLE_AGENT_ASSIST_WORKSPACE_GENESYS_CREDENTIALS_WHITELIST: "*"
```

These are the current environment variables. They need to point to the right domain names for each environment.

## Uninstall agent-assist namespace

The last step is to uninstall the agent-assist namespace.

```bash
helm uninstall agent-assist
```
