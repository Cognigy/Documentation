---
title: "Overview"
slug: "goals-and-tasks"
description: "Goals are used to track and measure specific outcomes or achievements within a Flow. They help in monitoring how well your AI Agent is performing in reaching predefined objectives."
hidden: false
---

# Goals and Tasks

_Goals and Tasks_ are used to track and measure specific outcomes or achievements within a Flow. 
They help in monitoring how well your AI Agent is performing in reaching predefined objectives.

A Goal or a Task represents a specific target within a Flow that you want to achieve. For example, a Goal or a Task could be set to track whether a user has completed a registration process or provided necessary information.

Both Goals and Tasks offer the following benefits:

- **Enhanced Performance Monitoring**. By tracking how often certain Goals or Tasks are achieved, you can evaluate the success rate of different interactions or processes.
- **Advanced Reporting and Analytics**. Achieved Goals and Tasks are available in various reports within Insights and OData. This data can be analyzed to track trends and improve your conversational strategies.
- **Better Decision Making**. With detailed data on Goal and Task achievements, you can make informed decisions about optimizing Flows and improving the AI Agent's performance.
- **Focused Analysis**. If you need a detailed analysis of specific interactions, Goals and Tasks can be combined with [Analytics Steps](../collecting-data.md#analytics-steps) to get a comprehensive view of user interactions.

## Life Cycle of Goals and Tasks

<figure>
  <img class="image-center" src="../../../../_assets/ai/analyze/goals/life-cycle.png" width="50%" />
</figure>

A Goal or a Task has the following life cycle:

1. The conversation designer defines a goal or task. 
2. The conversation designer configures the goal or task settings. 
3. The end user triggers the goal or task via the conversation with AI Agent. 
4. The system records the goal or task completion. 
5. The system stores the goal or task in the Analytics database.
6. The system processes the result to be available for retrieval via the OData endpoint and renders new data on the Insights reports.
7. The conversation designer accesses and analyzes data to review the results. 
8. The conversation designer improves the Flow.

## Comparison Table

The table shows the differences between the following analytics tools: Analytics Steps, Tasks, and Goals.

| Feature/Tool     | Analytics Steps                                                                                                                                                                                          | Tasks                                                                                                                                                                                                                                                                                                         | Goals                                                                                                                                                          |
|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Purpose          | Collects detailed data about each event or interaction.                                                                                                                                                  | Records when a specific Task is achieved. Measures the success of predefined objectives or tasks.                                                                                                                                                                                                             | Records when a specific Goals are achieved. Offers advanced analysis tools and more detailed reporting.                                                        |
| Configuration    | Add a title and description to a step. If the Node is executed, the step will be recorded in the Analytics database.                                                                                     | Add the [Complete Task](../../build/node-reference/analytics/complete-task.md) Node to the Flow.                                                                                                                                                                                                              | Create a Goal and include steps in the goal. Distribute the steps using the [Track Goal Node](../../build/node-reference/analytics/track-goal.md) in the Flow. |
| Integration      | Integration with the Insights [Step explorer](../../../insights/explorers/step.md), as well as the OData Endpoint [Steps](../odata.md#steps) and [ExecutedSteps](../odata.md#executedsteps) collections. | Integration with the [Contact Profile](../contact-profiles.md), the Insights [Overview](../../../insights/reports/overview.md) and [Engagement](../../../insights/reports/engagement.md) reports, and the OData Endpoint [Sessions](../odata.md#sessions) and [Analytics](../odata.md#analytics) collections. | Improved integration with Insights ([Goals report](../../../insights/reports/goals.md)) and OData and enhanced data reporting features.                        |
| Contact Profiles | Analytics Steps are not recorded in the Contact Profile.                                                                                                                                                 | Tasks are recorded in the Contact Profile.                                                                                                                                                                                                                                                                    | Goals are recorded in the Contact Profile.                                                                                                                     |