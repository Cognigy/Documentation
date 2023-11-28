---
title: "AI Copilot for Voice"
slug: "voice-agent-assist"
hidden: false
---

# AI Copilot for Voice

This feature provides AI Copilot Workspace for integration into contact center voice deployments.

To set up AI Copilot for Voice, you'll need a Main Flow that can transfer the call to a human agent, as well as an AI Copilot Workspace Flow. The Workspace Flow must be configured with a Webhook Endpoint to receive the transcription of the audio stream

Before transferring the call to a human agent, add a Code Node to send all relevant information to the contact center. This information will help the contact center to connect the call to the correct session and AI Copilot Workspace. The information will be sent to the contact center via SIP headers.

The Voice configuration consists of 3 parts:

- [Code Node](code-node.md)
- [Transfer Node](transfer-node.md)
- [Webhook Endpoint](webhook-endpoint.md)

{! _includes/agent-assist/genesys-note.md !}

## More Information

- [AI Copilot Workspace](../overview.md)
- [Getting started with AI Copilot](../getting-started.md)
- [AI Copilot Configuration](../configuration.md)
- [AI Copilot Nodes](../../ai/flow-nodes/ai-copilot/overview.md)
- [AI Copilot Embedding](../embedding.md)
- [AI Copilot for Chat](../chat.md)
- [Integration with Contact Centers](../contact-center-integration.md)