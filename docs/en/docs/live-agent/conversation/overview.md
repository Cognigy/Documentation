---
title: "Overview"
slug: "conversation-overview"
description: "Conversations are chats between a human agent and a customer, initiated by the customer via a messaging application, such as Cognigy Webchat, WhatsApp, Slack, and so on."
hidden: false
---

# Conversations

_Conversations_ are chats between a human agent and a customer, initiated by the customer via a messaging application, such as Cognigy Webchat, WhatsApp, Slack, and so on.
The conversation is handed over to a human agent when the virtual agent cannot assist with a question due to its complexity or lack of information. During the conversation, the human agent may use additional virtual assistants to help answer the question.

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/conversation/images/conversation-panel.png" width="80%" alt="Conversation Page" />
  <figcaption>Conversation Page</figcaption>
</figure>

## Conversation Lifecycle

The conversation lifecycle involves starting a conversation, keeping it open for active engagement, possibly putting it on hold temporarily, and finally closing or resolving it.

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/conversation/images/conversation-statuses.png" width="60%" alt="Live Agent Conversation Statuses" />
  <figcaption>Conversation Statuses</figcaption>
</figure>

Each conversation has statuses that are listed in the table.

| Status    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Opened    | This status indicates that a conversation is handed over to a human agent. The conversation can be opened by a user or reopened by a human agent. From this status, the conversation can transition in the following ways:<br>- Move to `Pending` and `Snoozed` statuses. Can be returned from these inactive statuses to the `Open` status.<br>- Move to `Resolved` or `Abandoned` statuses. If the conversation is marked as resolved or abandoned, it cannot be reopened.<br>                                                                                                                                                                                                                                                                                                      |
| Pending   | This status indicates that a conversation is temporarily paused, awaiting a response from either the customer or a human agent.<br> To mark a conversation as pending, in the upper-right corner of the Conversation page, next to the **Resolve** button, click ![select](https://docs.cognigy.com/live-agent/images/icons/select.svg) ** > Mark as pending**. To reopen the conversation, click **Open**.                                                                                                                                                                                                                                                                                                                                                                           |
| Snoozed   | This status indicates that a conversation is temporarily suspended until a time trigger or customer response trigger was activated.<br>To mark conversation as snoozed, in the upper-right corner of the Conversation page, next to the **Resolve** button, click ![select](https://docs.cognigy.com/live-agent/images/icons/select.svg). Select one of the following trigger options:<br>- **Snooze Until Next Reply** — the issue will be set aside for now, and the status will change to `Open` upon the next customer reply.<br>- **Snooze Until Tomorrow** — the issue will be set aside for now, and the status will change to `Open` the next day.<br>- **Snooze Until Next Week** — the issue will be set aside for now, and the status will change to `Open` next week.<br> |
| Abandoned | The status indicates that a conversation is closed because the user left the conversation.<br>To mark a conversation as abandon, in the top right corner of the Conversation page, click **Resolve** and select ![select](https://docs.cognigy.com/live-agent/images/icons/select.svg) **> Abandon and resolve**. Once a conversation is marked as abandoned, its state cannot be changed back to open or pending.<br> Agents with the `Administrator` role can activate the following options in the [Account Settings](../settings/account-settings.md):<br>- Automatically abandon conversations.<br>- Automatically delete abandoned conversations.                                                                                                                               |
| Resolved  | This status indicates that a conversation is closed because the user's problem has been fixed.<br> To mark a conversation as resolved, in the upper-right corner of the Conversation page, click **Resolve**. Once a conversation is marked as resolved, its state cannot be changed back to open or pending.<br>Agents with the `Administrator` role can activate the following settings in the [Account Settings](../settings/account-settings.md).<br>- Automatically resolve conversations.<br>- Automatically delete conversations that were resolved.<br>                                                                                                                                                                                                                       |

Conversations can be [selected and filtered by their statuses](search-and-filter.md) within the Conversation page.

## Conversation Assignment Statuses 

When a conversation appears in the Live Agent status in the `Open` status, the conversation can have one of the following assignment statuses:

- **Unassigned** — you can assign conversations to a human agent manually, or these conversations will be assigned rule based automatically when automatically assignment is enabled in the [Account Settings](../settings/account-settings.md) by an administrator.
- **Assigned** — you can assign conversations to a human agent manually or incoming conversations will be assigned rule based automatically when automatically assignment is enabled in the [Account Settings](../settings/account-settings.md) by an administrator.

## Conversation Details 

When a conversation is selected, conversation details will be displayed on the right side of the Live Agent interface.
These details include the following conversation information: 

- [User Profile Details](#user-profile-details)
- [Conversation Actions](#conversation-actions)
- [Conversation Information](#conversation-information)

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/conversation/images/conversation-details.png" width="80%" alt="Live Agent Conversation Details" />
  <figcaption>Conversation Details</figcaption>
</figure>

### User Profile Details

The following table lists all user items that can be edited and stored as metadata.

| User Profile Data     | Description                                          |
|-----------------------|------------------------------------------------------|
| Email Address         | User's email address.                                |
| First Name            | User's first name.                                   |
| Last Name             | User's last name.                                    |
| Age                   | User's age.                                          |
| Birthday              | User's birthday.                                     |
| Gender                | User's gender.                                       |
| Location              | User's location.                                     | 
| Profile Picture       | When available, the URL address of a user's picture. |
| Accepted GDPR         | User accepted European privacy law: Yes/No           |
| Goals                 | The user's intention or task.                        |

To edit profile data click ![edit](../../assets/icons/edit.svg), enter data and confirm with **Submit**. 

### Conversation Actions

Within a conversation in Live Agent, a human agent can do the following:

- Assign other agents to the selected conversation.
- Assign a group of agents defined in a team.
- Define the priority for handling the customer's request in the conversation.
- Assign one or more labels to make the overview of the listed conversations easier for the agent at a glance.

For more information on these details, read the [Assign Conversations](assign-conversations.md) documentation.

### Conversation Information

Conversation information includes the following details: 

- **Cognigy Session ID** — a unique identifier associated with a session in the Cognigy platform. In the context of Cognigy.AI and the Live Agent interface, a session refers to the collection of user inputs and agent replies within a conversation.
- **Channel Type** — a messaging platform through which users can interact with the virtual agent. Each channel is associated with one or more Cognigy Endpoints, allowing users to communicate with the virtual agent through various interfaces. Cognigy channels include platforms like Webchat, Facebook Messenger, Slack, WhatsApp, and other messaging or communication platforms.
- **Cognigy User ID** — a unique identifier for authorized access to Cognigy.AI and Live Agent.

To copy this information, click ![copy](../../assets/icons/copy.svg) next to the item.

### Previous Conversations

After a conversation has been marked as resolved, the next time the same customer starts a new conversation, the previous conversation associated with this customer will be shown in the Previous Conversations menu. 
This will help the agent understand the history of the customer's issue.

## Assistants 

Cognigy provides three assistants for giving human agents support in their service conversations. You can choose the installation that best suits your requirements:

- [Assist Bots](../assistants/assist-bot.md)
- [LA AI Copilot](../assistants/la-ai-copilot.md)
- [AI Copilot Workspace](../assistants/ai-copilot.md)

## View a Conversation

To open a conversation in Live Agent, follow these steps:

1. Open your Live Agent interface.
2. In the left-side menu, click **Conversations**.
3. In the upper-left corner, select **All Conversations**.
4. On the Conversations panel, choose one of the following tabs:
    - **Mine** — displays conversations assigned to you.
    - **Unassigned** — shows conversations without a designated owner.
    - **All** — shows all conversations in the system. All system conversations. Agents, by default, cannot view all conversations, but administrators can enable access in the **Inboxes** settings. For more information, read the [Configure Agent Access to all Inbox Conversations](../settings/inboxes.md#configure-agent-access-to-all-inbox-conversations).
5. Select a specific conversation from the chosen tab. The conversation will open, providing additional details and actions in the right-hand side panel.

## More Information

- [Assign Conversations](assign-conversations.md)
- [Send Replies](send-reply.md)
- [Filter and Sort](search-and-filter.md)
- [Other Operations](other-operations.md)
