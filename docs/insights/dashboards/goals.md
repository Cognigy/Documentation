---
title: "Goals"
slug: "goals"
description: "The Goals Dashboard highlights goal tracking, completion status, time and cost metrics, and the business impact of AI Agents."
hidden: false
---

# Goals

The _Goals Dashboard_ highlights goal tracking, completion status, time and cost metrics, and the business impact of AI Agents in the following charts:

- [Indicators](#indicators)
- [Line charts](#line-charts)
- [Bar charts](#bar-charts)

{! _includes/insights/global-filters.md !}

<should be a screenshot of this dashboard>

## Indicators

### Completed

Displays the total number of [completed goals](../../ai/build/node-reference/analytics/track-goal-process.md).

### Partially Completed

Displays the total number of partially [completed goals](../../ai/build/node-reference/analytics/track-goal-process.md).
This chart shows the goals for which some steps were not completed.

### Time Saved

Displays the total time saved for completed and partially completed goals.

### Cost Savings

Displays the total cost savings for completed and partially completed goals.

## Line charts

### Goal Completion Rate In %

Displays the percentage of goals achieved within the selected time frame.
The goals have three distinct categories, each has a separate bar:

- **Incomplete** — goals that have been started, with only the Startpoint step triggered.
- **Partial Completion** — goals that have been started and progressed through some steps but the completion step was not achieved.
- **Total Completion** — goals that have been started, progressed through some steps, and include at least one completion step was achieved.

<What should be added: formula, example of calculation, screenshot>

## Bar charts

### Goal Completion Rate In Numbers

Displays the goal completion rates over the selected time frame.
The goals have three distinct categories, each has a separate bar:

- **Incomplete** — goals that have been started, with only the Startpoint step triggered.
- **Partial Completion** — goals that have been started and progressed through some steps but the completion step was not achieved.
- **Total Completion** — goals that have been started, progressed through some steps, and include at least one completion step was achieved.

<What should be added: formula, example of calculation, screenshot>

### Time Saved (in hours)

Displays time saved in hours for each goal that was completed within the filtered time frame.
You can track efficiency gains and compare time saved across different goals.

<What should be added: formula, example of calculation, screenshot>

### Cost Savings (in USD$)

Displays the amount of the money saved for each goal completed within the selected time frame.
You can analyze cost savings across different goals, identify the most cost-effective processes, and optimize resource allocation.

<What should be added: formula, example of calculation, screenshot>


## More Information

- [Goals v2](../../ai/analyze/goals/v2.md)
- [Dashboard Overview](overview.md)
- [Dashboard NLU Performance](nlu-performance.md)
- [Dashboard Live Agent](live-agent.md)