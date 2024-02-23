---
title: "Step Explorer" 
slug: "step-explorer" 
hidden: false 
---

# Step Explorer

_Step Explorer_ helps you to see how customers navigate through a conversation. It shows key paths in the conversation, such as how customers react to the Virtual Agent's responses and questions, as well as identifying points where customers disengage, all within a specified time frame.  This information allows you to evaluate and improve your Virtual Agent for better understanding, potentially increasing orders, bookings, or reducing support requests. The Step Explorer lets you explore conversation steps and how they connect with each other.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/step-explorer.png" width="100%" />
  <figcaption>Step Explorer</figcaption>
</figure>

In the left-side menu of Insights, select Step Explorer.

When the Step Explorer is selected, the Agent's name is displayed in the top left corner. Insights processes the current Agent's data for analysis, and the Step Explorer report displays the data-related analytic graphs. If multiple Agents are available in Cognigy.AI, you can select them here in a drop-down menu to analyze each of them.

When switching from your Agent in Cognigy.AI to Cognigy Insights, all filters are configured so that you can view data related to the active Agent. This allows you to monitor the performance of this Agent over a specific time period. To switch between Cognigy.AI and Insights, click the Insights option in the user menu.

## Before You Begin

Differing from the Transcript Explorer and Message Explorer, which gather data automatically based on existing data, the Step Explorer requires you to prepare data to start gathering it. To do so, decide what you want to gather: Node data, Intent data, or both.

### Annotate Actions

For effective use of the Step Explorer, ensure that annotations are defined for evaluating and displaying analytics data.

The Step Explorer offers valuable insights, including:

- **Order Intent Understanding**. Track the number of customers who have placed orders.
- **Customer Response Analysis**. Understand customer reactions at specific steps, including frequency and quantity.

#### Annotate Node Actions

To gather data on Node actions, you need to annotate them. This means providing descriptions of the actions to understand how the node works and analyze its performance.

To annotate a Node, follow the steps below:

1. Open the Cognigy.AI interface.
2. In the left-side menu, select an Agent.
3. Navigate to **Build > Flows**.
4. Create a new Flow by clicking **+ New Flow** in the upper-right corner or using an existing one.
5. In the Flow editor, create a new Node by clicking **+** and selecting one from the list or using an existing one.
6. Open the Node editor by clicking the Node you want to annotate.
7. In the Node Editor, go to **Settings > Analytics Step**.
8. In the **Analytics Step** field, enter a title for the Node's action. For example, if the Node is responsible for selecting multiple products, the step could be titled `Product Selection`.
9. Click **Save**.

#### Annotate Intent Actions

To gather data on Intent actions, you need to annotate them. This involves providing descriptions of the actions to understand how the intent works and analyze its performance.

To annotate an Intent, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu, select an Agent.
3. Navigate to **Build > Flows**.
4. Create a new Flow by clicking **+ New Flow** in the upper-right corner or use an existing one.
5. In the upper-right corner of the Flow editor, select the **NLU** tab.
6. In the **Intents** tab, create a new Intent by clicking **+ Create Intent** or use an existing one.
7. On the selected Intent page, go to **Advanced > Analytics Step**.
8. In the **Analytics Step** section, provide a title that clearly represents the Intent's action. For example, if the Intent involves selecting a specific product type, such as Pizza, consider naming the step `Pizza Order`, `Pizza Selection`, or `Pizza`.
9. Click **Save**.


### Test your Flow

To view the results on the Step Explorer page, test your virtual agent via the Interaction panel or the Demo Webchat.

## Filter Steps

By default, the Step Explorer shows the **Global Filters** section at the top of the page.

You can filter sessions by using the following options:

