---
title: "Overview"
slug: "goals"
description: "Goals are used to track and measure specific outcomes or achievements within a Flow. They help in monitoring how well your AI Agent is performing in reaching predefined objectives."
hidden: false
---

# Goals

_Goals_ are used to track and measure specific outcomes or achievements within a Flow. 
They help in monitoring how well your AI Agent is performing in reaching predefined objectives.

A Goal represents a specific target within a Flow that you want to achieve. For example, a Goal could be set to track whether a user has completed a registration process or provided necessary information.

Cognigy.AI supports two versions of Goals: [v1](v1.md) and [v2](v2.md). Both offer the following benefits:

- **Enhanced Performance Monitoring**. By tracking how often certain Goals are achieved, you can evaluate the success rate of different interactions or processes.
- **Advanced Reporting and Analytics**. Achieved Goals are available in various reports within Insights and OData. This data can be analyzed to track trends and improve your conversational strategies.
- **Better Decision Making**. With detailed data on Goal achievements, you can make informed decisions about optimizing Flows and improving AI Agent's performance.
- **Focused Analysis**. If you need detailed analysis of specific interactions, Goals can be combined with other analytical tools like Analytics Steps to get a comprehensive view of user interactions.

## Goals Life Cycle

<figure>
  <img class="image-center" src="../../../../_assets/ai/analyze/goals/life-cycle.png" width="50%" />
</figure>

A goal has the following life cycle:

1. The conversation designer defines a goal.
2. The conversation designer configures the goal settings.
3. The end user triggers the goal via the conversation with AI Agent.
4. The system records the goal completion.
5. The system updates the Contact Profile to reflect completed goals in the user's interaction history.
6. The system stores the goal in the analytics database.
7. The conversation designer accesses and analyzes data to review achievements.
8. The conversation designer improves the Flow.

## Comparison Table

The table shows the differences between the following analytics tools: Analytics Steps, Goals v1, and Goals v2.

| Feature/Tool  | Analytics Steps                                                                    | Goals v1                                                                                          | Goals v2                                                                                                |
|---------------|------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| Purpose       | Collects detailed data about each event or interaction.                            | Records when a specific Goal is achieved. Measures the success of predefined objectives or tasks. | Records when a specific Goals are achieved. Offers advanced analysis tools and more detailed reporting. |
| Integration   | Used for detailed analysis and reporting, integrates with Insights and dashboards. | Records achievement in Contact Profiles and Analytics database (OData and Insights).              | Improved integration with Insights and OData and enhanced data reporting features.                      |
| User Profiles | Data is collected without direct association with Contact Profiles.                | Achievements are recorded in individual user Contact Profiles.                                    | Achievements are also recorded in Contact Profiles.                                                     |