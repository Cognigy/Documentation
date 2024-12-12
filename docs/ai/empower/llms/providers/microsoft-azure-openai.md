---
title: "Microsoft Azure OpenAI"
slug: "microsoft-azure-openAI"
description: "To start using a Microsoft Azure OpenAI LLM with Cognigy.AI features, add the LLM and apply it to the corresponding use case."
hidden: false
---

# Microsoft Azure OpenAI

[![Version badge](https://img.shields.io/badge/Updated in-v4.90-blue.svg)](../../../../release-notes/4.90.md)

To start using a Microsoft Azure OpenAI model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-a-model)
2. [Apply the Model](#apply-the-model)

## Add a Model

To add a model provided by Microsoft Azure OpenAI to Cognigy.AI, follow these steps:

1. Open the Cognigy.AI interface.
2. Go to **Build > LLM**.
3. Click **+New LLM**.
4. In the **New LLM** window, select a model from the **Model Type** list.
5. Add a unique name and description for your model.
6. From the **Provider** list, select an LLM's provider:<br>
    1. From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
        - **Model Type** — select **Chat** for models that support the Chat Completions API, **Completion** for the Completions API, or **Embedding** for the Embedding API. For more information, refer to the [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) documentation.<br>
        - **Model Name** — specify an ID of the model that you want to use as a custom. To find model IDs, refer to the [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) documentation.<br>
    2. Click **Save**.<br>
    3. On the LLM Editor page, go to the **Generative AI Connection** field.<br>
    4. On the right side of the field, click **+**.<br>
    5. In the **Connection name**, enter a unique name for your connection.<br>
    6. From the **Connection Type** list, select one of the following authorization methods:<br>
        - **API Key** — add an [Azure API Key](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/quickstart?tabs=command-line&pivots=rest-api#retrieve-key-and-endpoint). This value can be found in the **Keys & Endpoint** section when examining your resource from the Azure portal. You can use either `KEY1` or `KEY2`.<br>
        - **OAuth2** — this method is experimental, hidden behind the `FEATURE_ENABLE_OAUTH2_AZURE_CONNECTION_WHITELIST` feature flag, and may encounter some issues. Add credentials for the [OAuth 2.0 authorization code flow](https://learn.microsoft.com/en-us/entra/identity-platform/v2-oauth2-auth-code-flow). OAuth 2.0 offers more control and security than API keys by allowing specific permissions, expiring tokens, and reducing exposure through short-lived tokens instead of constant client secret use. To use this type of connection, fill in the following fields:<br>
            - **Client ID** — add the Application (client) ID assigned to your app, can be found in the in Azure AI app registration overview.<br>
            - **Client Secret** — add the application secret created in the **Certificates & secrets** section of the Azure AI app registration portal.<br>
            - **OAuth URL** — add the URL to retrieve the access token. The URL should be in the `https://<your-domain>.com/as/token.oauth2` format.<br>
            - **Scope** — add a list of scopes for user permissions, for example, `urn:grp:chatgpt`. <br>
    7. Click **Create**.<br>
    8. Fill in the remaining fields:<br>
        - **Resource Name** — add a [resource name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource). To find this value, go to the **Microsoft Azure** home page. Under **Azure services**, click **Azure OpenAI**. In the left-side menu, under the **Azure AI Services** section, select **Azure Open AI**. Copy the desired resource name from the **Name** column.<br>
        - **Deployment Name** — add a [deployment name](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#deploy-a-model). To find this value, go to the **Microsoft Azure** home page. Under **Azure services**, click **Azure OpenAI**. In the left-side menu, under the **Azure AI Services** section, select **Azure Open AI**. Select a resource from the **Name** column. On the resource page, go to **Resource Management > Model deployments**. On the **Model deployments** page, click **Manage Deployments**. On the **Deployments** page, copy the desired deployment name from the **Deployment name** column.<br>
        - **Api Version** — add an [API version](https://learn.microsoft.com/en-us/azure/cognitive-services/openai/reference#rest-api-versioning). The API version to use for this operation in the `YYYY-MM-DD` format. Note that the version may have an extended format, for example, `YYYY-MM-DD-preview`. <br>
        - **Custom URL** — this parameter is optional. To control the connection between your clusters and the Azure OpenAI provider, you can route connections through dedicated proxy servers, creating an additional layer of security. To do this, specify the URL in the following pattern:`https://<resource-name>.openai.azure.com/openai/deployments/<deployment-name>/<model-type>?api-version=<api-verson>`. When a Custom URL is added, the **Resource Name**, **Deployment Name**, and **API Version** fields will be ignored.

7. To apply changes, click **Save**.
8. To check if the connection was set up, click **Test**.

When the model is added, you will see it in the list of models.

To apply this model for Cognigy.AI features, go to the settings by clicking **Manage LLM Features**.

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