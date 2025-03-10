---
title: "Aleph Alpha"
slug: "aleph-alpha"
description: "To start using an Aleph Alpha LLM with Cognigy.AI features, add the LLM and apply it to the corresponding use case."
hidden: false
tags:
  - Aleph Alpha
  - llms
  - Aleph Alpha models
---

# Aleph Alpha

To start using an Aleph Alpha model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-a-model)
2. [Apply the Model](#apply-the-model)

## Add a Model

You can add a model using one of the following interfaces:

- [GUI](#add-a-model-via-gui)
- [API](#add-a-model-via-the-api)

### Add a Model via GUI

You can add a model provided by Aleph Alpha to Cognigy.AI in **Build > LLM**. To add the model, you will need the following parameters:

=== "Standard Model"

    | Parameter  | Description                                                                                                                                                                                                                                                                                  |
    |------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Token      | Enter the key that you created in your [Aleph Alpha account](https://docs.aleph-alpha.com/).                                                                                                                                                                                                   |
    | Custom URL | This parameter is optional. To control the connection between your clusters and the Aleph Alpha provider, you can route connections through dedicated proxy servers, creating an additional layer of security. To do this, specify the base URL. For example, `https://api.aleph-alpha.com`. |

=== "Custom Model"

    | Parameter  | Description                                                                                                                                                                                                                                                                                  |
    |------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Model Type | Select the **Completion** type.                                                                                                                                                                                                                                                              |
    | Model Name | Enter the name of the model that you want to use as a custom model. To find model names, refer to the [Aleph Alpha](https://docs.aleph-alpha.com/docs/Deprecated%20Luminous/Deprecated-Luminous/model-card/) documentation.<br>                                                                      |
    | Token      | Enter the key that you created in your [Aleph Alpha account](https://docs.aleph-alpha.com/).                                                                                                                                                                                                   |
    | Custom URL | This parameter is optional. To control the connection between your clusters and the Aleph Alpha provider, you can route connections through dedicated proxy servers, creating an additional layer of security. To do this, specify the base URL. For example, `https://api.aleph-alpha.com`. |

Apply changes. Check if the connection was set up by clicking **Test**.

{! _includes/ai/generative-ai/add-model-via-api.md !}

## Apply the Model

{! _includes/ai/generative-ai/apply-model.md !}

## More Information

- [Other LLM Operations](../other-operations.md)
- [Overview](../overview.md)
- [All LLM Providers](all-providers.md)
- [Model support by feature](../model-support-by-feature.md)