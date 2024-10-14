---
title: "Real-Time Queue Notifications"
slug: "real-time-queue-notifications"
description: ""
hidden: false
---

# Real-Time Queue Notifications for End Users

Keep end users informed about queue updates by providing real-time position and wait time updates. 
This approach helps reduce anxiety and creates transparency, making customers feel valued and respected. 
By analyzing the data collected from the queue, you can identify patterns and trends for further analysis. 
For example, you might discover peak times when the queue is longest or see how long your customers usually wait for a response from a human agent.

With Live Agent, you can inform customers about queue updates by configuring the following parameters:

- Get Queue Position
- Get Estimated Wait Time
- Alternative Update Options. Set when certain conditions are met, such as when the Maximum Queue Position and Maximum Estimated Wait Time are reached.

## Add a Lookup Node

1. Below the Handover to Agent Node, add a Lookup Node.
2. Open the Node editor and 
3. From the **Type** list, select **Handover Status**.
4. Click **Save Node**.
5. In the Case Node of the Lookup Node, select **Queue** from the **Handover Status** list and click **Select**.
6. Click **Save Node**.

## Add an If Node

1. Below the **Case** Node, add an If Node.
2. Open the If Node editor and add the following condition:

   ```txt
   {{input.data.request.position}} < 2 && {{input.data.request.estimatedWaitTime / (1000 * 60)}} < 200
   ```

   `{{input.data.request.position}} < 2` - checks if the customer's position in the queue is less than 2. If true, it means the customer is either in first place or second place in the queue.
   `{{input.data.request.estimatedWaitTime / (1000 * 60)}} < 200`- calculates the estimated wait time in minutes. The estimated wait time is provided in milliseconds, dividing by `(1000 * 60)` converts it to minutes.
    It then checks if this wait time is less than 200 minutes. If true, it means the estimated wait time is manageable.
  
3. Click **Save Node**.

## Add Say Nodes

1. Below the condition **Then**, add a Say Node.
2. Open the Say Node editor and paste the following text into the **Text** field:
   
   ```txt
   Position: {{input.data.request.position}}

   Estimated time: {{input.data.request.estimatedWaitTime / (1000 * 60)}} minutes
   ```
3. Click **Save Node**.
4. Below the condition **Else**, paste the following text into the **Text** field:  

   ```txt  
   {{input?.handover?.data?.alternativeText}}
   ```
5. Click **Save Node**.

### Add a Go To Node

1. Below the Say Nodes, add a Go To Node.
2. In the Go To Node, select the current from the **Select Flow** field and **Lookup** Node from the **Select Node** field.
3. Click **Save Node**.