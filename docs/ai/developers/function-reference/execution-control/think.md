---
title: "think (Deprecated)"
slug: "think"
description: "think restarts Flow execution with a simulated input."
hidden: false
tags:
  - execution control
  - think
  - deprecated
  - input simulation
---

# think

!!! warning 
    The `think` function is deprecated. Use `thinkV2` instead.

## Syntax

`think(text, data)`

## Description

Restarts Flow execution with a simulated input.  

**Parameters:**

- `text`: `string` — simulated input text.
- `data`: `Record<string, unknown>` — simulated input data.

**Returns:** `void`

## Example

```js
think("I want to book a flight", {
  userLocation: "Berlin",
  destination: "Paris"
});
```