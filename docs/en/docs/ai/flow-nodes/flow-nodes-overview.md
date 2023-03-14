---
 title: "Flow Nodes Overview" 
 slug: "flow-nodes-overview" 
 hidden: false 
---
# Flow Nodes Overview

Flow Nodes can be used to add interactivity to a Flow. When combined in a certain way, they can help create dynamic interactive conversations. There are many types of Nodes, ranging from Basic to Advanced. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/Node-Create-Menu.png" width="100%" />
</figure>

???+ info "Extensions"
    Head over to the [**Extensions**]({{config.site_url}}ai/resources/manage/extensions/) section for information on adding more types of **Nodes**.

| Node Categories                                                                       |
| -----------                                                                           |
| [Basic Nodes]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#basic-nodes)      |
| [Message Nodes]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#message-nodes)  |
| [Logic Nodes]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#logic-nodes)      |
| [Profile Nodes]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#profile-nodes)  |
| [Service Nodes]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#service-nodes)  |
| [NLU Nodes]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#nlu-nodes)          |

## Basic Nodes
<div class="divider"></div>

Basic Nodes are commonly used in basic conversational Flows. Included are typical Nodes like the [Say Node]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#say), the [Question Node]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#question) as well as well as certain Flow actions like [Stop and Return]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#stop-and-return). 

## [Message Nodes](./message/message.md)
<div class="divider"></div>
Message Nodes generate certain output that is returned to the user. They are generally multi-channel capable, which means that they work across a broad-range of Endpoints.

### [Say](./message/say.md)

This is the most basic output Node that can be used to send a message to the user on his current channel. 

### [Question](./message/question.md)

