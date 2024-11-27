---
title: "Goals"
slug: "goals"
description: "The Goals Dashboard highlights goal tracking, completion status, time and cost metrics, and the business impact of AI Agents."
hidden: false
---

# Goals

!!! note
    The Goals Dashboard is in Beta and is available if you have migrated to the new [Insights framework](../data-management/pre-aggregation.md).
    We encourage you to try this feature out and provide us with feedback.

The _Goals Dashboard_ highlights goal tracking, completion status, time and cost metrics, and the business impact of AI Agents in the following charts:

- [Indicators](#indicators)
- [Bar charts](#bar-charts)

{! _includes/insights/global-filters.md !}

<figure>
  <img class="image-center" src="../../../_assets/insights/dashboards/goals/goals-dashboard.png" width="100%" />
  <figcaption>Goals dashboard</figcaption>
</figure>

## Indicators

### Completed

Displays the total number of [completed goals](../../ai/build/node-reference/analytics/track-goal.md).

### Partially Completed

Displays the total number of partially [completed goals](../../ai/build/node-reference/analytics/track-goal.md).
This chart shows the goals for which some steps were not completed.

### Time Saved

Displays the total time saved for completed and partially completed goals.

### Cost Savings

Displays the total cost savings for completed and partially completed goals.

## Bar charts

### Time Saved (in hours)

Displays time saved in hours for each goal that was completed within the filtered time span.
You can track efficiency gains and compare time saved across different goals.

Source table:

```txt
| Date       | Goal_1   | Goal_3   | Goal_4   | Goal_5   |
|------------|----------|----------|----------|----------|
| 27.10.2024 | 37:27:00 | -        | 22:27:00 | 28:20:00 |
| 28.10.2024 | 216 h    | 25:30    | 37:06:00 | 48:50:00 |
| 29.10.2024 | 165 h    | 23:30    | 22:42:00 | 27:50:00 |
| 30.10.2024 | 108 h    | 8:30     | 27:48:00 | 36:20:00 |
| 31.10.2024 | 82:53:00 | 5:30     | 38:03:00 | 49:30:00 |
| 01.11.2024 | 144 h    | 18:30    | 16:12:00 | 25:10:00 |
| 02.11.2024 | 31:22.00 | -        | 18:30:00 | 21:10:00 |
```

Result:

<figure>
  <img class="image-center" src="../../../_assets/insights/dashboards/goals/time-saved.png" width="100%" />
</figure>

<What should be added: formula, example of calculation, screenshot>

### Cost Savings

Displays the amount of the money saved for each goal completed within the selected time span.
You can analyze cost savings across different goals, identify the most cost-effective processes, and optimize resource allocation.

Source table:

```txt
| Date       | Goal_1 | Goal_3 | Goal_4 | Goal_5 | Goal_6 |
|------------|--------|--------|--------|--------|--------|
| 27.10.2024 | €594   | -      | €1167  | €253   | -      |
| 28.10.2024 | €1539  | €1020  | €1929  | €440   | €43    |
| 29.10.2024 | €930   | €900   | €1182  | €254   | €47    |
| 30.10.2024 | €942   | €340   | €1448  | €319   | €22    |
| 31.10.2024 | €1078  | €220   | €1981  | €440   | €5     |
| 01.11.2024 | €888   | €740   | €842   | €219   | €44    |
| 02.11.2024 | €476   | -      | €962   | €189   | -      |
```

Result:

<figure>
  <img class="image-center" src="../../../_assets/insights/dashboards/goals/cost-savings.png" width="100%" />
</figure>

### Revenue Earned

Displays the total revenue earned for each goal completed within the selected time period. 
You can analyze earnings across different goals to identify the most efficient processes.

Source table:

```txt
| Date       | Goal_01 | Goal_04 | Goal_05 | Goal_08 |
|------------|---------|---------|---------|---------|
| 11/11/2024 | €0      | €0      | €0      | €0      |
| 11/12/2024 | €3984   | €861    | €546    | €96     |
| 11/13/2024 | €0      | €1332   | €783    | €0      |
| 11/14/2024 | €0      | €1533   | €842    | €0      |
| 11/15/2024 | €0      | €297    | €170    | €0      |
| 11/16/2024 | €0      | €0      | €0      | €0      |
```

Result:

<figure>
  <img class="image-center" src="../../../_assets/insights/dashboards/goals/revenue-earned.png" width="100%" />
</figure>

## More Information

- [Goals](../../ai/analyze/goals-and-tasks/goals.md)
- [Dashboard Overview](overview.md)
- [Dashboard NLU Performance](nlu-performance.md)
- [Dashboard Live Agent](live-agent.md)