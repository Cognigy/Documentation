---
title: "Amazon Bedrock"
slug: "amazon-bedrock"
description: "To start using an Amazon Bedrock LLM with Cognigy.AI features, add the LLM and apply it to the corresponding use case."
hidden: false
tags:
  - llms
  - Amazon Bedrock
  - Amazon Bedrock models
---

# Amazon Bedrock

[![Version badge](https://img.shields.io/badge/Updated in-v4.92-blue.svg)](../../../../release-notes/4.92.md)

To start using an Amazon Bedrock model with Cognigy.AI features, follow these steps:

1. [Add a Model](#add-a-model)
2. [Apply the Model](#apply-the-model)

## Add a Model

You can add a model using one of the following interfaces:

- [GUI](#add-a-model-via-gui)
- [API](#add-a-model-via-api)

### Add a Model via GUI

You can add a model provided by Amazon Bedrock to Cognigy.AI in **Build > LLM**. To add the model, you will need the following parameters:

=== "Standard Model"

    | Parameter         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    |-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Access Key ID     | Enter the Access Key ID. Log in to the AWS Management Console, go to the IAM dashboard, select **Users**, and choose the IAM user. Navigate to the **Security credentials** tab, and under **Access keys**, create a new access key if one hasn't been created. Copy the Access Key ID provided after creation. |
    | Secret Access Key | Enter the Secret Access Key. After creating the access key, you'll be prompted to download a file containing the Access Key ID and the Secret Access Key. Alternatively, you can retrieve the Secret Access Key by navigating to the IAM dashboard, selecting the user, going to the **Security credentials** tab, and clicking **Show** next to the Access Key ID to reveal and copy the Secret Access Key.                                         |
    | Region            | Enter the AWS region where your model is located, for example, `us-east-1` for the US East (N. Virginia) region.                                                                                                                                                                                                                                                                                                                                   |

=== "Custom Model"

    | Parameter         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                        |
    |-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Model Type        | Select the **Chat** type for models that support the [Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/conversation-inference-supported-models-features.html). Note that the model will only work if your AWS administrator gives you [access to this model](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html).                                                                                            |
    | Model Name        | Enter the ID of the model that you want to use as a custom model. To find model IDs, refer to the [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html) documentation.                                                                                                                                                                                                                                                    |
    | Access Key ID     | Enter the Access Key ID. Log in to the AWS Management Console, go to the IAM dashboard, select **Users**, and choose the IAM user. Navigate to the **Security credentials** tab, and under **Access keys**, create a new access key if one hasn't been created. Copy the Access Key ID provided after creation. |
    | Secret Access Key | Enter the Secret Access Key. After creating the access key, you'll be prompted to download a file containing the Access Key ID and the Secret Access Key. Alternatively, you can retrieve the Secret Access Key by navigating to the IAM dashboard, selecting the user, going to the **Security credentials** tab, and clicking **Show** next to the Access Key ID to reveal and copy the Secret Access Key.                                         |
    | Region            | Enter the AWS region where your model is located, for example, `us-east-1` for the US East (N. Virginia) region.                                                                                                                                                                                                                                                                                                                                   |

Apply changes. Check if the connection was set up by clicking **Test**.

{! _includes/ai/generative-ai/add-model-via-api.md !}

## Apply the Model

{! _includes/ai/generative-ai/apply-model.md !}

## More Information

- [Other LLM Operations](../other-operations.md)
- [Overview](../overview.md)
- [All LLM Providers](all-providers.md)
- [Model support by feature](../model-support-by-feature.md)