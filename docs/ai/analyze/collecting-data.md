---
title: "Overview"
slug: "collecting-data" 
hidden: false 
---

# Collecting Data

Cognigy.AI collects data from conversations with chat and voice agents in the MongoDB database. This database is part of Cognigy.AI installations, which can run on SaaS or on-premises environments. 
The collected data is utilized by Insights to display reports and explorers, and by the OData endpoint to create customized reports and charts in BI systems, such as Power BI, Tableau, and others.

## Data Collections

Analytics data is created from conversations with AI Agents in Cognigy.AI and is available from five distinct collections:

 1. Inputs
 2. Chat History
 3. Steps
 4. Executed Steps
 5. Sessions

This data is accessed by connecting to the [OData Analytics Endpoint](odata.md). 

### Inputs

This collection consists of one entry per user input.
It contains detailed data about the input message such as NLU results (intents & slots), tasks achieved, and more.
The inputs collection is different from the other 4 collections
as it can be adjusted by the flow logic
using the [Overwrite Analytics](../build/node-reference/analytics/overwrite-analytics.md) or [Code](../build/node-reference/basic/code/overview.md) Nodes.
This process is explained below.

### Chat History

This collection contains one record per user input, one record per AI Agent output and one record per human agent input. Chat History records are written immediately whenever the message from the respective source arrives. This record is commonly used for generating conversation transcripts.

### Steps

This collection contains one record per analytics step that exists in a flow. A step can be either a flow node or an intent. Both [Question](../build/node-reference/basic/question.md) Nodes and [Intents](../empower/nlu/intents/ml-intents.md) are automatically created with an attached analytics step, but any other flow node can also be created as a step. The primary function of this record is to act as a reference list of entity id's to retrieve the current label of each analytics step for backwards compatibility of data records as the analytics step label can be updated from Cognigy.AI at any time.

### Executed Steps

This collection contains one record per executed step from every session that exists in the records. This collection can be used to identify the step that occurred prior to the current step as it also contains a reference id for the previous step.

### Sessions

This collection contains one record per session. The main purpose of this record is to deliver a list of ordered steps that each individual session has taken. 

## Analytics Data Flow

Analytics data is generated through the whole life cycle of an input message being processed by Cognigy.AI. The diagram below shows when each type of data is generated and written to the respective collection.

<figure>
  <img class="image-center" src="../../../_assets/ai/analyze/analytics-data-flow.png" width="100%" />
</figure>

1. When the input arrives (but after the NLU), the analytics record is initialized with the following data:

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

2. While a Flow is processing the Input, the Flow can overwrite the initialized data. This can be done by using the [Overwrite Analytics Node](../build/node-reference/analytics/overwrite-analytics.md) or [Code Node](../build/node-reference/basic/code/overview.md). 

3. When the Flow Execution finished, Cognigy.AI adds final analytics information (such as execution time) to the Analytics Record before storing it to the database.

## Analytics Steps

In Cognigy.AI, Analytics Steps are implemented to monitor the paths users take during interactions with the AI Agent.

### Create a Step

You can create an analytics step in the following components:

- [Nodes](#flow-node-steps)
- [Intents](#intent-steps)

#### Flow Node Steps

To add an analytics step in the Node, do the following:

1. In the left-side menu of the Project, go to **Build > Flows**. 
2. On the **Flows** page, select the existing Flow or create a new one.
3. In the Flow editor, select the Node for which you want to add an Analytics step.
4. Open the Node editor by clicking the Node.
5. In the Node editor, navigate to **Settings > Analytics Step**. 
6. In the **Analytics Step** field, enter a step name. This name cannot contain the following symbols: <code>/:*?"<>|¥!&$§%{}=»,.;+~#`'°µ€</code>, cannot start or end with a whitespace, and must be no longer than 128 characters. 
7. Click **Save**.

The Step will be recorded in the Analytics database once the Node is executed.

#### Intent Steps

To add an analytics step in the Intent, do the following:

1. In the left-side menu of the Project, go to **Build > Flows**.
2. On the **Flows** page, select the existing Flow or create a new one.
3. In the upper-right corner, select the **NLU** tab.
4. On the **Intents** tab, go to the existing Intent or create a new one.
5. Navigate to **Advanced > Analytics step**.
6. In the **Analytics step** field, enter a step name. This name cannot contain the following symbols: <code>/:*?"<>|¥!&$§%{}=»,.;+~#`'°µ€</code>, cannot start or end with a whitespace, and must be no longer than 128 characters.
7. Click **Save**.

The Step will be recorded in the Analytics database once the Flow is executed.

!!! note "Step Creation in the OData Records"
    A step will only exist in the OData records after a conversation has triggered it at least once.