---
title: "AI Copilot for Voice"
slug: "voice-agent-assist"
hidden: false
---

# AI Copilot for Voice

This feature provides an AI Copilot Workspace for integration into contact center voice deployments.

To set up AI Copilot for Voice, you'll need a Main Flow capable of transferring the call to a human agent, as well as an AI Copilot Workspace Flow. The Workspace Flow must be configured with a Webhook Endpoint to receive the transcription of the audio stream.

Before transferring the call to a human agent, add a Transfer Node to route the call to the contact center via SIP headers.

The voice configuration contains the following parts:

- [Transfer Node](transfer-node.md)
- [Voice Copilot Endpoint](../../ai/endpoints/voice-copilot.md)

{! _includes/agent-assist/genesys-note.md !}

## More Information

- [AI Copilot Workspace](../overview.md)
- [Getting started with AI Copilot](../getting-started.md)
- [AI Copilot Configuration](../configuration.md)
- [AI Copilot Nodes](../../ai/flow-nodes/ai-copilot/overview.md)
- [AI Copilot Embedding](../embedding.md)
- [AI Copilot for Chat](../chat.md)
- [Integration with Contact Centers](../contact-center-integration.md)