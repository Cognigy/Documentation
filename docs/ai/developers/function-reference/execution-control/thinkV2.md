---
title: "thinkV2"
slug: "thinkV2"
description: "Restarts Flow execution with a simulated input using defined text and data."
hidden: false
tags:
- thinkv2
- execution control
- input simulation
- flow execution restart
---

# `thinkV2`

## Syntax

`thinkV2(text, data)`

## Description

Restarts Flow execution with a simulated input using the provided text and data.

**Parameters:**

- `text`: `string` — simulated input text.
- `data`: `Record<string, unknown>` — simulated input data.

**Returns:** `void`

## Example

```js
thinkV2("Check order status", {
  orderId: "A12345",
  customerType: "premium"
});
```