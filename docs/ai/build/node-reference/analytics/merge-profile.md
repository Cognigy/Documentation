---
title: "Merge Profile" 
slug: "merge-profile" 
hidden: false 
---

# Merge Profile

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/analytics/merge-profile.png" width="80%" />
</figure>

## Description

The Merge Profile Node is used to merge the profile of the contact who hits the node with another contact profile. This is useful in an omnichannel environment, where a contact can talk to your Flow on different platforms, but wants to be recognized as the same person on all platforms.

## Settings

| Parameter | Type          | Description                                                                        |
|-----------|---------------|------------------------------------------------------------------------------------|
| ContactId | CognigyScript | The id of the contact you want to merge with the current contact who hit the Node. |

## Example

Let's say a user is logged in on your website and using the webchat there. They will thereby have a contact profile where the userId equals their ID on your website. If you want to link their website ID to, for example, their account on Amazon, so they have the same **Contact Profile** when interacting with your flow through an Alexa device, you only need to obtain their Amazon userId through account linking and provide that ID to the Merge Profile Node. After this, the contact will have one profile activated when they engage with your Flow through both the webchat and their Alexa device.