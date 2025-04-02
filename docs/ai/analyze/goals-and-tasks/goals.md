---
title: "Goals"
slug: "goals"
description: "Goals are used to track specific user interactions during conversations between end-users and AI Agents that align with your business objectives. "
hidden: false
---

# Goals

!!! note
    We encourage you to explore the new version of Goals as soon as you migrate to the new [Insights framework](../../../insights/data-management/pre-aggregation.md).
    Before migration, you can also explore Goals in the Cognigy trial environment.

_Goals_ are structured objectives within AI Agent interactions that require specific steps to be completed. They not only track user actions but also tie those actions to measurable business metrics, ensuring alignment with organizational objectives.

By defining multiple steps and associating them with predefined metrics,
Goals provide a more comprehensive way to evaluate success compared to [Tasks](tasks.md).

With Goals, you can evaluate and enhance the business impact of your AI Agent:

- **Track user interactions**. Monitor specific user interactions during conversations to ensure they align with your business objectives.
- **Monitor different goals and their steps**. Track different goals and their corresponding steps to get a comprehensive view of the user journey within conversations.
- **Measure business value**. Goals are linked to business metrics, allowing you to assess the value of AI Agents in achieving key business objectives. Tracking metrics such as time and money for each completed goal and step provides a detailed view of the AI Agent's performance.
- **Gain valuable insights**. Measure how effectively your AI Agent conversations achieve business objectives and optimize AI Agents to improve performance and user satisfaction.

## Prerequisites

- To activate this feature, use the `FEATURE_USE_GOALS_V2` feature flag.

## Limitations

- The default number of steps per goal is 10. You can increase this number to 20 by using the `FEATURE_USE_GOALS__MAX_STEPS_PER_GOAL` variable in the `values.yaml` file.

## How to Use

### Determine What you Want to Measure

Decide whether you want to track money, time, or both:

- **Money Saved**. Track cost savings. To set the currency, go to **Manage > Settings > Currency Settings** and select a currency type from the **Set Standard Currency** list. You can select only one type of currency per Project.
- **Revenue Earned**. Monitor the additional revenue you earn by automating the process with the AI Agent. To set the currency, go to **Manage > Settings > Currency Settings** and select a currency type from the **Set Standard Currency** list. You can select only one type of currency per Project.
- **Time Saved**. Measure the amount of time a person would have spent on the task. This metric shows the human time saved each time the goal is achieved.

### Create a Goal

To create a goal, follow these steps:

1. In the left-side menu of the Project, go to **Build > Goals** and click **+ New Goal**.
2. On the **Goal** page, configure the parameters of a goal:
    - **Name** — this field is mandatory. Enter a name that reflects the goal. For example, `Reduce Call Handling Time` or `Increase Automation Efficiency`.
    - **Description** — this field is optional. Provide a brief description that reflects the goal. For example, `This goal aims to reduce average call handling time by automating common customer requests`.
3. In the **Initial Step** section, complete the following fields:
    - **Name** — this field is mandatory. Provide a descriptive name for the starting step. For example, `Initiate AI Agent Conversation`. The initial step is required, as the goal activates when the Flow triggers this step.
    - **Description** — this field is optional. Add a detailed description of the starting step. For example, `This step triggers when a user begins an AI Agent session`.
4. In the **Steps** section, click **+ New Step** and add at least one step to complete the goal configuration. Note that if you add only one step, it must be marked as a Completion Point.
5. Configure the step parameters:
    - **Name** — this field is mandatory. Enter a name that reflects the step. For example, `Customer Request Handled`.
    - **Description** — this field is optional. Describe the step. For example, `This step captures when the AI Agent successfully resolves a customer request`.
    - **Mark this step as a completion step** — activate this setting to mark the current step as the point where the goal is considered fully completed. For example, this step can reflect the key result when the AI Agent has resolved all user requests. Note that at least one step within the goal must be marked as completed. Multiple steps can be marked as completed.
