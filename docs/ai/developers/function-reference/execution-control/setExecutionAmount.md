---
title: "setExecutionAmount"
slug: "setExecutionAmount"
description: "setExecutionAmount updates the execution count for a Node with a specified `nodeId`."
hidden: false
tags:
  - execution control
  - setExecutionAmount
  - node execution count update
---

# setExecutionAmount

## Syntax

`setExecutionAmount(nodeId, value)`

## Description

Updates the execution count for a Node with the given `nodeId`.

**Parameters:**

- `nodeId`: `string` — the Node ID.
- `value`: `number` — the new execution count to set.

**Returns:** `void`

## Example

```js
// Set the execution count to 5 for the Node with the nodeId "c4c5c267-55d8-44ae-a123-f351d237f496"
setExecutionAmount("c4c5c267-55d8-44ae-a123-f351d237f496", 5);
```