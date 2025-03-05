---
title: "Knowledge Store"
slug: "knowledge-store"
descriptions: A Knowledge Store provides a centralized and structured environment for managing and categorizing Knowledge Sources. Knowledge Stores help streamline the knowledge management process by grouping related Knowledge Sources, making it easier to search and retrieve relevant information during Run-time.
hidden: false
tags: ['Knowledge Store', 'Knowledge Management', 'Knowledge Sources', 'Information Retrieval', 'Knowledge Organization']
---

# Knowledge Store

A _Knowledge Store_ provides a centralized and structured environment for managing and categorizing [Knowledge Sources](knowledge-source/knowledge-source.md). Knowledge Stores help streamline the knowledge management process by grouping related Knowledge Sources, making it easier to search and retrieve relevant information during Run-time. You can select Knowledge Stores in [Search Extract Output Nodes](../../build/node-reference/other-nodes/search-extract-output.md) to retrieve information from Knowledge Sources for your AI Agents.

## Prerequisites

- You have added a [Large Language Model (LLM) to your Project](../llms/providers/all-providers.md) that [supports Knowledge Search](../../empower/llms/model-support-by-feature.md).

## Restrictions

- For versions 4.77 and earlier, you can create up to ten Knowledge Stores per Project.
- All Knowledge Stores within a Project use the same embedding model. After you [configure the embedding model of your first Knowledge Store](overview.md), all other Knowledge Stores will use the same embedding model. If you want to switch to a different embedding model, delete all existing Knowledge Stores in the current Project and create new ones, or [create a new Project](../../build/projects.md#create-a-project).

## Working with Knowledge Stores

=== "GUI"
    You can view, create, edit, and delete Knowledge Stores in **Build > Knowledge**. Also, you can copy Knowledge Stores' Reference ID and export Knowledge Stores as Packages.

=== "API"
    You can view, create, edit, and delete Knowledge Stores using the [Cognigy.AI API](https://api-dev.cognigy.ai/openapi#tag--KnowledgeStores).

=== "CLI"
    You can create Knowledge Stores using the [Cognigy.AI CLI](https://github.com/Cognigy/Cognigy-CLI/blob/main/KNOWLEDGE-AI-README.md).

## More Information

- [Knowledge Source](knowledge-source/knowledge-source.md)
- [Cognigy Text Format](knowledge-source/text-formats/ctxt.md)
- [PDF](knowledge-source/text-formats/pdf.md)
- [Web Page](knowledge-source/text-formats/web-page.md)
- [Search Extract Output Node](../../build/node-reference/other-nodes/search-extract-output.md)
- [LLM](../llms/overview.md)
- [Generative AI](../generative-ai.md)
