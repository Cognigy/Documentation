---
title: "Key Features"
slug: "key-features"
description: "Cognigy Webchat v2 offers several key features aimed at enhancing user interaction and navigation within conversations"
hidden: false
---

# Webchat v2: Key Features

Cognigy Webchat v2 offers several key features aimed at enhancing user interaction and navigation within conversations.


## Chat UI

When you use message Nodes such as [Say](../../ai/nodes/basic/say.md), [Question](../../ai/nodes/basic/question.md), or [Optional Question](../../ai/nodes/basic/optional-question.md) Nodes, the following output types can be used within these nodes to display different message formats in the chat.

### Quick Replies

With Quick Replies, you can guide users through conversations by offering example phrases for replies. When users click a Quick Reply, they'll send a pre-configured message defined by you, facilitating smoother interactions.

<figure>
  <img class="image-center" src="{{config.site_url}}webchat/images/v2/quick-replies.png" width="100%" />
</figure>

### Gallery

To present structured content interactively, utilize the Gallery. It allows you to showcase one or more items with an image, a title, a subtitle, and optional buttons containing links or pre-configured messages.

<figure>
  <img class="image-center" src="{{config.site_url}}webchat/images/v2/gallery.png" width="100%" />
</figure>

### List

The List feature enables you to present 2-4 list options to users, 
ideal for scenarios where users need to view all options at once. It's a preferred alternative to the Gallery for such cases.

<figure>
  <img class="image-center" src="{{config.site_url}}webchat/images/v2/list.png" width="100%" />
</figure>

### Audio

The Audio feature enables you to send of audio files. Users will see a web player and can play the file instantly.

<figure>
  <img class="image-center" src="{{config.site_url}}webchat/images/v2/audio.png" width="100%" />
</figure>

### Image

The Image feature enables you to send of image files. Users will view the image in a fixed aspect ratio.

<figure>
  <img class="image-center" src="{{config.site_url}}webchat/images/v2/image.png" width="100%" />
</figure>

### Video

The Video feature enables you to send of video files. Users will see a web player and can play the file instantly.

<figure>
  <img class="image-center" src="{{config.site_url}}webchat/images/v2/video.png" width="100%" />
</figure>

### Text with Buttons

If you require navigation options for users without the need for rich structuring, as the Gallery, you can utilize the Text with Buttons.

<figure>
  <img class="image-center" src="{{config.site_url}}webchat/images/v2/button-template.png" width="100%" />
</figure>

## Date Picker

Whenever your virtual agent prompts for a date input via the Webchat, users can select the date using an interactive Date Picker.

<figure>
  <img class="image-center" src="{{config.site_url}}webchat/images/v2/date-picker-selection-date.png" width="100%" />
</figure>

After clicking the Date Picker button, a full-screen overlay will appear in the Webchat, allowing the user to choose a date within the constraints defined by the virtual agent.

<figure>
  <img class="image-center" src="{{config.site_url}}webchat/images/v2/date-picker.png" width="100%" />
</figure>

To use a Date Picker, add the [Date Picker](../../ai/nodes/data/datepicker.md) Node within your Flow.

## Persistent Menu

If your bot contains a broad and deep set of features, it may be helpful for users to be able to use a menu for navigation. The Persistent Menu solves this issue by providing a set of pre-defined messages (like Quick Replies) that can be accessed from the input bar at any point in the conversation.

<figure>
  <img class="image-center" src="{{config.site_url}}webchat/images/v2/persistent-menu.png" width="100%" />
</figure>

To configure the Persistent Menu, use the [Persistent Menu](configuration.md#persistent-menu) settings.
