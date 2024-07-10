---
title: "Close Handover"
slug: "close-handover"
hidden: false
---
# Close Handover

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/close-handover.png" width="80%" />
  <figcaption>Close Handover</figcaption>
</figure>

## Description

Closes the handover conversation in the handover provider, such as Live Agent. If turned off, the user will only be returned to the virtual agent.

If the Close Handover Node is not active and the human agent resolves a conversation in the Handover Provider later, the Node will be ignored and not trigger a Flow.

You can use this Node after the [Set Handover Inactivity](set-handover-inactivity.md) Node.

## More Information

- [User Inactivity Detection and Handling](../../../escalate/user-inactivity-detection.md)
- [Set Handover Inactivity](set-handover-inactivity.md)
- [Handover Providers](../../../escalate/handover-reference/overview.md)
- [Agent Handover](handover-to-agent.md)