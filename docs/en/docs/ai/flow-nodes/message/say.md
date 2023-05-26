---
 title: "Say" 
 slug: "say" 
 hidden: false 
---
# Say
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/6746960-node-say.jpg" width="100%" />
</figure>

## Description
<div class="divider"></div>
A Say Node is used to send a message to the user.

Depending on the current Channel, additional rich media formats are available. Add a new channel output by clicking the **"+"** icon and selecting the channel that corresponds to the channel endpoint that will be deployed.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ea04ba5-channels.jpg" width="80%" />
  <figcaption>The say node menu with all channel output types enabled.</figcaption>
</figure>

If there is a Channel-specific configuration for the current Channel, this configuration will be used *instead* of the one on the default section.

## AI (default channel) 
<div class="divider"></div>
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/894062b-1AI.jpg" width="100%" />
</figure>


!!! tip "Automatic Conversion to Channel Specific Output"
    In case rich media is configured in the default AI tab, the platform will attempt to automatically convert the output to the channel's equivalent. Check the specific Output Type above to verify channel support.

!!! warning "Fallback Text"
    In case the automatic conversion to channel specific output cannot take place, the Fallback Text will be triggered.

## Output Types
<div class="divider"></div>

The AI Channel allows for the configuration of different **Output Types**. Not all [endpoints](../../endpoints/overview.md) can correctly convert your content to the desired output type. Before configuration, [check the compatibility](../../endpoints/content-conversion.md) of the output type with the endpoint.

### Text
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/6746960-node-say.jpg" width="100%" />
</figure>

The **Text** Output Type renders text and emojis (if supported by the channel). The text field also supports [CognigyScript]({{config.site_url}}/ai/tools/cognigy-script/) and [Tokens]({{config.site_url}}/ai/resources/manage/tokens/) that can be added by clicking the **AI** button at the end of each field.

!!! tip "Channel Support"
    The **Text** Output Type is currently converted to compatible output on all channels. Keep in mind that **emojis** may not render properly on all channels.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9f49b00-OutputTypeText.jpg" width="100%" />
</figure>

Multiple text messages can be added for conversational variation. When multiple text messages are configured, the delivery order is controlled by the *linear* and *loop* settings available in the ***options*** dropdown menu.

!!! warning "Using Multiple Text Outputs"
    By configuring multiple messages in a text say node, only one message will be delivered per activation of the node. An additional say node must be configured in order to send two text messages at once.

#### Text Options
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/37689d0-SayOptions.jpg" width="100%" />
</figure>

When sending simple text output, Cognigy.AI dialog nodes provide options for configuring the behavior of output and attaching data to the message. The configuration options and their functions are listed below:

| Parameter | Type   | Description                                                                                                                                                     |
|-----------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Linear    | toggle | Iterates through the text options linearly instead of randomly.                                                                                                 |
| Loop      | toggle | If `linear` is set, the order restarts at the first text response after reaching the end. Otherwise the last text option will be repeatedly used, once reached. |
| Data      | JSON   | The data you want to send to the client                                                                                                                         |

!!! note "Linear and Loop"
    There are three different combinations of applying the Linear and Loop toggles, each providing a different behavior style for the order in which messages are delivered on future activation of the same node. The three combinations are:

    * Random (for example, 4, 2, 5, 4, 4, 2, 5, 1, ...)
    * Linear + non-looping (for example, 1, 2, 3, 4, 5, 5, 5, 5...)
    * Linear + looping (for example, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5...)
### Text with Quick Replies
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/5f55583-say-node-qr.jpg" width="100%" />
</figure>

Text with Quick Replies can be used to show the user a number of configurable Quick Replies. Quick Replies are pre-defined answers that are rendered as input chips.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/01d80fd-Say_Node_quick_replies_2.jpg" width="50%" />
</figure>

The click action can be configured to be **Phone Number** or **Send Postback**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/3dbf220-select_button_type.jpg" width="50%" />
</figure>

