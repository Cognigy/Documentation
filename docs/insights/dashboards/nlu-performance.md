---
title: "NLU Performance" 
slug: "dashboard-nlu-performance" 
hidden: false 
---

# NLU Performance

[![Version badge](https://img.shields.io/badge/Updated in-v4.45-blue.svg)](../../release-notes/4.45.md)

The NLU Performance dashboard provides valuable insights into the performance of your AI Agent's natural language understanding (NLU) capabilities. It allows you to monitor and enhance message comprehension, Intent recognition, and execution efficiency. Moreover, it offers easy access to resources like the Intent Trainer for further performance improvement.

You can find more information about our NLU and Intents in the [NLU Overview](../../ai/empower/nlu/overview.md) article.

The NLU Performance data of your AI Agent is visualized in the following charts:

- [Indicators](#indicators) 
- [Bar charts](#bar-charts)
- [Line charts](#line-charts)

These charts display all data based on the [global filter](../global-filters.md) and local filter settings. 

<figure>
  <img class="image-center" src="../../../_assets/insights/dashboards/nlu/NLU_dashboard.png" width="100%" />
  <figcaption>NLU Performance dashboard</figcaption>
</figure>

## Indicators

The Indicator charts presents real-time data that refreshes every 30 seconds.

### Understood Messages

This indicates the percentage of how many messages were understood during conversations.
You can find a calculation example with data visualization in the [Understood/Misunderstood](#understood--misunderstood-messages) bar chart.  

### Average Execution Time

This indicates the average execution time across a specific timespan.

Formula:
 
Average Execution Time = `Sum of Execution Times / Total number of inputs`

You can find a calculation example with data visualization in the [Average Execution Time](#average-execution-time-1) line chart. 

### Avg Intent Score

This indicates the average Intent score in relation to the set timespan. The intent scores reference the quality of your Agent, as they display how well Intents matched in conversations.
For more information, see [Machine Learning Intents](../../ai/empower/nlu/intents/ml-intents.md).        

To find the average intent score, Insights sums up all the intent scores and divides the sum by the total number of records.

Source table:

```txt
| Analytics Record | Intent Score |
| ---------------- | ------------ |
| Record-1         | 0.30         |
| Record-2         | 0.90         |
| Record-3         | 0.10         |
| Record-4         | 1            |
| Record-5         | 0.20         |
| Record-6         | 0.02         |
| Record-7         | 0.50         |
```
Calculation:

1. Sum of Intent Scores = `0.30 + 0.90 + 0.10 + 1 + 0.20 + 0.02 + 0.50 = 3.02`
2. Number of Records = `7`
3. Average Intent Score = `(Sum of Intent Scores) / (Number of Records)`
4. Average Intent Score = `3.02 / 7`

Result: `0.43`

### Max Intent Score

Indicates the number of Intents that were matched with 100% efficacy.

Source table:

```txt
| Analytics Record | Intent Score |
| ---------------- | ------------ |
| Record-1         | 0.30         |
| Record-2         | 0.90         |
| Record-3         | 0.10         |
| Record-4         | 1            |
| Record-5         | 0.20         |
| Record-6         | 0.02         |
| Record-7         | 0.50         |
```

Result: In the provided source table, there is one record with an intent score of `1`, so the max intent score is `1`.

## Bar charts

### Understood / Misunderstood Messages

Indicates the number of understood messages and misunderstood messages in percentages over a period of time displayed in a bar chart.

A message is counted as understood if it has triggered an Intent, a slot is matched, or it is marked as understood via the [Code Node](../../ai/build/node-reference/basic/code/analytics-data.md) or [Overwrite Analytics Node](../../ai/build/node-reference/analytics/overwrite-analytics.md).
A message is not counted as understood
if it is marked as `Don't count` in the [Overwrite Analytics Node](../../ai/build/node-reference/analytics/overwrite-analytics.md)
or sent during an active handover
without configuring [LA AI Copilot](../../live-agent/assistants/la-ai-copilot.md) Flow.

By clicking ![vertical-ellipsis](https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg),
you can select the **Go to Intent Trainer**,
which will take you to the application in Cognigy.AI for improving your Flow and Intents. For more information, see [Intent Trainer](../../ai/train/intent-trainer.md).

Source table:

```txt
| Date       | understood   | misunderstood   | Percentages     |
| -----------| ------------ | --------------- | --------------- |
| 2023-09-13 | 20           | 33              | 38/62           |
| 2023-09-14 | -            | -               |   -             |
| 2023-09-15 | 29           | 18              | 62/38           |
| 2023-09-16 | 0            | 0               | -               |
| 2023-09-17 | 0            | 0               | -               |
| 2023-09-18 | 0            | 0               | -               |
| 2023-09-19 | 0            | 0               | -               |
| ------------------------------------------------------------- |
| TOTAL      | 49           | 51              |                 |
```

Calculation for the selected timeframe:

1. Misunderstood %  = `(51 / 100) * 100 = 51%`
2. Understood % = `(49 / 100) * 100 = 49%`

Calculation example for the date `2023-09-15`: 

1. Misunderstood %  = `(18 / 47) * 100 = 38%`
2. Understood % = `(29 / 47) * 100 = 62%`

Result:

<figure>
  <img class="image-center" src="../../../_assets/insights/dashboards/nlu/NLU_understood_messages.png" width="80%" />
</figure>

### Top Intents

This displays the top-rated number of Intents in a horizontal bar chart. A maximum of 6 Intents are shown in the summary view, while 25 are shown in the detailed view. Whenever an Intent is matched, it is recorded in the analytics data. The data is then grouped by the matched Intent and sorted in descending order.

Source table: 

```txt
|  Intent           | Total number  |
| ----------------- | ------------- |
| Flight discounts  |      12       |
| Book a flight     |      5        |
| Change a flight   |      5        |
| Additional fee    |      4        |
| Reject a flight   |      3        |
| Transfer flights  |      3        |
```

Result:

<figure>
  <img class="image-center" src="../../../_assets/insights/dashboards/nlu/top-intents.png" width="90%" />
</figure>

### Top Slots

Similar to **Top Goals** and **Top Intents**, this chart displays top-rated number of slots in a horizontal bar chart.

Source table:

```txt 
| Slot        | Number      |
| ----------- | ----------- |
| DATE        | 2           |
| NUMBER      | 1           |
```

Result:

<figure>
  <img class="image-center" src="../../../_assets/insights/dashboards/top_slots.png" width="80%" />
</figure>

### Intents by Score Range

This chart shows the scoring range of found intents in a stacked bar chart. Every score range bar shows a min-max value and has an average value marker.
Clicking on the three-dots menu item,
you can select the **Go to Intent Trainer** that leads you to the application in Cognigy.AI to improve your Flow.
For more information, see [Intent Trainer](../../ai/train/intent-trainer.md).

Source table:

```txt
| Date               | intentScoreAvg     | intentScoreMax     | intentScoreMin     |
| ------------------ | --------------     | --------------     | ------------------ |
| cakes              | 0.6517875252045072 | 0.6517875252045072 | 0.6517875252045072 |
| pizza              | 0.6863160928710601 | 0.7237952611766103 | 0.6491475952551133 |
| drinks             | 0.698537294767418  | 0.698537294767418  | 0.698537294767418  |
| ice cream          | 0.7862064089630107 | 0.7862064089630107 | 0.7862064089630107 |
| transfer with refer| 1                  | 1                  | 1                  |
| transfer with dial | 1                  | 1                  | 1                  |
| play               | 1                  | 1                  | 1                  |
| DTMF               | 1                  | 1                  | 1                  |

```
Result: 

<figure>
  <img class="image-center" src="../../../_assets/insights/dashboards/nlu/NLU_intents_by_score_range.png" width="80%" />
</figure>

### Top Intent Scores

Indicates the top-rated numbers of Intents displayed in a bar chart.
For more information, see [Intent Analyzer](../../ai/empower/nlu/intents/intent-analyzer.md).

Source table:

```txt
|  Intents             | Intent Score       |
| -------------------- | ------------------ |
| play                 | 1                  |
| transfer with dial   | 1                  |
| transfer with refer  | 1                  |
| DTMF                 | 1                  |
| ice cream            | 0.7862064089630107 |
| drinks               | 0.698537294767418  |
| pizza                | 0.6863160928710601 |
| cakes                | 0.6517875252045072 |
```

Result: 

1. Intent Score Max: `1`
2. Intent Score Min: `0.65`

<figure>
  <img class="image-center" src="../../../_assets/insights/dashboards/nlu/NLU_top_intent_scores.png" width="80%" />
</figure>

## Line charts

### Average Execution Time

Displays the average time in milliseconds it takes to execute a Flow process over a selected time frame.

Formula:
                             
Average Execution Time = `Sum of Execution Times / Total number of inputs`

Source table:

```txt
|  Date        | Execution Time  |
| ------------ | --------------- |
| 2023-09-13   |      130        |
| 2023-09-14   |      0          |
| 2023-09-15   |      123        |
| 2023-09-16   |      0          |
| 2023-09-17   |      0          |
| 2023-09-18   |      0          |
| 2023-09-19   |      0          |
```

Result: `(130ms + 123ms) / 2 = 127.5ms`

<figure>
  <img class="image-center" src="../../../_assets/insights/dashboards/nlu/NLU_avg_execution_time.png" width="80%" />
</figure>

{! _includes/insights/download-report.md !}

## More Information

- [Dashboard Engagement](engagement.md)
- [Overview](overview.md)
- [Dashboard Live Agent](live-agent.md)