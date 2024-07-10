---
title: "Text Extraction with the Basic Parser"
slug: "text-extraction-with-advanced-parser"
description: "Text Extraction with the Basic Parser is a Cognigy solution that extracts content from files more effectively."
hidden: false
---

# Text Extraction with the Basic Parser

_Text Extraction with the Basic Parser_ is a Cognigy solution that extracts content from files more effectively. It splits the extracted content into chunks based on a fixed token length, which returns the best results based on our research.

We recommended using this Parser in combination with **Top K** set to `5` in the [Search Extract Output](../../../build/node-reference/other-nodes/search-extract-output.md) Node.

## Supported Formats

| Cognigy.AI versions | Formats                              |
|---------------------|--------------------------------------|
| 4.80 or later       | `.pdf`, `.docx`, `.pptx`, and `.txt` |
| 4.79 and earlier    | `.pdf`, `.docx`,  and `.txt`         |

## Availability

- Available in all environments.

## How to Use

By default, the Advanced Parser is used for text extraction.
To use the Basic Parser, follow these steps:

1. [Switch to Basic Text Parser](#switch-to-the-basic-parser)
2. [Upload a File for Text Extraction](#upload-a-file-for-text-extraction)

### Switch to the Basic Parser

To switch to the Basic Parser, follow these steps:

1. In your Project, navigate to **Manage > Settings**.
2. On the **Settings** page, go to **Knowledge AI Settings > Document Processing**.
3. From the **Content Parser** list, select **Basic**.
4. Click **Save**.

### Upload a File for Text Extraction

To use the Basic Parser, follow these steps:

1. In your Project, navigate to **Build > Knowledge**.
2. Open the existing Knowledge Store or create a new one.
3. On the Knowledge Store page, click **+ New Knowledge Sources** in the upper-left corner.
4. In the **New Knowledge Sources** window, select **File (basic)**. The lable `basic` means that you will be using the Basic Parser for text extraction.
5. Drag and drop a `.pdf`, `.docx`, `.txt`, or `.pptx` file, or click **Browse Files** to select a file from your computer.
6. Click **Create**.

## More Information

- [Text Extraction with Content Parsers](overview.md)
- [Text Extraction with the Advanced Parser](text-extraction-with-advanced-parser.md)
- [Text Extraction with Azure AI Document Intelligence](text-extraction-with-azure-ai.md)



