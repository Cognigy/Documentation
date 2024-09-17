---
title: "Say"
slug: "say"
hidden: false
---

# Say

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/message/say.png" width="80%" />
</figure>

## Description

A Say Node is used to send a message to the user.

Depending on the current Channel, additional rich media formats are available. Add a new channel output by clicking the **+** icon and selecting the channel that corresponds to the channel endpoint that will be deployed.

## Settings

### Channels

list od channels


### Output Type 

The AI Channel allows for the configuration of different **Output Types**. Not all [endpoints](../../../deploy/endpoints/overview.md) can correctly convert your content to the desired output type. Before configuration, [check the compatibility](../../../deploy/endpoints/content-conversion.md) of the output type with the endpoint.

### Text

The **Text** Output Type renders text and emojis (if supported by the channel). The text field also supports [CognigyScript](../../cognigy-script.md) and [Tokens](../../tokens.md) that can be added by clicking the **AI** button at the end of each field.

!!! tip "Channel Support"
    The **Text** Output Type is currently converted to compatible output on all channels. Keep in mind that **emojis** may not render properly on all channels.

| Parameters | Type          | Description                                          |
|------------|---------------|------------------------------------------------------|
| Text       | CognigyScript | Enter the text. Does not support markdown, only html |

Multiple text messages can be added for conversational variation.
When multiple text messages are configured, 
the delivery order is controlled by the *linear* and *loop* settings available in the ***options*** dropdown menu.

!!! warning "Using Multiple Text Outputs"
    By configuring multiple messages in a text say node, only one message will be delivered per activation of the node. An additional say node must be configured in order to send two text messages at once.

#### Options

When sending simple text output, Cognigy.AI dialog nodes provide options for configuring the behavior of output and attaching data to the message. The configuration options and their functions are listed below:

| Parameter | Type   | Description                                                                                                                                                     |
|-----------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Linear    | Toggle | Iterates through the text options linearly instead of randomly.                                                                                                 |
| Loop      | Toggle | If `linear` is set, the order restarts at the first text response after reaching the end. Otherwise the last text option will be repeatedly used, once reached. |
| Data      | JSON   | The data you want to send to the client                                                                                                                         |

!!! note "Linear and Loop"
    There are three different combinations of applying the Linear and Loop toggles, each providing a different behavior style for the order in which messages are delivered on future activation of the same node. 
    The three combinations are:

    * Random (for example, 4, 2, 5, 4, 4, 2, 5, 1, ...)
    * Linear + non-looping (for example, 1, 2, 3, 4, 5, 5, 5, 5...)
    * Linear + looping (for example, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5...)

### Text with Quick Replies

!!! warning "Channel Support"
    The **Text with Quick Replies** Output Type is currently converted to compatible output on all the following channels: **Webchat**, **Messenger**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack** and **RingCentral Engage**.


Text with Quick Replies can be used to show the user a number of configurable Quick Replies. Quick Replies are pre-defined answers that are rendered as input chips.

| Parameters                | Type           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|---------------------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Text                      | CognigyScript  | Enter the text. Does not support markdown, only html                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Add Quick Reply           | Button         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Empty Quick Reply         | Button         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Button Title              | CognigyScript  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Select Button Type        | Dropdown       | - Postback Value - when a **Postback Value** is configured and the **Quick Reply** is clicked, the Postback Value will be sent to the start of the Flow. This simulates user input - it is "as if" the user would have manually typed something. This is the most typical behavior for Quick Replies.<br>- Phone Number - when this option is configured, clicking the Quick Reply will try to open the phone application on the device.<br>- Trigger Intent - the Trigger Intent feature allows you to manually trigger an Intent by writing cIntent:, followed by the desired intent name in your text input, the regular Intent mapping will be ignored. More information see [Trigger Intent](../../../empower/nlu/intents/trigger-intent.md)<br>- Open xApp - opens an xApp page. |
| Postback Value            | CognigyScript  | Appears when Postback Value in Select Button Type is chosen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Phone number              | CognigyScript  | Appears when Phone Number in Select Button Type is chosen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                               
| Intent Name               | CognigyScript  | Appears when Intent Name in Select Button Type is chosen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Image URL                 | CognigyScript  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Image Alternate Text      | CognigyScript  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
| Condition: Cognigy Script | CognigyScript  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
| Fallback Text             | CognigyScript  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 

