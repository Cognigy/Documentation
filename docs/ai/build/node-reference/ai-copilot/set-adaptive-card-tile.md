---
title: "Copilot: Adaptive Card Tile"
slug: "set-adaptive-card-tile"
hidden: false
---

# Copilot: Adaptive Card Tile

[![Version badge](https://img.shields.io/badge/Added in-v4.79-blue.svg)](../../../../release-notes/4.79.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai-copilot/set-adaptive-card-tile.png" width="50%" />
</figure>

## Description

This Node allows you to create and display adaptive cards in your Agent Copilot workspace. Adaptive cards can display rich content and interactive elements, such as images, text, buttons, and forms. 

The [Adaptive Card Designer](https://adaptivecards.io/designer) can help you to define an Adaptive Card. Copy the JSON card payload and paste it into the form. Alternatively, you can use Generative AI to create a new adaptive card or improve an existing one.

## Parameters 

| Parameter            | Type          | Description                                                                                        |
|----------------------|---------------|----------------------------------------------------------------------------------------------------|
| Tile ID              | CognigyScript | The ID that you created in the Agent Copilot configuration.                                        |
| Generate Node Output | Text          | A prompt or instruction for generating the adaptive card. To apply the prompt, click **Generate**. |
| Adaptive Card JSON   | JSON          | The JSON payload to render inside the tile. Supported schema version: `1.5` or earlier.            |


??? info "Create an Adaptive Card with Generative AI"

    Before creating an Adaptive Card with Generative AI, ensure that you are connected to one of the [LLM Providers](../../../empower/generative-ai.md#prerequisites).

    To use this feature, follow these steps:

{! _includes/ai/nodes/adaptive-card-genai.md !}

    <figure>
      <img class="image-center" src="../../../../../_assets/ai/build/node-reference/ai-copilot/adaptive-card-generative-ai.png" width="100%" />
    </figure>

## More Information

- [Copilot: HTML Tile](set-html-tile.md)
- [Copilot: IFrame tile](set-iframe-tile.md)
- [Copilot: Set Grid](set-grid.md)
- [Agent Copilot Nodes](overview.md)
- [Agent Copilot](../../../../ai-copilot/overview.md)