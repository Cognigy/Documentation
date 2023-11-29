---
title: "AI Copilot for Voice: Transfer Node"
slug: "voice-agent-assist-transfer-node"
hidden: false
---

# AI Copilot for Voice: Transfer Node

{! _includes/agent-assist/genesys-note.md !}

When using the Cognigy Voice Gateway, add a Transfer Node to hand over the call to a human agent. 

To transfer the call, select the **Dial** option to remain in the session and transcribe the audio streams.

### Transcription

In this Transfer Node, you need to enable the transcription of audio streams. You can choose between three options:

- **Caller** — the customer audio stream.
- **Called** — the human agent audio stream.
- **Caller/Called** — the customer and the human agent audio stream.

### Transcription Webhook

The **Transcription Webhook** should be set to the Endpoint URL of the [Voice Copilot](../../ai/endpoints/voice-copilot.md) Endpoint that the AI Copilot Workspace flow uses to send the transcription.

### Custom SIP Headers

Activate **Enable Copilot** toggle to provide a Header Key.

To submit the **UUIValue**, add the `User-to-User` key to the **Copilot Headers Key** section within the Transfer Node:



## More Information for Voice Use Cases

- [Voice Copilot](../../ai/endpoints/voice-copilot.md)
- [AI Copilot for Voice](voice-overview.md)

## More general information

- [AI Copilot Workspace](../overview.md)
- [Getting started with AI Copilot](../getting-started.md)
- [AI Copilot Configuration](../configuration.md)
- [AI Copilot Nodes](../../ai/flow-nodes/ai-copilot/overview.md)
- [AI Copilot Embedding](../embedding.md)
- [AI Copilot for Chat](../chat.md)
- [Integration with Contact Centers](../contact-center-integration.md)
