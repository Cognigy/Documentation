---
title: "Overview"
slug: "conversation-overview"
description: "Conversations are chats between a human agent and a customer, initiated by the customer via a messaging application, such as Cognigy Webchat, WhatsApp, Slack, and so on."
hidden: false
---

# Conversations

[![Version badge](https://img.shields.io/badge/Updated in-v4.84-blue.svg)](../../release-notes/4.84.md)

_Conversations_ are chats between a human agent and a customer, initiated by the customer via a messaging application, such as Cognigy Webchat, WhatsApp, Slack, and so on.
The conversation is handed over to a human agent when the AI Agent cannot assist with a question due to its complexity or lack of information. During the conversation, the human agent may use additional virtual assistants to help answer the question.

<figure>
<img class="image-center" src="../../../_assets/live-agent/conversation/conversation-panel.png" width="80%" alt="Conversation Page" />
  <figcaption>Conversation Page</figcaption>
</figure>

## Conversation Life Cycle

The conversation life cycle involves starting a conversation, keeping it open for active engagement, possibly putting it on hold temporarily, and finally closing or resolving it.

<figure>
<img class="image-center" src="../../../_assets/live-agent/conversation/conversation-statuses.png" width="60%" alt="Live Agent Conversation Statuses" />
  <figcaption>Conversation Statuses</figcaption>
</figure>

Each conversation has statuses that are listed in the table.

| Status    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Opened    | This status indicates that a conversation is handed over to a human agent. The conversation can be opened by a user or reopened by a human agent. From this status, the conversation can transition in the following ways:<br>- Move to `Pending` and `Snoozed` statuses. Can be returned from these inactive statuses to the `Open` status.<br>- Move to `Resolved` or `Abandoned` statuses. If the conversation is marked as resolved or abandoned, it cannot be reopened.<br>                                                                                                                                                                                                                                                                         |
| Pending   | This status indicates that a conversation is temporarily paused, awaiting a response from either the customer or a human agent.<br> To mark a conversation as pending, in the upper-right corner of the Conversation page, next to the **Resolve** button, click ![select](../../_assets/icons/select.svg) **> Mark as pending**. To reopen the conversation, click **Open**.                                                                                                                                                                                                                                                                                                                                                                            |
| Snoozed   | This status indicates that a conversation is temporarily suspended until a time trigger or customer response trigger was activated.<br>To mark conversation as snoozed, in the upper-right corner of the Conversation page, next to the **Resolve** button, click ![select](../../_assets/icons/select.svg). Select one of the following trigger options:<br>- **Snooze Until Next Reply** — the issue will be set aside for now, and the status will change to `Open` upon the next customer reply.<br>- **Snooze Until Tomorrow** — the issue will be set aside for now, and the status will change to `Open` the next day.<br>- **Snooze Until Next Week** — the issue will be set aside for now, and the status will change to `Open` next week.<br> |
| Abandoned | The status indicates that a conversation is closed because the user left the conversation.<br>To mark a conversation as abandon, in the top right corner of the Conversation page, click **Resolve** and select ![select](../../_assets/icons/select.svg) **> Abandon and resolve**. Once a conversation is marked as abandoned, its state cannot be changed back to open or pending.<br> Agents with the `Administrator` role can activate the following options in the [Account Settings](../settings/account-settings.md):<br>- Automatically abandon conversations.<br>- Automatically delete abandoned conversations.                                                                                                                               |
| Resolved  | This status indicates that a conversation is closed because the user's problem has been fixed.<br> To mark a conversation as resolved, in the upper-right corner of the Conversation page, click **Resolve**. Once a conversation is marked as resolved, its state cannot be changed back to open or pending.<br>Agents with the `Administrator` role can activate the following settings in the [Account Settings](../settings/account-settings.md).<br>- Automatically resolve conversations.<br>- Automatically delete conversations that were resolved.<br>                                                                                                                                                                                          |

Conversations can be [selected and filtered by their statuses](search-and-filter.md) within the Conversation page.

## Conversation Assignment Statuses 

A conversation with the `Opened` status in Live Agent can have one of the following assignment statuses:

- **Unassigned** — a conversation is not assigned to a human agent.
- **Assigned** — a conversation is assigned to a human agent. The assignment occurs either [manually](../conversation/conversation-routing/manual-mode.md) or [automatically](../conversation/conversation-routing/automatic-mode.md).

## Conversation Details 

When a conversation is selected, conversation details will be displayed on the right side of the Live Agent interface.
These details include the following conversation information: 

- [Contact Profile Details](#contact-profile-details)
- [Conversation Actions](#conversation-actions)
- [Conversation Information](#conversation-information)

<figure>
<img class="image-center" src="../../../_assets/live-agent/conversation/conversation-details.png" width="80%" alt="Live Agent Conversation Details" />
  <figcaption>Conversation Details</figcaption>
</figure>

### Contact Profile Details

The Contact Profile information is shared at the beginning of the handover process. Live Agent does not store private data to comply with GDPR regulations. Instead, Live Agent only retains a reference to Cognigy.AI. When a human agent enters the conversation, Live Agent requests data from Cognigy.AI.

If the human agent doesn't leave the conversation page, they may miss contact profile updates. To view profile updates that occur on the Cognigy.AI side, the human agent must reenter the conversation. This can be done by switching to another page within Live Agent and then returning.

The following table represents data that can be edited within Live Agent and stored in the Contact Profile.

| Contact Profile Details | Description                                                                                                                                                      |
|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| First Name              | User's first name.                                                                                                                                               |
| Last name               | User's last name.                                                                                                                                                |
| Email                   | User's email address.                                                                                                                                            |
| Gender                  | User's gender.                                                                                                                                                   |
| Age                     | User's age.                                                                                                                                                      |
| Birthday                | User's birthday.                                                                                                                                                 |
| Location                | User's location.                                                                                                                                                 |
| Accepted GDPR           | Accepted General Data Protection Regulation.                                                                                                                     |
| Accepted Privacy Policy | Accepted the privacy policy terms. This field is applicable to Webchat v3 when a user accepts the [Privacy Notice](../../webchat/v3/features.md#privacy-notice). |
| Tasks                   | Tasks are the user's intention or task.                                                                                                                          |
| Profile Picture         | When available, the URL address of a user's picture.                                                                                                             |

#### Change Contact Profile Details

To change the Contact Profile, follow these steps:

1. In the left-side menu of the Live Agent interface, select **Conversations**. 
2. Select a conversation from the list. 
3. On the right side of the page, navigate to **Conversation Details**. 
4. On the **Details** tab, click ![edit](../../_assets/icons/edit.svg) to change the Contact Profile. 
5. In the **Contact Profile** window, fill in the fields and click **Submit** to save your changes.

This action will also update the [Contact Profile](../../ai/analyze/contact-profiles.md) on the Cognigy.AI side. In Live Agent, cached Contact Profile data will persist for one hour. You can change this parameter if you have an on-premises or dedicated SaaS environment. To do so, add the `COGNIGY_CONTACT_PROFILE_CACHE_TIME` variable in the Live Agent `values.yaml` file and specify the value in seconds.

#### View Hidden Fields in Contact Profile Details

By default, only fields that contain values appear in the Contact Profile.
To view empty fields, follow these steps:

1. In the left-side menu of the Live Agent interface, select **Conversations**.
2. Select a conversation from the list.
3. On the right side of the page, navigate to **Conversation Details**.
4. On the **Details** tab, click ![closed-eye](../../_assets/live-agent/icons/closed-eye.svg) to view the empty fields. To hide them again, click ![opened-eye](../../_assets/live-agent/icons/opened-eye.svg).

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
- **Channel Type** — a messaging platform through which users can interact with the AI Agent. Each channel is associated with one or more Cognigy Endpoints, allowing users to communicate with the AI Agent through various interfaces. Cognigy channels include platforms like Webchat, Facebook Messenger, Slack, WhatsApp, and other messaging or communication platforms.
- **Cognigy User ID** — a unique identifier for authorized access to Cognigy.AI and Live Agent.

To copy this information, click ![copy](../../_assets/icons/copy.svg) next to the item.

### Previous Conversations

After a conversation has been marked as resolved, the next time the same customer starts a new conversation, the previous conversation associated with this customer will be shown in the Previous Conversations menu. 
This will help the agent understand the history of the customer's issue.

## Assistants 

Cognigy provides three assistants for giving human agents support in their service conversations. You can choose the installation that best suits your requirements:

- [AI Copilot Bot](../assistants/ai-copilot-bot.md)
- [AI Copilot Whisper](../assistants/ai-copilot-whisper.md)
- [AI Copilot Workspace](../assistants/ai-copilot.md)

## View a Conversation

To open a conversation in Live Agent, follow these steps:

1. In the left-side menu of the Live Agent interface, click **Conversations**.
2. In the upper-left corner, select **All Conversations**.
3. On the Conversations panel, choose one of the following tabs:
    - **Mine** — displays conversations assigned to you.
    - **Unassigned** — shows conversations without a designated owner.
    - **All** — shows all conversations in the system. All system conversations. Agents, by default, cannot view all conversations, but administrators can grant access through the **Inboxes** settings. For more information, read the [Configure Agent Access to all Inbox Conversations](../settings/inboxes.md#configure-agent-access-to-all-inbox-conversations).
4. Select a specific conversation from the chosen tab. The conversation will open, providing additional details and actions in the right-side panel.

## More Information

- [Assign Conversations](assign-conversations.md)
- [Send Replies](send-reply.md)
- [Filter and Sort](search-and-filter.md)
- [Other Operations](other-operations.md)
