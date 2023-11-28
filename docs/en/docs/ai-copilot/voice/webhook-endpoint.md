---
title: "AI Copilot for Voice: Webhook Endpoint"
slug: "voice-webhook-endpoint"
hidden: false
---

# AI Copilot for Voice: Webhook Endpoint 

A Webhook Endpoint needs to be created to receive the transcription and forward it to the AI Copilot Workspace Flow, triggering widget updates.

### Transformers

In the Endpoint configuration, enable input and output transformers.

To ensure that the transcription is received in a format that is easy to work with, add the following transformer code to the Transformer section of the Endpoint. This code will render user and agent messages and forward them to the flow.

With this configuration, you can use the `Agent Message` token to create if-conditions and configure actions based on user and agent input.

You can find the transformer code in the [Help Center article](https://support.cognigy.com/hc/en-us/articles/8726770604572#transformers-0-11).

## More Information for Voice Use Cases

- [Code Node](code-node.md)
- [Transfer Node](transfer-node.md)
- [AI Copilot for Voice](voice-overview.md)

## More general information

- [AI Copilot Workspace](../overview.md)
- [Getting started with AI Copilot](../getting-started.md)
- [AI Copilot Configuration](../configuration.md)
- [AI Copilot Nodes](../../ai/flow-nodes/ai-copilot/overview.md)
- [AI Copilot Embedding](../embedding.md)
- [AI Copilot for Chat](../chat.md)
- [Integration with Contact Centers](../contact-center-integration.md)