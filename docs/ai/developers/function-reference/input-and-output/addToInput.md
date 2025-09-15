---
title: "addToInput"
slug: "add-to-input"
description: "addToInput writes a value into the Input object for this execution."
hidden: false
tags:
  - input and output
  - addToInput
  - input
---

# addToInput

## Syntax

`addToInput(key, value)`

## Description

Writes a value into the Input object for the execution.
This function allows you to store data in the Input object, which can be accessed later in the execution context.

**Parameters:**

- **key** — the key in the Input object.
- **value** — the value to store.

**Returns:** `void`

## Example

```js
// Add a user's preferred language to the Input object
addToInput("userLanguage", "en-US");

// Later in the Flow, you can access input.userLanguage
console.log(input.userLanguage); // Output: "en-US"
```
