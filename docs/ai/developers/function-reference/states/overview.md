---
title: "Overview"
slug: "states"
description: "States functions manage conversation states, allowing you to get, set, or reset the current state."
hidden: false
tags:
    - states
    - states functions
    - conversation management
---

# States

The _States_ functions are used to manage a conversation's State. They let you get the current State, update it to a new value, or reset it to its default.

## [`getState`](getState.md)

**Syntax:** `getState()`

Returns the current State of the conversation.

## [`setState`](setState.md)

**Syntax:** `setState(state)`

Updates the conversation State to a specified State. The State must be one of the States defined in the current Flow via **NLU > States**.

## [`resetState`](resetState.md)

**Syntax:** `resetState()`

Resets the conversation State to its default value.