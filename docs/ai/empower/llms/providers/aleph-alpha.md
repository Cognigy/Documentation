---
title: "Aleph Alpha"
slug: "aleph-alpha"
description: "To start using an Aleph Alpha LLM with Cognigy.AI features, add the LLM and apply it to the corresponding use case."
hidden: false
---

# Aleph Alpha

To start using an Aleph Alpha model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-a-model)
2. [Apply the Model](#apply-the-model)

## Add a Model

To add a model provided by Aleph Alpha to Cognigy.AI, follow these steps:

1. In the left-side menu of the Project, go to **Build > LLM**.
2. Click **+New LLM**.
3. In the **New LLM** window, select a model from the **Model Type** list.
4. Add a unique name and description for your model.
5. From the **Provider** list, select an LLM's provider:<br>
    1. From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
        - **Model Type** — select the **Completion** type.<br>
        - **Model Name** — specify a name of the model that you want to use as a custom. To find model names, refer to the [Aleph Alpha](https://docs.aleph-alpha.com/docs/Deprecated%20Luminous/Deprecated-Luminous/model-card/) documentation.<br>
    2. Click **Save**.<br>
    3. Fill in the following fields:<br>
        - **Connection name** — create a unique name for your connection.<br>
        - **Token** — specify a key that you created in your [Aleph Alpha account](https://docs.aleph-alpha.com/).<br>
    4. Click **Create**.<br>
    5. Fill in the remaining field:<br>
        - **Custom URL** — this parameter is optional. To control the connection between your clusters and the Aleph Alpha provider, you can route connections through dedicated proxy servers, creating an additional layer of security. To do this, specify the base URL. For example, `https://api.aleph-alpha.com`.
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