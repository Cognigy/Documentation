---
title: "Activate Knowledge AI"
slug: "activate-knowledge"
description: "Activate Knowledge AI: apply for a license, allocate quotas, and activate feature flags."
hidden: false
tags: ['Knowledge AI', 'License Activation', 'Quotas', 'Knowledge Chunks', 'Activate Knowledge AI']
---

# Activate Knowledge AI

[![Version badge](https://img.shields.io/badge/Updated in-v4.80-blue.svg)](../../../release-notes/4.80.md)

To activate Knowledge AI, first complete the following steps:

1. [Apply for a license](#apply-for-a-license)
2. [Set quotas](#set-quotas)
3. [Activate the feature flag](#activate-the-feature-flag)
4. [Familiarize yourself with Knowledge AI metrics](#view-metrics)

## Apply for a License

You need to obtain a license from Cognigy to use Knowledge AI. The license allows you to use Knowledge AI with your installation and allocate Knowledge Chunks quotas to your organizations. If you exceed your quotas, you can't create new Knowledge AI resources or edit existing ones.

A user with `admin` rights needs to add the license to your installation. If you are using a shared SaaS installation with version 4.78 or later, contact [Cognigy technical support](../../../help/get-help.md) to add a quota for your organization. For on-premises and dedicated SaaS installations, contact Customer Success Management or Account Executives at Cognigy.

## Set Quotas

After adding the license, you need to set your Knowledge Chunk quotas based on the number of quotas you purchased within your license. You can set quotas to only one organization or distribute them among multiple organizations.

Only a user with `admin` rights for the Management UI can set quotas via the Management UI or the Cognigy.AI API. If you use a shared SaaS environment, contact [Cognigy technical support](../../../help/get-help.md) to configure quotas. For on-premises and dedicated SaaS installations, contact Customer Success Management or Account Executives at Cognigy.

### Set Quotas in Management UI

To set quotas in [Management UI](https://management-ui-v4.cognigy.ai/), select an organization on the **Organisations** page. Then, click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg) **> Change Organisation Quotas** in the upper-right corner and enter the value in the **Max knowledge chunks** field.

### Set Quotas via API

To set quotas via the [Cognigy.AI API](https://api-dev.cognigy.ai/openapi), follow these steps:

1. Under **AUTHENTICATION > HTTP Basic**, enter your Management UI credentials, then click **SET**.
2. Send the following HTTP request for a new or an existing organization:

    === "New Organization"
         Use the [POST /management/v2.0/organisations](https://api-dev.cognigy.ai/openapi#post-/management/v2.0/organisations) request.
         Send the request with a JSON body. In the JSON body, specify a unique name for the new organization and the maximum number of Knowledge Chunks in the `quotaMaxKnowledgeChunks` parameter.

         ```bash
         POST /management/v2.0/organisations
         Content-Type: application/json
    
         {
           "name": "My Organization",
           "quotaMaxKnowledgeChunks": 1000
         }
         ```
         If the response is successful, the server returns a `200` status code with the `organisationId` and set quota.

    === "Existing Organization"
         Use the [PATCH /management/v2.0/organisations/{organisationId}](https://api-trial.cognigy.ai/openapi#patch-/management/v2.0/organisations/-organisationId-) request. 
         Include the `organisationId` parameter in the path and a JSON body. In the JSON body, specify the maximum number of Knowledge Chunks in the `quotaMaxKnowledgeChunks` parameter. Find `organisationId` in the **ID** column under **Management UI > Organisations**.
        
         ```bash
         PATCH /management/v2.0/organisations/{organisationId}
         Content-Type: application/json
    
         {
           "quotaMaxKnowledgeChunks": 1000
         }
         ```
           
         If the response is successful, the server returns a `200` status code with an empty body.

### Billable Units

Knowledge Chunks and Knowledge Queries are billable units:

- **Number of Knowledge Chunks** — Knowledge AI calculates the number of Knowledge Chunks you consume when creating or editing Knowledge Sources or Knowledge Chunks. If your quota is exceeded, you can't edit any Knowledge Sources or create new ones.
- **Number of Knowledge Queries** — Knowledge AI counts the number of Queries performed to retrieve relevant Knowledge Chunks. The number of Knowledge Queries is unlimited. However, you will be billed based on the Queries you have performed. Each time the following Nodes are executed they increase the number of performed Knowledge Queries by one:
    - [AI Agent Node](../../build/node-reference/ai/ai-agent.md)
    - [Search Extract Output Node](../../build/node-reference/other-nodes/search-extract-output.md)
    - [Copilot: Knowledge Tile Node](../../build/node-reference/ai-copilot/knowledge-tile.md)

## Activate the Feature Flag

To activate the Knowledge AI feature flag, contact [Cognigy technical support](../../../help/get-help.md).

## View Metrics

Familiarize yourself with the [Admin Center](../../administer/access/admin-center/overview.md) page. On this page, you can monitor Knowledge AI metrics to manage the consumption of Knowledge AI resources effectively.

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/knowledge-ai.png" width="100%" />
</figure>

{! _includes/ai/administer/access/knowledge-ai-metrics.md !}
