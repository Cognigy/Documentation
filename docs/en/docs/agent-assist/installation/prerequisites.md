---
title: "Prerequisites"
slug: "prerequisites"
hidden: false
---

# Prerequisites

Before you can install and run Agent Assist, you need to have Cognigy.AI installed, and a dedicated `agent-assist` namespace created in your Kubernetes cluster. Helm, a package manager for Kubernetes, is also required to streamline the deployment of the necessary resources.

- [Kubernetes](https://kubernetes.io/) 1.16+
- [Helm](https://helm.sh/) 3.1.0+

## Configuring Pod Resources & Replicas

The resource allocation and the number of replicas for the pods can be tailored to match your expected workload. By default, these are the configured values:

```yaml
resources:
  limits:
    cpu: 1000m
    memory: 600Mi
  requests:
    cpu: 800m
    memory: 400Mi
```

The default number of replicas is set to 1, but you can adjust this by modifying the replicaCount value in the values.yaml file.

The Agent Assist pods are stateless, allowing you to scale them up or down based on demand. The agent-assist-backend pod is responsible for handling the majority of the workload and should be scaled up first to support more concurrent users. With 2 replicas, it can support up to 2500 concurrent users.

### MongoDB

For detailed MongoDB setup and configuration, refer to the [Cognigy.AI Installation Prerequisites guide]({{config.site_url}}ai/installation/prerequisites/#kubernetes-cluster).

### Redis

Redis is used to store WebSocket subscriptions and cached Agent Assist session parameters, so its storage requirements are minimal. You can start with a 1GB allocation and scale up as necessary.
