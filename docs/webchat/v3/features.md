---
title: "Key Features"
slug: "key-features"
description: "The Webchat 3 key features offer comprehensive customization options, including branding elements, accessibility features, and tailored starting behaviors, ensuring a personalized and efficient user experience. Additionally, it introduces enhancements such as Quick Replies, Conversation Ratings, and Privacy Notices to elevate engagement and user feedback mechanisms, while features such as adaptive cards and media attachments enrich interactions by presenting structured content and media files seamlessly within the chat interface."
hidden: false
---

# Webchat 3: Key Features

{! _includes/webchat/preview.md !}

The Webchat 3 key features offer comprehensive customization options, including branding elements, accessibility features, and tailored starting behaviors, ensuring a personalized and efficient user experience. Additionally, it introduces enhancements such as Quick Replies, Conversation Ratings, and Privacy Notices to elevate engagement and user feedback mechanisms, while features such as adaptive cards and media attachments enrich interactions by presenting structured content and media files seamlessly within the chat interface.

## Customization  

Customization includes a comprehensive suite of features 
that bolster your brand's presence and enhance user accessibility. 
Customize the chat interface with your brand's title and logo, 
alongside distinct avatars for both virtual and human agents, 
and adjust the color scheme across various elements. 
Accessibility is prioritized with Text-to-Speech and Speech-to-Text functionalities. 
Starting behavior customization sets the tone for engagement, 
allowing for a tailored initial interaction, such as a greeting message or a start button. 
Operational settings, including business hours, ensure users are clearly informed about the availability of support. 
Collectively, these customization options create a personalized and efficient webchat experience 
that aligns with your operational requirements and brand image.

