---
title: "Intent Recognition with External Embedding Model"
description: "In Cognigy.AI, the Intent Recognition with External Embedding Model feature allows using the `text-embedding-3-large` hosted by OpenAI and Azure OpenAI, replacing the default Cognigy embedding models."
slug: "external-intent-recognition"
hidden: false
---

# Intent Recognition with External Embedding Model

[![Version badge](https://img.shields.io/badge/Added in-v4.74-blue.svg)](../../../../release-notes/4.74.md)

An embedding is a sequence of numbers that represents the meaning of sentences and is used by the NLU for tasks such as intent classification.

The _Intent Recognition with External Embedding Model_ feature allows
using the `text-embedding-3-large` hosted by OpenAI and Azure OpenAI, replacing the default Cognigy embedding models:

- It is designed for complex projects with a large number of intents and example sentences.
- It enables you to set up the intent model faster because you spend less time selecting and refining example sentences.
- There is a cost associated with using third-party models. It involves making external requests to a third-party service, which may incur expenses and latency.

!!! note
    The Azure OpenAI and OpenAI models are multilingual, and the NLU will work even if the Cognigy Flow is set in a different language than the user input. We recommend creating individual Flows for each localization.

## Prerequisites

- Add the [`text-embedding-3-large`](../../llms/model-support-by-feature.md) model provided by [Azure OpenAI](../../llms/providers/microsoft-azure-openai.md#add-a-model) or [OpenAI](../../llms/providers/openai.md#add-a-model). Note that if you use an external embedding model provider, Cognigy will send user inputs to the selected service. Ensure that your data processing policy reflects this practice.
- Consider that using the `text-embedding-3-large` external NLU model increases [Snapshot](../../../deploy/snapshots.md) size, leading to longer download and upload times.

## Set Up a Third-Party NLU model

To set up a third-party NLU model, follow these steps:

1. In the left-side menu of the Project, go to **Manage > Settings**.
2. Go to the **NLU Settings** section.
3. From the **Embedding Model Provider** list, select a model that you added as part of the [Prerequisites](#prerequisites).
4. Confirm changes.

## Train Flows

Changing the NLU embedding model requires all Flows in the Project to be retrained. 
Otherwise, intent recognition will fail because the new embeddings won't match the old ones used for training.

During Flow training, only enabled intents are considered. Intents marked as disabled will be skipped.

Select the number of Flows that need training:

- [Train a Flow](#train-a-flow)
- [Train multiple Flows](#train-multiple-flows)

### Train a Flow

If you have only one Flow in your Project, follow these steps:

1. In the left-side menu of the Project, go to **Build > Flows**.
2. On the **Flows** page, select the Flow that you want to train.
3. In the upper-right corner, select **NLU**.
4. On the **Intents** tab, click **Build Model**.

Once the model building process is complete, the intent recognition capability of the Flow will be improved, allowing for more accurate understanding of user inputs.

### Train Multiple Flows

If you have more one Flow in your Project, follow these steps:

1. In the left-side menu of the Project, go to **Build > Flows**.
2. On the **Flows** page, check if the **Train all Flows** button exists. If the **Train all Flows** button is not enabled for your environment, specify the `FEATURE_TRAIN_ALL_PROJECT_FLOWS` feature flag in the `values.yaml` file for on-premises installations or contact [Cognigy technical support](https://docs.cognigy.com/help/get-help/).
3. Click **Train all Flows**. 

Once the model building process is complete, the intent recognition capability of the Flow will be improved, allowing for more accurate understanding of user inputs.

Note that during the training process, the order of Flows is not predefined. Flows are retrieved from the database sequentially, following their default storage order.

## More Information

- [LLMs](../../llms/overview.md)
- [Intent Overview](../overview.md)