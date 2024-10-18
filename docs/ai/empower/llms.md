---
title: "Large Language Models"
slug: "LLMs"
description: "Large Language Models (LLMs) in Cognigy are advanced Generative AI models that generate humanlike text based on input and context. Trained on vast text data, they understand user input, provide contextually appropriate responses, manage dialogues, and offer multilingual support for an enhanced conversational experience."
hidden: false
---
# Large Language Models (LLMs)

[![Version badge](https://img.shields.io/badge/Updated in-v4.84-blue.svg)](../../release-notes/4.84.md)

[Large Language Models (LLMs)](https://en.wikipedia.org/wiki/Large_language_model) are specific types of AI models that are designed for generating humanlike text based on the input and context provided. These models are trained on vast amounts of text data, allowing them to learn patterns, syntax, and semantic relationships between words and phrases.

With LLMs, Cognigy AI Agents can understand and respond to user input in a natural way. These models make conversations more engaging by generating relevant and contextually appropriate responses. LLMs also assist in managing dialogues and providing multilingual support, enhancing the overall conversational experience for users.


## Add a Model

To add a model to Cognigy.AI, follow these steps:

{! _includes/ai/generative-ai/credentials.md !}

### Deprecation of Old Connections for Microsoft Azure OpenAI

In recent releases, we have updated the connection settings to Microsoft Azure OpenAI models.

If you have old connections (for example, created in the 4.53 release) to Azure OpenAI,
these connections have an `AzureOpenAIProvider` type and are marked with a **Deprecated** label.
Although these connections can still be active,
we strongly recommend creating a model with the new `AzureOpenAIProviderV2` type,
as old connection types will no longer be available in the future.

Note that for some Microsoft Azure OpenAI models, such as `text-embedding-ada-002` for knowledge search features, you might encounter the following error when an LLM is triggered:
`Error while performing knowledge search. Remote returned error: Search failed: Could not fetch embeddings due to missing API resource name for Azure OpenAI`.
To resolve the issue, recreate the model and the connection so that both are updated to the latest format.

## Apply a Model

{! _includes/ai/generative-ai/apply-model.md !}


## More Information

- [Generative AI](../empower/generative-ai.md)
- [Knowledge AI](knowledge-ai/overview.md)



