---
title: "getContext"
slug: "getContext"
description: "getContext retrieves the value associated with a given key in the Context object."
hidden: false
tags:
  - getContext
  - context object
---

# getContext

## Syntax

`getContext(key)`

## Description

Retrieves the value associated with a given key in the Context object.

**Parameters:**

- `key`: `string` — the key in the Context object from which the value should be retrieved.

**Returns:** `unknown` — the value stored at the specified key in the Context object, or `undefined` if the key doesn't exist.

## Example

```js
const userName = getContext("user.profile.name");
log(`User name is: ${userName}`);
```