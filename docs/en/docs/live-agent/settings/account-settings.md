---
title: "Account Settings"
slug: "account-settings" 
description: "Account Settings in Cognigy Live Agent refer to the configuration options that allow administrators to customize and manage global settings for the Live Agent instance."
hidden: false 
---

# Account Settings

_Account settings_ control the administration and optimization of Live Agent functionality within an organization.

Only users having the **Administrator** role have access to the **Account Settings**. 

In the Account Settings page, you can configure the following:

- [General Settings](#general-settings)
- [AI Copilot](#agent-assist-workspace)
- [Notifications](#notifications)
- [Account ID](#account-id)

## General Settings

You can change the general settings for an account, including its name, language, and conversation logic.

### Account Name

The name serves as the identifier and authentication for legal access to your organization's account. It will always be displayed to indicate the registered account.

### Site Language

The language represents the preferred site language for your organization's account. You can select one from the available options in a drop-down list by clicking on the language field.

### Conversation Limit per Agent

The conversation limit per human agent is the maximum number of conversations
that a human agent can handle simultaneously.
If all the human agent reaches the limit in an Inbox, new conversations will be unassigned,
waiting for new human agents to pick them up when their capacity utilization decreases.
The conversation limit applies to the total number of conversations across all Inboxes.

For example, the human agent is assigned to Inboxes A and B, and the conversation limit is set to 2.
In this case, the human agent can handle two conversations simultaneously, regardless of the Inbox they belong to.

To set up a conversation limit per Agent, follow these steps:

1. Go to **Settings > Account Settings**.
2. On the **Account Settings** page, go to the **General Settings** section.
3. Activate the **Set conversation limit for agents** option.
4. In the **Max number of conversations per agent** field, specify the desired limit for agents.
5. In the upper-right corner, click **Update Settings**.

The limit will be applied to all Inboxes.

If you want to remove the limit, activate the **No conversation limit for agents** and click **Update Settings**.

### Auto Set Away

The **Auto Set Away** option is used to automatically set the human agent as away when they are not active.
This means the agent is not performing any action into the browser window while it is opened. 
When the user performs an action, it will be set back to online state automatically.

- Click **Disable Auto Set Away**, in case you do not want to use this option.
- Click **Enable Auto Set Away for agents availability** and enter the number of minutes in a separate field, after the agent should come to the `Away` status automatically.  

!!! note
    This setting does not work if the Live Agent interface is closed. In this case, the user is set to offline automatically when the browser window is closed.

### TTL for Attachments

The **TTL for Attachment** option automatically deletes the attachments in messages of all account conversations after a specific time.

- Click **Disable TTL for attachments**, in case you do not want to use this option.
- Click **Enable TTL for attachments** and enter the number of days in a separate field, after the attachments will be deleted.  

### Auto Resolve Conversations

#### Auto Resolve Duration

The Auto Resolve Duration option automatically resolves the conversation after a certain number of hours. After that time, you can assume that the customer's problem is solved, and the conversation can be closed.

- Click **Do not automatically resolve conversations**, in case you do not want to use this option.
- Click **Automatically resolve conversations if there is no activity** and enter the number of minutes in a separate field, after which a conversation should auto-resolve if there is no activity.  

#### Auto Resolve Action

The **Auto Resolve Action** option resolves or abandons a conversation automatically after the set **Auto Resolve Duration** has expired.

You can set two options using the drop-down list:

1. Select **Resolve** to resolve a conversation. The conversation will be closed because the user's request is resolved. 
2. Select **Abandon** to abandon a conversation. The conversation will be closed because the user left the conversation. 

The selected action will start if the conversation did not get any customer reply after the set resolve duration. You can set filters based on these statuses.

### Automatically Delete Resolved Conversations

When conversations are resolved you can delete them. 
To automate this process, activate the **Automatically delete conversations when they are resolved** setting. When activated, the conversations marked as resolved will be automatically deleted. Consider that this will also delete all conversations which have already been resolved!

### Enable Agent Masking

Activating the **Enable Agent masking** setting masks all Agents personal information, such as name, email, and profile images. For example, the Agent name "Max Mustermann" would turn into "Agent x4gH5tZ". Only the Agent himself can see the clear name himself. No one in your organization and of course, no customer can connect the arbitrary masked name with a real human Agent's name.

### Auto-Assign Conversations to a Busy Agent

[![Version badge](https://img.shields.io/badge/Added in-v4.53-blue.svg)](../../release-notes/4.53.md)

By default, you can manually assign conversations to any human Agents regardless of his status (online, offline, away, busy). To automate this process, activate the **Assign conversation to a busy agent** setting. When activated, the option is enabled to auto-assign incoming conversations to an Agent, even the Agent is busy and engaged in another conversation. By defaut only online Agents are considered. 

## AI Copilot

Cognigy AI Copilot offers the most comprehensive functions compared to the other assistants, enabling Agents to provide faster and more accurate customer support. The workspace is fully customizable with widgets that display the most relevant information for any chat and voice use case. When embedded into your contact center's Agent desktop, it enhances the overall efficiency of your contact center.

Administrators can **Enable** the **AI Copilot** in the **Account Settings** of the Live Agent interface.
If an administrator has already preset the Agent Assist Workspace settings in the **Account Settings** of the Live Agent interface, this setting will take precedence over the individual Agent profile settings. In this case, a Live Agent can not change **Agent Assist Workspace** settings.

Before you can enable **AI Copilot** as a preset for all Live Agents,
activate the **Enable overriding Agent Assist Workspace preferences** setting.
The configuration set here applies as a preset to all Live Agents of your organization account and overrides the Agent [Profile settings](../profile-settings.md#notifications).

## Notifications

[![Version badge](https://img.shields.io/badge/Added in-v4.45-blue.svg)](../../release-notes/4.45.md)

In Live Agent, you can configure email and push notifications, and also add audio alerts for certain types of actions that trigger notifications.

{! _includes/live-agent/push-notifications.md !}

As a user, having the **Administrator** role, you can configure **Push Notifications** and **Email Notifications** for the following events:

- When a new conversation is created.
- When a conversation is assigned to you.
- When you are mentioned in conversation.
- When a new message is created in an assigned conversation.

Before selecting one or more notification event options as a preset for all Live Agents you need to click the tick box **Enable overriding email notification preferences**, to enable the event options for selecting.
The configuration set here applies to all Live Agents of your organization account and overrides the Agent [Profile settings](../profile-settings.md#notifications).

For more information, read the [Notifications](../notifications.md) documentation.

## Account ID

The Account ID, which is indicated here in the Account Settings, is the unique identifier of your account.
It is used in the Live Agent URLs to identify which account is accessed.
This ID is necessary when using the Live Agent API.

To find the Account ID alternatively in the Live Agent URL of your Live Agent **Inbox**, follow these steps:

1. Open your Live Agent Account and go to **Settings > Inboxes**. 
2. In the Inboxes list, find the Inbox of your project, and click the **Settings** icon next to the Inbox. 
3. The Inbox settings will be displayed, and you will see the address line of your browser as follows: `https://liveagent-<your-environment>/app/accounts/<account-id>/settings/inboxes/<inbox-id>`. For example, in the URL `https://liveagent-dev.cognigy.ai/app/accounts/2/settings/inboxes/32852`, the Account ID is 2.

<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA_Inbox_URL.png" width="80%">
</figure>

For example, once you have found the account ID, you can enter the Account ID in the [Handover Settings](../../getting-started/live-agent-setup/live-agent-setup-handover-endpoint/#handover-to-manually-configured-live-agent) of your Endpoint in Cognigy.AI, to enable handover a customer conversation with your **Virtual Agent** to a **Human Agent** support.

## Version

The indicated version is the version of the Cognigy Live Agent interface, currently running. To check the features and fixes for each version, head over to [Release Notes](../../release-notes/release-notes.md).

## More information

- [User Roles](../roles.md)
- [Profile Settings](../profile-settings.md)
- [Agent Assist Workspace](../../agent-assist/overview.md)
- [Notifications](../notifications.md)
- [Using the API]({{config.site_url}}ai/developer-guides/using-api/)
