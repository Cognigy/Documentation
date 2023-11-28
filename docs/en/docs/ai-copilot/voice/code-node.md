---
title: "AI Copilot for Voice: Code Node"
slug: "voice-agent-assist-code-node"
hidden: false
---

# AI Copilot for Voice: Code Node 

To connect to the correct session and AI Copilot Workspace in your contact center, submit all relevant information, including `aawBaseUrl`, `projectId`, `organizationId`, `configId`, `URLToken`, `sessionId`, and `userId`. To do this, you will need to add a Code Node before your Transfer Node.

The [Help Center article](https://support.cognigy.com/hc/en-us/articles/8726770604572#code-node-0-3) contains the Code Node that will generate a **UUIValue**, which will be forwarded as a SIP header when transferring the call.

{! _includes/agent-assist/genesys-note.md !}

## More Information for Voice Use Cases

- [Transfer Node](transfer-node.md)
- [Webhook Endpoint](webhook-endpoint.md)
- [AI Copilot for Voice](voice-overview.md)

## More general information

- [AI Copilot Workspace](../overview.md)
- [Getting started with AI Copilot](../getting-started.md)
- [AI Copilot Configuration](../configuration.md)
- [AI Copilot Nodes](../../ai/flow-nodes/ai-copilot/overview.md)
- [AI Copilot Embedding](../embedding.md)
- [AI Copilot for Chat](../chat.md)
- [Integration with Contact Centers](../contact-center-integration.md)
