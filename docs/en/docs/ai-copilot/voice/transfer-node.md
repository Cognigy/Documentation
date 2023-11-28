---
title: "AI Copilot for Voice: Transfer Node"
slug: "voice-agent-assist-transfer-node"
hidden: false
---

# AI Copilot for Voice: Transfer Node

When using the Cognigy Voice Gateway, you need to add a Transfer Node to hand over the call to a human agent. 

To transfer the call, select the **Dial** option to remain in the session and transcribe the audio streams.

### Transcription

In this Transfer Node you need to enable the transcription of audio streams. You can choose between three options:

- **Caller** — the customer audio stream.
- **Called** — the human agent audio stream.
- **Caller/Called** — the customer and the human agent audio stream.

### Transcription Webhook

The **Transcription Webhook** should be set to the Endpoint URL of the Webhook Endpoint that the AI Copilot Workspace flow uses to send the transcription.

### Custom SIP Headers

To submit the **UUIValue** created in the Code Node before, add following to the **Custom SIP Headers** section within the Transfer Node:

<code>
{
    "User-to-User": "&lcub;&lcub;input.UUIValue&rcub;&rcub;"
}
</code>

{! _includes/agent-assist/genesys-note.md !}

## More Information for Voice Use Cases

- [Code Node](code-node.md)
- [Webhook Endpoint](webhook-endpoint.md)
- [AI Copilot for Voice](/voice-overview.md)

## More general information

- [AI Copilot Workspace](../overview.md)
- [Getting started with AI Copilot](../getting-started.md)
- [AI Copilot Configuration](../configuration.md)
- [AI Copilot Nodes](../../ai/flow-nodes/ai-copilot/overview.md)
- [AI Copilot Embedding](../embedding.md)
- [AI Copilot for Chat](../chat.md)
- [Integration with Contact Centers](../contact-center-integration.md)
