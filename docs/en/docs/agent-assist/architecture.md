---
 title: "Architecture" 
 slug: "architecture" 
 hidden: false 
---

# Architecture

<figure>
 <img class="image-center" src="{{config.site_url}}agent-assist/images/Agent-Assist-Architecture-Flow.drawio.png" alt="Agent Assist Architecture" width="100%" />
  <figcaption>Agent Assist Architecture Diagram</figcaption>
</figure>

Agent Assist is composed of Node.JS microservices that serves a React Frontend along with an API for performing actions such as CRUD operations and WebSockets.

Agent Assist has the following set of services running:

- Required to run in a Kubernetes cluster
  - agent-assist-backend (API)
  - agent-assist-frontend (UI)
- External/Internal services
  - MongoDB Database as persistent storage
  - Redis Database for caching and performance
