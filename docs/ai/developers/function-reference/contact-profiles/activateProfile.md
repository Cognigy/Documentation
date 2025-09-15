---
title: "activateProfile"
slug: "activate-profile"
description: "activateProfile activates the user's Contact Profile."
hidden: false
tags: 
  - contact profiles
  - activateprofile
---

# activateProfile

## Syntax

`activateProfile()`

## Description

Activates the user's Contact Profile.
Call this function to re-enable read and write operations on a previously deactivated Contact Profile.

**Returns:** `Promise<unknown>`

## Example

```js
// Reactivate a previously deactivated profile
await activateProfile();
```