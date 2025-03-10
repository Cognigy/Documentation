---
title: "Overview"
slug: "content-parsers"
description: "In Knowledge AI, parsers extract texts from uploaded files in different formats. These parsers are categorized based on their complexity and the techniques they use."
hidden: false
---

# Text Extraction with Content Parsers

In Knowledge AI, parsers extract texts from uploaded files in different formats. These parsers are categorized based on their complexity and the techniques they use.

You can use the following types of parsers for text extraction:

- [Basic](text-extraction-with-basic-parser.md)
- [Advanced (Default)](text-extraction-with-advanced-parser.md)
- [External (Azure AI Document Intelligence)](text-extraction-with-azure-ai.md)

## Compare Parsers

The table provides a comparative overview of parsers.

| Characteristic/Parser | Basic                                                                                                                                       | Advanced (Default)                                                                                                                                                                                                                 | External (Azure AI Document Intelligence)                                                                                                          |
|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| Functionality         | Fundamental text extraction.                                                                                                                | Advanced text extraction.                                                                                                                                                                                                          | Advanced, cloud-based text extraction.                                                                                                             |
| Use Cases             | Extracting text from simple documents.                                                                                                      | Extracting text from complex documents that include tables, images, footers, and more.                                                                                                                                             | Extracting text from complex documents that include tables, images, footers, and more.                                                             |
| Advantages            | - Fast processing. <br> - Low resource consumption.                                                                                         | - Better accuracy. <br> - Handles various formats. <br> - Includes OCR.                                                                                                                                                            | - Better accuracy. <br> - Handles various formats. <br> - Includes OCR. <br> - Customizable settings on the Azure AI Document Intelligence side.   |
| Limitations           | - Limited handling of complex documents. <br> - Less accuracy. <br> - Limited file format support. <br> - Lack of customization capability. | - Lack of customization capability.                                                                                                                                                                                                | - Dependency on a third-party service. <br> - Payment for using the service.                                                                       |
| Price                 | Free of charge for all environments. Included in the Knowledge AI license.                                                                  | Free of charge for Cognigy SaaS environments. Included in the Knowledge AI license. <br> For Cognigy on-premises installations, payment is handled through Azure AI Document Intelligence in accordance with their pricing policy. | For all Cognigy installations, payment is handled through Azure AI Document Intelligence in accordance with their pricing policy.                  |

## Automatic Fallback to Basic Parsing

When the Advanced or External Parsers fail, automatic fallback to the Basic Parser occurs.

## More Information

- [Knowledge Source](../overview.md#knowledge-source)
- [PDF](../pdf.md)