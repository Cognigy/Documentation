---
title: "Search Extract Output Node"
slug: "search-extract-output"
description: The Search Extract Output Node uses an embedding model to search through data in Knowledge Stores and a generative AI model to extract relevant data and create an output based on the extracted data.
hidden: false
tags: ['Search Extraction', 'Knowledge Search', 'Information Retrieval', 'Knowledge Processing']
---

# Search Extract Output Node 

[![Version badge](https://img.shields.io/badge/Updated in-v4.84-blue.svg)](../../../../release-notes/4.84.md)

The Search Extract Output Node uses an embedding model to search [Knowledge Stores](../knowledge-store.md) and a generative AI model to extract relevant information and generate outputs. For example, you can upload manuals and technical documents as [Knowledge Sources](../knowledge-source/knowledge-source.md) to create an AI Agent that helps customers with technical issues.


## Prerequisites

- For the Search only mode, you need access to an embedding model that [supports Knowledge Search](../../../empower/llms/model-support-by-feature.md).
- For the Search & Extract & Output and Search & Extract modes, you need access to both an embedding model and a generative AI model to support [Knowledge Search and Answer Extraction](../../../empower/llms/model-support-by-feature.md).

## Modes

The Search Extract Output Node has the following modes:

- **Search & Extract & Output** — With this mode, the AI Agent searches Knowledge Sources, extracts answers, and outputs the results automatically as text or adaptive card.
- **Search & Extract** — With this mode, the AI Agent searches Knowledge Sources and extracts answers. You have the flexibility to use these answers in other Nodes or Extensions.
- **Search only** — With this mode, the AI Agent searches Knowledge Sources. You have the flexibility to use the information found. 

For more detailed information about the Search Extract Output Node, read the [Node reference](../../../build/node-reference/other-nodes/search-extract-output.md).
