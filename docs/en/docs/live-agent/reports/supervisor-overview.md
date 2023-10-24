---
title: "Supervisor Overview" 
slug: "supervisor overview" 
hidden: false 
---

# Supervisor Overview report

[![Version badge](https://img.shields.io/badge/Updated in-v4.46-blue.svg)](../release-notes/4.46.md)

!!! note
    This chart is only visible with the [Supervisor Role](../roles.md#supervisor).

As a supervisor, this chart gives you an overview of all conversations related to a specific Inbox and indicates how many conversations came in within the last 24 hours. All displayed data are related to that 24 hours timespan. Furthermore, you will see an overview of the **Agent Status** and some metrics regarding **Conversation Handling**. At the bottom of the report page you will find a list of "Conversations by Agents" showing data of conversations the Agents are working on. 

To create this chart and to see real-time conversations data in overview, do the following:

1. Go to Live Agent.
2. In the upper-left corner, click **Reports**.
3. On the upper-left side, click **Overview**.
3. On the upper-left side of the report page, select an **Inbox** you want to inspect in the drop-down list. 

The chart will be updated with the corresponding data related to the selected Inbox.

<figure>
<img src="{{config.site_url}}live-agent/images/LA_Supervisor_overview_1.png" width="100%" alt="Live Agent Supervisor overview 1" />
  <figcaption></figcaption>
</figure>

The summary of key metrics is represented in the following charts:

- [Indicators](#indicators) 
- [Line Chart](#line-chart)
- [Tables](#tables)

## Indicators

### Open Conversations

**Open conversations** indicates the number of conversations, that currently have status  **Open, Queued and Unassigned**.

### Today

**Today** indicates the number of conversations, that were handled on current day?


### Agent Status

**Agent Status** indicates how many Agents currently are **Online, Busy, Away, or Offline**.


### Conversation handling

**Conversation handling** indicates following real-time details:

| Conversation handling          | Description                                                                                            |
|--------------------------------|--------------------------------------------------------------------------------------------------------|
| First Response Time (Avg) [^1] | Average time, in minutes or seconds, until an Agent first responded in a conversation with a customer. |
| Resolution Time (Avg)          | Average time, in hours and minutes, to resolve conversations with a customer.                          |
| Queue Time (Avg)  [^2]         | Average time, that an incoming conversation is waiting for assignment to an Agent.                     |

[^1]: (Avg) means, that the value is a calculated average value based on available data.
[^2]: This value is countable only in two scenarios:
1. auto assign conversations is turned off for the inbox.
2. max agent conversation is activated and all agents in an inbox, that has auto assignment activated, are out of capacity to get additional conversations assigned.

## Line Chart

### Key Conversation Metrics

The line chart indicates conversation details in a 24 h time grid, visualized with colored lines:

| Line graph                  | Description                                                      |
|-----------------------------|------------------------------------------------------------------|
| Incoming Conversations      | Number of conversations that were created in the last 24h.       |
| Conversation Duration (min) | Minutes it took to solve a conversation from start to finish.    |
| Queued Conversations        | Number of conversations that are not assigned to an Agent.       |

## Tables

### Conversations by Agents

The list "Conversations by Agents" below the indicator values and bar chart indicates the following details of Agents:

| Title                   | Description                                                    |
|-------------------------|----------------------------------------------------------------|
| STATUS  [^3]            | Indicates status of Agent:  Away, Busy, Online, Offline.       |
| OPEN                    | Number of active conversations pending.                        |
| QUEUED                  | Indicates number of assigned conversations waiting.            |
| AVG FIRST RESPONSE TIME | Indicates average value when an Agent responded first.         |
| AVG RESOLUTION TIME     | Indicates average value when an Agent resolved a conversation. |
| RESOLVED                | Indicates how many conversations were resolved by Agents.      |

[^3]: **Status** can be filtered by: None, Away, Busy, Offline and Online. 


<figure>
<img src="{{config.site_url}}live-agent/images/LA_Supervisor_overview_2.png" width="100%" alt="Live Agent Supervisor overview 2" />
  <figcaption></figcaption>
</figure>
