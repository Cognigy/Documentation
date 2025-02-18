---
title: "Glossary"
slug: "glossary"
description: "Insights Glossary provides a reference for users, administrators, and anyone involved in the operation or understanding of Insights software and practices."
hidden: false
---

# Insights Glossary

This glossary includes all terms related to our Insights tool listed in alphabetical order.

## A

_**Annotations**_
: An optional setting in a Node (refer to Cognigy.AI) called Analytics Step can be defined in a configured Flow using the Node Editor. These Annotations should provide informative references to the configured Node. For instance, when annotating a Say Node that initiates a customer conversation with a welcome, you can enter `Greetings` or `Welcome New Caller`. By utilizing the defined Annotations of your Nodes, the Step Explorer can analyze conversational steps, with each Annotation assigned to a specific step. For more information, read the [Annotations](explorers/step.md) documentation.

## C

_**Chart**_
: A visual tool that displays data in a graphical format, making it easier to understand trends and patterns. Insights reports use various chart types such as bars, lines, and rings to present information effectively.

_**Cognigy Insights**_
: A powerful analytics platform for evaluating and enhancing the performance of Cognigy.AI Agents. It provides dynamic tools and key metrics across different reports to analyze customer interactions and improve AI Agent efficiency. For more information, read the [Cognigy Insights](overview.md) documentation.

_**Conversation**_
: A billable unit of interaction between a user and an AI Agent or a human agent. For more information about billed conversations, read the [Cognigy Billing](../ai/administer/billing.md) documentation.

## D

_**Data Expiration**_
: Data Expiration (TTL, time-to-live) displays the time span until the expiration of the Insights data. For more information, read the [Data Expiration](data-management/ttl.md) documentation.

_**Download Report**_
: Each widget on the Insights reports provides a **Download Report as .csv file** option in a dropdown menu. The downloaded report file contains the complete widget dataset (depending on the filter settings) for storage or further analysis of your data. For more information, read the [Download Report](download-reports.md) documentation.

## E

