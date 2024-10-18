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

## Use Cases


## Custom Model


## Retry Mechanism

If Cognigy encounters issues while trying to connect with LLM providers that don't return a `200 OK` response code, Cognigy will automatically attempt to reconnect up to three times using a retry mechanism.
This retry mechanism is designed to improve the reliability and stability of the system when using certain Cognigy Nodes and features.
By attempting to reconnect multiple times, it increases the chances of successful communication, reduces disruptions and ensures smoother operations within the system.

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


