---
title: "Overview"
slug: "content-parsers"
description: ""
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

| Characteristic/Parser | Basic                                                                                           | Advanced  (Default)                                                                   | External (Azure AI Document Intelligence)                                                                                                                |
|-----------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| Functionality         | Fundamental text extraction                                                                     | Advanced text extraction                                                              | Advanced, cloud-based text extraction                                                                                                                    |
| Use Cases             | Extracting text from simple documents (plain text)                                              | Extracting text from complex documents that include tables, images, footers, and more | Highly complex documents, large volumes                                                                                                                  |
| Advantages            | - Fast processing <br> - Low resource consumption                                               | - Better accuracy <br> - Handles various formats <br> - Includes OCR                  | - Better accuracy <br> - Handles various formats  <br> - Includes OCR <br> - Customizable extraction settings on the Azure AI Document Intelligence side |
| Limitations           | - Limited handling of complex documents <br> - Less accuracy <br> - Limited file format support | - Higher resource consumption                                                         | - Higher resource consumption <br> - Dependency on a third-party service <br> - Higher costs                                                             |
| Cost                  | Free of charge. Included in the Knowledge AI license.                                           | Free of charge. Included in the Knowledge AI license.                                 | Azure AI Document Intelligence pricing policy                                                                                                            |