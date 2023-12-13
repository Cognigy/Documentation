---
 title: "Billing" 
 slug: "billing" 
 hidden: false 
---

# Billing

Cognigy products have *three different* ways of charging our customers:

- by charging for *conversations* processed with Cognigy.AI
- by charging for *concurrent lines* for calls handled with Cognigy VG
- by charging for *knowledge queries* and *knowledge chunks* used in Knowledge AI

## Billable Conversation

A billable conversation is defined as *an interaction between a user and a virtual or human agent that flows through the Cognigy.AI platform*. A conversation starts with the initial *input* via an Endpoint to the Cognigy.AI platform and ends when the end-user stops interacting. A billable conversation is limited to up to 50 user inputs within a 24 hour period.

Sending more than 50 inputs or interacting with the Cognigy.AI platform for more than 24 hours will start subsequent billable conversations.

### Common Scenarios

#### Scenario 1

**An end user sends exactly 50 user inputs within a period of less than 24 hours.**

An end user begins interacting with a Cognigy.AI-powered virtual agent and sends 50 user inputs. The entire interaction takes 15 minutes. The system will record *1 billable Conversation* as the end user had fewer than 51 user inputs and only interacted with the system for 15 minutes.

#### Scenario 2

**An end user sends more than 50 user inputs within a period of less than 24 hours.**

An end-user starts to interact with a Cognigy.AI powered virtual agent and sends 101 user inputs within 2 hours of time. The system will record *3 billable Conversations* as three multiple of 50 inputs have been processed.

#### Scenario 3

**An end user starts an interaction by sending a message, doesn't respond for a day, and then continues the interaction.**

An end user begins interacting with a Cognigy.AI powered virtual agent by sending a single message. The user then pauses the interaction for more than 24 hours and returns the next day by sending another message. The system will record *2 billable Conversations* since they extend over multiple days and exceed a duration of 24 hours.

### xApps

Cognigy xApps offer multi modality interactivity with your end-users. Please note that xApps are a separately licensed product feature which require a license agreement with Cognigy. You can [learn more about xApps](./xApp/overview.md) in our dedicated xApps documentation.

Submitting data from an xApp back into the Cognigy.AI platform is treated equally as if an end-user would interact in a normal way, e.g. by sending a chat-input or by talking an utterance in case of a voice-bot.

#### Scenario 1

**An end user books a cinema ticket with a bot using xApps.**

An end user begins interacting with a Cognigy.AI-powered ticket booking chatbot by sending a chat input. The bot responds by requesting the first name, last name, and ticket category. The user answers all three questions by providing the respective data and then gets a floorplan via an xApp, through which they can select a seat. The user selects a seat and submits the selection. The system will record *a single billable Conversation* with the following explanation:

- end-user greeted the chat-bot - **one user input**
- virtual agent asked for firstname
- end-user provides firstname - **second user input**
- virtual agent asked for lastname
- end-user provides lastname - **third user input**
- virtual agent asked for ticket category
- end-user provides ticket category by clicking on quick-reply - **fourth user input**
- virtual agent presents a floorplan via xApp
- end-user selects seat using the xApp and submits selection - **fifth user input**

### Additional Billable Conversations

Additional charges will apply if you are using Endpoint [Transformers](../ai/endpoints/transformers/transformers.md) such as:

- Input Transformer
- Inject Transformer
- Notify Transformer

and return a `falsy` value such as `null`, `undefined` or `false`. In those cases, the message processing pipeline within Cognigy.AI will be terminated and no Flow will be executed. In this case, Cognigy.AI will charge 1 additional billable conversation per 50 Endpoint Transformer executions.

Please note that additional billing will only apply *if no Flow will be executed* after your Endpoint Transformer runs.

## Calls

Cognigy.AI offers building voice experiences and virtual agents you can deploy to your telefony systems. Please note that you will need a separate license agreement with Cognigy for a product like Cognigy Voice Gateway.

Customers can purchase different packages of *concurrent lines* in order to connect their voice-enabled virtual agents to their telefony systems. Reporting capabilities are available in order to understand the *peak number of concurrent lines* that have been used on a specific day.

If a customer is using more concurrent lines than purchased on a day, overage charges will apply for that day.

## Knowledge AI

Knowledge AI allows our customers to build RAG-based pipelines powered by Large Language Models. Please note that Knowledge AI is a separately licensed product feature and requires a license agreement with Cognigy. You can [learn more about Knowledge AI](./knowledge-ai/overview.md) in our dedicated documentation.

Knowledge AI is licensed by *Knowledge Chunks* and *Knowledge Queries*. While the former will define a *hard-limit* on how much data can be ingested into the Knowledge AI solution, the latter defines how often a query can be placed in order to retrieve a relevant Chunk of knowledge.

Cognigy offers different packages which include Knowledge Chunks and Queries. For Knowledge Queries overages will apply if more queries will be performed than included in the original purchased package. The Knowledge Chunk limit can't be exceeded as the product will display an error. Customers can purchase additional Knowledge Chunk packages if required.

Reporting capabilities are available in order to understand the *number of consumed Knowledge Chunks* as well as the number of *performed Knowledge Queries*.