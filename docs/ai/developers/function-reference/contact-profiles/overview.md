---
title: "Overview"
slug: "contact-profiles"
description: "The Contact Profile functions are used to manage a user's Contact Profile. They allow you to activate or deactivate a Contact Profile, update specific fields, and merge one Contact Profile with another. When a Contact Profile is deactivated, no data can be read from or written to it."
hidden: false
tags:
  - contact profiles
  - profile management
  - user profiles
  - update profile
  - activate profile
  - deactivate profile
  - get profile
---

# Contact Profiles

The _Contact Profile_ functions are used to manage a user's [Contact Profile](../../../analyze/contact-profiles.md). They allow you to activate or deactivate a Contact Profile, update specific fields, and merge one Contact Profile with another. When a Contact Profile is deactivated, no data can be read from or written to it.

## [`activateProfile`](activateProfile.md)

**Syntax:** `activateProfile()`

Activates the user's Contact Profile.
Call this function to re-enable read and write operations on a previously deactivated Contact Profile.

## [`deactivateProfile`](deactivateProfile.md)

**Syntax:** `deactivateProfile(deleteData)`

Deactivates the user's Contact Profile. When the Contact Profile is deactivated, no data can be read from or written to the Contact Profile.

## [`updateProfile`](updateProfile.md)

**Syntax**

`updateProfile(key, value)`

Updates a value in the current user's Contact Profile.

## [`mergeProfile`](mergeProfile.md)

**Syntax**

`mergeProfile(contactId)`

Merges the current Contact Profile with another one.