---
title: "LLM"
slug: "llm"
hidden: false
---
# Large Language Model (LLM)

[![Version badge](https://img.shields.io/badge/Added in-v4.52-blue.svg)](../../../release-notes/4.52.md)

[Large Language Models](https://en.wikipedia.org/wiki/Large_language_model) (LLMs) are a specific type of Generative AI model that s that are specifically designed for generating human-like text based on the input and context provided. These models are trained on vast amounts of text data, allowing them to learn patterns, syntax, and semantic relationships between words and phrases. LLMs are capable of understanding and generating coherent and contextually relevant responses in natural language.

LLMs help Cognigy virtual agents understand and respond to user input in a natural way. These models make conversations more engaging by generating relevant and contextually appropriate responses. LLMs also assist in managing dialogues and providing multilingual support, enhancing the overall conversational experience for user.


## Supported Models

In the table below, there are LLMs supported by Cognigy.

| Models/<br>Cognigy Features | Intent Sentence Generation | AI Enhanced Outputs | Lexicon Generation | Flow Generation | GPT Conversation Node | GPT Prompt Node | Generate Node Output | Knowledge Search |
|-----------------------------|----------------------------|---------------------|--------------------|-----------------|-----------------------|-----------------|----------------------|------------------|
| **Microsoft Azure OpenAI**  |                            |                     |                    |                 |                       |                 |                      |                  |
| gpt-3.5-turbo (ChatGPT)     | +                          | +                   | +                  | +               | -                     | +               | -                    | -                |
| text-davinci-003            | +                          | +                   | +                  | +               | +                     | +               | +                    | -                |
| text-embedding-ada-002      | -                          | -                   | -                  | -               | -                     | -               | -                    | +                |
| **Open AI**                 |                            |                     |                    |                 |                       |                 |                      |                  |
| gpt-3.5-turbo (ChatGPT)     | +                          | +                   | +                  | +               | -                     | +               | -                    | -                |
| text-davinci-003            | +                          | +                   | +                  | +               | +                     | +               | +                    | -                |
| text-embedding-ada-002      | -                          | -                   | -                  | -               | -                     | -               | -                    | +                |
| **Anthropic**               |                            |                     |                    |                 |                       |                 |                      |                  |
| claude-v1-100k              | -                          | -                   | -                  | -               | -                     | +               | -                    | -                |
| claude-instant-v1           | -                          | -                   | -                  | -               | -                     | +               | -                    | -                |

## Add a model

To add a model to Cognigy.AI, follow these steps:

{! _includes/ai/generative-ai/credentials.md !}

## Apply a model

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
4. Once the package has created, a new [task](../agents/tasks.md), entitled **Create package**, will be run. To view the task, click ![task-menu](../../../assets/icons/task-menu.svg) in the upper-right corner.

When the task is completed, the package will be downloaded.

## Delete a Model

To delete a model, follow these steps:

1. Go to **Build > LLM**.
2. Hover over the existing model and click ![vertical-ellipsis](https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg).
3. Select **Delete**.
4. Confirm the deletion. Features relying on this model will stop working if no default model is configured to support those features.

The model will be deleted from the list.

## More information

- [Generative AI](../../generative-ai.md)



