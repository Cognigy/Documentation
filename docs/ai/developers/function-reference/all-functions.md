---
title: "All Functions"
slug: "node-execution-api-function-reference"
description: "The Node Execution API is a toolset for developers to build and control Flows."
hidden: false
tags:
  - node execution api
  - function reference
---

# Node Execution API: All Functions

The _Node Execution API_ is a toolset for developers to build and control Flows. Its functions allow you to:

- **Manage Data**. Control Contact Profiles and use the Context object.
- **Control Flows**. Manage States and set which Nodes to execute.
- **Interact and Monitor**. Send messages to the user, and log or monitor the conversation execution.
- **Run Scripts**. Execute scripts and evaluate conditions within a Flow.

## CognigyScript

The _CognigyScript_ functions are used to execute and evaluate CognigyScript expressions. You can use them to render text that contains CognigyScript or to evaluate a condition to a `true` or `false` value.

### [`parseCognigyScriptText`](cognigyscript/parseCognigyScriptText.md)

**Syntax:** `parseCognigyScriptText(text)`

Renders a text containing CognigyScript expressions.

### [`parseCognigyScriptCondition`](cognigyscript/parseCognigyScriptCondition.md)

**Syntax:** `parseCognigyScriptCondition(condition)`

Evaluates a CognigyScript expression and returns a `true` or `false` value.

## Contact Profiles

The _Contact Profile_ functions are used to manage a user's [Contact Profile](../../analyze/contact-profiles.md). They allow you to activate or deactivate a Contact Profile, update specific fields, and merge one Contact Profile with another. When a Contact Profile is deactivated, no data can be read from or written to it.

### [`activateProfile`](contact-profiles/activateProfile.md)

**Syntax:** `activateProfile()`

Activates a Contact Profile for the user.

### [`deactivateProfile`](contact-profiles/deactivateProfile.md)

**Syntax:** `deactivateProfile(deleteData)`

Deactivates a Contact Profile for the user. When the Contact Profile is deactivated, no data can be read from or written into it.

### [`updateProfile`](contact-profiles/updateProfile.md)

**Syntax:** `updateProfile(key, value)`

Updates a value in the Contact Profile.

### [`mergeProfile`](contact-profiles/mergeProfile.md)

**Syntax:** `mergeProfile(contactId)`

Merges the current Contact Profile with another Contact Profile.

## Context Object

The _Context Object_ functions are used to manage the [Context object](../../build/ai-agent-memory/context.md) of a conversation. You can add, get, remove, or delete data from the Context object, as well as reset it to its default state.

### [`addToContext`](context-object/addToContext.md)

**Syntax:** `addToContext(key, value, mode)`

Adds a value to the Context object.

### [`getContext`](context-object/getContext.md)

**Syntax:** `getContext(key)`

Retrieves the value associated with a given key in the Context object.

### [`deleteContext`](context-object/deleteContext.md)

**Syntax:** `deleteContext(key)`

Removes a value from the Context object.

### [`removeFromContext`](context-object/removeFromContext.md)

**Syntax:** `removeFromContext(key, value, mode)`

Removes data from the Context object: either a key-value entry or a specific value within an array stored under that key.

### [`resetContext`](context-object/resetContext.md)

**Syntax:** `resetContext()`

Resets the current Context to the default Context of the active Flow.

## Execution and Flow Control

The _Execution and Flow Control_ functions let you manage how a Flow runs. You can stop or restart a Flow, track Node executions, run other Flows, and set which Node executes next.

### [`executeFlow`](execution-control/executeFlow.md)

**Syntax:** `executeFlow(config)`

Executes a target Flow starting from a specified Entrypoint Node.

### [`setNextNode`](execution-control/setNextNode.md)

**Syntax:** `setNextNode(nodeId, flowId)`

Sets a custom Node with the given `nodeId` to be executed after the current Node. If the target Node is in a different Flow, the `flowId` parameter is required.

### [`resetNextNodes`](execution-control/resetNextNodes.md)

**Syntax:** `resetNextNodes()`

Removes any `setNextNode` instructions that were previously set.

### [`addConditionalEntrypoint`](execution-control/addConditionalEntrypoint.md)

