---
title: "Intent Recognition with External Embedding Model"
slug: "external-intent-recognition"
hidden: false
---

# Intent Recognition with External Embedding Model

[![Version badge](https://img.shields.io/badge/Added in-v4.74-blue.svg)](../../release-notes/4.74.md)

An embedding is a sequence of numbers that represents the meaning of sentences and is used by the NLU for tasks such as intent classification.

The _Intent Recognition with External Embedding Model_ feature allows
using the `text-embedding-3-model` hosted by OpenAI and Azure OpenAI, replacing the default Cognigy embedding models:

- It is designed for complex projects with a large number of intents and example sentences.
- It enables you to set up the intent model faster because you spend less time selecting and refining example sentences.
- There is a cost associated with using third-party models. It involves making external requests to a third-party service, which may incur expenses and latency.

!!! note
    The Azure OpenAI and OpenAI models are multilingual, and the NLU will work even if the Cognigy Flow is set in a different language than the user input. We recommend creating individual Flows for each localization.

## Prerequisites

- Add the [`text-embedding-3-large`](../resources/build/llm.md#add-a-model) model provided by Azure OpenAI or OpenAI. Note that if you use an external embedding model provider, Cognigy will send user inputs to the selected service. Ensure that your data processing policy reflects this practice.

## Set Up a Third-Party NLU model

To set up a third-party NLU model, follow these steps:

1. Open the Cognigy.AI interface. 
2. In the left-side menu, select an Agent where you want to use a third-party NLU model. 
3. In the left-side menu of the Agent, navigate to **Manage > Settings**.
4. Go to the **NLU Settings** section.
5. From the **Embedding Model Provider** list, select a model that you added as part of the [Prerequisites](#prerequisites).
6. Confirm changes.

## Train Flows

Changing the NLU embedding model requires all Flows in the Agent to be retrained.
Select the number of flows that need training:

- [Train a Flow](#train-a-flow)
- [Train multiple Flows](#train-multiple-flows)

### Train a Flow

If you have only one Flow in your Agent, follow these steps:

1. In the left-side menu of the Agent, navigate to **Build > Flows**.
2. On the **Flows** page, select the Flow that you want to train.
3. In the upper-right corner, select **NLU**.
4. On the **Intents** tab, click **Build Model**.

Once the model building process is complete, the intent recognition capability of the Flow will be improved, allowing for more accurate understanding of user inputs.

### Train Multiple Flows

If you have more one Flow in your Agent, follow these steps:

1. In the left-side menu of the Agent, navigate to **Build > Flows**.
2. On the **Flows** page, check if the **Train all Flows** button exists. If the **Train all Flows** button is not enabled for your environment, specify the `FEATURE_TRAIN_ALL_PROJECT_FLOWS` feature flag in the `values.yaml` file for on-premises installations or contact [Cognigy technical support](https://docs.cognigy.com/help/get-help/).
3. Click **Train all Flows**. 

Once the model building process is complete, the intent recognition capability of the Flow will be improved, allowing for more accurate understanding of user inputs.


## More Information

- [LLMs](../resources/build/llm.md)
- [Intent Overview](nlu-overview/overview.md)