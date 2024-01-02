---
title: "Prerequisites" 
slug: "prerequisites" 
hidden: false 
---

# Prerequisites

## Kubernetes cluster and Helm

For installing and running Live Agent, a Kubernetes cluster is required, on which the workloads can be scheduled. In addition, Helm is also necessary to automatically deploy all necessary Kubernetes resources. 

- [Kubernetes](https://kubernetes.io/) 1.16+
- [Helm](https://helm.sh/) 3.1.0+

>**Note:** It is recommended to install Live Agent in a separate namespace as it has its own resources, separated from Cognigy.AI ones.

## Pod resources

### CPU

CPU requirements are dependent on usage and expected workload.
Your workload is influenced by factors such as how active your users are, how many conversations you receive, the conversation channels you are using, and more.

The following are the recommended minimum CPU hardware configurations for a small sample of example Live Agent conversation sizes.

- 4 cores is the recommended minimum number of cores and supports up to 10,000 conversations a day.
- 8 cores supports up to 20,000 conversations a day.

For more conversations,
we recommended increasing the number of pods and therefore also the number of available CPU cores.

### Memory

Memory requirements are dependent on usage and expected additional workload.
Your workload is influenced by factors such as how active your users are,
how many conversations you receive, the conversation channels you are using, and more.

The following are the recommended minimum Memory hardware configurations for a small sample of example Live Agent conversation sizes.

- 4GB RAM is the required minimum memory size and supports up to 10,000 conversations a day.
- 8GB RAM supports up to 20,000 conversations a day.

For more conversations, it is recommended to increase the number of pods and therefore also to increase the memory.

### Storage

The amount of storage necessary largely depends on your usage and other factors, the size and number of attachments you receive through your conversations, for example, etc.

Consider using a storage option provided by AWS, Azure, Google cloud etc., this can help you to stay flexible, and to accommodate any growing storage requirements.

### PostgreSQL

The server running PostgreSQL should have at least 5-10 GB of storage available, although the exact requirements will depend on your Live Agent Instance usage.

### Redis

Redis stores the background task queue and various cached Live Agent configurations.
Therefore, the storage requirements for Redis are minimal.
You can start with 1 GB and scale up as required.

### Sidekiq

Sidekiq processes background jobs via a multithreaded process.
This process starts with the entire Rails stack.
On a very active server, the Sidekiq process can use 1+ GB of memory.

