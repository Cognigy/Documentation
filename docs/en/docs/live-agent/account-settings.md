---
 title: "Account Settings"
 slug: "account-settings" 
 hidden: false 
---
# Account Settings

Here the general settings for an account can be changed, such as name and language.

Click on the **Settings** button in the Live Agent Dashboard sidebar.

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/images/LA-dashboard-settings.png"  alt="Live Agent Dashboard Settings" />
  <figcaption>Live Agent Dashboard Settings</figcaption>
</figure>

Click on Account Settings. Now you are on the Account Settings screen.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-account-settings.png" width="100%" alt="Live Agent Account Settings" />
  <figcaption>Account Settings</figcaption>
</figure>

## Name

The name is the name of your account. When a user exists in multiple accounts, the name will be displayed to know in which account the user is logged in.

## Language

The language is the language of your account. All available languages will be displayed in the dropdown.

## Conversation Limit per Agent

<figure>
<img src="{{config.site_url}}live-agent/images/LA-account-settings-conversations-limit-agent.png" width="100%" alt="Live Agent Account Settings" />
  <figcaption>Account Settings Conversation Limit per Agent</figcaption>
</figure>

The conversation limit per agent is the maximum number of conversations an agent can handle simultaneously. If all the agents reach the limit in an inbox, the new conversations will be unassigned, waiting for new agents to pick them up when their capacity decreased. It counts the number of conversations across inboxes.

For example, suppose the agent is assigned to inbox A and B, and the conversation limit is set to 2. In that case, the agent can handle two conversations simultaneously independently of the inbox they belong to.

## Auto Set Away

<figure>
<img src="{{config.site_url}}live-agent/images/LA-account-settings-auto-set-away.png" width="100%" alt="Live Agent Account Settings" />
  <figcaption>Account Settings Auto Set Away</figcaption>
</figure>

The Auto Set Away option is used to automatically set the agent as away when the agent is not active. This means the agent is not performing any action into the browser window while it is opened. When the user perform an action, it will be set back to online state automatically.

>Note: This does not work if the Live Agent is closed. In this case, the user is set to offline automatically when the browser window is closed.

## Attachment TTL

<figure>
<img src="{{config.site_url}}live-agent/images/LA-account-settings-attachment-ttl.png" width="100%" alt="Live Agent Account Settings" />
  <figcaption>Account Settings Attachment TTL</figcaption>
</figure>

The Attachment TT option automatically deletes the attachments in messages of all the account conversations after a specific time. The time is set in days. It is disabled by default.

## Auto Resolve

<figure>
<img src="{{config.site_url}}live-agent/images/LA-account-settings-auto-resolve.png" width="100%" alt="Live Agent Account Settings" />
  <figcaption>Account Settings Auto Resolve</figcaption>
</figure>

### Auto Resolve Duration

The Auto Resolve Duration option automatically resolves the conversation after a certain number of days.

### Auto Resolve Action

The Auto Resolve Action option is used to resolve or abandon a conversation automatically. If the Auto Resolve Action option is set to **Resolve**, the conversation will be resolved. If the Auto Resolve Action option is set to **Abandon**, the conversation will be abandoned. Filters can be applied based on these statuses.

### Automatically Delete Resolved Conversations

<figure>
<img src="{{config.site_url}}live-agent/images/LA-automatically-remove-resolved-conversations.png" width="100%" alt="Live Agent Delete Resolved Conversations" />
  <figcaption>Account Settings Automatically Delete Resolved Conversations</figcaption>
</figure>

When the checkbox for automatically deleting resolved conversations is marked, the conversations marked as resolved will be automatically deleted. This includes the existing ones as per the warning message.

## Notifications

[![Version badge](https://img.shields.io/badge/Added in-v4.45-blue.svg)](../release-notes/4.45.md)

As an administrator, you can configure push and email notifications for the following events:

- When a new conversation is created.
- When a conversation is assigned to you.
- When you are mentioned in conversation.
- When a new message is created in an assigned conversation.

This configuration applies to all human agents of your organization account and overrides the agent [Profile settings](profile-settings.md).

!!! note 
    The push notifications setting must be enabled in the system. Otherwise, they are not available.

## Account ID and Version

<figure>
<img src="{{config.site_url}}live-agent/images/LA-account-settings-account-id-version.png" width="100%" alt="Live Agent Account Settings" />
  <figcaption>Account Settings Account ID and Version</figcaption>
</figure>

### Account ID

The Account ID is the unique identifier of your account. It is used in the Live Agent URLs to identify which account is accessed. For example, a Live Agent URL can be https://liveagent-trial.cognigy.ai/app/accounts/**1**/dashboard where **1** is the Account ID.

### Version

The version is the version of the Cognigy Live Agent running. To check the features and fixes for each version, head over to [Release Notes]({{config.site_url}}live-agent/release-notes/)
