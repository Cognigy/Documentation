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

Displays the total number of [completed goals](../../ai/build/node-reference/analytics/track-goal-process.md).

### Partially Completed

Displays the total number of partially [completed goals](../../ai/build/node-reference/analytics/track-goal-process.md).
This chart shows the goals for which some steps were not completed.

### Time Saved

Displays the total time saved for completed and partially completed goals.

### Cost Savings

Displays the total cost savings for completed and partially completed goals.

## Bar charts

### Time Saved (in hours)

Displays time saved in hours for each goal that was completed within the filtered time frame.
You can track efficiency gains and compare time saved across different goals.

Source table:

```txt
| Date  | Goal_1   | Goal_4   | Goal_5   | Goal_3 |
|-------|----------|----------|----------|--------|
| 27.10 | 37:27.00 | 22:27:00 | 28:20:00 | -      |
| 28.10 | 216 h    | 37:06:00 | 48:50:00 | 25:30  |
| 29.10 | 165 h    | 22:42:00 | 27:50:00 | 23:30  |
| 30.10 | 108 h    | 27:48:00 | 36:20:00 | 8:30   |
| 31.10 | 82:53:00 | 38:03:00 | 49:30:00 | 5:30   |
| 1.11  | 144 h    | 16:12:00 | 25:10:00 | 18:30  |
| 2.11  | 31:22.00 | 18:30:00 | 21:10:00 | -      |
```

Result:

<figure>
  <img class="image-center" src="../../../_assets/insights/dashboards/goals/time-saved.png" width="100%" />
</figure>

<What should be added: formula, example of calculation, screenshot>

### Cost Savings

Displays the amount of the money saved for each goal completed within the selected time frame.
You can analyze cost savings across different goals, identify the most cost-effective processes, and optimize resource allocation.

Source table:

```txt
| Date    | Goal_1 | Goal_4 | Goal_5 | Goal_6 | Goal_3 |
|---------|--------|--------|--------|--------|--------|
| 27.10   | €594   | €1167  | €253   | -      | -      |
| 28.10   | €1539  | €1929  | €440   | €43    | €1020  |
| 29.10   | €930   | €1182  | €254   | €47    | €900   |
| 30.10   | €942   | €1448  | €319   | €22    | €340   |
| 31.10   | €1078  | €1981  | €440   | €5     | €220   |
| 1.11    | €888   | €842   | €219   | €44    | €740   |
| 2.11    | €476   | €962   | €189   | -      | -      |
```

Result:

<figure>
  <img class="image-center" src="../../../_assets/insights/dashboards/goals/cost-savings.png" width="100%" />
</figure>

## More Information

- [Goals v2](../../ai/analyze/goals/v2.md)
- [Dashboard Overview](overview.md)
- [Dashboard NLU Performance](nlu-performance.md)
- [Dashboard Live Agent](live-agent.md)