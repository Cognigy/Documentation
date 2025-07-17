---
title: "Twilio" 
slug: "twilio"
description: "The Twilio Endpoint enables you to connect your AI Agent to the Twilio platform, which allows you to handle voice calls directly through Twilio."
hidden: false
tags:
  - endpoints
  - twilio endpoint
---

# Twilio

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/twilio.png" width="100%" />
</figure>

The Twilio Endpoint enables you to connect your AI Agent to the [Twilio platform](https://www.twilio.com/), which allows you to handle voice calls directly through Twilio. 

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

## Specific Endpoint Settings

??? info "Twilio Settings"
    | **Parameter**      | **Description**                                                                                                                       |
    |--------------------|---------------------------------------------------------------------------------------------------------------------------------------|
    | STT / TTS Language | The language used by the Speech-to-Text (STT) and Text-to-Speech (TTS) services for messages exchanged between Twilio and Cognigy.AI. |
    | Voice              | The delivery voice for your Twilio voice bot from the list of available Twilio voices.                                                |

## How to Set Up

### Configure on the Cognigy.AI Side

??? info "Create a Twilio Endpoint"
    To create a Twilio Endpoint, follow these steps:
    
    1. Go to **Deploy > Endpoints**. 
    2. On the **Endpoints** page, click **+ New Endpoint**. 
    3. In the **New Endpoint** section, do the following:
        1. Select the **Twilio** Endpoint type.
        2. Specify a unique name.
        3. Select a Flow from the list. Save changes.
    4. In the **Twilio Settings** section, configure the following settings:
         - **STT / TTS Language** — select the language used by the Speech-to-Text (STT) and Text-to-Speech (TTS) services for messages exchanged between Twilio and Cognigy.AI.
         - **Voice** — select the delivery voice for your Twilio voice bot from the list of available Twilio voices.
    5. In the **Configuration Information** section, copy the Endpoint URL and save it for later use. Save changes.

### Configure on the Twilio Side

??? info "Get a Phone Number"
    1. Open the Twilio Console. Go to the Account Dashboard.
    2. In the left sidebar, select the **Develop** tab, then go to **Phone Numbers > Manage > Buy a Number**. Select the country and ensure the number supports voice messages. Activate **Voice**. You can search for area code, for example, 211, which shows numbers available for Düsseldorf, Germany. Select the number and click **Buy**.
    4. Some phone numbers require you to validate that your company operates in the same city or region. This approach is common for German numbers. To validate the number, read the [Twilio documentation](https://help.twilio.com/) and upload proof of your company registration. The validation process can take up to 3 business days. US numbers don't require this validation.
    5. Go to **Active Numbers**. Select the number, then go to **Voice Configuration**. From the **A call comes in** list, select **Webhook**. In the **URL** field, enter the Cognigy.AI Endpoint URL. Click **Save configuration**.

## Additional Configuration

??? info "Trigger Twilio to Initiate a Call"
    In addition to receiving calls from Twilio in Cognigy.AI, you can also trigger Twilio to initiate a call.

    1. Create a [TwiML Bin](https://www.twilio.com/docs/serverless/twiml-bins/getting-started) in Twilio to handle the call. Twilio can host TwiML (Twilio Markup Language) for you. This TwiML tells Twilio what to do after the call connects. Use the following TwiML, replacing `your_endpoint_url` with your valid Cognigy.AI Endpoint URL:

        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <Response>
          <Redirect>your_endpoint_url</Redirect>
        </Response>
        ```

        Copy the URL of the TwiML Bin for later use.

    2. Add an HTTP Request Node to your Cognigy.AI voice Flow. To configure this Node to trigger Twilio to make a call and connect the call back to the Flow, set the following parameters:

        | **Parameter**      | **Description**                                                                                                                                                                                                                      |
        |--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
        | Type               | The HTTP method used to send the request. Enter `POST`.                                                                                                                                                                              |
        | URL                | The URL pattern is `https://api.twilio.com/2010-04-01/Accounts/your_twilio_account_sid/Calls.json`. Replace `your_twilio_account_sid` with your actual Twilio account SID.                                                           |
        | Headers            | The header is `Content-Type: application/x-www-form-urlencoded`. Required to tell Twilio the request format.                                                                                                                         |
        | Payload is JSON    | A flag that controls the payload format. Enter `false`.                                                                                                                                                                              |
        | Payload            | The data sent in the request body. Use: `To=number_to_call&Url=your_twiml_bin_url&From=your_twilio_number`  <br>- `to` – the phone number to call. <br>- `url` – the URL of your TwiML Bin. <br>- `from` – your Twilio phone number. |
        | Authorization Type | Twilio requires basic authentication for API calls. Enter `Basic Auth`.                                                                                                                                                              |
        | Username           | Your Twilio **Account SID**. You can find this on the Account Dashboard.                                                                                                                                                             |
        | Password           | Your Twilio *Auth Token**. You can find this on the Account Dashboard.                                                                                                                                                               |

## More Information

- [Cognigy Help Center: Twilio Intro](https://support.cognigy.com/hc/en-us/articles/360016308619-Twilio-Intro)