---
title: "OpenAI"
slug: "openai"
description: "To start using an OpenAI LLM with Cognigy.AI features, add the LLM and apply it to the corresponding use case."
hidden: false
tags:
  - llms
  - OpenAI
  - OpenAI models
---

# OpenAI

To start using an OpenAI model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-a-model)
2. [Apply the Model](#apply-the-model)

## Add a Model

You can add a model using one of the following interfaces:

- [GUI](#add-a-model-via-gui)
- [API](#add-a-model-via-api)

### Add a Model via GUI

You can add a model provided by OpenAI to Cognigy.AI in **Build > LLM**. To add the model, you will need the following parameters:

=== "Standard Model"

    | Parameter | Description                                                                                                                                                                                  |
    |-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | apiKey    | Add an API Key from your OpenAI account. You can find this key in the [User settings](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key) of your OpenAI account. |

=== "Custom Model"

    | Parameter  | Description                                                                                                                                                                                                                                                                                                                                              |
    |------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Model Type | Select **Chat** for the `https://api.openai.com/v1/chat/completions` API, Completion for the `https://api.openai.com//v1/completions` API, and Embedding for the `https://api.openai.com//v1/embeddings` API. For more information, refer to the [OpenAI Text Generation Models](https://platform.openai.com/docs/guides/text-generation) documentation. |
    | Model Name | Enter the name of the model that you want to use as a custom model. To find model names, refer to the [Azure OpenAI Service models](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models) documentation.<br>                                                                                                                             |
    | apiKey     | Add an API Key from your OpenAI account. You can find this key in the [User settings](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key) of your OpenAI account.                                                                                                                                                             |
    

Apply changes. Check if the connection was set up by clicking **Test**.

{! _includes/ai/generative-ai/add-model-via-api.md !}

## Apply the Model

{! _includes/ai/generative-ai/apply-model.md !}

## More Information

- [Other LLM Operations](../other-operations.md)
- [Overview](../overview.md)
- [All LLM Providers](all-providers.md)
- [Model support by feature](../model-support-by-feature.md)
- [Azure OpenAI](microsoft-azure-openai.md)