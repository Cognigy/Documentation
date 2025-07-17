---
title: "Sunshine Conversations" 
slug: "sunshine-conversations"
description: "The Sunshine Conversations Endpoint enables you to connect your Cognigy AI Agent to the Zendesk messaging platform."
hidden: false
tags:
  - sunshine conversations
  - sunshine conversations endpoint
---

# Sunshine Conversations

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/sunshine-conversations.png" width="100%" />
</figure>

{! _includes/release-notes/handover-providers-deprecation.md !}

The Sunshine Conversations Endpoint enables you to connect your AI Agent to the [Zendesk's Sunshine Conversations messaging platform](https://app.smooch.io/).

## Generic Endpoint Settings

Learn about the generic Endpoint settings on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)
- [Session Management](../endpoints/session-management.md)
- [Transformer Functions](../endpoints/transformers/overview.md)
- [Handover Settings](../endpoints/handover-settings.md)
- [Inject and Notify](../endpoints/inject-and-notify.md)

## Specific Endpoint Settings

??? info "Sunshine Conversations Setup"
    | Parameter   | Description                                                                                                                                                                                                                       |
    |-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | API Version | The Sunshine Conversations API version Cognigy.AI uses to communicate with your app. Cognigy.AI supports version 1.1 and version 2. The version must match the one used to create the webhook in your Sunshine Conversations app. |
    | Key ID      | The API key ID from your Sunshine Conversations app. The format is `app_XXXXXXXXXXXXXXXXXXXXXXXX`. The key ID is paired with the secret you provide.                                                                              |
    | Secret      | The API secret generated for your Sunshine Conversations app. This secret must match the key ID you entered earlier.                                                                                                              |
    | URI         | The base URL for your Sunshine Conversations app. For example, `https://app.smooch.io`. Don't include a trailing slash (`/`).                                                                                                     |

## How to Set Up

??? info "1. Create a Sunshine Conversations Endpoint"
    1. In the left-side menu of your Project, click **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:
        1. Select the **Sunshine Conversations** Endpoint type.
        2. Specify a unique name.
        3. Select a Flow from the list.
    4. In the **Configuration Information** section, copy the URL from the **Endpoint URL** field.

??? info "2. Create a Sunshine Conversations App"
    1. Go to the [Sunshine Conversations Dashboard](https://app.smooch.io/) and log in with your Zendesk account.
    2. If you don’t have a workspace yet, create one first. Otherwise, select your existing workspace. 
    3. Click **Create App**. Enter the name and description for your app. Click **Create**.
    4. Go to the **Channels** or **Integrations** tab. Add the messaging channels you want, for example, WhatsApp, Facebook Messenger, Slack. Follow the Sunshine Conversations instructions for each integration.
    5. Open the **Settings** tab of your app. Go to **API Keys** and click **+ Create new secret key**.
    6. Copy the **Key ID** and **Secret** for later use in the Cognigy.AI Endpoint. Save Changes.

??? info "3. Complete the Endpoint Configuration"
    1. In the Cognigy.AI interface, open the Sunshine Conversations Endpoint you created.
    2. In the **Sunshine Conversations Setup** section, fill in the required fields:
        - **API Version** - select either v1.1 or v2, matching your Sunshine Conversations app.
        - **Key ID** - paste the key ID you copied from Sunshine Conversations.
        - **Secret** - paste the secret you copied.
        - **URI** - use your app's base URI, for example, `https://app.smooch.io` (omit the trailing `/`).
    3. Save changes.

??? info "4. Add a Webhook in Sunshine Conversations"
    1. In your Sunshine Conversations app, go to **Settings > Integrations > Webhooks**.
    2. Click **Add Webhook**.
    3. Paste the Cognigy.AI Endpoint URL you copied earlier into the **URL** field.
    4. For **Triggers**, select at least the following options:
        - `AppUser messages`
        - `Postbacks`
    5. Ensure the **API Version** matches your Cognigy.AI Endpoint version (v1.1 or v2). Save the webhook.
 
## More Information

- [Cognigy Help Center: Sunshine Conversations Deployment](https://support.cognigy.com/hc/en-us/articles/360016307699-Sunshine-Conversations-Deploy-an-Endpoint)
- [Cognigy Help Center: Sunshine Conversations Zendesk Handovers](https://support.cognigy.com/hc/en-us/articles/360016224599-Sunshine-Conversations-Zendesk-Handovers)