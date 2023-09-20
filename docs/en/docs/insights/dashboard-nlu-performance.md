---
 title: "NLU Performance" 
 slug: "dashboard-nlu-performance" 
 hidden: false 
---
# NLU Performance

[![Version badge](https://img.shields.io/badge/Updated in-v4.45-blue.svg)](../release-notes/4.45.md)

## NLU Performance Dashboard

The data presented on this dashboard is related to the **NLU-Natural Language Understanding**.

More information regarding **NLU** and **Intents** you will find here: [NLU Overview]({{config.site_url}}ai/nlu/nlu-overview/overview/).

!!! note
    When hovering any chart or metrics field, rating details will be displayed in a tooltip.

The **NLU Performance** data of your Agent is visualized in the following charts:

- [Indicators](#indicators) 
- [Bar charts](#bar-charts)
- [Line charts](#line-charts)

Charts display data based on the [global filter]({{config.site_url}}insights/global-filter/) settings. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/NLU_dashboard.png" width="100%" />
  <figcaption>NLU Performance dashboard</figcaption>
</figure>

## Indicators

The Indicator charts presents real-time data that refreshes every 30 seconds.

### Understood Messages

Indicates the percentage of understood messages occurred during conversations. A calculation example with data visualization in a bar chart you will find in section **Understood/ Misunderstood**.  

### Average Execution Time

A line chart displaying the average execution time on a timescale.

Formula:

```
                             Sum of Execution Times
Average Execution Time = --------------------------------
                             Total number of inputs
```
A calculation example with data visualization in a line chart you can find in section **Average Execution Time**. 

### Avg Intent Score
The Indicator value shows the average intent score depending on the timeframe setting. The value indicates the quality of your Agent, how "good" Intents were found in conversations.
For more information, see [Machine Learning Intents]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/).        

### Max Intent Score
Indicates how many Intents were matched with 100% efficacy.

## Bar charts

### Understood / Misunderstood Messages

This is a stacked bar char that shows time-related number of **Understood Messages** and **Misunderstood Messages** in percentages displayed in a bar chart.
The calculation result of **Understood Messages** for the selected time frame is displayed by the **Understood messages** Indicator at the top of the NLU Performance dashboard. 

A message is counted as understood if it has triggered an intent, a slot is matched, or it is marked as understood via the [Code Node]({{config.site_url}}ai/flow-nodes/code/analytics-data/) or [Overwrite Analytics Node]({{config.site_url}}ai/flow-nodes/other-nodes/overwrite-analytics/). 
A message is not counted as understood if it is marked as `Don't count` in the [Overwrite Analytics Node]({{config.site_url}}ai/flow-nodes/other-nodes/overwrite-analytics/) or sent during an active handover without configuring [Agent Assist]({{config.site_url}}ai/handover-providers/la-agent-assist-overview/) Flow. 

Clicking on the three-dots menu item, you can select the **Go to Intent Trainer** that leads you to the application in Cognigy.AI to improve your Agent. 
For more information, see [Intent Trainer]({{config.site_url}}ai/resources/tweak/intent-trainer/).

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

1. Misunderstood %  = (51 / 100) * 100 = 51%
2. Understood %     = (49 / 100) * 100 = 49%

Calculation example per day: 2023-09-15

1. Misunderstood %  = (18 / 47) * 100 = 38%
2. Understood %     = (29 / 47) * 100 = 62%

Result:

The **Understood Messages** Indicator will show 49% value as result for the selected timeframe.
The image below shows the relation of **Understood Messages** per day.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/NLU_understood_messages.png" width="80%" />
</figure>

### Top Intents

Indicates the top-rated number of intents used displayed in a horizontal bar chart, with a maximum of 6 intents shown in the summary view and 25 in the detailed view. Whenever an intent is matched, it is recorded in the analytics data. The data is then grouped by the matched intent and sorted in descending order.

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
Clicking on the three-dots menu item, you can select the **Go to Intent Trainer** that leads you to the application in Cognigy.AI to improve your Agent.
For more information, see [Intent Trainer]({{config.site_url}}ai/resources/tweak/intent-trainer/).

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

Top-rated numbers of Intents displayed in a bar chart
For more information, see [Intent Analyzer]({{config.site_url}}ai/nlu/nlu-overview/intent-analyzer/).

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

1. Intent Score Max: 1
2. Intent Score Min: 0.65

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/NLU_top_intent_scores.png" width="80%" />
</figure>

## Line charts

### Average Execution Time

A line chart displaying the average execution time of a Flow process on a timescale. The chart indicates the average time it took to execute the Flow in ms. Time scaling depends on the global filter setting.

```
                             Sum of Execution Times
Average Execution Time = --------------------------------
                            Total number of inputs

```

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

Result: (130ms + 123ms / 2) = 127.5ms

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/NLU_avg_execution_time.png" width="80%" />
</figure>

{! _includes/insights/download-report.md !}

## More information

- [Dashboard Engagement](dashboard-engagement.md)
- [Dashboard Overview](dashboard-overview.md)
- [Dashboard Live Agent](dashboard-live-agent.md)
- [Dashboard Calls](dashboard-calls.md)
