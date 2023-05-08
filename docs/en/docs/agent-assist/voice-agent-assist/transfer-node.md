---
title: "Agent Assist for Voice"
slug: "voice-agent-assist-transfer-node"
hidden: true
---

# Agent Assist for Voice

## Transfer Node

While using `Cognigy Voice Gateway` you need a `Transfer Node` that will handover the call to the human agent.

To transfer the call you need to choose the `Dial`option to stay in the session to transcribe the audio streams.

### Transcription

In this Transfer Node you need to enable the transcription of audio streams. You can choose between three options:

- Caller (the customers audio stream)
- Called (the human Agents audio stream)
- Caller/Called (the customer and the human Agents audio stream)

### Transcription Webhook

The `Transcription Webhook` should be the Endpoint URL of the Webhook Endpoint which shows to the Agent Assist Workspace flow, to send the transcription.

### Custom SIP Headers

To submit the `UUIValue` created in the Code Node before, add following to the Custom SIP Headers section within the `Transfer Node`:

{
    "User-to-User": "{{input.UUIValue}}"
}

!!! note
    This is currently scoped for the embedding into Genesys Cloud CX. Please note that further information might be needed for the embedding into other Contact Centers.


## More information for Voice Use Cases

- [Code Node](code-node.md)
- [Webhook Endpoint](webhook-endpoint.md)
- [Agent Assist for Voice](../agent-assist/voice-agent-assist/voice-overview.md)

## More general information

- [Agent Assist Workspace](overview.md)
- [Getting started with Agent Assist](getting-started.md)
- [Agent Assist Configuration](configuration.md)
- [Agent Assist Nodes](../ai/flow-nodes/agent-assist/overview.md)
- [Agent Assist Embedding](embedding.md)
- [Agent Assist for Chat](chat-agent-assist.md)
