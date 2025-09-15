---
title: "deactivateProfile"
slug: "deactivate-profile"
description: "deactivateProfile deactivates the user's Contact Profile."
hidden: false
tags:
  - contact profiles
  - deactivate profile
  - profile management
---

# deactivateProfile

## Syntax
 
`deactivateProfile(deleteData)`

## Description

Deactivates the user's Contact Profile. While the Contact Profile is deactivated, no data can be read from or written to the Contact Profile.

This function can be used to temporarily disable a Contact Profile or to permanently remove data if required.

**Parameters:**

- `deleteData`: `boolean` — if set to `true`, existing data will be erased from the Contact Profile.

**Returns:** `Promise<any>`

## Example

```js
// Temporarily deactivate the Contact Profile without deleting any data
await deactivateProfile(false);

// Deactivate the Contact Profile and permanently delete all associated data
await deactivateProfile(true);
```
