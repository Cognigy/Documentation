---
title: "Calls"
slug: "dashboard-calls"
hidden: false
---

# Calls

The Calls dashboard displays data from the Voice Gateway service. This dashboard helps you identify areas where your virtual agent may need improvement and make adjustments to improve the overall quality of voice interactions.

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
| 2/19/2023 |    user    |      5          |
| 2/20/2023 |    agent   |      5          |
| 2/21/2023 |    user    |      5          |
| 2/22/2023 |    agent   |      2          |
| 2/23/2023 |    user    |      4          |
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
| Pizza             |     25        |
| Order Pizza       |     10        |
| Order Ham Pizza   |     10        |
| Vegetarian        |     8         |
| Order meat pizza  |     2         |
| Order Bacon Pizza |     1         |
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
  <img class="image-center" src="{{config.site_url}}insights/images/calls/total-call-duration.png" width="80%" />
</figure>
  
## Line charts

### Total number of calls

Shows the number of inbound and outbound calls and summarizes them in a multi-line chart.

A multi-line chart consisting of three lines:
- Inbound -  the number of inbound calls on the timescale
- Outbound - the number of outbound calls on the timescale
- All - the number of all calls, summing up inbound and outbound, on a timescale.

A red horizontal line represents the customer's call limit. This line is shown if the information is present.

Source table:

```txt
|   Date    |   Type     | Number of calls |
| --------- | ---------- | --------------- |
| 2/20/2023 |  total     |        7        |
| 2/20/2023 |  inbound   |        7        |
| 2/20/2023 |  outbound  |        0        |
| 2/21/2023 |  total     |        6        |
| 2/21/2023 |  inbound   |        0        |
| 2/21/2023 |  outbound  |        6        |
| 2/22/2023 |  total     |        3        |
| 2/22/2023 |  inbound   |        3        |
| 2/22/2023 |  outbound  |        0        |
| 2/23/2023 |  total     |        7        |
| 2/23/2023 |  inbound   |        0        |
| 2/23/2023 |  outbound  |        7        |
```

Result:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/total-number-of-calls.png" width="80%" />
</figure>


### Abandon rate

Shows the percentage of people who left the call longer than 5s of being in the call.

Source table:

```txt
|   Date    | Left after 5s |   Total      |
| --------- | ------------ | ------------ |
| 2/20/2023 |      7       |      7       |
| 2/21/2023 |      3       |      6       |
| 2/22/2023 |      0       |      3       |
| 2/23/2023 |      3       |      7       |
```

Calculation: `(Number of people who left the call after 5 seconds / Total number of people who entered the call) x 100%`

Example: `(4 / 7) x 100% = 12.5%`

Result:

```txt
|   Date    |       %      |
| --------- | ------------ | 
| 2/20/2023 |  100         |  
| 2/21/2023 |  50          |
| 2/22/2023 |  0           |
| 2/23/2023 |  42.85714286 |
```

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/abandon-rate.png" width="80%" />
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
  <img class="image-center" src="{{config.site_url}}insights/images/calls/tts-response-time.png" width="80%" />
</figure>

### Percentage (%) of transferred calls

Shows a multi-line presenting the percentage of calls successfully transferred to an agent.
The calculation excludes calls abandoned earlier.

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
  <img class="image-center" src="{{config.site_url}}insights/images/calls/transfered-calls.png" width="80%" />
</figure>