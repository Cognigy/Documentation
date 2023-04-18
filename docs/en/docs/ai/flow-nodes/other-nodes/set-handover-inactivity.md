---
title: "Set Handover Inactivity"
slug: "set-handover-inactivity"
hidden: false
---
# Set Handover Inactivity

This Node detects and handles inactivity, freeing capacity for the human agent team. To configure this feature, specify the input.handover.inactivityCount >= <time in minutes> condition in the If Node's Condition field. You can also adjust the count value as needed.

To improve the user experience, consider adding a [Say](../message/say.md) Node message that prompts the user with a message such as "Are you still there? The conversation will be automatically closed soon."

Using the [Say](../message/say.md#handover-settings) Node, you can determine whether the agent, user, or both receive messages from the virtual agent after the time has expired.

To close a handover based on the inactivity event, use the [Close Handover](close-handover.md) Node. Alternatively, you can initiate another inactivity behavior if necessary.

