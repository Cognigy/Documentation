---
title: "Overview"
slug: "execution-and-flow-control"
description: "Execution and Flow Control functions let you manage how a Flow runs. You can stop or restart a Flow, track node executions, run other Flows, and set which Node executes next. ."
hidden: false
tags:
  - execution and flow control
  - node management
  - flow control
  - conversation management
---

# Execution and Flow Control

The _Execution and Flow Control_ functions let you manage how a Flow runs. You can stop or restart a Flow, track node executions, run other Flows, and set which Node executes next.

## [`executeFlow`](executeFlow.md)

**Syntax:** `executeFlow(config)`

Executes a target Flow starting from a specified Entrypoint Node.

## [`setNextNode`](setNextNode.md)

**Syntax:** `setNextNode(nodeId, flowId)`

Sets a custom Node with the given `nodeId` to be executed immediately after the current one.

## [`resetNextNodes`](resetNextNodes.md)

**Syntax:** `resetNextNodes()`

Clears any active overrides for the next Node in the Flow.

## [`addConditionalEntrypoint`](addConditionalEntrypoint.md)

**Syntax:** `addConditionalEntrypoint(params)`

Adds a conditional Entrypoint for the current conversation. This condition is used by the Optional Question Node.

## _(Deprecated)_ [think](think.md)

**Syntax:** `think(text, data)`

Restarts Flow execution with a simulated input.

## [thinkV2](thinkV2.md)

**Syntax:** `thinkV2(text, data)`

Restarts Flow execution with a simulated input using the provided text and data.

## [`stopExecution`](stopExecution.md)

**Syntax:** `stopExecution()`

Stops processing the current input after this Node.

## [`getExecutionAmount`](getExecutionAmount.md)

**Syntax:** `getExecutionAmount(nodeId)`

Retrieves the number of times a Node with the given `nodeId` has been executed during this conversation.

## [`setExecutionAmount`](setExecutionAmount.md)

**Syntax:** `setExecutionAmount(nodeId, value)`

Returns the number of times the Node with the given `nodeId` has been executed in the current conversation.

## [`resetExecutionAmount`](resetExecutionAmount.md)

**Syntax:** `resetExecutionAmount(nodeId)`

Resets the number of executions to 0 for the Node with the given `nodeId`.