---
title: "Profile Settings" 
slug: "profile-settings" 
hidden: false 
---

# Profile Settings

[![Version badge](https://img.shields.io/badge/Updated in-v4.83.1-blue.svg)](../release-notes/4.83.md)

_Profile Settings_ are a set of customizable options and configurations available to individual users within the Live Agent system. These settings include the customization of profile appearance, notification preferences, activation of AI Copilot, configuration of hotkeys for sending messages, and access to API functionality.

To open the **Profile Settings** in Live Agent, do the following:

1. In the bottom-left corner of the Live Agent interface, click **Profile Settings**.
2. In the drop-down list, select **Profile Settings**. The **Profile Settings** page will be displayed.

There are the following settings available within the user profile:

- [User Profile Appearance](#user-profile-appearance)
- [Notifications](#notifications)
- [AI Copilot](#ai-copilot)
- [Hotkey to send messages](#hotkey-to-send-messages)

Additionally, you can copy the [API Token](#api-access-token) to access the [Live Agent API](https://liveagent-trial.cognigy.ai/openapi).

## User Profile Appearance

To personalize your profile settings, you can edit both your profile image and the name that will be displayed in conversations.

| Setting       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Profile image | The image will be displayed in the conversations, agent lists and user profile menu.<br> For [Webchat v3](../webchat/v3/configuration.md#webchat-layout), when the Profile Image is not available, the system will use the value from the **Human Agent Avatar Logo URL** parameter from the **Webchat Layout** section if it is provided. Otherwise, a default human agent icon will be displayed.                                                                                         |
| Display name  | This name will be displayed in the conversations and is used as sender name when human agents send conversation transcripts in emails.<br> For [Webchat v3](../webchat/v3/configuration.md#webchat-layout), when the Display name is not available, the system will use the value from the **Human Agent Avatar Name** parameter from the **Webchat Layout** section if it is provided. Otherwise, the value of the **Name** parameter in the **Webchat Layout** section will be displayed. |

The other user data, such as email address, full name and password, need to be updated in the Cognigy.AI account. The changes will automatically apply to Live Agent.

## Notifications

[![Version badge](https://img.shields.io/badge/Updated in-v4.45-blue.svg)](../release-notes/4.45.md)

In Live Agent, you can configure email and push notifications, and audio alerts for certain types of actions that trigger notifications.

The email and push notification settings in the [Account Settings](notifications.md#configure-notifications-at-the-account-level) will take precedence over the Profile Settings.
If the administrator has not yet changed the push and email notification settings, you can change them in the Profile Settings.

To configure notifications, refer to [Notifications](notifications.md#configure-notifications-at-the-user-profile-level).

## AI Copilot

Cognigy AI Copilot offers a variety of advanced features that empower human agents to provide faster and more accurate customer support. The workspace is fully customizable with widgets that display the most relevant information for any chat and voice use case. When embedded into your contact center, it enhances the overall efficiency of your contact center.

In the **Profile Settings**, a user can activate AI Copilot if [it has been installed previously](../ai-copilot/getting-started.md).

If an administrator has already preset the **AI Copilot Workspace** setting in the **Account Settings**,
this setting will take precedence over the user profile settings.
In this case, a user is not able to change the **AI Copilot Workspace** settings.

For more information, read the [AI Copilot](assistants/ai-copilot.md) and [AI Copilot Whisper](assistants/ai-copilot-whisper.md) documentation.

## Hotkey to send messages

[![Version badge](https://img.shields.io/badge/Added in-v4.59-blue.svg)](../release-notes/4.59.md)

To send messages in the [conversation chat](conversation/overview.md), you can select one of the following hotkey options:

- **None** — send messages by clicking the **Send** button. The ++enter++ key will be used for line breaks.
- **Enter (↵)** — send messages by pressing the ++enter++ key instead of clicking the **Send** button. The ++shift+enter++ key combination will be used for line breaks.
- **Cmd/Ctrl + Enter (⌘ + ↵)** — send messages by pressing ++cmd+enter++ or ++ctrl+enter++ instead of clicking the **Send** button. This option is selected by default. The ++enter++ key will be used for line breaks.

## API Access Token

The displayed Access Token serves as the authentication and authorization key for the [Live Agent API](https://liveagent-trial.cognigy.ai/openapi). It contains information specific to a user, and the actions it enables are restricted by the user's [assigned role](roles.md).

## More Information

- [Account Settings](settings/account-settings.md)
- [User Roles](roles.md)
- [AI Copilot](../ai-copilot/overview.md)