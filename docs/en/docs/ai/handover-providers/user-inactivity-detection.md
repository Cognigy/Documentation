---
title: "User Inactivity Detection and Handling"
slug: "user-inactivity-detection-and-handling"
description: "Cognigy Inactivity Detection and Handling feature allows you to detect inactivity of end users during handovers and to handle this inactivity by auto-closing the handover, configuring automated responses or trigger further actions."
hidden: false
---
# User Inactivity Detection and Handling

[![Version badge](https://img.shields.io/badge/Added in-v4.53-blue.svg)](../../release-notes/4.53.md)

The _Inactivity Detection and Handling_ feature allows you to detect inactivity of end users during handovers and allows you to handle this inactivity by auto-closing the handover, configuring automated responses or trigger further actions. This feature helps to ensure that human agent's resources are being used more efficiently.

Configuring several nodes is required to use The Inactivity Detection and Handling feature:

- [Handover to Agent](#set-up-handover-to-agent-node)
- [Lookup](#set-up-lookup-node)
- [Set Handover Inactivity](#set-up-set-handover-inactivity-node)
- [Go To](#set-up-go-to-node)
- [If](#set-up-if-node)

Below, we provide an example of how to set up Inactivity Detection and Handling, which can be customized to meet your specific needs.

## Set up Handover to Agent Node

To ensure proper detection and handling of inactivity during queue time or active handovers, follow these steps:

1. In the Flow editor, add the **Handover to Agent** Node.
2. Open a Node editor by clicking the **Handover to Agent** Node.
3. In the Node editor, go to the **Event Settings** section:
4. Toggle on the **Send Queue Event** and **Send Active Event** settings:
     - **Send Queue Event** - if enabled, an event is sent to the Flow once the end user enters the queue. This is a prerequisite to detect inactivity while the end user is in the queue. 
     - **Send Active Event** - if enabled, an event is sent to the Flow as soon as the handover becomes active, that is when the human agent sends the first message. This is a prerequisite to detect inactivity while a handover is active.
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
   5.3 In the **Value** field, specify the `active` handover status if you want to detect and handle inactivity while the end users are in the queue.<br>
   5.4 Click **Save Node**.<br>
      <figure>
           <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/3-handover-child-lookup.png" width="100%" />
      </figure>
   5.5 Click the second **Case** Node.<br>
   5.6 In the **Value** field, specify the `queue` handover status if you want to detect and handle inactivity while the end users are in the queue.<br>
   5.7 Click **Save Node**.<br>
      <figure>
           <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/4-handover-second-child-lookup.png" width="100%" />
      </figure>
6. Add **completed** and **error** child Nodes by analogy.
   

## Set up Set Handover Inactivity Node

If you want to detect inactivity during the queue time, the first timer should be started once the end user enters the queue.

To do this, add the Once Node to start the inactivity timer when you receive the queue event:

1. Below the **queue** child Node, add **Once** Node.
2. Below the **On First Time** child Node, add the **Set Handover Inactivity** Node.
3. In the **Set Handover Inactivity** Node, specify the inactivity timeout in minutes, for example, `1`.  On each incoming user input, the timer is automatically reset and starts from the beginning. Once the timer expires, an inactivity event is sent to the Flow.
4. Click **Save Node**.
5. Repeat the same steps for the **active** child Node in case you want to detect and handle inactivity during active handovers.

<figure>
   <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/5-set-handover-inactivity.png" width="100%" />
</figure>

The timer is set in minutes and may vary by up to one minute. If there is no end user input, the timer will expire after the specified time. If an end user input is received before the timeout, the timer will automatically reset and start from the beginning.

Note that when the Handover Status is set to `queue` or `active`, Flows (excluding [AI Copilot](../../ai-copilot/overview.md) Flows) will not be triggered by user input. Flows will only be triggered by the inactivity timeout.

## Set up Go To Node

Set the **Go To** Node to return to the Lookup Node. This moves the entrypoint to the Lookup node, allowing the Flow to execute the correct Lookup child branch based on incoming events.

In the **Go To** Node editor,
select **Lookup** from the **Select Node** list
and **Go To Node and wait for Input** from the **Execution Mode** list in the **Advanced** section.

<figure>
   <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/6-handover-go-to.png" width="100%" />
</figure>

## Set up If Node

An example of how detected inactivity could be handled is explained here:

1. Add the **If** Node at the end of the Flow.
2. In the Node editor, specify `input.handover.inactivityCount >= 2`. This allows handling the second detected inactivity differently from the first one. Note that the `input.handover.inactivityCount` is reset to 0 once the end user sends a message.
3. Below the **If** Node and its **Else** child Node, do the following to ask the end user, based on detected inactivity, if he is still there.<br>
   3.1 Add the **Say** Node.<br>
   3.2 In the **Say** Node editor, in the text field, specify `Are you still there? The conversation will be automatically closed soon`.  <br>
   3.3 In **Handover Settings > Handover Output Destination**, select **User** to only show the message to the user and not the human agent.<br>
   3.4 Click **Save Node**.<br>
   3.5 Add the **Set Handover Inactivity** Node to start a subsequent inactivity timer.<br>
   If the inactivity count is greater than two, it triggers the close handover process, which can close the handover on both the user and human agent sides.
4. Below the **If** Node and its **Then** child Node, do the following to auto-close the handover after the inactivity timer expired the second time in direct succession:<br>
   4.1 Add the **Close Handover** Node to auto-close the handover.<br>
   4.2 Add the **Say** Node.<br>
   4.3. In the **Say** Node editor, in the text field, specify `You are back with the bot now!`.<br>
   4.4 In **Handover Settings > Handover Output Destination**, select **User and Agent**.<br>
   4.5 Click **Save Node**.<br>
If the inactivity count is less than two,
   it triggers prompt the user to respond to prevent the conversation from being automatically closed.
   The Set Handover Inactivity Node will set the time period for inactivity
   after which the conversation will be closed or restart a Flow from the beginning.

<figure>
   <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/7-handover-if.png" width="100%" />
</figure>

Finally, add the **Go To** Node to return to the **Lookup** Node as you did before. In the **Go To** Node editor,
select **Lookup** from the **Select Node** list
and **Go To Node and wait for Input** from the **Execution Mode** list in the **Advanced** section. 

Test your Flow via the demo Webchat and any connected providers, for example, Cognigy Live Agent.

## More Information

- [Set Handover Inactivity](../flow-nodes/other-nodes/set-handover-inactivity.md)
- [Close Handover](../flow-nodes/other-nodes/close-handover.md)
- [Handover Providers](overview.md)
- [Agent Handover](../tools/agent-handover.md)