6. In the **Success Metrics** field, measure the impact of your goal by tracking the following performance metrics:
    - **Cost Savings** — track saved money by entering values in the format `xx.xx`. For example, `150.00` represents `$150`. Make sure your currency is configured in the **Currency Settings** section within the [Project Settings](#determine-what-you-want-to-measure).
    - **Revenue Earnings** — track earnings by entering values in the format `xx.xx`. For example, `150.00` represents `$150`. Make sure your currency is configured in the **Currency Settings** section within the [Project Settings](#determine-what-you-want-to-measure). 
    - **Time Saved** — track saved time by entering values in the format `00:00:00` (hours:minutes:seconds). For example, `02:45:00` represents 2 hours and 45 minutes.
7. Click **Save** to save the step.
8. Click **Save** to complete your goal configuration.

Once the steps are added, proceed to the Flow section to integrate your goal with a Flow.

### Add a Goal to a Flow

To add a goal to a Flow, follow these steps:

1. In the left-side menu of the Project, go to **Build > Flows**.
2. On the **Flows** page, either use an existing Flow or click **+ New Flow** to create a new one. 
3. In the Flow editor, add a **Track Goal** Node to monitor goal progress within the Flow. 
4. Configure the Node settings:
    - **Select Goal** — choose the goal you recently created, such as `Reduce Call Handling Time`.
    - **Select Steps** — choose the steps within the goal that you want to track. Note that the first selected step must be the initial step. Set the initial step at the beginning of the process you want to track in your Flow. Otherwise, the goal will not be tracked.
5. Click **Save Node** to confirm your changes.

You can add multiple **Track Goal** Nodes in the same Flow to track different steps and KPIs.

While you may choose to add multiple steps to reflect various stages of your goal completion process, both the initial and completion steps must be defined in your Flow. Without a completion step, your goal will be partially completed or incomplete if only the initial step is triggered.

### Track a Goal in the Insights Report

Once a goal and its steps are added to your Flows, you can monitor metrics in the Insights report.

1. Go to the Insights interface by selecting Insights from the left-side menu of the current Project. 
2. In the Insights interface, select **Goals** from the left-side menu. 
3. By default, the report shows data for all goals from the last 30 days. Use [filters](../../../insights/global-filters.md) to view metrics by time, as well as for specific goals, Snapshots, Endpoints, or Locales.

For example:

- **Cost Savings**. You may see a trend showing how much cost was saved through automation over the past month.
- **Revenue Earned**. Monitor the income generated through specific interactions, processes, or transactions managed by the AI Agent.
- **Time Saved**. Track how many hours were saved as tasks were handled automatically by the AI Agent instead of a human agent.

For more information on how the data is calculated, refer to [Goals](../../../insights/reports/goals.md) in the Insights documentation.

## Other Operations

### Export a Goal as a Package

To reuse a goal in other Projects, you can package the goal.

To package a goal, follow these steps:

1. In the Project from which you want to export a goal, go to **Build > Goals**. 
2. Hover over the existing goal and click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg). 
3. Select **Export as package**. 
4. Once the Package has created, a new [task](../../build/projects.md), titled **Create package**, will be run. To view the task, click ![task-menu](../../../_assets/icons/task-menu.svg) in the upper-right corner.

When the task is completed, download the Package.

### Delete a Goal

When you delete a goal,
all associated analytics data is deleted and the Track Goal Node linked to the goal stops working.
Before deleting the goal, either replace it with another goal in the Flow or remove the linked Node if it's no longer needed.

To delete a goal, follow these steps:

1. In the Project in which you want to delete a goal, go to **Build > Goals**.
2. Hover over the existing goal and click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg). 
3. Select **Delete**. 
4. Confirm the deletion by entering the name of the goal.

The goal will be deleted from the list.

### Delete a Step from a Goal

When you delete a step, all associated analytics data is deleted and the Track Goal Node linked to the goal stops tracking this step. 
Before deleting the step, make sure to replace it with another step in the Node.

To delete a step, do the following:

1. In the Project in which you want to delete a goal, go to **Build > Goals**.
2. Select the goal from which you want to delete a step.
3. On the **Goal** page, go to the step you want to delete and click ![recycle bin blue](../../../_assets/icons/recycle-bin-blue.svg). Note that you will not be able to save the goal if this step is the last remaining step or the only completion step.
4. Delete the goal by clicking **Confirm**. 
5. Click **Save**.

The step will be deleted from the list.

## Example

In this example, you will create a Flow named `Pre-book a Flight` and add nodes to it. 
Set up a goal linked to this user journey to track the pre-booking process.
Place the Track Goal Nodes and select goal and step after each user action where users submit information,
such as entering passenger information and completing payment.
In each Track Goal Node, select the goal and step corresponding to the user action.
Then monitor and analyze each step of the booking process.

### Configure a Goal

