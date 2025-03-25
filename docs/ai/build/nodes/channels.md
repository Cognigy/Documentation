---
title: "Channels"
slug: "channels"
description: "In Cognigy.AI, channels allow you to use your Flow with multiple Endpoints, ensuring that output messages are correctly reproduced in both chat and voice conversations."
tags:
    - channels
    - output types
    - ssml
    - adaptive cards
    - facebook messenger
    - webchat
    - microsoft teams
    - voice gateway
    - 8x8
    - genesys
    - bandwidth
    - amazon polly
    - twilio
    - twilio sms
    - line
hidden: false
---

# Channels

[![Version badge](https://img.shields.io/badge/Updated in-v4.48-blue.svg)](../../../release-notes/4.48.md)

_Channels_ allow you to use your Flow with multiple Endpoints, ensuring that output messages are correctly reproduced in both chat and voice conversations.

You can use multiple channels simultaneously and customize the AI Agent's messages for different voice and chant platforms. For example, if you deploy an AI Agent on Webchat v3, WhatsApp, and Voice Gateway, you can have 1 Flow with 3 corresponding channels and their corresponding Endpoints. This setup ensures that AI Agents deliver messages in the format supported by each channel.

You can configure channels in the [Say](../node-reference/basic/say.md), [Question](../node-reference/basic/question.md), and [Optional Question](../node-reference/basic/optional-question.md) Nodes. Voice channels support Speech Synthesis Markup Language (SSML), and text-based channels can generate different content type outputs, such as:

- Text
- Image
- Audio
- Video
- Adaptive cards

## Available Channels

??? info "Default AI Channel"
    The default AI channel is a universal channel and its settings correspond to the parameters in the [Say Node](../node-reference/basic/say.md). Use this channel to get more flexibility around different platforms.

??? info "Alexa"
    !!! warning
        - If the user triggers more than one Say Node in a Flow execution with the Alexa channel, the AI Agent concatenates each Say Nodes' SSML or text outputs as one large SSML statement.
        - If the Flow outputs more than one Card, the AI Agent sends only the last one.
        - If the Flow outputs more than one Display configuration, the AI Agent uses only the last one.

    The Alexa channel defines what and how an Amazon Echo-enabled system provides answers.

    | Parameter                       | Description                                                                                                                                                                                                                                                                                                                            |
    |---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Session Lifecycle               | This parameter defines if the AI Agent should end the session after the Node is executed.                                                                                                                                                                                                                                              |
    | Output Speech                   | The content and pronunciation of the output speech. This parameter supports SSML and JSON directives. For more details on JSON directives, read the [Amazon Alexa documentation](https://developer.amazon.com/de/docs/custom-skills/request-and-response-json-reference.html).                                                         |
    | Reprompt                        | The content and pronunciation of the reprompt speech in case the user doesn't respond after a certain time. This parameter supports SSML and JSON directives. For more details on JSON directives, read the [Amazon Alexa documentation](https://developer.amazon.com/de/docs/custom-skills/request-and-response-json-reference.html). |
    | Home Cards                      | A Card that provides additional visual information. You can send Cards if the user has an device with a screen that is connected to the Alexa application.                                                                                                                                                                             |
    | Display Templates for Echo Show | This parameter defines how Amazon Echo Show devices display content.                                                                                                                                                                                                                                                                   |

??? info "Messenger"
    The Messenger channel defines how AI Agents provide answers in Facebook Messenger.

    | Output Type   | Parameters                                                                                                  |
    |---------------|-------------------------------------------------------------------------------------------------------------|
    | Quick Replies | <ul><li>Message</li><li>Title</li><li>Payload</li><li>Image URL</li><li>Condition</li></ul>                 |
    | Buttons       | <ul><li>Button Type</li><li>Title</li><li>Payload</li><li>Condition</li></ul>                               |
    | Gallery       | <ul><li>Title</li><li>Subtitle</li><li>Image URL</li><li>Default action web URL</li><li>Condition</li></ul> |
    | Attachment    | <ul><li>Attachment Type</li><li>URL</li></ul>                                                               |

    For more details on how to configure the parameters, read the [Facebook Messenger documentation](https://developers.facebook.com/docs/messenger-platform/send-messages).

    ??? tip "Using Code Nodes to Output Facebook Markup"
        You can use the [output action in Code Nodes](../node-reference/basic/code/actions.md) to send a JSON object directly to Facebook. To do so, set the following code as the data property:

        ```json
        {
            "_cognigy": {
                "_facebook": {      
                    "message": {
                        // this contains your message to facebook
                    }
                }
            }
        }
        ```

??? info "Webchat"
    The Webchat channel defines how AI Agents provide answers through [Webchat v2](../../../webchat/v2/overview.md).

    ???+ note
        The Webchat channel has similar configuration options to the [Messenger channel](#messenger). Activate the **Use Facebook Messenger channel** toggle to use the same configuration options in both channels.

    | Output Type   | Parameters                                                                                                                                                     |
    |---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Quick Replies | <ul><li>Message</li><li>Title</li><li>Payload</li><li>Image URL</li><li>Condition</li></ul>                                                                    |
    | Buttons       | <ul><li>Button Type</li><li>Title</li><li>Payload</li><li>Condition</li></ul>                                                                                  |
    | Gallery       | <ul><li>Title</li><li>Subtitle</li><li>Image URL</li><li>Default action web URL</li><li>Condition</li></ul>                                                    |
    | Attachment    | <ul><li>Attachment Type</li><li>URL</li></ul>                                                                                                                  |
    | List          | <ul><li>Title</li><li>Subtitle</li><li>Image URL</li><li>Default action web URL</li></ul>                                                                      |
    | Adaptive Card | A `$schema` property for the adaptive card. You can find supported versions in the [Content Conversion](../../deploy/endpoints/content-conversion.md) article. |

??? info "LINE"
    The LINE channel defines how AI Agents provide answers in LINE.

    | Output Type | Description                                                                                                                                          |
    |-------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Text        | A simple text message.                                                                                                                               |
    | Custom JSON | A valid LINE message object. See the [LINE documentation](https://developers.line.me/en/reference/messaging-api/) for further details and templates. |

??? info "Twilio"
    !!! warning "Validate the TwiML"
        Make sure the Twilio Markup Language (TwiML) provided in the Node editor is valid. If the AI Agent sends an invalid TwiML to Twilio, the call immediately fails or doesn't initiate.

        Make sure that the content of the TwiML is escaped XML.

    The Twilio channel defines how AI Agents provide answers in Twilio.

    | Output Type | Description                                                                                                                                                                                          |
    |-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Text        | A simple text message.                                                                                                                                                                               |
    | TwiML       | A valid TwiML. See the [Twilio documentation](https://www.twilio.com/docs/voice/twiml?code-sample=code-say-hello-to-an-inbound-caller&code-language=output-twiml) for further details and templates. |

    **Amazon Polly Voice**

    In the **Twilio Endpoint** settings, you can select the **Amazon Polly** voice. For more information about Amazon Polly features, read the [Twilio documentation](https://www.twilio.com/docs/voice/twiml/say/text-speech#amazon-polly).

??? info "Twilio SMS"
    !!! warning "Validate the TwiML"
        Make sure the Twilio Markup Language (TwiML) provided in the Node editor is valid. If the AI Agent sends an invalid TwiML to Twilio, the call immediately fails or doesn't initiate.

        Make sure that the content of the TwiML is escaped XML.

    The Twilio SMS channel defines how AI Agents provide answers through Twilio SMS.

    | Output Type | Description                                                                                                                            |
    |-------------|----------------------------------------------------------------------------------------------------------------------------------------|
    | Text        | A simple text message.                                                                                                                 |
    | TwiML       | A valid TwiML object. See the [Twilio documentation](https://www.twilio.com/docs/sms/twiml/message) for further details and templates. |

??? info "Microsoft Teams"
    !!! warning "Multiple Flow Outputs"
        If the user triggers more than one Say Node in one Flow execution with the Microsoft Teams channel, the AI Agent:
            - Concatenates each Say Nodes' text or Microsoft Teams text outputs as one message.
            - Uses only the JSON field output of the last Node triggered.

    With the Microsoft Teams channel, you can send either text or adaptive cards. Refer to [Deployment a Microsoft Teams Endpoint](../../deploy/endpoint-reference/azure-bot-services.md) page for information on how to send messages.

    | Output Type   | Description                                                                                                                                                                                                                                                        |
    |---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Text          | A simple text message.                                                                                                                                                                                                                                             |
    | JSON          | A valid JSON in the Bot Framework/Microsoft Teams format. See the [Microsoft documentation](https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-connector-add-rich-cards?view=azure-bot-service-3.0) for further details and templates. |
    | Adaptive Card | A `$schema` property for the adaptive card. You can find supported versions in [Content Conversion](../../deploy/endpoints/content-conversion.md).                                                                                                                 |

??? info "Voice Gateway"

    With the Voice Gateway channel, you can configure the content and pronunciation of the AI Agents voice output.

    You can also configure Voice Gateway settings using Activity Parameters. To do this, activate the **Set Activity Parameters** toggle. You can find a description of the parameter configurations in [Voice Gateway Parameter Details](../node-reference/voice/voice-gateway/parameter-details.md).

??? info "8x8"
    The **8x8** channel defines how AI Agents provide answers in 8x8.

    | Output Type   | Description                                                                                                              |
    |---------------|--------------------------------------------------------------------------------------------------------------------------|
    | Text          | A simple text message.                                                                                                   |
    | Custom JSON   | A valid 8x8 message object.                                                                                              |
    | Adaptive Card | An adaptive card. You can find supported versions in [Content Conversion](../../deploy/endpoints/content-conversion.md). |

    ??? info "Custom JSON example"

        ```json
        {
            "authorType": "customer",
            "text": "Hello!",
            "attachments": [
                {
                    "id": "string"
                }    
            ],
            "cards": [
                {
                    "contentType": "application/vnd.microsoft.card.adaptive",
                    "content": {}
                }
            ]
        }
        ```

??? info "Genesys"
    The **Genesys** channel defines how AI Agents provide answers in Genesys.

    | Output Type   | Description                                                                        |
    |---------------|------------------------------------------------------------------------------------|
    | Text          | A simple text message.                                                             |
    | Custom JSON   | A valid Genesys Cloud message object. Defines more complex messages and templates. |

    ??? info "Custom JSON example"

        ```json
        {
            "replymessages": [],
            "parameters": {
                "command": "handover"
            }
        }
        ```

        This message suggests that the AI Agent working on the Cognigy.AI side has finished its task. Also, the message means that the control is handed over to the logic within the [Genesys architect flow](https://help.mypurecloud.com/articles/use-architect-to-create-a-bot-for-an-inbound-flow/).

??? info "Bandwidth"
    The **Bandwidth** channel defines how AI Agents provide answers in Bandwidth.

    | Output Type | Description                                                                    |
    |-------------|--------------------------------------------------------------------------------|
    | Text        | A simple text message.                                                         |
    | Custom JSON | A valid Bandwidth message object. Defines more complex messages and templates. |


    ??? info "Custom JSON example"

        ```json
        {
            "activities": [
                {
                    "id": "123456789",
                    "timestamp": "1999-12-31T23:59:59.999Z", 
                    "type": "message",
                    "text": "Hello. This is my message."
                }
            ]
        }
        ```

## More Information

- [Say Node](../node-reference/basic/say.md)
- [Question Node](../node-reference/basic/question.md)
- [Optional Question Node](../node-reference/basic/optional-question.md)