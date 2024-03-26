---
title: "LLM"
slug: "llm"
description: "Large Language Models (LLMs) in Cognigy are advanced Generative AI models that generate human-like text based on input and context. Trained on vast text data, they understand user input, provide contextually appropriate responses, manage dialogues, and offer multilingual support for an enhanced conversational experience."
hidden: false
---
# Large Language Model (LLM)

[![Version badge](https://img.shields.io/badge/Updated in-v4.70-blue.svg)](../../../release-notes/4.70.md)

[Large Language Models (LLMs)](https://en.wikipedia.org/wiki/Large_language_model) are a specific type of Generative AI model that are designed for generating human-like text based on the input and context provided. These models are trained on vast amounts of text data, allowing them to learn patterns, syntax, and semantic relationships between words and phrases. 

With LLMs, Cognigy virtual agents can understand and respond to user input in a natural way. These models make conversations more engaging by generating relevant and contextually appropriate responses. LLMs also assist in managing dialogues and providing multilingual support, enhancing the overall conversational experience for users.

## Supported Models

The table below lists the LLMs supported by Cognigy.

{! _includes/release-notes/text-davinci-003-sunset.md !}

| Models/<br>Cognigy Features                                                                                               | Intent Sentence Generation | AI Enhanced Outputs | Lexicon Generation | Flow Generation | GPT Conversation Node | LLM Prompt Node & LLM-powered Answer Extraction    | Generate Node Output | Knowledge Search | Sentiment Analysis |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------|---------------------|--------------------|-----------------|-----------------------|----------------------------------------------------|----------------------|------------------|--------------------|
| **Microsoft Azure OpenAI**                                                                                                |                            |                     |                    |                 |                       |                                                    |                      |                  |                    |
| gpt-3.5-turbo (ChatGPT)                                                                                                   | +                          | +                   | +                  | +               | +                     | +                                                  | +                    | -                | +                  |
| gpt-3.5-turbo-instruct                                                                                                    | -                          | -                   | -                  | -               | -                     | +                                                  | -                    | -                | -                  |
| gpt-4                                                                                                                     | -                          | -                   | -                  | -               | -                     | +                                                  | -                    | -                | -                  |
| text-davinci-003 ([Deprecated](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/legacy-models#gpt-35)) | +                          | +                   | +                  | +               | +                     | +                                                  | +                    | -                | -                  |
| text-embedding-ada-002                                                                                                    | -                          | -                   | -                  | -               | -                     | -                                                  | -                    | +                | -                  |
| **OpenAI**                                                                                                                |                            |                     |                    |                 |                       |                                                    |                      |                  |                    |
| gpt-3.5-turbo (ChatGPT)                                                                                                   | +                          | +                   | +                  | +               | +                     | +                                                  | +                    | -                | +                  |
| gpt-3.5-turbo-instruct                                                                                                    | -                          | -                   | -                  | -               | -                     | +                                                  | -                    | -                | -                  |
| gpt-4                                                                                                                     | -                          | -                   | -                  | -               | -                     | +                                                  | -                    | -                | -                  |
| text-davinci-003 ([Deprecated](https://platform.openai.com/docs/deprecations/2023-07-06-gpt-and-embeddings))              | +                          | +                   | +                  | +               | +                     | +                                                  | +                    | -                | -                  |
| text-embedding-ada-002                                                                                                    | -                          | -                   | -                  | -               | -                     | -                                                  | -                    | +                | -                  |
| **Anthropic**                                                                                                             |                            |                     |                    |                 |                       |                                                    |                      |                  |                    |
| claude-v1-100k                                                                                                            | -                          | -                   | -                  | -               | -                     | +                                                  | -                    | -                | -                  |
| claude-instant-v1                                                                                                         | -                          | -                   | -                  | -               | -                     | +                                                  | -                    | -                | -                  |
| **Google**                                                                                                                |                            |                     |                    |                 |                       |                                                    |                      |                  |                    |
| text-bison-001 (Bard)                                                                                                     | -                          | -                   | -                  | -               | -                     | +                                                  | -                    | -                | -                  |
| **Aleph Alpha**                                                                                                           |                            |                     |                    |                 |                       |                                                    |                      |                  |                    |
| luminous-extended-control                                                                                                 | -                          | -                   | -                  | -               | -                     | +                                                  | -                    | -                | -                  |
| luminous-embedding-128[^*]                                                                                                | -                          | -                   | -                  | -               | -                     | -                                                  | -                    | +                | -                  | 

[^*]: This feature is currently in Beta and may contain issues. Only one type of embedding LLM should be used per project. If you choose to use `luminous-embedding-128`, you must create a new project. Once you have chosen an embedding model for a project, you cannot switch to a different embedding model; you must use a different project. Failing to do so will result in errors while this feature is in Beta.

## Add a Model

To add a model to Cognigy.AI, follow these steps:

{! _includes/ai/generative-ai/credentials.md !}

## Apply a Model

{! _includes/ai/generative-ai/apply-model.md !}

## Clone a Model

To create a copy of the existing model, follow these steps:

1. Go to **Build > LLM**.
2. Hover over the existing model and click ![vertical-ellipsis](https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg).
3. Select **Clone** from the list.

The model will contain the same settings as the initial one. 

## Set a Model as Default

Setting a default model ensures a smooth transition when a specific model is removed. It guarantees that there is always a model available to handle compatible use cases, even if the assigned model is removed.

To set a model as the default, follow these steps:

1. Go to **Build > LLM**.
2. Hover over the existing model and click ![vertical-ellipsis](https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg).
3. Select **Make Default** from the list.

The setting will be applied for the selected model.

## Export a Model as Package

To reuse a model in other agents, you can package the model.

To package a model, follow these steps:

1. Go to **Build > LLM**.
2. Hover over the existing model and click ![vertical-ellipsis](https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg).
3. Select **Create a package**. 
4. Once the package has created, a new [task](../agents/tasks.md), titled **Create package**, will be run. To view the task, click ![task-menu](../../../assets/icons/task-menu.svg) in the upper-right corner.

When the task is completed, the package will be downloaded.

## Delete a Model

Note that a [default model](#set-a-model-as-default) cannot be deleted. Before deletion, you need to remove the default tag.

To delete a model, follow these steps:

1. Go to **Build > LLM**.
2. Hover over the existing model and click ![vertical-ellipsis](https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg).
3. Select **Delete**. 
4. Confirm the deletion. Features relying on this model will stop working if no default model is configured to support those features.

The model will be deleted from the list.

## More Information

- [Generative AI](../../generative-ai.md)
- [Knowledge AI](../../knowledge-ai/overview.md)



