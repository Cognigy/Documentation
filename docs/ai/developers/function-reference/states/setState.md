---
title: "setState"
slug: "set-state"
description: "setState updates the conversation State to a specified State."
hidden: false
tags:
  - states functions
  - setState
---

# setState

## Syntax

`setState(state)`

## Description

Updates the conversation State to a specified State. The State must be one of the States defined in the current Flow via **NLU > States**.

**Parameters:**

- `state`: `string` — one of the available States for the current Flow.

**Returns:** `void`

## Example

```js
setState("collecting_name");
// User provides a name

setState("collecting_email");
// User provides an email

setState("validating_info");
thinkV2("Let me validate your information", {
  name: "John Doe",
  email: "john@example.com",
  timestamp: new Date().toISOString()
});

setState("registration_complete");
```
