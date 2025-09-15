---
title: "resetState"
slug: "reset-state"
description: "resetState resets the conversation State to its default value."
hidden: false
tags:
  - states
  - resetState
---

# resetState

## Syntax
 
`resetState()`

## Description

Resets the conversation State to its default value.

**Returns:** `Promise<string>` — a promise resolving the name of the default State.

## Example

```js
// Reset the conversation state to the default state
resetState().then((defaultState) => {
  console.log(`Conversation state has been reset to: ${defaultState}`);
});
```