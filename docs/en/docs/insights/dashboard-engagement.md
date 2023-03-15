---
 title: "Engagement" 
 slug: "dashboard-engagement" 
 hidden: false 
---
# Engagement Dashboard

The Engagement Dashboard is focused on customer interactions in conversations. Engagement performance of your Agent is visualized in the following charts:

- [Indicators](#indicators) 
- [Heat maps](#heat-maps)
- [Bar charts](#bar-charts)
- [Line charts](#line-charts)

Each chart presents real-time data that refreshes every 30 seconds.

All data displayed in the charts relate to the [global filter](global-filter.md) settings.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/engagement-dashboard.png" width="100%" />
  <figcaption>Engagement dashboard</figcaption>
</figure>

## Indicators

### Goals reached 

Indicates the total number of [completed goals](../ai/flow-nodes/profile/complete-goal.md). 

Source table:

```txt
 | StartedAt  |  Sessions   |  Goals                   | Goals reached |
 | ---------- | ----------- | ------------------------ | ------------- |
 | 2022/01/01 | session-123 | "Goal A, Goal B, Goal D" |       3       |
 | 2022/01/01 | session-456 | "Goal B, Goal C, Goal E" |       3       |
 | 2022/01/03 | session-789 | "Goal B, Goal E"         |       2       |
 | 2022/01/03 | session-abc | "Goal B"                 |       1       |
 | 2022/01/05 | session-def | "Goal A, Goal B"         |       2       |
```

Result: `11`

### Avg. Session length

Indicates how long the average session lasted.

Session length is the time difference between the timestamp of the first user input and the last user input.

Average session length is the mean of all session lengths within the specified time frame in your Insights filter.

Source table:

```txt
 | StartedAt           |  EndedAt            | Sessions    |          
 | ------------------- | ------------------- | ----------- |
 | 2022/01/01 12:15 00 | 2022/01/01 12:18 00 | session-123 |
 | 2022/01/01 14:00 00 | 2022/01/01 15:00 00 | session-456 |
 | 2022/01/03 09:05 30 | 2022/01/03 09:15 30 | session-789 |
 | 2022/01/03 11:30 00 | 2022/01/03 11:44 00 | session-abc |
 | 2022/01/05 06:10 00 | 2022/01/05 06:20 00 | session-def |
```

Calculation:

1. Length for a particular session `Max(timestamp) - Min(timestamp)`.
2. `Length of all sessions / total number of sessions`.
   
Result: `00:19:24`

### Positive Ratings

Indicates the total number of Positive Ratings given as feedback by the end user.

Source table:

```txt
| Sessions    | Positive Rating | Negative Rating | Rated Sessions |
| ----------- | --------------- | --------------- | -------------- |
| session-123 |        1        |        0        |       1        |
| session-456 |        0        |        1        |       1        |
| session-789 |        0        |        0        |       0        |
| session-abc |        1        |        0        |       1        |
| session-def |        1        |        0        |       1        |
| ---------------------------------------------------------------- |
| TOTAL       |        3        |        1        |       4        |
```

Result: `3`

### Containment Rate

Indicates the ratio of sessions without any handover to all sessions.

Source table:

```txt
| Session ID  | Handovers | Handover Sessions | Sessions |
| ----------- | ----------| ----------------- | -------- |
| session-123 |     3     |        1          |    1     |
| session-456 |     0     |        0          |    1     |
| session-789 |     0     |        0          |    1     |
| session-abc |     2     |        1          |    1     |
| session-def |     1     |        1          |    1     |
| ------------------------------------------------------ |
| TOTAL       |     6     |        3          |    5     |
```  

Formula:

1. Containment Rate = `1 - (Handover included Sessions)/(Total Sessions)`.
   
2. Percentage `Containment Rate * 100%`. 

Result: `40%` 

## Heat maps

### Handovers by time of the day

Indicates the number of times a human Agent was contacted. Multiple handovers may occur during a session.

Source table:

```txt 
| DateTime        | Handover   |
| --------------- | ---------- |
| 01/8/2023 16:00 |	   0       |
| 01/8/2023 17:00 |	   0       |
| 01/9/2023 00:00 |    0       |
| 1/11/2023 15:00 |    0       |
| 1/15/2023 18:00 |    0       |
| 1/16/2023 21:00 |    0       |
| 1/17/2023 11:00 |    0       |
| 1/18/2023 06:00 |    1       |
| 1/18/2023 21:00 |    1       |
| 1/19/2023 00:00 |    2       |
| 1/19/2023 10:00 |    1       |
| 1/23/2023 13:00 |    0       |
| 1/24/2023 23:00 |    0       |
```

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/heatmap.png" width="100%" />
</figure>

## Bar charts

### Top Goals

A horizontal bar chart displaying the top-rated number of goals reached. 

Clicking on the three dots menu item, you can select the **Go to Step Explorer** that leads you to the application in Cognigy.AI to improve your Agent.

Source table:

```txt 
| Sessions    | Goals                  |
| ----------- | ---------------------- |
| session-123 | Goal A, Goal B, Goal D |
| session-456 | Goal B, Goal C, Goal E |
| session-789 | Goal A, Goal B, Goal E |
| session-abc | Goal A                 |
| session-def | Goal, Goal A           |
| session-ghi | Goal, Goal A           |
```

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/goals.png" width="80%" />
</figure>

## Line charts

### Live Agent Escalations

Indicates the number of times a human Agent was contacted. Multiple escalations may occur during a session.

Indicates how often a Live Agent was called displayed on a timeline scale depending on the time frame filter setting.


Source table:

```txt 
| DateTime  | Handovers per day  |
| --------- | ------------------ |
| 1/08/2023	|        0           |
| 1/09/2023	|        0           |
| 1/11/2023	|        0           |
| 1/15/2023	|        0           | 
| 1/16/2023	|        0           |
| 1/17/2023	|        0           |
| 1/18/2023	|        2           |
| 1/19/2023	|        3           |
| 1/23/2023	|        0           |
| 1/24/2023	|        0           |
```

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/live-agent-escalations.png" width="100%" />
</figure>

Clicking on the three dots menu item you can select **Go to Step Explorer** that leads you to the application in Cognigy.AI to improve your Agent.

### Positive Ratings over Time

Indicates the total number of Positive Ratings given as feedback by the end user.

Source table:

```txt
| Date (weeks) | Positive | Negative | Number of Ratings |
| ------------ | -------- | -------- | ----------------- |	
| 2023-W01	   |     1	  |    0     |         1         |
| 2023-W04	   |     1	  |    0     |         1         |
| 2023-W05	   |     2	  |    0     |         2         |
```

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/positive-ratings.png" width="80%" />
</figure>

### Unique Contacts

A line chart displaying the number of unique contacts (`userid`) on a timescale. If the user creates more than one session in a single day, it will be counted as one unique contact for that day.

Source table:

```txt
| Date    	| Contacts |
| --------- | -------- |
| 1/16/2023	|    1     |
| 1/17/2023	|    8     |
| 1/18/2023	|    15    |
| 1/19/2023	|    6     |
| 1/20/2023	|    18    |
```

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/unique-contacts.png" width="100%" />
</figure>


## Download Report

To download a report as .csv file for the chart, use its three-dot menu. 
To create a report file, see the [Download Report](download-report.md) article. 


## More information

- [Global Filter](global-filter.md)

- [Dashboard Overview](dashboard-overview.md)

- [Dashboard NLU Performance](dashboard-nlu-performance.md)

- [Step Explorer](step-explorer.md)

- [Transcript Explorer](transcript-explorer.md)

- [Message Explorer](message-explorer.md)

- [Download Report](download-report.md)