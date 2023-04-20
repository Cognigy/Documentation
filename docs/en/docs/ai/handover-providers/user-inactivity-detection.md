---
title: "User Inactivity Detection and Handling"
slug: "user-inactivity-detection-and-handling"
hidden: false
---
# User Inactivity Detection and Handling

_Inactivity detection and handling_ feature allows you to set up automated responses or actions when a user is inactive for a specified period of time during a conversation with a virtual agent. This helps to ensure that human agent's resources are being used efficiently and that users are receiving timely assistance.

Configuring several nodes is required to use the inactivity detection and handling feature. The steps involve the Handover to Agent node, specifying event settings, and setting up the lookup node of type handover status.

## Setting up Handover to Agent Node

To detect and handle inactivity during queue time or active handovers, you need to toggle on the event settings. Two events are sent to the flow when the user enters the queue and when the handover becomes active.

To set up these events, go to the Event Settings section and specify that an event should be sent when the end user enters the queue. Similarly, you can also specify that an event should be sent to the flow when the handover becomes active.

## Setting up Lookup Node

To detect and handle inactivity during queue time, create a new child node called "Q" by specifying the handover status as custom with a value of "Q". Likewise, to detect and handle inactivity during active handovers, create a child node called "active".

After creating these nodes, set up the lookup node of type handover status. If you want to detect and handle inactivity during queue time, specify the handover status as custom with a value of "Q" for the child node called Q. For active handovers, specify a custom value of "active" for the corresponding child node.

## Starting the Inactivity Timer

The first inactivity timer should start once the user enters the queue, and it should only start once. To do this, use a "once" node to start the inactivity timer when you receive the queue event. Set the timer value in minutes and specify the time when the timer expires.

Note that the timer value is in minutes and may have a variance of up to one minute. The timer only expires after one minute if no end user input has been received. It will reset to zero when an end user input is received and only expire when the specified timer expires.

## Go to Node

set the "go to" node to go back in the flow to react to any event. Keep in mind that you may want to differentiate between inactivity behavior for queue time and active time. Also, on the cognitive side, you still want the agent to see the conversation, do wrap-up, summarize the conversation, etc. Therefore, after closing the conversation due to inactivity, the agent can continue with the conversation.

You can configure different inactivity behavior for queue and active states and use inactivity detection and handling only in the queue or active times. This differentiation allows the agent to see the conversation, do a wrap-up, summarize the conversation, etc., even after closing the conversation due to inactivity.