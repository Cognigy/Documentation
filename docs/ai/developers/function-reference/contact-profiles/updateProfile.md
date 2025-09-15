---
title: "updateProfile"
slug: "updateProfile"
description: "updateProfile updates a value in the current user's Contact Profile."
hidden: false
tags:
  - updateProfile
  - contact profiles
  - profile management
  - user profiles
---

# updateProfile

## Syntax
 
`updateProfile(key, value)`

## Description

Updates a value in the current user's Contact Profile.

**Parameters:**

- `key`: `string` — the ID of the Contact Profile field to update.
- `value`: `unknown` — a new value for the specified Contact Profile field.

**Returns:** `Promise<void>`

## Example

```js
// Update the user's first name
await updateProfile("firstName", "Jane");

// Update a numeric field like age
await updateProfile("age", 30);

// Update a boolean preference
await updateProfile("newsletterSubscribed", true);
```

