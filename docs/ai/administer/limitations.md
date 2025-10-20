---
title: "Quotas and Limits" 
slug: "quotas-and-limits"
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

This page describes the default quotas and limits that apply to Cognigy.AI installations.

- _Limits_ are technical or architectural caps that can't be changed (or can only be changed in rare special cases). For example, the maximum file size is 256 MB.
- _Quotas_ are configurable usage allocations. You can request higher quotas for your dedicated SaaS or on-premises installations. For example, API call quota: 1,000 requests per 5 minutes; you might ask Cognigy technical support to raise this.

## Default Quotas and Limits for Cognigy.AI

The table compares values across different installation and environment types:

- **Default** – the baseline value used in both in SaaS and on-premises environments. It serves as the reference point for all other installations and is applied as the initial configuration unless explicitly overridden.
- **Trial** – overrides applied in trial environments.
- **App** – overrides applied in shared SaaS installations.

If you have an on-premises Cognigy.AI installation, you can set TTL values system-wide via the `values.yaml` (config map) or organization-wide via [Management UI](../administer/access/management-ui.md). If you have a dedicated SaaS installation, you can set these values in the [Management UI](../administer/access/management-ui.md) or by contacting [Cognigy technical support](#submit-a-support-request).

| Quota / Limit Name                                                                                                              | Default                          | Trial  | App    |
|---------------------------------------------------------------------------------------------------------------------------------|----------------------------------|--------|--------|
| **Network**                                                                                                                     |                                  |        |        |
| Rate limit                                                                                                                      | 1,000 requests per 5 minutes[^*] |        |        |
| Waiting period before the `user disconnected` event is triggered                                                                | 3 seconds[^**]                   |        |        |
| **Database and HTTP Request Node Calls**                                                                                        |                                  |        |        |
| Maximum query result from database Nodes                                                                                        | 500 kB                           |        |        |
| Maximum [Input](../build/ai-agent-memory/input.md) size                                                                         | 65 kB[^***]                      |        | 1.5 MB |
| Maximum [Context](../build/ai-agent-memory/context.md) size                                                                     | 65 kB[^***]                      |        | 1.5 MB |
| Maximum [Profile](../build/ai-agent-memory/profile.md) size                                                                     | 65 kB[^***]                      |        | 1.5 MB |
| Maximum HTTP payload size for HTTP Request Node                                                                                 | 65 kB                            |        |        |
| Maximum HTTP response size for HTTP Request Node                                                                                | 524 kB                           | 2.6 MB | 1.5 MB |
| HTTP Request Node timeout[^****]                                                                                                | 8 s                              |        | 15 s   |
| Maximum JSON-encoded payload size for requests to Cognigy.AI REST API                                                           | 60 kB                            |        |        |
| Minimum HTTP text body (used in CSV)                                                                                            | 100 kB                           |        |        |
| Maximum text-encoded (raw) payload size for requests to Cognigy.AI REST API (for example, used to upload CSV files)             | 2 MB                             |        |        |
| **NLU**                                                                                                                         |                                  |        |        |
| Maximum number of invitations to Projects per user per day[^*****]                                                              | 10                               |        |        |
| Maximum number of example sentences per Intent in Flows                                                                         | 200                              |        |        |
| Maximum total number of example sentences in Flows, including sentences in attached Flows                                       | 10,000                           | 15,000 |        |
| Maximum total number of Intents in Flows, including Intents in attached Flows                                                   | 2,500                            | 10,000 |        |
| Maximum time an Intent training task is allowed to run                                                                          | 10 m                             |        |        |
| **Intent Trainer**                                                                                                              |                                  |        |        |
| Maximum file size for uploading Intent Trainer records                                                                          | 150 MB                           |        |        |
| **Functions**                                                                                                                   |                                  |        |        |
| Maximum number of outbound HTTP requests per Function execution                                                                 | 5                                |        |        |
| Maximum HTTP response size in Functions                                                                                         | 1 MB                             |        |        |
| Maximum time a Function can run                                                                                                 | 15 m                             |        |        |
| Maximum time Cognigy Function instance data is stored                                                                           | 30 days                          |        |        |
| Maximum number of active and running Cognigy Functions per organization                                                         | 10                               |        |        |
| Maximum size of the parameters object used to start a Function instance                                                         | 130 kB                           |        |        |
| **Snapshots**                                                                                                                   |                                  |        |        |
| Maximum size of a packaged Snapshot                                                                                             | 256 MB                           |        |        |
| Maximum number of Snapshots per Project                                                                                         | 10                               |        |        |
| Lifetime of a downloadable Snapshot before it needs to be re-created                                                            | 1 day                            |        |        |
| **Packages**                                                                                                                    |                                  |        |        |
| Maximum size of a Package                                                                                                       | 256 MB                           |        |        |
| **Playbooks**                                                                                                                   |                                  |        |        |
| Maximum number of concurrent Playbook executions                                                                                | 10                               |        |        |
| **Locales**                                                                                                                     |                                  |        |        |
| Maximum number of Locales per Project                                                                                           | 10                               |        |        |
| **Extensions**                                                                                                                  |                                  |        |        |
| Extension actions                                                                                                               | 10                               |        |        |
| Maximum execution time for Nodes from Extensions                                                                                | 20 s                             |        |        |
| Maximum size of an individual Extension package                                                                                 | 128 MB                           |        |        |
| Maximum size of file-system cache used for executing Extensions                                                                 | 512 MB                           |        |        |
| Maximum number of HTTP requests an Options Resolver can send                                                                    | 5                                |        |        |
| Maximum HTTP response size in an Options Resolver                                                                               | 1 MB                             |        |        |
| Maximum time an Options Resolver can run                                                                                        | 5 s (max HTTP calls * 1 s)       |        |        |
| Maximum message size for [untrusted Extensions](../build/extensions.md)                                                         | 300 KB                           |        |        |
| **Execution and Operations**                                                                                                    |                                  |        |        |
| Maximum number of times a Flow can execute the same path for a single user message before triggering `Infinite Loop Protection` | 4                                |        |        |
| Maximum number of undo/redo operations to be stored per user in the Flow editor                                                 | 5                                |        |        |
| **Transformers**                                                                                                                |                                  |        |        |
| Maximum number of HTTP requests that can be sent from an Endpoint transformer                                                   | 1                                | 2      |        |
| Maximum amount of time an Endpoint transformer can run before it is stopped                                                     | 5 s                              |        |        |
| **SMTP Node**                                                                                                                   |                                  |        |        |
| Maximum number of retries for sending an outbound email                                                                         | 3                                |        |        |
| Maximum size of an email attachment                                                                                             | 10 MB                            |        |        |
| **Code Node**                                                                                                                   |                                  |        |        |
| Maximum code execution time                                                                                                     | 1 s                              |        |        |
| Maximum number of characters allowed in the code editor                                                                         | 200K                             |        |        |
| Maximum API calls per Code Node                                                                                                 | 100                              |        |        |

[^*]: The rate limit of 1,000 requests per 5 minutes from a single IP address applies only to shared SaaS installations.
[^**]: If you have a dedicated SaaS or on-premises installation, you can change this limit. The `SOCKET_ENDPOINT_DISCONNECT_GRACE_PERIOD` variable lets you set a waiting period (in seconds) before marking a user as disconnected. This delay ensures temporary network issues or brief interruptions don't immediately trigger the `user disconnected` event. 
[^***]: The limit for the Input, Context, and Profile objects is shared and can be configured for dedicated SaaS and on-premises installations using the `MAX_MEMORY_OBJECT_SIZE` variable. Increasing the object size could lead to performance issues.
[^****]: You can change this limit if you have an on-premises installation. For more information, refer to the [HTTP Request Node](../build/node-reference/service/http-request.md) article.
[^*****]:  If you have a dedicated SaaS or on-premises installation, you can change this limit by setting the `MAX_ADD_PROJECT_MEMBER_REQUESTS_PER_EMAIL_PER_DAY` environment variable.

## Retention of Records

!!! note
    [Cognigy Insights](../../insights/overview.md) and the Cognigy.AI [OData endpoint](../analyze/odata.md) rely on the records listed in the **Data** section in the table.

| Record Type                                                                       | Default   |
|-----------------------------------------------------------------------------------|-----------|
| **Logs**                                                                          |           |
| Maximum time until a log entry on the Logs page is removed                        | 1 day     |
| **Sessions**                                                                      |           |
| Maximum time until information about a Flow execution session is removed[^******] | 7 days    |
| **Data**                                                                          |           |
| Maximum time until a Contact Profile that hasn't been read or modified is removed | 30 days   |
| Maximum time until conversation transcripts are deleted                           | 30 days   |
| **Intent Trainer Records**                                                        |           |
| Maximum time Intent Trainer records are stored in the database                    | 10 days   |
| **Audit Events**                                                                  |           |
| Maximum time until audit events are removed                                       | 30 days   |
| **xApp Session**                                                                  |           |
| Maximum time until an xApp Session expires                                        | 30 days   |
| **PCAP File in the Voice Gateway Self-Service Portal**                            |           |
| Maximum time until a PCAP File is removed                                         | 14 days   |

[^******]: If you have a dedicated SaaS or on-premises installation, you can change this limit in the [Management UI](access/management-ui.md) or by setting the `MAX_SESSION_STATE_TTL_IN_MINUTES` environment variable. For some Endpoints, you can also configure the limit in the [Session Management](../deploy/endpoints/session-management.md) section. The session TTL is determined by the lowest value among these three settings.

## Submit a Support Request

Change requests can be reviewed only for dedicated SaaS installations. Changes to shared SaaS installations affect functionality and performance for all customers.

If you want to request a change for Cognigy dedicated SaaS, use this template:

??? info "Quota Change Request Template"

    ```txt
    Hello Cognigy Support, 

    I would like to raise the quota “<Description>” to <x> value.  
    We need this because <short explanation of your use case>. 
 
    Best regards, 
    Your Name 
    ```

[^*****]: If you have a dedicated SaaS or on-premises installation, you can change this limit in the [Management UI](access/management-ui.md) or by setting the `MAX_SESSION_STATE_TTL_IN_MINUTES` environment variable. For some Endpoints, you can also configure the limit in the [Session Management](../deploy/endpoints/session-management.md) section. The session TTL is determined by the lowest value among these three settings.