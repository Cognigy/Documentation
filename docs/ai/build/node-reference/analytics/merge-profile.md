---
title: "Merge Profile" 
slug: "merge-profile" 
hidden: false 
---

# Merge Profile

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/analytics/merge-profile.png" width="50%" />
</figure>

## Description

The Merge Profile Node merges the profile of the contact who hits the Node with another Contact Profile. This is useful in an omnichannel environment, where a contact can talk to your Flow on different platforms, but needs to be recognized as the same person on all platforms.

## Parameters

| Parameter | Type          | Description                                                                        |
|-----------|---------------|------------------------------------------------------------------------------------|
| ContactId | CognigyScript | The ID of the contact you want to merge with the current contact who hit the Node. |

## Example

A user is logged in on your website and using the webchat. They have a Contact Profile where the user ID corresponds to their ID on your website. You can link their website ID to, for example, their account on Amazon. With this approach, they have the same Contact Profile when interacting with your Flow through an Alexa device. To link their data to the same Contact Profile, you only need to obtain their Amazon user ID through account linking and provide that ID to the Merge Profile Node. After this, the contact has one profile activated when they engage with your Flow through both the webchat and their Alexa device.