---
title: "Glossary"
slug: "glossary"
description: "Insights Glossary provides a reference for users, administrators, and anyone involved in the operation or understanding of Insights software and practices."
hidden: false
---

# Insights Glossary

Insights terms listed in alphabetical order. All the terms are given in the glossary for informational purposes.

## A

_**Annotations**_
: An optional setting in a Flow Node (refer to Cognigy.AI) called Analytics Step can be defined in a configured Flow using the Node Editor. These Annotations should provide informative references to the configured Node. For instance, when annotating a Say Node that initiates a customer conversation with a welcome, you can enter Greetings or Welcome New Caller. By utilizing the defined Annotations of your Flow Nodes, the Step Explorer can analyze conversational steps, with each Annotation assigned to a specific step. For more information, read the [Annotations](step-explorer.md#annotations) documentation.

## C

_**Chart**_
: A visual tool that displays data in a graphical format, making it easier to understand trends and patterns. Insights dashboards use various chart types such as bars, lines, and rings to present information effectively.

_**Cognigy Insights**_
: A powerful analytics platform for evaluating and enhancing the performance of Cognigy.AI virtual agents. It provides dynamic tools and key metrics across different dashboards to analyze customer interactions and improve virtual agent efficiency. For more information, read the [Cognigy Insights](cognigy-insights.md) documentation.

_**Conversation**_
: A billable unit of interaction between a user and a virtual agent or a human agent. For more information about billed conversations, read the [Cognigy Billing](../ai/billing.md) documentation.

## D

_**Dashboard**_
: A single-page canvas that serves as a visual interface to present key performance indicators, metrics, and trends through a variety of visualizations, including line charts, bar charts, ring charts, and other chart types.

_**Data Expiration**_
: Data Expiration (TTL, time-to-live) displays the duration until the expiration of the Insights data displayed on dashboards. For more information, read the [Data Expiration](ttl.md) documentation.

_**Download Report**_
: Each widget on the Insights dashboards provides a **Download Report as .csv file** option in a dropdown menu. The downloaded report file contains the complete widget dataset (depending on the filter settings) for storage or further analysis of your data. For more information, read the [Download Report](download-report.md) documentation.

## E

_**Endpoints**_
: Endpoints ensure that channel-specific input and output (images, galleries, voice) are converted to the standardized Input object. This means that a Cognigy Flow only needs to be developed once, after which it can be deployed to multiple channels by configuring Endpoints. Examples of Endpoints include Webchat, Voice Gateway, Microsoft Teams, and more. In Insights, you can select one or more Endpoints for analysis. For more information, read the [Endpoints](global-filter.md#endpoints) documentation.

_**Expert Mode**_
: This mode provides additional information for conversation messages, including the triggered Intent and its score and the filled Slots. You can enable Expert Mode by toggling the switch at the top of the Transcript panel. For more information, read the [Expert Mode](transcript-explorer.md#expert-mode) documentation.

_**Engagement**_
: A dashboard in Cognigy Insights that displays the performance metrics of your agent focused on customer interactions in conversations. For more information, read the [Engagement Dashboard](dashboard-engagement.md) documentation.

_**Escalation**_
: See [Live Agent Escalation](#L).

_**Explorer**_
: Analysis tools, integrated into Cognigy Insights, to evaluate and display conversational data. The main purpose of an Explorer is to help you understand customer reactions (messages) in a conversation with your virtual agent to improve your service.

## G

_**Global Filter**_
: A tool that allows users to set consistent filtering criteria, such as time frame, Endpoints, Snapshot, Locales, and Message Rating, across different dashboards. These filters make data analysis more unified, making it easier to customize and standardize across various dashboards and explorers within Cognigy Insights. For more information, read the [Global Filter](global-filter.md) documentation.

## L

_**Live Agent**_
: A dashboard in Cognigy Insights that presents Live Agent metrics for a specific virtual agent. For more information, read the [Live Agent](dashboard-live-agent.md) documentation.

_**Live Agent Handovers**_
: An Indicator chart that displays the number of handovers. Handovers occur when a virtual agent transfers a conversation to a human agent, and multiple handovers may occur during a session. For more information, read the [Live Agent Escalations](dashboard-live-agent.md#live-agent-escalations) documentation.

_**Local Filter**_
: The Local Filter options are specific to a dashboard or an explorer. For more information, see the [Local Filter](message-explorer.md) example.

## M

_**Message Explorer**_
: An analysis tool designed for efficiently searching specific customer or virtual agent messages within the context of an ongoing conversation. It provides a comprehensive view by revealing the messages preceding and following a selected one. For more information, read the [Message Explorer](message-explorer.md) documentation.

_**Message Rating**_
: A configurable Global Filter setting, allows users to refine their data analysis based on the sentiment of user feedback within a session.

_**Message Research**_
: A feature of the Transcript Explorer and Message Explorer is to find specific sessions with transcripts by searching for text messages, Session ID, or Contact ID. For more information, read the corresponding sections in the [Transcript Explorer](transcript-explorer.md#message-research) and the [Message Explorer](message-explorer.md) documentation.

## N

_**NLU Performance**_
: A dashboard in Cognigy Insights that presents data related to the Natural Language Understanding (NLU) section. The displayed data pertains to the currently active agent. For more information, read the [NLU Performance](dashboard-nlu-performance.md) documentation.

## O

_**Overview**_
: A dashboard in Cognigy Insights that displays various metrics as numerical percentages and in various graphical displays such as bar charts, ring charts, tiles, or time-based line charts. The charts display data based on the Filter settings. For more information, read the [Dashboard Overview](dashboard-overview.md) documentation.

## S

_**Session**_
: A unit of interaction between a user and a Cognigy virtual or human agent. The session begins when a user sends their initial input to Cognigy, which can be either a chat or voice message, and ends when the user or human agent completes or terminates the interaction. The session can contain an unlimited number of user inputs.

_**Snapshots**_
: An exported Agent that includes required resources, it's an immutable, just-in-time copy of all relevant resources of the Agent. For more information, read the [Global Filters: Snapshots](global-filter.md#snapshot) documentation.

_**Step Explorer**_
: An analysis tool that helps you see how customers move through a conversation. It shows important moments and patterns, like customer reactions and drop-offs, allowing you to improve your virtual agent performance. For more information, read the [Step Explorer](step-explorer.md) documentation.

_**Steps**_
: Conversational steps that can be displayed on the Step Explorer chart must be configured in the Node settings with Annotations in the Analytics steps section to be available for the Step Explorer. For instance, you can configure `Welcome New Caller`. Afterward, you can select the starting step here for Step Explorer processing, commencing from this point. For more information, read the [Step Explorer](step-explorer.md) and the [Annotations](step-explorer.md#annotations) documentation.

## T

_**Tiles**_
: A UI element designed for displaying Indicator charts. These tiles are positioned at the top of a dashboard. For more information, read the [Overview Dashboard](dashboard-overview.md) documentation.

_**Timeframe**_
: A Global Filter settings option. You can choose from preset time periods or set it individually using a date picker in a calendar. For more information, read the [Timeframe](global-filter.md#timeframe) documentation.

_**Timezone**_
: Insights supports presenting time-based data according to the user's specified time zone in the Cognigy.AI user profile settings. For more information, read the [Timezone](timezone.md) documentation.

_**Transcripts**_
: Transcripts are logged conversations between end users and agents.

_**Transcript Explorer**_
: An analysis tool that allows you to evaluate messages in detail to enhance your agent, customer service, and overall user experience. The Transcript Explorer enables you to search for key phrases such as `booking`, `cancel`, or `message` within a list of transcripts. For more information, read the [Transcript Explorer](transcript-explorer.md) documentation.