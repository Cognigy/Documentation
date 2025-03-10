---
title: "Google Gemini"
slug: "google-gemini"
description: "To start using a Google Gemini LLMs with Cognigy.AI features, add the LLM and apply it to the corresponding use case."
hidden: false
tags:
  - llms
  - Google Gemini
  - Google Gemini models
---

# Google Gemini

To start using a Google Gemini model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-a-model)
2. [Apply the Model](#apply-the-model)

## Add a Model

You can add a model using one of the following interfaces:

- [GUI](#add-a-model-via-gui)
- [API](#add-a-model-via-api)

### Add a Model via GUI

You can add a model provided by Google Gemini to Cognigy.AI in **Build > LLM**. To add the model, you will need the following parameters:

=== "Standard Model"

    | Parameter | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
    |-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | JSON      | To upload the JSON file with a key for your model, you need to obtain this key. If you have previously used a key for the Google Vertex AI connection, you can also use this key for Google Gemini. If you're setting up the connection for the first time, go to the Google Cloud console and find Vertex AI via the search bar. On the **Vertex AI** page, click the **Enable All Recommended APIs** button to activate an API connection, if it is not activated. Ensure that the Vertex AI API is enabled. In the left-side menu, go to the **IAM & Admin > Service Accounts**. Select **Actions** and click **Manage Keys**. On the **Keys** page, select **Add Key** and click **Create new Key**. In the appeared window, select the **JSON** key type and click **Create**. The file will be downloaded.  |
    | Location  | Add a [region](https://cloud.google.com/vertex-ai/docs/general/locations) for the model. For example, `us-central1`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

=== "Custom Model"

    | Parameter  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    |------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Model Type | Select the **Chat** type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
    | Model Name | Enter the name of the model that you want to use as a custom model. To find model names, refer to the [Google Gemini](https://ai.google.dev/gemini-api/docs/models/gemini) documentation. Note that, within this connection, Cognigy supports only the `gemini` models.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | JSON       | To upload the JSON file with a key for your model, you need to obtain this key. If you have previously used a key for the Google Vertex AI connection, you can also use this key for Google Gemini. If you're setting up the connection for the first time, go to the Google Cloud console and find Vertex AI via the search bar. On the **Vertex AI** page, click the **Enable All Recommended APIs** button to activate an API connection, if it is not activated. Ensure that the Vertex AI API is enabled. In the left-side menu, go to the **IAM & Admin > Service Accounts**. Select **Actions** and click **Manage Keys**. On the **Keys** page, select **Add Key** and click **Create new Key**. In the appeared window, select the **JSON** key type and click **Create**. The file will be downloaded.   |
    | Location   | Add a [region](https://cloud.google.com/vertex-ai/docs/general/locations) for the model. For example, `us-central1`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

Apply changes. Check if the connection was set up by clicking **Test**.

{! _includes/ai/generative-ai/add-model-via-api.md !}

## Apply the Model

{! _includes/ai/generative-ai/apply-model.md !}

## More Information

- [Other LLM Operations](../other-operations.md)
- [Overview](../overview.md)
- [All LLM Providers](all-providers.md)
- [Model support by feature](../model-support-by-feature.md)