#### Postback Value
When a **Postback Value** is configured and the **Quick Reply** is clicked, the Postback Value will be sent to the start of the Flow. This simulates user input - it is "as if" the user would have manually typed something. This is the most typical behavior for Quick Replies.

#### Phone Number
When this option is configured, clicking the Quick Reply will try to open the phone application on the device.

#### Trigger Intent
The Trigger Intent feature allows you to manually trigger an Intent by writing cIntent:, followed by the desired intent name in your text input, the regular Intent mapping will be ignored.
More information see [Trigger Intent]({{config.site_url}}ai/nlu/nlu-overview/trigger-intent/)

!!! warning "Channel Support"
    The **Text with Quick Replies** Output Type is currently converted to compatible output on all the following channels: **Webchat**, **Messenger**, **Google Actions**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack** and **RingCentral Engage**.
### Gallery

Galleries are powerful visual widgets that are ideal for showing a list of options with images. They are typically used to show a number of products or other items that can be browsed.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/243f107-Say_order_taxi_2.PNG" width="100%" />
</figure>

A gallery can be configured with a number of cards. A card contains an image, a title and a subtitle and can be configured with (optional) buttons.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/cd2a3a1-SAY_gallery_cards_1.PNG" width="75%" />
</figure>

!!! warning "Channel Support"
    The **Gallery** Output Type is currently converted to compatible output on all the following channels: **Webchat**, **Messenger**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack** and **RingCentral Engage**.
### Text with Buttons
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c7c32f9-say-buttons.jpg" width="100%" />
</figure>

**Text with Buttons** is a similar **Output Type** to **Text with Quick Replies**. The difference comes from the way the widget is rendered, which resembles a vertical list of button options. It can be configured in a similar fashion.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/6554383-textbuttons.PNG" width="75%" />
</figure>

!!! warning "Channel Support"
    The **Text with Buttons** Output Type is currently converted to compatible output on all the following channels: **Webchat**, **Messenger**, **Google Actions**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack** and **RingCentral Engage**.
### List
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/1c5a0c7-list1.PNG" width="100%" />
</figure>

**List** output allows a customized list of items to be displayed with many configuration options such as the header image, buttons, images and more. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/782c02f-list2.PNG" width="100%" />
</figure>

The first list item can optionally be converted to a header item that houses the list title, subtitle and button. Each additional list item can have a title, subtitle, image and button added. The list can also have a button added at the bottom.

!!! warning "Channel Support"
    The **List** Output Type is currently converted to compatible output on all the following channels: **Webchat**, **Azure Bot Services**, **RingCentral Engage**, **UserLike** and **Line**.
### Audio
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/7c58ec2-node-audio.jpg" width="100%" />
</figure>

The **Audio Output Type** can render audio output in case this is supported by the channel. It can be configured, by providing it with a URL to an audio file.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/86d62bf-audio.jpg" width="100%" />
</figure>

!!! warning "Channel Support"
    The **Audio** Output Type is currently converted to compatible output on all the following channels: **Webchat**, **Messenger**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack**.
### Image
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/506f002-Say_image.svg" width="100%" />
</figure>

Image Output Types display an image in a similar fashion to the gallery. The image output, however, only outputs one particular image.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c8fd6f9-Output_Type_image.svg" width="100%" />
</figure>

!!! warning "Channel Support"
    The **Image** Output Type is currently converted to compatible output on all the following channels: **Webchat**, **Messenger**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack**.
### Video
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/f8b5cdf-Say_video.svg" width="100%" />
</figure>

The Video Output Type allows you to configure a video output. It takes a URL as an input parameter and will start playing the video automatically if this is supported by the channel.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/f71165b-Output_Type_video.svg" width="100%" />
</figure>

!!! warning "Channel Support"
    The **Video** Output Type is currently converted to compatible output on all the following channels: **Webchat**, **Messenger**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack**.
    
    **PLEASE NOTE**: the **Messenger** channel requires videos to be of the MP4 type (for example, Youtube links might not work).

