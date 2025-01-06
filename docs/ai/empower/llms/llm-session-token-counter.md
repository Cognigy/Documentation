---
title: "Large Language Model Session Token Counter"
slug: "llm-session-token-counter"
description: "Once you've added an LLM to Cognigy.AI, you can track the LLM token usage with a Code Node."
hidden: false
---

# Large Language Model Session Token Counter

[![Version badge](https://img.shields.io/badge/Updated in-v4.92-blue.svg)](../../../release-notes/4.92.md)

In Cognigy.AI, you can use a [Code Node](../../build/node-reference/basic/code/overview.md) to track and output the Large Language Model (LLM) total token usage in a chat session. This way, you can track your [LLM providers](providers/all-providers.md) costs.

## Prerequisite

- You have added a Node that uses an LLM to your Flow, for example, an [AI Agent Node](../../build/node-reference/ai/ai-agent.md), [LLM Prompt Node](../../build/node-reference/service/llm-prompt.md), a [Search Extract Output Node](../../build/node-reference/other-nodes/knowledge-search.md), or [AI Copilot Nodes](../../build/node-reference/ai-copilot/overview.md).

## Limitations

- The LLM Session Token Counter supports only [OpenAI](providers/openai.md) and [Azure OpenAI](providers/microsoft-azure-openai.md) embedding models. If you configure an Aleph Alpha embedding model, you receive 0 as the total token count.

## Set Up an LLM Session Token Counter

1. Add a Code Node after the Node that uses an LLM, for example, after an [AI Agent Node](../../build/node-reference/ai/ai-agent.md).
2. Add the following API request to the Code Node:

    ```javaScript
    const tokens = api.getLLMTokenUsageForSession();
    ```

This API request fetches the total token usage in the session and you can output it in JSON format.

## LLM Session Token Counter Output

After your Flow triggers the LLM, the Code Node outputs the total token usage for each model used in your session:

<figure>
    <img class="image-center" src="../../../_assets/ai/empower/llms/llm-token-counter.png" width="50%" alt="LLM Token Counter output in chat session">
</figure>

The LLM Token Counter displays the total input and output tokens within the chat sessions in the `inputTokens` and `outputTokens` JSON parameters.

!!!note "Embedding Models Output Tokens"
    The output tokens count for embedding models is always 0 since embedding models can only generate embeddings.

## More Information

- [Overview](overview.md)
- [LLM Providers](providers/all-providers.md)
- [Model Support by Feature](model-support-by-feature.md)
