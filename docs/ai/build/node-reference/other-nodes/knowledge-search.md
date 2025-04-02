---
title: "Knowledge Search"
slug: "knowledge-search"
description: "The Knowledge Search Node performs a content search and retrieves content from data previously uploaded to the Knowledge Store through various sources, such as text files, images, and web pages."
hidden: false
---

# Knowledge Search

[![Version badge](https://img.shields.io/badge/Updated in-v4.61-blue.svg)](../../../../release-notes/4.61.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/knowledge-search.png" width="80%"/>
</figure>

## Description

!!! danger "Removal of the Knowledge Search Node"
    The Knowledge Search Node was removed from Cognigy.AI in version 4.61. If you use this Node, it will still work, but you won't be able to create new Knowledge Search Nodes. To ensure a seamless transition, we strongly recommend using the [Search Extract Output](search-extract-output.md) Node, as it offers the same functionality and additional features.

This Node searches and retrieves content from data that was previously uploaded to the Knowledge AI solution.

Before using this Node, ensure that you have a `text-embedding-ada-002` LLM configured. Refer to the [list of supported providers](../../../empower/llms/model-support-by-feature.md). 

To display the output of the Knowledge Search Node to the user, follow these steps:

1. In the Flow editor, add a Say Node below the Knowledge Search Node.
2. In the **Output Type** field, select **Text**.
3. In the **Text** field, click ![token](../../../../_assets/icons/token.svg) and select the **KSearch:TopK Texts** Token.
4. Click **Save Node**.

## Parameters

### Knowledge Store

Select a store from the list to allow the Node to retrieve the data.

### Search Settings

| Parameter                     | Type          | Description                                                                                                                                                                                  |
|-------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Top K                         | Number        | Specify how many of the top K knowledge search results should be returned.                                                                                                                   |
| Where to store the result     | Select        | The storage for the search results. Select a storage: <ul><li>Input — the content will be stored in the Input object.</li><li>Context — the content will be stored in the Context.</li></ul> |
| Input Key to store result     | CognigyScript | The location in the input object where the result will be stored. For example, `input.knowledgeSearch`.                                                                                      |
| Input Context to store result | CognigyScript | The location in the context object where the result will be stored. For example, `context.knowledgeSearch`.                                                                                  |

## More Information

- [Search Extract Output](search-extract-output.md) 
- [Knowledge Search Overview](../../../empower/knowledge-ai/overview.md)