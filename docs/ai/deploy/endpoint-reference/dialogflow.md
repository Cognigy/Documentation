---
title: "Dialogflow" 
slug: "dialogflow"
description: "The Dialogflow Endpoint enables you to connect your AI Agent to the Dialogflow platform."
hidden: false
tags:
  - dialogflow
  - google dialogflow
  - dialogflow endpoint
---

# Dialogflow

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/dialogflow.png" width="100%" />
</figure>

The Dialogflow Endpoint enables you to connect your AI Agent to the [Dialogflow platform](https://dialogflow.cloud.google.com/).

## Prerequisites

- Access to [the Dialogflow platform](https://dialogflow.cloud.google.com/).
- A fallback intent named **Default Fallback Intent** in Dialogflow with webhooks enabled.
- For Phone Gateway, a configured Dialogflow Phone Gateway and a connected phone number.

## Generic Endpoint Settings

Learn about the generic Endpoint settings on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)
- [Transformer Functions](../endpoints/transformers/overview.md) 

## Specific Endpoint Settings

??? info "Dialogflow Settings"
    | **Parameter** | **Description**                                                                                                                                                       |
    |---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Reparse Slots | A toggle that lets you combine Dialogflow and Cognigy NLU. This feature allows slots found by Dialogflow to be passed to Cognigy.AI and further processed by its NLU. |

## How to Set Up

### On the Dialogflow Side

??? info "1. Access an Agent"
    1. Log in to Dialogflow, then select your agent. 
    2. Ensure intents are configured. 
    3. Create an intent named **Default Fallback Intent**. 
    4. In the **Fulfillment** section of your Dialogflow agent, enter the Endpoint URL to enable webhooks.

??? info "2. Set up Integrations"
    1. Choose from supported integrations:
        - **Built-in Telephony**: AudioCodes, Avaya, Genesys, SignalWire, Voximplant.
        - **Dialogflow Built-in**: Messenger, Phone Gateway, Web Demo, Facebook, Google Assistant (legacy), and more.
        - **Google-contributed Open Source**: Kik, Skype, Twilio, Viber, and more.
    3. Then, follow Dialogflow’s instructions to enable Google Actions Account linking.

### On the Cognigy.AI Side

??? info "1. Create a Dialogflow Endpoint"
    1. In the left-side menu of your Agent, click **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:
        1. Select the **Dialogflow** Endpoint type.
        2. Specify a unique name.
        3. Select a relevant Flow from the list. Save changes.
    4. Copy the URL from the **Endpoint URL** field.

??? info "2. Handle the `TELEPHONY_WELCOME` Message"
    1. In your Flow, add a Once Node or an Intent rule that triggers on `TELEPHONY_WELCOME` and greet the user, for example, `Welcome to our service! How can I help you today?`.

## More Information

- [Cognigy Help Center: Dialogflow Intro ](https://support.cognigy.com/hc/en-us/articles/360016153980)
- [Cognigy Help Center: Dialogflow Deployment](https://support.cognigy.com/hc/en-us/articles/360016154040)