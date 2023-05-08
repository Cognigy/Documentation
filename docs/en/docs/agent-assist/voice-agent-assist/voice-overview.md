---
title: "Agent Assist for Voice"
slug: "voice-agent-assist"
hidden: true
---

# Agent Assist for Voice

To configure Agent Assist for Voice you need to have a `main` flow that will transfer the call to a human Agent and your Agent Assist Worspace flow.

The Agent Assist Workspace flow needs a Webhook Endpoint to receive the transcription of the audio stream.

Before handing over to the human Agent you need to add a Code node to send all relevant information to the Contact Center to connect to the right session and Agent Assist Workspace. This information will be sent to your Contact Center via sip headers.

Therefore the Voice configuration consists of 3 parts:

- [Code Node](code-node.md)
- [Transfer Node](transfer-node.md)
- [Webhook Endpoint](webhook-endpoint.md)

!!! note
    This is currently scoped for the embedding into Genesys Cloud CX. Please note that further information might be needed for the embedding into other Contact Centers.

## More information

- [Agent Assist Workspace](overview.md)
- [Getting started with Agent Assist](getting-started.md)
- [Agent Assist Configuration](configuration.md)
- [Agent Assist Nodes](../ai/flow-nodes/agent-assist/overview.md)
- [Agent Assist Embedding](embedding.md)
- [Agent Assist for Chat](chat-agent-assist.md)