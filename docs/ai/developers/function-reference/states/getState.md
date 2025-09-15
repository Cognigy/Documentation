---
title: "getState"
slug: "get-state"
description: "getState returns the current state of the conversation."
hidden: false
tags:
  - states
  - getstate
---

# `getState`

## Syntax

`getState()`

## Description

Returns the current State of the conversation.

**Returns:** `string` — the current State.

## Example

```js
// Get the current conversation state
const currentState = getState();
console.log(`Current state is: ${currentState}`);
```