---
title: "Copilot: Set Grid"
slug: "set-grid"
hidden: false
---

# Copilot: Set Grid

[![Version badge](https://img.shields.io/badge/Added in-v4.69-blue.svg)](../../../release-notes/4.69.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/set-grid.png" width="80%" />
</figure>

## Description
<div class="divider"></div>

This Node updates the existing AI Copilot workspace grid in the AI Copilot Configuration that you created via an [API POST request](https://api-dev.cognigy.ai/openapi#post-/v2.0/agentassistconfigs). Additionally, you can use this Node to preview the grid before making this request.

Multiple nodes can be utilized within a single AI Copilot Flow, enabling you to modify the grid according to your specific requirements.

## Settings

| Parameter                  | Type          | Description                                                                                                                                                                                                                                                                                                               |
|----------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Copilot Grid Configuration | JSON          | Updates the AI Copilot workspace grid configuration. By default, there is a grid example in the code editor. You can view a grid with Tile IDs in the Node editor.                                                                                                                                                        |
| Background Selector        | Select        | Customizes the background color of the AI Copilot workspace. You can select one of the following options:<br> - **Default** — the default white colour.<br> - **Solid Background Color** — specify the color in RGB or Hex format.<br> - **Custom Image** — specify an image url.                                         |
| Color (RGB/Hex)            | CognigyScript | This field appears if the **Solid Background Color** option is selected.<br><br>Enter the color in one of the following formats:<br> - **RGB**. For example, green can be represented as `rgb(34, 85, 85)`. <br> - **Hex**. For example, red can be represented as `#FF3333`. The color will be rendered under the field. |
| Image URL                  | CognigyScript | This field appears if the **Custom Image** option is selected.<br><br>Provide the image URL for your custom background. The image will be rendered under the field.                                                                                                                                                       |

## More Information

- [Set HTML file](set-html-tile.md)
- [Set Adaptive card tile](set-adaptive-card-tile.md)
- [Set IFrame tile](set-iframe-tile.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../ai-copilot/overview.md)
