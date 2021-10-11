# Analytics Concepts

## Data Collections

<div class="divider"></div>

Analytics data is created from conversations with virtual agents in Cognigy.AI and is available from five distinct collections:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/a50eed8-records.PNG" width="100%" />
</figure>

 1. Inputs
 2. Chat History
 3. Steps
 4. Executed Steps
 5. Conversations

This data is accessed by connecting to the [OData Analytics Endpoint]({{config.site_url}}ai/tools/analytics/odata-analytics-endpoint/). 

## Inputs

This collection consists of one entry per user input. It contains detailed data about the input message such as NLU results (intents & slots), goals achieved and more. The inputs collection is different from the other 4 collections as it can be adjusted by the flow logic using the [Overwrite Analytics]({{config.site_url}}ai/flow-nodes/other-nodes/overwrite-analytics) or [Code]({{config.site_url}}ai/flow-nodes/code/code) nodes. This process is explained below.


## Chat History

This collection contains one record per user input, one record per virtual agent output and one record per human agent input. Chat History records are written immediately whenever the message from the respective source arrives. This record is commonly used for generating conversation transcripts.

## Steps

This collection contains one record per analytics step that exists in a flow. A step can be either a flow node or an intent. Both [Question]({{config.site_url}}ai/flow-nodes/message/question) Nodes and [Intents]({{config.site_url}}ai/nlu/nlu-overview/ML-intents) are automatically created with an attached analytics step but any other flow node can also be created as a step. The primary function of this record is to act as a reference list of entity id's to retrieve the current label of each analytics step for backwards compatibility of data records as the analytics step label can be updated from Cognigy.AI at any time.


## Executed Steps

This collection contains one record per executed step from every conversation that exists in the records. This collection can be used to identify the step that occurred prior to the current step as it also contains a reference id for the previous step.

## Conversations

This collection contains one record per conversation (session). The main purpose of this record is to deliver a list of ordered steps that each individual conversation has taken.


## Analytics Data Flow

<div class="divider"></div>

Analytics data is generated through the whole lifecycle of an input message being processed by Cognigy.AI. The diagram below shows when each type of data is generated and written to the respective collection.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/3239aa2-ConceptImage.PNG" width="100%" />
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

2. While a Flow is processing the Input, the Flow can overwrite the initialized data. This can be done by using the [Overwrite Analytics Node]({{config.site_url}}ai/flow-nodes/other-nodes/overwrite-analytics) or [Code Node]({{config.site_url}}ai/flow-nodes/code/code) 

3. When the Flow Execution finished, Cognigy.AI adds final analytics information (such as execution time) to the Analytics Record before storing it to the database

## Analytics Steps

<div class="divider"></div>

Analytics Steps are created in Cognigy.AI to track the conversation paths that users are taking when talking to the virtual agent.

## Creating a Step
---
A step entity is either a [Flow Node]({{config.site_url}}ai/flow-nodes/flow-nodes-overview) or an [Intent]({{config.site_url}}ai/nlu/nlu-overview/ML-intents). Each type of entity can be assigned as a step via the settings menu for the respective entity. 

###Flow Node Steps
A flow node is created as an analytics step by entering a text label in the "Analytics Step" field within the "settings" dropdown menu of the node settings:


<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/b9e42cf-StepFlow.PNG" width="100%" />
</figure>

### Intent Steps
An intent is created as an analytics step by entering a text label in the "Analytics Step" field within the "Advanced" dropdown menu of the intent settings:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/0d04fd1-IntentStep.PNG" width="100%" />
</figure>

???+ warning "Step Creation in the Odata Records"
    A step will only exist in the OData records after a conversation has triggered it at least once.
