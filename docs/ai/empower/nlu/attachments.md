---
title: "Attachments" 
slug: "attachments"
description: "Cognigy.AI Attachments allow you to share Flows and Lexicons across multiple Flows within a Project." 
hidden: false
tags:
  - flow attachments
  - lexicon attachments
  - child flow
  - add lexicon to Flows
---

# Attachments

_Attachments_ allow you to connect [Flows](../../build/flows/overview.md) and reuse [Lexicons](slots/user-defined/lexicon.md) across multiple Flows within a Project. 

## Key Features

- **Flow sharing**. Reuse Flows and their Intents across different Flows, eliminating the need to manually rebuild the NLU model in the attached Flows.
- **Lexicon sharing**. Reuse Lexicons across different Flows, ensuring consistent language understanding.
- **Centralized resource management**. Manage Flows and Lexicons in one location. This approach simplifies updates; a change in one place applies everywhere it's used.
- **Elimination of duplication**. You don't need to copy Flows or Lexicons. This approach saves space and keeps your Project more organized.

## Attached Flows

Attached Flows share their Intents with the Flow they're attached to. Attaching Flows is optional and
allows you to reuse existing Intents without duplicating them.
If no Flows are attached, the primary Flow relies only on its own Intents.

You don't need to manually train attached Flows after modifying their Intents, as long as they aren't used individually. For example, if you attach Flow B and Flow C to Flow A, you need to train Flow A. Flow B and Flow C will be trained automatically.
However, Flow B and Flow C won't be listed as trained on the **Flows** page because they're attached to Flow A.

To attach a Flow to another Flow, follow these steps:

=== "GUI"
     1. Open your Flow and select **NLU** tab in the upper-right corner.
     2. Select the **Attached Flows** tab and activate the toggle next to the Flow that you want to attach to the current Flow.

=== "API"
     - To a new Flow, use in the [Cognigy.AI API POST /v2.0/flows](https://api-trial.cognigy.ai/openapi#post-/v2.0/flows) request.
     - To an existing Flow, use the [Cognigy.AI API PATCH /v2.0/flows/{flowId}](https://api-trial.cognigy.ai/openapi#patch-/v2.0/flows/-flowId-) request.

When you attach Flows, the NLU model doesn't run automatically.
Anytime a new Flow is attached, you need to manually rebuild the NLU model in the Flow to which you attached them.
To run the NLU model manually, click **Build Model** in **NLU > Intents**.

## Attached Lexicons

Attached Lexicons share their Keyphrases with the Flow they're attached to.
Attaching Lexicons is important because it allows precise control over which Keyphrases are recognized in specific Flows.
By attaching different Lexicons to different Flows, you can create customized conversational experiences for different use cases.

To attach a Lexicon to a Flow, follow these steps:

=== "GUI"
     1. Open your Flow and select **NLU** tab in the upper-right corner.
     2. Select the **Attached Lexicons** tab and activate the toggle next to the Lexicon that you want to attach to the current Flow.

=== "API"
     - To a new Flow, use in the [Cognigy.AI API POST /v2.0/flows](https://api-trial.cognigy.ai/openapi#post-/v2.0/flows) request.
     - To an existing Flow, use the [Cognigy.AI API PATCH /v2.0/flows/{flowId}](https://api-trial.cognigy.ai/openapi#patch-/v2.0/flows/-flowId-) request.

When you attach Lexicons, the NLU model doesn't run automatically. Anytime a new Lexicon is attached, you need to manually rebuild the NLU model in the Flow to which you attached them. To run the NLU model manually, click **Build Model** in **NLU > Intents**.

## More Information

- [Flows](../../build/flows/overview.md)
- [Lexicons](slots/user-defined/lexicon.md)