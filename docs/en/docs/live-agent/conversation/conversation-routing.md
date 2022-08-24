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


Live Agent provides a round-robin auto-assignment system for Conversations. The assignment follows the logic mentioned below.

>**Note:** Round robin assignment is enabled by default.

- If there are Agents online who have access to the Inbox in which a Conversation is created, the system would distribute the Conversations equally among the online Agents.
- If all the Agents are offline, the system would distribute the Conversations equally to all Agents.


### Enable Round-Robin or Auto Assignment
<div class="divider"></div>


To enable round-robin or auto assignment in your Inbox, follow the steps below.

- Go to Settings -> Inboxes
- Click on the Inbox settings link of the Inbox you want to enable auto assignment
- Click on the Collaborators tab
- Find the setting to enable auto assignment, as shown below

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-routing-2.png" width="100%" alt="Live Agent Enable Auto Assignment" />
  <figcaption>Enable Auto Assignment</figcaption>
</figure>

- Change it to "Enabled" and click on "Update"

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