**Syntax:** `addConditionalEntrypoint(params)`

Adds a conditional entrypoint for the current conversation. Used by the Optional Question Node.

### _(Deprecated)_ [`think`](execution-control/think.md)

**Syntax:** `think(text, data)`

Restarts Flow execution with a simulated input. The function is deprecated since 4.98.0.

### [`thinkV2`](execution-control/thinkV2.md)

**Syntax:** `thinkV2(text, data)`

Restarts Flow execution with a simulated input based on defined text and data.

### [`stopExecution`](execution-control/stopExecution.md)

**Syntax:** `stopExecution()`

Stops processing the current input after this Node.

### [`getExecutionAmount`](execution-control/getExecutionAmount.md)

**Syntax:** `getExecutionAmount(nodeId)`

Retrieves the number of times a Node with the given `nodeId` has been executed during this conversation.

### [`setExecutionAmount`](execution-control/setExecutionAmount.md)

**Syntax:** `setExecutionAmount(nodeId, value)`

Updates the number of executions for a Node with the given `nodeId`. This is useful for tracking how many times a Node has been executed.

### [`resetExecutionAmount`](execution-control/resetExecutionAmount.md)

**Syntax:** `resetExecutionAmount(nodeId)`

Resets the number of executions to 0 for the Node with the given `nodeId`.

## Input and Output

The _Input and Output_ functions handle communication for a conversation.
You can use `say` to send messages to the user and `addToInput` to pass data to the next Node.

### [`say`](input-and-output/say.md)

**Syntax:** `say: TSayFunction`

**Alias:** `output`

Sends a message to the user.

### [`output`](input-and-output/output.md)

**Syntax:** `output: TSayFunction`

**Alias:** `say`

Sends a message to the user.

### [`addToInput`](input-and-output/addToInput.md)

**Syntax:** `addToInput(key, value)`

Writes a value into the Input object for the conversation. This function is useful for passing data to the next Node in the Flow.

## Logging and Monitoring

The _Logging and Monitoring_ functions help you monitor and debug a conversation. They let you log messages and track token usage.

### [`log`](logging/log.md)

**Syntax:** `log(level, message)`

Writes a message into the execution logs.

### [`getLLMTokenUsageForSession`](logging/getLLMTokenUsageForSession.md)

**Syntax:** `getLLMTokenUsageForSession()`

Retrieves the token usage information for the conversation session. Returns `null` if no token usage information is available.

### [`setSensitiveLoggingSettings`](logging/setSensitiveLoggingSettings.md)

**Syntax:** `setSensitiveLoggingSettings(settings)`

Updates the masking redaction settings for the active conversation.

## States

The _States_ functions are used to manage a Flow State. They let you get the current State, update it to a new value, or reset it to its default.

### [`getState`](states/getState.md)

**Syntax:** `getState()`

Returns the current State of the conversation.

### [`setState`](states/setState.md)

**Syntax:** `setState(state)`

Updates the conversation State to a specified State. The State must be one of the States defined in the current Flow via **NLU > States**.

### [`resetState`](states/resetState.md)

**Syntax:** `resetState()`

Resets the conversation State to its default value.

## xApp Functions

The xApp functions are used to manage conversations with xApps. 

### [`setAppState`](xApps/setAppState.md)

**Syntax:** `setAppState(xAppTemplateId, xAppTemplateData)`.

Updates the state of the xApp Session for this conversation.

## Other

These are functions that don't belong to any specific group. They let you evaluate conditions, mark conversation goals as complete, and extract data from user input using regex.

### [`evaluateRule`](other/evaluateRule.md)

**Syntax:** `evaluateRule(rule)`

Evaluates a condition based on a rule configuration that follows the `left`, `operator`, `right` pattern. 
This function works similarly to the If Node. 

### [`completeGoal`](other/completeGoal.md)

**Syntax:** `completeGoal(goal)`

Marks a goal as `completed` for the conversation.

### [`setRegexSlot`](other/setRegexSlot.md)

**Syntax:** `setRegexSlot(params)`

Extracts Slots from user inputs using a regular expression and writes them to `input.slots`. This function is used by the [Regex Slot Filler](../../build/node-reference/ai/regex-slot-filler.md) Node.