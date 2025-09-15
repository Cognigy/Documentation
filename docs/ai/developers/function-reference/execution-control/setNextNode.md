---
title: "setNextNode"
slug: "setNextNode"
description: "setNextNode sets a custom Node to be executed next in the Flow."
hidden: false
tags:
  - execution control
  - setNextNode
  - node execution
---

# setNextNode

## Syntax

`setNextNode(nodeId, flowId)`

## Description

Sets a custom Node with the given `nodeId` to be executed immediately after the current one.  
This function is used by If and Lookup Nodes to select child Nodes based on their configuration.

Call `setNextNode(childNodeId)` before returning to continue execution at that child Node.
The target Node must be available as an Entrypoint in the Flow.

**Parameters:**

- `nodeId`: `string` — the Node ID.
- `flowId`: `string` — the ID of the Flow containing the target Node. This parameter is optional and required if the target Node is in a different Flow.

**Returns:** `void`

## Example

```js
// The current Node is executing inside a Flow, and you want to control which Node should be executed next based on some logic.
// In this example, the execution will jump to a Node the nodeId "c4c5c267-55d8-44ae-a123-f351d237f496" immediately after the current Node finishes.

setNextNode("c4c5c267-55d8-44ae-a123-f351d237f496");

// To continue the conversation in a different Flow after the current Node, specify both the target nodeId and the flowId.
// The Node with nodeId "c4c5c267-55d8-44ae-a123-f351d237f496" must be marked as an Entrypoint in the target Flow with flowId "67f511b11acdc139f91946b8".
// Execution will jump directly to that Node after the current one finishes.

setNextNode("c4c5c267-55d8-44ae-a123-f351d237f496", "67f511b11acdc139f91946b8");
```
