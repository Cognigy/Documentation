---
title: "Embedding"
slug: "embedding"
hidden: false
---

# AI Copilot Embedding

AI Copilot is supported by all handover providers.

For example, to embed the workspace into Genesys, create a script in Genesys and add an iFrame to it. For other handover providers, additional configuration may be required.

To display the AI Copilot workspace, add a value in the respective field:

- [For Chat Use Cases](chat.md) — add the **AI Copilot Embedding URL** value, which can be found in the Endpoint under in the **Copilot** section.
- [For Voice Use Cases](voice/voice-overview.md) — add the **UUIValue** value, which will be generated and forwarded via SIP headers during the transfer to the human agent.

## More Information

- [AI Copilot](overview.md)
- [Getting started with AI Copilot](getting-started.md)
- [AI Copilot Configuration](configuration.md)
- [AI Copilot Nodes](../ai/build/node-reference/ai-copilot/overview.md)
- [Integration with Contact Centers](contact-center-integration.md)
