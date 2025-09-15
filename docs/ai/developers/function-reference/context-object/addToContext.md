---
title: "addToContext"
slug: "addToContext"
description: "Adds a value to the Context object."
hidden: false
tags:
   - addToContext
   - context object
---

# addToContext

## Syntax

`addToContext(key, value, mode)`

## Description

Adds a value to the Context object.

**Parameters:**

- `key`: `string` — the key in the Context object where the value should be stored.
- `value`: `unknown` — the value to store.
- `mode`: `"simple" | "array"`:
    - `"simple"` — stores the value directly at the specified key, replacing any existing value.
    - `"array"` — adds the value to an array at the specified key, creating the array if it doesn't exist.

**Returns:** `void`

## Example

??? info "Simple Mode"

    ```js
    // Initial context: {}
    addToContext("user.city", "Berlin", "simple");
    // Context after execution: { user: { city: "Berlin" } }
    // If called again with same key:
    addToContext("user.city", "Munich", "simple");
    // Context after execution: { user: { city: "Munich" } }  // Overwrites previous value
    ```

??? info "Array Mode"

    ```js
    // Initial context: {}
    addToContext("user.purchases", "book", "array");
    // Context after execution: { user: { purchases: ["book"] } }
    
    // Adding more items to the same array:
    addToContext("user.purchases", "laptop", "array");
    addToContext("user.purchases", "coffee", "array");
    // Context after execution: { user: { purchases: ["book", "laptop", "coffee"] } }
    ```