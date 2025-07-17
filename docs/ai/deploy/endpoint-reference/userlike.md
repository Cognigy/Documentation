---
title: "Userlike" 
slug: "userlike"
description: "The Userlike Endpoint enables you to connect your AI Agent to the Userlike platform."
hidden: false
tags:
  - userlike
  - userlike endpoint
---

# Userlike

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/userlike.png" width="100%" />
</figure>

The Userlike Endpoint enables you to connect your AI Agent to the [Userlike platform](https://www.8x8.com/).

## Prerequisites

- Access to [Userlike](https://www.userlike.com/).

## Generic Endpoint Settings

Learn about the generic Endpoint settings on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)
- [Transformer Functions](../endpoints/transformers/overview.md)

## Specific Endpoint Settings

??? info "Userlike Settings"
    | **Parameter**  | **Description**                                                                                                     |
    |----------------|---------------------------------------------------------------------------------------------------------------------|
    | API Version    | Select the API version you want to use for the Userlike integration: **Live Chat** or **Unified Messaging**.        |
    | Webhook URL    | If you select **Unified Messaging**, specify the URL that Userlike calls to send events and messages.               |
    | Security Token | If you select **Unified Messaging**, specify the token used to authenticate requests from Userlike to your webhook. |

## How to Set Up

### Setup on the Cognigy.AI Side

??? info "Create a Userlike Endpoint"
    1. In the left-side menu of your Project, click **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:
        1. Select the **Userlike** Endpoint type.
        2. Specify a unique name.
        3. Select a Flow from the list and save changes.
    4. Go to the **Configuration Information** section and copy the URL from the **Endpoint URL** field. Save changes.

### Setup on the Userlike Side

??? info "Create a Chatbot in Userlike"
    1. Log in to the Userlike Dashboard.
    2. From the left-side menu, select **Settings > Chatbots**.
    3. Click **+ Add** to create a new chatbot.
    4. On the **New chatbot** page, configure the following settings:
        - **Name** — enter the chatbot name.
        - **Operator group** — select the group for the chatbot.
        - **Bot behavior mode** — select **Human**.
        - **Bot type** — select **API**.
    5. Save your changes. When the chatbot appears in the **Chatbots** list, go to the **Actions** column, click the three-dot button, then select **Edit**.
    6. In the **Webhook URL** field, paste the Endpoint URL from the Cognigy.AI Userlike Endpoint.
    7. If you selected the **Unified Messaging API** in the Cognigy.AI Userlike Endpoint, copy the following fields:
        - **API URL** — copy and paste this URL into the **Webhook URL** field in the Cognigy.AI Endpoint.
        - **API security token** — copy and paste this token into the **Security Token** field in the Cognigy.AI Endpoint.
    8. Save your changes. Go to **Settings > Channels**. Select **Website**, then click **+ Add widget**. Copy the code from the **Your Userlike Widget** field and click **Configure widget**.
    9. When the widget appears in the **Widgets** list, go to the **Actions** column, click the three-dot button, then select **Edit**.
    10. In the **Messenger URL**, enter the URL where you want to display your widget. Open your website to see the widget and test the workflow.

## More Information

- [Help Center: Userlike Deployment](https://support.cognigy.com/hc/en-us/articles/360016310079)