---
title: "Agent Assist for Voice"
slug: "voice-agent-assist-webhook-endpoint"
hidden: true
---

# Agent Assist for Voice: Webhook Endpoint 

A Webhook Endpoint needs to be created to receive the transcription and forward it to the Agent Assist Workspace Flow, triggering widget updates.

### Transformers

In the Endpoint configuration, enable input and output transformers.

To ensure that the transcription is received in a format that is easy to work with, add the following transformer code to the Transformer section of the Endpoint. This code will render user and agent messages and forward them to the flow.

With this configuration, you can use the `Agent Message` token to create if-conditions and configure actions based on user and agent input.

You can find the transformer code in our HELP CENTER ARTICLE LINK.

## More information for Voice Use Cases

- [Code Node](code-node.md)
- [Transfer Node](transfer-node.md)
- [Agent Assist for Voice](voice-overview.md)

## More general information

- [Agent Assist Workspace](../overview.md)
- [Getting started with Agent Assist](../getting-started.md)
- [Agent Assist Configuration](../configuration.md)
- [Agent Assist Nodes](../../ai/flow-nodes/agent-assist/overview.md)
- [Agent Assist Embedding](../embedding.md)
- [Agent Assist for Chat](../chat-agent-assist.md)
