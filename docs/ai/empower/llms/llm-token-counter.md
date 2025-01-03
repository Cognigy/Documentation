---
title: "Large Language Model Token Counter"
slug: "llm-token-counter"
description: "Once you've added an LLM to Cognigy.AI, you can track the LLM token usage with a Code Node."
hidden: false
---

# Large Language Model Token Counter

In Cognigy.AI, you can use a [Code Node](../../build/node-reference/basic/code/overview.md) to track the Large Language Model (LLM) token usage for Knowledge Search and Answer Extraction. This way, you can track your [LLM providers](providers/all-providers.md) costs.

The LLM Token Counter capability outputs the total token usage of each model you are using for Knowledge Search and Answer Extraction within a chat session.

## Prerequisite

- You have configured LLMs that [support Knowledge Search and Answer Extraction](model-support-by-feature.md).
- You have added a [Search Extract Output Node](../../build/node-reference/other-nodes/knowledge-search.md), [AI Agent Node](../../build/node-reference/ai/ai-agent.md), or [AI Copilot Nodes](../../build/node-reference/ai-copilot/overview.md) to your Flow to perform Knowledge Search and Answer Extraction.

## Limitations

- The LLM Token Counter supports only [OpenAI](providers/openai.md) and [Azure OpenAI](providers/microsoft-azure-openai.md) embedding models for Knowledge Search. If you configure an Aleph Alpha embedding model for Knowledge Search, you receive 0 as the total token count.

## Set Up an LLM Token Counter

1. Add a Code Node following the Node with which you perform a Knowledge Search and Answer Extraction, for example, a Search Extract Output Node.
2. Add the following code to the Code Node:

    ```javaScript
    // fetches the token usage
    const tokens = api.getLLMTokenUsageForSession();

    // outputs the token usage
    api.say("Total conversation token usage: ", tokens);

    ```

    `"Total conversation token usage: "` corresponds to the message text the LLM Token Counter sends to indicate the token usage. You can change the message text as needed. `tokens` corresponds to the token usage values. The LLM Token Counter sends the token usage in JSON format after the message text.

After carrying out the Knowledge Search and Answer Extraction, the Code Node provides the following message with the token usage for the Knowledge Search model first and the Answer Extraction model later:

<figure>
    <img class="image-center" src="../../../_assets/ai/empower/llms/llm-token-counter.png" width="50%" alt="LLM Token Counter output in chat session">
</figure>

The LLM Token Counter displays the total input and output tokens within the chat sessions in the `inputTokens` and `outputTokens` JSON parameters. The output token count for the Knowledge Search model is always 0. 

## More Information

- [Overview](overview.md)
- [LLM Providers](providers/all-providers.md)
- [Model Support by Feature](model-support-by-feature.md)
