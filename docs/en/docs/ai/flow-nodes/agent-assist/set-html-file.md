---
title: "Set HTML Tile"
slug: "set-html-tile"
hidden: true
---

# Set HTML Tile

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/agent-assist/set-html-tile.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node allows you to display customized HTML content in the Agent Assist Workspace. You can create custom layouts and designs for presenting information to a human agent. HTML content can include text, images, videos, and links. The Set HTML Tile Node is useful for displaying complex information or interactive elements such as forms or surveys.

| Parameter    | Type          | Description                                                                                                                                |
|--------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| Tile ID      | CognigyScript | The ID that you  created in the Agent Assist Configuration. Set the ID as a reference to the transcript in the same configuration. |
| HTML Content | HTML          | The HTML content to render inside the Widget.                                                                                              |
| JSON Data    | JSON          | The Data to send to the IFrame as a postMessage event.                                                                                     |

## More information

- [Set Adaptive card tile](set-adaptive-card-tile.md)
- [Set IFrame tile](set-iframe-tile.md)
- [Agent Assist Nodes](overview.md)
- [Agent Assist](../../../agent-assist/overview.md)