1. [Create a Goal](#create-a-goal) with the name `Pre-book a Flight`.
2. Set up these steps in this Goal:
    - **Initial Step** — navigate to the **Initial Step** section and enter `Select booking options` in the **Name** field.
    - **Further Steps** — use the **+ New Step** option to add two further steps with the following names:
        - **Passenger Details** — at this step, set the time savings metric to `3 minutes` in the **Time Saved** field.
        - **Confirm Booking** — at this step, set the cost savings metric to `$15` in the **Cost Savings** field, then activate the **Mark this step as a completion step** option.

### Create a Flow and Configure the Initial Step

1. [Create a Flow](../../build/flows/overview.md#working-with-flows).
2. In the Flow editor, add a **Question Node**.
3. Open the Node editor and select the **Text with Buttons** output type.
4. In the **Text** field, enter the following text:
   ```txt
   Hello, I’m Mr. Traveler, and I can help you find discounts on tours to Europe.  
   At the moment, there are no discounted tours available. However, you can leave a request for pre-booking, and I’ll assist you in placing the order. Alternatively, you can contact an operator, though that process may take longer.  

   What works best for you?
   ```  
5. Click **Add Button** and configure the first button:
    1. In the **Button Title** field, enter `pre-booking`.  
    2. From the **Select Button Type** list, select **Postback Value**.  
    3. In the **Postback Value** field, enter `pre-booking`. 
    4. Click **Save**.
6. Click **Add Button** and configure the second button: 
    1. In the **Button Title** field, enter `contact an operator`.  
    2. From the **Select Button Type** list, select **Postback Value**.  
    3. In the **Postback Value** field, enter `contact an operator`.  
    4. Click **Save**.
7. Below the Question Node, add a **Track Goal** Node. In the Node editor, select the initial step you created earlier. Click **Save Node**. This Node will initiate the goal tracking process.
8. Below the **Track Goal** Node, add an **If** Node. In the Node editor, configure the `Answer contains pre-booking` condition:  
    1. In the **Condition** field, click ![token](../../../_assets/icons/token.svg) and select the **Answer** Token. 
    2. From the dropdown list, select `contains`.  
    3. Specify `pre-booking` below the list.  
    4. Click **Save Node**.

<figure>
  <img class="image-center" src="../../../../_assets/ai/analyze/goals/goal-flow.png" width="80%" />
</figure>

### Configure the Passenger Details Step

1. Below your **Then** child Node, add a **Question Node**. Below the **Else** child Node, add a **Handover to Agent Node**.
2. Add a **Question Node**.
   In the Node editor, configure the following fields: 
    1. From the **Question Type** list, select **Text**.
    2. From the **Output Type** list, select **Text** and enter the following text:
   ```txt
   I'll just need your full name and contact information to finalize the booking.
   ```  
3. Add a new **Track Goal Node**. In the Node editor, select **Passenger Details Step** from the **Steps** list. Click **Save Node**. This Node will record how much time is saved when the user submits the data manually.

### Configure the Confirm Booking Step

1. Below the **Track Goal Node**, add a **Question Node**.
2. Add a **Question Node**.
3. Open the Node editor and select **Email** from the **Question Type** list.
4. Select the **Text with Buttons** output type. 
5. In the **Text** field, enter the following text:
   ```txt
   As soon as new offers become available, you will receive an email about your pre-booking.  

   Please confirm your booking by entering your email.
   ```  
    1. In the **Button Title** field, enter `pre-booking`.  
    2. From the **Select Button Type** list, select **Postback Value**.  
    3. In the **Postback Value** field, enter `pre-booking`.  
    4. Click **Save**.
6. Below the **Question Node**, add a **Track Goal Node**. In the Node editor, select **Confirm Booking** from the **Steps** list. Click **Save Node**. This Node will record how much money is saved when the user submits the data manually.
7. Below the **Track Goal Node**, add a **Say Node**. In the Node editor, enter the following text in the **Text** field:
   ```txt
   Your email: <Answer>  

   Thank you for the confirmation!
   ```  
   Replace `<Answer>` with the **Answer** Token by clicking ![token](../../../_assets/icons/token.svg).

<figure>
  <img class="image-center" src="../../../../_assets/ai/analyze/goals/goal-flow-end.png" width="80%" />
</figure>

### Test your Flow

Test your flow via the Interaction Panel.
Enable the [Debug Mode](../../test/interaction-panel/overview.md#debug-mode) setting to see when Track Goals will be triggered.
To view recorded metrics, go to [Cognigy Insights](../../../insights/index.md) and select [Goals](../../../insights/reports/goals.md) from the left-side menu.

## More Information

- [Track Goal](../../build/node-reference/analytics/track-goal.md)
- [Insights Goals Report](../../../insights/reports/goals.md)