---
title: "Overview"
slug: "context-object"
description: "The Context Object functions are used to manage the Context object of a conversation. You can add, get, remove, or delete data from the Context object, as well as reset it to its default state."
hidden: false
tags:
  - context object
  - conversation context
  - getContext
  - setContext
  - deleteContext
  - resetContext
  - removeFromContext
---

# Context Object

The _Context Object_ functions are used to manage the [Context object](../../../build/ai-agent-memory/context.md) of a conversation. You can add, get, remove, or delete data from the Context object, as well as reset it to its default state.

## [`addToContext`](addToContext.md)

**Syntax:** `addToContext(key, value)`

Adds a value to the Context object.

## [`getContext`](getContext.md)

**Syntax:** `getContext(key)`

Retrieves the value associated with a given key in the Context object.

## [`deleteContext`](deleteContext.md)

**Syntax:** `deleteContext(key)`

Removes a value from the Context object.

## [`removeFromContext`](removeFromContext.md)

**Syntax:** `removeFromContext(key, value, mode)`

Removes data from the Context object: either a key-value entry or a specific value within an array stored under that key.

## [`resetContext`](resetContext.md)

**Syntax:** `resetContext()`

Resets the Context object to the default Context of the active Flow. This action removes all custom keys and values that were added during the conversation.
