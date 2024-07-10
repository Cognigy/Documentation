---
title: "Large Language Models"
slug: "LLMs"
description: "Large Language Models (LLMs) in Cognigy are advanced Generative AI models that generate human-like text based on input and context. Trained on vast text data, they understand user input, provide contextually appropriate responses, manage dialogues, and offer multilingual support for an enhanced conversational experience."
hidden: false
---
# Large Language Models (LLMs)

[![Version badge](https://img.shields.io/badge/Updated in-v4.77-blue.svg)](../../release-notes/4.80.md)

[Large Language Models (LLMs)](https://en.wikipedia.org/wiki/Large_language_model) are specific types of AI models that are designed for generating human-like text based on the input and context provided. These models are trained on vast amounts of text data, allowing them to learn patterns, syntax, and semantic relationships between words and phrases.

With LLMs, Cognigy virtual agents can understand and respond to user input in a natural way. These models make conversations more engaging by generating relevant and contextually appropriate responses. LLMs also assist in managing dialogues and providing multilingual support, enhancing the overall conversational experience for users.

## Supported Models

The table below lists the LLMs supported by Cognigy out of the box.
Alternatively, you can specify another model that is not presented in the table.
To do so, select the **Custom Model** parameter when creating a model and specify both the model type and name. For more information about adding a custom model for a selected LLM provider, refer to the [Add a Model](#add-a-model) section.

| Models/<br>Cognigy Features                                                                                               | Intent Sentence Generation | AI Enhanced Outputs | Lexicon Generation | Flow Generation | GPT Conversation Node | LLM Prompt Node & LLM-powered Answer Extraction | Generate Node Output | Knowledge Search | Sentiment Analysis | NLU Embedding Model |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------|---------------------|--------------------|-----------------|-----------------------|-------------------------------------------------|----------------------|------------------|--------------------|---------------------|
| **Microsoft Azure OpenAI**                                                                                                |                            |                     |                    |                 |                       |                                                 |                      |                  |                    |                     |
| gpt-3.5-turbo (ChatGPT)                                                                                                   | +                          | +                   | +                  | +               | +                     | +                                               | +                    | -                | +                  | -                   |
| gpt-3.5-turbo-instruct                                                                                                    | -                          | -                   | -                  | -               | -                     | +                                               | -                    | -                | -                  | -                   |
| gpt-4                                                                                                                     | -                          | -                   | -                  | -               | -                     | +                                               | -                    | -                | -                  | -                   |
| text-davinci-003 ([Deprecated](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/legacy-models#gpt-35)) | +                          | +                   | +                  | +               | +                     | +                                               | +                    | -                | -                  | -                   |
| text-embedding-3-large                                                                                                    | -                          | -                   | -                  | -               | -                     | -                                               | -                    | -                | -                  | +                   |
| text-embedding-ada-002                                                                                                    | -                          | -                   | -                  | -               | -                     | -                                               | -                    | +                | -                  | -                   |
| **OpenAI**                                                                                                                |                            |                     |                    |                 |                       |                                                 |                      |                  |                    |                     |
| gpt-3.5-turbo (ChatGPT)                                                                                                   | +                          | +                   | +                  | +               | +                     | +                                               | +                    | -                | +                  | -                   |
| gpt-3.5-turbo-instruct                                                                                                    | -                          | -                   | -                  | -               | -                     | +                                               | -                    | -                | -                  | -                   |
| gpt-4                                                                                                                     | -                          | -                   | -                  | -               | -                     | +                                               | -                    | -                | -                  | -                   |
| text-embedding-3-large                                                                                                    | -                          | -                   | -                  | -               | -                     | -                                               | -                    | -                | -                  | +                   |
| text-embedding-ada-002                                                                                                    | -                          | -                   | -                  | -               | -                     | -                                               | -                    | +                | -                  | -                   |
| **Anthropic**                                                                                                             |                            |                     |                    |                 |                       |                                                 |                      |                  |                    |                     |
| claude-3-opus                                                                                                             | -                          | -                   | -                  | -               | -                     | +                                               | -                    | -                | -                  | -                   |
| claude-3-haiku                                                                                                            | -                          | -                   | -                  | -               | -                     | +                                               | -                    | -                | -                  | -                   |
| claude-3-sonnet                                                                                                           | -                          | -                   | -                  | -               | -                     | +                                               | -                    | -                | -                  | -                   |
| claude-v1-100k ([Deprecated](https://docs.anthropic.com/claude/docs/legacy-model-guide#anthropics-legacy-models))         | -                          | -                   | -                  | -               | -                     | +                                               | -                    | -                | -                  | -                   |
| claude-instant-v1 ([Deprecated](https://docs.anthropic.com/claude/docs/legacy-model-guide#anthropics-legacy-models))      | -                          | -                   | -                  | -               | -                     | +                                               | -                    | -                | -                  | -                   |
| **Google Vertex AI**                                                                                                      |                            |                     |                    |                 |                       |                                                 |                      |                  |                    |                     |
| text-bison-001 (Bard)                                                                                                     | -                          | -                   | -                  | -               | -                     | +                                               | -                    | -                | -                  | -                   |
| **Google Gemini**                                                                                                         |                            |                     |                    |                 |                       |                                                 |                      |                  |                    |                     |
| gemini-1.0-pro                                                                                                            | -                          | -                   | -                  | -               | -                     | +                                               | -                    | -                | -                  | -                   |
| **Aleph Alpha**                                                                                                           |                            |                     |                    |                 |                       |                                                 |                      |                  |                    |                     |
| luminous-extended-control                                                                                                 | -                          | -                   | -                  | -               | -                     | +                                               | -                    | -                | -                  | -                   |
| luminous-embedding-128[^*]                                                                                                | -                          | -                   | -                  | -               | -                     | -                                               | -                    | +                | -                  | -                   |

[^*]: This feature is currently in Beta and may contain issues. Only one type of embedding LLM should be used per project. If you choose to use `luminous-embedding-128`, you must create a new project. Once you have chosen an embedding model for a project, you cannot switch to a different embedding model; you must use a different project. Failing to do so will result in errors while this feature is in Beta.

## Add a Model

To add a model to Cognigy.AI, follow these steps:

{! _includes/ai/generative-ai/credentials.md !}

## Apply a Model

{! _includes/ai/generative-ai/apply-model.md !}

## Clone a Model

To create a copy of the existing model, follow these steps:

1. Go to **Build > LLM**.
2. Hover over the existing model and click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg).
3. Select **Clone** from the list.

The model will contain the same settings as the initial one.

## Set a Model as Default

Setting a default model ensures a smooth transition when a specific model is removed. It guarantees that there is always a model available to handle compatible use cases, even if the assigned model is removed.

To set a model as the default, follow these steps:

1. Go to **Build > LLM**.
2. Hover over the existing model and click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg).
3. Select **Make Default** from the list.

The setting will be applied for the selected model.

## Export a Model as a Package

To reuse a model in other agents, you can package the model.

To package a model, follow these steps:

1. Go to **Build > LLM**.
2. Hover over the existing model and click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg).
3. Select **Create a package**.
4. Once the package has created, a new [task](../build/projects.md#tasks), titled **Create package**, will be run. To view the task, click ![task-menu](../../_assets/icons/task-menu.svg) in the upper-right corner.

When the task is completed, the package will be downloaded.

## Delete a Model

Note that a [default model](#set-a-model-as-default) cannot be deleted. Before deletion, you need to remove the default tag.

To delete a model, follow these steps:

1. Go to **Build > LLM**.
2. Hover over the existing model and click ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg).
3. Select **Delete**.
4. Confirm the deletion. Features relying on this model will stop working if no default model is configured to support those features.

The model will be deleted from the list.

## Retry Mechanism

If Cognigy encounters issues while trying to connect with LLM providers that don't return a `200 OK` response code,

Cognigy will automatically attempt to reconnect up to three times using a retry mechanism.
This retry mechanism is designed to improve the reliability and stability of the system  
when using certain Cognigy Nodes and features.
By attempting to reconnect multiple times, it increases the chances of successful communication,
reduces disruptions and ensures smoother operations within the system.

The following Nodes and features are affected by the retry mechanism:

- [LLM Prompt](../build/node-reference/service/llm-prompt.md)
- [LLM Entity Extract](../build/node-reference/other-nodes/llm-entity-extract.md)
- [GPT Conversation](../build/node-reference/service/gpt-conversation.md)
- [Search Extract Output](../build/node-reference/other-nodes/search-extract-output.md)
- Question Node Slot Mapping (in case of using [external NLU embedding](nlu/external/external-nlu-intent-recognition.md))
- [Question Node LLM Reprompting](../build/node-reference/basic/question.md#llm-prompt)
- [Sentiment Analysis](../build/node-reference/ai-copilot/sentiment-tile.md)

The retry mechanism can be customized through the environment variables for the on-premises installations.
By adjusting these environment variables, system administrators can fine-tune the retry behavior
to suit specific performance requirements and network conditions.

| Environment Variable                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Default Value |
|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| GENERATIVE_AI_RETRY_OPTIONS_NUMBER_OF_RETRIES | Determines the number of retries after the first attempt before failing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 2             |
| GENERATIVE_AI_RETRY_OPTIONS_MIN_TIMEOUT       | Determines the timeout between retries to avoid rate limiting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 50ms          |
| GENERATIVE_AI_RETRY_OPTIONS_MAX_TIMEOUT       | Determines the maximum timeout between retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 50ms          |
| GENERATIVE_AI_RETRY_OPTIONS_FACTOR            | Determines how long a retry timeout will last. The timeout duration will increase with each subsequent retry attempt. If the factor is greater than 1, the timeout duration will increase exponentially. This means that with each subsequent attempt, the waiting time will not just increase by a constant amount, but rather by multiples. For example, if the initial timeout is 1 second and the factor is set to 2, then the second timeout will be 2 seconds, the third will be 4 seconds, the fourth will be 8 seconds, and so on. | 1             |

## More Information

- [Generative AI](../empower/generative-ai.md)
- [Knowledge AI](knowledge-ai/overview.md)



