---
title: "Set Handover Inactivity"
slug: "set-handover-inactivity"
hidden: false
---
# Set Handover Inactivity

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/set-handover-inactivity.png" width="50%" />
</figure>

## Description

This Node detects and handles user inactivity, freeing up capacity for the human agent team. To configure this Node, specify the time in minutes during which the user can be inactive.

## Parameters

| Parameter | Type   | Description                                                |
|-----------|--------|------------------------------------------------------------|
| Timer     | Number | The time in minutes during which the user can be inactive. |

## How to Use

To use the Node, first configure the [Lookup](../logic/lookup.md) Node to enable different inactivity behaviors.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/set-handover-inactivity-lookup.png" width="70%" />
</figure>

To manage the user inactivity time, use the `input.handover.inactivityCount >= <times inactivity was reached>` condition in the **Condition** field of the [If](../logic/if.md) Node. For example, `input.handover.inactivityCount >= 2`. You can also adjust the count value as needed.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/set-handover-inactivity-if.png" width="70%" />
</figure>

To improve the user experience, after the Set Handover Inactivity Node, add a [Say](../basic/say.md) Node message that prompts the user with a message such as `Are you still there? The conversation will be automatically closed soon`.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/set-handover-inactivity-say.png" width="70%" />
</figure>

Using the [Say](../basic/say.md#handover-settings) Node, you can determine if the agent, user, or both receive messages from the AI Agent after the time has expired.

To close a handover based on the inactivity event, use the [Close Handover](close-handover.md) Node. Alternatively, you can initiate another inactivity behavior if necessary.

## More Information

- [User Inactivity Detection and Handling](../../../escalate/user-inactivity-detection.md)
- [Agent Handover](handover-to-agent.md)
- [Set Handover Inactivity](set-handover-inactivity.md)
- [Close Handover](close-handover.md)