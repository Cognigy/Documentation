---
title: "Copilot: Knowledge Tile"
slug: "knowledge-tile"
hidden: false
---

# Copilot: Knowledge Tile

[![Version badge](https://img.shields.io/badge/Added in-v4.65-blue.svg)](../../../release-notes/4.65.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/knowledge-tile.png" width="80%"/>
</figure>

## Description

This Node is designed to provide potential answers to customer questions
using responses based on the Large Language Model through Cognigy Knowledge AI.
It will also offer article previews, source links, and disclaimers.

Before using this Node, set the Generative AI provider in the [Settings](../../generative-ai.md#set-up-generative-ai) and select the appropriate model in the [supported model list](../../resources/build/llm.md#supported-models).

To configure, you need two Nodes, one of which initiates the knowledge search process, and the second one executes it. Also, to prevent the content of other widgets from updating during the node's operation, you need to move the nodes under the child node IF.


## Settings

| Parameter | Type          | Description                                                                                                               |
|-----------|---------------|---------------------------------------------------------------------------------------------------------------------------|
| Tile ID   | CognigyScript | The ID that you created in the AI Copilot configuration.                                                                  |

## Use Case

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/knowledge-tile-example.png" width="80%"/>
  <figcaption>The Knowledge Tile Widget in AI Copilot</figcaption>
</figure>

## More Information

- [Copilot: Transcript Tile](transcript-tile.md)
- [Copilot: Sentiment Tile Node](sentiment-tile.md)
- [Copilot: Identity Tile](identity-tile.md)
- [AI Copilot Nodes](overview.md)
- [AI Copilot](../../../ai-copilot/overview.md)