---
title: "Agent Copilot for Voice"
slug: "voice-agent-assist"
hidden: false
---

# Agent Copilot for Voice

This feature provides an Agent Copilot workspace for integration into contact center voice deployments.

To set up Agent Copilot for Voice, you'll need a Main Flow capable of transferring the call to a human agent, as well as an Agent Copilot workspace Flow. The Workspace Flow will be executed through the Voice Copilot Endpoint, which receives the transcription of the audio stream.

Before transferring the call to a human agent, add a Transfer Node to route the call to the contact center via SIP headers.

The voice configuration contains the following parts:

- [Transfer Node](transfer-node.md)
- [Voice Copilot Endpoint](../../ai/deploy/endpoint-reference/voice-copilot.md)

## More Information

- [Agent Copilot Workspace](../overview.md)
- [Getting started with Agent Copilot](../getting-started.md)
- [Agent Copilot Configuration](../configuration.md)
- [Agent Copilot Nodes](../../ai/build/node-reference/ai-copilot/overview.md)
- [Agent Copilot Embedding](../embedding.md)
- [Agent Copilot for Chat](../chat.md)
- [Integration with Contact Centers](../contact-center-integration.md)