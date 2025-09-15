---
title: "resetNextNodes"
slug: "resetNextNodes"
description: "resetNextNodes clears any active overrides for the next Node in the conversation flow."
hidden: false
tags:
  - execution control
  - resetNextNodes
  - flow override
---

# resetNextNodes

## Syntax

`resetNextNodes()`

## Description

Clears any active overrides for the next Node in the Flow.  

This function is useful when you've changed the next Node using a `setNextNode` function, and you want to return to the default Flow behavior.

**Returns:** `void`

## Example

```js
// Imagine you previously used setNextNode("fallback-node") to redirect the Flow.
// Now, you want to clear that override so the Flow continues as originally defined.

resetNextNodes();
```