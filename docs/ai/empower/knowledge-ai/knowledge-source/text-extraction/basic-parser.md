---
title: "Basic Parser"
slug: "basic-parser"
description: "Text Extraction with the Basic Parser is a Cognigy solution that extracts content from files more effectively."
hidden: false
tags: ['Basic Parser', 'Text Extraction', 'Document Processing', 'Content Parsing']
---

# Basic Parser

The _Basic Parser_ is a content parser that Knowledge AI uses to extract content from files more effectively. The Basic Parser splits the extracted content from a file into [Knowledge Chunks](../../knowledge-chunk/knowledge-chunk.md) based on a fixed token length during the creation of a [Knowledge Source](../../knowledge-source/knowledge-source.md). Based on our research, this parsing method works best with the **Top K** value set to 5 in the [Search Extract Output](../../../../build/node-reference/other-nodes/search-extract-output.md) Node.

## Supported Formats

| Cognigy.AI versions | Formats                  |
|---------------------|--------------------------|
| 4.79 or later       | PDF, DOCX, PPTX, and TXT |
| 4.78 and earlier    | PDF, DOCX, and TXT       |

## Availability

- Available in all installations.

## Set Up the Basic Parser

By default, Knowledge AI uses the [Advanced Parser](advanced-parser.md) for text extraction. To activate the Basic Parser, select **Basic** from the **Content Parser** list in the **Document Processing** section in **Manage > Settings > Knowledge AI Settings**.

## More Information

- [Text Extraction with Content Parsers](overview.md)
- [Text Extraction with the Advanced Parser](advanced-parser.md)
- [Text Extraction with Azure AI Document Intelligence](azure-ai.md)
