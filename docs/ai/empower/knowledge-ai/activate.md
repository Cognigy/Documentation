---
title: "Activate Knowledge AI"
slug: "activate-knowledge"
description: "Made a few steps before activating the Knowledge AI feature."
hidden: false
---

# Activate Knowledge AI

Before using Knowledge AI, make sure that you perform the following steps:

1. [Apply for a license](#apply-for-a-license)
2. [Allocate quotas](#allocate-quotas)
3. [Activate feature flags](#activate-feature-flags)
4. [Monitor Knowledge AI metrics](#view-metrics)

## Apply for a License

To use the Knowledge AI feature, you need to get a license from Cognigy.
This license lets use the feature for your organization and limits how many chunks you can use.
Once the quota is exceeded, you won't be able to create new Knowledge AI resources or edit existing ones.

A user with `admin` rights needs to add the license to your installation.
If you are using a shared SaaS environment, contact Cognigy technical support to add the license.

## Allocate Quotas

After adding the license, you must allocate a quota for the number of Knowledge Chunks according to the license.
You can use the quota for one organization or divide it among multiple organizations.
If you have multiple organizations, make sure to share the quota between them without exceeding your license quota.

### Knowledge Chunks and Queries

Knowledge Chunks and Knowledge Queries are billable units:

- **Number of Knowledge Chunks**. Cognigy.AI determines how many chunks can be consumed when creating Knowledge Sources. If the quota is exceeded, you cannot edit existing Knowledge Sources or create new ones.
- **Number of Knowledge Queries**. Cognigy.AI counts how many queries were performed to retrieve a relevant Chunk of knowledge. The number of Knowledge Queries is unlimited. You'll only be billed based on the queries you have performed. The following Nodes impact the query counts:
    - [Search, Extract, Output](../../build/node-reference/other-nodes/search-extract-output.md). Each execution of this Node increases the counter by one unit.
    - [Copilot: Knowledge Tile Node](../../build/node-reference/ai-copilot/knowledge-tile.md). Each execution of this Node increases the counter by one unit. The execution happens when a suggested answer is provided or when a human agent retrieves information via the Search field, the counter increases by one unit.

### Set Quotas

Only a user with `admin` rights for the management-ui can set quotas via the management-ui API.
If you use a shared SaaS environment, contact Cognigy technical support to configure quotas.

To set a quota using the management-ui API, follow these steps:

1. Open the Cognigy.AI API and go to the **AUTHENTICATION > HTTP Basic**.
2. Enter the login and password you use for the management-ui authorization and click **SET**.
3. Select the organization to which you want to apply a quota:

    === "New Organization"
         To set the quota for a new organization, use the API [POST /management/v2.0/organisations](https://api-dev.cognigy.ai/openapi#post-/management/v2.0/organisations) request.
         Send the request with a JSON body. In the JSON body, specify a unique name for the new organization and the maximum number of knowledge chunks in the `quotaMaxKnowledgeChunks` parameter.

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
         Send the request with the `organisationId` parameter in the path and a JSON body. In the JSON body, specify the maximum number of chunks using the `quotaMaxKnowledgeChunks` parameter. You can find an organisationId in the management UI on the Organisations page in the ID column next to the organization name.
        
         ```bash
         PATCH /management/v2.0/organisations/{organisationId}
         Content-Type: application/json
    
         {
           "quotaMaxKnowledgeChunks": 1000
         }
         ```
           
         If the response is successful, the server returns a 200 status code with an empty body.

## Activate Feature Flags

To activate the Knowledge AI feature flag, contact [Cognigy technical support](../../../help/get-help.md).

## View Metrics

Familiarize yourself with the [Admin Center](../../administer/access/admin-center.md) page.
On this page, you can monitor Knowledge AI metrics to manage the consumption of Knowledge AI resources effectively.

<figure>
  <img class="image-center" src="../../../../_assets/ai/administer/access/knowledge-ai.png" width="100%" />
</figure>

{! _includes/ai/administer/access/knowledge-ai-metrics.md !}