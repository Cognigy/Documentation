---
title: "OpenAI"
slug: "openai"
description: "To start using an OpenAI LLM with Cognigy.AI features, add the LLM and apply it to the corresponding use case."
hidden: false
---

# OpenAI

To start using an OpenAI model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-a-model)
2. [Apply the Model](#apply-the-model)

## Add a Model

To add a model provided by OpenAI to Cognigy.AI, follow these steps:

1. In the left-side menu of the Project, go to **Build > LLM**.
2. Click **+New LLM**.
3. In the **New LLM** window, select a model from the **Model Type** list.
4. Add a unique name and description for your model.
5. From the **Provider** list, select an LLM's provider:<br>
    1. From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
        - **Model Type** — select **Chat** for the `https://api.openai.com/v1/chat/completions` API, Completion for the `https://api.openai.com//v1/completions` API, and Embedding for the `https://api.openai.com//v1/embeddings` API. For more information, refer to the [OpenAI Text Generation Models](https://platform.openai.com/docs/guides/text-generation) documentation.<br>
        - **Model Name** — specify a name of the model that you want to use as a custom. To find model names, refer to the [Azure OpenAI Service models](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) documentation.<br>
    2. Click **Save**.<br>
    3. On the LLM Editor page, go to the **Generative AI Connection** field.<br>
    4. On the right side of the field, click **+**.<br>
    5. Fill in the following fields:<br>
        - **Connection name** — create a unique name for your connection.<br>
        - **apiKey** — add an API Key from your OpenAI account. You can find this key in the [User settings](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key) of your OpenAI account.<br>
    6. Click **Create**.<br>

6. To apply changes, click **Save**.
7. To check if the connection was set up, click **Test**.

When the model is added, you will see it in the list of models.

To apply this model for Cognigy.AI features, go to the settings by clicking **Manage LLM Features**.

## Apply the Model

{! _includes/ai/generative-ai/apply-model.md !}


## More Information

- [Other LLM Operations](../other-operations.md)
- [Overview](../overview.md)
- [All LLM Providers](all-providers.md)
- [Model support by feature](../model-support-by-feature.md)
- [Azure OpenAI](microsoft-azure-openai.md)