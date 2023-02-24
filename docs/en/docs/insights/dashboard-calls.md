---
title: "Calls"
slug: "dashboard-calls"
hidden: false
---

# Calls

The Calls dashboard displays data from the Voice Gateway service.

## Indicators

### Active calls

The number of currently active calls in the previous 15 minutes. 
The data is pulled for the previous 15 minutes and updated every 30 seconds.

### Total number of calls

The total number of calls that occurred in the selected timeframe.

### Transferred calls rate

The % of call that where successfully transferred to an agent.

### Total call duration

Sums up the total duration of calls in the selected timeframe.

## Bar charts

### Call ended by

A stacked bar chart showing the percentage of calls that were ended by the bot vs by the customer.

### Top Intents

### Total call duration

Sums up the total duration of calls in the selected timeframe.
  
## Line charts

### Total number of calls

Indicates the number of inbound and outbound calls and a summary of all calls in a multiline chart

A multiline chart consisting of three lines:
- Inbound: Showing the number of inbound calls on the timescale
- Outbound: Showing the number of outbound calls on the timescale
- All: Showing the number of all calls, summing up inbound and outbound, on a timescale
Each line is represented by a legend in the top right corner
A red horizontal line represents the customer’s call limit. This line should only be shown, if the information is present

### Abandon rate

Line chart that shows the percentage of people who left the call longer than 5s of being in the call

### TTS response time

Multiline that represent the time to speech it takes for the voice bot.
Filter out TTS requests that we were retrieved from cache.

### Percentage (%) of transferred calls

Multi line presenting the % of call that where successfully transferred to an agent.
Calculation should also exclude calls that were abandoned early for a more representative/meaningful statistic.
