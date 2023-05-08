---
title: "Embedding"
slug: "embedding"
hidden: true
---

# Agent Assist Workspace Embedding

Agent Assist is supported by all handover providers.

!!! note
    This is currently scoped for the embedding into Genesys Cloud CX. Please note that further information might be needed for the embedding into other Contact Centers.

To embed the workspace into Genesys you will need to create a script in Genesys and add an iFrame to it.
In there you need to add a value to display the Agent Assist Workspace.

## For Chat Use Cases:

`Agent Assist Embedding URL` needs to be added.
You can find this value in the Endpoint under Agent Assist.

## For Voice Use Cases:

`UUIValue` needs to be added. 
This will be generated and forwarded via sip hedaers while doing the transfer to the human agent.


## More information

- [Agent Assist Workspace](overview.md)
- [Getting started with Agent Assist](getting-started.md)
- [Agent Assist Configuration](configuration.md)
- [Agent Assist Nodes](../ai/flow-nodes/agent-assist/overview.md)
- [Agent Assist for Voice](../agent-assist/voice-agent-assist/voice-overview.md)
- [Agent Assist for Chat](chat-agent-assist.md)
