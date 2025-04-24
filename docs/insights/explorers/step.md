---
title: "Step Explorer" 
slug: "step-explorer" 
hidden: false 
---

# Step Explorer

The _Step Explorer_ is an analytics tool in Cognigy Insights that lets you visualize how customers navigate through a conversation. You can explore the conversation steps and identify key paths, as well as points where customers disengage. This tool helps you evaluate and improve your AI Agent, potentially increasing understanding, orders, bookings, or reducing support requests.

To open the Step Explorer, use one of the following options:

=== "Via Cognigy.AI"
    1. In the left-side menu of the Cognigy.AI interface, select a Project.
    2. Within the Project, navigate to Insights using one of the following options:
        - In the left-side menu of the Project, select **Insights**.
        - In the bottom-left corner, select **Insights** from the User Menu.<br>
        The Cognigy Insights Overview report will be displayed.
    3. In the left-side menu of the Insights interface, select **Step Explorer**.

=== "Via Insights"
    1. In the left-side menu of the Insights interface, select **Step Explorer**.

The Step Explorer interface will be displayed.
Each column on the Step Explorer page represents a Node or Intent [annotated](#before-you-begin) in the Cognigy.AI Flow.

<figure>
  <img class="image-center" src="../../../_assets/insights/explorers/step/step-explorer.png" width="100%" />
  <figcaption>Step Explorer</figcaption>
</figure>

## Before you Begin

The Step Explorer requires you to set configurations on the Cognigy.AI side before it can start gathering data. In contrast, the Transcript Explorer and Message Explorer gather data without this upfront configuration.

Before collecting data with the Step Explorer, determine the data you need: Node data, Intent data, or a combination of both.

### Annotate Nodes

To gather data on Nodes and analyze their performance, add a title to the analytics step.  Optionally, you can also leave a comment to provide context about the Node's function.
This process of adding a title and comment is called annotating Nodes.

Node annotation helps you analyze customer reactions at specific stages of their interaction with an AI Agent. For instance, by examining customer reactions during the ordering process, you can identify issues such as cart abandonment. You can then make improvements to streamline the process, resulting in improved customer satisfaction and conversion rates.

To annotate a Node, follow the steps below:

1. In the left-side menu of the Project, go to **Build > Flows**.
2. Create a new Flow by clicking **+ New Flow** in the upper-right corner or using an existing one.
3. In the Flow editor, create a new Node by clicking **+** and selecting one from the list or using an existing one.
4. Open the Node editor by clicking the Node you want to annotate.
5. In the Node Editor, go to **Settings > Analytics Step**.
6. In the **Analytics Step** field, enter a title for the Node's action. For example, if the Node is responsible for selecting multiple products, the step could be titled `Product Selection`.
7. Click **Save**.

### Annotate Intents

To gather data on Intents and analyze their performance, add a title to the analytics step.  Optionally, you can also leave a comment to provide context about the Intent's function.
This process of adding a title and comment is called annotating Intents.

Intent annotation helps you analyze customer behaviors and preferences within specific steps, such as behaviors and preferences regarding their ordering patterns. This analysis enables you to understand which products or categories are more popular among customers and provides insights into their purchasing habits and trends.

To annotate an Intent, follow these steps:

1. In the left-side menu of the Project, go to **Build > Flows**.
2. Create a new Flow by clicking **+ New Flow** in the upper-right corner or use an existing one.
3. In the upper-right corner of the Flow editor, select the **NLU** tab.
4. On the **Intents** tab, create a new Intent by clicking **+ Create Intent** or use an existing one.
5. On the selected Intent page, go to **Advanced > Analytics Step**.
6. In the **Analytics Step** section, provide a title that clearly represents the Intent's action. For example, if the Intent involves selecting a specific product type, such as Pizza, consider naming the step `Pizza Order`, `Pizza Selection`, or `Pizza`.
7. Click **Save**.

### Test your Flow

To view the results on the Step Explorer page, test your AI Agent via the Interaction Panel or Demo Webchat.
To view the Interaction Panel and Playbook data for your AI Agent, follow these steps:

1. On the **Step Explorer** page, go to the filter bar.
2. Select **Endpoint > Interaction Panel / Playbook data**.
3. Click **Apply**.

## Filter Steps

By default, the Step Explorer shows the **Filter Bar** section at the top of the page.

You can filter sessions by using the following options:

- [Global Filters](#global-filters)
- [Local Filters](#local-filters)

To hide the Filter menu, click ![insight-filter-black](../../_assets/icons/insight-filter-black.svg) in the upper-right corner.

### Global Filters

For more information, read the [Global Filter](../global-filters.md) documentation. Some **global filters** will become accessible by clicking on **more filters ![insight-filter-black](../../_assets/icons/insight-filter-black.svg)** in the filter bar at the top of the **Transcript Explorer** page. 

### Local Filters

You can use local filters to refine your research.

To open the **Local Filters** selection,
click **more filters ![insight-filter-black](../../_assets/icons/insight-filter-black.svg)** in the **Filter Bar** section at the top of the **Transcript Explorer** page.

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
  <img class="image-center" src="../../../_assets/insights/explorers/step/step-explorer-elements.png" width="100%" />
  <figcaption>Step Explorer Elements</figcaption>
</figure>

1. **All Starting Steps**. The starting point of the session, when the user enters a session and starts interacting with the bot.
2. **Analytics Step Name**. The name that you specified in the [Node](#annotate-nodes) or [Intent](#annotate-intents) settings.
3. **Further Steps view**. Next steps that follow a specific decision (step) in a session.
4. **%** (From the previous step). The percentage of end users who reached this step compared to the previous step.
5. **Drop-off**. The percentage of users who leave a step before finishing it.

## Step Details

To view step details, hover the cursor over the step on the Step Explorer page.

| Parameter          | Description                                                                                                    |
|--------------------|----------------------------------------------------------------------------------------------------------------|
| Step name          | Analytics Step name that you specified in the [Node](#annotate-nodes) or [Intent](#annotate-intents) settings. |
| Flow Name          | A Flow where the Note or Intent is used.                                                                       |
| From previous step | The percentage of end users who reached this step compared to the previous step.                               |
| From end step      | The percentage of end users who reached this step compared to the last step.                                   |
| Times              | The total number of end users who reached this step.                                                           |

<figure>
  <img class="image-center" src="../../../_assets/insights/explorers/step/step-explorer-details.png" width="100%" />
  <figcaption>Step Explorer Details</figcaption>
</figure>

## Step Operations

To view step operations, right-click the selected Step on the Step Explorer page.

| Operation                             | Description                                                                                                                                                                                                                                                                                                                                                     |
|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Open Flow                             | Opens a related Flow in the Cognigy.AI interface in a new browser tab.                                                                                                                                                                                                                                                                                          |
| Open Node                             | Opens a related Node in the Cognigy.AI interface in a new browser tab.                                                                                                                                                                                                                                                                                          |
| Open sessions that took this path     | Tracks the number of sessions following the same sequence of steps, including the selected step, which is useful for understanding user interaction with your application. It helps optimize the user experience, identify successful strategies, and assess the effectiveness of features. <br>Related sessions are displayed on the Transcript Explorer page. |
| Open sessions which contain this step | Tracks the number of sessions in which end users have completed the selected step.<br> Related sessions are displayed on the Transcript Explorer page.                                                                                                                                                                                                          |
| Open conversations that ended here    | This option appears in the menu only if you click the Drop-off step. This means that you can view all sessions from which end users leave a step before finishing it.                                                                                                                                                                                           |
| Set as Starting Step                  | Places the selected step at the beginning of the path.                                                                                                                                                                                                                                                                                                          |
| Set as Ending Step                    | Places the selected step at the end of the path.                                                                                                                                                                                                                                                                                                                |

<figure>
  <img class="image-center" src="../../../_assets/insights/explorers/step/step-explorer-menu.png" width="100%" />
  <figcaption>Step Explorer Operations</figcaption>
</figure>

## Examples

### Nodes

Let's
consider an example
in which Nodes are annotated in a Flow where users select a product and payment method and make an order.

The following steps are presented:

1. **Greetings**. All 5 users successfully completed the first step, resulting in a 100% completion rate. 
2. **Product selection**. All 5 users completed this step, resulting in a 100% completion rate.
3. **Delivery address specification**. All 5 users provided their delivery addresses, resulting in a 100% completion rate.
4. **Delivery date specification**. Only 4 out of the initial 5 users completed this step, resulting in an 80% completion rate. One user did not proceed to specify the delivery date.
5. **Payment method selection**. Only 2 out of the initial 5 users completed this step, resulting in a 50% completion rate compared to the previous step, which was reached by 4 people.
6. **Order confirmation**. Finally, only 1 out of the initial 5 users completed this step, resulting in a 50% completion rate compared to the previous step, which was reached by 2 people.

In the image below, it's evident that out of all users, only 1 completed the order.

<figure>
  <img class="image-center" src="../../../_assets/insights/explorers/step/step-explorer-node-example.png" width="100%" />
  <figcaption>Step Explorer Node Example</figcaption>
</figure>

### Nodes and Intents

Let's consider an example in which Nodes and Intents are annotated in a Flow where users select a product and payment method and make an order.

The following steps are presented:

1. **Greetings**. All 5 users successfully completed the first step, resulting in a 100% completion rate.
2. **Product Selection**:
    - Completed by 100% of users (5 users):
        - 40% selected products from a non-specific category.
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

In the image below, it's evident that out of all users, only 2 completed the order.

<figure>
  <img class="image-center" src="../../../_assets/insights/explorers/step/step-explorer-intent-example.png" width="100%" />
  <figcaption>Step Explorer Intent Example</figcaption>
</figure>

## More Information

- [Transcript Explorer](transcript.md)
- [Message Explorer](message.md)