---
title: "Copilot: Adaptive Card Tile"
slug: "set-adaptive-card-tile"
hidden: true
---

# Copilot: Adaptive Card Tile

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/set-adaptive-card-tile.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node allows you to create and display adaptive cards in your AI Copilot Workspace. Adaptive cards can display rich content and interactive elements, such as images, text, buttons, and forms. 

The [Adaptive Card Designer](https://adaptivecards.io/designer) can help you to define an Adaptive Card. Copy the JSON card payload and paste it into the form.

## Settings 

| Parameter          | Type          | Description                                               |
|--------------------|---------------|-----------------------------------------------------------|
| Tile ID            | CognigyScript | The ID that you created in the AI Copilot configuration.  |
| Adaptive Card JSON | HTML          | The Adaptive Card JSON payload to render inside the tile. |
| JSON Data          | JSON          | The Data to send to the IFrame as a postMessage event.    |


## More Information

- [Copilot: HTML file](set-html-tile.md)
- [Copilot: IFrame tile](set-iframe-tile.md)
- [Copilot: Set Grid](set-grid.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../ai-copilot/overview.md)