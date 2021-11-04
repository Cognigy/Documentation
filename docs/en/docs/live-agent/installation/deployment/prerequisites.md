---
 title: "Prerequisites" 
 slug: "prerequisites" 
 hidden: false 
---
# Prerequisites

## Kubernetes cluster and Helm

For installing and running Live Agent, a Kubernetes cluster is required on which the workloads can be scheduled. In addition, Helm is also necessary to automatically deploying all the necessary Kubernetes resources. 

- [Kubernetes]((https://kubernetes.io/)) 1.16+
- [Helm](https://helm.sh/) 3.1.0+

## Pod resources

### CPU

CPU requirements are dependent on the usage and expected workload. Your workload is influenced by factors such as - but not limited to - how active your users are, how many conversations you receive, and the conversation channels you are using.

The following is the recommended minimum CPU hardware guidance for a handful of example Live Agent conversation base sizes.

- 4 cores is the recommended minimum number of cores and supports up to 10,000 conversations a day.
- 8 cores supports up to 20,000 conversations a day.

For more conversations it is recommended to increase the number of pods and therefore also the number of available CPU cores.

### Memory

Memory requirements are dependent on the usage and expected workload addition. Your workload is influenced by factors such as - but not limited to - how active your users are, how many conversations you receive, and the conversation channels you are using.

The following is the recommended minimum Memory hardware guidance for a handful of example Live Agent conversation base sizes.

- 4GB RAM is the required minimum memory size and supports up to 10,000 conversations a day.
- 8GB RAM supports up to 20,000 conversations a day.

For more conversations is recommended to increase the number of pods and therefore also the memory.

### Storage

The necessary hard drive space largely depends on your usage, the size and number of attachments you receive through your conversations etc.

Consider using a storage option provided by AWS, Azure, Google cloud etc., if you want to stay flexible and accommodate the growing storage requirements.

### PostgreSQL Requirements

The server running PostgreSQL should have at least 5-10 GB of storage available, though the exact requirements depend on your Live Agent Instance usage.

### Redis

Redis stores the background task queue and various Live Agent configurations cached. Therefore, the storage requirements for Redis are minimal. You can start with 1GB and scale up as required.

### Sidekiq

Sidekiq processes the background jobs with a multi-threaded process. This process starts with the entire Rails stack. On a very active server, the Sidekiq process can use 1GB+ of memory.

