---
title: "Endpoint Configuration"
slug: "configuration"
description: ""
hidden: false
---

# Webchat v2: Endpoint Configuration

## Create a Webchat Endpoint

1. Open the Cognigy.AI interface.
2. In the left-side menu, select an Agent.
3. In the left-side **Agent** menu, select **Deploy > Endpoints**. 
4. On the **Endpoints** page, click **+ New Endpoint**. 
5. In the **New Endpoint** section, do the following:
   3.1 Select the **Webchat** Endpoint type.
   3.2 Add a unique name.
   3.3 Select a relevant Flow from the list.
6. Click **Save**.

## Generic Endpoint Settings

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview](../../ai/endpoints/overview.md)
- [Data Protection & Analytics](../../ai/endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../../ai/endpoints/transformers/transformers.md)
- [NLU Connectors](../../ai/resources/build/nlu-connectors.md)
- [Session Management](../../ai/endpoints/session-management.md)
- [Handover Settings](../../ai/endpoints/handover-settings.md)
- [Real Time Translation Settings](../../ai/endpoints/real-time-translation-settings.md)

!!! tip "Supports Inject & Notify"
     You can use the [Inject & Notify](../../ai/endpoints/inject-and-notify.md) functionality with this type of Endpoint.

## Configure Specific Settings

You can configure almost everything about Webchat to personalize it just for your needs. This includes modifying the colors, adding functionality like file uploads and much more, so that you can present the Conversational AI that you have created in a very nice way. As soon as you have changed a setting, loading or reloading a Website with a Webchat pointing to this Endpoint will show the changes will already have taken effect.

### Webchat Layout

The Webchat Layout settings has customization options, such as the title, color scheme, virtual agent and header logos, typing indicators, and input placeholder text.

| Parameter                | 	Description                                                              |
|--------------------------|---------------------------------------------------------------------------|
| Webchat Title            | The text to display within the webchat header.                            |
| Color Scheme             | The main colors for the Webchat, for example, #008080.                    |
| Bot Avatar Logo URL      | A URL linking to the logo that should be the virtual agent's avatar.      |
| Header Logo URL          | A URL linking to the logo that should be displayed in the Webchat header. |
| Enable Typing Indicators | Enables a typing indicator while the virtual agent is replying.           |
| Input Placeholder Text   | The text to display as a placeholder in the input field.                  |

#### Advanced Layout Settings

The Advanced Layout settings offer parameters for managing the chat interface, focusing on input behavior, HTML styling, and JavaScript usage.

| Parameter                                | Description                                                                                                                                                                                                                                                                                                  |
|------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enable Input Autogrow                    | If this is enabled, the text input for Webchat users will grow automatically when the user types long texts. It also enables line breaks for user text inputs.                                                                                                                                               |
| Maximum Number of Input Rows             | Defines the number of text lines the text input can grow to. After the maximum line size is exceeded, a vertical scroll bar will appear in the text input.                                                                                                                                                   |
| Enable Input Collation                   | If this is enabled, text inputs from the 'input field' will not be sent immediately and collated into one message after no text message was submit for 1 second. Postback and Quick Reply messages will still be sent immediately and will cause a held-back message to also immediately collate and submit. |
| Input Collation Timeout                  | Defines the number of milliseconds to wait before collating and submitting a message when using the 'Enable Input Collation' feature.                                                                                                                                                                        |
| Dynamic Image Aspect Ratio               | Images from the 'gallery', 'attachment' or 'top list item' template will not have a forced aspect ratio and will be fully displayed full-width without cropping.                                                                                                                                             |
| Disable Input Autocomplete               | Use this setting to disable the autocomplete functionality for everyone.                                                                                                                                                                                                                                     |
| Enable generic HTML Styling              | If this is active, additional generic styling will be applied to HTML content inside regular text messages.                                                                                                                                                                                                  |
| Allow JavaScript in HTML Message Content | By default, potentially malicious HTML content like 'onclick' or 'onload' attributes are removed before rendering. If this setting is enabled, they will not be removed.                                                                                                                                     |
| Allow JavaScript in Button/Action URLs   | By default, 'JavaScript URLs' starting with javascript: will get removed. If this setting is enabled, they will not be removed and the JavaScript code will get executed when the user clicks the button/element.                                                                                            |

!!! note "Text Input Sanitization"
    Text Input Sanitization is enabled by default for security reasons, before sending text from the Webchat to the NLU. This changes characters which are reserved by HTML, as for example `**",',&,<,>**`, to an entity name. For example **&** will have **amp;** appended to the input.
    This can cause issues in your Agent if a condition or Intent is only triggered by the reserved character in its original form. If you need to circumvent this issue, toggle **Allow JavaScript in HTML Message Content** to be enabled.

#### Persistent Menu

The Persistent Menu ensures quick access to different conversation stages, guides users, offers features, shares information, and enhances the overall user experience.

| Parameter              | Description                                                                                                                                                                                                                         |
|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enable Persistent Menu | Activate the Persistent Menu.                                                                                                                                                                                                       |
| Title (main)           | The title for your Persistent Menu. This title will be displayed to the users.                                                                                                                                                      |
| Menu items             | Click on the ADD button to add items to the Persistent Menu. Each menu item consists of a Title and a Payload.                                                                                                                      |
| Title                  | The text that you want users to see in the Persistent Menu. This text should be descriptive and clear, indicating the function or action associated with the menu item.                                                             |
| Payload                | The payload text that will be sent to your virtual agent flow when the user selects this menu item. This payload can be a simple word or phrase, or it can be a more complex query depending on your virtual agent's functionality. |

#### Webchat Plugins

Add a link to the webchat plugin.
Note that you can add multiple plugins.
For more information on how to create and trigger plugins, refer to [Webchat Plugins](../plugins.md).

