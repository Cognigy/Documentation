---
title: "Copilot: Adaptive Card Tile"
slug: "set-adaptive-card-tile"
hidden: false
---

# Copilot: Adaptive Card Tile

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai-copilot/set-adaptive-card-tile.png" width="80%" />
</figure>

## Description

This Node allows you to create and display adaptive cards in your AI Copilot Workspace. Adaptive cards can display rich content and interactive elements, such as images, text, buttons, and forms. 

The [Adaptive Card Designer](https://adaptivecards.io/designer) can help you to define an Adaptive Card. Copy the JSON card payload and paste it into the form.

Alternatively, you can use Generative AI to create a new adaptive card or improve an existing one. Before using it, ensure that you are connected to one of the [Generative AI providers](../../../empower/generative-ai.md#prerequisites).

1. Open the editor for the **Copilot: Adaptive Card Tile**.
2. On the right side of the **Tile ID** field, click ![the Gen AI Icon](../../../../_assets/icons/beta.svg).
3. In the **Generate Node Output** field, describe to the Generative AI model how to build or improve the current Adaptive Card. For example, type `A profile card with name, address, sentiment, and ticket reference number`.
4. Click **Generate**. The adaptive card will be generated.
5. You can modify and improve the Adaptive Card by giving further instructions in the **Generate Node Output** field. For example, `Add date of last contact`.
6. Click **Generate**. The existing adaptive card will be updated.
7. You can navigate between your inputs using the ![back arrow](../../../../_assets/icons/back-arrow.svg) ![beta](../../../../_assets/icons/next-arrow.svg) icons. 
8. To completely replace the old Adaptive Card, input an appropriate command into the **Generative Node Output** field, for example `Delete everything except name`, or open the JSON editor and delete the relevant rows manually.

<figure>
  <img class="image-center" src="../../../../_assets/ai/build/node-reference/ai-copilot/adaptive-card-genai.png" width="100%" />
</figure>

## Settings 

| Parameter            | Type          | Description                                                       |
|----------------------|---------------|-------------------------------------------------------------------|
| Tile ID              | CognigyScript | The ID that you created in the AI Copilot configuration.          |
| Generate Node Output | Text          | Generates and modifies the Adaptive Card according to user input. |
| Adaptive Card JSON   | HTML          | The Adaptive Card JSON payload to render inside the tile.         |
| JSON Data            | JSON          | The Data to send to the IFrame as a postMessage event.            |


## More Information

- [Copilot: HTML file](set-html-tile.md)
- [Copilot: IFrame tile](set-iframe-tile.md)
- [Copilot: Set Grid](set-grid.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../../ai-copilot/overview.md)