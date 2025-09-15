---
title: "getExecutionAmount"
slug: "getExecutionAmount"
description: ""
hidden: false
tags:
  - execution control
  - getExecutionAmount
  - node execution count
---

# getExecutionAmount

## Syntax

`getExecutionAmount(nodeId)`

## Description

Returns the number of times the Node with the given `nodeId` has been executed in the current conversation.

**Parameters:**

- `nodeId`: `string` - the Node ID.

**Returns:** `number` - the number of executions.

## Example

```js
// Suppose you want to check if a specific Node with nodeId "c4c5c267-55d8-44ae-a123-f351d237f496" has been executed more than 3 times:
const executions = getExecutionAmount("node-1234");

if (executions > 3) {
  say("You've triggered this step several times already.");
}
```


