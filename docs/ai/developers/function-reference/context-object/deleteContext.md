---
title: "deleteContext"
slug: "deleteContext"
description: "deleteContext removes a value from the Context object."
hidden: false
tags:
  - deleteContext
  - context object
---

# deleteContext

## Syntax

`deleteContext(key)`

## Description

Removes a value from the Context object.

**Parameters:**

- `key`: `string` — the key in the context where the value should be removed.

**Returns:** `void`

## Example

```js
// Example usage
deleteContext("user.location");
```