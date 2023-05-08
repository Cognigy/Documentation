---
title: "Embedding"
slug: "embedding"
hidden: true
---

# Agent Assist Workspace Embedding

Agent Assist is supported by all handover providers.

{! _includes/agent-assist/genesys-note.md !}

To embed the workspace into Genesys you will need to create a script in Genesys and add an iFrame to it.

To display the Agent Assist Workspace, you need to add a value in the respective field:

- For Chat Use Cases - add the **Agent Assist Embedding URL** value, which can be found in the Endpoint under Agent Assist.
- For Voice Use Cases - add the **UUIValue** value, which will be generated and forwarded via SIP headers during the transfer to the human agent.

## More information

- [Agent Assist Workspace](overview.md)
- [Getting started with Agent Assist](getting-started.md)
- [Agent Assist Configuration](configuration.md)
- [Agent Assist Nodes](../ai/flow-nodes/agent-assist/overview.md)
- [Agent Assist for Voice](../agent-assist/voice-agent-assist/voice-overview.md)
- [Agent Assist for Chat](chat-agent-assist.md)
