---
title: "Set Adaptive Card Tile"
slug: "set-adaptive-card-tile"
hidden: true
---

# Set Adaptive Card Tile

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/agent-assist/set-adaptive-card-tile.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node allows you to create and display adaptive cards in your Agent Assist Workspace. Adaptive cards can display rich content and interactive elements, such as images, text, buttons, and forms. 

The [Adaptive Card Designer](https://adaptivecards.io/designer) can help you to define an Adaptive Card. Copy the JSON card payload and paste it into the form.

| Parameter          | Type          | Description                                                                                                                                |
|--------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| Tile ID            | CognigyScript | The ID that you  created in the Agent Assist Configuration.  |
| Adaptive Card JSON | HTML          | The Adaptive Card JSON payload to render inside the tile.                                                                                          |
| JSON Data          | JSON          | The Data to send to the IFrame as a postMessage event.                                                                                     |


## More information

- [Set HTML file](set-html-file.md)
- [Set IFrame tile](set-iframe-tile.md)
- [Agent Assist Nodes](overview.md)
- [Agent Assist](../../../agent-assist/overview.md)