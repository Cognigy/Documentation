---
title: "Copilot: Knowledge Tile Node"
slug: "knowledge-tile"
description: "The Copilot: Knowledge Tile Node is an AI Copilot Node that uses Knowledge AI to provide human agents with accurate information about customer questions."
hidden: false
tags: ['Knowledge Tile', 'Knowledge Search', 'Customer Support', 'Knowledge Retrieval', 'Agent Assistance', 'Knowledge Management']
---

# Copilot: Knowledge Tile Node

[![Version badge](https://img.shields.io/badge/Added in-v4.72-blue.svg)](../../../../release-notes/4.72.md)

The _Copilot: Knowledge Tile Node_ is an [AI Copilot Node](../../../build/node-reference/ai-copilot/overview.md) that uses [Knowledge AI](../../knowledge-ai/overview.md) to provide human agents with accurate information about customer questions.

## Key Features

- The Copilot: Knowledge Tile adds an [AI Copilot widget](../../../../ai-copilot/plug-and-play-widgets.md) in which human agents can use a search bar to access [Knowledge Sources](../knowledge-source/knowledge-source.md) and find information to answer questions from customers.
- With the [Copilot: Knowledge Tile Node](../../../build/node-reference/ai-copilot/knowledge-tile.md), you can use the [Search Extract Output Node](../knowledge-search-and-extraction/search-extract-output.md) to retrieve context-aware information, along with additional materials such as references and videos, with [Source metadata](../knowledge-source/knowledge-source.md#source-metadata) and [Chunk metadata](../knowledge-chunk/knowledge-chunk.md).

## Prerequisites

- You have installed [AI Copilot](../../../../ai-copilot/getting-started.md).
- You have added a [Large Language Model (LLM) to your Project](../../llms/providers/all-providers.md) that supports [Knowledge Search and Answer Extracting](../../llms/model-support-by-feature.md).
- You have created [Knowledge Sources](../knowledge-source/knowledge-source.md).

## Set Up the Copilot: Knowledge Tile

To set up the Copilot: Knowledge Tile, select the Flow where you configured AI Copilot in **Build > Flows** and add the following Nodes in the Flow editor:

- [If Node](#if-node) — separates the Copilot: Knowledge Tile Node from other AI Copilot Nodes. This separation prevents the content of other widgets from updating while the AI Agent uses Copilot: Knowledge Tile Node.
- [First Copilot: Knowledge Tile Node](#first-copilot-knowledge-tile-node) — starts the knowledge retrieval.
- [Once Node](#once-node) — guarantees that the Flow executes the Copilot: Knowledge Tile Node once.
- [Second Copilot: Knowledge Tile Node](#second-copilot-knowledge-tile-node) — a duplicate of the first Copilot: Knowledge Tile Node that executes the knowledge retrieval.

### If Node

1. Click **+** under **Start** and add an [If Node](../../../build/node-reference/logic/if.md).
2. In the **Condition** field, enter `input.data._cognigy._agentAssist.payload.tileId === TILE_ID`, where `TILE_ID` is the Tile ID you created in the [AI Copilot configuration](../../../../ai-copilot/getting-started.md).
3. Move other AI Copilot Tile Nodes after the **Else** Child Node.

### First Copilot: Knowledge Tile Node

1. After the **Then** Child Node of the If Node, add the first Copilot: Knowledge Tile Node.
2. Configure the following fields:
    - **Tile ID** — enter the Tile ID you created in the [AI Copilot configuration](../../../../ai-copilot/getting-started.md).
    - **Knowledge Source** — select the Knowledge Source from which you want to retrieve information.

### Once Node

1. Add a [Once Node](../../../build/node-reference/logic/once.md) after the If Node.

### Second Copilot: Knowledge Tile Node

To copy the first Copilot: Knowledge Tile Node and paste it after the **On First Time** Child Node, do the following:

1. Click the first Copilot: Knowledge Tile Node and press **Cmd + C** or **Ctrl + C**.
2. Click the **On First Time** Child Node and press **Cmd + V** or **Ctrl + V**.

For more detailed information about the Copilot: Knowledge Tile Node, read the [Copilot: Knowledge Tile Node reference](../../../build/node-reference/ai-copilot/knowledge-tile.md).

## More Information

- [Getting Started with AI Copilot](../../../../ai-copilot/getting-started.md)
- [Knowledge Sources](../knowledge-source/knowledge-source.md)
- [AI Copilot Nodes](../../../build/node-reference/ai-copilot/overview.md)
- [If Node](../../../build/node-reference/logic/if.md)
- [Copilot: Knowledge Tile Node](../../../build/node-reference/ai-copilot/knowledge-tile.md)