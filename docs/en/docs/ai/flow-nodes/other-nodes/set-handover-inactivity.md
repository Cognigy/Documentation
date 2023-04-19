---
title: "Set Handover Inactivity"
slug: "set-handover-inactivity"
hidden: false
---
# Set Handover Inactivity

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/set-handover-inactivity.png" width="80%" />
  <figcaption>Set Handover Inactivity</figcaption>
</figure>

## Description
<div class="divider"></div>

This node detects and handles user inactivity, freeing up capacity for the human agent team. To configure this node, specify the time in minutes during which the user can be inactive.

To use the Node, first configure the [Lookup](../logic/lookup.md) Node to enable different inactivity behaviors.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/set-handover-inactivity-lookup.png" width="120%" />
</figure>

To manage the user inactivity time, use the `input.handover.inactivityCount >= <times inactivity was reached>` condition in the **Condition** field of the [If](../logic/if.md) Node. For example, `input.handover.inactivityCount >= 2`. You can also adjust the count value as needed.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/set-handover-inactivity-if.png" width="120%" />
</figure>

To improve the user experience, after the Set Handover Inactivity Node, add a [Say](../message/say.md) Node message that prompts the user with a message such as "Are you still there? The conversation will be automatically closed soon."

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/set-handover-inactivity-say.png" width="120%" />
</figure>

Using the [Say](../message/say.md#handover-settings) Node, you can determine whether the agent, user, or both receive messages from the virtual agent after the time has expired.

To close a handover based on the inactivity event, use the [Close Handover](close-handover.md) Node. Alternatively, you can initiate another inactivity behavior if necessary.

