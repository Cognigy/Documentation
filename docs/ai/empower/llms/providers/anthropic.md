---
title: "Anthropic"
slug: "anthropic"
description: "To start using an Anthropic LLM with Cognigy.AI features, add the LLM and apply it to the corresponding use case."
hidden: false
---

# Anthropic

To start using an Anthropic model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-a-model)
2. [Apply the Model](#apply-the-model)

## Add a Model

To add a model provided by Anthropic to Cognigy.AI, follow these steps:

1. Open the Cognigy.AI interface.
2. Go to **Build > LLM**.
3. Click **+New LLM**.
4. In the **New LLM** window, select a model from the **Model Type** list.
5. Add a unique name and description for your model.
6. From the **Provider** list, select an LLM's provider:<br>
    1. From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
        - **Model Type** — select **Chat** for models that support the Messages API, **Completion** for the Completions API, or **Embedding** for the Embeddings API. For more information, refer to the [Anthropic Model Comparison (API format)](https://docs.anthropic.com/claude/docs/models-overview#model-comparison) documentation.<br>
        - **Model Name** — specify a name of the model that you want to use as a custom. To find model names, refer to the [Anthropic](https://docs.anthropic.com/claude/docs/models-overview) documentation.<br>
    2. Click **Save**.<br>
    3. Fill in the following fields:<br>
        - **Connection name** — create a unique name for your connection.<br>
        - **apiKey** — add an API Key that you generated via [Account Settings](https://console.anthropic.com/docs/api#accessing-the-api) in Anthropic.<br>
    4. Click **Create**.<br>

7. To apply changes, click **Save**.
8. To check if the connection was set up, click **Test**.

When the model is added, you will see it in the list of models.

To apply this model for Cognigy.AI features, go to the settings by clicking **Manage LLM Features**.

## Apply the Model

{! _includes/ai/generative-ai/apply-model.md !}

## More Information

- [Other LLM Operations](../other-operations.md)
- [Overview](../overview.md)
- [All LLM Providers](all-providers.md)
- [Model support by feature](../model-support-by-feature.md)