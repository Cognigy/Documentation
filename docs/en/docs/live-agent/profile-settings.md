---
title: "Profile Settings" 
slug: "profile-settings" 
hidden: false 
---

# Profile Settings

Each user in Live Agent has a profile. To individualize profile settings, you can edit your avatar and name, which are seen by other Live Agent users,
as well as customize certain system settings for yourself, such as receiving notifications or managing hotkeys.

To open the **Profile Settings** in Live Agent, do the following:

1. Open your Live Agent interface.
2. Click **Profile Settings** icon in the bottom left corner of the Live Agent interface to open a drop-down list.
3. Click ![Profile Settings](../../assets/icons/user-menu.svg) **Profile Settings** in the drop-down list. The Profile Settings page will be displayed.

In the Profile Settings page you can configure following settings:

- [User Profile Appearance](#user-profile-appearance)
- [Notifications](#notifications)
- [Agent Assist Workspace](#agent-assist-workspace)
- [Hotkey to send messages](#hotkey-to-send-messages)
- [API Access Token](#api-access-token)

<figure>
<img src="{{config.site_url}}live-agent/images/LA_Profile_Settings.png" width="100%" alt="Live Agent Profile Profile " />
  <figcaption>Profile Settings</figcaption>
</figure>

## User Profile Appearance

To individualize profile settings
In this section, the user profile data can be changed.
Currently, users can customize the profile image and the display name.



| Field         | Description                                                                                                                                                                |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Profile image | It is displayed in the agent conversation, agent lists and profile menu                                                                                                    |
| Display name  | Currently, it is used for the conversation transcript that the agent can send by email. Transcript messages sent by the agent will use the display name as the sender name |

The rest of the user data, such as email, full name and password, need to be updated in the Cognigy.AI account. The change will automatically apply to Live Agent.

## Notifications

[![Version badge](https://img.shields.io/badge/Updated in-v4.45-blue.svg)](../release-notes/4.45.md)

{! _includes/live-agent/push-notifications.md !}

!!! note
    The email and push notification settings in the [Account Settings](#configure-notifications-at-the-account-level) will take precedence over the Profile Settings.
    If the administrator has not yet changed the push and email notification settings, a Live Agent still has the opportunity to change them in the Profile Settings.

In Live Agent, you can configure email and push notifications, and audio alerts for certain types of actions that trigger notifications.

The behavior of notifications can be configured in several ways:

1. Notifications can be configured in the **Account Settings** only by users with **Administrator** role. Settings done here overrides settings in the **Profile Settings**.

2. Notifications can be configured in Live Agents **Profile Settings** by users with **Agent, Adminsitrator and Supervisor** roles. If the administrator has not yet changed the audio, push and email notification settings, these users still have the opportunity to configure notifications in the Profile Settings.

For more information about notificaton settings, read the  [Account settings](settings/account-settings.md#notifications) and [Notifications](notifications .md#configure-notifications-at-the-user-profile-level) documentation.

## Agent Assist Workspace




Cognigy Agent Assist Workspace offers a variety of advanced features that empower agents to provide faster and more accurate customer support. The workspace is fully customizable with widgets that display the most relevant information for any chat and voice use case. When embedded into your contact center's agent desktop, it enhances the overall efficiency of your contact center.

### Key Features¶

- Displays completely interactive micro applications in a customizable grid.
- Adds rich-media capabilities to any contact center stack.
- Stand-alone or integrated into existing contact center agent desktops.
- Shows any type of information like PDFs or even interactive 3D animations.
- Access to 100% of Cognigy.AI features, including Extensions and extensive logic.
------
LA Agent Assist
LA Agent Assist allows human agents using Cognigy Live Agent to be assisted by AI-powered Virtual Agents when conversing with the customer. Using this functionality, during an active handover, fully configurable Virtual Agent messages can be displayed to the human agent based on customer messages to best assist the customer.

With Agent Assist, among other things, the following can be achieved:

Provide contextual information for the Agent (CRM records, ERP data, small talk clues, etc.)
Allow quick access to resources such as knowledge base articles
Suggest replies (including media) which can be forwarded to the customer
Using Cognigy.AI, you can customize Agent Assist to be as powerful as you need it to be.

To set up your Project for Agent Assist, you can choose the installation that best suits your requirements:

LA Agent Assist.
LA Agent Assist Workspace.
For more information, read the LA Agent Assist  documentation.
-------

For more information, read the [Agent Assist Workspace](../../agent-assist/overview/) documentation and [LA Agent Assist](../../ai/handover-providers/la-agent-assist-overview/) documentation.


## Hotkey to send messages

[![Version badge](https://img.shields.io/badge/Added in-v4.59-blue.svg)](../release-notes/4.59.md)

To send messages in the [conversation chat](conversation/conversation-workflow.md), you can select one of the following hotkey options:

- **None** — send messages by clicking the **Send** button. The ++enter++ key will be used for line breaks.
- **Enter (↵)** — send messages by pressing the ++enter++ key instead of clicking the **Send** button. The ++shift+enter++ key combination will be used for line breaks.
- **Cmd/Ctrl + Enter (⌘ + ↵)** — send messages by pressing ++cmd+enter++ or ++ctrl+enter++ instead of clicking the **Send** button. This option is selected by default. The ++enter++ key will be used for line breaks.

## API Access Token

The Access Token, displayed here, is used for the Live Agent API and contains authentication and authorization information for a user, and its actions are limited by the user role.

### Definition of Access Token
"Access tokens are used in token-based authentication to allow an application to access an API.
Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. The passed token informs the API that the bearer of the token has been authorized to access the API and perform specific actions specified by the Scope that was granted during authorization."(source: 'https://auth0.com/docs/secure/tokens/access-tokens').

## More information

- [User Roles](roles.md)
