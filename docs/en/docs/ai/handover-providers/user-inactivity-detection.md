---
title: "User Inactivity Detection and Handling"
slug: "user-inactivity-detection-and-handling"
hidden: false
---
# User Inactivity Detection and Handling

The _Inactivity detection and handling_ feature allows you to detect inactivity of end users during handovers and allows you to handle this inactivity by auto-closing the handover, configuring automated responses or trigger further actions. This feature helps to ensure that human agent's resources are being used more efficiently.

Configuring several nodes is required to use The Inactivity detection and handling feature:

- [Handover to Agent](#set-up-handover-to-agent-node)
- [Lookup](#set-up-lookup-node)
- [Set Handover Inactivity](#set-up-set-handover-inactivity-node)
- [Go to](#set-up-go-to-node)
- [If](#set-up-if-node)

## Set up Handover to Agent Node

To ensure proper detection and handling of inactivity during queue time or active handovers, follow these steps:

1. In the Flow editor, add the **Handover to Agent** Node.
2. Open a Node editor by clicking the **Handover to Agent** Node.
3. In the Node editor, go to the **Event Settings** section.
4. Toggle on the **Send Queue Event** and **Send Active Event** settings. By toggling on these event settings, you will be able to receive two important events in your Flow: the first event is sent when the end user enters the queue, and the second event is sent when the handover becomes active.
5. Click **Save Node**.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/1-handover-event-settings.png" width="100%" />
</figure>

## Set up Lookup Node

Set up the Lookup Node with handover statuses:

1. In the Flow editor, below the **Handover to Agent** Node, add the **Lookup** Node.
2. Open a Node editor by clicking the Node.
3. In the Node editor, go to the **Type** setting and select **Handover Status** from the list. 
4. Click **Save Node**.

    <figure>
        <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/2-handover-lookup.png" width="100%" />
    </figure>

5. Go to the child Nodes:<br>
   5.1 Click the **Case** Node.<br>
   5.3 In the **Value** field, specify the `active` handover status.<br>
   5.4 Click **Save Node**.<br>

   <figure>
        <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/3-handover-child-lookup.png" width="100%" />
    </figure>
  
   5.5 Click the second **Case** Node.<br>
   5.6 In the **Value** field, specify the `queue` handover status.<br>
   5.7 Click **Save Node**.<br>

   <figure>
        <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/4-handover-second-child-lookup.png" width="100%" />
   </figure>

6. Add **completed** and **error** child Nodes by analogy.

## Set up Set Handover Inactivity Node

The first inactivity timer should start once the user enters the queue. 

To do this, add the Once Node to start the inactivity timer when you receive the queue event:

1. After the **queue** child Node, add **Once** Node.
2. After the **On First Time** child Node, add the **Set Handover Inactivity** Node.
3. In the **Set Handover Inactivity** Node, specify the time in minutes, for example, `1`, that will determine when a timer will stop counting down and trigger an event.
4. Click **Save Node**.
5. Repeat the same steps for the **active** child Node.

<figure>
   <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/5-set-handover-inactivity.png" width="100%" />
</figure>

The timer is set in minutes and may vary by up to one minute. If there is no end user input, the timer will expire after one minute. If an end user input is received, the timer will reset to zero and only expire when the specified timer expires.

After the **Set Handover Inactivity** Node, you can add the **Overwrite Analytics** Node to record changes to the Analytics database.

## Set up Go to Node

Set the **Go to** Node to return to the Flow to react to any event.

Remember to differentiate between inactivity behavior for queue time and active time.

You can configure different inactivity behavior for queue and active states and use inactivity detection and handling only in the queue or active times. This differentiation allows the agent to see the conversation, do a wrap-up, summarize the conversation, etc., even after closing the conversation due to inactivity.

<figure>
   <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/6-handover-go-to.png" width="100%" />
</figure>

## Set up If Node

To check if there has been inactivity in the conversation for a certain amount of time:

1. Add the IF Node at the end of the Flow.
2. In the Node editor, specify `input.handover.inactivityCount >= 2`. 
3. After the **If** Node and its **Then** child Node, do the following:<br>
   3.1 Add the Close Handover Node.<br>
   3.2 Add the **Say** Node.<br>
   3.3. In the Say Node editor, in the text field, specify `You are back with the bot now!`.<br>
   3.4 In **Handover Settings > Handover Output Destination**, select **User and Agent**.<br>
   3.4 Click **Save Node**.<br>
   If the inactivity count is greater than two, it triggers the close handover process, which can close the handover on both the user and human agent sides.
4. After the **If** Node and its **Else** child Node, do the following:<br>
   4.1 Add the **Say** Node.<br>
   4.2 In the Say Node editor, in the text field, specify `Are you still there? The conversation will be automatically closed soon`.<br>
   4.3 In **Handover Settings > Handover Output Destination**, select **User**.<br>
   4.4 Click **Save Node**.<br>
   4.5 Add the **Set Handover Inactivity** Node.<br>
If the inactivity count is less than two, it triggers prompt the user to respond to prevent the conversation from being automatically closed. The Set Handover Inactivity Node will set the time period for inactivity after which the conversation will be closed or restart a Flow from the beginning.

<figure>
   <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/7-handover-if.png" width="100%" />
</figure>

In the end, add the **Go to** Node. 

Check your Flow via the demo Webchat and any connected providers, such as Cognigy Live Agent.





