---
title: "Sunshine Conversations" 
slug: "sunshine-conversations" 
hidden: false 
---
# Sunshine Conversations

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/sunshine-conversations.png" width="100%" />
</figure>

{! _includes/release-notes/handover-providers-deprecation.md !}

Within our **Cognigy.AI** platform, you're able to connect your Cognigy Agent to your **Sunshine Conversations application** by using our Sunshine Conversations Endpoint.

!!! note "Where is the Smooch Endpoint?"
    This Endpoint was previously known as the Smooch Endpoint. Smooch was acquired by Zendesk in 2019 and renamed to Sunshine Conversations.

## Generic Endpoint Settings

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/transformers.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connectors.md)
- [Session Management](../endpoints/session-management.md)
- [Handover Settings](../endpoints/handover-settings.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)

{! _includes/ai/providers/inject-and-notify.md !}

# Specific Endpoint Settings

The values of the following fields are used to communicate with your Sunshine Conversations app. All values can be retrieved from the Sunshine Conversations platform.

### API Version

Cognigy.AI supports the V1.1 and V2 APIs offered by Sunshine Conversations. The selection in this field must match the API version used to create the webhook integration in the Sunshine conversations app.

### Key ID

The API Key ID from your Sunshine Conversations app. This value is typically in the format `app_XXXXXXXXXXXXXXXXXXXXXXXX` and must be the API Key ID associated with the secret entered the following field.

### Secret

Your Sunshine Conversations app's Key ID SECRET that is a randomly generated API key secret from Sunshine Conversations. The value of this field must be the SECRET associated with the API Key ID entered the previous field.

### URI

The URI where we send messages to your Sunshine Conversations app. For example, `https://app.smooch.io` (ensure the "/" is omitted from the end of the URI)

!!! note "Help Center"
    More detailed information on how to set up a **Sunshine Conversations** Endpoint, refer to our Help Center articles [**here**](https://support.cognigy.com/hc/en-us/articles/360016307699).
## More Information

- [HelpCenter: Sunshine Conversations Deployment](https://support.cognigy.com/hc/en-us/articles/360016307699-Sunshine-Conversations-Deploy-an-Endpoint)
- [HelpCenter: Sunshine Conversations Zendesk Handovers](https://support.cognigy.com/hc/en-us/articles/360016224599-Sunshine-Conversations-Zendesk-Handovers)