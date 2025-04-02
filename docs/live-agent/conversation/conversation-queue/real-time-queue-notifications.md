---
title: "Real-Time Queue Notifications"
slug: "real-time-queue-notifications"
description: "Cognigy Live Agent keeps end users informed about queue updates by providing real-time position and wait time information."
hidden: false
search:
   boost: 2
tags:
   - real-time queue notifications
   - get estimated wait time
   - wait time
   - update wait interval
---

# Real-Time Queue Notifications for End Users

[![Version badge](https://img.shields.io/badge/Added in-v4.87-blue.svg)](../../../release-notes/4.87.md)

The _Real-Time Queue Notifications_ feature keeps end users informed about queue updates by providing real-time position and wait time information. 
This feature helps reduce anxiety and creates transparency, making your customers feel valued and respected. By analyzing the data collected from the queue, you can identify patterns and trends for further analysis.
For example, you might identify peak times when the queue is longest or determine the typical wait time for a response from a human agent.

With Live Agent, you can inform customers about queue updates by configuring several Nodes to use the Real-Time Queue Notifications feature:

- [Handover to Agent](#configure-settings-for-a-handover-to-agent-node) 
- [Lookup](#add-a-lookup-node)
- [If](#add-an-if-node)
- [Say](#add-say-nodes)
- [Go To](#add-a-go-to-node)

## Prerequisites

- Cognigy.AI and Live Agent versions 4.87 and later.

## Configure Settings for a Handover to Agent Node

1. In the Flow editor, add the Handover to Agent Node or use an existing one if you already added it earlier. 
2. Open a Node editor by clicking the Handover to Agent Node.
3. Go to the **Live Agent Settings** section.
4. For the queue position, configure the following settings:
    - **Get Queue Position** — activate the setting to retrieve the end user's current queue position.
    - **Update Interval** — specify how often (in seconds) to receive updates on the queue status. For example, set the interval to `30` seconds to receive updates every half-minute.
5. For estimated wait time, configure the following settings:
    - **Get Estimated Wait Time** — activate the setting to retrieve the estimated wait time for the end user.
    - **Wait Time Update Interval** — specify how often (in seconds) to receive updates on the wait time. For example, set the interval to `30` seconds to receive updates every half-minute.
6. Configure alternative update options:
    - **Alternative Update** — activate the alternative update options that trigger when certain conditions are met, such as reaching the maximum queue position or maximum estimated wait time.
    - **Maximum Queue Position** — specify the maximum queue position. If you set this to `5`, the system will send an alternative message when the user's position exceeds 5.
    - **Maximum Estimated Wait Time** — specify the maximum estimated wait time in milliseconds. Set this to `300000` milliseconds (5 minutes). If the estimated wait time exceeds this time, the system will send an alternative message from the **Alternative Text** field.
    - **Alternative Text** — specify the message that should be sent when either the maximum queue position or maximum wait time is reached. For example, `Thank you for your patience. We are experiencing higher than usual wait times. Please hold on, and an agent will assist you shortly.`
7. Click **Save Node**.

When the settings are configured, you can test this configuration by creating a handover via [Demo Webchat](../../../webchat/demo.md).
In the chat, as an end user, you will receive the message in the following format:

```json
{
  "request": {
    "position": 3,
    "estimatedWaitTime": 300000
  }
}
```

To change the appearance of this message and make it more accessible, as well as to configure the **Alternative Text** message output, follow the instructions below.

## Add a Lookup Node

1. Below the Handover to Agent Node, add a Lookup Node. 
2. Open a Node editor by clicking the Lookup Node.
3. From the **Type** list, select **Handover Status**.
4. Click **Save Node**.
5. In the Case Node of the Lookup Node, select **Queue** from the **Handover Status** list and click **Select**.
6. Click **Save Node**.
7. Remove the second Case Node.

## Add an If Node

1. Below the **Case** Node, add an If Node.
2. Open the If Node editor and add the following condition:

    ```txt
    {{"{{input.data.request.position}}"}} < 2 && {{"{{input.data.request.estimatedWaitTime / (1000 * 60)}}"}} < 200
    ```
   
    where:

    - `{{"{{input.data.request.position}}"}} < 2` — checks if the customer's position in the queue is less than 2. If true, it means the customer is either in first place or second place in the queue.
    - `{{"{{input.data.request.estimatedWaitTime / (1000 * 60)}}"}} < 200` — calculates the estimated wait time in minutes. The estimated wait time is provided in milliseconds, dividing by `(1000 * 60)` converts it to minutes.
    It then checks if this wait time is less than 200 minutes. If true, it means the estimated wait time is manageable.
  
3. Click **Save Node**.

## Add Say Nodes

1. Below the condition **Then**, add a Say Node.
2. Open the Say Node editor and paste the following text into the **Text** field:
   
    ```txt
    Position: {{"{{input.data.request.position}}"}}

    Estimated time: {{"{{input.data.request.estimatedWaitTime / (1000 * 60)}}"}} minutes
    ```
   
    where:

    - `input.data.request.position` — the user's current position in the queue.
    - `input.data.request.estimatedWaitTime / (1000 * 60)` minutes — the estimated wait time in minutes. The `estimatedWaitTime` is initially provided in milliseconds. It is divided by 1000 to convert it to seconds, and then by 60 to convert it to minutes.

3. Click **Save Node**.
4. Below the condition **Else**, paste the following text into the **Text** field to display the text from the **Alternative Text** field of the Handover to Agent Node that [you configured earlier](#configure-settings-for-a-handover-to-agent-node):  

    ```txt  
    {{"{{input.handover.data.alternativeText}}"}}
    ```
5. Click **Save Node**.

### Add a Go To Node

1. Below the Say Nodes, add a Go To Node.
2. In the Go To Node, select the current from the **Select Flow** list and **Lookup** Node from the **Select Node** list.
3. In the **Advanced** section, select **Go to Node and wait for Input** from the **Execution Mode** list. 
4. Click **Save Node**.

<figure>
    <img class="image-center" src="../../../../_assets/live-agent/conversation/real-time-queue-notifications.png" width="100%" />
    <figcaption>Configuration of Real-Time Queue Notifications</figcaption>
</figure>

## AI Copilot

If you use the [AI Copilot workspace](../../assistants/ai-copilot.md) in Live Agent, include additional Nodes in your AI Copilot Flow: the [Handover to Agent](#configure-settings-for-a-handover-to-agent-node) and [Lookup](#add-a-lookup-node) with the Queue status, followed by the [Say Nodes](#add-say-nodes).
In the Main Flow, below the Case Node with the Queue status,
add a [Go To Node](../../../ai/build/node-reference/logic/go-to.md) that leads to the AI Copilot Flow and its Lookup Node.

## More Information

- [Overview](overview.md)
- [Lookup](../../../ai/build/node-reference/logic/lookup.md)
- [User Inactivity Detection and Handling](../../../ai/escalate/user-inactivity-detection.md)
- [Agent Handover](../../../ai/build/node-reference/service/handover-to-agent.md)