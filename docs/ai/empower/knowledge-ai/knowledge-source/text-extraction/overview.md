---
title: "Overview"
slug: "content-parsers"
description: "In Knowledge AI, parsers extract texts from uploaded files in different formats. These parsers are categorized based on their complexity and the techniques they use."
hidden: false
tags: ['Text Extraction', 'Content Parsing', 'Document Processing', 'Parsers', 'OCR', 'Knowledge Processing', 'Data Extraction']
---

# Text Extraction with Content Parsers

Knowledge AI uses content parsers to extract texts from uploaded files in different formats. The content parsers are categorized based on their complexity and the techniques they use.

You can use the following content parsers:

- [Basic Parser](basic-parser.md)
- [Advanced Parser (Default)](advanced-parser.md)
- [Azure AI Document Intelligence](azure-ai.md)

## Content Parsers Overview

The table provides a comparative overview of the content parsers.

| Details       | Basic Parser                                                                                                                                                      | Advanced Parser (Default)                                                                                                                                                                                                                                   | Azure AI Document Intelligence                                                                                                                                      |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Functionality | Fundamental text extraction.                                                                                                                                      | Advanced text extraction.                                                                                                                                                                                                                                   | Advanced, cloud-based text extraction.                                                                                                                              |
| Use Cases     | Extracting text from simple documents.                                                                                                                            | Extracting text from complex documents that include tables, images, footers, and more.                                                                                                                                                                      | Extracting text from complex documents that include tables, images, footers, and more.                                                                              |
| Advantages    | <ul><li>Fast processing.</li><li>Low resource consumption.</li></ul>                                                                                              | <ul><li>Better accuracy.</li><li>Handles various formats.</li><li>Includes OCR.</li></ul>                                                                                                                                                                   | <ul><li>Better accuracy.</li><li>Handles various formats.</li><li>Includes OCR.</li><li>Customizable settings on the Azure AI Document Intelligence side.</li></ul> |
| Limitations   | <ul><li>Limited handling of complex documents. </li><li>Less accuracy. </li><li>Limited file format support. </li><li>Lack of customization capability.</li></ul> | Lack of customization capability.                                                                                                                                                                                                                           | <ul><li>Dependency on a third-party service. </li><li>Payment for using the service.</li></ul>                                                                      |
| Price         | Free of charge for all environments. Included in the Knowledge AI license.                                                                                        | <ul><li>Free of charge for shared and dedicated SaaS installations. Included in the Knowledge AI license.</li><li>For on-premises installations, payment proceeds through Azure AI Document Intelligence in accordance with their pricing policy.</li></ul> | For all installations, payment proceeds through Azure AI Document Intelligence in accordance with their pricing policy.                                             |

## Automatic Fallback to Basic Parsing

If the Advanced Parser or Azure AI Document Intelligence fails, Knowledge AI falls back automatically on the Basic Parser.

## More Information

- [Knowledge Source](../knowledge-source.md#knowledge-source)
- [PDF](../../knowledge-source/text-formats/pdf.md)