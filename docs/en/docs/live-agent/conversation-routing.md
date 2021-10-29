---
 title: "Routing conversations" 
 slug: "conversation-routing" 
 hidden: false 
---

# Conversation Routing

Every conversation in Live Agent can have an assignee. An assignee can be manually added to the conversation via the web console or the API, or the organizations can opt for round-robin assignment system. This doc explains how you can assign an agent to the conversation.

## Manual assignment
<div class="divider"></div>


A conversation can be manually assigned to 2 categories of users.

1. Agents who have access to the inbox in which the conversation is created.
2. Administrators who can access every conversation in the system.

To assign an agent or admin to a conversation, an admin/agent can select the assignee from the dropdown named under "Assigned Agent" from the "Conversation Details" section in the right sidebar, as shown below.

<figure>
<img src="{{config.site_url}}assets/img/LA-conversation-routing-1.png" width="100%" alt="Live Agent Assign Agents" />
  <figcaption>Assign Agents</figcaption>
</figure>

## Auto assignment
<div class="divider"></div>


Live Agent provides a round-robin auto-assignment system for conversations. The assignment follows the logic mentioned below.

_Note_: Round robin assignment is enabled by default.

- If there are agents online who have access to the inbox in which a conversation is created, the system would distribute the conversations equally among the online agents.
- If all the agents are offline, the system would distribute the conversations equally to all agents.


### Enable round-robin assignment
<div class="divider"></div>


To enable round-robin assignment in your inbox, follow the steps below.

- Go to Settings -> Inboxes
- Click on the inbox settings link of the inbox you want to enable round-robin assignment
- Scroll down to see the setting for Round-robin, as shown below

<figure>
<img src="{{config.site_url}}assets/img/LA-conversation-routing-2.png" width="100%" alt="Live Agent Enable Auto Assignment" />
  <figcaption>Enable Auto Assignment</figcaption>
</figure>

- Change it to "Enabled" and click on "Update"