---
title: "Endpoint Configuration"
slug: "configuration"
description: "To prepare the Cognigy AI Agent for your website, you need to deploy it by creating a Webchat v2 Endpoint and customize the agent to fit your needs using the Webchat v2 Endpoint settings."
hidden: false
---

# Webchat v2: Endpoint Configuration

{! _includes/webchat/deprecation-webchat-v2.md !}

To prepare the AI Agent for your website, you need to deploy it by [creating a Webchat v2 Endpoint](#create-a-webchat-v2-endpoint) and customize the agent to fit your needs using the [Webchat v2 Endpoint settings](#configure-specific-settings).

## Create a Webchat v2 Endpoint

1. In the left-side menu of the Cognigy.AI interface, select a Project.
2. In the left-side menu of the Project, go to **Deploy > Endpoints**.
3. On the **Endpoints** page, click **+ New Endpoint**.
4. In the **New Endpoint** section, do the following:
    1. Select the **Webchat** Endpoint type.<br>
    2. Add a unique name.<br>
    3. Select a relevant Flow from the list.<br>
5. Click **Save**.

## Configure General Settings

The following General Endpoint settings that are available with this Endpoint:

- [Endpoints Overview](../../ai/deploy/endpoints/overview.md)
- [Data Protection & Analytics](../../ai/deploy/endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../../ai/deploy/endpoints/transformers/transformers.md)
- [NLU Connectors](../../ai/empower/nlu/external/nlu-connectors.md)
- [Session Management](../../ai/deploy/endpoints/session-management.md)
- [Handover Settings](../../ai/deploy/endpoints/handover-settings.md)
- [Real-Time Translation Settings](../../ai/deploy/endpoints/real-time-translation-settings.md)
- [AI Copilot](../../ai-copilot/overview.md)
- [File Storage](../../ai/deploy/endpoints/file-storage.md)

!!! tip "Supports Inject & Notify"
    You can use the [Inject & Notify](../../ai/deploy/endpoints/inject-and-notify.md) feature with this Endpoint.

## Configure Specific Settings

Customize your webchat to meet your specific needs.
You can adjust colors and add features such as file uploads to enhance the effectiveness of your AI Agent.
Any updates you make will be instantly and seamlessly reflected when you load or reload your website with Webchat linked to the Endpoint.

### Webchat Layout

The Webchat Layout settings have customization options, such as the title, color scheme, AI Agent and header logos, typing indicators, and input placeholder text.

| Parameter                | Description                                                               |
|--------------------------|---------------------------------------------------------------------------|
| Webchat Title            | The text to display within the Webchat header.                            |
| Color Scheme             | The main colors for the Webchat widget, for example, #008080.             |
| Bot Avatar Logo URL      | A URL linking to the logo that should be the AI Agent's avatar.           |
| Header Logo URL          | A URL linking to the logo that should be displayed in the Webchat header. |
| Enable Typing Indicators | Enables a typing indicator while the AI Agent is replying.                |
| Input Placeholder Text   | The text to display as a placeholder in the input field.                  |

#### Advanced Layout Settings

The Advanced Layout settings offer parameters for managing the chat interface, focusing on input behavior, HTML styling, and JavaScript usage.

| Parameter                                | Description                                                                                                                                                                                                                                                                                                |
|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enable Input Autogrow                    | If this is enabled, the text input for Webchat users will grow automatically when the user types long texts. It also enables line breaks for user text inputs.                                                                                                                                             |
| Maximum Number of Input Rows             | Defines the number of text lines the text input can grow to. After the maximum line size is exceeded, a vertical scroll bar will appear in the text input.                                                                                                                                                 |
| Enable Input Collation                   | If this is enabled, text inputs from the Reply field will not be sent immediately and collated into one message after no text message was submit for 1 second. Postback and Quick Reply messages will still be sent immediately and will cause a held-back message to also immediately collate and submit. |
| Input Collation Timeout                  | Defines the number of milliseconds to wait before collating and submitting a message when using the Enable Input Collation feature.                                                                                                                                                                        |
| Dynamic Image Aspect Ratio               | Images from the gallery, attachment, or list will not have a forced aspect ratio and will be fully displayed full-width without cropping.                                                                                                                                                                  |
| Disable Input Autocomplete               | Use this setting to disable the autocomplete functionality for everyone.                                                                                                                                                                                                                                   |
| Enable generic HTML Styling              | If this is active, additional generic styling will be applied to HTML content inside regular text messages.                                                                                                                                                                                                |
| Allow JavaScript in HTML Message Content | By default, potentially malicious HTML content, such as `onclick` or `onload` attributes, is removed before rendering. Enabling this setting prevents their removal.                                                                                                                                       |
| Allow JavaScript in Button/Action URLs   | By default, JavaScript URLs starting with javascript: will get removed. If this setting is enabled, they will not be removed and the JavaScript code will get executed when the user clicks the button/element.                                                                                            |

!!! note "Text Input Sanitization"
    Text Input Sanitization is enabled by default for security reasons, before sending text from the Webchat widget to the NLU. This changes characters which are reserved by HTML, as for example `**",',&,<,>**`, to an entity name. For example **&** will have **amp;** appended to the input.
    This can cause issues in your Agent if a condition or Intent is only triggered by the reserved character in its original form. If you need to circumvent this issue, toggle **Allow JavaScript in HTML Message Content** to be enabled.

#### Persistent Menu

The Persistent Menu ensures quick access to different conversation stages, guides users, offers features, shares information, and enhances the overall user experience.

| Parameter              | Description                                                                                                                                                                                                               |
|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enable Persistent Menu | Activate the Persistent Menu.                                                                                                                                                                                             |
| Title (main)           | The title for your Persistent Menu. This title will be displayed to the users.                                                                                                                                            |
| Menu items             | Click the ADD button to add items to the Persistent Menu. Each menu item consists of a Title and a Payload.                                                                                                               |
| Title                  | The text that you want users to see in the Persistent Menu. This text should be descriptive and clear, indicating the function or action associated with the menu item.                                                   |
| Payload                | The payload text that will be sent to your AI Agent Flow when the user selects this menu item. This payload can be a simple word or phrase, or it can be a more complex query depending on your AI Agent's functionality. |

#### Webchat Plugins

Add a link to the Webchat plugin.
Note that you can add multiple plugins.
For more information on how to create and trigger plugins, refer to [Webchat Plugins](../plugins.md).

### Webchat Behavior

The Webchat Behavior settings offer features for initiating conversations that include starting with a text field, button click, or automatic message, with customization options available.

| Parameter      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Start Behavior | This setting allows you to define the initial action when initiating a new conversation with the AI Agent.You can select one of the following modes:<br>- **Start with a Text Field** — the conversation begins when an end user sends a message.<br>- **Start with a Button** — the conversation begins when an end user clicks the button that you configured.<br>- **Auto Send a Message to the Bot** — the conversation begins when the automated message that you configured is sent to the AI Agent. |
| Text Payload   | This parameter is applicable to modes: **Start with a Button** and **Auto Send a Message to the Bot**. This feature allows you to customize the first message that initiates the conversation with the AI Agent, crafting the initial context and tone of the interaction. By customizing this opening message, you can ensure a purposeful and engaging start, aligning the conversation with your objectives from the very beginning.                                                                    |
| Data Payload   | This parameter is applicable to modes: **Start with a Button** and **Auto Send a Message to the Bot**. This feature allows you to send the additional data to your Flow.                                                                                                                                                                                                                                                                                                                                   |
| Display Text   | This parameter is applicable to modes: **Start with a Button** and **Auto Send a Message to the Bot**. This feature enables you to present a message as if it were entered by the user when the chat begins. It simulates a user input bubble, creating an immediate, engaging interaction.                                                                                                                                                                                                                |
| Button Title   | This parameter is applicable to **Start with a Button** mode. This setting allows you to customize the text displayed on the Start Button, serving as the interactive prompt for users to begin their conversation with the AI Agent.                                                                                                                                                                                                                                                                      |

#### Additional Behavior

Within the Additional Behavior settings, functionalities such as enhancing user experience and alerting about internet connection issues are available.

| Parameter                          | Description                                                                                                                                                                                                                                                                                                                                                           |
|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message Delay                      | The amount of time to wait between sending AI Agent replies. Measured in milliseconds.                                                                                                                                                                                                                                                                                |
| Focus Input after Postback         | This setting ensures that after a Postback button or quick reply button is clicked, the Webchat widget immediately redirects focus back to the message input field. This function enhances usability by providing a smoother, streamlined user experience, allowing you to continue typing without having to manually click back into the text input field.           |
| Enable Connection Status Indicator | This setting, when enabled, shows a warning message if your internet connection is lost during a conversation with the AI Agent. This ensures you're aware of any potential interruptions or delays in the chat conversation. The warning will automatically disappear once the internet connection is re-established, indicating that the chat can proceed normally. |

### Teaser Message Settings

| Parameter                   | Description                                                                                                                                                                                                                                                                                                                                                                |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Teaser Message Text         | This setting allows you to customize a message displayed beside the Webchat icon. The purpose of this message is to get the user to engage with your Agent by offering a suggestive preview of the interactive service. For example, the teaser message could be a question, a greeting, or an informative statement to get users interested in initiating a conversation. |
| Show Teaser Message in Chat | This setting, when enabled, displays the teaser messages within the chat window itself. This can reinforce the initial engagement invitation or information offered in the teaser message, and maintain continuity of the user experience.                                                                                                                                 |

### Unread Message Settings

The Unread Messages settings help users stay informed about unread messages in Webchat. They include features such as displaying message counts, previews, and notification sounds for timely responses.

| Parameter                             | Description                                                                                                                                                                                                                                                                                                                  |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enable Unread Message Title Indicator | If this setting is turned on, it will show the number of unread messages on the browser tab title every 1000 milliseconds. This helps the user to keep track of messages that are yet to be read, ensuring no communication from the AI Agent is missed, especially when the user is multitasking and has several tabs open. |
| Enable Unread Message Badge           | When this feature is enabled, a badge displaying the count of unread messages will appear on the Webchat toggle button. This ensures users are aware of any new messages or responses from the AI Agent that they have yet to view, promoting timely and responsive interactions.                                            |
| Enable Unread Message Preview         | If you toggle this setting on, the Webchat widget displays a preview bubble containing the newest message from the agent. This is helpful when the chat interface is minimized, as you can still get an idea of the most recent communication without having to open and read through the entire conversation.               |
| Enable Unread Message Sound           | This setting, when turned on, triggers a notification sound every time you receive a new unread message.                                                                                                                                                                                                                     |

### Conversation Rating Settings

The Conversation Rating settings offer a chat rating widget where users can rate their experience and provide feedback.
You can customize text prompts and confirmation messages ensuring a user-friendly feedback process.

| Parameter                    | Description                                                                                                                                                                                                                                                                                |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enable Rating Functionality  | Activating this feature introduces a conversation rating mechanism in the chat options page, letting users rate and provide feedback on their chat experience. By enabling this feature, you can gather direct user feedback to continually improve the AI chat assistant's effectiveness. |
| Rating Title Text            | This setting allows you to specify the text that would invite users to rate their chat experience.                                                                                                                                                                                         |
| Rating Comment Text          | The text is displayed above the comment field in the rating dialog prompt.                                                                                                                                                                                                                 |
| Message History Rating Text  | The text is displayed in the message history after giving a rating. A text is followed by the icon representing the rating.                                                                                                                                                                |
| Message History Comment Text | The text is displayed in the message history after giving a rating, if there was a comment sent. A text is followed by the actual comment.                                                                                                                                                 |

### Demo Webchat Settings

The Cognigy Demo Webchat lets you test integrations with different providers and preview your webchat's appearance before deployment. It's a valuable tool for ensuring your webchat functions and looks as expected prior to launch.
For more information on how to use this feature, refer to [Demo Webchat](../demo.md).

### Business Hours

The Business Hours settings offer management of business hours in Webchat. They allow you to restrict Webchat availability by specifying behavior outside business hours, customize messages, set the timezone, and define operational days.

| Parameter                        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enable Business Hours            | When this setting is enabled, the Webchat widget will be available only during the specified business hours. This ensures users that support or assistance through live chat is available during those hours. If a user attempts to engage in chat outside of these hours, you can choose what appears: the Webchat widget can be hidden, disabled, or present a message informing the user about the non-business hours. This allows companies to effectively manage their customer support and align with their operational timings.                                             |
| Business Hours Mode              | Select the behavior if the bot is called out of business hours. Choose one of the following modes:<br>- **Inform users about calling out of business hours** — users will receive a message in the Webchat interface informing them that they are contacting the bot outside of business hours.<br>- **Hide the Webchat Widget** — the chat widget will be completely hidden from users outside of business hours.<br>- **Disable the Webchat Widget** — the chat widget will be visible but disabled, preventing users from interacting with the bot until business hours resume. |
| Business Hours Information Text  | The parameter is applicable to the following modes: **Inform users about calling out of business hours** and **Disable the Webchat Widget**. The text that will be displayed to users during out-of-business hours.                                                                                                                                                                                                                                                                                                                                                                |
| Business Hours Information Title | The parameter is applicable to **Inform users about calling out of business hours** mode. The title that will be displayed to users during out-of-business hours.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Timezone                         | The timezone used to calculate the office hours offset.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Start Time                       | Indicates the beginning of the bot's availability each day.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| End Time                         | Indicates the end of the bot's availability each day.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Day of the Week                  | Indicates the operational days for the bot.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### Maintenance

The Maintenance settings offer activating maintenance mode in a chat service, including notification, disabling, or hiding options. It also allows for the customization of maintenance-related messages displayed to users.

| Parameter                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enable Maintenance            | Activating this option will place the chat endpoint into maintenance mode. This setting is ideal for performing updates, testing new features, or conducting behind-the-scenes work without affecting the user experience.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Maintenance Mode              | Select the behavior of the maintenance mode:<br> - **Inform Users About Maintenance Mode** — keeps the chat visible, displaying a custom message about the maintenance. Best for transparency with users, maintaining engagement without full service.<br>- **Disable the Webchat Widget** — removes the chat interface from the site or app during maintenance. Best for major updates where functionality could be impacted, avoiding user confusion.<br>- **Hide the Webchat Widget** — temporarily hides the chat widget, allowing for quick accessibility post-maintenance without a page reload. Best for short or frequent maintenance periods for a quick return to functionality. |
| Maintenance Information Text  | This parameter is applicable to modes: **Inform users about maintenance mode** and **Disable the Webchat Widget**.<br>The text that will be displayed to users during Maintenance Mode. It allows for a customizable message to inform users about the maintenance activity or any other relevant information.                                                                                                                                                                                                                                                                                                                                                                             |
| Maintenance Information Title | This parameter is applicable to **Inform users about maintenance mode**.<br>The title that will be displayed to users during Maintenance Mode. It's used to briefly describe the nature of the maintenance or to provide a succinct message to the users.                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### Webchat Custom Settings

The Webchat Custom settings let you adjust the appearance and behavior of a webchat beyond the standard options.
You can use JSON format for customizations. Note that if the JSON is wrong, the Webchat widget might crash.

## More Information

- [Cognigy Webchat](overview.md)
- [Webchat Features ](features.md)
- [Webchat Plugins ](../plugins.md)
- [Demo Page](../demo.md)