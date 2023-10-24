---
title: "Knowledge Search"
slug: "knowledge-search"
description: "The Knowledge Search Node performs a content search and retrieves content from data that was previously uploaded to the knowledge store through a source file."
hidden: false
---

# Knowledge Search

[![Version badge](https://img.shields.io/badge/Updated in-v4.61-blue.svg)](../../../release-notes/4.61.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/knowledge-search.png" width="80%"/>
</figure>

## Description
<div class="divider"></div>

!!! danger "Deprecation of the Knowledge Search Node"
    The Node is deprecated. To ensure a seamless transition, we strongly recommend using the [Search Extract Output](search-extract-output.md) Node that includes the same functionality as this one.

This Node searches and retrieves content from data that was previously uploaded to the Knowledge AI solution.

Before using this Node, please ensure that you have a `text-embedding-ada-002` LLM configured - see this [list of supported providers](../../resources/build/llm.md). 

To display the output of the Knowledge Search Node to the user, follow these steps:

1. In the Flow editor, add a Say Node below the Knowledge Search Node.
2. In the **Output Type** field, select **Text**.
3. In the **Text** field, click ![token](../../../assets/icons/token.svg) and select the **KSearch:TopK Texts** Token.
4. Click **Save Node**.

## Settings

### Knowledge Store

Select a store from the list to allow the Node to retrieve the data.

### Search Settings

| Parameter                     | Type          | Description                                                                                                                                                                    |
|-------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Top K                         | Number        | The Number of optimal matching chunks that the Knowledge AI solution should provide.                                                                                           |
| Where to store the result     | Select        | The storage for the search results. Select a storage:<br> - Input - the content will be stored in the Input object.<br> - Context - the content will be stored in the Context. |
| Input Key to store result     | CognigyScript | The location in the input object where the result will be stored. For example, `input.knowledgeSearch`.                                                                        |
| Input Context to store result | CognigyScript | The location in the context object where the result will be stored. For example, `context.knowledgeSearch`.                                                                    |

## More Information

- [Search Extract Output](search-extract-output.md) 
- [Knowledge Search Overview](../../knowledge-ai/overview.md)