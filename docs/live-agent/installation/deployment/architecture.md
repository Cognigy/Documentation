---
title: "Architecture" 
slug: "architecture" 
hidden: false 
---

# Architecture

<figure>
 <img class="image-center" src="../../../../_assets/live-agent/LA-diagram.svg" alt="Live Agent Architecture" width="100%" />
  <figcaption>Live Agent Architecture Diagram</figcaption>
</figure>

Live Agent is composed of a Ruby On Rails application that serves a Vue.js Frontend along with an API
for performing actions such as CRUD operations and WebSockets.

Live Agent has the following set of services running:

- Required to run in a Kubernetes cluster
    - Live Agent web servers (API & UI)
    - Live Agent workers (Sidekiq)
- External/Internal services
    - PostgreSQL Database as persistent storage
    - Redis Database for caching and performance
    - Email Service (SMTP servers)
    - Storage Solution: NFS server with (AWS, Azure) or optional integration with External Object Storage (S3, Azure Storage, GCS)
