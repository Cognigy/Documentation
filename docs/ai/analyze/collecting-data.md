---
title: "Overview"
slug: "collecting-data"
description: "Cognigy.AI collects data from conversations with chat and voice AI Agents in PostgreSQL and MongoDB databases. The collected data is used in Insights to display reports and explorers, and by the OData Endpoint to create customized reports and charts in business intelligence systems, such as Power BI, Tableau, and others."
hidden: false
tags:
  - analytics
  - collecting data
  - insights
  - odata
  - data collections
---

# Collecting Data

Cognigy.AI collects data from conversations with chat and voice AI Agents in PostgreSQL and MongoDB databases. The collected data is used in Insights to display reports and explorers, and by the OData Endpoint to create customized reports and charts in business intelligence systems, such as Power BI, Tableau, and others.

## Data Collections

Analytics data is available in five different collections:

 1. Inputs
 2. Conversations
 3. Steps
 4. Executed Steps
 5. Sessions

This data is accessed by connecting to the [OData Analytics Endpoint](odata.md). 

### Inputs

This collection contains one entry per user input, with detailed data about the user message, such as NLU results, tasks achieved, and input text. The inputs collection is different from the other 4 collections because you can adjust it using the [Overwrite Analytics](../build/node-reference/analytics/overwrite-analytics.md) or [Code](../build/node-reference/basic/code/overview.md) Nodes.

### Conversations

This collection contains one record per user input, one record per AI Agent output, and one record per human agent input. Conversation records are written immediately after a message arrives from the respective source. These records are commonly used for generating conversation transcripts.

### Steps

This collection contains one record per [Analytics Step](analytics-steps.md) in a Flow. You can add Analytics Steps to Nodes or Intents. Both [Question Nodes](../build/node-reference/basic/question.md) and [Intents](../empower/nlu/intents/overview.md) contain an Analytics Step by default. The primary function of this record is to keep a list of unique IDs to retrieve Analytics Steps independently of any name changes.

### Executed Steps

This collection contains one record per executed Analytics Step for every session. You can use this collection to identify the step that occurred prior to the current step.

### Sessions

This collection contains one record per session. The main purpose of this record is to provide a list of ordered steps that occurred in each session.

## Analytics Data Flow

Analytics data is generated throughout the life cycle of a user input in Cognigy.AI. The diagram shows when each type of data is generated and written to the respective collection.

<figure>
  <img class="image-center" src="../../../_assets/ai/analyze/analytics-data-flow.png" width="100%" />
</figure>

1. After the user input is processed by the NLU engine, an Analytics record is generated with the following data:

    ```JavaScript
    {
        projectId,
        projectName,
        contactId,
        sessionId,
        inputId,
        state,
        mode,
        organisation,
        userType,
        channel,
        flowReferenceId,
        flowName,
        entrypoint,
        localeReferenceId,
        flowLanguage,
        inputText,
        inputData,
        intent,
        intentScore,
        intentFlow,
        slots,
        understood,
        timestamp
    }
    ```

2. While the Flow processes the user input, an [Overwrite Analytics](../build/node-reference/analytics/overwrite-analytics.md) or [Code](../build/node-reference/basic/code/overview.md) Node can overwrite the originally generated data.

3. When the Flow execution is complete, Cognigy.AI adds the final analytics information, for example, execution time, to the Analytics record before storing it in the database.

## More Information

- [Analytics Steps](analytics-steps.md)
- [OData Endpoint](odata.md)