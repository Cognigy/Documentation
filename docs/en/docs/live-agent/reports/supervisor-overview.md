---
title: "Supervisor Overview" 
slug: "supervisor overview" 
hidden: false 
---

# Supervisor Overview report

[![Version badge](https://img.shields.io/badge/Updated in-v4.46-blue.svg)](../release-notes/4.46.md)

!!! note
    This report is only visible with the [Supervisor Role](../roles.md#supervisor).

This report offers an overview of all conversations related to a specific inbox,
including the number of conversations received within the last 24 hours.
All displayed data is relevant to this 24-hour time period.
Additionally, you will find an overview of the Agent Status and conversation handling metrics.
At the bottom of the report, there is a list of conversations, indicating the agents' ongoing work.

The summary of key metrics is represented in the following charts:

- [Indicators](#indicators)
- [Line Charts](#line-chart)
- [Tables](#tables)

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/images/LA_Supervisor_overview_1.png" width="80%" alt="Live Agent Supervisor overview" />
  <figcaption>Overview report</figcaption>
</figure>

## Indicators

### Open Conversations

Indicates the number of conversations that have the following statuses: Open, Queued, and Unassigned.

### Today

Indicates the number of conversations that were handled on current day.

### Agent Status

Indicates the number of agents that currently are Online, Busy, Away, or Offline.

### Conversation handling

Conversation handling indicates the following real-time metrics:

| Metrics                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| First Response Time (Avg) | The average time it takes for an agent to respond to a customer in a conversation.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Resolution Time (Avg)     | The average time required to resolve conversations with a customer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Queue Time (Avg)          | The average time that an incoming conversation waits for assignment to an agent.<br>This value is measurable in two scenarios:<br>- When [auto-assigning conversations](../conversation/conversation-routing/automatic-mode.md#automatic-assignment) is turned off for the Inbox.<br>- When the [conversation limit per agent](../settings/account-settings.md#conversation-limit-per-agent) is activated, and all agents in an Inbox with auto-assignment activated are at full capacity and unable to take on additional conversations. |

## Line Chart

### Conversation Metrics

Indicates conversation details in a 24-hour time grid, visualized with colored lines:

| Line graph                  | Description                                                     |
|-----------------------------|-----------------------------------------------------------------|
| Incoming Conversations      | Number of conversations that were created in the last 24 hours. |
| Conversation Duration (min) | Minutes it took to solve a conversation from start to finish.   |
| Queued Conversations        | Number of conversations that are not assigned to an Agent.      |

## Tables

### Conversations by Agents

Provides information about the status and performance of agents:

| Title                   | Description                                                        |
|-------------------------|--------------------------------------------------------------------|
| STATUS                  | Indicates the status of the Agent: Away, Busy, Online, Offline.    |
| OPEN                    | Number of active conversations pending.                            |
| QUEUED                  | Indicates the number of assigned conversations waiting.            |
| AVG FIRST RESPONSE TIME | Indicates the average value when an Agent responded first.         |
| AVG RESOLUTION TIME     | Indicates the average value when an Agent resolved a conversation. |
| RESOLVED                | Indicates how many conversations were resolved by Agents.          |

Additionally, you can filter the data in the table according to the agent's status.

<figure>
<img src="{{config.site_url}}live-agent/images/LA_Supervisor_overview_2.png" width="100%" alt="Live Agent Supervisor overview 2" />
  <figcaption>Conversations by Agents chart</figcaption>
</figure>

## View a Report

To view a report, do the following:

1. Open the Live Agent interface.
2. Go to **Reports > Overview**. 
3. At the top of the report, from the **Inbox** list, select an Inbox you want to inspect.

The report will be updated with the corresponding data related to the selected Inbox.

## More Information

- [Reports](overview.md)