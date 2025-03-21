---
title: "Webhook" 
slug: "webhook" 
hidden: false 
---

# Webhook

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/webhook.png" width="100%" />
</figure>

{! _includes/release-notes/handover-providers-deprecation.md !}

In Cognigy.AI, you can easily connect your resources to a Webhook using the Webhook Endpoint integration. This setup ensures quick communication by instantly sending information to a specified callback URL when it's ready. Connecting your Cognigy resources to this Webhook enables fast and smooth interactions, allowing for real-time updates and actions.

If you use [AI Copilot for voice](../../../ai-copilot/voice/voice-overview.md) with the Webhook Endpoint, you can switch to a specific [Voice Copilot](voice-copilot.md) Endpoint. This eliminates the need for a separate Code Node to create a webhook URL, as all the necessary logic is already included in the Voice Copilot Endpoint.

## Generic Endpoint Settings

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/transformers.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connectors.md)
- [Handover Settings](../endpoints/handover-settings.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)

{! _includes/ai/providers/inject-and-notify.md !}

## Connect your Application

You need to run a Webserver that receives POST calls. Enter the **Webhook URL** of your application to which the outputs of the assigned flow get sent to. The **User** and **Password** fields are only used in case you have defined basic authentication for your Webserver.

All **POST** requests that are sent to the **Endpoint URL** are processed by the assigned *Flow* and the triggered outputs are forwarded to the **Webhook URL**. The body of the requests should have the following format:

```JSON
{
  "userId":"userId",
  "sessionId": "someUniqueId",
  "text":"message text",
  "data": {
    "key": "value"
  }
}
```

**Parameters**

- *userId* - a user ID of the user who has access to the REST Endpoint in form of a string
- *sessionId* - a unique ID that is used to track the current conversation in form of a string
- *text* - message text that should get processed by the assigned flow in form of a string
- *data* - message data that should get processed by the assigned flow in form of an object

!!! note "Sending text and data"
    You can use the Webhook Endpoint to send either text or data to your Flow. You can choose to send both, but at least one is required. If invalid text and invalid data is specified, then the Webhook Endpoint throws an error.

!!! note "SessionID"
    The sessionId is a unique identifier that is used to keep the state of a conversation. This means that you should generate a new unique ID whenever a new conversation starts, and not on every message. For testing purposes, you can use whatever string value you like as the sessionId, and change it whenever you want a new conversation to start.