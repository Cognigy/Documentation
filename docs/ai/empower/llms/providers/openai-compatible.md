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

[![Version badge](https://img.shields.io/badge/Added in-v2025.12-blue.svg)](../../../../release-notes/2025.12.md)

!!! warning
    You are subject to the terms and conditions of the third-party LLM providers you are using.

To start using an OpenAI-compatible model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-models)
2. [Apply the Model](#apply-the-model)

## Restrictions

- In Cognigy.AI, OpenAI-compatible models don't support **Completion** and **Embedding** model types.

## Add Models

You can add a model using one of the following interfaces:

- [GUI](#add-models-via-gui)
- [API](#add-models-via-the-api)

### Add Models via GUI

You can add a model compatible with OpenAI's API standards to Cognigy.AI in **Build > LLM**. To add the model, you will need the following parameters:

| Parameter                         | Description                                                                                                                                                                                                                                                                                                                                                                                                            |
|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| apiKey                            | Add an API Key from the respective provider.                                                                                                                                                                                                                                                                                                                                                                           |
| Model                             | Select **Custom Model**.                                                                                                                                                                                                                                                                                                                                                                                               |
| Model Type                        | Select **Chat** for a model compatible with the `https://api.openai.com/v1/chat/completions` API. For more information, refer to the [OpenAI Text Generation Models](https://platform.openai.com/docs/guides/text-generation) documentation.                                                                                                                                                                           |
| Model Name                        | Enter the name of the model supported by the respective provider. To find model names, refer to the LLM provider's documentation.                                                                                                                                                                                                                                                                                      |
| Base URL                          | Enter the base URL of the LLM provider. For example, `https://api-inference.huggingface.co/v1/` for Hugging Face.                                                                                                                                                                                                                                                                                                      |
| Custom Authentication Header Name | Enter the name of a custom HTTP header for authentication, such as `X-Custom-Auth`. This parameter is helpful when integrating with OpenAI-compatible models or third-party APIs that don't accept the standard `Authorization` header. Instead of sending the API key as `Authorization: Bearer <your-api-key>`, the system will send it using your custom header name. For example, `X-Custom-Auth: <your-api-key>`. |

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