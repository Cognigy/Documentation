---
title: "Channels"
slug: "channels"
description: "Channels are components through which users can interact with the AI Agent."
hidden: false
---

# Channels

_Channels_ are components through which users can interact with the AI Agent. Each channel is associated with one or more Cognigy.AI [Endpoints](../../deploy/endpoints/overview.md), allowing users to communicate with the AI Agent through various interfaces. Cognigy.AI channels include Webchat, Facebook Messenger, Slack, WhatsApp, and other text-based and voice platforms.

By default, the AI Channel is activated in the [Say](../node-reference/basic/say.md), [Question](../node-reference/basic/question.md), and [Optional Question](../node-reference/basic/optional-question.md) Nodes.
Channels can be configured only in these Nodes as they provide different content type outputs,
such as texts with images, audio and video, adaptive cards.

Within these Nodes, you can use multiple channels simultaneously.
This allows you
to customize the AI Agent's messages for different platforms
without needing to create a separate Agent for each platform.

For example, if you deploy an AI Agent on Webchat v3, WhatsApp, and Voice Gateway,
you might have one flow with three channels — Webchat, WhatsApp, and Voice Gateway — and their corresponding Endpoints.
This setup ensures that AI Agent messages are delivered in the format supported by each channel.

## List of Channels

### Alexa

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/alexa.jpg" width="100%" />
</figure>

Defines what an Amazon Echo enabled system will say as an answer.

#### SSML Editor

In addition to regular text output, Alexa supports SSML, which enables the admin to define the way the output is pronounced.

!!! warning "Multiple voice outputs"
    If more than one Say Node is hit in one Flow execution using the Alexa Channel, each Say Nodes' SSML (or text) outputs will be concatenated and sent as one large SSML statement.

!!! note "CognigyScript in SSML"
    You can also use CognigyScript expressions within SSML parameters.

#### Home Cards

!!! warning "Multiple Cards"
    If more than one Card is being output during one Flow execution, only the last one will be sent.

Defines an optional additional Card that is available to the user through a connected Alexa app. They can be used to provide additional information that is not perceptible without a screen.

The following Card Templates are available:

- Text
- Text & Image
- Link Account

#### Display Templates for Echo Show

If more than one Display configuration is being output during one Flow execution, only the last one will be sent.

Defines content that will be shown on Amazon Echo Show devices.

The following Display Templates are available:

* Full-width Text
* Text & Image right
* Text & Image left
* Image & Text overlay
* Vertical List
* Horizontal List

#### Custom JSON Directives

Instead of going with the WYSIWYG approach, you may also define a directive manually using a CognigyScript-enabled JSON field.