### Webchat Behavior

The Webchat Behavior settings offer features for initiating conversations that include starting with a text field, button click, or automatic message, with customization options available.

| Parameter      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Start Behavior | This setting allows you to define the initial action when initiating a new conversation with the AI Agent.You can select one of the following modes:<br>- Start with a Text Field - the conversation begins when an end user sends a message.<br>- Start with a Button - the conversation begins when an end user clicks the button that you configured.<br>- Auto Send a Message to the Bot - the conversation begins when the automated message that you configured is sent to the AI Agent. |
| Text Payload   | This parameter is applicable to modes: **Start with a Button** and **Auto Send a Message to the Bot**. This feature allows you to customize the first message that initiates the conversation with the AI Agent, crafting the initial context and tone of the interaction. By customizing this opening message, you can ensure a purposeful and engaging start, aligning the conversation with your objectives from the very beginning.                                                        |
| Data Payload   | This parameter is applicable to modes: **Start with a Button** and **Auto Send a Message to the Bot**. This feature allows you to send the additional data to your Flow.                                                                                                                                                                                                                                                                                                                       |
| Display Text   | This parameter is applicable to modes: **Start with a Button** and **Auto Send a Message to the Bot**.  This feature enables you to present a message as if it were entered by the user when the chat begins. It simulates a user input bubble, creating an immediate, engaging interaction.                                                                                                                                                                                                   |
| Button Title   | This parameter is applicable to **Start with a Button** mode. This setting allows you to customize the text displayed on the Start Button, serving as the interactive prompt for users to begin their conversation with the AI Agent.                                                                                                                                                                                                                                                          |

#### Additional Behavior

Within the Additional Behavior settings, functionalities such as enhancing user experience and alerting about internet connection issues are available.

| Parameter                          | Description                                                                                                                                                                                                                                                                                                                                                           |
|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message Delay                      | The amount of time to wait between sending virtual agent replies. Measured in milliseconds.                                                                                                                                                                                                                                                                           |
| Focus Input after Postback         | This setting ensures that after a Postback button or quick reply button is clicked, the Webchat immediately redirects focus back to the message input field. This function enhances usability by providing a smoother, streamlined user experience, allowing you to continue typing without having to manually click back into the text input field.                  |
| Enable Connection Status Indicator | This setting, when enabled, shows a warning message if your internet connection is lost during a conversation with the AI agent. This ensures you're aware of any potential interruptions or delays in the chat conversation. The warning will automatically disappear once the internet connection is re-established, indicating that the chat can proceed normally. |

### Teaser Message Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-teaser-message.png" width="100%" />
  <figcaption>Teaser Message Settings</figcaption>
</figure>

| Parameter | Description |
| -- | -- |
| Teaser Message Text | The text of the message to display next to the webchat icon to get the user to engage. |
| Show Engagement Messages in Chat | Show Engagement Messages in Chat. |

### Unread Message Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-unread-message.png" width="100%" />
  <figcaption>Unread Message Settings</figcaption>
</figure>

| Parameter | Description |
| -- | -- |
| Enable Unread Message Title Indicator | Indicate the number of unread messages in the page title every 1000ms. |
| Enable Unread Message Badge | The webchat shows a badge with the number of unread messages at the toggle button. |
| Enable Unread Message Preview | The webchat shows a message bubble with the latest-retrieved virtual agent message. |
| Enable Unread Message Sound Confirmation | Play a notification sound for each incoming unread message. |

### Conversation Rating Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-conversation-rating.png" width="100%" />
  <figcaption>Conversation Rating Settings</figcaption>
</figure>

| Parameter | Description |
| -- | -- |
| Enable Rating Functionality | Select when a webchat user can give a rating. |
| Rating Title Text | The title displayed in the rating dialog prompt. |
| Rating Comment Text | The text is displayed above the comment field in the rating dialog prompt. |
| Message History Rating Text | The text is displayed in the message history after giving a rating. A text is followed by the icon representing the rating. |
| Message History Comment Text | The text is displayed in the message history after giving a rating, if there was a comment sent. A text is followed by the actual comment. |

### Demo Webchat Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-demo.png" width="100%" />
  <figcaption>Demo Webchat Settings</figcaption>
</figure>

| Parameter | Description |
| -- | -- |
| Enable Demo Webchat | Enables or disables the integrated Demo Webchat for this Endpoint. |
| Enable Speech-to-Text | Toggle whether the Webchat should feature a microphone button. |
| Enable Text-to-Speech | Toggle whether the Webchat should read all virtual agent messages aloud. |
| Background Image | The image that will be displayed behind the Webchat. |
| Center Webchat | Toggle to `Yes` when the Webchat should be centered and toggle to `No` for locating at the bottom right corner.|

### Webchat Custom Settings

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-custom.png" width="100%" />
  <figcaption>Webchat Custom Settings</figcaption>
</figure>

This field can be used to configure additional settings not available in the GUI. These settings override GUI settings. Entering malformed JSON might result in crashing the webchat, so use it with caution and at own risk.

## File Storage

[![Version badge](https://img.shields.io/badge/Added in-v4.45-blue.svg)](../../../release-notes/4.45.md)

{! _includes/ai/file-storage.md !}

## More Information

- [Cognigy Webchat]({{config.site_url}}ai/endpoints/webchat/webchat/)
- [Webchat Features ]({{config.site_url}}ai/endpoints/webchat/webchat-features/)
- [Triggering Webchat Plugins ]({{config.site_url}}ai/endpoints/webchat/triggering-webchat-plugins/)
- [Integrated Demo Page ]({{config.site_url}}ai/endpoints/webchat/integrated-demo-page/)