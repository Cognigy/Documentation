---
title: "Overview"
slug: "overview"
description: "Large Language Models (LLMs) in Cognigy are advanced Generative AI models that generate humanlike text based on input and context. Trained on vast text data, they understand user input, provide contextually appropriate responses, manage dialogues, and offer multilingual support for an enhanced conversational experience."
hidden: false
tags:
  - llms
  - Large Language Models 
  - out-of-box models
  - standard custom models
  - custom models
---

# Large Language Models (LLMs)

[![Version badge](https://img.shields.io/badge/Updated in-v4.90-blue.svg)](../../../release-notes/4.90.md)

[Large Language Models (LLMs)](https://en.wikipedia.org/wiki/Large_language_model) are specific types of AI models that are designed for generating humanlike text based on the input and context provided. These models are trained on vast amounts of text data, allowing them to learn patterns, syntax, and semantic relationships between words and phrases.

With LLMs, Cognigy AI Agents can understand and respond to user input in a natural way. These models make conversations more engaging by generating relevant and contextually appropriate responses. LLMs also help in managing dialogues and providing multilingual support, enhancing the overall conversational experience for users.

In the Cognigy.AI interface, you can connect to an LLM provider of your choice via API.
Cognigy.AI supports LLM integration with top providers such as OpenAI, Azure, Anthropic, Amazon Bedrock, Google, and Aleph Alpha.

To integrate an LLM into your conversational design process within Cognigy.AI, follow these steps:

1. [Determine a use case that aligns with your business objectives](#use-cases). 
2. [Select a standard or custom model](#model-types) from a preferred LLM provider. Ensure that you have all the necessary API credentials to access the specific LLM you intend to use. 
3. Make sure to familiarize yourself with [Cognigy.AI's retry mechanism](#retry-mechanism) in case the model does not respond.
4. _(Beta)_ Implement a [fallback strategy](#llm-fallback-beta) to enhance the reliability of the model's connection.

## Use Cases

Explore key use cases that illustrate how LLMs can be utilized in Cognigy.AI, and learn about the features necessary to implement these use cases:

??? info "Automate Routine Tasks"

    In the Cognigy interface, LLMs help automate repetitive tasks that previously required manual effort from conversation designers:

    - **Generate Flows**. LLMs can generate Flows based on the provided title and description, helping save time during conversation design iterations. To generate Flows, refer to the [Generate Flows](../generative-ai.md#generate-flows) section.
    - **Generate Lexicons**. With LLMs, you can build a list of Keyphrases for the language of your choice based on the title and description of the provided Lexicon. To generate Lexicons, refer to the [Generate Lexicons](../generative-ai.md#generate-lexicons) section.
    - **Generate Intent sentences**. With LLMs, you can build a list of Intent sentences based on the title and description of the provided Intent. To generate Intents, refer to the [Generate Intent Sentences](../generative-ai.md#generate-intent-sentences) section.
    - **Generate adaptive cards**. LLMs can create Adaptive Cards based on the prompt you provide in the description field for the **Adaptive Card** output type in the [Say](../../build/node-reference/basic/say.md#adaptive-card) or [Copilot: Adaptive Card Tile](../../build/node-reference/ai-copilot/set-adaptive-card-tile.md) Nodes.

??? info "Improve AI Agent's Output"

    The AI Agent's output often requires refinement to meet the high standards customers expect.
    In Cognigy.AI, LLMs can enhance the performance of AI Agents in various ways:

    - **Generate Enhanced Output**. By using LLMs, AI Agents can produce responses that are more comprehensive, nuanced, and in line with customer needs. This enhancement is important in handling queries that require a level of empathy or complex information processing. To generate enhanced output, add [LLM Prompt Nodes](../../build/node-reference/service/llm-prompt.md) within your Flow.
    - **Rephrase AI Agent's Output**. LLMs are good at rephrasing texts while maintaining the original meaning. This capability allows for smoother communication if the original output of an AI Agent lacks clarity or tone alignment. To use this capability, enable AI-enhanced rephrasing in [Say](../../build/node-reference/basic/say.md#ai-enhanced-output), [Question](../../build/node-reference/basic/question.md), or [Optional Question](../../build/node-reference/basic/optional-question.md) Nodes by selecting the **Rephrase Output** option in the **AI-enhanced output** section. Also, you can generate dynamic reprompts for incorrect answers via [Question Nodes](../../build/node-reference/basic/question.md#reprompt-methods).
    - **Train Intents and Find the Right Intent**. To enhance AI Agents' understanding of user inputs in various languages, use an [external embedding LLM](../nlu/external/external-nlu-intent-recognition.md). Also, optimize intent classification accuracy by using [LLM-based intent reranking](../nlu/external/intent-reranking.md), which prioritizes and selects the most relevant intent.

??? info "Use Retrieval Augmented Generation (RAG) with Knowledge AI"

    [RAG (Retrieval-Augmented Generation)](https://en.wikipedia.org/wiki/Retrieval-augmented_generation) is an AI framework that combines data from information retrieval systems with LLMs. This AI framework makes AI-generated content more accurate and relevant by focusing on specific, up-to-date information.
    
    The [Cognigy Knowledge AI](../knowledge-ai/overview.md) feature is built on the RAG framework, allowing it to retrieve information from various knowledge bases, including PDFs, Word documents, PowerPoint presentations, web pages, and images. Knowledge AI assists both AI and human agents in providing better responses:
    
    - **Use Knowledge AI for AI Agents**. Using LLMs integrated into your Project, AI Agents can access relevant knowledge sources, including articles from subject-matter experts, frequently asked questions, and diagrams. To create a first Knowledge Store, go to the [Knowledge AI](../knowledge-ai/overview.md#create-a-knowledge-store) documentation. Then, retrieve data from the Knowledge Store and improve the AI Agent's output by using the [Search Extract Output](../../build/node-reference/other-nodes/search-extract-output.md) Node.
    - **Use Knowledge AI for human agents**. By retrieving data from different knowledge bases, LLMs reduce the burden on human agents, making information access quicker and more efficient. To let human agents use the knowledge base for solving tasks, add a widget to the AI Copilot workspace using a [Copilot: Knowledge Tile](../../build/node-reference/ai-copilot/knowledge-tile.md) Node. The widget serves as a search tool, enabling human agents to enter questions and retrieve information from the knowledge base.

??? info "Extract Specific Entities from User Inputs"

    By using LLMs, you can extract specific entities from user inputs, such as product or booking codes and customer IDs.
    For example, if a user input is `I would like to book flight AB123 from New York to London`,
    the LLM can extract the booking code `AB123` from this input. 
    This capability allows for dynamic, context-aware responses while improving accuracy and reducing manual data entry.
    To add this feature to your AI Agent,
    add the [LLM Entity Extract](../../build/node-reference/other-nodes/llm-entity-extract.md) Node within your Flow.
    
    <figure>
      <img class="image-center" src="../../../../_assets/ai/empower/llms/llm-entity-extract.png" width="70%"/>
      <figcaption>Testing the LLM Entity Extract Node via the Interaction Panel</figcaption>
    </figure>

??? info "Determine the Emotional Tone of the Conversation"

    Understanding the emotional tone of customer interactions is crucial. LLMs can analyze conversations in real time to determine customer sentiment. 
    With AI Copilot sentiment analysis, LLMs can give insights, enabling human agents to adjust responses for a more effective interaction and improved service quality.
    To let human agents use sentiment analysis provided by LLM,
    add a widget to the AI Copilot workspace
    using an [AI Copilot: Sentiment Analysis Tile](../../build/node-reference/ai-copilot/sentiment-tile.md) Node. The widget monitors the conversation and displays the emotional tone (positive, negative, or neutral) of the latest user input in real time.
    
    <figure>
      <img class="image-center" src="../../../../_assets/ai/empower/llms/copilot-sentiment-tile.png" width="70%"/>
      <figcaption>The configuration defined for the Sentiment Analysis Tile Node is displayed as a widget in the AI Copilot workspace</figcaption>
    </figure>

??? info "Ensure LLM Accuracy with Human Review"

    Even though LLMs are powerful, there are situations where human oversight is essential.
    Errors in data retrieval or sentiment analysis can occur, especially with nuanced or complex information.
    Human review can help minimize these errors.
    
    AI Copilot provides [plug-and-play widgets](../../../ai-copilot/plug-and-play-widgets.md) in the [workspace](../../../ai-copilot/index.md), allowing human agents to review the output generated by LLMs before sending responses to customers. 
    This human-in-the-loop approach ensures that wrong or misleading information doesn't reach customers.

## Model Types

In Cognigy.AI, you can add an LLM from the offered LLM providers as either a standard model or a custom model.

### Standard Models

_Standard models_ are predefined models in the Cognigy.AI interface.
To use a standard model, select an LLM provider and model name from the list of [predefined models](model-support-by-feature.md). 
By choosing a standard model, you can ensure that this model is fully compatible with Cognigy.AI features.

After selecting a model, you must enter the API credentials from the [LLM provider](providers/all-providers.md) that offers this model to get access to its functionality.

### Custom Models

_Custom models_ are non-predefined models in the Cognigy.AI interface. To use a custom model, select an LLM provider and manually enter the model name instead of selecting from a list. While these models may not guarantee the same Cognigy.AI feature support as standard models, they can be helpful when you need a specific version and are familiar with its capabilities. Moreover, if LLM providers release new model versions, opting for a custom model lets you avoid waiting for Cognigy.AI to update its list of standard models.

Similar to the standard model, you must enter the API credentials from the [LLM provider](providers/all-providers.md) that offers this model to get access to its functionality.

## Retry Mechanism

If Cognigy.AI encounters issues while trying to connect with LLM providers that don't return a `200 OK` response code,
Cognigy.AI will automatically attempt to reconnect up to three times using a retry mechanism.
This retry mechanism is designed to improve the reliability and stability of the system when using certain Cognigy Nodes and features.
By attempting to reconnect multiple times, the retry mechanism increases the chances of successful communication, reduces disruptions and ensures smoother operations within the system.

The following Nodes and features are affected by the retry mechanism:

- [LLM Prompt](../../build/node-reference/service/llm-prompt.md)
- [LLM Entity Extract](../../build/node-reference/other-nodes/llm-entity-extract.md)
- [GPT Conversation](../../build/node-reference/service/gpt-conversation.md)
- [Search Extract Output](../../build/node-reference/other-nodes/search-extract-output.md)
- Question Node Slot Mapping (in case of using [external NLU embedding](../nlu/external/external-nlu-intent-recognition.md))
- [Question Node LLM Reprompting](../../build/node-reference/basic/question.md#llm-prompt)
- [Sentiment Analysis](../../build/node-reference/ai-copilot/sentiment-tile.md)

??? info "Retry Mechanism for On-Premises"
    The retry mechanism can be customized through the environment variables for the on-premises installations.
    By adjusting these environment variables, system administrators can fine-tune the retry behavior
    to suit specific performance requirements and network conditions.

    | Environment Variable                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Default Value |
    |-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
    | GENERATIVE_AI_RETRY_OPTIONS_NUMBER_OF_RETRIES | Determines the number of retries after the first attempt before failing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 2             |
    | GENERATIVE_AI_RETRY_OPTIONS_MIN_TIMEOUT       | Determines the timeout between retries to avoid rate limiting.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | 50ms          |
    | GENERATIVE_AI_RETRY_OPTIONS_MAX_TIMEOUT       | Determines the maximum timeout between retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | 50ms          |
    | GENERATIVE_AI_RETRY_OPTIONS_FACTOR            | Determines how long a retry timeout will last. The timeout duration will increase with each subsequent retry attempt. If the factor is greater than 1, the timeout duration will increase exponentially. This means that with each subsequent attempt, the waiting time will not just increase by a constant amount, but rather by multiples. For example, if the initial timeout is 1 second and the factor is set to 2, then the second timeout will be 2 seconds, the third will be 4 seconds, the fourth will be 8 seconds, and so on. | 1             |

## LLM Fallback (Beta)

As an alternative to the [default retry mechanism](#retry-mechanism) that is applicable to all models, you can override it for a specific model by using an [LLM fallback](fallback.md).
Create a fallback model to ensure your AI agents continue working if the main model fails. 
Set a threshold for failed requests to trigger the fallback, specify its active duration, and enable notifications.
Note that creating fallbacks for embedding models is not supported.

## More Information

- [Supported LLM Providers](providers/all-providers.md)
- [Model Support by Feature](model-support-by-feature.md)
- [Other LLM Operations](other-operations.md)
- [Generative AI](../generative-ai.md)
- [Knowledge AI](../knowledge-ai/overview.md)