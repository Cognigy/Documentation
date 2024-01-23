---
title: "Copilot: Set Grid"
slug: "set-grid"
hidden: false
---

# Copilot: Set Grid

[![Version badge](https://img.shields.io/badge/Added in-v4.57-blue.svg)](../../../release-notes/4.57.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/set-grid.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node updates the existing AI Copilot Workspace grid in the AI Copilot Configuration that you created via an [API POST request](https://api-dev.cognigy.ai/openapi#post-/v2.0/agentassistconfigs). Additionally, you can use this Node to preview the grid before making this request.

Multiple nodes can be utilized within a single AI Copilot Flow, enabling you to modify the grid according to your specific requirements.

## Settings

| Parameter                  | Type | Description                                                                                                                                                        |
|----------------------------|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Copilot Grid Configuration | JSON | Updates the AI Copilot Workspace grid configuration. By default, there is a grid example in the code editor. You can view a grid with Tile IDs in the Node editor. |

## More Information

- [Set HTML file](set-html-tile.md)
- [Set Adaptive card tile](set-adaptive-card-tile.md)
- [Set IFrame tile](set-iframe-tile.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../ai-copilot/overview.md)
