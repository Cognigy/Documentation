---
title: "User Inactivity Detection and Handling"
slug: "user-inactivity-detection-and-handling"
hidden: false
---
# User Inactivity Detection and Handling

_Inactivity detection and handling_ feature allows you to set up automated responses or actions when a user is inactive for a specified period of time during a conversation with a virtual agent. This helps to ensure that human agent's resources are being used efficiently and that users are receiving timely assistance.

Configuring several nodes is required to use the inactivity detection and handling feature. The steps involve the Handover to Agent node, specifying event settings, and setting up the lookup node of type handover status.

## Setting up Handover to Agent Node

To ensure proper detection and handling of inactivity during queue time or active handovers, you will need to follow these steps:

1. In the Flow editor, add the **Handover to Agent** Node.
2. Open a Node editor by clicking the Node.
3. In the Node editor, go to the Event Settings section.
4. Toggle on the **Send Queue Event** and **Send Active Event** settings. By toggling on these event settings, you will be able to receive two important events in your flow: the first event is sent when the end user enters the queue, and the second event is sent when the handover becomes active. This will enable you to more effectively manage and respond to potential inactivity issues during these critical times.
5. Click **Save Node**.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/handover-event-settings.png" width="100%" />
</figure>

## Setting up Lookup Node

1. In the Flow editor, after the **Handover to Agent** Node, add the **Lookup** Node.
2. 
To detect and handle inactivity during queue time, create a new child node called "Q" by specifying the handover status as custom with a value of "Q". Likewise, to detect and handle inactivity during active handovers, create a child node called "active".

After creating these nodes, set up the lookup node of type handover status. If you want to detect and handle inactivity during queue time, specify the handover status as custom with a value of "Q" for the child node called Q. For active handovers, specify a custom value of "active" for the corresponding child node.

## Starting the Inactivity Timer

The first inactivity timer should start once the user enters the queue, and it should only start once. To do this, use a "once" node to start the inactivity timer when you receive the queue event. Set the timer value in minutes and specify the time when the timer expires.

Note that the timer value is in minutes and may have a variance of up to one minute. The timer only expires after one minute if no end user input has been received. It will reset to zero when an end user input is received and only expire when the specified timer expires.

## Go to Node

set the "go to" node to go back in the flow to react to any event. Keep in mind that you may want to differentiate between inactivity behavior for queue time and active time. Also, on the cognitive side, you still want the agent to see the conversation, do wrap-up, summarize the conversation, etc. Therefore, after closing the conversation due to inactivity, the agent can continue with the conversation.

You can configure different inactivity behavior for queue and active states and use inactivity detection and handling only in the queue or active times. This differentiation allows the agent to see the conversation, do a wrap-up, summarize the conversation, etc., even after closing the conversation due to inactivity.