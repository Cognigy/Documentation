---
title: "Activate Knowledge AI"
slug: "activate-knowledge"
description: "Made a few steps before activating the Knowledge AI feature: apply for a license, allocate quotas, and activate feature flags."
hidden: false
---

# Activate Knowledge AI

[![Version badge](https://img.shields.io/badge/Added in-v4.78-blue.svg)](../../../release-notes/4.78.md)

Before using Knowledge AI, make sure that you complete the following steps:

1. [Apply for a license](#apply-for-a-license)
2. [Allocate quotas](#allocate-quotas)
3. [Activate feature flags](#activate-feature-flags)
4. [Familiarize yourself with how to monitor Knowledge AI metrics](#view-metrics)

## Apply for a License

To use the Knowledge AI feature, you must obtain a license from Cognigy. 
This license allows you to use the feature for your organization and also places limits on how many Chunks you can use. 
If the quota is exceeded, you will not be able to create new Knowledge AI resources or edit existing ones.

A user with `admin` rights needs to add the license to your installation.
If you are using a shared SaaS environment, contact [Cognigy technical support](../../../help/get-help.md) to add the license.

## Allocate Quotas

After adding the license, you need to allocate a quota for the number of Knowledge Chunks based on the license. You can allocate the quota to one organization or divide it among multiple organizations. 
If you have multiple organizations, ensure that you share the quota between them without exceeding your license quota.

### Knowledge Chunks and Queries

Knowledge Chunks and Knowledge Queries are billable units:

- **Number of Knowledge Chunks**. Cognigy.AI determines the number of Chunks that can be consumed when creating Knowledge Sources. If the quota is exceeded, you will not be able to edit existing Knowledge Sources or create new ones.
- **Number of Knowledge Queries**. Cognigy.AI counts the number of Queries performed to retrieve relevant Knowledge Chunks. The number of Knowledge Queries is unlimited. However, you will be billed based on the Queries you have performed. The following Nodes impact the query counts:
    - [Search, Extract, Output](../../build/node-reference/other-nodes/search-extract-output.md). Each execution of this Node increases the counter by one unit.
    - [Copilot: Knowledge Tile Node](../../build/node-reference/ai-copilot/knowledge-tile.md). Each execution of this Node also increases the query count by one unit. The execution occurs when a suggested answer is provided or when a human agent retrieves information via the Search field.

### Set Quotas

Only a user with `admin` rights for the management-ui can set quotas via the management-ui API.
If you use a shared SaaS environment, contact [Cognigy technical support](../../../help/get-help.md) to configure quotas.

To set a quota using the management-ui API, follow these steps:

1. Open the Cognigy.AI API and navigate to the **AUTHENTICATION > HTTP Basic**.
2. Enter the login and password you use for the management-ui authorization, then click **SET**.
3. Select the organization to which you want to apply a quota:

    === "New Organization"
         To set the quota for a new organization, use the API [POST /management/v2.0/organisations](https://api-dev.cognigy.ai/openapi#post-/management/v2.0/organisations) request.
         Send the request with a JSON body. In the JSON body, specify a unique name for the new organization and the maximum number of Knowledge Chunks in the `quotaMaxKnowledgeChunks` parameter.

         ```bash
         POST /management/v2.0/organisations
         Content-Type: application/json
    
         {
           "name": "My Organization",
           "quotaMaxKnowledgeChunks": 1000
         }
         ```
         If the response is successful, the server returns a 200 status code with the `organisation id` and applied quota.

    === "Existing Organization"
         To set the quota for the existing organization, use the API [PATCH /management/v2.0/organisations/{organisationId}](https://api-trial.cognigy.ai/openapi#patch-/management/v2.0/organisations/-organisationId-) request. 
         Send the request with the `organisationId` parameter in the path and a JSON body. In the JSON body, specify the maximum number of Chunks using the `quotaMaxKnowledgeChunks` parameter. You can find `organisationId` in the management-ui on the **Organisations** page in the **ID** column next to the organization name.
        
         ```bash
         PATCH /management/v2.0/organisations/{organisationId}
         Content-Type: application/json
    
         {
           "quotaMaxKnowledgeChunks": 1000
         }
         ```
           
         If the response is successful, the server returns a 200 status code with an empty body.

## Activate Feature Flags

Activating Knowledge AI depends on your environment:

- If you are using Trial, shared SaaS, or dedicated SaaS environments, contact [Cognigy technical support](../../../help/get-help.md).
- If you are using an on-premises environment, configure the Cognigy.AI `values.yaml`.

### On-Premises

To activate the Knowledge AI feature for an on-premises environment, configure the Cognigy.AI `values.yaml` as follows:

1. Add the following section at the root level:
    ```yaml
    knowledgeSearch:
      enabled: true
    ```
2. In the `cognigyEnv` config map, set the `FEATURE_ENABLE_KNOWLEDGE_SEARCH_WHITELIST` environment variable to a comma-separated list of organization IDs. This variable enables Knowledge AI for the specified organizations:
    ```yaml
    cognigyEnv:
      FEATURE_ENABLE_KNOWLEDGE_SEARCH_WHITELIST: "org1,org2,org3"
    ```
    If the feature should be enabled for all organizations, the value can be set to "*".

## View Metrics

Familiarize yourself with the [Admin Center](../../administer/access/admin-center.md) page.
On this page, you can monitor Knowledge AI metrics to manage the consumption of Knowledge AI resources effectively.

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/knowledge-ai.png" width="100%" />
</figure>

{! _includes/ai/administer/access/knowledge-ai-metrics.md !}