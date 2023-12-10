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

A billable conversation is defined as *an interaction between a user and a virtual or human agent that flows through the Cognigy.AI platform*. A conversation starts when a user sends their initial *input* via an Endpoint to the Cognigy.AI platform and ends when the end-user stops interacting. A billable conversation is limited to up to 50 user inputs and can take up to 24 hours.

Sending more than 50 inputs or interacting with the Cognigy.AI platform for more than 24 hours will start subsequent billable conversations.

### Common Scenarios

#### Scenario 1

**An end-user sends exactly 50 user inputs within less than 24 hours.**

An end-user starts to interact with a Cognigy.AI powered virtual agent and sends 50 user inputs. The entire interaction takes 15 minutes. The system will record *one billable Conversation* as the end-user was below 51 user inputs and only interacted with the system for 15 minutes.

#### Scenario 2

**An end-user sends more than 50 user inputs within less than 24 hours.**

An end-user starts to interact with a Cognigy.AI powered virtual agent and sends 101 user inputs within 2 hours of time. The system will record *three billable Conversations* as three multiple of 50 inputs have been processed.

#### Scenario 3

**An end-user starts an interaction by sending a message, then does not respond for a full day and then continues the interaction.**

An end-user starts to interact with a Cognigy.AI powered virtual agent by sending a single message. The user then pauses the interaction for more than 24 hours and comes back the next day by sending another message. The system will record *two billable Conversations* as the Conversation span across multiple days and took longer than 24 hours.

### xApps

Cognigy xApps offer multi modality interactivity with your end-users. Please note that xApps are a separately licensed product feature which require a license agreement with Cognigy. You can [learn more about xApps](./xApp/overview.md) in our dedicated xApps documentation.

Submitting data from an xApp back into the Cognigy.AI platform is treated equally as if an end-user would interact in a normal way, e.g. by sending a chat-input or by talking an utterance in case of a voice-bot.

#### Scenario 1

**An end-user books a cinema ticket with a bot using xApps.**

An end-user starts to interact with a Cognigy.AI powered ticket booking chat-bot by sending a chat-input. The bot response by asking for the firstname, the lastname as well as the ticket category. The user responds to all three questions by providing the respective data and then gets a floorplan presented via an xApp through which a seat can be selected. The user selects a seat and submits the selection. The system will record *a single billable Conversation* with the following explanation:

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

Customers can buy different packages of *concurrent lines* in order to connect their voice-enabled virtual agents to their telefony systems. Reporting capabilities are available in order to understand the *peak number of concurrent lines* that have been used on a specific day.

If customers use slightly more than the number of purchased concurrent lines, we will charge for overages.

## Knowledge AI

Cognigy.AI has recently received a larger update in which we have introduced Knowledge AI - a product feature which allows our customers to implement RAG-based pipelines powered by Large Language Models. Please note that Knowledge AI is a separately licensed product feature and requires a license agreement with Cognigy. You can [learn more about Knowledge AI](./knowledge-ai/overview.md) in our dedicated documentation.

For Knowledge AI our customers need to:

- define the number of *Knowledge Chunks* they require in order to ingest their data and
- define the number of *Knowledge Queries* they want to process e.g. on a monthly basis.

Knowledge Chunks define a *hard-limit* of how much data can be stored inside of the Cognigy.AI platform. This limit can't be exceeded as the platform will stop to accept new Knowledge Chunks. Already existing Knowledge Chunks can be deleted in order to free up space. Cognigy customers can purchase additional knowledge Chunks if required.

Knowledge Queries *do not have a hard-limit* but contain included queries e.g. per month. If customers exceed the number of included Knowlege Queries, overages will apply - similar to our billable Conversations.
