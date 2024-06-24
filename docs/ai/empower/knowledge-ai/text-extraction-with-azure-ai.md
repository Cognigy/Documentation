---
title: "Text Extraction with Azure AI Document Intelligence"
slug: "text-extraction-with-azure-ai"
description: "Text Extraction with Azure AI Document Intelligence creates semantic chunks, resulting in more accurate answers compared to the default fixed-length chunking."
hidden: false
---

# Text Extraction with Azure AI Document Intelligence

!!! note
    - This feature is currently in Preview. We encourage you to try it out and provide us with feedback.
	- By using Azure AI Document Intelligence in Cognigy.AI, you are accepting the [Cognigy.AI Additional Data Privacy Terms](https://www.cognigy.com/additional-privacy-terms).
    - Azure AI Document Intelligence stores data and results on Azure Storage for 24 hours from the time you submit an analyze request. To learn more about data, privacy, and security for Document Intelligence, read the [Azure AI Document Intelligence](https://learn.microsoft.com/en-us/legal/cognitive-services/document-intelligence/data-privacy-security) documentation.

_Text Extraction with [Azure AI Document Intelligence](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/)_ creates semantic chunks, resulting in more accurate answers compared to the default fixed-length chunking.

When this feature is enabled and you upload a file as a Knowledge Source, Cognigy automatically sends a request to the Azure AI Document Intelligence platform.
This request prompts the platform to extract text from the file. Once the platform finishes processing the file, Cognigy retrieves the preprocessed result.
This result is then converted to Markdown format and segmented into chunks for easier handling.

The chunk strategy powered by Azure AI Document Intelligence has the following advantages:

- **Improved quality of responses**. Breaking down the text into blocks of meaning allows the virtual agent to more accurately understand the context and find the necessary information to formulate a higher-quality response.
- **Effective use of Markdown**. The extracted text is presented in Markdown format in the Chunk editor. Markdown allows the virtual agent to recognize headers, tables, images, links, and differentiate them from a regular text. This approach adds an additional level of context, helping the virtual agent better understand the structure and organization of information in the text.
- **Improved ability to reference the source**. Adding the page number of the source file to the metadata for each chunk can help track an information source in lengthy documents.

## Prerequisites

- Cognigy.AI 4.71 or later is deployed. This feature works differently depending on the [version you're using](#how-to-use).

## Supported Formats

| Cognigy.AI versions | Formats                                  |
|---------------------|------------------------------------------|
| 4.79 or later       | `.pdf`, `.docx`, `.pptx`, and `.txt`[^*] |
| 4.71-4.78           | `.pdf` and `.docx`                       |

[^*]: `.txt` files are not supported for text extraction by Azure Document Intelligence, but Cognigy's internal parser can handle them.

## Availability

This feature is available in the following environments:

- Trial.
- Dedicated and shared SaaS.
  Only for a limited number of customers.
  If you want to use this feature, contact [Cognigy technical support](https://docs.cognigy.com/help/get-help/).
- [On-premises](#on-premises). To use this feature, set up Azure AI Document Intelligence connection and provide an API key.

### On-Premises

The following environment variables must be specified in the `values.yaml` file to enable the feature:

- `FEATURE_ENABLE_AZURE_DOCUMENT_INTELLIGENCE_ORG_WHITELIST`:
    - This variable should be set to a comma-separated list of organization IDs for which the feature should be enabled. For example: `FEATURE_ENABLE_AZURE_DOCUMENT_INTELLIGENCE_ORG_WHITELIST: "org1,org2,org3"`.
    - If the feature should be enabled for all organizations, the value can be set to `"*"`.
- `AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT`. The endpoint URL for the Azure AI Document Intelligence service. To copy the URL, go to the Azure portal, on the left-side menu, select **Resource Management > Key and Endpoint**. Copy the endpoint URL from the **Endpoint** field. For more information, read the [Azure](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/sdk-overview-v4-0?view=doc-intel-4.0.0&tabs=csharp#use-an-azure-active-directory-azure-ad-token-credential) documentation.
- `AZURE_DOCUMENT_INTELLIGENCE_APIKEY`. Your API key for the Azure AI Document Intelligence service. To copy the key, go to the Azure portal, on the left-side menu, select **Resource Management > Key and Endpoint**. Copy the key from the **Key** field. For more information, read the [Azure](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/sdk-overview-v4-0?view=doc-intel-4.0.0&tabs=csharp#use-an-azure-active-directory-azure-ad-token-credential) documentation.

## How to Use

The feature usage varies depending on which version you are using:

- [Cognigy.AI 4.79 or later](#cognigyai-479-or-later)
- [Cognigy.AI 4.71-4.78](#cognigyai-471-478)

### Cognigy.AI 4.79 or Later

If the Text Extraction with Azure AI Document Intelligence feature is enabled in your environment,
this feature will automatically handle text extraction.

To use this feature, follow these steps:

1. In your Project, navigate to **Build > Knowledge**.
2. Open the existing Knowledge Store or create a new one.
3. On the Knowledge Store page, click **+ New Knowledge Sources** in the upper-left corner.
4. In the **New Knowledge Sources** window, select **File (advanced)**. The lable `advanced` means that you will be using Azure AI Document Intelligence for text extraction. 
5. Drag and drop a `.pdf`, `.docx`, or `.pptx` file, or click **Browse Files** to select a file from your computer.
6. Click **Create**. Note that by clicking **Create** you accept the [Cognigy.AI Additional Data Privacy Terms](https://www.cognigy.com/additional-privacy-terms).

#### Deactivate the Feature

If you don't want to use Azure AI Document Intelligence for text extraction, follow these steps:

1. In your Project, navigate to **Manage > Settings**.
2. Go to the **Knowledge AI Settings** section.
3. From the **File Extractor** filed, select **Basic (local parser)**.
4. Click **Save**.

### Cognigy.AI 4.71-4.78

Azure AI Document Intelligence is used when `.preset_ca` is appended to the file name of an uploaded file. For example, `cognigy.preset_ca.pdf`, where `cognigy` is the initial file name,
`.preset_ca` is the preset to apply the text extraction, and `.pdf` is the file extension.

## Metadata

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

- [Knowledge Source](overview.md#knowledge-source)
- [PDF](pdf.md)