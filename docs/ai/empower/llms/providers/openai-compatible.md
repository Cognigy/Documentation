---
title: "OpenAI-Compatible LLMs"
slug: "openai-compatible"
description: "To start using an OpenAI LLM with Cognigy.AI features, add the LLM and apply it to the corresponding use case."
hidden: false
tags:
  - llms
  - openai compatible
  - openai compatible llms
---

# OpenAI-Compatible LLMs

[![Version badge](https://img.shields.io/badge/Added in-v4.97-blue.svg)](../../../../release-notes/4.97.md)

!!! warning
    You are subject to the terms and conditions of the third-party LLM providers you are using.

To start using an OpenAI-compatible model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-a-model)
2. [Apply the Model](#apply-the-model)

## Add a Model

You can add a model using one of the following interfaces:

- [GUI](#add-a-model-via-gui)
- [API](#add-a-model-via-api)

### Add a Model via GUI

You can add a model compatible with OpenAI's API standards to Cognigy.AI in **Build > LLM**. To add the model, you will need the following parameters:

| Parameter  | Description                                                                                                                                                                                                                                                                                                                                                                                                              |
|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| apiKey     | Add an API Key from the respective provider.                                                                                                                                                                                                                                                                                                                                                                             |
| Model      | Select **Custom Model**.                                                                                                                                                                                                                                                                                                                                                                                                 |
| Model Type | Select **Chat** for a model compatible with the `https://api.openai.com/v1/chat/completions` API, Completion for one compatible with the `https://api.openai.com//v1/completions` API, and Embedding for one compatible with the `https://api.openai.com//v1/embeddings` API. For more information, refer to the [OpenAI Text Generation Models](https://platform.openai.com/docs/guides/text-generation) documentation. |
| Model Name | Enter the name of the model supported by the respective provider. To find model names, refer to the LLM provider's documentation.                                                                                                                                                                                                                                                                                        |
| Base URL   | Enter the base URL of the LLM provider. For example, `https://api-inference.huggingface.co/v1/` for Hugging Face.                                                                                                                                                                                                                                                                                                        |

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