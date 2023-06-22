---
title: "Agent Queue"
slug: "agent-queue"
description: ""
hidden: false
---

# Agent Queue

The _Agent Queue_ is a list of conversations waiting for attention from agents. In Live Agent, a queue is similar to the waiting area, where conversations are held until the agent has not sent the first reply.

The queue is visible to agents on the **Mine** tab of the Conversation page, where they can see the conversations assigned to them and wait for their attention.

The provided examples show how the agent queue works:

!!! note
    The [conversation limits](../account-settings.md#conversation-limit-per-agent) and specific queue behavior may vary depending on the Live Agent configuration and settings in use.

**Example 1**

Conditions:

- Conversations are assigned to an agent, but the agent still needs to send the first reply.
- The Conversation limit is set to 2 conversations per agent.
- There is one online agent available.
- 3 conversations are created.

Result: One conversation is assigned to the agent, one conversation is assigned to the agent and in the queue where waiting for the agent to reply, and one conversation remains unassigned.

**Example 2**

Conditions:

- Conversations are assigned to an agent, but the agent still needs to send the first reply.
- The Conversation limit is turned off, meaning there is no limit on the number of conversations per agent.
- There is 1 online agent available.
- 3 conversations are created.

Result: All three conversations are assigned to the agent and in a queue, waiting for the agent to send the first reply. None of the conversations have been assigned yet.

