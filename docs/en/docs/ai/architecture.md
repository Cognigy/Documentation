---
 title: "Architecture" 
 slug: "architecture" 
 hidden: false 
---
# Architecture

## Overview
<div class="divider"></div>
Cognigy.AI is a modern, cloud-native software solution based on a scalable microservice architecture. This modern architecture allows
us to leverage the compute power of multiple servers for a single software product. Instead of running a single executable on a single server,
we have de-composed Cognigy.AI into more than 30 separate executables. These smaller executables (hence the name microservice) despite being separated,
act as a single product - Cognigy.AI - by interacting with each other through network calls.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/architecture.drawio.png" width="100%" />
  <figcaption>Cognigy.AI v4.21.0 architecture</figcaption>
</figure>

Each individual microservice runs as a containerized application on top of Kubernetes. Containers are a way of how processes can run in isolation
from each other and offer the ability to ship modern software products together with their dependencies - for instance a runtime environment.
A program written in JavaScript might need a specific version of the NodeJS runtime to function properly - containers allow to package such
dependencies together with the actual application into one shippable unit. One of the more popular container runtimes and a set of other container
specific tools is [Docker](https://www.docker.com/).

Managing a high numer of moving parts - the microservices mentioned above - is quite a challenge and requires an additional software product
which is called a container orchestrator. [Kubernetes](https://kubernetes.io/) is such a container orchestrator dealing with tasks like:

- assigning containers to one of the available servers in the Kubernets cluster respecting their individual hardware requirements and matching these against the available hardware on a server
- observing whether containers need to be restarted in case they crash
- updating containers to a newer version when a software update (e.g. new version of Cognigy.AI) has been shipped
- testing whether containerized processes still respond by implementing readiness- and liveness-probes

## Runtime & IDE
<div class="divider"></div>
Cognigy.AI itself is a product offering different groups of functionality:

- IDE
- Runtime
- [Insights (Analytics)]({{config.site_url}}insights/cognigy-insights/)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/architecture-divided.drawio.png" width="100%" />
  <figcaption>Components for Cognigy.AI IDE (orange), Cognigy.AI Runtime (green) & Cognigy Insights (blue)</figcaption>
</figure>

Cognigy Insights plays a smaller role regarding Cognigy.AIs product architecture, hence we skip it on this page.

### IDE - building your Virtual Agents
A place that allows you to create Virtual Agents and use all of the functionality like Flows, Playbooks, Lexicons & Intents. We call this part
of the product the IDE (=Integrated Development Environment) - a term often used in software development. Once you are done with the first iteration
of your Virtual Agent, a so-called [Snapshot]() must be created in order to deploy your Virtual Agent into production. A Snapshot is an immutable
copy of your Virtual Agent containing all resources which make it up - e.g. your Flows, Lexicons, Intents and Extensions. Snapshots act as the interface
to the second group of functionality: The Cognigy.AI Runtime.

The following table shows the most relevant microservices forming the IDE:

| Microservice name | Responsibilities |
| ----------------- | ---------------- |
| service-ui | Serves the WebGUI for Cognigy.AI |
| service-api | RESTful API to fully control Cognigy.AI through HTTP calls. Full documentation in the form of an [OpenAPI spec]({{config.site_url}}ai/developer-guides/using-api/) is available. Also implements authentication & authorization. |
| service-resources | Manages all resources within Cognigy.AI - meaning Flows, Endpoints, Playbooks etc. |
| service-custom-modules | Processes uploaded Cognigy Extensions and prepares them for usage. |
| service-security | Manages users, organizations and roles including permissions. |
| service-handover | Implements an interface for 3rd party [handover providers]({{config.site_url}}ai/handover-providers/overview/) like Ring Central Engage. |


### Runtime - running your Virtual Agents
Our Runtime is optimized for performance & throughput. All microservices belonging to the runtime are stress-tested on a regular basis and can
scale horizontally. Cognigy.AI's runtime is a highly distributed system and can leverage huge amounts of hardware if given. The following table
describes the responsibilities of key runtime microservices:

| Microservice name | Responsibilities |
| ----------------- | ---------------- |
| service-endpoint  | Translates channel specific incoming requests to our internal representation, executes Transformers, counts billing relevant information and sends responses back to external channels. |
| service-ai | Processes actual user messages, coordinates with NLU stack, waits for Extensions and HTTP Requests to external systems and processes Cognigy Script. |
| service-nlp-ner | Detects [System Slots]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/) in user utterances - these are things like dates, emails, currencies and numbers. |
| service-nlp-matcher | Detects [Lexicon Slots]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/) in user utterances using [Lexicons]({{config.site_url}}ai/resources/build/lexicons/).
| service-nlp-score | Implement intent recognition based on [Intent models]({{config.site_url}}ai/nlu/nlu-overview/overview/) our customers can train within our platform. There are variants for different languages (German, English, Korean, Japanese, Generic, XX). |
| service-http & execution |Sends HTTP-Requests to external 3rd party systems when [HTTP Request Flow Node]({{config.site_url}}ai/flow-nodes/services/http-request/) is used and executes Flow Nodes of our customers as part of [Extensions]({{config.site_url}}ai/resources/manage/extensions/). |
| service-profiles | Manages [Contact Profiles]({{config.site_url}}ai/resources/manage/contact-profiles/) and offers the ability to access them via Cognigy Script. |
| service-function-scheduler & function-execution | Schedules and executes the source-code of our customers in [Cognigy Functions]({{config.site_url}}ai/resources/build/functions/). |