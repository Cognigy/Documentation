---
 title: "Live Agent" 
 slug: "Live Agent" 
 hidden: true 
---

# Live Agent

The Live Agent dashboard displays Live Agent metrics for a specific Virtual Agent.

Using this dashboard, you can:

- Track the speed of the customer's first reply and resolution from a human agent.
- Monitor the total number of handovers for the virtual agent.
- Summarize conversation statuses.
- Evaluate conversation types based on assigned label.

These metrics are visualized in the following charts:

- [Indicators](#indicators) 
- [Bar charts](#bar-charts)
- [Line charts](#line-charts)

Each chart presents real-time data that refreshes every 30 seconds.

All data displayed in the charts relate to the [global filter](global-filter.md) settings.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/live-agent-dashboard.png" width="100%" />
  <figcaption>Live Agent dashboard</figcaption>
</figure>

## Indicators 

### Live Agent Escalations

Indicates the number of sessions in which a customer contacts a human agent. Multiple handovers may occur during a session.

Source table:

```txt 
| Sessions    | DateTime  | Handovers per session  | Escalation |
| ----------- | --------- | ---------------------- | ---------- |
| session-123 | 1/08/2023 |          1             |     1      |
| session-456 | 1/09/2023 |          0             |     0      |
| session-789 | 1/11/2023 |          0             |     0      |
| session-abc | 1/15/2023 |          2             |     1      |
| session-def | 1/16/2023 |          4             |     1      |
```

Result: `5`


### Handover Rate

Indicates the percentage of all sessions escalated to Cognigy Live Agent, calculated as the ratio of Live Agent Escalations divided by total sessions. A lower value is better.

Source table:

```txt 
| Sessions    | DateTime  | Handovers per session  |  Escalation   |
| ----------- | --------- | ---------------------- | ------------- |
| session-123 | 1/08/2023 |          1             |       1       |
| session-456 | 1/09/2023 |          0             |       0       |
| session-789 | 1/11/2023 |          0             |       0       | 
| session-abc | 1/15/2023 |          2             |       1       | 
| session-def | 1/16/2023 |          4             |       1       | 
```

Calculation: `(Number of Live Agent Escalations) / (Total Sessions) * 100%`

Result: `60%` 

### Avg. First Response Time

Indicates the average time it takes for a human agent to send the first response to a user.

Source table:

```txt
 | Request time        | First response time | Sessions    |          
 | ------------------- | ------------------- | ----------- |
 | 2022/01/01 12:15 00 | 2022/01/01 12:16 00 | session-123 |
 | 2022/01/01 14:00 00 | 2022/01/01 14:02 00 | session-456 |
 | 2022/01/03 09:05 30 | 2022/01/03 09:05 30 | session-789 |
 | 2022/01/03 11:30 00 | 2022/01/03 11:31 00 | session-abc |
 | 2022/01/05 06:10 00 | 2022/01/05 06:12 30 | session-def |
```

Calculation: 

1. For each session `First response time - Request time`.
2. Average first response time = `Total time to send a first response / Number of sessions`

Result: `1 min 10 sec`

### Avg. Resolution Time

Indicates the average difference between when a user request is escalated to a human agent and when the human agent resolves the conversation.

Source table:

```txt
 | Request time        | Resolving time      | Sessions    |          
 | ------------------- | ------------------- | ----------- |
 | 2022/01/01 12:15 00 | 2022/01/01 12:30 00 | session-123 |
 | 2022/01/01 14:00 00 | 2022/01/01 14:15 00 | session-456 |
 | 2022/01/03 09:05 00 | 2022/01/03 09:14 30 | session-789 |
 | 2022/01/03 11:30 00 | 2022/01/03 11:42 00 | session-abc |
 | 2022/01/05 06:10 00 | 2022/01/05 06:12 30 | session-def |
```

Calculation: 

1. For each session `Resolving time - Request time`.
2. Average resolution time = `Total Resolution time / Total number of sessions`

Result: `9 min`

## Bar charts 

### Conversations Summary

Shows the timescale of different conversation statuses:

- Opened — a conversation is opened by a user or reopened by a human agent.
- Pending — a conversation is paused until a customer or human agent responds.
- Assigned — a conversation is assigned to a human agent.
- Snoozed — a conversation is temporarily suspended until a time trigger or customer response trigger is activated.
- Abandoned — a conversation is closed because the user left a conversation.
- Resolved — a conversation is closed because the user's problem was resolved.

The chart indicates how the Live Agents' performance varied over time. 

Source table:

```txt
| Date	    |  Status   | Conversations |
| --------- | --------- | ------------- |
| 2023/1/21 | resolved  |       3       |
| 2023/1/21 | opened    |       1       |
| 2023/2/23	| resolved  |      16       |
| 2023/2/24	| resolved  |      16       |
| 2023/2/25	| resolved  |       6       |
| 2023/2/27	| resolved  |       1       |
| 2023/2/27	| resolved  |       1       |
| 2023/2/27	| snoozed   |       1       |
| 2023/2/28	| resolved  |       1       |
| 2023/3/1	| resolved  |       8       |
| 2023/3/2	| resolved  |       2       |
| 2023/3/3	| abandoned |       1       |
| 2023/3/7	| assigned  |       9       |
```

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/conversation-summary.png" width="100%" />
</figure>

### Label Summary

Shows Live Agents labels to categorize and prioritize conversations.

```txt
| Label name | Number of labels | 
| ---------  | ---------------- | 
|   QA       |       4          |
|   test 	 |       1          |
```

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/label-summary.png" width="80%" />
</figure>

## Line charts

### Live Agent Performance Times

Shows the timeline of the average first response and the average resolution time. This metric is calculated based on daily number of sessions and help evaluate human agent operations' effectiveness by comparing customer service agents' response times and resolution time.

The First Response Time metric refers to the average time a human agent takes to send a first response to a customer's request. 
The Handling Time metric refers to the average time a human agent spends working on a customer's request, including the time spent writing a response and any additional time spent researching or resolving the issue.

Source tables:

- [Avg. First Response Time](#avg-first-response-time)
- [Avg. Resolution Time](#avg-resolution-time)

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/live-agent-performance-times.png" width="100%" />
</figure>