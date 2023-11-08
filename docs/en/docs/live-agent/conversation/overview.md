---
title: "Overview"
slug: "conversation overview"
description: ""
hidden: false
---

# Conversation


## Conversation Statuses


- [Insights: Live Agent dashboard](../../insights/dashboard-live-agent.md)

### Opened

Indicates the number of conversations that were opened by a user or reopened by a human agent.

### Assigned

Indicates the number of conversations that were assigned to a human agent

### Pending

Indicates the number of conversations that were paused until a customer or human agent responded.

### Snoozed

Indicates the number of conversations that were temporarily suspended until a time trigger or customer response trigger was activated.

------------------------------

### Setting Reminders and Status

The status can be changed to 'Resolved' once a resolution is provided to the customer.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-22.png" width="100%" alt="Live Agent Conversations Status" />
  <figcaption>Conversations Status</figcaption>
</figure>

The Conversation statuses available are listed below. Once a conversation is marked as resolved, its state cannot be changed back to open or pending.

| Options                 | Actions                                                                                             |
|-------------------------|-----------------------------------------------------------------------------------------------------|
| Mark as Pending         | Change the issue to Pending status                                                                  |
| Resolve                 | Change the issue to Resolved status                                                                 |
| Abort and Resolve       | Change the issue to Resolved status, and add the queryable abort attribute                          |
| Open                    | Change the pending issue to Open status                                                             |
| Snooze Until Next Reply | The issue will be set aside for now, and status will change to Open on the next reply from customer |
| Snooze Until Tomorrow   | The issue will be set aside for now, and status will change to Open the next day                    |
| Snooze Until Next Week  | The issue will be set aside for now, and status will change to Open next week                       |

Conversations can be selected and filtered by their statuses within the Conversation panel, as seen below.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-23.png" width="100%" alt="Live Agent Conversations Selections" />
  <figcaption>Select Conversation</figcaption>
</figure>


------------------------------

## Conversation Assignment Statuses 
 


## Conversation Details 



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

Refers to the feature or functionality that provides assistance to live agents during their interactions with customers. It typically includes real-time guidance, suggestions, and recommendations to help agents effectively handle customer inquiries or issues. Agent Assist Live Agent focuses on providing support directly from the conversation window.
For more information, read the [LA Agent Assist](../../ai/handover-providers/la-agent-assist-workspace-setup.md) documentation:

### Agent Assist Workspace

Refers to the dedicated workspace or environment where human agents access various tools, resources, and features to assist them in their customer interactions. It encompasses the entire workspace setup, which may include customer information, knowledge bases, collaboration tools, and other relevant components. Agent Assist Workspace aims to provide a comprehensive and efficient working environment for human agents to manage their interactions with customers.

Cognigy's **Agent Assist Workspace** offers the most comprehensive functions compared to the other assistants, enabling Agents to provide faster and more accurate customer support. The workspace is fully customizable with widgets that display the most relevant information for any chat and voice use case. When embedded into your contact center's Agent desktop, it enhances the overall efficiency of your contact center.

For more information, read the [Agent Assist Workspace](../../agent-assist/overview.md) documentation.

## More information

- [Insights: Live Agent dashboard](../../insights/dashboard-live-agent.md)
- [Live Agent Glossary](../glossary.md)

