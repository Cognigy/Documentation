---
title: "Calls"
slug: "dashboard-calls"
hidden: false
---

# Calls

The Calls dashboard displays data from the Voice Gateway service. This dashboard helps you identify areas where your virtual agent may need improvement and make adjustments to improve the overall quality of voice interactions.

Metrics are visualized in the following charts:

- [Indicators](#indicators)
- [Bar charts](#bar-charts)
- [Line charts](#line-charts)

Each chart presents real-time data that refreshes every 30 seconds.

All data displayed in the charts relate to the [global filter](global-filter.md) settings.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/calls-dashboard-overview.png" width="100%" />
  <figcaption>Calls dashboard</figcaption>
</figure>

## Indicators

### Active calls

Indicates the data for the number of currently active calls is pulled for the previous 15 minutes and updated every 30 seconds.

### Total number of calls

Indicates the total number of calls that occurred in the selected timeframe.

### Transferred calls rate

Indicates the percentage of calls that were successfully transferred to a virtual agent.

Calculation: `(successful transfers / total calls) x 100%`

Example: `(600 / 1000) x 100% = 60%`

### Total call duration

Indicates the total duration of calls in the selected timeframe.

Calculation: `duration of call 1 + duration of call 2 + duration of call 3 + ... + duration of call n`

## Bar charts

### Call ended by

Shows the percentage of calls that were ended by the virtual agent or by the user.

Source table:

```txt
|   Date    |   Actor    | Number of calls |
| --------  | ---------- | --------------- |
| 2023-W08  |    user    |      13         |
| 2023-W08  |    agent   |      46         |
| 2023-W09  |    user    |      78         |
| 2023-W10  |    user    |      22         |
| 2023-W10  |    agent   |      21         |
| 2023-W11  |    user    |      15         |
| 2023-W11  |    agent   |      2          |
```

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/call-ended-by.png" width="80%" />
</figure>

### Top Intents

Shows the top-rated number of intents used, with a maximum of 6 intents shown in the summary view and 25 in the detailed view. Whenever an intent is matched, it is recorded in the analytics data. The data is then grouped by the matched intent and sorted in descending order.

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
  <img class="image-center" src="{{config.site_url}}insights/images/calls/top-intents.png" width="80%" />
</figure>

### Total call duration

Shows the total duration of calls in the selected timeframe.

Source table:

```txt
| Date      | totalCallDuration | averageCallDuration | minCallDuration | maxCallDuration |
| 2/19/2023 | 142000            | 23666.66667         |    10000        | 40000           |
| 2/20/2023 | 136000            | 19428.57143         |    1000         | 50000           |
| 2/21/2023 | 88000             | 14666.66667         |    2000         | 32000           |
| 2/22/2023 | 95000             | 31666.66667         |    12000        | 48000           |
| 2/23/2023 | 144000            | 20571.42857         |    2000         | 48000           |
```

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/total-call-duration.png" width="100%" />
</figure>
  
## Line charts

### Call directions

Shows the number of inbound and outbound calls and summarizes them in a multi-line chart.

A multi-line chart consisting of three lines:

- Inbound — the number of inbound calls on the timescale
- Outbound — the number of outbound calls on the timescale
- Bidirectional — the number of calls that involve both inbound and outbound calls during a session.
- Total — the number of all inbound, outbound, and bidirectional calls on a timescale.

Source table:

```txt
|   Date    |   Type       | Number of calls |
| --------- | ------------ | --------------- |
| 4/26/2023	| total	       |       12        |
| 4/26/2023	| inbound      |	   10        |
| 4/26/2023	| outbound     |	   0         |
| 4/26/2023	| bidirectional|	   2         |
| 4/27/2023	| total        |	   19        |
| 4/27/2023	| inbound      |	   18        |
| 4/27/2023	| outbound     |	    0        |
| 4/27/2023	| bidirectional|	    1        |

```

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/call-directions.png" width="100%" />
</figure>


### Abandon rate

Shows the percentage of users who ended a call within 5 seconds of it being initiated.

Source table:

```txt
|   Date    | Left before 5s  |   Total      |
| --------- | --------------- | ------------ |
| 2/20/2023 |      7          |      7       |
| 2/21/2023 |      3          |      6       |
| 2/22/2023 |      0          |      3       |
| 2/23/2023 |      3          |      7       |
```

Calculation: `(Number of people who left the call before 5 seconds / Total number of people who entered the call) x 100%`

Example: `(4 / 7) x 100% = 12.5%`

Result:

```txt
|   Date    |      %       |
| --------- | ------------ |
| 2/20/2023 |  100         |
| 2/21/2023 |  50          |
| 2/22/2023 |  0           |
| 2/23/2023 |  42.85714286 |
```

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/abandon-rate.png" width="100%" />
</figure>

### TTS response time

Shows the time (in milliseconds) it takes for a voice agent to respond to a text-to-speech (TTS) conversion request. The TTS response time includes the time for the system to process the request, generate the audio, and deliver the output. This response time indicates how quickly the system responds to requests and is used to measure the performance of a TTS system.

Source table:

```txt
|   Date    | Duration  |
| --------- | --------- |
| 2/23/2023 |   13      |
| 2/22/2023 |   18      |
| 2/21/2023 |   15      |
| 2/20/2023 |   13      |
| 2/19/2023 |   14      |
```
Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/tts-response-time.png" width="100%" />
</figure>

### Percentage (%) of transferred calls

Shows a multi-line presenting the percentage of calls successfully transferred to an agent.

Source table:

```txt
|   Date    | Transferred calls | Total calls |
| --------- | ----------------- | ----------- |
| 2/23/2023 |        3          |    6        |
| 2/22/2023 |        3          |    7        |
| 2/21/2023 |        2          |    4        |
| 2/20/2023 |        0          |    2        |
| 2/19/2023 |        3          |    7        |
```
Calculation: `(Number of transferred calls / Total number of calls) * 100`

Example: `(3 / 6) * 100 = 50%`

Result:

```txt
| Date      | Transferred calls |
| --------- | ----------------- |
| 2/19/2023 | 50                |
| 2/20/2023 | 42.85714286       |
| 2/21/2023 | 50                |
| 2/22/2023 | 0                 |
| 2/23/2023 | 42.85714286       |
```

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/transferred-calls.png" width="100%" />
</figure>

### Average concurrent session

The average number of active sessions happening at the same time within a specific time frame. Additionally, Insights displays the Concurrent Session Limit on the chart with a red horizontal line that indicates whether the call license limit is exceeded.

Source table:


```txt
| Date      | Total call duration | Time period           |
|-----------|---------------------|-----------------------|
| 4/27/2023 | 7.04 minutes        | 1 hour (3600 seconds) |
```

Calculation: `Total Session Time During a Time Period / Time Period`

Example: 

1. Total call duration: 7.04 minutes x 60 seconds = 422.4 seconds
2. Average Concurrent Sessions: 422.4 / 3600 = 0.117

Result: `0.117`

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/average-concurrent-session.png" width="100%" />
</figure>