_**Endpoints**_
: Endpoints ensure that channel-specific input and output (images, galleries, voice) are converted to the standardized Input object. This means that a Cognigy Flow only needs to be developed once, after which it can be deployed to multiple channels by configuring Endpoints. Examples of Endpoints include Webchat, Voice Gateway, Microsoft Teams, and more. In Insights, you can select one or more Endpoints for analysis. For more information, read the [Endpoints](global-filters.md#endpoints) documentation.

_**Debug Mode**_
: This mode provides additional information for conversation messages, including the triggered Intent and its score, as well as the filled Slots. You can enable Debug mode by toggling the switch at the top of the Transcript panel. For more information, read the [Debug Mode](explorers/transcript.md#debug-mode) documentation.

_**Engagement**_
: A report in Cognigy Insights that displays performance metrics for your agent, focusing on customer interactions in conversations. For more information, read the [Engagement Report](reports/engagement.md) documentation.

_**Escalation**_
: See [Live Agent Handovers](#l).

_**Explorer**_
: Analytical tools integrated into Cognigy Insights are designed to evaluate and display conversational data. The primary purpose of an Explorer is to assist you in understanding customer reactions (messages) during a conversation with your AI Agent, ultimately improving your service.

## F

_**Filter Bar**_
: A bar displayed at the top of each Insights report or explorer. The filter bar includes all [global filters](#g) and [local filters](#l), accessible by clicking the **more filters** button.

## G

_**Global Filter**_
: A tool that allows users to set consistent filtering criteria, such as time span, endpoints, snapshot, locales, and message rating, across different reports and explorers. For more information, read the [Global Filter](global-filters.md) documentation.

## L

_**Live Agent**_
: A report in Cognigy Insights that presents Live Agent metrics for a specific AI Agent. For more information, read the [Live Agent](reports/live-agent.md) documentation.

_**Live Agent Handovers**_
: An Indicator chart that displays the number of handovers. Handovers occur when an AI Agent transfers a conversation to a human agent, and multiple handovers may occur during a session. For more information, read the [Live Agent Escalations](reports/live-agent.md#live-agent-handovers) documentation.

_**Local Filter**_
: The Local Filters are specific to a report or an explorer. For more information, see the [Local Filter](explorers/message.md) example.

## M

_**Message Explorer**_
: An analytical tool designed for efficiently searching specific customer or AI Agent messages within the context of an ongoing conversation. It provides a comprehensive view by revealing the messages preceding and following a selected one. For more information, read the [Message Explorer](explorers/message.md) documentation.

_**Message Rating**_
: A configurable Global Filter setting that allows users to refine their data analysis based on the sentiment of user feedback within a session.

_**Message Research**_
: A feature of the Transcript Explorer and Message Explorer is to find specific sessions with transcripts by searching for text messages, Session ID, or User ID. For more information, read the corresponding sections in the [Transcript Explorer](explorers/transcript.md) and the [Message Explorer](explorers/message.md) documentation.

## N

_**NLU Performance**_
: A report in Cognigy Insights that provides a comprehensive view of your AI Agent's natural language understanding (NLU) capabilities. It enables you to monitor and enhance message comprehension, intent recognition, and execution efficiency. For more information, read the [NLU Performance](reports/nlu-performance.md) documentation.

## O

_**Overview**_
: A report in Cognigy Insights that displays various metrics as numerical percentages and in various graphical displays such as bar charts, ring charts, tiles, or time-based line charts. The charts display data based on the Filter settings. For more information, read the [Overview](reports/overview.md) documentation.

## R

_**Report**_
: A single-page canvas that serves as a visual interface to present key performance indicators, metrics, and trends through a variety of visualizations, including line charts, bar charts, ring charts, and other chart types.

## S

_**Session**_
: A unit of interaction between a user and a Cognigy AI Agent or human agent. The session begins when a user sends their initial input to Cognigy, which can be either a chat or voice message, and ends when the user or human agent completes or terminates the interaction. The session can contain an unlimited number of user inputs.

_**Snapshots**_
: An exported Agent that contains necessary resources. A Snapshot is an unchangeable, real-time copy of all relevant Agent resources. For more information, read the [Global Filters: Snapshots](global-filters.md#snapshots) documentation.

_**Step Explorer**_
: An analytical tool hat helps you understand how customers navigate conversations, showing key moments and patterns like reactions and drop-offs to enhance your AI Agent's performance. For more information, read the [Step Explorer](explorers/step.md) documentation.

_**Steps**_
: Conversational steps that can be displayed on the Step Explorer page. To include them, set up annotations in the Analytics Steps section of the Node settings. For example, configure `Welcome New Caller`. Then, choose the starting step for Step Explorer processing. For more information, read the [Step Explorer](explorers/step.md) and the [Annotations](explorers/step.md#annotate-nodes) documentation.

## T

_**Tiles**_
: A UI element designed for displaying Indicator charts. These tiles are positioned at the top of a report. For more information, read the [Overview Report](reports/overview.md) documentation.

_**Time span**_
: A Global Filter settings option. You can choose from preset time periods or set it individually using a date picker in a calendar. For more information, read the [Time Span](global-filters.md#time-span) documentation.

_**Time zone**_
: Insights supports presenting time-based data according to the user's specified time zone in the Cognigy.AI user profile settings. For more information, read the [Timezone](data-management/time-zone.md) documentation.

_**Transcripts**_
: Logged conversations between end users and agents.

_**Transcript Explorer**_
: An analytical tool that allows you to evaluate messages in detail to enhance your agent, customer service, and overall user experience. The Transcript Explorer enables you to search for key phrases such as `booking`, `cancel`, or `message` within a list of transcripts. For more information, read the [Transcript Explorer](explorers/transcript.md) documentation.