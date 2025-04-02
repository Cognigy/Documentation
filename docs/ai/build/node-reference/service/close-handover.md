---
title: "Close Handover"
slug: "close-handover"
hidden: false
---
# Close Handover

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/close-handover.png" width="50%" />
</figure>

## Description

This Node closes the handover conversation in the handover provider, such as Live Agent. If turned off, the user is only returned to the AI Agent.

If the Close Handover Node isn't active and the human agent resolves a conversation in the Handover Provider later, the Node is ignored and doesn't trigger a Flow.

You can use this Node after the [Set Handover Inactivity](set-handover-inactivity.md) Node.

## More Information

- [User Inactivity Detection and Handling](../../../escalate/user-inactivity-detection.md)
- [Set Handover Inactivity](set-handover-inactivity.md)
- [Handover Providers](../../../escalate/handover-reference/overview.md)
- [Agent Handover](handover-to-agent.md)