!!! note "CognigyScript"
    Any text field in the say node supports the use of **CognigyScript**. 
    
    For detailed instructions, read the Chapter on [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/).

### Adaptive Card

[![Version badge](https://img.shields.io/badge/Added in-v4.44-blue.svg)](../../../release-notes/4.44.md)

The Adaptive Card Type allows you to configure an adaptive card output. Adaptive Cards offer customization options, support for rich media (images, video, and audio), ease of use with a simple JSON schema, and the ability to create dynamic content for users to match their specific needs and branding. 

To create an adaptive card, use the [Adaptive Card Designer](https://adaptivecards.io/designer). Customize the existing JSON, then copy and paste it into the code editor. If JSON is correct, you will see the adaptive card rendered under the code editor.

!!! warning
    Cognigy supports the limited number of versions for Adaptive Card, so using the latest versions may cause issues. We recommend using [supported versions](../../endpoints/content-conversion.md) for better compatibility.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/say/adaptive-card-output-type.png" width="80%" />
</figure>

??? info "Adaptive Card JSON example"

      ```json    
      {
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "type": "AdaptiveCard",
        "version": "1.0",
        "body": [
          {
            "type": "TextBlock",
            "size": "Medium",
            "weight": "Bolder",
            "text": "Publish Adaptive Card Schema"
          },
          {
            "type": "ColumnSet",
            "columns": [
              {
                "type": "Column",
                "items": [
                  {
                    "type": "Image",
                    "style": "Person",
                    "url": "https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg",
                    "size": "Small"
                  }
                ],
                "width": "auto"
              },
              {
                "type": "Column",
                "items": [
                  {
                    "type": "TextBlock",
                    "weight": "Bolder",
                    "text": "Matt Hidinger",
                    "wrap": true
                  },
                  {
                    "type": "TextBlock",
                    "spacing": "None",
                    "text": "Created Tue, Feb 14, 2017",
                    "isSubtle": true,
                    "wrap": true
                  }
                ],
                "width": "stretch"
              }
            ]
          },
          {
            "type": "TextBlock",
            "text": "Publish Adaptive Card Schema easily.",
            "wrap": true
          },
          {
            "type": "Action.OpenUrl",
            "title": "View",
            "url": "https://adaptivecards.io"
          }
        ]
      }
      ```

## Alexa
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/1ebe307-alexa.jpg" width="100%" />
</figure>

Defines what an Amazon Echo enabled system will say as an answer. 

### SSML Editor

In addition to regular text output, Alexa supports SSML which enables the admin to define the way the output is pronounced.

!!! warning "Multiple voice outputs"
    If more than one Say Node is hit in one Flow execution using the Alexa Channel, each Say Nodes' SSML (or text) outputs will be concatenated and sent as one large SSML statement.

!!! note "CognigyScript in SSML"
    You can also use CognigyScript expressions within SSML parameters.
### Home Cards

!!! warning "Multiple Cards"
    If more than one Card is being output during one Flow execution, only the last one will be sent.

Defines an optional additional Card that is available to the user through a connected Alexa app. They can be used to provide additional information that is not perceptible without a screen.

The following Card Templates are available:

- Text
- Text & Image
- Link Account
### Display Templates for Echo Show

If more than one Display configuration is being output during one Flow execution, only the last one will be sent.

Defines content that will be shown on Amazon Echo Show devices.

The following Display Templates are available:

* Full-width Text
* Text & Image right
* Text & Image left
* Image & Text overlay
* Vertical List
* Horizontal List

### Custom JSON Directives

Instead of going with the WYSIWYG approach, you may also define a directive manually using a CognigyScript-enabled JSON field.

For further details see the [Amazon Alexa Documentation](https://developer.amazon.com/de/docs/custom-skills/request-and-response-json-reference.html).
## Messenger
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/16b8fc7-messenger.jpg" width="100%" />
    <div style="text-align: center;"><a href="https://developers.facebook.com/docs/messenger-platform/reference/send-api" target="_blank">Link: Messenger Send API</a></div>
</figure>

Defines Templates that can be displayed in a special way in the Facebook Messenger Channel.

The following Facebook Messenger Templates are available:

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

    See more under [Code Nodes]({{config.site_url}}ai/flow-nodes/code/code/)

!!! danger "Location Button Deprecation"
    The Quick Reply Button "Location" to send a users location has been deprecated by Facebook Messenger and is no longer available. Remove it if you have it in an older Flow, as Facebook Messenger will reject the full message if there is still a location quick reply defined.
## Google
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/0155b74-actions.jpg" width="100%" />
    <div style="text-align: center;"><a href="https://developers.google.com/actions/assistant/responses" target="_blank">Link: Google Actions documentation</a></div>
</figure>

If you want to output a card, list, ssml or any other advanced options on the Google Assistant, then you can use the **Google Actions** tab.

### **Keep Session Open**

This toggle defines whether the session should be kept open or whether it should end after this output. This should be turned off when you wish to end the conversations and turned on otherwise

!!! warning "Multiple Keep Session Open Values"
    If more than one Say Node is hit during Flow Execution, then the Keep Session Open value of the last output is used
### SSML editor

With our **Google Actions SSML Editor** you're able to build your Google Assistant output speech by either entering SSML markup or by using our SSML markup templates (see figure below).

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/f0aa08b-ssml.jpg" width="100%" />
  <figcaption>SSML Markup Templates</figcaption>
</figure>

!!! warning "Multiple Voice Outputs"
    If more than one Say Node is hit in one Flow execution using the Google Channel, each Say Nodes' SSML (or text) outputs will be concatenated and sent as one large SSML statement.

!!! note "Simple Response Text"
    Instead of writing SSML in the SSML editor, you can also enter your text in the default tab. As long as there is no content in the Google Actions SSML editor, the text from the default tab text field will be used.

For further details see the [Google Actions Documentation](https://developers.google.com/actions/reference/ssml)

### Display - Rich Response

<table>
  <tr>
    <th>Type</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Basic Card</td>
    <td style="padding: 20px;">
      Displays information that can include a title, subtitle, a description, an image and a button
      </br>
      <h4>Limitations</h4>
      <ul>
        <li>Requires Additional Text Output (for example, Output Speech) </li>
        <li>Description: 10 lines with an image, 15 lines without an image</li>
      </ul>   
    </td>
  </tr>
  <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Media Response</td>
    <td style="padding: 20px;">
      Plays audio content
      </br>
      <h4>Limitations:</h4>
      <ul>
        <li>Requires Additional Text Output (for example, Output Speech) </li>
        <li>Must include Suggestion Chips if the session is kept open</li>
        <li>Only supports .mp3 format</li>
        <li>Media file URL has to support HTTPS</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Browsing Carousel</td>
    <td style="padding: 20px;">
      A Carousel that displays web content
      </br>
      <h4>Limitations:</h4>
      <ul>
        <li>Requires Additional Text Output (for example, Output Speech) </li>
        <li>Min. 2 tiles</li>
        <li>Max. 10 tiles</li>
        <li>Tiles must link to a web content</li>
        <li>All Tiles must have the same components</li>
      </ul>
    </td>
  </tr>
</table>

!!! warning "Multiple Rich Responses"
    If more than one Rich Response is being output during one Flow execution, only the last one will be sent.

For details and requirements see the [Google Actions Documentation](https://developers.google.com/assistant/conversational/df-asdk/rich-responses)
### Display - Suggestions

A suggestion/chip is used to point the conversation to a defined direction.

!!! warning "Multiple Suggestions"
    If more than one output contains Suggestions during one Flow execution, only the last one will be sent.
#### Limitations
- you can add a **maximum of 8 chips** to a response
- a suggestion/chip can contain text with a **maximum length of 20 characters**
### Custom Google Action Response JSON

Within the **custom JSON** field you are able to define complex responses. Read the [Google Actions](https://developers.google.com/actions/reference/rest/Shared.Types/AppResponse) documentation for further details.
## Webchat
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/26ca2e8-webchat.jpg" width="100%" />
</figure>

The Webchat Channel features the configuration options of our Facebook integration.

As the output format is the same, you can configure the Webchat Channel to use your output from the Facebook tab or manually override it for Webchat-specific customization.

The Webchat will render HTML markup for outputs from the DEFAULT tab's text as well as the text field from the Webchat tab's "Text + Quick Replies" template.
## LINE
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/8313bb3-line.jpg" width="100%" />
  <div style="text-align: center;"><a href="https://developers.line.me/en/docs/messaging-api/" target="_blank">Link: LINE Message API</a></div>
</figure>

The **LINE** tab provides two methods for creating and editing a message which is only for the **LINE** channel:

- **Text** for sending text message responses
- **Custom JSON** for defining more complex messages and templates

| Type        | Description                                                                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Text        | A simple text message.                                                                                                                                           |
| Custom JSON | Can contain a valid LINE message object. See the [Line Documentation](https://developers.line.me/en/reference/messaging-api/) for further details and templates. |

## Twilio
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/6404b3e-twilio.jpg" width="100%" />
  <div style="text-align: center;"><a href="https://www.twilio.com/docs/voice/twiml" target="_blank">Link: Twilio Documentation</a></div>
</figure>

| Type  | Description                                                                                                                                                                                                    |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Text  | A simple text message.                                                                                                                                                                                         |
| TwiML | Can contain valid TwiML. See the [Twilio Documentation](https://www.twilio.com/docs/voice/twiml?code-sample=code-say-hello-to-an-inbound-caller&code-language=output-twiml) for further details and templates. |

!!! warning "Validate your TwiML"
    Ensure that the TwiML you enter the editor is valid. If the TwiML sent to Twilio is invalid, the call will immediately fail or not be able to initiate.

    You will also have to make sure that the content of your TwiML is escaped XML.
### Amazon Polly Voice
---
In the endpoint editor of your **Twilio Endpoint** you can select the **Amazon Polly** voice. *Polly* has some features which are listed in Twilio documentation, see:

[:link: Twilio Amazon Polly](https://www.twilio.com/docs/voice/twiml/say/text-speech#amazon-polly)

## Twilio SMS
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9819b1c-twiliosms.jpg" width="100%" />
  <div style="text-align: center;"><a href="https://www.twilio.com/docs/sms/twiml/message" target="_blank">Link: Twilio SMS Documentation</a></div>
</figure>

| Type  | Description                                                                                                                               |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Text  | A simple text message.                                                                                                                    |
| TwiML | Can contain valid TwiML. See the [Twilio Documentation](https://www.twilio.com/docs/sms/twiml/message) for further details and templates. |

!!! warning "Validate your TwiML"
    Ensure that the TwiML you enter the editor is valid. If the TwiML sent to Twilio is invalid, the call will immediately fail or not be able to initiate.

    You will also have to make sure that the content of your TwiML is escaped XML.
## Microsoft Teams
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/892e801-teams.jpg" width="100%" />
</figure>

!!! note "Teams Cards"
    Structured content in Microsoft Teams is sent as so-called Cards. Refer to [Deployment a Microsoft Teams Endpoint]({{config.site_url}}ai/endpoints/azure-bot-services#section-3-sending-messages-to-a-teams-bot/) page for information on how to send messages.
<!-- need to change the link above  -->

<div style="text-align: center; padding: 0px;"><a href="https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-connector-add-rich-cards?view=azure-bot-service-3.0" target="_blank">Link: Microsoft Teams Documentation</a></div>

| Type | Description                                                                                                                                                                                                                                                                    |
|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Text | A simple text message.                                                                                                                                                                                                                                                         |
| JSON | Can contain valid JSON in the Bot Framework / Microsoft Teams format. See the [Microsoft Documentation](https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-connector-add-rich-cards?view=azure-bot-service-3.0) for further details and templates. |

!!! warning "Multiple Flow Outputs"
    If more than one Say Node is hit in one Flow execution using the Microsoft Teams Channel, each Say Nodes' Default Text or Microsoft Teams Text outputs will be concatenated and sent as one message. However, if one or more of the Say Nodes contain Microsoft Teams JSON, then the last node containing this JSON will be sent.

## Voice Gateway

[![Version badge](https://img.shields.io/badge/Updated in-v4.48-blue.svg)](../../../release-notes/4.48.md)

To activate a Voice Gateway channel:

1. Go to the **Edit Node** page and click **+**.
2. From the list, select **Voice Gateway**.
3. In the **Text** field, add SSML markup to adjust the virtual agent's output speech.

Starting from Cognigy 4.48, you can configure Voice Gateway settings using Activity Parameters. To do this, turn on the Set Activity Parameters toggle. You can find a description of the parameter configurations in [Voice Gateway Parameter Details](../vg/parameter-details.md).
These configurations are also available in the following Nodes:

- [Question](question.md)
- [Optional Question](optional-question.md)
- [Set Session Config](../vg/set-session-config.md)
- [Play](../vg/play.md)
- [Session Speech Parameters Config](../generic-voice-nodes/session-speech-parameters-config.md)

## 8x8

The **8x8** tab provides two methods for creating and editing a message which is only for the **8x8** channel:

- **Text** for sending text message responses.
- **Custom JSON** for defining more complex messages and templates.

| Type        | Description                             |
|-------------|-----------------------------------------|
| Text        | A simple text message.                  |
| Custom JSON | Can contain a valid 8x8 message object. |

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

## URL opening options in the existing browser tab in Webchat Widget
<div class="divider"></div>

[![Version badge](https://img.shields.io/badge/Added in-v4.5.0-blue.svg)]({{config.site_url}})

As of release v4.5, you can decide to open a URL in the same Webchat Widget window or in a new one when using Say Node option Text with Buttons, Gallery or List.

**Say Node example using "Text with Buttons"**

1. Create a Flow with Say Node. 
2. Start the Say Node Editor, select the **Text with Buttons** option and click **Add a new Button**. 
3. Then select **URL** as **Button Type** and enter the Internet address you want. 
4. Complete the configuration by selecting **Open URL in a new tab** or **Open URL in the same tab**. 
5. Deploy an Endpoint with the Webchat option and start a bot conversation.
    The configured Say Node Buttons will be displayed in the Webchat Widget.
6. Click on the Button.
7. Depending on the configuration the URL will be opened in a separate tab or in the same tab.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/3492532-Show_URL_in_same_tab.PNG" width="75%" />
</figure>

Say Node configuration with 'URL Target' setting "Open URL in the same tab".

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/83e1500-Webchat_conversation_same_tab.PNG" width="75%" />
</figure>

Webchat with button "Show URL in same tab".

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/320961c-Cognigy_Website_same_tab.png" width="75%" />
</figure>

URL has been opened in the same tab.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/3014d6c-Show_URL_in_new_tab.PNG" width="75%" />
</figure>

Say Node configuration with 'URL Target' setting "Open URL in new tab".

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/83e1500-Webchat_conversation_same_tab.PNG" width="75%" />
</figure>

Webchat with button "Show URL in new tab".

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/af2f15e-URL_opened_in_new_tab.png" width="75%" />
</figure>

URL has been opened in a new tab.

## AI-enhanced output

To use AI-enhanced bot output rephrasing, read the [Generative AI](../../generative-ai.md#rephrase-bot-outputs) article.

## Handover Settings

When using a handover, such as to a live agent, you can choose who receives the message from the virtual agent:

- User and Agent — by default, both the end user and the human agent will receive the message.
- User only — the end user will receive the message.
- Agent only — the responsible human agent will receive the message.