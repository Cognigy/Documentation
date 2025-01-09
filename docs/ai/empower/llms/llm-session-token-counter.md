---
title: "Large Language Model Session Token Counter"
slug: "llm-session-token-counter"
description: "Once you've added an LLM to Cognigy.AI, you can track the LLM token usage with a Code Node."
hidden: false
---

# Large Language Model Session Token Counter

[![Version badge](https://img.shields.io/badge/Updated in-v4.92-blue.svg)](../../../release-notes/4.92.md)

In Cognigy.AI, you can use `api.getLLMTokenUsageForSession()` to fetch the Large Language Model (LLM) total token usage in a conversation or chat session. This way, you can track your [LLM providers](providers/all-providers.md) costs.

The LLM Session Token Counter retrieves the token usage information via LLM provider-specific API calls to return the exact number of tokens the LLM uses. If the information isn't available by the provider, Cognigy.AI estimates the token usage.

## Prerequisite

- You have added a Node that uses an LLM to your Flow, for example, an [AI Agent Node](../../build/node-reference/ai/ai-agent.md), [LLM Prompt Node](../../build/node-reference/service/llm-prompt.md), a [Search Extract Output Node](../../build/node-reference/other-nodes/knowledge-search.md), or [AI Copilot Nodes](../../build/node-reference/ai-copilot/overview.md).

## Limitations

- The LLM Session Token Counter doesn't support embedding models from Aleph Alpha.
- The LLM Session Token Counter doesn't support [fallback LLMs](fallback.md).

## Fetching Session-Wide Token Usage

1. Add a [Code Node](../../build/node-reference/basic/code/overview.md) after the Node that uses an LLM, for example, after an [AI Agent Node](../../build/node-reference/ai/ai-agent.md).
2. Add the following code to the Code Node:

    ```javaScript
    const tokens = api.getLLMTokenUsageForSession();
    ```

This Code Node fetches the total token usage in the session and stores it in the `token` variable.

JSON Example:

```json
{
    "1c945b38-5dbb-4fcf-9fdd-112bd8177f9c": {
        "IlmDisplayName": "openAI - text- embedding-3-large - 1735891122507",
        "providerType": "openAI",
        "modelType" : "text-embedding-3-large",
        "usage": {
            "inputTokens": 6,
            "outputTokens": 0
        }
    },
    "ce190e1f-eff7-4f6b-9074-9f705375a3d3": {
        "IlmDisplayName": "openAI - gpt-40 - 1735891179896",
        "providerType": "openAI",
        "modelType": "gpt-40",
        "usage": {
            "inputTokens": 441,
            "outputTokens": 106
        }
    }
}
```

| Key            | Type   | Description                                                                                    | Example                                            |
|----------------|--------|------------------------------------------------------------------------------------------------|----------------------------------------------------|
| llmReferenceId | Object | The object with the LLM reference ID in Cognigy.AI as key and information about the LLM model. | `1c945b38-5dbb-4fcf-9fdd-112bd8177f9c`             |
| llmDisplayName | String | The name of the LLM Connection.                                                                | `openAI - text- embedding-3-large - 1735891122507` |
| providerType   | String | The LLM provider.                                                                              | `openAI`                                           |
| modelType      | String | The operating system of the user's device.                                                     | `text-embedding-3-large`                           |
| usage          | String | The object containing information about the session total token usage.                         | -                                                  |
| inputTokens    | Number | The token count sent to the LLM model.                                                         | 6                                                  |
| outputTokens   | Number | The token count output by the LLM model.                                                       | 0                                                  |


!!!note "Embedding Models Output Tokens"
    The output tokens count for embedding models is always 0 since embedding models output embedding vectors instead of tokens.

For example, you can add an `api.say()` request in the Code Node for testing purposes.

## More Information

- [Overview](overview.md)
- [LLM Providers](providers/all-providers.md)
- [Model Support by Feature](model-support-by-feature.md)
