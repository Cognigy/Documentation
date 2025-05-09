---
title: "Overview"
slug: "nlu-connectors"
hidden: false
description: "NLU Connectors are resources that allow Cognigy.AI to connect with external Natural Language Understanding (NLU) providers. These connectors enable Cognigy.AI to send user input to a third-party NLU providers, which processes the input to determine user intents and extract relevant data."
tags:
  - nlu connectors
  - custom nlu connectors
  - external nlu
---

# NLU Connectors

_NLU Connectors_ allow Cognigy.AI to connect with external Natural Language Understanding (NLU) providers. These connectors enable Cognigy.AI to send user input to third-party NLU providers. The providers process the input to identify user intentions and extract relevant data.

The connectors ensure external NLU systems return results in a standardized format. This format allows easy switching between NLU providers without modifying Flows in Cognigy.AI.

You can select the [NLU connectors of your choice](../nlu-connector-reference/all-nlu-connectors.md), including native connectors and third-party connectors, or create a custom connector.

## Key Benefits

- **Enhanced Data Privacy**. NLU connectors enable preprocessing of input text, allowing sensitive information to be masked or removed before it reaches the Intent Trainer. NLU connectors prevent sensitive data from being stored or used for training, protecting user privacy.
- **Improved Intent Training**. By preprocessing the input text and removing irrelevant or inappropriate data, NLU connectors ensure that the Intent Trainer receives cleaner, more focused data.
- **Flexible Slot Management**. NLU connectors provide a mechanism for customizing and adapting Slot mechanics, such as date handling. This mechanism allows you to fine-tune how Slots are extracted and used within the conversation, addressing specific requirements or edge cases.

## Restrictions

- When using external NLU connectors, API quota limits, additional terms, conditions, or charges may apply.

## Working with NLU Connectors

=== "GUI"
     You can view, create, export, and delete NLU Connectors in **Build > NLU Connectors**.

=== "API"
     You can view, create, update, and delete NLU Connectors using the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#get-/v2.0/nluconnectors).

### NLU Transformers

Customize the pipeline in NLU Connectors by using the [NLU Transformers](nlu-transformers.md).
With transformers, you can:

- Modify the incoming message from the Endpoint before it's sent to the NLU engine.
- Adjust the response from the NLU engine before it reaches the Flow execution.