---
title: "Architecture" 
slug: "architecture" 
hidden: false 
---

# Architecture

<figure>
 <img class="image-center" src="../../../_assets/ai-copilot/AI-Copilot-Architecture-Flow.png" alt="AI Copilot Architecture" width="100%" />
  <figcaption>AI Copilot Architecture Diagram</figcaption>
</figure>

AI Copilot is composed of Node.JS microservices that serve a React Frontend along with an API for performing actions such as CRUD operations and WebSockets.

AI Copilot has the following set of services running:

- Required to run in a Kubernetes cluster
  - agent-assist-backend (API)
  - agent-assist-frontend (UI)
- External/Internal services
  - MongoDB Database as persistent storage
  - Redis Database for caching and performance
