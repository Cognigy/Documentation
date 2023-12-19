---
title: "Overview"
slug: "conversation-overview"
description: ""
hidden: false
---

# Conversations

_Conversations_ are chats between a human agent and a customer, initiated by the customer via a messaging application, such as Cognigy Webchat, WhatsApp, Slack, and so on.
The conversation is handed over to a human agent when the virtual agent cannot assist with a question due to its complexity or lack of information. During the conversation, the human agent may use additional virtual assistants to help answer the question.

## View a Conversation in Live Agent

To open a conversation in Live Agent, follow these steps:

1. Open your Live Agent interface.
2. In the left-side menu, click **Conversations**.
3. On the Conversations panel, choose one of the following tabs:
    - **Mine** - displays conversations assigned to you.
    - **Unassigned** - shows conversations without a designated owner.
    - **All** - shows all conversations in the system. All system conversations. Agents, by default, cannot view all conversations, but administrators can enable access in the **Inboxes** settings. For more information, read the [Configure Agent Access to all Inbox Conversations](../settings/inboxes.md#configure-agent-access-to-all-inbox-conversations).
4. Select a specific conversation from the chosen tab. The conversation will open, providing additional details and actions in the right-hand side panel.

<figure>
<img src="{{config.site_url}}live-agent/images/LA_conversation_details.png" width="100%" alt="Live Agent Conversations Details" />
  <figcaption>Conversations Details</figcaption>
</figure>

## Conversation Lifecycle

The conversation lifecycle involves starting a conversation, keeping it open for active engagement, possibly putting it on hold temporarily, and finally closing or resolving it.

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/conversation/images/conversation-statuses.png" width="60%" alt="Live Agent Conversation Statuses" />
  <figcaption>Conversation Statuses</figcaption>
</figure>

Each conversation has statuses that are listed in the table.

| Status    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Opened    | This conversation status indicates that a conversation is handed over to a human agent. The conversation can be opened by a user or reopened by a human agent. From this status, the conversation can transition in the following ways:<br>- Move to `Pending` and `Snoozed` statuses. Return from inactive statuses to an open state.<br>- Move to `Resolved` or `Abandoned` statuses. If the conversation is marked as resolved or abandoned, it cannot be reopened.<br>                                                                                                                                                                                                                                                                                                                                                                                                    |
| Pending   | This status reflects the quantity of conversations that were temporarily paused, awaiting a response from either the customer or a human agent.<br> To mark a conversation as pending, in the upper-right corner of the Conversation panel, next to the **Resolve** button, click ![select](https://docs.cognigy.com/live-agent/images/icons/select.svg) ** > Mark as pending**. To reopen the conversation, click **Open**.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Snoozed   | This status indicates the number of conversations that were temporarily suspended until a time trigger or customer response trigger was activated.<br>To mark conversation as snoozed, in the upper-right corner of the Conversation panel, next to the **Resolve** button, click ![select](https://docs.cognigy.com/live-agent/images/icons/select.svg). Select one of the following trigger options:<br>- Snooze Until Next Reply - the issue will be set aside for now, and the status will change to `Open` upon the next customer reply.<br>- Snooze Until Tomorrow - the issue will be set aside for now, and the status will change to `Open` the next day.<br>- Snooze Until Next Week - the issue will be set aside for now, and the status will change to `Open` next week.<br>                                                                                     |
| Abandoned | The status indicates that a conversation is closed because the user left the conversation.<br>To mark a conversation as abandon, in the top right corner of the Conversation panel, click **Resolve** and select ![select](https://docs.cognigy.com/live-agent/images/icons/select.svg) **> Abandon and resolve**. Once abandoned, the conversation can't be reopened.<br>Agents with the `Administrator` role can set these handling preferences via the [Account Settings](../settings/account-settings.md):<br>- Automatically abandon conversations.<br>- Automatically delete abandoned conversations.<br>The selected action will start if the conversation did not get any customer reply after a set resolve duration. You can set filters based on these statuses. For more information, read the [Account Settings](../settings/account-settings.md) documentation. |
| Resolved  | This conversation status indicates that a conversation is closed because the user's problem has been fixed.<br>The status can be changed to 'Resolved' once a resolution is provided to the customer. To mark a conversation as resolved, in the upper-right corner of the Conversation panel, click **Resolve**. Once a conversation is marked as resolved, its state cannot be changed back to open or pending.<br>Agents having the `Administrator` role can activate the following settings in the  [Account Settings](../settings/account-settings.md).<br>- Automatically resolve conversations.<br>- Automatically delete conversations that were resolved.<br>                                                                                                                                                                                                        |

Conversations can be [selected and filtered by their statuses](filter-and-sort.md) within the Conversation panel.

## Conversation Assignment Statuses 

When you have selected an Inbox, you will see the corresponding conversations assigned to this Inbox, listed in following groups: 

- [Unassigned](#unassigned)
- [Assigned](#assigned)

For more information, read the [Assign Conversations](assign-conversations.md) documentation.

### Unassigned

Click on tab **Unassigned**, to see the conversations, which have not been assigned currently to an Agent. You can assign them manually, or these conversations will be assigned rule based automatically when automatically assignment is enabled in the [Account Settings](../settings/account-settings.md) by an administrator.  

### Assigned

You can assign conversations to a human Agent manually or incoming conversations will be assigned rule based automatically when automatically assignment is enabled in the [Account Settings](../settings/account-settings.md) by an administrator.

## Conversation Details 

When a conversation is selected conversation details will be displayed at the right side of the Live Agent interface. These details include the following **Conversation information**: 

To find the **Conversation Details**, proceed as follows:

1. Go to Live Agent.
2. On the left side of the screen, select **Conversations**.
3. From the **Inboxes** list, select an Inbox.
4. In the conversations list of the selected Inbox select a conversation. Conversation details will be displayed at the right side of the Live Agent interface. 

The conversation details include the following items:

- [User Profile Details](#user-profile-details)
- [Conversation Actions](#conversation-actions)
- [Conversation Information](#conversation-information)

### User Profile Details

Related to a conversation in Live Agent user profile details will be displayed in the conversation details section. The following table lists all user items which can be edited and stored as meta data.

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

Related to a conversation in Live Agent the human Agent can assign other Agents to the selected conversation, can assign a group of Agents defined in a team, can define the priority for handling the customers request in the conversation and can assign one or more labels to make the overview of the listed conversations easier to the agent at a glance.
For more information of these details, read the [Assign Conversations](assign-conversations.md) documentation.

### Conversation Information

When a conversation is selected, conversation details will be displayed at the right side of the Live Agent interface. These details include the following **Conversation information**: 

To find the **Conversation Information**, proceed as follows:

1. Go to Live Agent.
2. On the left side of the screen, select **Conversations**.
3. From the **Inboxes** list, select an Inbox.
4. In the conversations list of the selected Inbox select a conversation. Conversation details will be displayed at the right side of the Live Agent interface. These details include the following **Conversation information**:

- [Cognigy Session ID](#copy-cognigy-session-id)
- [Channel Type](#channel-type)
- [Cognigy User ID](#cognigy-user-id)

#### Copy Cognigy Session ID

A session describes the collection of user inputs and Agent replies in a conversation tracked by a common Session ID on a Cognigy product (e.g., a call or Webchat conversation). In case you need to copy the session ID, do the following: 

1. Click ![copy](../../assets/icons/copy.svg) on the right side next to the item.

#### Channel Type

The medium or platform through which users can interact with the Virtual Agent. Each channel is associated with one or more Cognigy Endpoints, allowing users to communicate with the Virtual Agent through various interfaces. Cognigy Channels include platforms like Webchat, Facebook Messenger, Slack, WhatsApp, and other messaging or communication platforms.

In case you need to copy the channel type, do the following: 

1. Click ![copy](../../assets/icons/copy.svg) on the right side next to the item.

#### Cognigy User ID

User ID is a unique identifier for authorized access to Cognigy.AI and Live Agent.

In case you need to copy the Cognigy User ID, do the following: 

1. Click ![copy](../../assets/icons/copy.svg) on the right side next to the item.

### Previous Conversations

Once a Conversation has been marked as resolved - the next time the same customer starts a new Conversation, the previous Conversation associated with this customer will be shown in the Previous Conversations menu. This will help the Agent to understand the history of the customer's issue.

## Assistants 

Agent assistants allow human Agents using Cognigy Live Agent to be assisted by AI-powered Virtual Agents when conversing with the customer. Using this functionality, during an active handover, Virtual Agent messages can be displayed to the human agent based on customer messages to best assist the customer.

Using Agent assistants in Live Agent the following can be achieved:

- Provide contextual information for the Agent (CRM records, ERP data, small talk clues, and more)
- Allow quick access to resources such as knowledge base articles
- Suggest replies (including media) which can be forwarded to the customer
- Using Cognigy.AI, you can customize Agent Assist to be as powerful as you need it to be.

Cognigy provides three Live Agents assistants for giving Live Agents support in their service conversations. You can choose the installation that best suits your requirements:

1. [Assist Bots](../conversation/assist-bot.md)
2. [LA Agent Assist](../../ai/handover-providers/la-agent-assist-overview.md)
3. [LA Agent Assist Workspace](../../ai/handover-providers/la-agent-assist-workspace-setup.md) 

### Assist Bots

The Assist Bot is the tool for assisting the agents while talking to the customers. It consists of a dedicated flow to provide information to the agent. Therefore, it needs to be configured as a separate flow in Cognigy.AI.
For more information, read the [Assist Bots](../conversation/assist-bot.md) documentation.

### LA Agent Assist

The functionality of **LA Agent Assist** provides assistance to live agents during their interactions with customers. It typically includes real-time guidance, suggestions, and recommendations to help agents effectively handle customer inquiries or issues. Agent Assist in Live Agent focuses on providing support directly from the conversation window.
For more information, read the [LA Agent Assist](../../ai/handover-providers/la-agent-assist-workspace-setup.md) documentation:

### Agent Assist Workspace

The functionality of the **Agent Assist Workspace** provides dedicated workspace or environment where human agents access various tools, resources, and features to assist them in their customer interactions. It encompasses the entire workspace setup, which may include customer information, knowledge bases, collaboration tools, and other relevant components. Agent Assist Workspace aims to provide a comprehensive and efficient working environment for human agents to manage their interactions with customers.
Cognigy's **Agent Assist Workspace** offers the most comprehensive functions compared to the other assistants, enabling Agents to provide faster and more accurate customer support. The workspace is fully customizable with widgets that display the most relevant information for any chat and voice use case. When embedded into your contact center's Agent desktop, it enhances the overall efficiency of your contact center.
When Agent Assist is enabled, Agents can communicate with an assitant using a separate conversation channel. The AI-supported output of Agent Assist enables the human agent to respond more efficiently to customer inquiries.
For more information, read the [Agent Assist Workspace](../../agent-assist/overview.md) documentation.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-agentview.png" width="75%" />
    </figure>

If forwarding was enabled for Assist messages, the Agent can click the **Send** button to forward content to the end user or customer.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-agentview-forward.png" width="75%" />
    </figure>

## More information

- [Assign Conversations](assign-conversations.md)
- [Send Replies](send-reply.md)
- [Filter and Sort](filter-and-sort.md)
- [Other Operations](other-operations.md)
- [Agent Inject](agent-inject.md)
- [Live Agent Glossary](../glossary.md)
- [Notifications](../notifications.md)
- [Profile Settings](../profile-settings.md)
- [Reports](../reports.md)
- [Roles](../roles.md)