For further details see the [Amazon Alexa Documentation](https://developer.amazon.com/de/docs/custom-skills/request-and-response-json-reference.html).

### Messenger

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/messenger.jpg" width="100%" />
    <div style="text-align: center;"><a href="https://developers.facebook.com/docs/messenger-platform/reference/send-api" target="_blank">Link: Messenger Send API</a></div>
</figure>

Defines Templates that can be displayed in a special way in the Facebook Messenger Channel.

The following Facebook (Meta) Messenger Templates are available:

- Text & Quick Replies
- Buttons
- Gallery
- Attachment
- List

!!! tip "Output any Facebook JSON"
    Instead of using the UI functions provided by Cognigy, you can also output arbitrary JSON by selecting **Custom JSON** as the Type. This lets you see the JSON you compiled through Cognigy and modify it or add to it.

!!! tip "Using Code Nodes to output Facebook Markup"
    You can use the output action in Code Nodes to send JSON directly to Facebook. To do that, set the following code as the data property:

    ```JSON
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

!!! danger "Location Button Deprecation"
    The Quick Reply Button "Location" to send a user location has been deprecated by Facebook Messenger and is no longer available. Remove it if you have it in an older Flow, as Facebook Messenger will reject the full message if there is still a location quick reply defined.

## Webchat

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/webchat.jpg" width="100%" />
</figure>

The Webchat Channel features the configuration options of our Facebook (Meta) integration.

As the output format is the same, you can configure the Webchat Channel to use your output from the Facebook tab or manually override it for Webchat-specific customization.

The Webchat will render HTML markup for outputs from the DEFAULT tab's text as well as the text field from the Webchat tab's "Text + Quick Replies" template.

## LINE

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/line.jpg" width="100%" />
  <div style="text-align: center;"><a href="https://developers.line.me/en/docs/messaging-api/" target="_blank">Link: LINE Message API</a></div>
</figure>

The **LINE** tab provides two methods for creating and editing a message, which is only for the **LINE** channel:

- **Text** for sending text message responses
- **Custom JSON** for defining more complex messages and templates

| Type        | Description                                                                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Text        | A simple text message.                                                                                                                                           |
| Custom JSON | Can contain a valid LINE message object. See the [Line Documentation](https://developers.line.me/en/reference/messaging-api/) for further details and templates. |

### Twilio

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/6404b3e-twilio.jpg" width="100%" />
  <div style="text-align: center;"><a href="https://www.twilio.com/docs/voice/twiml" target="_blank">Link: Twilio Documentation</a></div>
</figure>

| Type  | Description                                                                                                                                                                                                    |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Text  | A simple text message.                                                                                                                                                                                         |
| TwiML | Can contain valid TwiML. See the [Twilio Documentation](https://www.twilio.com/docs/voice/twiml?code-sample=code-say-hello-to-an-inbound-caller&code-language=output-twiml) for further details and templates. |

!!! warning "Validate your TwiML"
    Make sure the TwiML provided in the editor is valid. If the TwiML sent to Twilio is invalid, the call will immediately fail or not be able to initiate.

    You will also have to make sure that the content of your TwiML is escaped XML.

#### Amazon Polly Voice

In the endpoint editor of your **Twilio Endpoint** you can select the **Amazon Polly** voice.
It has some features listed in the [Twilio documentation](https://www.twilio.com/docs/voice/twiml/say/text-speech#amazon-polly).

### Twilio SMS


<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/twiliosms.jpg" width="100%" />
  <div style="text-align: center;"><a href="https://www.twilio.com/docs/sms/twiml/message" target="_blank">Link: Twilio SMS Documentation</a></div>
</figure>

| Type  | Description                                                                                                                               |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Text  | A simple text message.                                                                                                                    |
| TwiML | Can contain valid TwiML. See the [Twilio Documentation](https://www.twilio.com/docs/sms/twiml/message) for further details and templates. |

!!! warning "Validate your TwiML"
    Make sure the TwiML provided in the editor is valid. If the TwiML sent to Twilio is invalid, the call will immediately fail or not be able to initiate.

    You will also have to make sure that the content of your TwiML is escaped XML.

### Microsoft Teams

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/teams.jpg" width="100%" />
</figure>

!!! note "Teams Cards"
    Structured content in Microsoft Teams is sent as so-called Cards. Refer to [Deployment a Microsoft Teams Endpoint](../../deploy/endpoint-reference/azure-bot-services.md) page for information on how to send messages.
    <!-- need to change the link above  -->

<div style="text-align: center; padding: 0px;"><a href="https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-connector-add-rich-cards?view=azure-bot-service-3.0" target="_blank">Link: Microsoft Teams Documentation</a></div>

| Type | Description                                                                                                                                                                                                                                                                    |
|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Text | A simple text message.                                                                                                                                                                                                                                                         |
| JSON | Can contain valid JSON in the Bot Framework / Microsoft Teams format. See the [Microsoft Documentation](https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-connector-add-rich-cards?view=azure-bot-service-3.0) for further details and templates. |

!!! warning "Multiple Flow Outputs"
    If more than one Say Node is hit in one Flow execution using the Microsoft Teams Channel, each Say Nodes' Default Text or Microsoft Teams Text outputs will be concatenated and sent as one message. However, if one or more of the Say Nodes contain Microsoft Teams JSON, then the last node containing this JSON will be sent.

### Voice Gateway

[![Version badge](https://img.shields.io/badge/Updated in-v4.48-blue.svg)](../../../release-notes/4.48.md)

To activate a Voice Gateway channel:

1. Go to the **Edit Node** page and click **+**.
2. From the list, select **Voice Gateway**.
3. In the **Text** field, add SSML markup to adjust the AI Agent's output speech.

Starting from Cognigy 4.48, you can configure Voice Gateway settings using Activity Parameters. To do this, turn on the Set Activity Parameters toggle. You can find a description of the parameter configurations in [Voice Gateway Parameter Details](../node-reference/voice/voice-gateway/parameter-details.md).
These configurations are also available in the following Nodes:

- [Question](../node-reference/basic/question.md)
- [Optional Question](../node-reference/basic/optional-question.md)
- [Set Session Config](../node-reference/voice/voice-gateway/set-session-config.md)
- [Play](../node-reference/voice/voice-gateway/play.md)
- [Session Speech Parameters Config](../node-reference/voice/generic/session-speech-parameters-config.md)

### 8x8

The **8x8** tab provides three methods for creating and editing messages within the 8x8 channel.

| Type          | Description                                                                                                                          |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------|
| Text          | A simple text message.                                                                                                               |
| Custom JSON   | Can contain a valid 8x8 message object.                                                                                              |
| Adaptive Card | Can contain an adaptive card. You can find supported versions in [Content Conversion](../../deploy/endpoints/content-conversion.md). |

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

### Genesys

The **Genesys** tab provides two methods to create and edit messages that are specific to the **Genesys** channel.

| Type        | Description                                                                                    |
|-------------|------------------------------------------------------------------------------------------------|
| Text        | A simple text message.                                                                         |
| Custom JSON | Can contain a valid Genesys Cloud message object. Defines more complex messages and templates. |

??? info "Custom JSON example"

    ```json
    {
      "replymessages": [],
      "parameters": {
        "command": "handover"
      }
    }
    ```
    
    This message suggests that the AI Agent working on the Cognigy.AI side has finished its task. It also means that control is handed over to the logic within the [Genesys architect flow](https://help.mypurecloud.com/articles/use-architect-to-create-a-bot-for-an-inbound-flow/).

### Bandwidth

The **Bandwidth** tab provides two methods to create and edit messages that are specific to the **Bandwidth** channel.

| Type        | Description                                                                                 |
|-------------|---------------------------------------------------------------------------------------------|
| Text        | A simple text message.                                                                      |
| Custom JSON | Can contain a valid Bandwidth message object.  Defines more complex messages and templates. |


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