---
title: "Text Extraction with Azure AI Document Intelligence"
slug: "text-extraction-with-azure-ai"
description: "Text Extraction with Azure AI Document Intelligence creates semantic chunks, resulting in more accurate answers compared to the default fixed-length chunking."
hidden: false
---

# Text Extraction with Azure AI Document Intelligence

!!! note
    - This feature is currently in Preview. We encourage you to try it out and provide us with feedback.
	- By using Azure AI Document Intelligence for File Extraction, you are accepting the [Cognigy.AI Additional Data Privacy Terms](https://www.cognigy.com/additional-privacy-terms).
    - Azure AI Document Intelligence stores data and results on Azure Storage for 24 hours from the time you submit an analyze request. To learn more about data, privacy, and security for Document Intelligence, read the [Azure AI Document Intelligence](https://learn.microsoft.com/en-us/legal/cognitive-services/document-intelligence/data-privacy-security) documentation.

_Text Extraction with [Azure AI Document Intelligence](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/)_ creates semantic chunks, resulting in more accurate answers compared to the default fixed-length chunking.

If Azure AI Document Intelligence is available in your environment, Cognigy automatically sends a request to the Azure AI Document Intelligence platform.
This request prompts the platform to extract text from the file. Once the platform finishes processing the file, Cognigy retrieves the preprocessed result.
This result is then converted to Markdown format and segmented into chunks for easier handling.


The chunk strategy powered by Azure AI Document Intelligence has the following advantages:

- **Improved quality of responses**. Breaking down the text into blocks of meaning allows the virtual agent to more accurately understand the context and find the necessary information to formulate a higher-quality response.
- **Effective use of Markdown**. The extracted text is presented in Markdown format in the Chunk editor. Markdown allows the virtual agent to recognize headers, tables, images, links, and differentiate them from a regular text. This approach adds an additional level of context, helping the virtual agent better understand the structure and organization of information in the text.
- **Improved ability to reference the source**. Adding the page number of the source file to the metadata for each chunk can help track an information source in lengthy documents.

## Supported Formats

Only files in `PDF`, `DOCX` and `PPTX` formats are supported. 

## Availability

This feature is available in the following environments:

- Trial.
- Dedicated and shared SaaS.
  Only for a limited number of customers.
  If you want to use this feature, contact [Cognigy technical support](https://docs.cognigy.com/help/get-help/).
- [On-premises](#on-premises). To use this feature, set up Azure AI Document Intelligence connection and provide an API key.

### On-Premises

#### Prerequisites

- Cognigy.AI 4.71 is deployed. (Note: If you are below Cognigy.AI 4.79, you will have to upload files with a suffix in the file name. See "How to Use" section below.)

#### Environment Variables

The following environment variables must be specified in the `values.yaml` file to enable the feature:

- `FEATURE_ENABLE_AZURE_DOCUMENT_INTELLIGENCE_ORG_WHITELIST`:
    - This variable should be set to a comma-separated list of organization IDs for which the feature should be enabled. For example: `FEATURE_ENABLE_AZURE_DOCUMENT_INTELLIGENCE_ORG_WHITELIST: "org1,org2,org3"`.
    - If the feature should be enabled for all organizations, the value can be set to `"*"`.
- `AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT`. The endpoint URL for the Azure AI Document Intelligence service. To copy the URL, go to the Azure portal, on the left-side menu, select **Resource Management > Key and Endpoint**. Copy the endpoint URL from the **Endpoint** field. For more information, read the [Azure](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/sdk-overview-v4-0?view=doc-intel-4.0.0&tabs=csharp#use-an-azure-active-directory-azure-ad-token-credential) documentation.
- `AZURE_DOCUMENT_INTELLIGENCE_APIKEY`. Your API key for the Azure AI Document Intelligence service. To copy the key, go to the Azure portal, on the left-side menu, select **Resource Management > Key and Endpoint**. Copy the key from the **Key** field. For more information, read the [Azure](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/sdk-overview-v4-0?view=doc-intel-4.0.0&tabs=csharp#use-an-azure-active-directory-azure-ad-token-credential) documentation.

## How to Use

#### Cognigy.AI v4.79+
If Azure AI Document Intelligence is configured in your environment, it will automatically be used for File Extraction. You can recognize this by looking at the Tag behind "File" in the Type Select field when creating a new Knowledge Source. If the Tag reads "Advanced", you will be using Azure AI Document Intelligence for File Extraction.

If you don't want to use Azure AI Document Intelligence for File Extraction, go to your Agent's Knowledge AI Settings and set the File Extractor option to "Basic (local parser)".

#### Cognigy.AI versions 4.71-4.78:
Azure AI Document Intelligence is used when `.preset_ca` is appended to the file name of an uploaded file. For example, `cognigy.preset_ca.pdf`, where `cognigy` is the initial file name,
`.preset_ca` is the preset to apply the text extraction, and `.pdf` is the file extension.

### Cognigy.AI Additional Data Privacy Terms
By using Azure AI Document Intelligence for File Extraction, you are accepting the [Cognigy.AI Additional Data Privacy Terms](https://www.cognigy.com/additional-privacy-terms).

### Metadata

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