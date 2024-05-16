---
title: "Update Profile" 
slug: "update-profile" 
hidden: false 
---

# Update Profile

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/profile/update-profile.png" width="80%" />
</figure>

## Description

The Update Profile Node is used to update the users' Contact Profile.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/18cbc8a-update-profile.jpg" width="100%" />
</figure>

The available `Key` options are all defined fields in the Profile Schema of this Project.

If the key used is an invalid value, it will not perform any function.
For a list of default profile property keys,
see the [Contact Profiles](../../../analyze/contact-profiles.md) page.

## Settings

| Parameter | Type          | Description                                          |
|-----------|---------------|------------------------------------------------------|
| Key       | select        | Which field in the user's Contact Profile to update. |
| Value     | CognigyScript | The value you want to set.                           |