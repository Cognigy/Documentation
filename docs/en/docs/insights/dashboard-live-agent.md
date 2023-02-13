---
 title: "Live Agent" 
 slug: "Live Agent" 
 hidden: true 
---

# Live Agent

The Live Agent dashboard displays Live Agent metrics for a specific Virtual Agent.

Using this dashboard, you can:

- Track the speed of the customer's first reply from a human agent
- Monitor the total number of handovers for the virtual agent
- Summarize conversation statuses
- Evaluate conversation types based on assigned label

in the following charts:

- [Indicators](#indicators) 
- [Bar charts](#bar-charts)
- [Line charts](#line-charts)

## Indicators 

### Live Agent Escalations

Indicates the number of sessions in which a customer contacts a human agent. Multiple handovers may occur during a session, but they are counted as one escalation.

Source table:

```txt 
| Sessions    | DateTime  | Handovers per session  |
| ----------- | --------- | ---------------------- |
| session-123 | 1/08/2023 |          1             |
| session-456 | 1/09/2023 |          0             |
| session-789 | 1/11/2023 |          0             |
| session-abc | 1/15/2023 |          2             | 
| session-def | 1/16/2023 |          4             |
```

Result: `3`


### Handover Rate

Indicates the percentage of all sessions escalated to Cognigy Live Agent, calculated as the ratio of Live Agent Escalations divided by total sessions. A lower value is better.

Source table:

```txt 
| Sessions    | DateTime  | Handovers per session  |
| ----------- | --------- | ---------------------- |
| session-123 | 1/08/2023 |          1             |
| session-456 | 1/09/2023 |          0             |
| session-789 | 1/11/2023 |          0             |
| session-abc | 1/15/2023 |          2             | 
| session-def | 1/16/2023 |          4             |
```

Calculation: `(Live Agent Escalations) / (Total Sessions) * 100%`

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

### Avg. Handling Time

Indicates the average difference between the Live Agent opening a conversation and resolving it.

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

Result: `9 min`

## Bar charts 

### Conversations Summary

Shows the timescale of different conversation statuses. Indicates how the Live Agents' performance varied over time. 

Source table:

```txt
| Date	    |  Status  | Conversations |
| --------- | -------- | ------------- |
| 2023/1/23 | resolved |       2       |
| 2023/2/3	| opened   |       1       |
| 2023/2/9	| pending  |       1       |
```

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/live-agent/conversation-summary.png" width="100%" />
</figure>

### Label Summary

Shows Live Agents labels to categorize and prioritize conversations.

```txt
| Label name | Number of labels | 
| ---------  | ---------------- | 
|   twrt     |       1          |
|   docs 	 |       1          |
```

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/live-agent/labels.png" width="80%" />
</figure>

## Line charts

### LiveAgent Session Response vs. Handling Time

Shows the timeline of the average first response and the average handling time. This metric is calculated based on daily number of sessions and help evaluate human agent operations' effectiveness by comparing customer service agents' response times and handling time.

The First Response Time metric refers to the average time a human agent takes to send a first response to a customer's request. 
The Handling Time metric refers to the average time a human agent spends working on a customer's request, including the time spent writing a response and any additional time spent researching or resolving the issue.

Source tables:

- [Avg. First Response Time](#avg-first-response-time)
- [Avg. Handling Time](#avg-handling-time)

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/live-agent/response-handling-time.png" width="100%" />
</figure>