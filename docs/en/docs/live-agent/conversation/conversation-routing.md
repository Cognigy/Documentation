---
 title: "Conversation Routing" 
 slug: "conversation-routing" 
 hidden: false 
---

# Conversation Routing

In Cognigy Live Agent, conversation routing refers to the mechanism by which incoming conversations are assigned and distributed to the appropriate agents for handling. It involves intelligent routing algorithms that analyze agent availability and workload to determine the best recipient for each conversation.
Cognigy Live Agent's conversation routing ensures that conversations are efficiently directed to the right agents or teams, facilitating prompt and effective customer support. This feature optimizes resource utilization and enhances human agent productivity.


## Manual Assignment

A Conversation can be manually assigned to the following categories of users:

- any agents
- supervisors
- administrators

To assign an Agent or admin to a Conversation, an admin/Agent can select the assignee from the dropdown menu titled "Assigned Agent" from the "Conversation Details" section in the right-hand sidebar, as shown below.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-routing-1.png" width="100%" alt="Live Agent Assign Agents" />
  <figcaption>Assign Agents</figcaption>
</figure>

## Auto Assignment
<div class="divider"></div>

[![Version badge](https://img.shields.io/badge/Updated in-v4.47-blue.svg)](../../release-notes/4.47.md)

Live Agent provides auto-assignment system for Conversations. The **Auto Assignment** setting is activated by default.

There are different scenarios for distributing conversations to human agents based on their online status and workload:

**Online Agents**:

When a conversation is created in the Inbox, and there are agents online with access to it, the system distributes the conversations evenly among them.
Unassigned conversations are automatically assigned to agents when the limit threshold is lower than the maximum value, and they take precedence over newly incoming conversations.

**Offline Agents**:

When a conversation is created in the Inbox, and there aren't agents online with access to it, the system will distribute the conversations among all human agents equally.

To configure auto assignment in your Inbox, follow these steps:

1. Go to **Settings > Inboxes**.
2. Select an Inbox from the list and click ![gear](../../assets/icons/gear.svg).
3. On the **Collaborators** tab, go to the **Conversation Assignment** section.
4. From the **Allow auto assignment** list, select one of the following options:
     * Enable — allows the automatic assignment of agents to conversations. 
     * Disable — allows the manual assignment of agents to conversations.

The changes will be applied.

### Examples 

Example 1

| Agent name | Limit | Status  |
|------------|-------|---------|
| Agent 1    | 2     | Online  |
| Agent 2    | 2     | Busy    |
| Agent 3    | 2     | Away    |
| Agent 4    | 2     | Offline |

Scenario 1

Condition: 

- allows conversation assignment for busy agents is deactivated
- 4 conversations are created

Result: the first two will be assigned to an Agent 1 and the 2 will remain unassigned.

Scenario 2

Condition: 

- allows conversation assignment for busy agents is activated
- 4 conversations are created

Result: the first two will be assigned to an Agent 1 and the rest 2 will be assigned to Agent 2.

Example 2

| Agent name | Limit | Status |
|------------|-------|--------|
| Agent 1    | 2     | Online |
| Agent 2    | 2     | Online |
| Agent 3    | 2     | Online |
| Agent 4    | 2     | Online |

Scenario 1

Condition:

- 4 conversations are created

Result: The first two conversations  will be assigned to an Agent 1 and the rest 2 will be assigned to Agent 2. The Agent 3 and Agent 4 will remain unassigned.

Scenario 2

Condition:

- 5 conversations are created

Result: The first two conversations  will be assigned to an Agent 1 and the 2 will be assigned to Agent 2, the Agent 3 will have 1 conversation and Agent 4 will remain unassigned.

Example 3

In the table all agents are not available

| Agent name | Limit | Status  |
|------------|-------|---------|
| Agent 1    | 2     | Offline |
| Agent 2    | 2     | Away    |
| Agent 3    | 2     | Offline |
| Agent 4    | 2     | Busy    |

Scenario 1

Condition:

- allows conversation assignment for busy agents is deactivated
- 4 conversations are created

Result: all conversations will be unassigned.

### Account settings

### Inbox level

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