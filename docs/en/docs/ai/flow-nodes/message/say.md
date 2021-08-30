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


???+ success "Automatic Conversion to Channel Specific Output"
    In case rich media is configured in the default AI tab, the platform will attempt to automatically convert the output to the channel's equivalent. Please check the specific Output Type above to verify channel support.

???+ warning "Fallback Text"
    In case the automatic conversion to channel specific output cannot take place, the Fallback Text will be triggered.

## Output Types
<div class="divider"></div>

The AI Channel allows for the configuration of different **Output Types**:

### Text
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/6746960-node-say.jpg" width="100%" />
</figure>

The **Text** Output Type renders text and emojis (if supported by the channel). The text field also supports [CognigyScript]({{config.site_url}}/ai/tools/cognigy-script/) and [Tokens]({{config.site_url}}/ai/resources/manage/tokens/) that can be added by clicking the **AI** button at the end of each field.

???+ success "Channel Support"
    The **Text** Output Type is currently converted to compatible output on all channels. Please keep in mind that **emojis** may not render properly on all channels.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9f49b00-OutputTypeText.jpg" width="100%" />
</figure>

Multiple text messages can be added for conversational variation. When multiple text messages are configured, the delivery order is controlled by the *linear* and *loop* settings available in the ***options*** dropdown menu.

???+ warning "Using Multiple Text Outputs"
    By configuring multiple messages in a text say node, only one message will be delivered per activation of the node. An additional say node must be configured in order to send two text messages at once.
#### Text Options
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/37689d0-SayOptions.jpg" width="100%" />
</figure>

When sending simple text output, Cognigy.AI dialog nodes provide options for configuring the behavior of output and attaching data to the message. The configuration options and their functions are listed below:

| Parameter | Type | Description |
| ----------- | ----------- | ----------- |
| Linear | toggle | Iterates through the text options linearly instead of randomly. |
| Loop | toggle | If `linear` is set, the order restarts at the first text response after reaching the end. Otherwise the last text option will be repeatedly used, once reached. |
| Data | JSON | The data you want to send to the client |

???+ info "Linear and Loop"
    There are three different combinations of applying the Linear and Loop toggles, each providing a different behavior style for the order in which messages are delivered on future activation of the same node. The three combinations are:

    * Random (e.g. 4, 2, 5, 4, 4, 2, 5, 1, ...)
    * Linear + non-looping (e.g. 1, 2, 3, 4, 5, 5, 5, 5...)
    * Linear + looping (e.g. 1, 2, 3, 4, 5, 1, 2, 3, 4, 5...)
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

???+ warning "Channel Support"
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
