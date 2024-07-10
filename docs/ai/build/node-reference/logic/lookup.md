---
title: "Lookup" 
slug: "lookup" 
hidden: false 
---
# Lookup

[![Version badge](https://img.shields.io/badge/Updated in-v4.58-blue.svg)](../../../../release-notes/4.58.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/lookup.png" width="80%" />
</figure>

## Description

A **Lookup Node** is used to create different Flow paths, based on a chosen operand.

The `operand` can be set manually to `Intent`, `State`, `Type` and `Mode`, or custom `CognigyScript`. In the appended Case Nodes, the specific values for the selected operand are entered. The operand is evaluated during the execution of the Flow, and the result is compared with the values of each case. If there is a match, the Flow path of the matched case will be executed. If there is no case match, the path of the **Default Node** will be executed.

If you choose CognigyScript as the operand, you must use direct CognigyScript similar to the [If Node](../logic/if.md). You can also select to parse the CognigyScript as a string or not.

!!! warning "Case Sensitivity"
    All Lookup Case Nodes are case-sensitive. Ensure that you use the correct upper or lower case spelling in the **Value** field of your Case Nodes.

### An alternative to nested IF Nodes

**Lookup Nodes** are used if the number of possible options becomes too large to use If Nodes. 

Instead of saying if `input.intent === "orderFood"` then x, else -> `input.intent === "orderDrink"`, else -> `input.intent === "askHelp"`, else ..., you can simply use a **Lookup on Intent** with multiple cases (`orderFood`, `orderDrink`, `askHelp`) and a default.

## Lookup Type

### Intent 

This is the default setting for the **Lookup Node**, and it allows you to easily look up the Intent that has been triggered. 

By default, the Intent at the most detailed **[Intent Hierarchy](../../../empower/nlu/intents/intent-hierarchy.md)** level is matched. In this case, the Intents of all three levels are selectable in the Intent dropdown menu of the Case Nodes.

However, you can also select a level via the "Intent Level" dropdown if Intents should only be matched on a certain hierarchy level.
In this case, only the Intents of the chosen level are selectable in the Intent dropdown menu of the Case Nodes.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/lookup-intent.png" width="100%" />
  <figcaption>An intent type Lookup Node with 3 cases</figcaption>
</figure>

For more information about building Flows with Intents, refer to the [NLU Overview](../../../empower/nlu/overview.md) page.

### Text

By changing the lookup type to **Text**, the Flow will select a case that matches the value of `input.text`. The case values must manually be written for this type of lookup.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/lookup-text.png" width="100%" />
  <figcaption>A Text type Lookup Node with 2 cases</figcaption>
</figure>

### State

By changing the lookup type to [State](../../../test/interaction-panel/state.md), the Flow will select a case that matches the value of `input.state`. The case values must manually be written for this type of lookup.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/lookup-state.png" width="100%" />
  <figcaption>A State type Lookup Node with 3 cases</figcaption>
</figure>

States allow limitations to be placed on a conversation that restrict the valid Intents that the NLU has access to. For more information, refer to the [States](../../../test/interaction-panel/state.md) page.

### Type

By changing the lookup type to **Type**, the Flow will select a case that matches the value of `input.type`. The case values must manually be written for this type of lookup.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/lookup-type.png" width="100%" />
  <figcaption>A Type Lookup Node with 3 cases</figcaption>
</figure>

!!! note "What is Type?"
    The **Type** is defined as a classification of the last user message as determined by the NLU. The type is an [Input](../../../test/interaction-panel/input.md) variable that can be one of the following values: Statement, Command, Greeting, BGreeting, whQuestion, howQuestion, ynQuestion, pAnswer or nAnswer. 

### Mode

By changing the lookup type to **Mode**, the Flow will select a case that matches the value of `input.mode`. The case values must manually be written for this type of lookup.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/lookup-mode.png" width="100%" />
  <figcaption>A Mode type Lookup Node with 2 cases</figcaption>
</figure>

!!! note "What is Mode?"
    The **Mode** provides information on what was contained in the last user message. The type is an [Input](../../../test/interaction-panel/input.md) variable that can be one of the following values: *TextOnly or TextData.* (Data only messages have an implicitly defined text that includes `DATA_ONLY_MESSAGE_` followed by a randomly generated string of 20 characters)

### Handover Status

By changing the lookup type to **Handover Status**,
the Flow will select a case that matches the value of `input.handover.status`.
The case values must manually be written for a type of lookup.

You can now receive **Status** and queue update messages from **Genesys Cloud** using the **Handover Status** Node. To learn how to do that, go to [Genesys Status and Bot Messages](../../../escalate/handover-reference/genesys-cloud-open-messaging.md). If you wish to use RingCentral Engage instead, go to [RingCentral Engage](../../../escalate/handover-reference/ring-central-engage.md) for more information.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/lookup-handover-status.png" width="100%" />
  <figcaption>A Handover Status type Lookup Node with 4 cases</figcaption>
</figure>

The table below shows handover statuses that you can select in the Case Node.

| Status    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Restrictions                                                                                                                                                                                                                                                          |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Completed | Conversations are resolved successfully. Agent assistance is provided.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | -                                                                                                                                                                                                                                                                     |
| Cancelled | Conversations are ended by users, indicating termination before resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -                                                                                                                                                                                                                                                                     |
| Error     | Conversations are encountering issues. This issues could be technical, communicative, or related to misinformation. Human agents work to address the issue and guide the conversation back to its intended course.                                                                                                                                                                                                                                                                                                                                           | -                                                                                                                                                                                                                                                                     |
| Events    | Conversations are triggered by specific occurrences significant to the conversation. These could be time-sensitive events, important updates, or prompts that guide the conversation's direction or provide additional context.                                                                                                                                                                                                                                                                                                                              | -                                                                                                                                                                                                                                                                     |
| Active    | Conversations are actively managed by a human agent.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -                                                                                                                                                                                                                                                                     |
| Queue     | Conversations are on hold, awaiting agent assignment. The end user can receive a message if a Say Node is placed under the Case Node. The Say Node should contain the following text:<br/><br><code>Estimated time:  {{"{{input?.handover?.data?.estimatedWaitTime / 1000}}"}} seconds</code><br><code>Position: {{"{{input?.handover?.data?.position}}"}}</code><br> <br> Where `Estimated time` is the approximate duration in seconds that the user must wait for a response from a human agent, and `Position` is the conversation's order in the queue. | The status is applicable only to the [RingCentral Engage](../../../escalate/handover-reference/ring-central-engage.md) provider when the the [Get Queue Updates](../../../escalate/handover-reference/ring-central-engage.md#get-queue-updates) setting is activated. |

### CognigyScript
By changing the lookup type to **CognigyScript**, the Flow will select a case that matches the value of any variable that is entered in the "Operator" field, either by using a *token* or by writing the variable path in *CognigyScript*. This feature makes it possible to change the Flow path based on any variable in the `input`, `context` or `profile`. The case values must manually be written for this type of lookup.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/lookup-cognigy-script.png" width="100%" />
  <figcaption>Setting the Lookup type to CognigyScript</figcaption>
</figure>

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/logic/lookup-cognigy-script-example.png" width="100%" />
  <figcaption>A CognigyScript type Lookup Node with 3 cases based on a profile variable</figcaption>
</figure>

To learn more, read the [CognigyScript](../../cognigy-script.md) page.

### Call Event Status

By changing the lookup type to **Call Event Status**, the Flow will select a case that matches the value of `input.data.event`. The case values must manually be written for this type of lookup.

In the Case Node, you can handle various Voice Gateway events, including Recognized Speech, Recognized DTMF, Call Created, Answering Machine Detection, and more.

More information about these events you can find in the [Voice Gateway Events](../../../../voice-gateway/references/events/overview.md) reference.

## Strict Mode

{% raw %}

By default, the Strict Mode setting is inactive, which lets the Lookup Node accept values of any data type from the Input, Context, or Profile objects.
For instance, if you use CognigyScript to retrieve a value in integer format (for example, `2024`), it will be considered equal to the string format (for example, `"2024"`)
in the **Value** field of the Case Node.

In Strict Mode, value types must be identical.
For example, the integer `2024` and the string `"2024"` will not be considered equal.
This mode is useful when strict type matching is necessary to ensure data is processed correctly.

When Strict Mode is enabled, the value retrieved from the Input, Context, or Profile objects must match the type of the value specified in the Case Node.
To achieve this result, in the **Value** field of the Case Node, convert the string to the required format using JavaScript.
For example, to convert the string `"2024"` to the integer `2024`, use `{{ Number("2024") }}` or CognigyScript to retrieve the value: `{{ Number(input.currentTime.year) }}`.

{% endraw %}