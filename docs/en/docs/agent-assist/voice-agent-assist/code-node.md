---
title: "Agent Assist for Voice"
slug: "voice-agent-assist-code-node"
hidden: true
---

# Agent Assist for Voice: Code Node 

To connect to the correct session and Agent Assist Workspace in your contact center, submit all relevant information, including `aawBaseUrl`, `projectId`, `organizationId`, `configId`, `URLToken`, `sessionId`, and `userId`. To do this, you will need to add a Code Node before your Transfer Node.

The [Help Center article](https://support.cognigy.com/hc/en-us/articles/8726770604572#code-node-0-3) contains the Code Node that will generate a **UUIValue**, which will be forwarded as a SIP header when transferring the call.

{! _includes/agent-assist/genesys-note.md !}

## More information for Voice Use Cases

- [Transfer Node](transfer-node.md)
- [Webhook Endpoint](webhook-endpoint.md)
- [Agent Assist for Voice](voice-overview.md)

## More general information

- [Agent Assist Workspace](../overview.md)
- [Getting started with Agent Assist](../getting-started.md)
- [Agent Assist Configuration](../configuration.md)
- [Agent Assist Nodes](../../ai/flow-nodes/agent-assist/overview.md)
- [Agent Assist Embedding](../embedding.md)
- [Agent Assist for Chat](../chat-agent-assist.md)
- [Integration with Contact Centers](../contact-center-integration.md)
