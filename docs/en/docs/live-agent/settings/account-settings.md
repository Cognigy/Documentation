---
title: "Account Settings"
slug: "account-settings" 
description: "Account Settings in Cognigy Live Agent refer to the configuration options that allow administrators to customize and manage global settings for the Live Agent instance."
hidden: false 
---

# Account Settings

_Account settings_ control the administration and optimization of Live Agent functionality within an organization.

Only users having the **Administrator** role have access to the **Account Settings**. 

There are the following settings available within the account:

- [General Settings](#general-settings)
- [AI Copilot](#ai-copilot)
- [Notifications](#notifications)

Additionally, you can copy an [Account ID](#account-id) and check a [current version](#version) of your Live Agent installation.

## General Settings

You can change the general settings for an account, including its name, language, and conversation workflow.

### Account Name

The name serves as the identifier and authentication for legal access to your organization's account. It will always be displayed to indicate the registered account.

### Site Language

The language represents the preferred site language for your organization's account. You can select one from the available options in a drop-down list by clicking on the language field.

### Conversation Limit per Agent

The conversation limit per human agent is the maximum number of conversations that a human agent can handle simultaneously. If a human agent reaches the limit in any Inbox, new conversations will remain unassigned, awaiting pickup by other human agents when their capacity utilization decreases. The conversation limit applies to the total number of conversations across all Inboxes.

For example, the human agent is assigned to Inboxes A and B, and the conversation limit is set to 2.
In this case, the human agent can handle two conversations simultaneously, regardless of the Inbox they belong to.

To set up a conversation limit per Agent, follow these steps:

1. Go to **Settings > Account Settings**.
2. On the **Account Settings** page, go to the **General Settings** section.
3. Activate the **Set conversation limit for agents** option.
4. In the **Max number of conversations per agent** field, specify the desired limit for agents.
5. In the upper-right corner, click **Update Settings**.

The limit will be applied to the account.

If you want to remove the limit, activate the **No conversation limit for agents** and click **Update Settings**.

### Auto Set Away

The **Auto Set Away** option is used to automatically set the human agent as away when they are not active after the amount of time in minutes specified.
This means the agent is not performing any action in the browser window while it is opened. 
When the agent performs an action, it will be set back to online state automatically.

- Click **Disable Auto Set Away**, in case you do not want to use this option.
- Click **Enable Auto Set Away for agents availability** and enter the number of minutes in a separate field. After the specified time, the agent will then automatically switch to the `Away` status.

!!! note
    This setting does not work if the Live Agent interface is closed. In this case, the user is set to offline automatically when the browser window is closed.

### TTL for Attachments

The **TTL for Attachment** option automatically deletes the attachments in messages of all conversations in the account after a specific time.

- Click **Disable TTL for attachments**, in case you do not want to use this option.
- Click **Enable TTL for attachments** and enter the number of days in a separate field. Afterward, the attachments will be deleted.  

### Auto Resolve Conversations

#### Auto Resolve Duration

The Auto Resolve Duration option automatically resolves the conversation after a certain number of minutes. After that time, you can assume that the customer's problem is solved, and the conversation can be closed.

- Click **Do not automatically resolve conversations**, in case you do not want to use this option.
- Click **Automatically resolve conversations if there is no activity** and enter the number of minutes in a separate field. After this period, the conversation should auto-resolve if there is no activity. 

#### Auto Resolve Action

The **Auto Resolve Action** option resolves or abandons a conversation automatically after the set **Auto Resolve Duration** has expired.

You can set two options using the drop-down list:

- Select **Resolve** to resolve a conversation. The conversation will be closed because the user request is treated as resolved. 
- Select **Abandon** to abandon a conversation. The conversation will be closed because the user or the agent left the conversation. 

The selected action will start if the conversation did not get any customer reply, agent replay or shows other activity after the set resolve duration. You can set filters based on these statuses.

### Automatically Delete Resolved Conversations

When conversations are resolved, you can delete them. 
To automate this process, activate the **Automatically delete conversations when they are resolved** setting.
When the setting is activated, conversations marked as resolved will be automatically deleted.
Note that this action will also delete all conversations that have already been resolved.

### Enable Agent Masking

Activating the **Enable Agent masking** setting masks all agent personal information,
such as name, email, and profile images.
For example, the agent name "Max Mustermann" would turn into "Agent x4gH5tZ".
Only the agent himself can see the clear name himself.
No one in your organization and of course,
no customer can connect the arbitrary masked name with a real human agent's name.

### Auto-Assign Conversations to a Busy Agent

[![Version badge](https://img.shields.io/badge/Added in-v4.53-blue.svg)](../../release-notes/4.53.md)

By default, you can manually assign conversations to any human agents regardless of their status
(online, offline, away, busy).
When this setting is activated, the system can automatically assign incoming conversations to an agent,
even if the agent is busy and engaged in another conversation.
By default, only online agents are considered.

## AI Copilot

Cognigy AI Copilot offers the most comprehensive functions compared to the other assistants, enabling human agents to provide faster and more accurate customer support. The workspace is fully customizable with widgets that display the most relevant information for any chat and voice use case. When embedded into your contact center, it enhances the overall efficiency of your contact center.
 
In the **Account Settings**, administrators can activate AI Copilot if [it has been installed previously](../../ai-copilot/getting-started.md).

If an administrator has already preset the **AI Copilot Workspace** setting in the **Account Settings**,
this setting will take precedence over the user profile settings.

Before you can enable **AI Copilot Workspace** for all human agents,
activate the **Enable overriding AI Copilot preferences** setting.
The configuration set here applies as a preset to all human agents of your organization account and overrides the human agent [Profile settings](../profile-settings.md#notifications).

## Notifications

[![Version badge](https://img.shields.io/badge/Added in-v4.45-blue.svg)](../../release-notes/4.45.md)

In Live Agent, you can configure email and push notifications, and also add audio alerts for certain types of actions that trigger notifications.

{! _includes/live-agent/push-notifications.md !}

As a user, having the **Administrator** role, you can configure **Push Notifications** and **Email Notifications** for the following events:

- When a new conversation is created.
- When a conversation is assigned to you.
- When you are mentioned in conversation.
- When a new message is created in an assigned conversation.

Before selecting one or more notification event options as a preset for all human agents,
activate the **Enable overriding email notification preferences** setting
to enable the event options for selecting.
The configuration set here applies to all human agents of your organization account and overrides the ones of the individual agent [Profile settings](../profile-settings.md#notifications).

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

For example, once you have found the account ID,
you can enter the Account ID in the [Handover Settings](../getting-started/live-agent-setup/live-agent-setup-handover-endpoint.md#handover-to-manually-configured-live-agent) of your Endpoint in Cognigy.AI,
to enable the handover of a customer conversation with your virtual agent to a human agent for support.

## Version

The indicated version is the current version of the Cognigy Live Agent interface. To check the features and fixes for each version, head over to [Release Notes](../../release-notes/release-notes.md).

## More information

- [User Roles](../roles.md)
- [Profile Settings](../profile-settings.md)
- [AI Copilot](../assistants/ai-copilot.md)
- [Notifications](../notifications.md)