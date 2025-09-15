---
title: "resetContext"
slug: "resetContext"
description: "resetContext resets the conversation context to the default context of the active Flow."
hidden: false
tags:
  - resetContext
  - context object
  - conversation context
---

# resetContext

## Syntax

`resetContext()`

## Description

Resets the Context object to the default Context of the active Flow. This action removes all custom keys and values that were added during the conversation.

**Returns:** `void`

## Example

```js
// Clear all current context data and reset to default context
resetContext();
```