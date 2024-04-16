---
title: "Multilingual Intent Recognition with Third-Party NLU"
slug: "third-party-nlu"
hidden: false
---

# Multilingual Intent Recognition with Third-Party NLU

[![Version badge](https://img.shields.io/badge/Added in-v4.74-blue.svg)](../../release-notes/4.74.md)

The _Multilingual Intent Recognition with Third-Party NLU_ feature is designed for projects that operate in languages other than English and German. 
By ensuring accurate and reliable user intent recognition, this feature allows you to integrate third-party NLU models into your Cognigy workflow. 
These external models provide superior performance, precisely tailored to the specific language and domain requirements of your project.

!!! note
    If you use Intents are in English or German,
    then third-party models will show approximately the same results as the built-in Cognigy NLU model.

## Prerequisites

- This feature requires training all existing Flows. To try it out, create a new Agent.
- Create a [Flow](../resources/build/flows.md) and include [Intents](nlu-overview/overview.md) within it.
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

Changing the NLU embedding model requires all Flows in the agent to be retrained.
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

1. In the left-side menu of the Agent, navigate to **Build > Flows**. 1. In the left-side menu of the agent, navigate to **Build > Flows**. 
2. On the **Flows** page, check if the **Train all Flows** button exists. If the **Train all Flows** button is not enabled for your environment, specify the `FEATURE_TRAIN_ALL_PROJECT_FLOWS` feature flag in the `values.yaml` file for on-premises installations or contact [Cognigy technical support](https://docs.cognigy.com/help/get-help/).
3. Click **Train all Flows**. 

Once the model building process is complete, the intent recognition capability of the Flow will be improved, allowing for more accurate understanding of user inputs.


## More Information

- [LLMs](../resources/build/llm.md)
- [Intent Overview](nlu-overview/overview.md)