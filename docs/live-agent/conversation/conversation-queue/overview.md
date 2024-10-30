---
title: "Overview"
slug: "conversation-queue"
description: "Conversation Queue is a list of conversations waiting for attention from human agents. In Live Agent, a queue is similar to the waiting area, where conversations are held until the agent has not sent the first reply."
hidden: false
tags:
  - Live Agent
  - Conversation
  - Queue
---

# Conversation Queue

_Conversation Queue_ is a list of conversations waiting for attention from agents. In Live Agent, a queue is similar to the waiting area, where conversations are held until the agent has not sent the first reply.

The queue is visible to agents on the **Mine** tab of the Conversation page, where they can see the conversations assigned to them and wait for their attention.

The provided examples show how the agent queue works:

!!! note
    The [conversation limits](../../settings/account-settings.md#conversation-limit-per-agent) and specific queue behavior may vary depending on the Live Agent configuration and settings in use.

**Example 1**

Conditions:

- Conversations are assigned to an agent, but the agent still needs to send the first reply.
- The Conversation limit is set to 2 conversations per agent.
- There is one online agent available.
- 3 conversations are created.

Result: The first two conversations are assigned to the agent and are in the queue, waiting for the agent to reply. One conversation remains unassigned.

**Example 2**

Conditions:

- Conversations are assigned to an agent, but the agent still needs to send the first reply.
- The Conversation limit is turned off, meaning there is no limit on the number of conversations per agent.
- There is 1 online agent available.
- 3 conversations are created.

Result: All three conversations are assigned to the agent and in a queue, waiting for the agent to send the first reply. None of the conversations have been assigned yet.

**Example 3**

Conditions:

- Both settings in the Inbox are activated: Automatic Conversation Assignment and Consider Conversation Priority.
- Conversations are assigned to an agent, but the agent still needs to send the first reply.
- The Conversation limit is set to 2 conversations per agent.
- There is one online agent available.
- 3 conversations with different [priorities](../conversation-routing/automatic-mode.md#additional-automatic-assignment-parameters) are created:
    - Conversation 1 is Medium.
    - Conversation 2 is Low.
    - Conversation 3 is High.

Result: The agent is assigned Conversation 3 (High), followed by Conversation 1 (Medium), both in the queue. Conversation 2 (Low) remains unassigned.


## More Information

- [Real-Time Queue Notifications](real-time-queue-notifications.md)
- [Conversation Routing: Automatic mode](../conversation-routing/automatic-mode.md)
- [Conversation Routing Overview](../conversation-routing/overview.md)