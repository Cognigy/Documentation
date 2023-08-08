---
title: "Set Agent Assist Grid"
slug: "set-agent-assist-grid"
hidden: true
---

# Set Agent Assist Grid

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/agent-assist/set-agent-assist-grid.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node updates the existing Agent Assist Workspace grid in the Agent Assist Configuration that you created via an [API POST request](https://api-dev.cognigy.ai/openapi#post-/v2.0/agentassistconfigs). Additionally, you can use this Node to preview the grid before making this request.

Multiple nodes can be utilized within a single Agent Assist Flow, enabling you to modify the grid according to your specific requirements.

## Settings

| Parameter                       | Type | Description                                                                                                                                                          |
|---------------------------------|------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Agent Assist Grid Configuration | JSON | Updates the Agent Assist Workspace grid configuration. By default, there is a grid example in the code editor. You can view a grid with Tile IDs in the Node editor. |

## More information

- [Set HTML file](set-html-file.md)
- [Set Adaptive card tile](set-adaptive-card-tile.md)
- [Set IFrame tile](set-iframe-tile.md)
- [Agent Assist Nodes](overview.md)
- [Agent Assist](../../../agent-assist/overview.md)
