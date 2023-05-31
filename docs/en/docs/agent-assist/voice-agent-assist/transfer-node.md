---
title: "Agent Assist for Voice: Transfer Node"
slug: "voice-agent-assist-transfer-node"
hidden: false
---

#  Agent Assist for Voice: Transfer Node

When using the Cognigy Voice Gateway, you need to add a Transfer Node to hand over the call to a human agent. 

To transfer the call, select the **Dial** option to remain in the session and transcribe the audio streams.

### Transcription

In this Transfer Node you need to enable the transcription of audio streams. You can choose between three options:

- **Caller** — the customer audio stream.
- **Called** — the human agent audio stream.
- **Caller/Called** — the customer and the human agent audio stream.

### Transcription Webhook

The **Transcription Webhook** should be set to the Endpoint URL of the Webhook Endpoint that the Agent Assist Workspace flow uses to send the transcription.

### Custom SIP Headers

To submit the **UUIValue** created in the Code Node before, add following to the **Custom SIP Headers** section within the Transfer Node:

<code>
{
    "User-to-User": "&lcub;&lcub;input.UUIValue&rcub;&rcub;"
}
</code>

{! _includes/agent-assist/genesys-note.md !}

## More information for Voice Use Cases

- [Code Node](code-node.md)
- [Webhook Endpoint](webhook-endpoint.md)
- [Agent Assist for Voice](../../agent-assist/voice-agent-assist/voice-overview.md)

## More general information

- [Agent Assist Workspace](../overview.md)
- [Getting started with Agent Assist](../getting-started.md)
- [Agent Assist Configuration](../configuration.md)
- [Agent Assist Nodes](../../ai/flow-nodes/agent-assist/overview.md)
- [Agent Assist Embedding](../embedding.md)
- [Agent Assist for Chat](../chat-agent-assist.md)
- [Integration with Contact Centers](../contact-center-integration.md)
