---
title: "NLU Performance" 
slug: "dashboard-nlu-performance" 
hidden: false 
---

# NLU Performance

[![Version badge](https://img.shields.io/badge/Updated in-v4.45-blue.svg)](../release-notes/4.45.md)

The NLU Performance dashboard provides valuable insights into the performance of your virtual agent's natural language understanding (NLU) capabilities. It allows you to monitor and enhance message comprehension, Intent recognition, and execution efficiency. Moreover, it offers easy access to resources like the Intent Trainer for further performance improvement.

More information regarding NLU and Intents you can find in [NLU Overview](../ai/nlu/nlu-overview/overview.md).

The NLU Performance data of your Agent is visualized in the following charts:

- [Indicators](#indicators) 
- [Bar charts](#bar-charts)
- [Line charts](#line-charts)

Charts display data based on the [global filter](global-filter.md) settings. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/NLU_dashboard.png" width="100%" />
  <figcaption>NLU Performance dashboard</figcaption>
</figure>

## Indicators

The Indicator charts presents real-time data that refreshes every 30 seconds.

### Understood Messages

Indicates the percentage of understood messages occurred during conversations.
A calculation example with data visualization in a bar chart
you will find in the [Understood/Misunderstood](#understood--misunderstood-messages) bar chart.  

### Average Execution Time

Indicates the average execution time on a timescale.

Formula:
 
Average Execution Time = `Sum of Execution Times / Total number of inputs`

A calculation example with data visualization in a line chart you can find in the [Average Execution Time](#average-execution-time-1) line chart. 

### Avg Intent Score

Indicates the average Intent score depending on the timeframe setting. The value indicates the quality of your Agent, how "good" Intents were found in conversations.
For more information, see [Machine Learning Intents](../ai/nlu/nlu-overview/ml-intents.md).        

To find the average intent score, Insights sums up all the intent scores and divides by the total number of records.

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

Indicates the time-related number of understood messages and misunderstood messages in percentages displayed in a bar chart.

A message is counted as understood if it has triggered an Intent, a slot is matched, or it is marked as understood via the [Code Node](https://docs.cognigy.com/ai/flow-nodes/code/analytics-data/) or [Overwrite Analytics Node](https://docs.cognigy.com/ai/flow-nodes/other-nodes/overwrite-analytics/).
A message is not counted as understood if it is marked as `Don't count` in the [Overwrite Analytics Node](https://docs.cognigy.com/ai/flow-nodes/other-nodes/overwrite-analytics/) or sent during an active handover without configuring [Agent Assist](https://docs.cognigy.com/ai/handover-providers/la-agent-assist-overview/) Flow.

By clicking ![vertical-ellipsis](https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg),
you can select the **Go to Intent Trainer**,
which will take you to the application in Cognigy.AI for improving your Flow. For more information, see [Intent Trainer](../ai/resources/tweak/intent-trainer.md).

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
  <img class="image-center" src="{{config.site_url}}insights/images/NLU_understood_messages.png" width="80%" />
</figure>

### Top Intents

Indicates the top-rated number of Intents used displayed in a horizontal bar chart, with a maximum of 6 Intents shown in the summary view and 25 in the detailed view. Whenever an Intent is matched, it is recorded in the analytics data. The data is then grouped by the matched Intent and sorted in descending order.

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
  <img class="image-center" src="{{config.site_url}}insights/images/calls/top-intents.png" width="90%" />
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
  <img class="image-center" src="{{config.site_url}}insights/images/top_slots.png" width="80%" />
</figure>

### Intents by Score Range

The scoring range of found Intents displayed in a stacked bar chart. Every score range bar shows a min-max value and has an average value marker.
Clicking on the three-dots menu item,
you can select the **Go to Intent Trainer** that leads you to the application in Cognigy.AI to improve your Flow.
For more information, see [Intent Trainer](../ai/resources/tweak/intent-trainer.md).

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
  <img class="image-center" src="{{config.site_url}}insights/images/NLU_intents_by_score_range.png" width="80%" />
</figure>

### Top Intent Scores

Indicates the top-rated numbers of Intents displayed in a bar chart.
For more information, see [Intent Analyzer](../ai/nlu/nlu-overview/intent-analyzer.md).

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
  <img class="image-center" src="{{config.site_url}}insights/images/NLU_top_intent_scores.png" width="80%" />
</figure>

## Line charts

### Average Execution Time

Indicates the average execution time of a Flow process on a timescale. The chart indicates the average time it took to execute the Flow in ms. Time scaling depends on the global filter setting.

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
  <img class="image-center" src="{{config.site_url}}insights/images/NLU_avg_execution_time.png" width="80%" />
</figure>

{! _includes/insights/download-report.md !}

## More information

- [Dashboard Engagement](dashboard-engagement.md)
- [Dashboard Overview](dashboard-overview.md)
- [Dashboard Live Agent](dashboard-live-agent.md)
- [Dashboard Calls](dashboard-calls.md)