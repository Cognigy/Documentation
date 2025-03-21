---
title: "Microsoft Azure OpenAI"
slug: "microsoft-azure-openAI"
description: "To start using a Microsoft Azure OpenAI LLM with Cognigy.AI features, add the LLM and apply it to the corresponding use case."
hidden: false
tags:
  - llms
  - Microsoft Azure OpenAI
  - Microsoft Azure OpenAI models
---

# Microsoft Azure OpenAI

[![Version badge](https://img.shields.io/badge/Updated in-v4.90-blue.svg)](../../../../release-notes/4.90.md)

To start using a Microsoft Azure OpenAI model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-a-model)
2. [Apply the Model](#apply-the-model)

## Add a Model

You can add a model using one of the following interfaces:

- [GUI](#add-a-model-via-gui)
- [API](#add-a-model-via-api)

### Add a Model via GUI

You can add a model provided by Azure OpenAI to Cognigy.AI in **Build > LLM**. To add the model, you will need the following parameters:

=== "Standard Model"

    | Parameter       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    |-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | API Key         | Enter the [Azure API Key](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quickstart?tabs=command-line&pivots=rest-api#retrieve-key-and-endpoint). This value can be found in the **Keys & Endpoint** section when examining your resource from the Azure portal. You can use either `KEY1` or `KEY2`.                                                                                                                                                                                                                                                                                                                      |
    | Resource Name   | Enter the [resource name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource). To find this value, go to the **Microsoft Azure** home page. Under **Azure services**, click **Azure OpenAI**. In the left-side menu, under the **Azure AI Services** section, select **Azure Open AI**. Copy the desired resource name from the **Name** column.                                                                                                                                                                                                                    |
    | Deployment Name | Enter the [deployment name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#deploy-a-model). To find this value, go to the **Microsoft Azure** home page. Under **Azure services**, click **Azure OpenAI**. In the left-side menu, under **Azure AI Services**, select **Azure Open AI**. Select a resource from the **Name** column. On the resource page, go to **Resource Management > Model deployments**. On the **Model deployments** page, click **Manage Deployments**. On the **Deployments** page, copy the desired deployment name from the **Deployment name** column. |
    | API Version     | Enter the [API version](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/reference#rest-api-versioning). The API version to use for this operation in the `YYYY-MM-DD` format. Note that the version may have an extended format, for example, `YYYY-MM-DD-preview`.                                                                                                                                                                                                                                                                                                                                                         |
    | Custom URL      | This parameter is optional. To control the connection between your clusters and the Azure OpenAI provider, you can route connections through dedicated proxy servers, creating an additional layer of security. To do this, specify the URL in the following pattern: `https://<resource-name>.openai.azure.com/openai/deployments/<deployment-name>/<model-type>?api-version=<api-version>`. When a Custom URL is added, the **Resource Name**, **Deployment Name**, and **API Version** fields will be ignored.                                                                                                                             |


=== "Custom Model"

    | Parameter       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    |-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Model Type      | Select **Chat** for models that support the Chat Completions API, **Completion** for the Completions API, or **Embedding** for the Embedding API. For more information, refer to the [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) documentation.                                                                                                                                                                                                                                                                                                                                                |
    | Model Name      | Enter the ID of the model that you want to use as a custom model. To find model IDs, refer to the [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) documentation.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | API Key         | Enter the [Azure API Key](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quickstart?tabs=command-line&pivots=rest-api#retrieve-key-and-endpoint). This value can be found in the **Keys & Endpoint** section when examining your resource from the Azure portal. You can use either `KEY1` or `KEY2`.                                                                                                                                                                                                                                                                                                                      |
    | Resource Name   | Enter the [resource name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource). To find this value, go to the **Microsoft Azure** home page. Under **Azure services**, click **Azure OpenAI**. In the left-side menu, under the **Azure AI Services** section, select **Azure Open AI**. Copy the desired resource name from the **Name** column.                                                                                                                                                                                                                    |
    | Deployment Name | Enter the [deployment name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#deploy-a-model). To find this value, go to the **Microsoft Azure** home page. Under **Azure services**, click **Azure OpenAI**. In the left-side menu, under **Azure AI Services**, select **Azure Open AI**. Select a resource from the **Name** column. On the resource page, go to **Resource Management > Model deployments**. On the **Model deployments** page, click **Manage Deployments**. On the **Deployments** page, copy the desired deployment name from the **Deployment name** column. |
    | API Version     | Enter the [API version](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/reference#rest-api-versioning). The API version to use for this operation in the `YYYY-MM-DD` format. Note that the version may have an extended format, for example, `YYYY-MM-DD-preview`.                                                                                                                                                                                                                                                                                                                                                         |
    | Custom URL      | This parameter is optional. To control the connection between your clusters and the Azure OpenAI provider, you can route connections through dedicated proxy servers, creating an additional layer of security. To do this, specify the URL in the following pattern: `https://<resource-name>.openai.azure.com/openai/deployments/<deployment-name>/<model-type>?api-version=<api-version>`. When a Custom URL is added, the **Resource Name**, **Deployment Name**, and **API Version** fields will be ignored.                                                                                                                             |

Apply changes. Check if the connection was set up by clicking **Test**.

{! _includes/ai/generative-ai/add-model-via-api.md !}

### Deprecation of Old Connections for Microsoft Azure OpenAI

In recent releases, we have updated the connection settings to Microsoft Azure OpenAI models.

If you have old connections (for example, created in the 4.53 release) to Azure OpenAI,
these connections have an `AzureOpenAIProvider` type and are marked with a **Deprecated** label.
Although these connections can still be active,
we strongly recommend creating a model with the new `AzureOpenAIProviderV2` type,
as old connection types will no longer be available in the future.

Note that for some Microsoft Azure OpenAI models, such as `text-embedding-ada-002` for knowledge search features, you might encounter the following error when an LLM is triggered:
`Error while performing knowledge search. Remote returned error: Search failed: Could not fetch embeddings due to missing API resource name for Azure OpenAI`.
To resolve the issue, recreate the model and the connection so that both are updated to the latest format.

## Apply the Model

{! _includes/ai/generative-ai/apply-model.md !}

## More Information

- [Other LLM Operations](../other-operations.md)
- [Overview](../overview.md)
- [All LLM Providers](all-providers.md)
- [Model support by feature](../model-support-by-feature.md)
- [OpenAI](openai.md)