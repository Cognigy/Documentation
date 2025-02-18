---
title: "Architecture"
slug: "architecture"
hidden: false
---

# Cognigy.AI Architecture

## Overview

Cognigy.AI is a modern, cloud-native software solution based on a scalable microservice architecture. This modern architecture allows
us to leverage the compute-power of multiple servers for a single software product. Instead of running a single executable on a single server,
we have decomposed Cognigy.AI into more than 30 separate executables. These smaller executables (hence the name microservice) despite being separated,
act as a single product — Cognigy.AI — by interacting with each other through network calls.

<figure>
  <img class="image-center" src="../../../_assets/ai/installation/architecture.png" width="100%" />
  <figcaption>Cognigy.AI v4.55.0 architecture</figcaption>
</figure>

Each individual microservice runs as a containerized application on top of Kubernetes. Containers are a way of how processes can run in isolation
from each other and offer the ability to ship modern software products together with their dependencies, for instance, a runtime environment.
A program written in JavaScript might need a specific version of the Node.js runtime to function properly — containers allow packaging such
dependencies together with the actual application into one shippable unit. One of the more popular container runtimes and a set of other container-specific tools is [Docker](https://www.docker.com/).

Managing a high number of moving parts — the microservices mentioned above — is quite a challenge and requires an additional software product
that is called a container orchestrator.
[Kubernetes](https://kubernetes.io/) is such a container orchestrator dealing with the following tasks:

- Assigning containers to one of the available servers in the Kubernetes cluster respecting their individual hardware requirements and matching these against the available hardware on a server.
- Observing whether containers need to be restarted in case they crash.
- Updating containers to a newer version when a software update (for example, new version of Cognigy.AI) has been shipped,
- Testing whether containerized processes still react by sending readiness- and liveness-probes.
- Scaling microservices according to load-indicators such as CPU load, memory profile or custom metrics by starting additional copies of services.

## Runtime & IDE

Cognigy.AI itself is a product offering different types of functionality:

- IDE
- Runtime

While Cognigy Insights is actually also part of Cognigy.AI, it plays a smaller role when taking about the Cognigy.AI core product infrastructure. To learn more, read the [Insights](../../insights/overview.md) documentation.

### IDE: Building your AI Agents

A service that allows you to create AI Agents and use all the components, such as Flows, Playbooks, Lexicons,
and Intents, is called the IDE (Integrated Development Environment) — a term often used in software development. 
Once you are done with the first iteration of your AI Agent, a so-called Snapshot must be created to deploy your AI Agent into production. 
A Snapshot is an immutable copy of your AI Agent containing all resources that make it up, such as your Flows, Lexicons, Intents, and Extensions. 
Snapshots act as the connection to the second group of functionality: the Cognigy.AI Runtime.

The following table shows the most relevant microservices forming the IDE:

| Microservice name      | Responsibilities                                                                                                                                                                                                                                                                                       |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| service-api            | RESTful API to fully control Cognigy.AI through HTTP calls. Full documentation in the form of an [OpenAPI spec](../developers/api-and-cli.md) is available. Also implements authentication & authorization. Integrations with Identity Providers via our Single Sign On integration.                   |
| service-ui             | Serves the WebGUI for Cognigy.AI                                                                                                                                                                                                                                                                       |
| service-webchat        | Servers a demo website which always contains the latest version of the Cognigy WebchatWidget embedded. Acts as a place for rapid prototyping.                                                                                                                                                          |
| service-resources      | Manages all resources within Cognigy.AI - meaning Flows, Endpoints, Playbooks etc. by offering internal APIs which other Microservices can call.                                                                                                                                                       |
| service-custom-modules | Processes uploaded Cognigy Extensions and prepares them for usage.                                                                                                                                                                                                                                     |
| service-security       | Manages users, organizations and roles including permissions.                                                                                                                                                                                                                                          |
| service-task-manager   | Manages long running operations inside of Cognigy.AI. Those operations include creating Cognigy Snapshots, Packaging assets for downloads, Processing your uploaded documents as part of our Knowledge AI solution. Our user interface exposes a task manager which shows all long-running operations. |

### Runtime: Running your AI Agents

Our Runtime is optimized for performance & throughput. All microservices belonging to the runtime are stress-tested on a regular basis and can scale horizontally. Cognigy.AI's runtime is a highly distributed system and can leverage huge amounts of hardware if given. We run performance tests for every release of Cognigy.AI in order to ensure that a new version is at least as fast & scalable as the last version.

The following table describes the responsibilities of key runtime microservices:

| Microservice name                               | Responsibilities                                                                                                                                                                                                                         |
|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| service-endpoint                                | Translates channel specific incoming requests to our internal representation, executes Transformers, counts billing relevant information and sends responses back to external channels.                                                  |
| service-app-session-manager                     | Acts as an API for Cognigy xApp sessions to connect. Distributes xApp relevant events to end-user devices and reacts on xApp data-inputs.                                                                                                |
| service-ai                                      | Processes actual user messages, coordinates with our NLU microservices, waits for Extensions and HTTP Requests to external systems and processes Cognigy Script. This is the core of Cognigy.AI.                                         |
| service-nlp-ner                                 | Detects [System Slots](../empower/nlu/slots-and-lexicons/slots.md) in user utterances - these are things like dates, emails, currencies and numbers.                                                                                     |
| service-nlp-matcher                             | Detects [Lexicon Slots](../empower/nlu/slots-and-lexicons/slots.md) in user utterances using [Lexicons](../empower/nlu/slots-and-lexicons/lexicons.md).                                                                                  |
| service-nlp-classifier-score                    | Implement intent recognition based on [Intent models](../empower/nlu/overview.md) our customers can train within our platform. There are variants for different languages (German, English, Korean, Japanese, Generic, XX).              |
| service-nlp-embedding                           | Runs our pre-trained word-embedding models which are part of our NLU system and drive [Intent models](../empower/nlu/overview.md) our customers can create as part of our platform. Language dependent embedding services are available. |
| service-http & execution                        | Sends HTTP-Requests to external 3rd party systems when [HTTP Request Flow Node](../build/node-reference/service/http-request.md) is used and executes Flow Nodes of our customers as part of [Extensions](../build/extensions.md).       |
| service-profiles                                | Manages [Contact Profiles](../analyze/contact-profiles.md) and offers the ability to access them via Cognigy Script.                                                                                                                     |
| service-function-scheduler & function-execution | Schedules and executes the source-code of our customers in [Cognigy Functions](../build/functions.md).                                                                                                                                   |
| service-handover                                | Implements an interface for 3rd party [handover providers](../escalate/handover-reference/overview.md) like Ring Central Engage. Forwards end-users message to those external providers while conversations are in "handover".           |