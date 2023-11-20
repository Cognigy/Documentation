---
title: "Overview"
slug: "conversation overview"
description: ""
hidden: false
---

# Conversation

Your chats with various customers are referred to as conversations in Live Agent. This includes all session messages, including the customer, bot or human Agent responses.
A Conversation is the communication channel opened between an Agent and a customer.
The customer initiates a conversation from the website front end - using the Webchat widget.
An automated response set in the Cognigy.AI Flow will immediately be displayed on the screen as a reply. When a Virtual Agent initiates a handover to the Live Agent interface, the conversation will be continued by a human Agent.

## Open a Conversation in Live Agent:

To open a conversation in Live Agent, do the following:

1. Open your Live Agent interface and click **Conversations** on the left hand side of the window.
2. Click **All Conversations**. All conversations which customers have initiated will be displayed.
3. Click on a specific Conversation. The Conversation will open with further details and actions available in the right-hand side panel.

<figure>
<img src="{{config.site_url}}live-agent/images/LA_conversation_details.png" width="100%" alt="Live Agent Conversations Details" />
  <figcaption>Conversations Details</figcaption>
</figure>

## Conversation Statuses

Conversations between customer and operator in Live Agent can get different statuses:

- [Open](#open)
- [Resolved](#resolved)
- [Abandoned](#abandoned) 
- [Pending](#pending)
- [Snoozed](#snoozed)

The Conversation statuses are listed below.

| Status                  | Description                                                                                          |
|-------------------------|------------------------------------------------------------------------------------------------------|
| Mark as Pending         | Changes the issue to Pending status                                                                  |
| Resolve                 | Changes the issue to Resolved status                                                                 |
| Abandon and Resolve     | Changes the issue to Resolved status, and add the queryable abandon attribute                        |
| Open                    | Changes the pending issue to Open status                                                             |
| Snooze Until Next Reply | The issue will be set aside for now, and status will change to Open on the next reply from customer  |
| Snooze Until Tomorrow   | The issue will be set aside for now, and status will change to Open the next day                     |
| Snooze Until Next Week  | The issue will be set aside for now, and status will change to Open next week                        |

Conversations can be selected and filtered by their statuses within the Conversation panel as follows:

1. Click ![filter](../../assets/icons/filter.svg) to open the **Filter Conversations** menu.
2. Select **Status** and your preferred type of filter to apply.
3. Click **Apply filters** to confirm and activate the selected filter.

### Open

This conversation status indicates that a conversation is prepared for a handover to a human agent. The conversation can be opened by a user or reopened by a human agent.
For more information, read the [Live Agent](https://docs.cognigy.com/insights/dashboard-live-agent/#opened) documentation.

### Resolved

This conversation status indicates that a conversation is closed because the user's problem has been fixed.
The status can be changed to 'Resolved' once a resolution is provided to the customer.
To mark a conversation as resolved, click **Resolve** in the top right corner of the Conversations panel.
Once a conversation is marked as resolved, its state cannot be changed back to open or pending.

Agents having the adminstrator role can activate following settings in his "Account Settings" as a preset for conversation handling.  

- Automatically resolve or abandon conversations
- Automatically delete conversations that were resolved

The selected action will start if the conversation did not get any customer reply after a set resolve duration. You can set filters based on these statuses. For more information, read the [Account Settings](../settings/account-settings.md) documentation. 

### Abandoned

The status that indicates that a conversation is closed because the user left the conversation. It is configurable under the Account Settings section.
To mark a conversation as abandon, click **Resolve** in the top right corner of the Conversations panel and select **Abandon and resolve** in the drop-down list.

Agents having the adminstrator role can activate following settings in his "Account Settings" as a preset for conversation handling.  

- Automatically resolve or abandon conversations
- Automatically delete conversations that were resolved

The selected action will start if the conversation did not get any customer reply after a set resolve duration. You can set filters based on these statuses. For more information, read the [Account Settings](../settings/account-settings.md) documentation. 

### Pending

This status reflects the quantity of conversations that were temporarily paused, awaiting a response from either the customer or a human agent.

For more information about Live Agent's indicators, read the [Live Agent](https://docs.cognigy.com/insights/dashboard-live-agent/) documentation.

To mark a conversation as pending, click **Resolve** in the top right corner of the Conversations panel and select **Mark as pending** in the drop-down list.

### Snoozed

Indicates the number of conversations that were temporarily suspended until a time trigger or customer response trigger was activated.

This conversation status is applied when you need to wait for a specific period or require a reply from the customer to continue the conversation.
In a conversation workflow, it indicates that the issue will be set aside for now, and the status will change to Open when a time trigger or customer response trigger was activated.

For more information, read the [Live Agent](https://docs.cognigy.com/insights/dashboard-live-agent/) documentation.

## Conversation Assignment Statuses 

When you have selected an Inbox you will see the corresponding conversations assigned to this Inbox, listed in following groups: 

- [Mine](#mine)
- [Unassigned](#unassigned)
- [Assigned](#assigned)
- [All](#show-all-conversations-inbox-settings)

To change Assignment statuses, do the following:

1. Click the checkbox on the left side next to a conversation.
2. To assign a conversation to a human Agent, click the **Assign Agent** icon and select yourself or one of the available Agents in a drop-down list. The conversation will be assigned to the selected Agent.
3. To **Resolve** or **Snooze until next reply** a conversation, click the **Change status** icon and select the required option.
4. To assign a label to the selected conversation, click the **Assign Labels** icon and select one or more available labels. Labels improve the overview of conversations for the human Agent.

For more information, read the [Assign Conversations](assign-conversations.md) documentation.

### Mine 

To see all conversations assigned to you, click on tab **Mine**.

### Unassigned

Click on tab **Unassigned**, to see the conversations, which have not been assigned currently to an Agent. You can assign them manually or these conversations will be assigned rule based automatically when automatically assignment is enabled in the [Account Settings](../settings/account-settings.md) by an adminsitrator.  

### Assigned
You can assign conversations to a human Agent manually or incomng conversations will be assigned rule based automatically when automatically assignment is enabled in the [Account Settings](../settings/account-settings.md) by an adminsitrator.  

### Show All Conversations: Inbox Settings

By default, users having the Agent role cannot see the **All** tab for all conversations. However, for administrators there is a setting, editable in the **Inboxes** settings for every Inbox, allowing Agents to see all conversations in the selected Inbox. When enabled, the Agent can see all conversations, including those from other Agents. Otherwise, access will be restricted to his assigned Inboxes only. For more information, read the [Configure Agent Access to all Inbox Conversations](../settings/inboxes.md#configure-agent-access-to-all-inbox-conversations).

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-13.png" width="100%" alt="" />
  <figcaption></figcaption>
</figure>

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

| User Profile data     | Description                                           |
|-----------------------|-------------------------------------------------------|
| Email Address         | User's email address.                                 |
| First name            | User's first name .                                   |
| Last name             | User's last name.                                     |
| Age                   | User's age.                                           |
| Birthday              | User's birthday.                                      |
| Gender                | User's gender (male, female,...).                     |
| Location              | User's location.                                      | 
| Profile Picture       | When available, the URL address of a users pricture.  |
| Accepted GDPR         | User accepted European privacy law: Yes/No            |
| Goals                 | The users intention or task.                          |

To edit profile data click ![edit](../../assets/icons/edit.svg), enter data and confirm with **Submit**. 

### Conversation Actions

Related to a conversation in Live Agent the human Agent can assign other Agents to the selected conversation, can assign a group of Agents defined in a team, can define the priority for handling the customers request in the conversation and can assign one or more labels to make the overview of the listed conversations easier to the agent at a glance.
For more information of these details, read the [Assign Conversations](assign-conversations.md) documentation.

### Conversation Information

When a conversation is selected conversation details will be displayed at the right side of the Live Agent interface. These details include the following **Conversation information**: 

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
