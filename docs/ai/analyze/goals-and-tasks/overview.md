---
title: "Overview"
slug: "goals-and-tasks"
description: "Goals are used to track and measure specific outcomes or achievements within a Flow. They help in monitoring how well your AI Agent is performing in reaching predefined objectives."
tags:
  - goals
  - tasks
  - insights
  - odata
  - metrics
hidden: false
---

# Goals and Tasks

_Goals_ and _Tasks_ are objectives you can use to track and measure specific outcomes or achievements in a Flow. These objectives help you monitor your AI Agents' performance.

A goal or a task represents a specific target in a Flow that you want to achieve. For example, you can set a goal or a task to track whether a user has completed a registration process or provided the necessary information.

Both goals and tasks offer the following benefits:

- **Enhanced Performance Monitoring**. By tracking how often certain goals or tasks are achieved, you can evaluate the success rate of different interactions or processes.
- **Advanced Reporting and Analytics**. Achieved goals and tasks are available in various reports in Insights and OData. You can analyze this data to track trends and improve your conversational strategies.
- **Better Decision Making**. With detailed data on goal and task achievements, you can make informed decisions about optimizing Flows and improving the AI Agent's performance.
- **Focused Analysis**. If you need a detailed analysis of specific interactions, you can combine goals and tasks with [Analytics steps](../analytics-steps.md) to get a comprehensive view of user interactions.

## Life Cycle of Goals and Tasks

<figure>
  <img class="image-center" src="../../../../_assets/ai/analyze/goals/life-cycle.png" width="50%" />
</figure>

Goals and tasks have the following life cycle:

1. The conversation designer defines a goal or task.
2. The conversation designer configures the goal or task settings.
3. The end user triggers the goal or task in the conversation with an AI Agent.
4. The system records the goal or task completion and stores it in the Analytics database.
5. The system processes the result to be available for retrieval through the OData endpoint and renders new data on the Insights reports.
6. The conversation designer accesses and analyzes data to review the results.
7. The conversation designer improves the Flow.

## Comparison Table

The table shows the differences between the following analytics tools: Analytics steps, tasks, and goals.

| Property                 | Analytics Steps                                                                                                                                                                                          | Tasks                                                                                                                                                                                                                                                                                                                | Goals                                                                                                                                                                    |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Purpose                  | Collects detailed data about each event or interaction.                                                                                                                                                  | Records when defined tasks are achieved. Measures the success of predefined objectives or tasks.                                                                                                                                                                                                                     | Records when defined goals are achieved. Offers advanced analysis tools and more detailed reporting.                                                                     |
| Configuration            | Add an Analytics step to a Node. If the Node is executed, the step is recorded in the Analytics database.                                                                                                | Add a [Complete Task](../../build/node-reference/analytics/complete-task.md) Node to the Flow.                                                                                                                                                                                                                       | Create a goal and include steps in the goal. Add [Track Goal Nodes](../../build/node-reference/analytics/track-goal.md) in the Flow and set the goals you want to track. |
| Integration              | Integration with the Insights [Step explorer](../../../insights/explorers/step.md), as well as the OData endpoint [Steps](../odata.md#steps) and [ExecutedSteps](../odata.md#executedsteps) collections. | Integration with the [Contact Profile](../contact-profiles.md), the Insights [Overview](../../../insights/reports/overview.md) and [Engagement](../../../insights/reports/engagement.md) reports, as well as the OData endpoint [Sessions](../odata.md#sessions) and [Analytics](../odata.md#analytics) collections. | Improved integration with Insights through the [Goals report](../../../insights/reports/goals.md) and OData, and enhanced data reporting features.                       |
| Contact Profiles records | Not recorded in the Contact Profile.                                                                                                                                                                     | Recorded in the Contact Profile.                                                                                                                                                                                                                                                                                     | Recorded in the Contact Profile.                                                                                                                                         |

## More Information

- [Analytics steps](../analytics-steps.md)
- [OData](../odata.md)
- [Insights](../../../insights/overview.md)