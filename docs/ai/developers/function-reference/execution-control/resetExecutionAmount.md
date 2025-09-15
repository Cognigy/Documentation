---
title: "resetExecutionAmount"
slug: "resetExecutionAmount"
description: "resetExecutionAmount resets the number of executions to 0 for the Node with the given nodeId."
hidden: false
tags:
  - execution control
  - resetExecutionAmount
  - node execution count reset
---

# resetExecutionAmount

## Syntax
 
`resetExecutionAmount(nodeId)`

## Description

Resets the number of executions to 0 for the Node with the given `nodeId`.

**Parameters:**

- `nodeId`: `string` — the Node ID.

**Returns:** `void`

## Example

```js
// Suppose you have a node with the nodeId "c4c5c267-55d8-44ae-a123-f351d237f496" that should only execute once per session.
// Under certain conditions, for example, the user wants to retry, you can reset its execution count like this:

resetExecutionAmount("c4c5c267-55d8-44ae-a123-f351d237f496");
```