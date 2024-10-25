# Handovers

*Handover Providers* are connectors between Cognigy.AI and Contact Centers. Conversations are passed between Cognigy.AI and a Handover Service using the [Handover to Agent](../build/node-reference/service/handover-to-agent.md) Node.

To establish a handover, you need access to a [handover provider](handover-reference/overview.md) and its integration within an [Endpoint
that supports handovers](../deploy/endpoints/handover-settings.md#channel-support). 
To set up the logic for escalating communication to the contact center, you can use the following Nodes and features:

- Nodes:
    - [Handover to Agent](../build/node-reference/service/handover-to-agent.md) 
    - [Check Agent Availability](../build/node-reference/service/check-agent-availability.md)
    - [Lookup](../build/node-reference/logic/lookup.md#handover-status)
    - [Close Handover](../build/node-reference/service/close-handover.md)
    - [Set Handover Inactivity](../build/node-reference/service/set-handover-inactivity.md)
- Features:
    - [User Inactivity Detection](user-inactivity-detection.md)
    - [Real-Time Queue Notifications](../../live-agent/conversation/conversation-queue/real-time-queue-notifications.md) (applicable only to Cognigy Live Agent)