### Gallery

Galleries are powerful visual widgets that are ideal for showing a list of options with images. They are typically used to show a number of products or other items that can be browsed.

A gallery can be configured with a number of cards. A card contains an image, a title and a subtitle and can be configured with (optional) buttons.

!!! warning "Channel Support"
    The **Gallery** Output Type is currently converted to compatible output on all the following channels: **Webchat**, **Messenger**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack** and **RingCentral Engage**.

| Parameters                | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|---------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Add Card                  | Button        | Adds a new card for the Gallery type. You can add multiple cards.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Add Image                 | Button        | Adds an image for the selected card.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Image URL                 | Button        | Appears when the Add Image parameter is selected. The URL for the image. Note if you upload a URL to a storagem such as Google Cloud Storage, AWS stoorage, that the URL should be publicly available.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Image Alternate Text      | CognigyScript | Appears when the Add Image parameter is selected. The text that will be visible if the image is not available.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Title                     | CognigyScript | Appears when the Add Card parameter is selected. The title of the card.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 
| Subtitle                  | CognigyScript | Appears when the Add Card parameter is selected. The subtitle of the card.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Condition: Cognigy Script | CognigyScript | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Add Button                | Button        | Adds a new Empty Title button. You can add multiple buttons.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Empty Title               | Button        | Adds a new button to the selected card.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Button Title              | Button        | Appears only when the Empty Title parameter is selected. The title of the button.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Select Button Type        | Dropdown      | - Postback Value - when a **Postback Value** is configured and the **Quick Reply** is clicked, the Postback Value will be sent to the start of the Flow. This simulates user input - it is "as if" the user would have manually typed something. This is the most typical behavior for Quick Replies.<br>- Phone Number - when this option is configured, clicking the Quick Reply will try to open the phone application on the device.<br>- Trigger Intent - the Trigger Intent feature allows you to manually trigger an Intent by writing cIntent:, followed by the desired intent name in your text input, the regular Intent mapping will be ignored. More information see [Trigger Intent](../../../empower/nlu/intents/trigger-intent.md)<br>- Open xApp - opens an xApp page. |
| Postback Value            | CognigyScript | Appears if the Post back value is selected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| URL                       | CognigyScript | Appears if the URL value in Select Button Type   is selected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| URL Target                | CognigyScript | Appears if the URL value in Select Button Type is selected. You can select one of the following options: Open URL in a new tab - Open URL in the same tab                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Phone number              | CognigyScript | Appears if the URL value in Select Button Type is selected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Intent name               | CognigyScript | Appears if the Trigger Intent value in Select Button Type is selected.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Condition: Cognigy Script | CognigyScript | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Fallback Text             | CognigyScript |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | 


### Text with Buttons

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/c7c32f9-say-buttons.jpg" width="100%" />
</figure>

**Text with Buttons** is a similar **Output Type** to **Text with Quick Replies**. The difference comes from the way the widget is rendered, which resembles a vertical list of button options. It can be configured in a similar fashion.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/6554383-textbuttons.PNG" width="75%" />
</figure>

!!! warning "Channel Support"
The **Text with Buttons** Output Type is currently converted to compatible output on all the following channels: **Webchat**, **Messenger**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack** and **RingCentral Engage**.
### List
<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/1c5a0c7-list1.PNG" width="100%" />
</figure>

**List** output allows a customized list of items to be displayed with many configuration options such as the header image, buttons, images and more.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/782c02f-list2.PNG" width="100%" />
</figure>

The first list item can optionally be converted to a header item that houses the list title, subtitle and button. Each additional list item can have a title, subtitle, image and button added. The list can also have a button added at the bottom.

!!! warning "Channel Support"
The **List** Output Type is currently converted to compatible output on all the following channels: **Webchat**, **Azure Bot Services**, **RingCentral Engage**, **UserLike** and **Line**.
### Audio
<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/7c58ec2-node-audio.jpg" width="100%" />
</figure>

