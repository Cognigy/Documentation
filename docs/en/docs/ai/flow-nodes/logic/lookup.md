---
 title: "Lookup" 
 slug: "lookup" 
 hidden: false 
---
# Lookup

[![Version badge](https://img.shields.io/badge/Updated in-v4.51-blue.svg)](../../../release-notes/4.51.md)

## Description
<div class="divider"></div>

A **Lookup Node** is used to create different Flow paths, based on a chosen operand.

The `operand` can be set manually to `Intent`, `State`, `Type` and `Mode`, or custom `CognigyScript`. In the appended Case Nodes, the specific values for the selected operand are entered. The operand is evaluated during the execution of the Flow, and the result is compared with the values of each case. If there is a match, the Flow path of the matched case will be executed. If there is no case match, the path of the **Default Node** will be executed.

If you choose CognigyScript as the operand, you must use direct CognigyScript similar to the [**If Node**]({{config.site_url}}ai/flow-nodes/logic/if/). You can also select to parse the CognigyScript as a string or not.

!!! warning "Case Sensitivity"
    All Lookup Case Nodes are case sensitive. Be careful to use the correct upper or lower case spelling in the **Value** field of your Case Nodes.

### An alternative to nested IF Nodes

**Lookup Nodes** are used if the number of possible options becomes too large to use If Nodes. 

Instead of saying if `input.intent === "orderFood"` then x, else -> `input.intent === "orderDrink"`, else -> `input.intent === "askHelp"`, else ..., you can simply use a **Lookup on Intent** with multiple cases (`orderFood`, `orderDrink`, `askHelp`) and a default.

## Lookup Type
<div class="divider"></div>

### Intent 
This is the default setting for the **Lookup Node**, and it allows you to easily look up the Intent that has been triggered. 

By default, the Intent at the most detailed **[Intent Hierarchy]({{config.site_url}}ai/nlu/nlu-overview/intent-hierarchy/)** level is matched. In this case, the Intents of all three levels are selectable in the Intent dropdown menu of the Case Nodes.

However, you can also select a level via the "Intent Level" dropdown, if Intents should only be matched on a certain hierarchy level.
In this case only the Intents of the chosen level are selectable in the Intent dropdown menu of the Case Nodes.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/6b2661d-intent.png" width="100%" />
  <figcaption>An intent type Lookup Node with 3 cases.</figcaption>
</figure>

!!! note "Want to know more about using Intents?"
    Find more information about building Flows with intents on the **[NLU Overview Page]({{config.site_url}}ai/nlu/nlu-overview/overview/)**.

### Text
By changing the lookup type to **Text**, the Flow will select a case that matches the value of `input.text`. The case values must manually be written for this type of lookup.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/lookup-text.png" width="100%" />
  <figcaption>A Text type Lookup Node with 2 cases.</figcaption>
</figure>

### State
By changing the lookup type to **[State]({{config.site_url}}ai/tools/interaction-panel/state/)**, the Flow will select a case that matches the value of `input.state`. The case values must manually be written for this type of lookup.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/3373c62-state.png" width="100%" />
  <figcaption>A State type Lookup Node with 3 cases.</figcaption>
</figure>

!!! note "What is State??"
    States allow limitations to be placed on a conversation that restrict the valid Intents that the NLU has access to. Find out more on the **[States Page]({{config.site_url}}ai/tools/interaction-panel/state/)**.

### Type
By changing the lookup type to **Type**, the Flow will select a case that matches the value of `input.type`. The case values must manually be written for this type of lookup.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/7b68885-type.png" width="100%" />
  <figcaption>A Type Lookup Node with 3 cases.</figcaption>
</figure>

!!! note "What is Type?"
    The **Type** is defined as a classification of the last user message as determined by the NLU. The type is an [Input]({{config.site_url}}ai/tools/interaction-panel/input/) variable that can be one of the following values: *Statement, Command, Greeting, BGreeting, whQuestion, howQuestion, ynQuestion, pAnswer or nAnswer.* 

### Mode
By changing the lookup type to **Mode**, the Flow will select a case that matches the value of `input.mode`. The case values must manually be written for this type of lookup.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/2a676e7-mode.png" width="100%" />
  <figcaption>A Mode type Lookup Node with 2 cases.</figcaption>
</figure>

!!! note "What is Mode?"
    The **Mode** provides information on what was contained in the last user message. The type is an [Input]({{config.site_url}}ai/tools/interaction-panel/input/) variable that can be one of the following values: *TextOnly or TextData.* (Data only messages have an implicitly defined text that includes `DATA_ONLY_MESSAGE_` followed by a randomly generated string of 20 characters)

### Handover Status
By changing the lookup type to **Handover Status**, the Flow will select a case that matches the value of `input.handover.status`. The case values must manually be written for this type of lookup.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/lookup-handover-status.png" width="100%" />
  <figcaption>A Handover Status type Lookup Node with 4 cases.</figcaption>
</figure>

### CognigyScript
By changing the lookup type to **CognigyScript**, the Flow will select a case that matches the value of any variable that is entered in the "Operator" field, either by using a *token* or by writing the variable path in *CognigyScript*. This feature makes it possible to change the Flow path based on any variable in the `input`, `context` or `profile`. The case values must manually be written for this type of lookup.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/fb8d3ae-cognigyScript.png" width="100%" />
  <figcaption>Setting the Lookup type to CognigyScript</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/f09cf4a-cognigyScript1.png" width="100%" />
  <figcaption>A CognigyScript type Lookup Node with 3 cases based on a profile variable.</figcaption>
</figure>

!!! note "What is CognigyScript?"
    CognigyScript is a superset of JavaScript which gives you access to the Input, Context and Profile objects within text and JSON. Find out more on the **[CognigyScript Page]({{config.site_url}}ai/tools/cognigy-script/)**.

### Call Event Status

By changing the lookup type to **Call Event Status**, the Flow will select a case that matches the value of `input.data.event`. The case values must manually be written for this type of lookup.

In the child LookUp node, you can operate the following Voice Gateway events:

- Recognized Speech
- Recognized DTMF
- Call Created
- Call Reconnected
- Call Failed
- User Input Timeout
- Answering Machine Detection

More information about these events you can find in the [Voice Gateway Events](../../../voicegateway/references/events/overview.md) reference.
