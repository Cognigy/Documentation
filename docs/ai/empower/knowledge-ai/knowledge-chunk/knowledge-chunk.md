---
title: "Overview"
slug: "knowledge-chunk"
description: A Knowledge Chunk is a knowledge unit extracted from a Knowledge Source by Knowledge AI.
hidden: false
tags: ['Knowledge Chunks', 'Chunk Metadata', 'Data Processing', 'Information Units']
---

# Knowledge Chunk

A _Knowledge Chunk_ is a knowledge unit extracted from a [Knowledge Source](../knowledge-source/knowledge-source.md). Knowledge Chunks are smaller, self-contained pieces of information that Knowledge AI can process and send to AI Agents.

A Knowledge Chunk can be a single paragraph, a sentence, or even a smaller unit of text from a Knowledge Source. By dividing the content into Knowledge Chunks, Knowledge AI gains better granularity to process information. This way, Knowledge AI analyzes and responds to user queries more efficiently and accurately. Use the [Chunk editor](knowledge-chunk-editor.md) to edit and manage Knowledge Chunks.

Knowledge Chunks include [Knowledge Chunk text](#knowledge-chunk-text) and [Chunk metadata](#chunk-metadata).

## Limitations

- You can add up to 1000 Knowledge Chunks per Knowledge Source.
- Knowledge Chunk body and text can have up to 2000 characters together.
- Knowledge Chunk texts can contain bulleted and numbered lists in Markdown format. Other elements, such as links, may not display correctly in the chat conversation.
- Chunk metadata can have up to 1000 characters per Knowledge Chunk.
- You can add up to 20 Knowledge Chunk metadata pairs per Knowledge Chunk.

## Knowledge Chunk Text

[Knowledge AI extracts information from files](../knowledge-source/text-extraction/overview.md) and processes their content into Knowledge Chunk text. You can also create Knowledge Chunks directly in [CTXT files](../knowledge-source/text-formats/ctxt.md).

## Chunk Metadata

Chunk metadata contains information related to the Knowledge Chunk. Chunk metadata is optional and can supplement the content of your AI Agent's answers, for example, with links and images.

You can add metadata as JSON key-value pairs to Knowledge Chunks in the Chunk editor or directly to a [CTXT file](../knowledge-source/text-formats/ctxt.md). Knowledge Chunks support only numbers, strings, and boolean as Chunk metadata.

You can store Chunk metadata in the [Input object](../../../test/interaction-panel/input.md) or [Context object](../../../test/interaction-panel/context.md) and give your AI Agents access to Chunk metadata through:

- `input.knowledgeSearch.topK[0].chunkMetaData.{key}` in the [Input object](../../../test/interaction-panel/input.md)
- `context.knowledgeSearch.topK[0].chunkMetaData.{key}` in the [Context object](../../../test/interaction-panel/context.md)

Where `{key}` is your Chunk metadata key.

You must format Chunk metadata as JSON key-value pairs wrapped with backticks. The keys refer to the information the metadata holds, and the value is the information.

### Chunk Metadata Examples

You can find examples of common Chunk metadata by key in the following table:

| Key     | Description                                                        | Example                                                                                    |
|---------|--------------------------------------------------------------------|--------------------------------------------------------------------------------------------|
| `url`   | Links to external sources or additional reading material.          | `url: https://docs.cognigy.com/ai/build/node-reference/other-nodes/search-extract-output/` |
| `image` | Graphics that illustrate the information in the Knowledge Chunk.   | `image: https://docs.cognigy.com/ai/images/xApp/architecture.png`                          |
| `video` | Multimedia content that helps comprehend the Knowledge Chunk text. | `video: https://www.youtube.com/watch?v=U87psHIQF3w`                                       |

For example, for the `url: https://docs.cognigy.com/ai/build/node-reference/other-nodes/search-extract-output/` Chunk metadata stored in the Input object, where `url` is the key, retrieve this information by using `input.knowledgeSearch.topK[0].chunkMetaData.url`.

## Working with Knowledge Chunks

=== "GUI"
    You can view, create, edit, and delete Knowledge Chunks using the [Chunk editor](knowledge-chunk-editor.md).

=== "API"
    You can view, create, edit, and delete Knowledge Chunks using the [Cognigy.AI API](https://api-dev.cognigy.ai/openapi#tag--KnowledgeChunks).

## More information

- [Knowledge Source](../knowledge-source/knowledge-source.md)
- [Chunk editor](knowledge-chunk-editor.md)
- [CTXT file](../knowledge-source/text-formats/ctxt.md)
- [Input](../../../test/interaction-panel/input.md)