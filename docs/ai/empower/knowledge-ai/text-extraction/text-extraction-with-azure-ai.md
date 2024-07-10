---
title: "Text Extraction with Azure AI Document Intelligence"
slug: "text-extraction-with-azure-ai"
description: "Text Extraction with Azure AI Document Intelligence creates semantic chunks, resulting in more accurate answers compared to the default fixed-length chunking."
hidden: false
---

# Text Extraction with Azure AI Document Intelligence

!!! note
    - By using this feature, you are accepting the [Cognigy.AI Additional Data Privacy Terms](https://www.cognigy.com/additional-privacy-terms).
    - Azure AI Document Intelligence stores data and results on Azure Storage for 24 hours from the time you submit an analyze request. To learn more about data, privacy, and security for Document Intelligence, read the [Azure AI Document Intelligence](https://learn.microsoft.com/en-us/legal/cognitive-services/document-intelligence/data-privacy-security) documentation.

_Text Extraction with [Azure AI Document Intelligence](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/)_ creates semantic chunks, resulting in more accurate answers compared to the default fixed-length chunking.

When you upload a file as a Knowledge Source,
Cognigy automatically sends a request to the Azure AI Document Intelligence platform.
This request prompts the platform to extract text from the file. Once the platform finishes processing the file, Cognigy retrieves the preprocessed result.
This result is then converted to Markdown format and segmented into chunks for easier handling.

The chunk strategy powered by Azure AI Document Intelligence has the following advantages:

- **Improved quality of responses**. Breaking down the text into blocks of meaning allows the AI Agent to more accurately understand the context and find the necessary information to formulate a higher-quality response.
- **Recognition of a wide range of text elements.** The Azure AI Document Intelligence platform recognizes not only plain text but also text in images using [OCR (Optical character recognition)](https://en.wikipedia.org/wiki/Optical_character_recognition), along with structural elements such as tables, figures, selection marks, titles, and footers.
- **Effective use of Markdown**. The extracted text is presented in Markdown format in the Chunk editor. Markdown allows the AI Agent to recognize headers, tables, images, links, and differentiate them from a regular text. This approach adds an additional level of context, helping the AI Agent better understand the structure and organization of information in the text.
- **Improved ability to reference the source**. Adding the page number of the source file to the metadata for each chunk can help track an information source in lengthy documents.

## Supported Formats

| Cognigy.AI versions | Formats                                                                                 |
|---------------------|-----------------------------------------------------------------------------------------|
| 4.80 or later       | `.pdf`, `.docx`, `.pptx`, `.txt`, `.jpeg`, `.jpg`, `.png`, `.bmp`, `.heif`, and `.tiff` |

## Availability

- Available in all environments.

## How to Use

By default, the Advanced Parser is used for text extraction.
To use the External Parser, follow these steps:

1. [Switch to External Parser](#switch-to-external-text-parser)
2. [Upload a File for Text Extraction](#upload-a-file-for-text-extraction)

### Switch to External Text Parser

To switch to the External Parser, follow these steps:

1. In your Project, navigate to **Manage > Settings**.
2. On the **Settings** page, go to **Knowledge AI Settings > Document Processing**.
3. From the **Content Parser** list, select **Azure AI Document Intelligence**.
4. Set up a connection by clicking **+** next to the **Connection to Azure AI Document Intelligence** field.
5. Fill in the following fields:
    - **Connection name** — create a unique name for your connection.
    - **API Key** — add an API key for the Azure AI Document Intelligence service. To copy the key, go to the Azure portal. On the left-side menu, select **Resource Management > Key and Endpoint**. Copy the key from the **Key** field. For more information, read the [Azure AI Document Intelligence](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/create-document-intelligence-resource?view=doc-intel-4.0.0#get-endpoint-url-and-keys) documentation.
    - **Endpoint URL** — add an Endpoint URL from your Document Intelligence resource. To copy the URL, go to the Azure portal. On the left-side menu, select **Resource Management > Key and Endpoint**. Copy the endpoint URL from the **Endpoint** field. For more information, read the [Azure AI Document Intelligence](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/create-document-intelligence-resource?view=doc-intel-4.0.0#get-endpoint-url-and-keys) documentation. 
6. Click **Create**, then **Save**.

### Upload a File for Text Extraction

To use the External Parser, follow these steps:

1. In your Project, navigate to **Build > Knowledge**.
2. Open the existing Knowledge Store or create a new one.
3. On the **Knowledge Store** page, click **+ New Knowledge Sources** in the upper-left corner.
4. In the **New Knowledge Sources** window, select **File (advanced)**. The lable `advanced` means that you will be using the Azure AI Document Intelligence platform for text extraction.
5. Drag and drop a file, or click **Browse Files** to select a file from your computer.
6. Click **Create**.

### Metadata

{! _includes/ai/knowledge-ai/metadata.md !}

In the Chunk Editor, each chunk has a metadata object that indicates the number of the source page where this information was located.
The presence of page numbers in the metadata means that the text extraction feature works correctly. However, if there are no page numbers, it suggests an error, such as failing to access Azure AI Document Intelligence.

In the example below, the metadata object indicates that the chunk's text starts on source file page 1 and ends on page 2.

```txt
{
  "firstPage": "1",
  "lastPage": "2"
}
```

## More Information

- [Knowledge Source](../overview.md#knowledge-source)
- [PDF](../pdf.md)