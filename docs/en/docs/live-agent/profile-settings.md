---
 title: "Profile Settings" 
 slug: "profile-settings" 
 hidden: false 
---
# Profile Settings

Basic settings for the user profile can be changed or updated.

Click on the profile thumbnail in the bottom left-hand side of the screen, next click on **Profile Settings**.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-profile-settings-menu.png" width="100%" alt="Live Agent Profile  Menu" />
  <figcaption>Profile Menu</figcaption>
</figure>

## User Profile data

In this section, the user profile data can be changed.
Currently, user can customize the profile image and the display name.

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
Push and email notifications are moved to [Account settings](account-settings.md#notifications)
and can only be controlled by administrators.
If the administrator has not yet changed the push and email notification settings,
a human agent still has the opportunity to change them in the Profile Settings.

## API Access Token

Here you can also find the user access token.
This is used for the Live Agent API, and its actions are limited by the user role.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-profile-settings-access-token-section.png" width="100%" alt="Live Agent Profile Access Token " />
  <figcaption>Access Token</figcaption>
</figure>