For customization, refer to the [Webchat Layout](configuration.md#webchat-layout) and [Webchat Behavior](configuration.md#webchat-behavior) settings.

## Home Screen

The Webchat's Home screen offers a customizable and welcoming first impression for users, 
facilitating immediate engagement. It includes a personalized Welcome Text to align with your brand's voice, 
options to upload a Background Image for visual appeal, and settings to apply a background color to match your brand's style. 
These elements work together to create an inviting and branded entry point for user interactions, ensuring a seamless and appealing start to the chat experience.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/home-page.png" width="100%" />
</figure>

To configure the Home screen, refer to the [Home Screen](configuration.md#home-screen) settings.

### Conversation Starters

The Conversation Starters Feature can be enabled in the Home Screen Settings and allows users to initiate conversations through pre-defined messages. 
It provides a user-friendly start with options to customize these messages and to set the tone for the interactions. With the ability to add up to five Conversation Starters and easy management through deletion, this feature streamlines initiating dialogue, showcasing AI capabilities, and ensuring a smooth and guided conversation start.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/conversation-starters.png" width="100%" />
</figure>

To configure the conversation starters, refer to the [Home Screen](configuration.md#conversation-starters) settings.

### Previous Conversations

The Previous Conversations Feature offers a straightforward way for users to access their past dialogues with the virtual agent directly from the Webchat home screen. It includes options to customize the Previous Conversations button text, and the header of the conversation screen, enriching user experience by ensuring continuity and easy reference to previous interactions.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/previous-conversations.png" width="100%" />
</figure>

To configure the Previous Conversations screen, refer to the [Previous Conversations](configuration.md#previous-conversations) settings.

## Teaser Message

The Teaser Message feature enhances user engagement by displaying pre-defined messages beside the Webchat icon, aimed at sparking interest and encouraging chat initiation. This feature helps create a seamless and engaging user experience from the first interaction.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/teaser-message.png" width="100%" />
</figure>

To configure the teaser message, refer to the [Teaser Message](configuration.md#teaser-message) settings.

## Chat Options

Enabling Chat Options unlocks additional interactive capabilities within the chat interface, such as Quick Replies for streamlined responses, Conversation Rating for user feedback, and a customizable Footer for further information. This collective enhancement of features under the Chat Options settings enriches the engagement by offering users more ways to interact and provide feedback, ultimately elevating the overall chat experience.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/chat-options.png" width="100%" />
</figure>

To configure the Chat Options page, refer to the [Chat Options](configuration.md#chat-options) settings.

### Quick Replies

The Quick Replies feature at the top of the Chat Option screen simplifies interactions by offering instant responses or directing users to more information. Users can easily choose from these options to address common questions or navigate to additional resources.

To configure the quick replies, refer to the [Quick Replies](configuration.md#quick-replies) settings.

### Conversation Rating

The Conversation Rating feature in chat options allows users to rate and provide feedback on their chat experience, crucial for improving assistant performance. It offers customizable settings including the invitation to rate, placeholder for comments, submit button text, and a confirmation banner message. This streamlined feedback mechanism engages users directly, making it easier to gather and act on valuable user insights.

To configure the conversation rating, refer to the [Conversation Rating](configuration.md#conversation-rating) settings.

## Privacy Notice

The Privacy Notice feature ensures user trust and compliance by prompting consent to a privacy notice before chatting with the virtual agent. It includes customization of the title, detailed message, and submit button text, as well as a direct link to the full Privacy Policy, transparently informing users about data handling practices and securing their informed consent.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/privacy-notice.png" width="100%" />
</figure>

To configure the Privacy Notice page, refer to the [Privacy Notice](configuration.md#privacy-notice) settings.

## Chat UI

When you use message Nodes such as [Say](../../ai/build/node-reference/basic/say.md), [Question](../../ai/build/node-reference/basic/question.md), or [Optional Question](../../ai/build/node-reference/basic/optional-question.md) Nodes, the following output types can be used within these nodes to display different message formats in the chat.

### Quick Replies

With Quick Replies, you can guide users through conversations by offering example phrases for replies. When users click a Quick Reply, they'll send a pre-configured message defined by you, facilitating smoother interactions.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/quick-replies.png" width="100%" />
</figure>

### Adaptive Cards

Customizable Adaptive Cards are a valuable feature in the chat interface, especially for gathering user information. These interactive elements can be customized to collect specific details or preferences from users in a structured and user-friendly manner. Their adaptability ensures seamless integration with the chat's design, maintaining brand consistency while enhancing the user experience.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/adaptive-card.png" width="100%" />
</figure>

### Gallery

To present structured content interactively, utilize the Gallery. It allows you to showcase one or more items with an image, a title, a subtitle, and optional buttons containing links or pre-configured messages.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/gallery.png" width="100%" />
</figure>

### List

The List feature enables you to present 2-4 list options to users, ideal for scenarios where users need to view all options at once. It's a preferred alternative to the Gallery for such cases.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/list.png" width="100%" />
</figure>

### Audio

The Audio feature enables you to send of audio files. Users will see a web player and can play the file instantly.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/audio.png" width="100%" />
</figure>

### Image

The Image feature enables you to send of image files. Users will view the image in a fixed aspect ratio.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/image.png" width="100%" />
</figure>

### Video

The Video feature enables you to send of video files. Users will see a web player and can play the file instantly.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/video.png" width="100%" />
</figure>

### Text with Buttons

If you require navigation options for users without the need for rich structuring, as the Gallery, you can utilize the Text with Buttons.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/text-with-buttons.png" width="100%" />
</figure>

## Attachment Upload

To send certain media files to users, use the Attachment Upload feature.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/attachment.png" width="100%" />
</figure>

For enabling attachment uploads, refer to the [Attachment Upload](configuration.md#attachment-upload) settings.

## Date Picker

Whenever your virtual agent prompts for a date input via the Webchat, users can select the date using an interactive Date Picker. 
After clicking the Date Picker button, a full-screen overlay will appear in the Webchat, allowing the user to choose a date within the constraints defined by the virtual agent.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/date-picker.png" width="100%" />
</figure>

To use a Date Picker, add the [Date Picker](../../ai/build/node-reference/data/datepicker.md) Node within your Flow.

## More Information

- [Webchat v3: Overview](overview.md)
- [Webchat v3: Configuration](configuration.md)
- [Webchat v3: Embedding](embedding.md)