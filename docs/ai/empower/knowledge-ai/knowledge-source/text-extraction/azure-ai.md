---
title: "Azure AI Document Intelligence"
slug: "azure-ai"
description: "Azure AI Document Intelligence splits texts semantically into Knowledge Chunks, resulting in more accurate answers compared to the Basic Parser."
hidden: false
tags: ['Azure AI', 'Document Intelligence', 'Text Extraction', 'OCR', 'Document Processing', 'Content Parsing']
---

# Azure AI Document Intelligence

[![Version badge](https://img.shields.io/badge/Added in-v4.80-blue.svg)](../../../../../release-notes/4.80.md)

!!! note
    - By using Azure AI Document Intelligence as a content parser, you agree to the [Cognigy.AI Additional Data Privacy Terms](https://www.cognigy.com/additional-privacy-terms).
    - Azure AI Document Intelligence stores data and results in Azure Storage for 24 hours after submitting an analyze request. To learn more about data, privacy, and security for Document Intelligence, read the [Azure AI Document Intelligence](https://learn.microsoft.com/en-us/legal/cognitive-services/document-intelligence/data-privacy-security) documentation.

_[Azure AI Document Intelligence](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/)_ is an external content parser that you can use in Knowledge AI for text extraction. Azure AI Document Intelligence splits texts semantically into Knowledge Chunks, resulting in more accurate answers compared to the [Basic Parser](basic-parser.md).

When you upload a file as a [Knowledge Source](../knowledge-source.md), Knowledge AI sends a request to Azure AI Document Intelligence to extract text from the file. After the text extraction, Knowledge AI retrieves the text, converts it into Markdown format, and splits it into Knowledge Chunk.

## Key Features

- **Improved quality of responses**. Breaking down the text into [Knowledge Chunks](../../knowledge-chunk/knowledge-chunk.md) allows AI Agents to understand the context and provide more accurate responses.
- **Recognition of a wide range of text elements**. Azure AI Document Intelligence recognizes plain text and more complex text elements, such as tables, titles, and footers as well as images, by using [Optical character recognition (OCR)](https://en.wikipedia.org/wiki/Optical_character_recognition).
- **Effective use of Markdown**. Azure AI Document Intelligence converts the text into Markdown format. AI Agents can process Markdown and recognize text elements, for example, tables and images, and distinguish them from plain text. This approach gives AI Agents more context and helps them better understand how information is organized in the text.
- **Improved ability to reference the source**. Adding page numbers of the source file to Knowledge Sources as [Chunk metadata](#chunk-metadata) helps track an information source in large documents.

## Prerequisite

- You have access to an [Azure AI Document Intelligence account](https://azure.microsoft.com/en-us/products/ai-services/ai-document-intelligence), and the account must be hosted in one of the following [regions](https://datacenters.microsoft.com/globe/explore):

    - East US
    - West US2
    - West Europe

## Supported Formats

| Cognigy.AI versions | Formats                                                         |
|---------------------|-----------------------------------------------------------------|
| 4.80 or later       | PDF, DOCX, PPTX, TXT, JPEG, JPG, PNG, BMP, HEIF, and TIFF files |

### Chunk Metadata

{! _includes/ai/knowledge-ai/metadata.md !}

Azure AI Document Intelligence recognizes page numbers and adds them to the Knowledge Chunks as Chunk metadata. In the Chunk editor, you can see the page numbers as Chunk metadata. If the page numbers appear in the Chunk editor, it indicates that the text extraction was successful. If they don't, it suggests an error, for example, a failure to access Azure AI Document Intelligence.

In the following example, the Chunk metadata indicates that the Knowledge Chunk text starts on page 1 of the source file and ends on page 2.

```txt
{
  "firstPage": "1",
  "lastPage": "2"
}
```

## Set Up Azure AI Document Intelligence

By default, Knowledge AI uses the Advanced Parser for text extraction. Set up the Azure AI Document Intelligence in **Manage > Settings > Knowledge AI Settings**:

??? info "Set Up the Azure AI Document Intelligence"

    === "You don't have an Azure AI Document Intelligence Connection"

        1. In the **Document Processing** section, select **Azure AI Document Intelligence** from the **Content Parser** list.
        2. Click **+** next to the **Connection to Azure AI Document Intelligence** field.
        3. Fill in the following fields:
            - **Connection name** — enter a unique name for your connection.
            - **API Key** — enter an API key for the Azure AI Document Intelligence service. To copy the key, go to the Azure portal. On the left-side menu, select **Resource Management > Key and Endpoint**. Copy the key from the **Key** field. For more information, read the [Azure AI Document Intelligence](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/create-document-intelligence-resource?view=doc-intel-4.0.0#get-endpoint-url-and-keys) documentation.
            - **Endpoint URL** — add an Endpoint URL from your Document Intelligence resource. To copy the URL, go to the Azure portal. On the left-side menu, select **Resource Management > Key and Endpoint**. Copy the endpoint URL from the **Endpoint** field. For more information, read the [Azure AI Document Intelligence](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/create-document-intelligence-resource?view=doc-intel-4.0.0#get-endpoint-url-and-keys) documentation.

    === "You have an Azure AI Document Intelligence Connection"
    
        1. In the **Document Processing** section, select **Azure AI Document Intelligence** from the **Content Parser** list.
        2. Select a connection from the **Connection to Azure AI Document Intelligence** field.

## More Information

- [Text Extraction with Content Parsers](overview.md)
- [Advanced Parser](advanced-parser.md)
- [Basic Parser](basic-parser.md)
- [Knowledge Source](../knowledge-source.md)