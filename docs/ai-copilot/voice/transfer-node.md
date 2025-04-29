---
title: "AI Copilot for Voice: Transfer Node"
slug: "voice-agent-assist-transfer-node"
hidden: false
---

# AI Copilot for Voice: Transfer Node

When using the Cognigy Voice Gateway, add a [Transfer](../../ai/build/node-reference/voice/voice-gateway/transfer.md) Node to hand over the call to a human agent. 

To transfer the call, select the **Dial** option to remain in the session and transcribe the audio streams.

## Enable Copilot

The toggle to enable Copilot will create a UUIValue. This UUIValue creates the AI Copilot URL, which will be sent to the Contact Center when transferring via SIP Headers.

The UUIValue has the following structure: `${AICopilotBaseUrl}/?userId=${userId}&sessionId=${sessionId}&URLToken=${URLToken}`

## Transcription

In this Transfer Node, you need to enable the transcription of audio streams. You can choose between three options:

- **Caller** — the customer audio stream.
- **Called** — the human agent audio stream.
- **Caller/Called** — the customer and the human agent audio stream.

## Transcription Webhook

The **Transcription Webhook** should be set to the Endpoint URL of the [Voice Copilot](../../ai/deploy/endpoint-reference/voice-copilot.md) Endpoint
that the AI Copilot workspace Flow utilizes for sending transcriptions.

## Custom SIP Headers

Activate the **Enable Copilot** toggle to generate a Header Key. This header key is used to submit the UUIValue. Note that the Header Key should align with the requirements of your Contact Center. For example, the header key for Genesys Cloud CX is `User-to-User`.

## More Information for Voice Use Cases

- [Voice Copilot](../../ai/deploy/endpoint-reference/voice-copilot.md)
- [AI Copilot for Voice](voice-overview.md)

## More general information

- [AI Copilot Workspace](../overview.md)
- [Getting started with AI Copilot](../getting-started.md)
- [AI Copilot Configuration](../configuration.md)
- [AI Copilot Nodes](../../ai/build/node-reference/ai-copilot/overview.md)
- [AI Copilot Embedding](../embedding.md)
- [AI Copilot for Chat](../chat.md)
- [Integration with Contact Centers](../contact-center-integration.md)
