---
title: "Agent Assist for Voice"
slug: "voice-agent-assist"
hidden: true
---

# Agent Assist for Voice

This feature provides Agent Assist Workspace for integration into contact center voice deployments.

To set up Agent Assist for Voice, you'll need a Main Flow that can transfer the call to a human agent, as well as an Agent Assist Workspace Flow. The Workspace Flow must be configured with a Webhook Endpoint to receive the transcription of the audio stream

Before transferring the call to a human agent, add a Code Node to send all relevant information to the contact center. This information will help the contact center to connect the call to the correct session and Agent Assist Workspace. The information will be sent to the contact center via SIP headers.

The Voice configuration consists of 3 parts:

- [Code Node](code-node.md)
- [Transfer Node](transfer-node.md)
- [Webhook Endpoint](webhook-endpoint.md)

{! _includes/agent-assist/genesys-note.md !}

## More information

- [Agent Assist Workspace](../overview.md)
- [Getting started with Agent Assist](../getting-started.md)
- [Agent Assist Configuration](../configuration.md)
- [Agent Assist Nodes](../../ai/flow-nodes/agent-assist/overview.md)
- [Agent Assist Embedding](../embedding.md)
- [Agent Assist for Chat](../chat-agent-assist.md)