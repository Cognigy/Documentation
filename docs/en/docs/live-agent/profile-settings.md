---
title: "Profile Settings" 
slug: "profile-settings" 
hidden: false 
---

# Profile Settings

Each user in Live Agent has a profile.
In the profile, you can edit your avatar and name, which are seen by other Live Agent users,
as well as customize certain system settings for yourself, such as receiving notifications or managing hotkeys.

To access your profile, in the bottom left corner of the Live Agent interface, click on the profile thumbnail, then select **Profile Settings**.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-profile-settings-menu.png" width="100%" alt="Live Agent Profile  Menu" />
  <figcaption>Profile Menu</figcaption>
</figure>

## User Profile data

In this section, the user profile data can be changed.
Currently, users can customize the profile image and the display name.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-profile-settings-profile.png" width="100%" alt="Live Agent Profile Profile " />
  <figcaption>Profile</figcaption>
</figure>

| Field         | Description                                                                                                                                                                |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Profile image | It is displayed in the agent conversation, agent lists and profile menu                                                                                                    |
| Display name  | Currently, it is used for the conversation transcript that the agent can send by email. Transcript messages sent by the agent will use the display name as the sender name |

The rest of the user data, such as email, full name and password, need to be updated in the Cognigy.AI account. The change will automatically apply to Live Agent.

## Notifications

[![Version badge](https://img.shields.io/badge/Updated in-v4.45-blue.svg)](../release-notes/4.45.md)

{! _includes/live-agent/push-notifications.md !}

You can customize the behavior of notifications.

Starting from Cognigy 4.45, you can configure only Audio Notifications.
Push and email notifications are moved to [Account settings](settings/account-settings.md#notifications)
and can only be controlled by administrators.
If the administrator has not yet changed the push and email notification settings,
a human agent still has the opportunity to change them in the Profile Settings.

## Hotkey to send messages

[![Version badge](https://img.shields.io/badge/Added in-v4.59-blue.svg)](../release-notes/4.59.md)

To send messages in the [conversation chat](conversation/conversation-workflow.md), you can select one of the following hotkey options:

- **None** — send messages by clicking the **Send** button. The ++enter++ key will be used for line breaks.
- **Enter (↵)** — send messages by pressing the ++enter++ key instead of clicking the **Send** button. The ++shift+enter++ key combination will be used for line breaks.
- **Cmd/Ctrl + Enter (⌘ + ↵)** — send messages by pressing ++cmd+enter++ or ++ctrl+enter++ instead of clicking the **Send** button. This option is selected by default. The ++enter++ key will be used for line breaks.

## API Access Token

Here you can also find the user access token.
This is used for the Live Agent API, and its actions are limited by the user role.