The **Question Node** can be used to ask the user a question. When triggered, the Entry Point will shift to this Node so that the conversation can continue when the user answers - and a new [**Input**]({{config.site_url}}ai/tools/interaction-panel/input/) object is generated. By default, the [**Entry Point**]({{config.site_url}}ai/resources/build/flows/#entry-points) will stick to this Node until a valid answer has found.

### [Optional Question](./message/optional-question.md)

The **Optional Question Node** works similar to the **Question Node**, except for the fact that the Entry Point is optional by default. 

### [Send Email](./message/send-email.md)

The Send Email Node can be used to send an email message directly from within the Flow. IT requires a [Connection]({{config.site_url}}ai/resources/build/connections/) in order to work.

### [Datepicker](./message/datepicker.md)

The Datepicker can be used to render a date selection widget in certain channels. It has an extensive list of configurable options.

## [Logic Nodes](./logic/logic.md)
<div class="divider"></div>

Logic Nodes can be used to execute a certain logic in the flow. They include classical conditions, as well as specific Flow behavior like waiting for a user input.

### [If](./logic/if.md)

The If Node is one of the most common Logic Nodes. It can be used to evaluate a statement and depending on the outcome, the Then or Else cases are triggered.  Conditions can be created using **CognigyScript** or using the built-in  [**Token System**]({{config.site_url}}ai/resources/manage/tokens/).


### [Lookup](./logic/lookup.md)

The Lookup Node acts as a switch between different options. A certain type of input (for example, Intents) is evaluated and based on the value, a certain branch is executed.

???+ info "Coming from Cognigy version 3.x?"
    The **Lookup Node** was previously known as the **Switch Node**.

### [Go To](./logic/go-to.md)

The **Go To Node** can be used to jump between **Flows** or between **Nodes**. If the Go To Node is used to switch to another Flow, the **Entry Point** will switch to that Flow altogether (until switched back).


### [Execute Flow](./logic/execute-flow.md)

The **Execute Flow** Node can be used to execute another Flow, meaning that it will run that Flow and return to the initial Flow afterwards. This means that the *Entry Point* will not switch to the new Flow. This operation can be compared to a function call. 

### [Think](./logic/think.md)

The **Think Node** can be used to deliberately inject a text into the **Start Node** of the Flow. This is useful in case it is necessary to start the Flow again, with a specific payload. The payload could, for example, correspond to a certain Intent.

### [Once](./logic/once.md)

Everything below a Once Node will be executed only once per session. This is useful in case the bot needs to greet the user or in case a database request needs to happen only once per session.

### [Interval](./logic/interval.md)

The Interval Node can be used to only allow certain Nodes to be execute if a given time (interval) has passed. It is configurable with a number of milliseconds.

### [Stop and Return](./logic/stop-and-return.md)

The Stop and Return node stops Flow execution and return to the Entry Point at the start node.

### [Wait for Input](./logic/wait-for-input.md)

The Wait for Input Node waits for user input and continues Flow execution.

### [Sleep](./logic/sleep.md)

The Sleep Node pauses execution for an number of milliseconds. This Node used to be known as the Pause Node. 

### [Set State](./logic/set-state.md)

With the Set State Node, the Flow's [**State**]({{config.site_url}}ai/tools/interaction-panel/state/) can be changed.


### [Reset State](./logic/reset-state.md)

With the Reset State Node, the Flow's [**State**]({{config.site_url}}ai/tools/interaction-panel/state/) can be reset.


## [Profile Nodes](./profile/profile.md)
<div class="divider"></div>

Profile Nodes are used to update  [**Contact Profile**]({{config.site_url}}ai/resources/manage/contact-profiles/) information. Common operations are:

### [Activate Profile](./profile/activate-profile.md)

This Node can be used to active a  [**Contact Profile**]({{config.site_url}}ai/resources/manage/contact-profiles/)  in case it has been deactivated. The Node is not configurable. 

### [Deactivate Profile](./profile/deactivate-profile.md)

Can be used to deactivate the  [**Contact Profile**]({{config.site_url}}ai/resources/manage/contact-profiles/).

### [Update Profile](./profile/update-profile.md)

This Node is commonly used, as it helps update [**Contact Profile**]({{config.site_url}}ai/resources/manage/contact-profiles/) information. It is configurable with a drop-down of all the [**Contact Profile Schema**]({{config.site_url}}ai/resources/manage/contact-profiles/) attributes.  

### [Merge Profile](./profile/merge-profile.md)

This Node can be used to merge the current session to an existing  [**Contact Profile**]({{config.site_url}}ai/resources/manage/contact-profiles/) . The Node can be configured with an identifier that can be used as a user id.

### Blind Mode

The Blind Mode disables all (or selected) logging. The Node can be used whenever the Virtual Agent handles sensitive data, that should be excluded from the logs.

  * **Mask Loggin:** Outputs XXXX in the output logs of the Agent.
  * **Mask Analytics:** Outputs XXXX in the analytics (including Contact Profile conversations).
  * **Disable Conversations:** Disabled output analytics alltogether.

### [Delete Profile](./profile/delete-profile.md)

Deletes the currently active  [**Contact Profile**]({{config.site_url}}ai/resources/manage/contact-profiles/).

### [Complete Goal](./profile/complete-goal.md)

Can be used to add a custom Goal to the  [**Contact Profile**]({{config.site_url}}ai/resources/manage/contact-profiles/). Custom Goals are KPIs that can be dynamically configured and that show up in the output analytics as well as the  [**Contact Profile**]({{config.site_url}}ai/resources/manage/contact-profiles/) overview.

## [Service Nodes](./services/services.md)
<div class="divider"></div>

Service Nodes can be used to trigger external services, like databases and email servers. Cognigy.AI ships with a number of built-in services. Additional services can be added through [**Extensions**]({{config.site_url}}ai/resources/manage/extensions/).

### [HTTP Request](./services/http-request.md)

The **HTTP Request Node** is a very convenient Node that can execute HTTP requests to other interfaces (APIs). It can be configured with typical REST operations (GET, POST, PATCH, PUT, DELETE) and has configurable JSON or Text payloads.

Each request method has some field which it shares with the other methods. These are the fields:

  * [URL](#url)
  * [Headers](#headers)
  * [Authorization Type](#authorization-type)
  * Context Store
  * Async
  * [Caching](#execution-and-caching)
    * Cache Expiry
   
#### URL

The URL to the targeted resource in the format: `https://api-endpoint.com/resource`.

#### Headers

Here you can add the headers you need to successfully perform the HTTP request.

#### Authorization Type

  * No Auth
  * Basic Auth
  * OAuth2
  * API Key - "Authorization: ApiKey"
  * API Key - "X-API-Key"

In case you select a authorization type other than No Auth you'll get additional fields which depend on the selected authorization type.

#### Execution and Caching

This sections lets you configure the HTTP request to be asynchronous and optionally enable request caching.

### [MongoDB Nodes](./services/mongo-db.md)

Cognigy.AI has a built-in MongoDB connector that can be used directly within the Flow. The Node exposes a number of requests:


### [Microsoft SQL Nodes](./services/ms-sql.md)

Cognigy.AI has a built-in Microsoft SQL connector that can be used directly within the Flow. The Node exposes a number of requests:

  * Run SQL Query
Executes an SQL Query.

  * Run Transaction
Runs a transaction.

  * Run StoredProcedure
Triggers a StoredProcedure.

## [NLU Nodes](./nlu/nlu.md)
<div class="divider"></div>
NLU Nodes are a collection of Nodes that are related to the platform's [**NLU**]({{config.site_url}}ai/nlu/nlu-overview/overview/). It features a range of different Nodes.

### [Copy Slots to Context](./nlu/copy-slots-to-context.md)

This Node can be used to copy slots that were detected and published in the [**Input**]({{config.site_url}}ai/tools/interaction-panel/input/)  object, to the conversation [**Context**]({{config.site_url}}ai/tools/interaction-panel/context/). 

### [Add Lexicon Keyphrase](./nlu/add-lexicon-keyphrase.md)

This Node can be used to dynamically create a [Lexicons]({{config.site_url}}ai/resources/build/lexicons/) Keyphrase entry, either based on hardcoded or dynamic data.

### [Execute Cognigy NLU](./nlu/execute-cognigy-nlu.md)

Can be used to explicitly execute **Cognigy's NLU** at a certain point in the flow. NLU execution happens automatically at the start of the Flow and with each new user input.

### [Regex Slot Filler](./nlu/regex-slotfiller.md)

This Node can be used to create a Slot based on a **Regex Pattern**. When the pattern is detected, a slot will be published to the [**Input**]({{config.site_url}}ai/tools/interaction-panel/input/)  object.

## [Code Node](./code/code.md)
<div class="divider"></div>

Code Node enables a Flow creator to execute custom JavaScript or TypeScript code within the Flow. The editor has full IntelliSense and exposes all Cognigy objects and actions. For better performance, the TypeScript code will be transpiled when the node is saved. If the transpilation fails the code will be saved and an error icon will appear in the top right corner of the Code Node, indicating that there is a potential issue with the code.

## [Voice Gateway Nodes](./vg/voice-gateway.md)
<div class="divider"></div>

Cognigy Voice Gateway Nodes expose functionality provided by Cognigy Voice Gateway directly in the Flow Editor.

## [Other Nodes](./other-nodes/other-nodes.md)
<div class="divider"></div>

Nodes that did not fit into any category above.
 