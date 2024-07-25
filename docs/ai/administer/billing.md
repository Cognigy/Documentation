---
 title: "Billing" 
 slug: "billing" 
 hidden: false 
---

# Billing

Cognigy products have *three different* ways of charging our customers:

- by charging for *conversations* processed with Cognigy.AI
- by charging for *concurrent lines* for calls handled with Cognigy Voice Gateway
- by charging for *knowledge queries* and *knowledge chunks* used in Knowledge AI

## Billable Conversation

A billable conversation is defined as *an interaction between a user and a virtual or human agent that flows through the Cognigy.AI platform*. A conversation begins with the initial *input* via an Endpoint to the Cognigy.AI platform and ends when the end user stops interacting. A billable conversation is limited to up to 50 user inputs within a 24-hour period.

Sending more than 50 inputs or interacting with the Cognigy.AI platform for more than 24 hours will initiate subsequent billable conversations.

### Common Scenarios

#### Scenario 1

**An end user sends exactly 50 user inputs within a period of less than 24 hours.**

An end user begins interacting with a Cognigy AI Agent and sends 50 user inputs. The entire interaction takes 15 minutes. The system will record *1 billable Conversation* as the end user had fewer than 51 user inputs and only interacted with the system for 15 minutes.

#### Scenario 2

**An end user sends more than 50 user inputs within a period of less than 24 hours.**

An end-user starts to interact with a Cognigy AI Agent and sends 101 user inputs within 2 hours of time. The system will record *3 billable Conversations* as three multiples of 50 inputs have been processed.

#### Scenario 3

**An end user starts an interaction by sending a message, doesn't respond for a day, and then continues the interaction.**

An end user begins interacting with a Cognigy AI Agent by sending a single message. The user then pauses the interaction for more than 24 hours and returns the next day by sending another message. The system will record *2 billable Conversations* since they extend over multiple days and exceed a duration of 24 hours.

### xApps

Cognigy xApps offer multi-modality interactivity with your end users. Note that xApps are a separately licensed product feature that requires a license agreement with Cognigy. To learn more about xApps, refer to the [documentation](../../xApps/overview.md).

When data is submitted from an xApp back into the Cognigy.AI platform, it is handled equivalently to a standard end-user interaction, such as sending a chat input or speaking an utterance in the case of a voice agent.

#### Scenario 1

**An end user books a cinema ticket with a bot using xApps.**

An end user begins interacting with a Cognigy.AI-powered ticket booking chatbot by sending a chat input. The bot responds by requesting the first name, last name, and ticket category. The user answers all three questions by providing the respective data and then gets a floor plan via an xApp, through which they can select a seat. The user selects a seat and submits the selection. The system will record *a single billable Conversation* with the following explanation:

- The end user greets the chatbot - **one user input**
- The AI Agent asks for the first name
- The end user provides the first name - **second user input**
- The AI Agent asks for the last name
- The end user provides the last name - **third user input**
- The AI Agent asks for the ticket category
- The end user provides the ticket category by clicking on a quick reply - **fourth user input**
- The AI Agent presents a floor plan via an xApp
- The end user selects a seat using the xApp and submits the selection - **fifth user input**

### Additional Billable Conversations

Additional charges will apply if you use the Endpoint [Transformers](../deploy/endpoints/transformers/transformers.md), such as:

- Input Transformer
- Inject Transformer
- Notify Transformer

If the Endpoint Transformer executions result in a `falsy` value, such as `null`, `undefined`, or `false`, the message processing pipeline within Cognigy.AI will be terminated, and no Flow will be executed. In such cases, Cognigy.AI will charge an additional billable conversation for every 50 Endpoint Transformer executions.

Note that additional billing will only apply *if no Flow is executed* after your Endpoint Transformer runs.

## Calls

Cognigy.AI offers the ability to build voice experiences and AI Agents that you can deploy to your telephony systems.
Note that you will need a separate license agreement with Cognigy for a product such as Cognigy Voice Gateway.
Customers can purchase different packages of *concurrent lines* to connect their voice-enabled AI Agents to their telephony systems. Reporting capabilities are available to understand the *peak number of concurrent lines* used on a specific day.

If a customer uses more concurrent lines than the number purchased on a given day, overage charges will apply for that day.

## Knowledge AI

Knowledge AI allows Cognigy customers to build RAG-based pipelines powered by Large Language Models.
Note that Knowledge AI is a separately licensed product feature and requires a [license agreement](../empower/knowledge-ai/activate.md) with Cognigy.
To learn more about Knowledge AI, refer to the [documentation](../empower/knowledge-ai/overview.md).

Knowledge AI is licensed by *Knowledge Chunks* and *Knowledge Queries*. The former defines a *hard limit* on how much data can be ingested into the Knowledge AI solution, while the latter determines how often a query can be placed to retrieve a relevant Chunk of knowledge.

Cognigy offers various packages that include Knowledge Chunks and Queries. For Knowledge Queries, overages will apply if more queries are performed than what is included in the originally purchased package. The Knowledge Chunk limit can't be exceeded, as the product will display an error. Customers can purchase additional Knowledge Chunk packages if required.

Reporting capabilities are available to understand both the *number of consumed Knowledge Chunks* and the number of *performed Knowledge Queries*.