---
title: "Watson Assistant"
slug: "watson-assistant"
description: "The Watson Assistant NLU Connector allows you to connect to IBM Watson Assistant and use its language understanding results to power the AI Agents within Cognigy.AI."
hidden: false
tags:
  - Watson Assistant
  - external NLU
  - Watson Assistant NLU connector
---

# Watson Assistant

The Watson Assistant NLU connector enables integration with [IBM Watson Assistant](https://www.ibm.com/products/watsonx-assistant) to use its language understanding results for powering AI Agents in Cognigy.AI.

## Prerequisites

- Access to IBM Watson Assistant.

## Configuration on the NLU Provider Side

1. Log in to [IBM Cloud](https://cloud.ibm.com), create a **Watson Assistant** service, and find the **Service URL** under **Credentials**. 
2. In **Watson Assistant**, go to **Skills > Create Skill**, then select a skill type. Note that Action skills aren't supported for API connections.
3. _(Optional)_ In the skill editor, go to **Entities > System Entities** and enable `@sys-date`, `@sys-number`, and `@sys-time`.
4. In **Skills Overview**, click the three dots next to your skill, select **View API Details**, and copy the **API Key** and **Skill ID**.

## Configuration on the Cognigy.AI Side

In Cognigy.AI, go to **Build > NLU Connectors**, create a Watson Assistant NLU connector, and enter the retrieved credentials.

| **Parameter**           | **Description**                                                                                                                                         |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| API Key                 | An authentication key. Find this key in **Service Credentials** in IBM Cloud under Watson Assistant service.                                            |
| Skill ID (Workspace ID) | A unique skill identifier. Find this identifier by clicking the three dots next to the skill in **Skills Overview** and selecting **View API Details**. |
| Service URL             | An endpoint for accessing Watson Assistant API. Find this URL in **Service Credentials** under the Watson Assistant service.                            |

{! _includes/ai/empower/nlu/nlu-connectors.md !}

## More Information

- [All NLU Connectors](all-nlu-connectors.md)
- [Cognigy Help Center: Watson Assistant](https://support.cognigy.com/hc/en-us/articles/360017484979-Watson-Assistant-External-NLU#requirements-0-0)