---
title: "Google Vertex AI"
slug: "google-vertex-ai"
description: "To start using a Google Vertex AI LLMs with Cognigy.AI features, add the LLM and apply it to the corresponding use case."
hidden: false
tags:
  - llms
  - Google Vertex AI
  - Google Vertex AI models
---

# Google Vertex AI

To start using a Google Vertex AI or Gemini model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-a-model)
2. [Apply the Model](#apply-the-model)

## Add a Model

You can add a model using one of the following interfaces:

- [GUI](#add-a-model-via-gui)
- [API](#add-a-model-via-api)

### Add a Model via GUI

To add a model provided by Google Vertex AI to Cognigy.AI, follow these steps:

=== "Standard Model"

    | Parameter    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    |--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | JSON         | To upload the JSON file with a key for your model, you need to obtain this key. Go to the Google Cloud console and find Vertex AI via the search bar. On the **Vertex AI** page, click the **Enable All Recommended APIs** button to activate an API connection, if it is not activated. Ensure that the Vertex AI API is enabled. In the left-side menu, go to the **IAM & Admin > Service Accounts**. Select **Actions** and click **Manage Keys**. On the **Keys** page, select **Add Key** and click **Create new Key**. In the appeared window, select the **JSON** key type and click **Create**. The file will be downloaded. You can also use this key for [Google Gemini](google-gemini.md).   |
    | Location     | Add a [region](https://cloud.google.com/vertex-ai/docs/general/locations) for the model. For example, `us-central1`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | API Endpoint | Add a [service endpoint](https://cloud.google.com/vertex-ai/docs/reference/rest#service-endpoint) for the model. For example, `us-central1-aiplatform.googleapis.com`. Note that the endpoint should be specified without `https://` or `http://`.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | Publisher    | Add an owner's name of the model. If not specified, `Google` will be used by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

=== "Custom Model"

    | Parameter    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
    |--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Model Type   | Select the **Completion** type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | Model Name   | Enter the name of the model that you want to use as a custom model. To find model names, refer to the [Google Vertex AI](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/model-versioning) documentation. Note that, within this connection, Cognigy supports only the `text-bison` models.                                                                                                                                                                                                                                                                                                                                                                                                         |
    | JSON         | To upload the JSON file with a key for your model, you need to obtain this key. Go to the Google Cloud console and find Vertex AI via the search bar. On the **Vertex AI** page, click the **Enable All Recommended APIs** button to activate an API connection, if it is not activated. Ensure that the Vertex AI API is enabled. In the left-side menu, go to the **IAM & Admin > Service Accounts**. Select **Actions** and click **Manage Keys**. On the **Keys** page, select **Add Key** and click **Create new Key**. In the appeared window, select the **JSON** key type and click **Create**. The file will be downloaded. You can also use this key for [Google Gemini](google-gemini.md).   |
    | Location     | Add a [region](https://cloud.google.com/vertex-ai/docs/general/locations) for the model. For example, `us-central1`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | API Endpoint | Add a [service endpoint](https://cloud.google.com/vertex-ai/docs/reference/rest#service-endpoint) for the model. For example, `us-central1-aiplatform.googleapis.com`. Note that the endpoint should be specified without `https://` or `http://`.                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
    | Publisher    | Add an owner's name of the model. If not specified, `Google` will be used by default.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

{! _includes/ai/generative-ai/add-model-via-api.md !}

## Apply the Model

{! _includes/ai/generative-ai/apply-model.md !}

## More Information

- [Other LLM Operations](../other-operations.md)
- [Overview](../overview.md)
- [All LLM Providers](all-providers.md)
- [Model support by feature](../model-support-by-feature.md)