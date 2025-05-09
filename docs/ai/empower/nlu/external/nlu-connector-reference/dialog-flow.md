---
title: "Dialog Flow"
slug: "dialog-flow"
description: "The Dialogflow connector allows you to connect to Google Dialogflow and use its language understanding results to power AI agents within Cognigy.AI."
hidden: false
tags:
  - Dialogflow
  - external NLU
  - Dialogflow connector
---

# Dialogflow

The Dialogflow connector enables integration with [Google Dialogflow](https://cloud.google.com/dialogflow/docs) to use its language understanding results for powering AI Agents in Cognigy.AI.

## Prerequisites

- Access to Dialogflow.

## Configuration on the NLU Provider Side

1. Go to [Dialogflow](https://dialogflow.cloud.google.com/) and create a new agent. 
2. In the Google Cloud Console, go to **APIs & Services > Enable APIs and Services** and enable the **Dialogflow API**.
3. Define your intents and entities for the agent in Dialogflow.
4. In **Google Cloud Console**, go to **IAM & Admin > Service Accounts**, create a service account, and generate a **JSON Private Key**.

## Configuration on the Cognigy.AI Side

In **Cognigy.AI**, go to **Build > NLU Connectors**,
create a **Dialogflow NLU Connector**, then select the Dialogflow version.

=== "v1"

    | **Parameter** | **Description**                      |
    |---------------|--------------------------------------|
    | Access Token  | A token used for API authentication. |

=== "v2"

    | **Parameter**           | **Description**                                                                                                                          |
    |-------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
    | Dialogflow Project ID   | The unique identifier for your Dialogflow project.                                                                                       |
    | Private Key             | The JSON credentials file containing the private key for authentication.                                                                 |

## More Information

- [All NLU Connectors](all-nlu-connectors.md)
- [Cognigy Help Center: Dialogflow](https://support.cognigy.com/hc/en-us/articles/360017466620-Dialogflow-External-NLU)