---
title: "Mistral AI"
slug: "mistral-ai"
description: "To start using an Mistral AI LLM with Cognigy.AI features, add the LLM and apply it to the corresponding use case."
hidden: false
tags:
  - llms
  - mistral
  - mistral models
---

# Mistral AI

To start using a Mistral AI model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-models)
2. [Apply the Model](#apply-the-model)

## Add Models

You can add a model using one of the following interfaces:

- [GUI](#add-models-via-gui)
- [API](#add-models-via-the-api)

### Add Models via GUI

You can add a model provided by Mistral AI to Cognigy.AI in **Build > LLM**. To add the model, you will need the following parameters:

=== "Standard Model"

    !!! note
        The `*-latest` suffix indicates that the model you select points to the latest version of the model. For more information, read the [Mistral AI's models](https://docs.mistral.ai/getting-started/models/models_overview/) documentation.

    | Parameter  | Description                                                                                                                                                                   |
    |------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | API Key    | Add the API Key that you [generated](https://docs.mistral.ai/getting-started/quickstart/) under **API > API Keys** in your [Mistral AI](https://console.mistral.ai/) account. |

=== "Custom Model"

    | Parameter  | Description                                                                                                                                                                    |
    |------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Model Type | Select **Completion**.                                                                                                                                                         |
    | Model Name | Enter the name of the model that you want to use as a custom model. To find model names, refer to the [Mistral AI models](https://docs.mistral.ai/models-overview) documentation. |
    | API Key    | Add the API Key that you [generated](https://docs.mistral.ai/getting-started/quickstart/) under **API > API Keys** in your [Mistral AI](https://console.mistral.ai/) account.  |

Apply changes. Check if the connection was set up by clicking **Test**.

{! _includes/ai/generative-ai/add-model-via-api.md !}

## Apply the Model

{! _includes/ai/generative-ai/apply-model.md !}

## More Information

- [Other LLM Operations](../other-operations.md)
- [Overview](../overview.md)
- [All LLM Providers](all-providers.md)
- [Model support by feature](../model-support-by-feature.md)