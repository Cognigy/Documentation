---
 title: "Supervisor Overview" 
 slug: "supervisor overview" 
 hidden: false 
---

# Supervisor Overview report

[![Version badge](https://img.shields.io/badge/Updated in-v4.46-blue.svg)](../release-notes/4.46.md)

!!! note
    This dashboard is only visible with the [Supervisor Role](../roles.md#supervisor).

This dashboard gives you an overview of all conversations and indicates how many conversations came in within the last 24 hours. 

Furthermore, you will see an overview of the Agent Status and some metrics regarding conversation handling. At the end of the page, you will find the conversation overview and handling separated by Agent. 

To view this dashboard, click on the Overview tab in Reports.

Starting from Cognigy 4.46, you can change the status of any human agent. To do that, go to the Conversations by Agents section and select the agent whose status you want to change. Next, click on the agent's current status to open the agent status window and select a new status. The new status will be applied automatically.

<figure>
<img src="{{config.site_url}}live-agent/images/LA_Supervisor_overview_1.png" width="100%" alt="Live Agent Supervisor overview 1" />
  <figcaption></figcaption>
</figure>

To see real-time conversations data in overview, you need to select first an **Inbox** :

1. Select an **Inbox** in the drop-down list on the top left side of the screen. 

## Overview Indicators

### Open Conversations

**Open conversations** indicates the number of conversations, that currently have status  **Open, Queued and Unassigned**.

### Today

**Today** indicates the number of conversations, that were handled on current day?


### Agent Status

**Agent Status** indicates how many Agents currently are **Online, Busy, Away, or Offline**.


### Conversation handling

**Conversation handling** indicates following real-time details:

| Conversation handling          | Description                                                   |
|--------------------------------|---------------------------------------------------------------|
| First Response Time (Avg) [^1] | average number of time units taken, e.g. in minutes or seconds, that an Agent responded the first time to a conversation with a customer.       |
| Resolution Time (Avg)          | average number of time units taken, e.g. in hours and minutes, to resolve conversations with a customer.                        |
| Queue Time (Avg)               | ?            |

[^1]: (Avg) means, that the value is a calculated average value based on available data.


## Line Chart

The line chart indicates conversation details in a 24 h time grid, visualized with colored lines:

| Line graph                  | Description                                                      |
|-----------------------------|------------------------------------------------------------------|
| Incoming Conversations      | number of received conversations                                 |
| Conversation Duration (min) | ?                                                                |
| Queued Conversations        | number of conversations waiting for a first response by an Agent |

## Conversations by Agents

The list "Conversations by Agents" below the indicator values and bar chart indicates following details of Agents:

| Title                    | Description                                                   |
|--------------------------|---------------------------------------------------------------|
| STATUS  [^2]             | indicates status of Agent:  Away, Busy, Online, Offline       |
| OPEN                     | number of active conversations pending                        |
| QUEUED                   | indicates number of assigned conversations waiting            |
| AVG FIRST RESPONSE TIME  | indicates average value when an Agent responded first         |
| AVG RESOLUTION TIME      | indicates average value when an Agent resolved a conversation |
| RESOLVED                 | indicates how many conversations were resolved by Agents      |

[^2]: **Status** can be filtered by: None, Away, Busy, Offline and Online. 


<figure>
<img src="{{config.site_url}}live-agent/images/LA_Supervisor_overview_2.png" width="100%" alt="Live Agent Supervisor overview 2" />
  <figcaption></figcaption>
</figure>
