---
title: "Identity Assist"
slug: "identity-assist"
hidden: true
---

# Identity Assist

[![Version badge](https://img.shields.io/badge/Added in-v4.60-blue.svg)](../../../release-notes/4.60.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/agent-assist/identity-assist.png" width="100%"/>
</figure>

## Description

This Node is designed to display and process customer-specific information directly within the tile of your Agent Assist Workspace, enhancing the context and usability of the identity-related data.

## Settings

| Parameter     | Type          | Description                                                                                                                                       |
|---------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Tile ID       | CognigyScript | The ID that you created in the Agent Assist configuration.                                                                                        |
| Widget Layout | Select        | The number of user inputs that should be analyzed by a model.                                                                                     |
| Image Shape   | Select        | The shape or format of the image (round or square).                                                                                               |
| Image URL     | URL           | The URL where the image is hosted or located.                                                                                                     |
| Customer Data | CognigyScript | Additional customer-specific data for analysis in a key-value format. For example, the key is `Email` and the value is `{{"{{profile.email}}"}}`. |

## Use Case 

Displaying the user's profile picture adds a human touch to the conversation, making it more engaging and personal.
One way to enhance the conversation further is by showing key customer data,
such as their name, account information, or preferences, directly within the chat conversation.
This allows human agents to have contextually relevant discussions,
which helps in addressing the user's needs more effectively.
Additionally, you can include the [Update Profile](../profile/update-profile.md) Node
within the Agent Assist Workspace Flow to manage the user profile.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/agent-assist/identity-assist-example.png" width="80%"/>
  <figcaption>Identity Assist Tile in Agent Assist Workspace</figcaption>
</figure>

## More information

- [Transcript Assist](transcript-assist.md)
- [Sentiment Assist Node](sentiment-assist.md)
- [Next Action Node](next-action-assist.md)
- [Agent Assist Nodes](overview.md)
- [Agent Assist](../../../agent-assist/overview.md)

