---
title: "Google"
slug: "google"
description: "To start using a Google Vertex AI or Gemini LLMs with Cognigy.AI features, add the LLM and apply it to the corresponding use case."
hidden: false
---

# Google

!!! warning
    Google will deprecate Gemini 1.0 Pro on April 9, 2025. If you use Gemini 1.0 Pro within any Cognigy.AI capability, make sure you switch to [another Gemini model](../model-support-by-feature.md) to avoid that Cognigy.AI doesn't function as expected.

To start using a Google Vertex AI or Gemini model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-a-model)
2. [Apply the Model](#apply-the-model)

## Add a Model

To add a model provided by Google to Cognigy.AI, follow these steps:

1. Open the Cognigy.AI interface.
2. Go to **Build > LLM**.
3. Click **+New LLM**.
4. In the **New LLM** window, select a model from the **Model Type** list.
5. Add a unique name and description for your model.
6. From the **Provider** list, select an LLM's provider:

    === "Google Vertex AI"
        6.1 From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
            - **Model Type** — select the **Completion** type. <br>
            - **Model Name** — specify a name of the model that you want to use as a custom. To find model names, refer to the [Google Vertex AI](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/model-versioning) documentation. Note that, within this connection, Cognigy supports only the `text-bison` models.<br>
        6.2 Click **Save**.<br>
        6.3 Fill in the **Connection name** field by specifying a unique name for your connection.<br>
        6.4 To upload the JSON file with a key for your model, you need to obtain this key. Go to the Google Cloud console and find Vertex AI via the search bar.<br>
        6.5 On the **Vertex AI** page, click the **Enable All Recommended APIs** button to activate an API connection, if it is not activated. Ensure that the Vertex AI API is enabled.<br>
        6.6 In the left-side menu, go to the **IAM & Admin > Service Accounts**.<br>
        6.7 Select **Actions** and click **Manage Keys**.<br>
        6.8 On the **Keys** page, select **Add Key** and click **Create new Key**.<br>
        6.9 In the appeared window, select the **JSON** key type and click **Create**. The file will be downloaded.<br>
        6.10 In Cognigy, in the **New Connection** window, click **Upload JSON file** and upload the file.<br>
        6.11 Click **Create**.<br>
        6.12 Fill in the remaining fields:<br>
            - **Location** — add a [region](https://cloud.google.com/vertex-ai/docs/general/locations) for the model. For example, `us-central1`.<br>
            - **API Endpoint** — add a [service endpoint](https://cloud.google.com/vertex-ai/docs/reference/rest#service-endpoint) for the model. For example, `us-central1-aiplatform.googleapis.com`. Note that the endpoint should be specified without `https://` or `http://`. <br>
            - **Publisher** — add an owner's name of the model. If not specified, `Google` will be used by default.
        This parameter is optional.
    
    === "Google Gemini"
        6.1 From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
            - **Model Type** — select the **Chat** type. <br>
            - **Model Name** — specify a name of the model that you want to use as a custom. To find model names, refer to the [Google Gemini](https://ai.google.dev/gemini-api/docs/models/gemini) documentation. Note that, within this connection, Cognigy supports only the `gemini` models.<br>
        6.2 Click **Save**.<br>
        6.3 Fill in the **Connection name** field by specifying a unique name for your connection.<br>
        6.4 To upload the JSON file with a key for your model, you need to obtain this key. If you have previously used a key for the Google Vertex AI connection, you can also use this key for Google Gemini; proceed to step 6.10 to add the key. If you're setting up the connection for the first time, go to the Google Cloud console and find Vertex AI via the search bar.<br>
        6.5 On the **Vertex AI** page, click the **Enable All Recommended APIs** button to activate an API connection, if it is not activated. Ensure that the Vertex AI API is enabled. <br>
        6.6 In the left-side menu, go to the **IAM & Admin > Service Accounts**.<br>
        6.7 Select **Actions** and click **Manage Keys**.<br>
        6.8 On the **Keys** page, select **Add Key** and click **Create new Key**.<br>
        6.9 In the appeared window, select the **JSON** key type and click **Create**. The file will be downloaded.<br>
        6.10 In Cognigy, in the **New Connection** window, click **Upload JSON file** and upload the file.<br>
        6.11 Click **Create**.<br>
        6.12 In the **Location** field, add a [region](https://cloud.google.com/vertex-ai/docs/general/locations) for the model. For example, `us-central1`.

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