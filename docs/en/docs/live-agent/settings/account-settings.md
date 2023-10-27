---
title: "Account Settings"
slug: "account-settings" 
description: "Account Settings in Cognigy Live Agent refer to the configuration options that allow administrators to customize and manage global settings for the Live Agent instance."
hidden: false 
---

# Account Settings

Only users having **Administrator** role have access to the **Account Settings**. To open the **Account Settings** in Live Agent, do the following:

1. Open your Live Agent interface.
2. Click **Settings** in the left-side menu of Live Agent interface to open a selection list.
3. Click **Account Settings**. The Acount Settings page will be displayed.

In the Account Settings page you can configure following settings:

- [General Settings](#general-settings)
- [Agent Assist Workspace](#agent-assist-workspace)
- [Notifications](#notifications)
- [Account ID](#account-id)

<figure>
<img src="{{config.site_url}}live-agent/images/LA_Account_Settings_1.png" width="100%" alt="Live Agent Account Settings 1" />
  <figcaption></figcaption>
</figure>

<figure>
<img src="{{config.site_url}}live-agent/images/LA_Account_Settings_2.png" width="100%" alt="Live Agent Account Settings 2" />
  <figcaption></figcaption>
</figure>

## General Settings

You can change the general settings for an account, such as name and language and conversation logic. 

### Account Name

The name is the name of your account. When a user exists in multiple accounts, the name will be displayed to know in which account the user is logged in.

### Site Language

The language is the language of your account. You can select available languages in a drop-down list when clicking on the language field.

### Conversation Limit per Agent

The conversation limit per agent is the maximum number of conversations that a human agent can handle simultaneously. If all the agents reach the limit in an Inbox, new conversations will be unassigned, waiting for new agents to pick them up when their capacity decreases. The conversation limit applies to the total number of conversations across all inboxes.

For example, the human agent is assigned to inboxes A and B, and the conversation limit is set to 2. In this case, the agent can handle two conversations simultaneously, regardless of the inbox they belong to.

To set up a conversation limit per agent, follow these steps:

1. Go to **Settings > Account Settings**.
2. On the **Account Settings** page, go to the **General Settings** section.
3. Activate the **Set conversation limit for agents** option.
4. In the **Max number of conversations per agent** field, specify the desired limit for agents.
5. In the upper-right corner, click **Update Settings**.

The limit will be applied to all Inboxes.

If you want to remove the limit, activate the **No conversation limit for agents** and click **Update Settings**.

### Auto Set Away

<figure>
<img src="{{config.site_url}}live-agent/images/LA-account-settings-auto-set-away.png" width="100%" alt="Live Agent Account Settings" />
  <figcaption>Account Settings Auto Set Away</figcaption>
</figure>

The Auto Set Away option is used to automatically set the agent as away when the agent is not active. This means the agent is not performing any action into the browser window while it is opened. 
When the user performs an action, it will be set back to online state automatically.

>Note: This does not work if the Live Agent is closed. In this case, the user is set to offline automatically when the browser window is closed.

### Attachment TTL

<figure>
<img src="{{config.site_url}}live-agent/images/LA-account-settings-attachment-ttl.png" width="100%" alt="Live Agent Account Settings" />
  <figcaption>Account Settings Attachment TTL</figcaption>
</figure>

The Attachment TT option automatically deletes the attachments in messages of all the account conversations after a specific time. The time is set in the past days. It is disabled by default.

### Auto Resolve

<figure>
<img src="{{config.site_url}}live-agent/images/LA-account-settings-auto-resolve.png" width="100%" alt="Live Agent Account Settings" />
  <figcaption>Account Settings Auto Resolve</figcaption>
</figure>

### Auto Resolve Duration

The Auto Resolve Duration option automatically resolves the conversation after a certain number of hours.

### Auto Resolve Action

The Auto Resolve Action option is used to resolve or abandon a conversation automatically. If the Auto Resolve Action option is set to **Resolve**, the conversation will be resolved. 
If the **Auto Resolve Action** option is set to **Abandon**, the conversation will be abandoned. Filters can be applied based on these statuses.

### Automatically Delete Resolved Conversations

<figure>
<img src="{{config.site_url}}live-agent/images/LA-automatically-remove-resolved-conversations.png" width="100%" alt="Live Agent Delete Resolved Conversations" />
  <figcaption>Account Settings Automatically Delete Resolved Conversations</figcaption>
</figure>

When the checkbox for automatically deleting resolved conversations is marked, the conversations marked as resolved will be automatically deleted. This includes the existing ones as per the warning message.

### Auto Assign Conversations to a Busy Agent

[![Version badge](https://img.shields.io/badge/Added in-v4.53-blue.svg)](../../release-notes/4.53.md)

By default, you can manually assign conversations to human agents if they are busy.

To automate this process, you can activate the **Assign conversation to a busy agent** setting. 

-----------------------------

## Agent Assist Workspace

Cognigy provides three Live Agents assistance tools for giving Live Agents support in their service conversations:

1. [Assist Bots](../conversation/assist-bot.md)
2. [LA Agent Assist](../../ai/handover-providers/la-agent-assist-overview.md)
3. [LA Agent Assist Workspace](../../ai/handover-providers/la-agent-assist-workspace-setup.md) 

Cognigy's **Agent Assist Workspace** offers the greatest variety of advanced features compared to the other assistants, enabling agents to provide faster and more accurate customer support. The workspace is fully customizable with widgets that display the most relevant information for any chat and voice use case. When embedded into your contact center's Agent desktop, it enhances the overall efficiency of your contact center.

In the **Account Settings** of the Live Agent interface an administrator can **Enable** the **Agent Assist Workspace**.
If an administrator has already preset the Agent Assist Workspace settings in the **Account Settings** of the Live Agent interface, this setting  will take precedence over the individual agent profile settings. In this case a Live Agent is not able to change **Agent Assist Workspace** settings.

Before you can enable **Agent Assist Workspace**** as a preset for all Live Agents you need to click the tick box **Enable overriding Agent Assist Workspace preferences**, to enable the selection.
The configuration set here applies as a preset to all Live Agents of your organization account and overrides the Agent [Profile settings](../profile-settings.md#notifications).

For more information, read the following documentation:

  - [Agent Assist Workspace Setup](../../agent-assist/overview.md)
  - [LA Agent Assist](../../ai/handover-providers/la-agent-assist-workspace-setup.md)
  - [Notifications](../notifications.md)

## Notifications

[![Version badge](https://img.shields.io/badge/Added in-v4.45-blue.svg)](../../release-notes/4.45.md)

{! _includes/live-agent/push-notifications.md !}

In Live Agent, you can configure email and push notifications, and also add audio alerts for certain types of actions that trigger notifications.

As a user, having **Administrator** role, you can configure **Push Notification** and **Email Notifications** for the following events:

- When a new conversation is created.
- When a conversation is assigned to you.
- When you are mentioned in conversation.
- When a new message is created in an assigned conversation.

Before selecting one or more notification event options as a preset for all Live Agents you need to click the tick box "Enable overriding email notification preferences", to enable the event options for selecting.
The configuration set here applies to all Live Agents of your organization account and overrides the Agent [Profile settings](../profile-settings.md#notifications).

For more information, read the [Notifications](../notifications.md) documentation.

## Account ID

The Account ID, which is indicated here in the Account Settings, is the unique identifier of your account. It is used in the Live Agent URLs to identify which account is accessed. This ID is required if you are building an API based integration.

To find the Account ID in the Live Agent URL of your Live Agent **Inbox**, follow these steps:

1. Open your Live Agent Account and go to **Settings > Inboxes**. 
2. In the Inboxes list, find the Inbox of your project, and click the Settings icon next to the Inbox. 
3. The Inbox settings will be displayed, and you will see the address line of your browser as follows: `https://liveagent-<your-environment>/app/accounts/<account-id>/settings/inboxes/<inbox-id>`. For example, in the URL `https://liveagent-dev.cognigy.ai/app/accounts/2/settings/inboxes/32852`, the Account ID is 2.

<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA_Inbox_URL.png" width="80%">
</figure>

For example, once you have found the account ID, you can enter the Account ID in the [Handover Settings](../../getting-started/live-agent-setup/live-agent-setup-handover-endpoint/#handover-to-manually-configured-live-agent) of your Endpoint in Cognigy.AI, to enable handover a customer conversation with your **Virtual Agent** to a **Human Agent** support.

## Version

The version is the version of the Cognigy Live Agent running. To check the features and fixes for each version, head over to [Release Notes](../../release-notes/release-notes.md)

## More information

- [User Roles](../roles.md)
- [Profile Settings](../profile-settings.md)
- [Agent Assist Workspace](../../agent-assist/overview.md)
- [Notifications](../notifications.md)
- [Using the API]({{config.site_url}}ai/developer-guides/using-api/)
