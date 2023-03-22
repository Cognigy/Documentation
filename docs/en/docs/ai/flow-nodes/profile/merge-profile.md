---
 title: "Merge Profile" 
 slug: "merge-profile" 
 hidden: false 
---
# Merge Profile

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/fc6e1af-profile-merge.jpg" width="100%" />
</figure>

## Description
<div class="divider"></div>
The Merge Profile Node is used to merge the profile of the contact who hits the node with another contact profile. This is useful in an omnichannel environment, where a contact can talk to your Flow on different platforms, but wants to be recognized as the same person on all platforms.

| Parameter | Type          | Description                                                                        |
|-----------|---------------|------------------------------------------------------------------------------------|
| ContactId | CognigyScript | The id of the contact you want to merge with the current contact who hit the Node. |

???+ info "Example"
    Let's say a user is logged in on your website and using the webchat you have there. They will thereby have a contact profile where the userId is equal to their ID on your website. If you then want to link their website ID to e.g. their account on Amazon, so that they will have the same **Contact Profile** when they talk to your flow through an Alexa device, you just have to obtain their Amazon userId through account linking and give that ID to the Merge Profile Node. After this, the contact will have one profile that is activated when they talk with your Flow through the webchat and through their Alexa device.