- [Global Filters](#global-filters)
- [Additional Filters](#additional-filters)

To hide the Filter menu, click ![insight-filter-black](../assets/icons/insight-filter-black.svg) in the upper-right corner.

### Global Filters

For more information, read the [Global Filter](global-filter.md) documentation.

### Additional Filters

You can use additional filters to refine your research.

To open the **Additional Filters** selection,
click **more filters ![insight-filter-black](../assets/icons/insight-filter-black.svg)** in the **Global Filters** section at the top of the **Transcript Explorer** page.

| Filter         | Description                                                                                                                                                                               |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Message Rating | Select the rating criteria: <br> - **Positive** — messages perceived positively. <br>- **None** — messages with no sentiment. <br>- **Negative** — messages perceived negatively.         |
| Direction      | Select one of the following directions:<br>- **Forward** — the report begins with the first step of the session.<br>- **Backward** — the report starts with the last step of the session. |
| Starting Step  | Select the step where the analysis starts.                                                                                                                                                |
| Contains Step  | Select the steps you want to analyze.                                                                                                                                                     |

{! _includes/insights/exclude-filters.md !}

{! _includes/insights/reset-filters.md !}

## Step Overview

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/step-explorer-elements.png" width="100%" />
  <figcaption>Step Explorer Elements</figcaption>
</figure>

1. **All Starting Steps**. The starting point of the session, when the user enters a session and starts interacting with the bot.
2. **Analytics Step Name**. The name that you specified in the Node or Intent settings.
3. **Further Steps view**. Displays actions that follow a specific decision (step) in a session.
4. **%** (From the previous step). The percentage of end users who reached this step compared to the previous step.
5. **Drop-off**. The percentage of users who leave a step before finishing it.

## Step Details

To view step details, hover the cursor over the step on the Step Explorer page.

| Parameter          | Description                                                                      |
|--------------------|----------------------------------------------------------------------------------|
| Step name          | Analytics Step name that you specified in the Node or Intent settings            |
| Flow Name          | A Flow where the Note or Intent is used.                                         |
| From previous step | The percentage of end users who reached this step compared to the previous step. |
| From end step      | The percentage of end users who reached this step compared to the lats step.     |
| Times              | The total number of end users who reached this step.                             |

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/step-explorer-details.png" width="100%" />
  <figcaption>Step Explorer Details</figcaption>
</figure>

## Step Operations

To view step operations, right-click the selected Step on the Step Explorer page.

| Operation                             | Description                                                                                                                                                                                                                                                                                                                                                 |
|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Open Flow                             | Opens a related Flow in the Cognigy.AI interface in a new browser tab.                                                                                                                                                                                                                                                                                      |
| Open Node                             | Opens a related Node in the Cognigy.AI interface in a new browser tab.                                                                                                                                                                                                                                                                                      |                                                                             |
| Open sessions that took this path     | Tracks the number of sessions following the same sequence of steps, including the selected step, which is useful for understanding user interaction with your application. It helps optimize the user experience, identify successful strategies, and assess the effectiveness of features. Related sessions are displayed on the Transcript Explorer page. |
| Open sessions which contain this step | Tracks the number of sessions in which end users have completed the selected step. Related sessions are displayed on the Transcript Explorer page.                                                                                                                                                                                                          |
| Open conversations that ended here    | This option appears in the menu only if you click the Drop-off step. This means that you can view all sessions from which end users leave a step before finishing it.                                                                                                                                                                                       |
| Set as Starting Step                  | Places the selected step at the beginning of the path.                                                                                                                                                                                                                                                                                                      |
| Set as Ending Step                    | Places the selected step at the end of the path.                                                                                                                                                                                                                                                                                                            |

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/step-explorer-menu.png" width="100%" />
  <figcaption>Step Explorer Operations</figcaption>
</figure>

## Examples

### Node Annotation

Let's
consider an example
in which Nodes are annotated in a Flow where users select a product and payment method and make an order.
In the image below, it's evident that out of all users, only 1 completed the order.

The following steps are presented:

1. **Greetings**. All 5 users successfully completed the first step, resulting in a 100% completion rate. 
2. **Product selection**. All 5 users completed this step, resulting in a 100% completion rate.
3. **Delivery address specification**. All 5 users provided their delivery addresses, resulting in a 100% completion rate.
4. **Delivery date specification**. Four out of the initial 5 users completed this step, resulting in an 80% completion rate. One user did not proceed to specify the delivery date.
5. **Payment method selection**. Only 2 out of the initial 5 users completed this step, resulting in a 50% completion rate. The other 3 users did not proceed to select a payment method.
6. **Order confirmation**. Finally, only 1 out of the initial 5 users completed this step, resulting in a 50% completion rate. The other 4 users did not confirm their orders.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/step-explorer-node-example.png" width="100%" />
  <figcaption>Step Explorer Node Example</figcaption>
</figure>

### Intent Annotation

Let's consider an example in which Nodes and Intents are annotated in a Flow where users select a product and payment method and make an order.

In the image below, it's evident that out of all users, only 2 completed the order.

1. **Greetings**. All 5 users successfully completed the first step, resulting in a 100% completion rate.
2. **Product Selection**:
    - Completed by 100% of users (5 users).
    - 40% selected products from a non-specific category:
        - 20% selected Coke.
        - 20% selected Fries.
        - 20% selected Pizza.
3. **Delivery address specification**. All 5 users provided their delivery addresses, resulting in a 100% completion rate.
4. **Payment method selection**:
    - Not completed by 50% of users who did not select a product category (1 user).
    - Users who ordered Coke and Fries did not select a payment method, resulting in 100% drop-off for each.
    - User who selected Pizza completed the step 100% (1 user).
5. **Order Confirmation**:
    - One user who ordered Pizza and one user without a product category completed their orders successfully, resulting in a 50% completion rate (2 users).

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/step-explorer-intent-example.png" width="100%" />
  <figcaption>Step Explorer Intent Example</figcaption>
</figure>

## More Information

- [Transcript Explorer](transcript-explorer.md)
- [Message Explorer](message-explorer.md)