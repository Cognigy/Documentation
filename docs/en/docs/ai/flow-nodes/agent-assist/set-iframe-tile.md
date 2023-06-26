---
title: "Set IFrame Tile"
slug: "set-iframe-tile"
hidden: true
---

# Set IFrame Tile

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/agent-assist/set-iframe-tile.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node in Cognigy allows you to embed external websites directly into the Agent Assist Workspace. To do that, specify a URL for the external content you want to display.  You can present web pages, forms, or applications within the Agent Assist workspace without redirecting human agents to an external site.

| Parameter  | Type          | Description                                                                                                                                                                                           |
|------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tile ID    | CognigyScript | The ID that you created in the Agent Assist configuration. If the Tile ID has not been created in the Agent Assist configuration, you will see a relevant tip in the Agent Assist Workspace instance. |
| IFrame URL | URL           | The URL to render inside the Widget.                                                                                                                                                                  |
| JSON Data  | JSON          | The Data to send to the IFrame as a postMessage event.                                                                                                                                                |

## More information

- [Set HTML file](set-html-file.md)
- [Set Adaptive card tile](set-adaptive-card-tile.md)
- [Agent Assist Nodes](overview.md)
- [Agent Assist](../../../agent-assist/overview.md)