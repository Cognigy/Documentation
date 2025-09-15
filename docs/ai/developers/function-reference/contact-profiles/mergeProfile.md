---
title: "mergeProfile"
slug: "mergeProfile"
description: "mergeProfile merges the current Contact Profile with another one."
hidden: false
tags:
  - mergeProfile
  - contact profiles
  - profile management
---

# mergeProfile

## Syntax

`mergeProfile(contactId)`

## Description

Merges the current Contact Profile with another one.
This function is useful for combining duplicate Contact Profiles or moving data between users.

**Parameters:**

- `contactId`: `string` — the ID of the Contact Profile to merge into.

**Returns:** `Promise<unknown>`

## Example

```js
await mergeProfile("c-89374201a7bd5a9e4");
```