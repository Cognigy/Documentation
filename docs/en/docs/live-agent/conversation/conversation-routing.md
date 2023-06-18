---
 title: "Conversation Routing" 
 slug: "conversation-routing"
 description: "With Cognigy Live Agent conversation routing, you can improve customer support by efficiently assigning conversations based on agent availability and workload. This feature helps enhance productivity and optimize resource utilization."
 hidden: false 
---

# Conversation Routing

_Conversation routing_ is the mechanism used to assign and distribute incoming conversations to the appropriate agents for handling. It involves intelligent routing algorithms that consider factors like agent availability and workload to determine the best recipient for each conversation. In Cognigy Live Agent, conversation routing ensures that conversations are efficiently directed to the right agents or teams, enabling timely and effective customer support. This feature optimizes resource utilization and enhances the productivity of human agents.

In Live Agent, there are two routing modes:

- [Manual](#manual-mode)
- [Automatic](#automatic-mode)

## Manual Mode

Manual assignment mode can be helpful in scenarios requiring specialized expertise, urgent or high-priority cases, complex or sensitive issues, and VIP or key accounts. It enables organizations to provide personalized support, optimize customer experience, and efficiently handle conversations.

A Conversation can be manually assigned or reassigned to any users with the Live Agent [roles](../roles.md): `Agent`, `Supervisor`, or `Administrator`.

### Manual Assignment

You can manually assign a conversation to an agent or team by following these steps:

1. In the left-side menu of Live Agent, click **Conversations**.
2. Go to the relevant conversation. 
3. In the **Details** menu, go to the **Conversation Actions** section. 
4. From the **Assigned Agent** list, select an agent that should be assigned to this conversation. If you want to assign the conversation to yourself, click **→ Assign to me** above the list. 
5. From the **Assigned Team** list, select a team that can be assigned to this conversation. The previously selected agent should be a part of this team.

After the assignment, the agent or a team can receive a [notification](../notifications.md).

### Manual Reassignment

You can manually reassign a conversation to an agent or team by following these steps:

1. In the left-side menu of Live Agent, click **Conversations** and go to the relevant conversation.
2. In the **Details** menu, go to the **Conversation Actions** section.
3. From the **Assigned Agent** list, select a new agent that should be assigned to this conversation.
4. From the **Assigned Team** list, select a new team to be assigned to this conversation. The previously selected agent should be a part of this team.

If the conversation is reassigned, the agent or a team can receive a [notification](../notifications.md).

### Manual Unassignment

You can manually unassign a conversation to an agent or team by following these steps:

1. In the left-side menu of Live Agent, click **Conversations** and go to the relevant conversation.
2. In the **Details** menu, go to the **Conversation Actions** section. 
3. Above the **Assigned Agent** list, click **→ Unassign**. 
4. Above the list **Assigned Team**, click **→ Unassign**.

If the **Unassign** value appears in the **Assigned Agent** list, the conversation will be displayed in the list of unassigned conversations.

## Automatic Mode

Automatic mode in Live Agent includes two key features: Automatic Assignment and Automatic Reassignment, that allocate conversations to agents. Automatic Assignment evenly distributes conversations among online agents, while Automatic Reassignment reassigns conversations in real time based on agent availability changes. These features optimize conversation handling and improve customer support efficiency.

### Automatic Assignment

[![Version badge](https://img.shields.io/badge/Updated in-v4.47-blue.svg)](../../release-notes/4.47.md)

Live Agent provides auto-assignment system for conversations. The **Auto Assignment** setting is activated by default.

There are different scenarios for distributing conversations to human agents based on their online status and workload:

- **Online Agents**. When a conversation is created in the Inbox, and there are agents online with access to it, the system distributes the conversations evenly among them.
Unassigned conversations are automatically assigned to agents when the limit threshold is lower than the maximum value, and they take precedence over newly incoming conversations.
- **Offline Agents**. When a conversation is created in the Inbox, and there aren't agents online with access to it, the system will remain all conversation unassigned.

To configure auto assignment in your Inbox, follow these steps:

1. Go to **Settings > Inboxes**.
2. Select an Inbox from the list and click ![gear](../../assets/icons/gear.svg).
3. On the **Collaborators** tab, go to the **Conversation Assignment** section.
4. From the **Allow auto assignment** list, select one of the following options:
     * Enable — allows the automatic assignment of agents to conversations. The setting is activated by default.
     * Disable — allows the manual assignment of agents to conversations.

The changes will be applied.

### Automatic Reassignment

Live Agent provides auto-reassignment system for conversations. The **Allow conversations to be reassigned** setting is activated by default.

The auto-reassignment system operates in real-time, triggered by specific agent-related events. These events include:

- When a human agent changes their availability to `Offline`, `Away`, or `Busy`.
- When a human agent logs out.

In such instances, the conversations assigned to the human agent are automatically reassigned to other available human agents. If there are no human agents currently online, the conversations are marked as unassigned.

To configure auto reassignment in your Inbox, follow these steps:

1. Go to **Settings > Inboxes**.
2. Select an Inbox from the list and click ![gear](../../assets/icons/gear.svg).
3. On the **Collaborators** tab, go to the **Conversation Assignment** section.
4. From the **Allow conversations to be reassigned** list, select one of the following options:
    * Enable — allows the automatic reassignment of agents to conversations. The setting is activated by default.
    * Disable — allows the manual reassignment of agents to conversations.

The changes will be applied.

## Automatic Mode: Common Scenarios

There are various common scenarios or situations relevant to the automatic mode.

### Default Scenario

This is the default scenario where all conversations are assigned to the first available agent.

Source table:

```txt
| Agent name | Status  |
|------------|---------|
| Agent 1    | Online  |
| Agent 2    | Online  |
| Agent 3    | Online  |
| Agent 4    | Offline |
```

Conditions:

- No conversation limit per agent.
- 4 conversations are created.
- Automatic Conversation Reassignment is activated.
- Automatic Conversation Assignment is activated.
- Allows conversation assignments for busy agents to be deactivated.

Result: 4 conversations will be assigned to Agent 1.

### Scenario 1

Source table:

```txt
| Agent name | Limit | Status  |
|------------|-------|---------|
| Agent 1    | 2     | Online  |
| Agent 2    | 2     | Busy    |
| Agent 3    | 2     | Away    |
| Agent 4    | 2     | Offline |
```

**Example 1**

Conditions:

- Allows conversation assignments for busy agents to be deactivated.
- 4 conversations are created.

Result: The first two will be assigned to Agent 1, and the two will remain unassigned.

**Example 2**

Condition:

- Allows conversation assignments for busy agents to be activated.
- 4 conversations are created.

Result: the first two will be assigned to Agent 1, and the rest two will be assigned to Agent 2.

### Scenario 2

Source table:

```txt
| Agent name | Limit | Status |
|------------|-------|--------|
| Agent 1    | 2     | Online |
| Agent 2    | 2     | Online |
| Agent 3    | 2     | Online |
| Agent 4    | 2     | Online |
```
**Example 1**

Condition:

- 4 conversations are created.

Result: The first two conversations will be assigned to Agent 1, and the rest two will be assigned to Agent 2. Agent 3 and Agent 4 will remain unassigned.

**Example 2**

Condition:

- 5 conversations are created.

Result: The first two conversations will be assigned to Agent 1, and the two will be assigned to Agent 2. Agent 3 will have one conversation, and Agent 4 will remain unassigned.

**Example 2**

Condition:

- 5 conversations are created.
- Allows conversation assignments for busy agents to be activated.
- Agent 1 has changed status to Busy after the conversation assignment.

Result: When Agent 1 has changed status from online to busy, two conversations will be assigned to an agent, and two conversations will remain unassigned.

### Scenario 3

Source table:

```txt
| Agent name | Limit | Status  |
|------------|-------|---------|
| Agent 1    | 2     | Offline |
| Agent 2    | 2     | Away    |
| Agent 3    | 2     | Offline |
| Agent 4    | 2     | Busy    |
```

**Example 1**

Condition:

- Allows conversation assignments for busy agents to be deactivated.
- 4 conversations are created.

Result: all conversations will be unassigned.

**Example 2**

Condition:

- Automatic Conversation Reassignment is activated.
- Agent 1 has changed the status to Online.
- 4 conversations are created.

Result: When Agent 1 goes back online, two conversations will be assigned to an agent, and two conversations will remain unassigned.

**Example 3**

Condition:

- Automatic Conversation Reassignment is activated.
- Allows conversation assignments for busy agents to be activated.
- 4 conversations are created.

Result: The first two conversations will be assigned to Agent 4, and the two will remain unassigned.

### Scenario 4

Source table:

```txt
| Agent name | Limit | Status  |
|------------|-------|---------|
| Agent 1    | 2     | Offline |
| Agent 2    | 2     | Offline |
| Agent 3    | 2     | Offline |
| Agent 4    | 2     | Offline |
```

**Example 1**

Conditions:

- Automatic Conversation Reassignment is activated.
- Automatic Conversation Assignment is activated.
- 4 conversations are created.

Result: All conversations are unassigned.

**Example 2**

Conditions:

- Automatic Conversation Reassignment is activated.
- Automatic Conversation Assignment is activated.
- Allows conversation assignments for busy agents to be deactivated.
- Agent 1 has changed status to busy.
- 4 conversations are created.

Result: All conversations are unassigned.

**Example 3**

Conditions:

- Automatic Conversation Reassignment is activated.
- Automatic Conversation Assignment is activated.
- allows conversation assignments for busy agents to be activated.
- Agent 1 has changed status to busy.
- 4 conversations are created.

Result: When Agent 1 has changed status from offline to busy, two conversations are assigned to this human agent.

