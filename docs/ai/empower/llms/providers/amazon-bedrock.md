---
title: "Amazon Bedrock"
slug: "amazon-bedrock"
description: "To start using an Amazon Bedrock LLM with Cognigy.AI features, add the LLM and apply it to the corresponding use case."
hidden: false
---

# Amazon Bedrock

[![Version badge](https://img.shields.io/badge/Updated in-v4.92(Beta)-purple.svg)](../../../../release-notes/4.92.md)

To start using an Amazon Bedrock model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-a-model)
2. [Apply the Model](#apply-the-model)

## Add a Model

To add a model provided by Amazon Bedrock to Cognigy.AI, follow these steps:

1. In the left-side menu of the Project, go to **Build > LLM**.
2. Click **+New LLM**.
3. In the **New LLM** window, select a model from the **Model Type** list.
4. Add a unique name and description for your model.
5. From the **Provider** list, select an LLM's provider:<br>
    1. From the **Model** list, select a model presented in the list or add a custom model that is not listed. If you select **Custom Model**, configure the following fields:<br>
        - **Model Type** — select the **Chat** type for models that support the [Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-supported-models-features.html). Note that the model will only work if your AWS administrator gives you [access to this model](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html).<br>
        - **Model Name** — specify an ID of the model that you want to use as a custom. To find model IDs, refer to the [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html) documentation.<br>
    2. Click **Save**.<br>
    3. Fill in the following fields:<br>
        - **Connection name** — create a unique name for your connection.<br>
        - **Access Key ID** — specify an Access Key ID. Log in to the AWS Management Console, go to the IAM dashboard, select **Users**, and choose the IAM user. Navigate to the **Security credentials** tab, and under **Access keys**, create a new access key if one hasn't been created. Copy the Access Key ID provided after creation.<br>
        - **Secret Access Key** — specify a Secret Access Key. After creating the access key, you'll be prompted to download a file containing the Access Key ID and the Secret Access Key. Alternatively, you can retrieve the Secret Access Key by navigating to the IAM dashboard, selecting the user, going to the **Security credentials** tab, and clicking **Show** next to the Access Key ID to reveal and copy the Secret Access Key.<br>
    4. Click **Create**.<br>
    5. Fill in the remaining field:<br>
        - **Region** — enter the AWS region where your model is located, for example, `us-east-1` for the US East (N. Virginia) region.<br>

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