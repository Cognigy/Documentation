---
title: "removeFromContext"
slug: "removeFromContext"
description: "removeFromContext removes data from the Context object: either a key-value entry or a specific value within an array stored under that key."
hidden: false
tags:
  - removeFromContext
  - context object
---

# removeFromContext

## Syntax

`removeFromContext(key, value, mode)`

## Description

Removes data from the Context object: either a key-value entry or a specific value within an array stored under that key.

**Parameters:**

- `key`: `string` — the key in the Context object.
- `value`: `string` — the value to remove if the mode is set to `"array"`.
- `mode`: `"simple" | "array"`:
    - `"simple"` — deletes a key-value entry.
    - `"array"` — removes a value from the array.

**Returns:** `void`

## Example

```js
// Delete a key-value entry
removeFromContext("user.city", "", "simple");

// Remove a specific value from an array
removeFromContext("user.purchases", "book", "array");
```