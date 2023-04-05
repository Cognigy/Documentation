---
title: "Set IFrame Tile"
slug: "set-iframe-tile"
hidden: true
---

# Set IFrame Tile

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/agent-assist/set-iframe-title.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node in Cognigy allows you to embed external websites directly into the Agent Assist workspace. To do that, specify a URL for the external content you want to display.  You can present web pages, forms, or applications within the Agent Assist workspace without redirecting human agents to an external site.

| Parameter  | Type          | Description                                                                                                                                |
|------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| Tile ID    | CognigyScript | The ID that you recently created in the Agent Assist Configuration. Set the ID as a reference to the transcript in the same configuration. |
| IFrame URL | URL           | The URL to render inside the IFrame.                                                                                                       |
| JSON Data  | JSON          | The Data to send to the IFrame as a postMessage event.                                                                                     |

