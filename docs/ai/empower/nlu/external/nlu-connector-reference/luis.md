---
title: "Microsoft LUIS"
slug: "microsoft-luis"
description: "The Microsoft LUIS NLU connector allows you to connect to Microsoft LUIS and use its language understanding results to power AI Agents within Cognigy.AI."
hidden: false
tags:
  - Microsoft LUIS
  - external NLU
  - Microsoft LUIS NLU connector
---

# Microsoft LUIS 

The Microsoft LUIS NLU connector enables integration with [Microsoft LUIS](https://www.luis.ai/) to use its language understanding results for powering AI Agents in Cognigy.AI.

## Prerequisites

- Access to Microsoft LUIS.

## Configuration on the NLU Provider Side

1. Set up a new LUIS app in the **Microsoft LUIS portal**, define intents, add entities, and train the model.
2. Go to **Manage > Azure Resources** in your LUIS app to find the required parameters:
    - **Location** — the Azure region where the LUIS service is hosted. For example, `westus2`.
    - **Subscription Key** — the key (Primary or Secondary key) can be found in **Manage > Azure Resources**.
    - **App ID** — the App ID can be found in **Manage > Settings** of the LUIS app.
3. Ensure the app is published in **production mode** for external services, such as Cognigy.AI, to access it.

## Configuration on the Cognigy.AI Side

1. In Cognigy.AI, go to **Build > NLU Connectors**, create a LUIS NLU connector. 
2. Fill in the placeholders in the URL with the parameters you found in LUIS:

   ```txt
   https://{location}.api.cognitive.microsoft.com/luis/v2.0/apps/{appId}?subscription-key={subscriptionKey}&q=
   ```
3. Paste this URL into the **Authentication URL** field.

{! _includes/ai/empower/nlu/nlu-connectors.md !}

## More Information

- [All NLU Connectors](all-nlu-connectors.md)
- [Cognigy Help Center: Microsoft LUIS](https://support.cognigy.com/hc/en-us/articles/360017517319-Microsoft-LUIS-External-NLU)