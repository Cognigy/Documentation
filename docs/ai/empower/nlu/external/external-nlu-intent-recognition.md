---
title: "Intent Recognition with External Embedding Model"
description: "In Cognigy.AI, the Intent Recognition with External Embedding Model feature allows using the `text-embedding-3-large` hosted by OpenAI and Azure OpenAI, replacing the default Cognigy embedding models."
slug: "external-intent-recognition"
hidden: false
tags:
  - intent recognition
  - external NLU
  - external embedding model
---

# Intent Recognition with External Embedding Model

[![Version badge](https://img.shields.io/badge/Added in-v4.74-blue.svg)](../../../../release-notes/4.74.md)

An embedding is a sequence of numbers that represents the meaning of sentences and is used by the NLU for tasks such as Intent classification.

The _Intent Recognition with External Embedding Model_ feature allows
using the `text-embedding-3-large` hosted by OpenAI and Azure OpenAI, replacing the default Cognigy embedding models.

!!! note
    The Azure OpenAI and OpenAI models are multilingual, and the NLU will work even if the Cognigy Flow is set in a different language than the user input. We recommend creating individual Flows for each localization.

## Key Benefits

- The feature is designed for complex projects with a large number of Intents and example sentences.
- It enables you to set up the Intent model faster because you spend less time selecting and refining example sentences.
- There is a cost associated with using third-party models. It involves making external requests, which may incur expenses and latency.

## Prerequisites

- Add the [`text-embedding-3-large`](../../llms/model-support-by-feature.md) model provided by [Azure OpenAI](../../llms/providers/microsoft-azure-openai.md#add-models) or [OpenAI](../../llms/providers/openai.md#add-models). Note that if you use an external embedding model provider, Cognigy will send user inputs to the selected service. Ensure that your data processing policy reflects this practice.
- Consider that using the `text-embedding-3-large` external NLU model increases [Snapshot](../../../deploy/snapshots.md) size, leading to longer download and upload times.

## Set Up a Third-Party NLU model

To set up a third-party NLU model, follow these steps:

1. In the left-side menu of the Project, go to **Manage > Settings**.
2. Go to the **NLU Settings** section.
3. From the **Embedding Model Provider** list, select a model that you added as part of the [Prerequisites](#prerequisites).
4. Confirm changes.

## Train Flows

Changing the NLU embedding model requires all Flows in the Project to be retrained. 
Otherwise, Intent recognition will fail because the new embeddings won't match the old ones used for training.

During Flow training, only enabled Intents are considered. Intents marked as disabled will be skipped.

You can train a single Flow or multiple Flows by navigating to **Build > Flows**.

## More Information

- [LLMs](../../llms/overview.md)
- [Intent Overview](../overview.md)