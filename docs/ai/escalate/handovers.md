---
title: "Handover Providers"
slug: "handover-providers"
description: "Cognigy.AI Handover Providers connect AI Agents to contact centers, enabling seamless handoffs from automated conversations to human agents."
hidden: false
tags:
   - handovers
   - handover inactivity
   - contact centers
   - user inactivity detection and handling
---

# Handover Providers

_Handover Providers_ connect AI Agents to contact centers, enabling seamless handoffs from automated conversations to human agents.
The handover happens through the [Handover to Agent Node](../build/node-reference/service/handover-to-agent.md) within a Flow,
allowing escalation when human assistance is required — whether due to complexity, personalization, or AI Agent's limitations.
With multiple Handover to Agent Nodes in your Flow, you can route conversations to different contact centers. For example, VIP customers can be directed to Genesys, while basic inquiries go to Cognigy Live Agent.

To enable the handover process, in addition to the Handover to Agent Node, you'll need:

- [Compatible contact center and its connector](handover-reference/overview.md)
- [Endpoint that supports handovers](../deploy/endpoints/handover-settings.md#channel-support)

Cognigy.AI offers a range of tools to manage this escalation effectively:

- Nodes:
    - [Handover to Agent](../build/node-reference/service/handover-to-agent.md) — initiates the transfer to a human agent.
    - [Check Agent Availability](../build/node-reference/service/check-agent-availability.md) — verifies if human agents are free to take over.
    - [Lookup](../build/node-reference/logic/lookup.md#handover-status) — monitors handover status, for example, completed, canceled, error, queue.
    - [Close Handover](../build/node-reference/service/close-handover.md) — ends the handover process when appropriate.
    - [Set Handover Inactivity](../build/node-reference/service/set-handover-inactivity.md) — defines timeouts for inactive handovers.
- Features:
    - [User Inactivity Detection](user-inactivity-detection.md) — triggers actions based on user silence.
    - [Real-Time Queue Notifications](../../live-agent/conversation/conversation-queue/real-time-queue-notifications.md) — provides live updates on queue status (applicable only to Cognigy Live Agent).

## Working with Handover Providers

=== "GUI"
    You can create, edit, and delete handover providers in **Deploy > Handover Providers**.

=== "API"
     You can view, edit, and delete handover providers using the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi#post-/v2.0/handover/provider).
