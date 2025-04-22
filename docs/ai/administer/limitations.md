---
title: "Quotas and Limits" 
slug: "limitations"
description: "Familiarize yourself with the default quotas and limits for Cognigy.AI installations."
hidden: false
tags:
  - limitations
  - limits
  - quotas
  - data retention
  - ttl
---

# Quotas and Limits

This page contains default quotas and limitations that apply to new Cognigy.AI installations. 

!!! note "Changing values for managed Cognigy.AI environments"
    In case you want to request a change for your managed Cognigy.AI environment, submit a Support request using this template: 
    ````
    Hello Cognigy Support, 

    I would like to raise the quota/limit “<Description>” to <x> value.  
    We need this because <short explanation of your use case>. 
 
    Best regards, 
    Your Name 
    ````
    Change requests can only be reviewed for Cognigy dedicated SaaS. If changes are made to Cognigy shared SaaS, the environment would affect all customers in functionality and performance.
Any **deviations** from the default values for our Trial and App environments are also stated in **bold** within the table below.

| Description                                                                                                                       | Default value                   | Trial      | App        |
|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------|------------|------------|
| **Network**                                                                                                                       |                                 |            |            |
| Rate limit                                                                                                                        | 1000 requests per 5 minutes[^*] |            |            |
| Waiting period before the `user disconnected` event is triggered                                                                  | 3 seconds[^**]                  |            |            |
| **Database and HTTP Node Calls**                                                                                                  |                                 |            |            |
| Maximum Database query result from DB Flow Nodes                                                                                  | 500 kB                          |            |            |
| Maximum [Input](../test/interaction-panel/input.md) size                                                                          | 65 kB[^***]                     |            | **1.5 MB** |
| Maximum [Context](../test/interaction-panel/context.md) size                                                                      | 65 kB[^***]                     |            | **1.5 MB** |
| Maximum [Profile](../test/interaction-panel/profile.md) size                                                                      | 65 kB[^***]                     |            | **1.5 MB** |
| Maximum HTTP payload size for HTTP-Request Flow Node                                                                              | 65 kB                           |            |            |
| Maximum HTTP response size for HTTP-Request Flow Node                                                                             | 524 kB                          | **2.6 MB** | **1.5 MB** |
| HTTP-Request Flow Node timeout                                                                                                    | 8 s                             |            | **15 s**   |
| Maximum JSON encoded payload size for requests to our RESTful API                                                                 | 60 kB                           |            |            |
| Minimum HTTP text body (used in CSV)                                                                                              | 100 kB                          |            |            |
| Maximum text encoded (raw) payload size for request to our RESTful API (for example, used to upload CSV files)                    | 2 MB                            |            |            |
| **NLU**                                                                                                                           |                                 |            |            |
| Maximum number of Example Sentences per Intent in Flows                                                                           | 200                             |            |            |
| Maximum total number of Example Sentences in Flows including Attached Flow Example Sentences                                      | 10,000                          | **15,000** |            |
| Maximum total number of Intents in Flows including Attached Flow Intents                                                          | 2,500                           | **10,000** |            |
| Maximum time an Intent-Training task is allowed to run                                                                            | 10 m                            |            |            |
| **Intent Trainer**                                                                                                                |                                 |            |            |
| Maximum file size for uploading Intent Trainer records                                                                            | 150 MB                          |            |            |
| **Cognigy Functions**                                                                                                             |                                 |            |            |
| Maximum number of outbound HTTP requests in a single Cognigy Function instance                                                    | 5                               |            |            |
| Maximum HTTP response size in Cognigy Functions                                                                                   | 1 MB                            |            |            |
| Maximum time a Cognigy Function can run                                                                                           | 15 m                            |            |            |
| Maximum time for how long data about Cognigy Function instances is stored                                                         | 30 days                         |            |            |
| Maximum number of active/running Cognigy Functions per Organization                                                               | 10                              |            |            |
| Maximum size of parameters object with which the function instance can be started                                                 | 130 kB                          |            |            |
| **Snapshots**                                                                                                                     |                                 |            |            |
| Maximum size of a packaged Snapshot                                                                                               | 256 MB                          |            |            |
| Maximum number of Snapshots per Agent                                                                                             | 10                              |            |            |
| Lifetime of a downloadable Snapshot until you have to re-create the download                                                      | 1 day                           |            |            |
| **Packages**                                                                                                                      |                                 |            |            |
| Maximum size of a Cognigy Package                                                                                                 | 256 MB                          |            |            |
| **Playbooks**                                                                                                                     |                                 |            |            |
| Maximum number of concurrent Playbook executions                                                                                  | 10                              |            |            |
| **Locales**                                                                                                                       |                                 |            |            |
| Maximum number of Locales per Agent                                                                                               | 10                              |            |            |
| **Extensions**                                                                                                                    |                                 |            |            |
| Extension actions                                                                                                                 | 10                              |            |            |
| Maximum execution time for Flow Nodes from Extensions                                                                             | 20 s                            |            |            |
| Maximum size of an individual Extension package                                                                                   | 128 MB                          |            |            |
| Maximum size for the File-System based cache for executing Extensions                                                             | 512 MB                          |            |            |
| Maximum number of HTTP requests an Options Resolver can send                                                                      | 5                               |            |            |
| Maximum HTTP response size in an Options Resolver                                                                                 | 1 MB                            |            |            |
| Maximum time an Options Resolver can run                                                                                          | 5 s (max HTTP calls * 1 s)      |            |            |
| Maximum message size for [Untrusted Extensions](../build/extensions.md#make-an-extension-trusted)                                 | 300 KB                          |            |            |
| **Execution and Operations**                                                                                                      |                                 |            |            |
| Maximum number of times a Flow can execute the same Path for a single user message before “Infinite Loop protection” is triggered | 4                               |            |            |
| Maximum number of undo/redo operations to be stored per user in the Flow Editor                                                   | 5                               |            |            |
| **Transformers**                                                                                                                  |                                 |            |            |
| Maximum number of HTTP requests that can be sent from a Cognigy Transformer                                                       | 1                               | **2**      |            |
| Maximum amount of time a Cognigy Transformer can run before it will be stopped                                                    | 5 s                             |            |            |
| **SMTP Node**                                                                                                                     |                                 |            |            |
| Maximum number of times the system retries to send an outbound Email                                                              | 3                               |            |            |
| Maximum size of an Email attachment                                                                                               | 10 MB                           |            |            |
| **Code Node**                                                                                                                     |                                 |            |            |
| Maximum code execution time                                                                                                       | 1 s                             |            |            |
| Maximum number of characters in the code editor                                                                                   | 200K                            |            |            |
| Maximum API calls per Code Node                                                                                                   | 100                             |            |            |

[^*]: The rate limit of 1000 requests per 5 minutes from a single IP address applies only to shared SaaS environments.
[^**]: If you have a dedicated SaaS or on-premises environment, you can change this limit. The `SOCKET_ENDPOINT_DISCONNECT_GRACE_PERIOD` variable lets you set a waiting period (in seconds) before marking a user as disconnected. This delay ensures temporary network issues or brief interruptions don't immediately trigger the `user disconnected` event. 
[^***]: The limit for the Input, Context, and Profile objects is shared and can be configured for dedicated SaaS and on-premises installations using the `MAX_MEMORY_OBJECT_SIZE` variable. Be aware that increasing the object size could lead to performance issues.

## Retention of Records

!!! warning
    Features such as [OData](../analyze/odata.md) and [Insights](../../insights/overview.md) rely on records you will find in the **Data** section below.

!!! note
    If you have on-premises Cognigy.AI environment, you can set TTL values system-wide via the Config Map and/or organization-wide via [Management UI](../administer/access/management-ui.md).

| Description                                                                              | Default value |
|------------------------------------------------------------------------------------------|---------------|
| **Logs**                                                                                 |               |
| Maximum time until a Log-Line on the product's Log page will be removed                  | 1 day         |
| **Sessions**                                                                             |               |
| Maximum time until relevant Flow-execution session information will be removed           | 30 days       |
| **Data**                                                                                 |               |
| Maximum time until a Contact Profile which has not been read or modified will be removed | 30 days       |
| Maximum time until Conversation transcripts will be removed                              | 30 days       |
| **Intent Trainer Records**                                                               |               |
| Maximum time Intent Trainer records are stored in the database                           | 10 days       |
| **Audit Events**                                                                         |               |
| Maximum time until audit events will be removed                                          | 30 days       |
| **xApp Session**                                                                         |               |
| Maximum time until an xApp Session will be expired                                       | 30 days       |
| **PCAP File in the Voice Gateway Self-Service Portal**                                   |               |
| Maximum time until a PCAP File will be removed                                           | 14 days       |