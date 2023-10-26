---
title: "Profile Settings" 
slug: "profile-settings" 
hidden: false 
---

# Profile Settings

Each user in Live Agent has a profile. To individualize profile settings, you can individualize your profile settings, edit your profile image and display name, which will be displayed in conversations.
It is also possible to customize certain system settings for yourself, such as receiving notifications, managing hotkeys and enabling **Agent Assist Workspace**.

To open the **Profile Settings** in Live Agent, do the following:

1. Open your Live Agent interface.
2. Click **Profile Settings** icon in the bottom left corner of the Live Agent interface to open a drop-down list.
3. Click **Profile Settings** in the drop-down list. The Profile Settings page will be displayed.

In the Profile Settings page you can configure following settings:

- [User Profile Appearance](#user-profile-appearance)
- [Notifications](#notifications)
- [Agent Assist Workspace](#agent-assist-workspace)
- [Hotkey to send messages](#hotkey-to-send-messages)
- [API Access Token](#api-access-token)

<figure>
<img src="{{config.site_url}}live-agent/images/LA_Profile_Settings.png" width="100%" alt="Live Agent Profile Profile " />
  <figcaption></figcaption>
</figure>

## User Profile Appearance

To individualize profile settings, you can edit your profile image and display name, which will be displayed in conversations.

| Field         | Description                                                                                                                                                                |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Profile image | The image will be displayed in Agent conversations, Agent lists and profile menu                                                                                                    |
| Display name  | This name will be displayed  in Agent conversations and is used as sender name when Agents send conversation transcripts in emails.  |

The other user data, such as email address, full name and password, need to be updated in the Cognigy.AI account. The changes will automatically apply to Live Agent.

## Notifications

[![Version badge](https://img.shields.io/badge/Updated in-v4.45-blue.svg)](../release-notes/4.45.md)

{! _includes/live-agent/push-notifications.md !}

!!! note
    The email and push notification settings in the [Account Settings](notifications.md#configure-notifications-at-the-account-level) will take precedence over the Profile Settings.
    If the administrator has not yet changed the push and email notification settings, a Live Agent still has the opportunity to change them in the Profile Settings.

In Live Agent, you can configure email and push notifications, and audio alerts for certain types of actions that trigger notifications.

The behavior of notifications can be configured in several ways:

1. Notifications can be configured in the **Account Settings** only by users with **Administrator** role. Settings done here overrides settings in the **Profile Settings**.

2. Notifications can be configured in Live Agents **Profile Settings** by users with **Agent, Adminsitrator and Supervisor** roles. If the administrator has not yet changed the push and email notification settings, these users still have the opportunity to configure notifications in the Profile Settings.

For more information, read the  [Account settings](settings/account-settings.md#notifications) and [Notifications](notifications.md#configure-notifications-at-the-user-profile-level) documentation.

## Agent Assist Workspace

Cognigy **Agent Assist Workspace** offers a variety of advanced features that empower Agents to provide faster and more accurate customer support. The workspace is fully customizable with widgets that display the most relevant information for any chat and voice use case. When embedded into your contact center's Agent desktop, it enhances the overall efficiency of your contact center.

In the **Profile Settings** of the Live Agent interface an Agent can **Enable** or **Disable** the **Agent Assist Workspace**.
If an administrator has already preset the Agent Assist Workspace settings in the **Account Settings** of the Live Agent interface, this setting  will take precedence over the individual agent profile settings. In this case a Live Agent is not able to change **Agent Assist Workspace** settings.

For more information, read the [Agent Assist Workspace](../../agent-assist/overview/) and [LA Agent Assist](../../ai/handover-providers/la-agent-assist-overview/) documentation.

## Hotkey to send messages

[![Version badge](https://img.shields.io/badge/Added in-v4.59-blue.svg)](../release-notes/4.59.md)

To send messages in the [conversation chat](conversation/conversation-workflow.md), you can select one of the following hotkey options:

- **None** — send messages by clicking the **Send** button. The ++enter++ key will be used for line breaks.
- **Enter (↵)** — send messages by pressing the ++enter++ key instead of clicking the **Send** button. The ++shift+enter++ key combination will be used for line breaks.
- **Cmd/Ctrl + Enter (⌘ + ↵)** — send messages by pressing ++cmd+enter++ or ++ctrl+enter++ instead of clicking the **Send** button. This option is selected by default. The ++enter++ key will be used for line breaks.

## API Access Token

The Access Token, displayed here, is used for the Live Agent API and contains authentication and authorization information for a user, and its actions are limited by the user role.
Using API's opens more opportunities to the user to work with Live Agent.

Application Programming Interface (API) Keys are security tokens registered to a user account. These tokens can be used by external applications to access Cognigy.AI in the same way that a human user would enter their password to log in to the platform. 
API keys inherit the same permissions as the associated user profile, such as Admin, Project Manager, or OData. 

API keys provides authorization to perform requests made available via the [Cognigy Live Agent API reference](https://liveagent-trial.cognigy.ai/openapi) site. 

- How to Get an API Key, read [Get an API Key](../agent-assist\getting-started.md#get-an-api-key) documentation.

- How to work with API's, read the [Using the API]({{config.site_url}}ai/developer-guides/using-api/) documentation.

## More information

- [User Roles](roles.md)
- [Agent Assist Workspace](../../agent-assist/overview/)