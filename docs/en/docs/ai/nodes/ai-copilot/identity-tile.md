---
title: "Copilot: Identity Tile"
slug: "identity-tile"
hidden: false
---

# Copilot: Identity Tile

[![Version badge](https://img.shields.io/badge/Added in-v4.60-blue.svg)](../../../release-notes/4.60.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/ai-copilot/identity-tile.png" width="80%"/>
</figure>

## Description
<div class="divider"></div>

This Node is designed to display and process customer-specific information directly within the widget of your AI Copilot Workspace, enhancing the context and usability of the identity-related data.

## Settings

| Parameter     | Type          | Description                                                                                                                                       |
|---------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Tile ID       | CognigyScript | The ID that you created in the AI Copilot configuration.                                                                                          |
| Widget Layout | Select        | The layout of how the widget should be placed in the Workspace (horizontal/vertical).                                                             |
| Image Shape   | Select        | The shape or format of the image (round or square).                                                                                               |
| Image URL     | URL           | The URL where the image is hosted or located.                                                                                                     |
| Customer Data | CognigyScript | Additional customer-specific data for analysis in a key-value format. For example, the key is `Email` and the value is `{{"{{profile.email}}"}}`. |

### UI Preferences

| Parameter                 | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|---------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Font size                 | Select | The font size of the tiles in the AI Copilot workspace. The following sizes are available:<br>- **xl** (Extra Small) - the smallest size available.<br>- **sm base** (Small Base) - baseline size for other sizes.<br>- **lg** (Large) - the standard large size, typically larger than the medium or small sizes.<br>- **xl** (Extra Large) - the standard large size.<br>- **2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl** (Larger Sizes) - progressively larger sizes, with `xl` representing extra large and the numbers indicating gradations of that size. |
| Profile font size         | Select | The font size of the profile name in the widget.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Key-value pairs font size | Select | The font size of the key-value pair properties                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Profile image size        | Select | The size of the profile image in the widget.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

## Use Case 

Displaying the user's profile picture adds a human touch to the conversation, making it more engaging and personal.
One way to enhance the conversation further is by showing key customer data,
such as their name, account information, or preferences, directly within the chat conversation.
This allows human agents to have contextually relevant discussions without the need to search for customer data in multiple tools.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nodes/images/ai-copilot/identity-assist-example.png" width="80%"/>
  <figcaption>The Identity Tile Widget in AI Copilot</figcaption>
</figure>

## More Information

- [Copilot: Transcript Tile](transcript-tile.md)
- [Copilot: Sentiment Tile Node](sentiment-tile.md)
- [Copilot: Next Action Tile Node](next-action-tile.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../ai-copilot/overview.md)