---
title: "Twilio SMS"
slug: "twilio-sms"
description: "The Twilio SMS Endpoint enables you to connect your AI Agent to the Twilio platform to handle SMS and WhatsApp messages. Via this Endpoint, your end users can interact with your AI Agent through text messaging."
hidden: false
tags:
  - twilio sms
  - twilio sms endpoint
---

# Twilio SMS

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/twilio.png" width="100%" />
</figure>

The Twilio SMS Endpoint enables you to connect your AI Agent to the [Twilio platform](https://www.twilio.com/) to handle SMS and WhatsApp messages. Via this Endpoint, your end users can interact with your AI Agent through text messaging.

## Prerequisites

- Access to the [Twilio platform](https://www.twilio.com/).

## Generic Endpoint Settings

Learn about the generic Endpoint settings on the following pages:

- [Endpoints Overview](../endpoints/overview.md)
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Session Management](../endpoints/session-management.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)
- [Transformer Functions](../endpoints/transformers/overview.md)

## How to Set Up

### Configure on the Cognigy.AI Side

??? info "1. Create a Twilio Endpoint"
    To create a Twilio Endpoint, follow these steps:

    1. Go to **Deploy > Endpoints**. 
    2. On the **Endpoints** page, click **+ New Endpoint**. 
    3. In the **New Endpoint** section, do the following:
        1. Select the **Twilio SMS** Endpoint type.
        2. Specify a unique name.
        3. Select a Flow from the list. Save changes.
    4. In the **Configuration Information** section, copy the Endpoint URL and save it for later use.

### Configure on the Twilio Side

??? info "1. Get a Phone Number"
    1. Open the Twilio Console. Go to the Account Dashboard.
    2. In the left sidebar, select the **Develop** tab, then go to **Phone Numbers > Manage > Buy a Number**. Select the country and ensure the number supports SMS. Activate **SMS**. You can search for area code, for example, 211, which shows numbers available for Düsseldorf, Germany. Select the number and click **Buy**.
    3. Some phone numbers require you to validate that your company operates in the same city or region. This approach is common for German numbers. To validate the number, read the [Twilio documentation](https://help.twilio.com/) and upload proof of your company registration. The validation process can take up to 3 business days. US numbers don't require this validation.
    4. Go to **Active Numbers**. Select the number, then go to **Voice Configuration**. From the **A call comes in** list, select **Webhook**. In the **URL** field, enter the Cognigy.AI Endpoint URL. Click **Save configuration**. To test the connection, send an SMS to your Twilio number.

??? info "2. Connect Your Twilio Number to WhatsApp"
    1. Go to **Explore Products > Messaging**. 
    2. Select **WhatsApp**. To connect the Twilio number to WhatsApp, your Twilio account must first be approved by WhatsApp.

## More Information

- [Cognigy Help Center: Twilio Intro](https://support.cognigy.com/hc/en-us/articles/360016308619-Twilio-Intro)