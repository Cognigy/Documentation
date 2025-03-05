---
title: "Overview"
slug: "knowledge-source"
hidden: false
tags: ['Knowledge Sources', 'Knowledge Management', 'Content Management', 'Metadata', 'Knowledge Chunks', 'Document Processing']
---

# Knowledge Source

A _Knowledge Source_ is the structured and easily accessible information that Knowledge AI extracts from documents and can provide to AI Agents. You can use different types of documents to create Knowledge Sources, for example, user manuals, articles, FAQs, and others. Knowledge AI breaks the information inside the documents into smaller units, known as [_Knowledge Chunks_](../knowledge-chunk/knowledge-chunk.md). Additionally, you can add more information as [Source metadata](#source-metadata), such as source links and authors, and [_Knowledge Source Tags_](knowledge-source-tags.md) to Knowledge Sources to improve the experience your customers have with AI Agents.

Knowledge Sources include [Knowledge Chunks](../knowledge-chunk/knowledge-chunk.md) and [Source metadata](#source-metadata)

## Restrictions and Limitations

- For versions 4.77 and earlier, you can create up to ten Knowledge Sources per Store.
- You can upload files with up to 10 MB as Knowledge Sources.

### Content Types

Knowledge AI supports the following content types for Knowledge Sources:

- [Cognigy Text Format](text-formats/ctxt.md) (CTXT, recommended) 
- Files in the following formats:
    - [PDF](text-formats/pdf.md)
    - TXT
    - DOCX
    - PPTX
    - JPEG
    - JPG
    - PNG
    - BMP
    - HEIF
    - TIFF
- [Web Pages](text-formats/web-page.md)

Depending on the format of the file you use, you need to configure a specific [parser](text-extraction/overview.md) to convert the content into Knowledge Sources.

## Source Metadata

_Source metadata_ contains information about the Knowledge Source and is formatted as JSON key-value pairs. The keys refer to the information the Source metadata holds and the value is the information, for example, `publication: Elsevier`.

You can store Source metadata in the [Input object](../../../test/interaction-panel/input.md) or [Context object](../../../test/interaction-panel/context.md) and give your AI Agents access to the Source metadata through:

- `input.knowledgeSearch.topK[0].sourceMetadata` in the Input object
- `context.knowledgeSearch.topK[0].sourceMetadata` in the Context object

This way, AI Agents can provide relevant information about the source of their replies to users.

### Limitations

- You can add up to 20 Source metadata pairs per Knowledge Source.
- Source metadata pairs can have up to 1000 characters.

### Examples

You can find examples of Source metadata in the following table:

| Key     | Description                                                                                                                                                                     | Mandatory | Example                                                                 |
|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------------------------------------------|
| `title` | This key defines the document's name. If a user requests the information source, the AI Agent can provide the document's title in the response message.                         | no        | `title: Cognigy xApps FAQs`                                             |
| `url`   | This key defines a URL as the document's source. If a user requests the information source, the AI Agent can provide the link to the document's source in the response message. | no        | <span style="white-space: nowrap;">`url: https://www.cognigy.com`<span> |
| `tags`  | This key defines [Knowledge Source Tags](knowledge-source-tags.md). To add more than Knowledge Source Tag, use an array. You can add up to 10 Knowledge Source Tags.            | no        | `[cognigy, xapps, architecture]`                                        |

You can add any Source metadata to a Knowledge Source and give AI Agents access to the Source metadata through `input.knowledgeSearch.topK[0].sourceMetaData.{key}`. For example, if you add the Source metadata `author: Cognigy`, where `author` is the key, and store it in the Input object, retrieve this information by using `input.knowledgeSearch.topK[0].sourceMetaData.author`.

## Working with Knowledge Sources

=== "GUI"
    You can view, create, edit, and delete Knowledge Sources in **Build > Knowledge**. Also, you can copy Knowledge Sources' Reference ID, disable and export Knowledge Sources, and [download them as CTXT file](#download-knowledge-sources-as-ctxt).

=== "API"
    You can view, create, edit, and delete Knowledge Sources using the [Cognigy.AI API](https://api-dev.cognigy.ai/openapi#tag--KnowledgeSources). You can also use the API to upload files as Knowledge Source.

=== "CLI"
    You can ingest documents to create Knowledge Sources and view the resulting number of tokens using the [Cognigy.AI CLI](https://github.com/Cognigy/Cognigy-CLI/blob/main/KNOWLEDGE-AI-README.md)


## Download Knowledge Sources as CTXT

You can download Knowledge Sources as a CTXT file, including Knowledge Sources created from web pages and other file formats. Downloading Knowledge Sources as CTXT files offers more flexibility in managing Knowledge Sources. With a CTXT file, you can:

- Back up Knowledge Sources more easily after you have edited the Knowledge Chunks.
- Use Knowledge Sources across Knowledge Stores with different embedding vector dimensions.
- Edit downloaded Knowledge Sources more efficiently with external tools, such as text editors, with features like search and replace, bulk editing, and integration of AI tools.
    
## More information

- [Knowledge Store](../knowledge-store.md)
- [Knowledge Chunk](../knowledge-chunk/knowledge-chunk.md)
- [Knowledge Source Tags](knowledge-source-tags.md)
- [Chunk editor](../knowledge-chunk/knowledge-chunk-editor.md)
- [Input](../../../test/interaction-panel/input.md)
