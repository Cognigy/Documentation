---
title: "Search Extract Output"
slug: "search-extract-output"
description: "The Knowledge Search Node searches and retrieves content from data that was previously uploaded to the knowledge store through a source file."
hidden: false
---

# Search Extract Output (Beta)

[![Version badge](https://img.shields.io/badge/Added in-v4.57(Beta)-purple.svg)](../../../release-notes/4.57.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/search-extract-output.png" width="80%"/>
</figure>

## Description
<div class="divider"></div>

This Node searches, retrieves, changes, and outputs content from data previously uploaded to the knowledge store through a source file.

## Settings

### Mode

There are three modes that offer different levels of information processing and presentation:

- **Search & Extract & Output.**
- Performs a knowledge search, extracts key points, and outputs the result as text or adaptive card.
- **Search & Extract**. 
- 
- **Search only**. Performs a knowledge search and retrieve information without post-processing extraction or automatic output.

#### Search & Extract & Output

Performs a knowledge search, extracts key points, and outputs the result as text or adaptive card.

In the **Search & Extract & Output** mode, the following steps are involved:

1. The system performs a knowledge search and retrieves relevant information.
2. The retrieved data is sent to a Language Model (LLM) for further processing. 
3. The LLM extracts key points or answers from the search results, filtering out unnecessary details. 
4. The extracted information is stored in the Input or Context objects. 
5. The system automatically outputs the result from the LLM as either plain text or an adaptive card.

#### Search & Extract

Performs a knowledge search, extracts key points, but no automatic output.

In the **Search & Extract** mode, the following steps are involved:

1. The system performs a knowledge search and retrieves relevant information.
2. The retrieved data is directly sent to the LLM for extraction of key points or answers.
3. The LLM extracts the relevant information and writes it to the Input or Context objects.

#### Search only

Performs a knowledge search and retrieve information without extraction or automatic output.

In the **Search only** mode, the following steps are involved:

1. The system performs a knowledge search and retrieves relevant information. 
2. The search response is stored in the Input or Context objects.

### Knowledge Store

### Search Settings

### Extract Settings

### Output Settings


