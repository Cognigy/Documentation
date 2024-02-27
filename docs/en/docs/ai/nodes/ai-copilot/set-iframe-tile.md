---
title: "Copilot: IFrame Tile"
slug: "set-iframe-tile"
hidden: false
---

# Copilot: IFrame Tile

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/set-iframe-tile.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node in Cognigy allows you to embed external websites directly into the AI Copilot Workspace. To do that, specify a URL for the external content you want to display. You can present web pages, forms, or applications within the AI Copilot workspace without redirecting human agents to an external site.

## Settings

| Parameter  | Type          | Description                                              |
|------------|---------------|----------------------------------------------------------|
| Tile ID    | CognigyScript | The ID that you created in the AI Copilot configuration. |
| IFrame URL | URL           | The URL to render inside the Widget.                     |
| JSON Data  | JSON          | The Data to send to the IFrame as a postMessage event.   |

## More Information

- [Copilot: HTML Tile](set-html-tile.md)
- [Copilot: Adaptive Card Tile](set-adaptive-card-tile.md)
- [Copilot: Set Grid](set-grid.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../ai-copilot/overview.md)