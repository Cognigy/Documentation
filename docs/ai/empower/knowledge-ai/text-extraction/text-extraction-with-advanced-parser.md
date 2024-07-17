---
title: "Text Extraction with the Advanced Parser"
slug: "text-extraction-with-advanced-parser"
description: "Text Extraction with the Advanced Parser creates semantic chunks, resulting in more accurate answers compared to the default fixed-length chunking."
hidden: false
---

# Text Extraction with the Advanced Parser

[![Version badge](https://img.shields.io/badge/Updated in-v4.79-blue.svg)](../../../../release-notes/4.79.md)

!!! note
	By using this feature, you are accepting the [Cognigy.AI Additional Data Privacy Terms](https://www.cognigy.com/additional-privacy-terms).

_Text Extraction with the Advanced Parser_ is a Cognigy.AI solution that is used to create semantic chunks, resulting in more accurate answers compared to the default fixed-length chunking.

When this feature is enabled and you upload a file as a Knowledge Source,
the Advanced Parser automatically processes this request to extract text from the file.
Once the Advanced Parser finishes processing the file,
the result is converted to Markdown format and segmented into chunks for easier handling.

The chunk strategy powered by the Advanced Parser has the following advantages:

- **Improved quality of responses**. Breaking down the text into blocks of meaning allows the AI Agent to more accurately understand the context and find the necessary information to formulate a higher-quality response.
- **Recognition of a wide range of text elements.** The Advanced Parser recognizes not only plain text but also text in images using [OCR (Optical character recognition)](https://en.wikipedia.org/wiki/Optical_character_recognition), along with structural elements such as tables, figures, selection marks, titles, and footers, converting them into Markdown.
- **Effective use of Markdown**. The extracted text is presented in Markdown format in the Chunk editor. Markdown allows the AI Agent to recognize headers, tables, images, links, and differentiate them from a regular text. This approach adds an additional level of context, helping the AI Agent better understand the structure and organization of information in the text.
- **Improved ability to reference the source**. Adding the page number of the source file to the metadata for each chunk can help track an information source in lengthy documents.

## Prerequisites

- Cognigy.AI 4.71 or later is deployed. This feature works differently depending on the [version you're using](#how-to-use).

## Supported Formats

| Cognigy.AI versions | Formats                                                                                 |
|---------------------|-----------------------------------------------------------------------------------------|
| 4.80 or later       | `.pdf`, `.docx`, `.pptx`, `.txt`[^*], `.jpeg`, `.jpg`, `.png`, `.bmp`, `.heif`, `.tiff` |
| 4.79                | `.pdf`, `.docx`, `.pptx`, and `.txt`[^*]                                                |
| 4.71-4.78           | `.pdf` and `.docx`                                                                      |
| 4.71 or earlier     | `.pdf`                                                                                  |

[^*]: `.txt` files are internally handled by the Basic Parser.

## Availability

This feature is available in the following environments:

- Trial.
- Dedicated and shared SaaS.
- [On-premises](#on-premises). To use this feature, set up an Azure AI Document Intelligence connection and provide an API key.

### On-Premises

The feature configuration varies depending on which version you are using:

- [Cognigy.AI 4.80 or Later](#cognigyai-480-or-later)
- [Cognigy.AI 4.79 or Earlier](#cognigyai-479-or-earlier)

#### Cognigy.AI 4.80 or Later

To start using the Advanced Parser and set it as the default option, add the following parameters under the `knowledgeSearch` section in the `cognigy-ai-values.yaml` file:

```yaml
knowledgeSearch:
  enabled: true

  gloabalAzureDocumentIntelligenceConfig:
    enabled: true
    apiKey: "<your API key>"
    endpointUrl: "<your endpoint URL>"
```

Replace `<your API key>` with your Azure AI Document Intelligence API key and `<your endpoint URL>` with your Azure AI Document Intelligence endpoint URL.

#### Cognigy.AI 4.79 or Earlier

To start using the Advanced Parser and set it as the default option, specify the following environment variables in the ` cognigy-ai-values.yaml` file:

- `FEATURE_ENABLE_AZURE_DOCUMENT_INTELLIGENCE_ORG_WHITELIST`:
    - This variable should be set to a comma-separated list of organization IDs for which the feature should be enabled. For example: `FEATURE_ENABLE_AZURE_DOCUMENT_INTELLIGENCE_ORG_WHITELIST: "org1,org2,org3"`.
    - If the feature should be enabled for all organizations, the value can be set to `"*"`.
- `AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT`. The endpoint URL for the Azure AI Document Intelligence service. To copy the URL, go to the Azure portal. On the left-side menu, select **Resource Management > Key and Endpoint**. Copy the endpoint URL from the **Endpoint** field. For more information, read the [Azure](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/create-document-intelligence-resource?view=doc-intel-4.0.0#get-endpoint-url-and-keys) documentation.
- `AZURE_DOCUMENT_INTELLIGENCE_APIKEY`. Your API key for the Azure AI Document Intelligence service. To copy the key, go to the Azure portal. On the left-side menu, select **Resource Management > Key and Endpoint**. Copy the key from the **Key** field. For more information, read the [Azure](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/create-document-intelligence-resource?view=doc-intel-4.0.0#get-endpoint-url-and-keys) documentation.

## Text Extraction

The text extraction process involves analyzing a document to identify key areas and understand their interrelationships. 
During this process, the Advanced Parser recognizes both textual and structural elements in the uploaded document. 
These types of elements include:

- **Semantic Elements**. These elements define the meaning and structure of the text, such as titles, headings, and footers.
- **Content Elements**. These elements represent various types of content on the page, including text, tables, images, checkmarks, numbered and bulleted lists.

The following illustration shows the typical elements that can be recognized by the Advanced Parser and converted to Markdown.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/empower/knowledge-ai/text-extraction/advanced-parser.png" width="100%" />
</figure>

Depending on the [file format](#supported-formats), elements may be recognized differently.
Also, the text extraction process can be influenced by the program that was used to create the original document. 
For example, if you created a DOCX file in Google Docs, the parsing results might be of lower quality compared to the same document created in Microsoft Word.

### Metadata

{! _includes/ai/knowledge-ai/metadata.md !}

In the Chunk Editor, each chunk has a metadata object that indicates the number of the source page where this information was located.
The presence of page numbers in the metadata means that the text extraction feature works correctly.
However, the absence of page numbers suggests an error in file processing by the Advanced Parser.

In the example below, the metadata object indicates that the chunk's text starts on source file page 1 and ends on page 2.

```txt
{
  "firstPage": "1",
  "lastPage": "2"
}
```

## How to Use

The feature usage varies depending on which version you are using:

- [Cognigy.AI 4.79 or later](#cognigyai-479-or-later)
- [Cognigy.AI 4.71-4.78](#cognigyai-471-478)
- [Cognigy.AI 4.71 and earlier](#cognigyai-471-and-earlier)

### Cognigy.AI 4.79 or Later

The Advanced Parser is used by default for text extraction.

To use this feature, follow these steps:

1. In your Project, navigate to **Build > Knowledge**.
2. Open the existing Knowledge Store or create a new one.
3. On the **Knowledge Store** page, click **+ New Knowledge Sources** in the upper-left corner.
4. In the **New Knowledge Sources** window, select **File (advanced)**. The lable `advanced` means that you will be using the Advanced Parser for text extraction. 
5. Drag and drop a `.pdf`, `.docx`, or `.pptx` file, or click **Browse Files** to select a file from your computer.
6. Click **Create**. Note that by clicking **Create** you accept the [Cognigy.AI Additional Data Privacy Terms](https://www.cognigy.com/additional-privacy-terms).

#### Deactivate the Feature

If you don't want to use the Advanced Parser for text extraction, follow these steps:

1. In your Project, navigate to **Manage > Settings**.
2. On the **Settings** page, go to **Knowledge AI Settings > Document Processing**.
3. From the **Content Parser** list, select **Basic**.
4. Click **Save**.

### Cognigy.AI 4.71-4.78

The Advanced Parser is used when `.preset_ca` is appended to the file name of an uploaded file. For example, `cognigy.preset_ca.pdf`, where `cognigy` is the initial file name,
`.preset_ca` is the preset to apply the text extraction, and `.pdf` is the file extension.

### Cognigy.AI 4.71 and Earlier

The Advanced Parser is used as the [Alternative Chunk strategy](../pdf.md#alternative-chunk-strategy) and only for PDF files.
The Advanced Parser is applied when `cognigy.preset_uiolc_ls.pdf` is appended to the file name of an uploaded file. For example, `cognigy.preset_uiolc_ls.pdf`, where `cognigy` is the initial file name,
`.preset_uiolc_ls` is the preset to apply the Alternative Chunk Strategy, and `.pdf` is the file extension.

## More Information

- [Text Extraction with Content Parsers](overview.md)
- [Text Extraction with the Basic Parser](text-extraction-with-basic-parser.md)
- [Text Extraction with Azure AI Document Intelligence](text-extraction-with-azure-ai.md)