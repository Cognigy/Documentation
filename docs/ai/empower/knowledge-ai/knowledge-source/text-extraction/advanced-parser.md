---
title: "Advanced Parser"
slug: "advanced-parser"
description: "Text Extraction with the Advanced Parser creates semantic chunks, resulting in more accurate answers."
hidden: false
tags: ['Advanced Parser', 'Text Extraction', 'Document Processing', 'Content Parsing']
---

# Advanced Parser

[![Version badge](https://img.shields.io/badge/Added in-v4.80-blue.svg)](../../../../../release-notes/4.80.md)

!!! note
    By using the Advanced Parser, you are accepting the [Cognigy.AI Additional Data Privacy Terms](https://www.cognigy.com/additional-privacy-terms).

The _Advanced Parser_ is Knowledge AI's default content parser. When you upload a file as a [Knowledge Source](../knowledge-source.md), the Advanced Parser splits the file content semantically into Knowledge Chunks and converts them into Markdown format. This parsing method results in more accurate answers compared to the [Basic Parser](basic-parser.md).

## Key Features

- **Improved quality of responses**. Breaking down the text into [Knowledge Chunks](../../knowledge-chunk/knowledge-chunk.md) allows AI Agents to understand the context and provide more accurate responses.
- **Recognition of a wide range of text elements**. The Advanced Parser recognizes plain text and more complex text elements, such as tables, titles, and footers as well as images, by using [Optical character recognition (OCR)](https://en.wikipedia.org/wiki/Optical_character_recognition).
- **Effective use of Markdown**.  The Advanced Parser converts the text into Markdown format and in Knowledge Chunks. AI Agents can process Markdown and recognize text elements, for example, tables and images, and distinguish them from plain text. This approach gives AI Agents more context and helps them better understand how information is organized in the text.
- **Improved ability to reference the source**. Adding page numbers of the source file to Knowledge Sources as [Chunk metadata](#chunk-metadata) helps track an information source in large documents.

## Prerequisites

- Cognigy.AI 4.71 or later.

## Supported Formats

| Cognigy.AI versions | Formats                                                         |
|---------------------|-----------------------------------------------------------------|
| 4.80 or later       | PDF, DOCX, PPTX, TXT[^*], JPEG, JPG, PNG, BMP, HEIF, TIFF files |
| 4.79                | PDF, DOCX, PPTX, and TXT[^*] files                              |
| 4.71-4.78           | PDF and DOCX files                                              |
| 4.71 or earlier     | PDF files                                                       |

[^*]: TXT files are internally handled by the Basic Parser.

## Availability

The Advanced Parser is available in all Cognigy.AI installations. For the [on-premises installation](#activate-the-advanced-parser-for-on-premises), you need to activate the Advanced Parser.

### Activate the Advanced Parser for On-Premises

Activating the Advanced Parser varies depending on which version you use:

- [Cognigy.AI 4.80 or later](#cognigyai-480-or-later)
- [Cognigy.AI 4.79 or earlier](#cognigyai-479-or-earlier)

#### Cognigy.AI 4.80 or Later

To activate the Advanced Parser, add the following parameters to the `knowledgeSearch` section in the `cognigy-ai-values.yaml` file:

```yaml
knowledgeSearch:
  enabled: true

  globalAzureDocumentIntelligenceConfig:
    enabled: true
    apiKey: API_KEY
    endpointUrl: ENDPOINT_URL
```

Replace `API_KEY` with your Azure AI Document Intelligence API key and `ENDPOINT_URL` with your Azure AI Document Intelligence endpoint URL.

#### Cognigy.AI 4.79 or Earlier

To activate the Advanced Parser for all or specific organizations in your Cognigy.AI installation, set the following environment variables in the ` cognigy-ai-values.yaml` file:

- `FEATURE_ENABLE_AZURE_DOCUMENT_INTELLIGENCE_ORG_WHITELIST`:
    - For all organizations, set to `*`.
    - For specific organizations, enter the organization IDs separated by a comma, for example, `63bda3d4tlp3c95977bb8604,63babf6e92asd791923e17b7,670k1273fx492448dc288b36`.
- `AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT`