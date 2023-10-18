---
 title: "Live Agent (Beta)" 
 slug: "Live Agent (Beta)" 
 hidden: true 
---

# Live Agent (Beta)

[![Version badge](https://img.shields.io/badge/Updated in-v4.62(Beta)-purple.svg)](../release-notes/4.62.md)

!!! note
    The Live Agent dashboard is in Beta. We encourage you to try this feature out and provide us with feedback.

The Live Agent dashboard displays Live Agent metrics for a specific virtual agent.

Using this dashboard, you can:

- Keep track of how quickly human agents respond and resolve customer inquiries.
- Monitor the total number of handovers for the virtual agent.
- Summarize conversation statuses.
- Evaluate conversation types based on assigned label.

These metrics are visualized in the following charts:

- [Indicators](#indicators) 
- [Bar charts](#bar-charts)
- [Line charts](#line-charts)

{! _includes/insights/global-filters.md !}

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/live-agent-dashboard.png" width="100%" />
  <figcaption>Live Agent dashboard</figcaption>
</figure>

## Indicators 

The Indicator charts presents real-time data that refreshes every 30 seconds.

### Live Agent Handovers

Indicates the number of handovers. The handover occurs when a virtual agent transfers the conversation to a human agent. Multiple handovers may occur during a session.

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

Result: `7`


### Handover Rate

Indicates the percentage of all sessions escalated to Cognigy Live Agent at least once, calculated as the ratio of Live Agent Escalations divided by total sessions. A lower value is better.

If multiple handovers occur during a session, Cognigy counts them as one escalation.

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

### Opened

Indicates the number of conversations that were opened by a user or reopened by a human agent.

### Assigned

Indicates the number of conversations that were assigned to a human agent

### Pending

Indicates the number of conversations that were paused until a customer or human agent responded.

### Snoozed

Indicates the number of conversations that were temporarily suspended until a time trigger or customer response trigger was activated.

## Bar charts 

### Handover End Reason

Indicates the timescale of the following conversation statuses:

- Abandoned — a conversation is closed because the user left a conversation.
- Resolved — a conversation is closed because the user's problem was resolved.

The chart indicates how the Live Agents' performance varied over time. 

Source table:

```txt
| Date      | Status    |  Conversations  |
| --------- | --------- | --------------- |
| 3/20/2023 | abandoned |        3        |
| 3/21/2023 | abandoned |        2        |
| 3/21/2023 | resolved  |        1        |
| 3/29/2023 | abandoned |        2        |
| 3/29/2023 | resolved  |       24        |
| 3/30/2023 | resolved  |        5        |
| 4/4/2023  | resolved  |        1        |
| 4/13/2023 | resolved  |       15        |
| 4/13/2023 | abandoned |       13        |
| 4/13/2023 | pending   |        1        |
| 4/13/2023 | snoozed   |        1        |
| 4/14/2023 | assigned  |       22        |
| 4/14/2023 | abandoned |        3        |
| 4/14/2023 | resolved  |        5        |
| 4/17/2023 | assigned  |        7        |
| 4/17/2023 | resolved  |       15        |
| 4/18/2023 | assigned  |        6        |
| 4/18/2023 | abandoned |        6        |
```

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/handover-end-reason.png" width="100%" />
</figure>

### Label Summary

Indicates Live Agents labels to categorize and prioritize conversations.

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

Indicates the timeline of the average first response and the average resolution time. This metric is calculated based on number of sessions and help evaluate human agent operations' effectiveness by comparing customer service agents' response times and resolution time.

The First Response Time metric refers to the average time a human agent takes to send a first response to a customer's request. 
The Resolution Time metric refers to the average time of a customer's interaction with a human agent, with a human agent, from the start of the handover sequence until the end of the session.

Source tables:

- [Avg. First Response Time](#avg-first-response-time)
- [Avg. Resolution Time](#avg-resolution-time)

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/live-agent-performance-times.png" width="100%" />
</figure>

{! _includes/insights/download-report.md !}

## More information

- [Dashboard Overview](dashboard-overview.md)
- [Dashboard Engagement](dashboard-engagement.md)
- [Dashboard NLU Performance](dashboard-nlu-performance.md)
- [Dashboard Calls](dashboard-calls.md)