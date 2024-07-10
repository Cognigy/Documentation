---
title: "Prerequisites"
slug: "prerequisites"
hidden: false
---

# Prerequisites

{! _includes/ai-copilot/installation-note.md !}

Before installing and running AI Copilot, you need to have Cognigy.AI installed and a dedicated `agent-assist` namespace created in your Kubernetes cluster. Helm, a package manager for Kubernetes, is also required to streamline the deployment of the necessary resources.

- [Kubernetes](https://kubernetes.io/) 1.16+
- [Helm](https://helm.sh/) 3.1.0+

## Replication and Resource Allocation

The default number of replicas is set to 3 in order to maintain high availability standards. The AI Copilot pods are stateless, allowing you to scale them up or down based on demand. The agent-assist-backend pod bears the brunt of the workload and should be the primary candidate for scaling to accommodate an increase in concurrent users.

### MongoDB

For detailed MongoDB setup and configuration, refer to the [Cognigy.AI Installation Prerequisites guide](../../ai/installation/prerequisites.md#kubernetes-cluster).

### Redis

Redis is used to store WebSocket subscriptions and cached AI Copilot session parameters, so its storage requirements are minimal. You can start with a 1GB allocation and scale up as necessary.
