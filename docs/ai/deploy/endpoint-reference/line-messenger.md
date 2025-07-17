---
title: "LINE" 
slug: "line"
description: "Connect your AI Agent to the LINE platform using the LINE Endpoint."
hidden: false
tags:
  - line messenger
  - line messenger endpoint
---

# LINE

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/line.png" width="100%" />
</figure>

{! _includes/release-notes/handover-providers-deprecation.md !}

The LINE Endpoint enables you to connect your AI Agent to the [LINE platform](https://www.line.me/).

## Prerequisites

- Access to [LINE Developer Console](https://developers.line.biz/console/).

## Restrictions

- The LINE Messaging API requires you to follow rules that might block some messages. Check your Node settings with the [Line Messaging API requirements](https://support.cognigy.com/hc/en-us/articles/5721825020444) to ensure all messages are delivered.

## Generic Endpoint Settings

Learn about the generic Endpoint settings on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Session Management](../endpoints/session-management.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md) 
- [Transformer Functions](../endpoints/transformers/overview.md)
- [Handover Settings](../endpoints/handover-settings.md)
- [Inject and Notify](../endpoints/inject-and-notify.md)

## Specific Endpoint Settings

??? info "LINE Setup"
    | **Parameter**        | **Description**                                                                                                                   |
    |----------------------|-----------------------------------------------------------------------------------------------------------------------------------|
    | Channel Access Token | The token obtained from your Line Developer account for each deployed channel. It is linked to the Channel Secret.                |
    | Channel Secret       | The secret associated with the Channel Access Token and also obtained from your Line Developer account for each deployed channel. |

## How to Set Up

??? info "1. Create a LINE Messaging API Channel"
    1. Log in to the [LINE Developers Console](https://developers.line.biz/console/).
    2. Create a new provider (if needed).
    3. Create a new **Messaging API** channel under that provider.
    4. Copy the values from the **Channel Secret** and **Channel Access Token** fields for later use.

??? info "2. Create a LINE Endpoint"
    1. In the left-side menu of your Project, click **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:   
        1. Select the **Line** Endpoint type.
        2. Specify a unique name.
        3. Select a Flow from the list. Save changes.
    4. Go to the **Configuration Information** section and copy the URL from the **Endpoint URL** field.

??? info "3. Configure the Webhook in LINE"
    1. Go back to the LINE Developers Console.
    2. Open your Messaging API channel settings.
    3. Find the **Webhook URL** field and paste the Cognigy.AI Endpoint URL you copied.
    4. Enable the webhook by toggling the **Use webhook** switch. Test the webhook.

??? info "4. Complete the Endpoint Configuration"
    1. In the Cognigy.AI interface, open the LINE Endpoint configuration.
    2. Fill in the **Channel Secret** and **Channel Access Token** fields. Save changes.

## More Information 

- [Cognigy Help Center: LINE Messenger Deployment](https://support.cognigy.com/hc/en-us/articles/360016222819)