The **Audio Output Type** can render audio output in case this is supported by the channel. It can be configured, by providing it with a URL to an audio file.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/86d62bf-audio.jpg" width="100%" />
</figure>

!!! warning "Channel Support"
The **Audio** Output Type is currently converted to compatible output on all the following channels: **Webchat**, **Messenger**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack**.
### Image
<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/506f002-Say_image.svg" width="100%" />
</figure>

Image Output Types display an image in a similar fashion to the gallery. The image output, however, only outputs one particular image.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/c8fd6f9-Output_Type_image.svg" width="100%" />
</figure>

!!! warning "Channel Support"
The **Image** Output Type is currently converted to compatible output on all the following channels: **Webchat**, **Messenger**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack**.
### Video
<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/f8b5cdf-Say_video.svg" width="100%" />
</figure>

The Video Output Type allows you to configure a video output. It takes a URL as an input parameter and will start playing the video automatically if this is supported by the channel.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/f71165b-Output_Type_video.svg" width="100%" />
</figure>

!!! warning "Channel Support"
The **Video** Output Type is currently converted to compatible output on all the following channels: **Webchat**, **Messenger**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack**.

    **PLEASE NOTE**: the **Messenger** channel requires videos to be of the MP4 type (for example, YouTube links might not work).

!!! note "CognigyScript"
Any text field in the say node supports the use of **CognigyScript**.

    For detailed instructions, read the Chapter on [CognigyScript](../../cognigy-script.md).

### Adaptive Card

[![Version badge](https://img.shields.io/badge/Updated in-v4.56-blue.svg)](../../../../release-notes/4.56.md)

The Adaptive Card Type allows you to configure an adaptive card output. Adaptive Cards offer customization options, support for rich media (images, video, and audio), ease of use with a simple JSON schema, and the ability to create dynamic content for users to match their specific needs and branding.

To create an adaptive card, use the [Adaptive Card Designer](https://adaptivecards.io/designer). Customize the existing JSON, then copy and paste it into the code editor. If JSON is correct, you will see the adaptive card rendered under the code editor.

!!! warning
Cognigy supports the limited number of versions for Adaptive Card, so using the latest versions may cause issues. We recommend using [supported versions](../../../deploy/endpoints/content-conversion.md) for better compatibility.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/say/adaptive-card-output-type.png" width="80%" />
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
#### Create an Adaptive Card with Generative AI

You can also use Generative AI to create a new adaptive card or improve an existing one. Before using it, ensure that you are connected to one of the [Generative AI providers](../../../empower/generative-ai.md#prerequisites).

To use this feature, follow these steps:

1. Select the **Adaptive Card** output type.
2. On the right side of the **Output type** list, click ![the Gen AI Icon](../../../../_assets/icons/beta.svg).

{! _includes/ai/nodes/adaptive-card-genai.md !}

To replace the current Adaptive Card with a new one, click ![recycle bin](../../../../_assets/icons/recycle-bin.svg).

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/say/adaptive-card-type-generative-ai.png" width="100%" />
</figure>

??? info "Generative AI Adaptive Card JSON example"

    ```json
    {
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      "type": "AdaptiveCard",
      "version": "1.0",
      "body": [
        {
          "type": "TextBlock",
          "text": "Customer Form"
        },
        {
          "type": "Input.Text",
          "id": "customerName",
          "placeholder": "Enter customer name"
        },
        {
          "type": "Input.Date",
          "id": "dateInput",
          "placeholder": "Enter date"
        },
        {
          "type": "Input.Text",
          "id": "flightNumber",
          "placeholder": "Enter flight number"
        }
      ]
    }
    ```

### Options

### AI-enhanced output

To use AI-enhanced output rephrasing, read the [Generative AI](../../../empower/generative-ai.md) article.

### Handover Settings

When using a handover, such as to a live agent, you can choose who receives the message from the AI Agent:

- **User and Agent** — by default, both the end user and the human agent will receive the message.
- **User only** — the end user will receive the message.
- **Agent only** — the responsible human agent will receive the message.

