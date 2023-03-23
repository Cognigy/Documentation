---
 title: "Conversation Routing" 
 slug: "conversation-routing" 
 hidden: false 
---

# Conversation Routing

Every Conversation in Live Agent can have an assignee. An assignee can be manually added to the Conversation via the web console, the API, or automatically via an available round-robin assignment system. This doc explains how you can assign an Agent to a Conversation.

## Manual Assignment
<div class="divider"></div>


A Conversation can be manually assigned to two categories of users.

1. Agents who have access to the Inbox in which the Conversation is created.
2. Administrators who can access every Conversation in the system.

To assign an Agent or admin to a Conversation, an admin/Agent can select the assignee from the dropdown menu titled "Assigned Agent" from the "Conversation Details" section in the right-hand sidebar, as shown below.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-routing-1.png" width="100%" alt="Live Agent Assign Agents" />
  <figcaption>Assign Agents</figcaption>
</figure>

## Auto Assignment
<div class="divider"></div>

[![Version badge](https://img.shields.io/badge/Updated in-v4.47-blue.svg)](../../release-notes/4.47.md)

Live Agent provides a round-robin auto-assignment system for Conversations. The **Auto Assignment** setting is enabled by default.

There are different scenarios for distributing conversations to human agents based on their online status and workload:

**Online Agents**:

When a conversation is created in the Inbox, and there are agents online with access to it, the system distributes the conversations evenly among them.
Unassigned conversations are automatically assigned to agents when the limit threshold is lower than the maximum value, and they take precedence over newly incoming conversations.

**Offline Agents**:

When a conversation is created in the Inbox, and there aren't agents online with access to it, the system will distribute the conversations among all human agents equally.

To configure auto assignment in your Inbox, follow these steps:

1. Go to **Settings > Inboxes**.
2. Select an Inbox from the list and click ![clock](../../assets/icons/gear.svg).
3. On the **Collaborators** tab, go to the **Conversation Assignment** section.
4. From the **Allow auto assignment** list, select one of the following options:
     * Enable — allows the automatic assignment of agents to conversations. 
     * Disable — allows the manual assignment of agents to conversations.

The changes will be applied.

## Automatic Conversation Reassignment
<div class="divider"></div>


Live Agent provides a round-robin auto-reassignment system for Conversations. It works in the same way as auto-assignment, except that it happens on real-time Agent related events. These are the following:

- Agent sets their availability to "Offline" (availability can be changed by clicking on the profile thumbnail)
- Agent logs out

When this happens, the Agent assigned Conversations are re-assigned to other Agents, following the previously mentioned round-robin logic. If there are no Agents online, the Conversations are set to unassigned.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-routing-3.png" width="100%" alt="Live Agent Enable Auto Assignment" />
  <figcaption>Enable Re Auto Assignment</figcaption>
</figure>