---
 title: "Architecture" 
 slug: "architecture" 
 hidden: false 
---
# Architecture

## Overview
Cognigy.AI is a modern, cloud-native software solution based on a scalable microservice architecture. This modern architecture allows
us to leverage the compute power of multiple servers for a single software product. Instead of running a single executable on a server,
we have de-composed Cognigy.AI into 30+ separate executables. These smaller services (hence the name microservice) despite being separated,
act as a single product - Cognigy.AI - by interacting with each other through network calls.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/architecture.drawio.png" width="100%" />
  <figcaption>Cognigy.AI v4.21.0 architecture</figcaption>
</figure>

Each individual microservice runs as a containerized application on top of Kubernetes. Containers are a way of how software products
can be packaged and delivered into production together with their dependencies. A program written in JavaScript might need a specific
version of the NodeJS runtime to function properly - containers allow to package a specific version of a runtime together with the
actual application into one shippable unit. One of the more popular container runtimes and a set of other container specific tools is
[Docker](https://www.docker.com/).

Managing such a high number of microservices is quite a challenge. In order to accomplish this in a reliable way, a so-called container
orchestrator is necessary. [Kubernetes](https://kubernetes.io/) is such a container orchestrator dealing with tasks like:

- assigning containers to one of the available servers in the Kubernets cluster respecting their individual hardware requirements and matching these against the available hardware in the cluster
- observing whether containers need to be restarted in case they crash
- updating containers to a newer version when a software update (e.g. new version of Cognigy.AI) has been shipped

## Runtime & IDE
