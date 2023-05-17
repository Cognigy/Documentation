---
title: "Agent Assist for Chat"
slug: "chat-agent-assist"
hidden: false
---

# Agent Assist for Chat 

## Cognigy In Front

In Cognigy In Front use cases there is no additional manual effort needed.

Ensure to configure the **Handover Settings** and **Agent Assist** Settings in the Endpoint and use the Handover to Agent Node in the Flow.

All necessary information like `sessionId`, `orgId`, `projectId`, `userId`, and `configId` will be forwarded while doing the transfer to the human agent. 

This approach lets you connect to the right session and send widget updates.

<figure>
  <img class="image-center" src="{{config.site_url}}agent-assist/images/chat.png" width="80%" />
</figure>

## More information

- [Agent Assist Workspace](overview.md)
- [Getting started with Agent Assist](getting-started.md)
- [Agent Assist Configuration](configuration.md)
- [Agent Assist Nodes](../ai/flow-nodes/agent-assist/overview.md)
- [Agent Assist Embedding](embedding.md)
- [Agent Assist for Voice](../agent-assist/voice-agent-assist/voice-overview.md)
- [Integration with Contact Centers](contact-center-integration.md)