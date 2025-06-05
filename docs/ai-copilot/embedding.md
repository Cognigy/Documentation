---
title: "Embedding"
slug: "embedding"
hidden: false
---

# Agent Copilot Embedding

Agent Copilot is supported by all handover providers.

For example, to embed the workspace into Genesys, create a script in Genesys and add an iFrame to it. For other handover providers, additional configuration may be required.

To display the Agent Copilot workspace, add a value in the respective field:

- [For Chat Use Cases](chat.md) — add the **AI Copilot Embedding URL** value, which can be found in the Endpoint under the **Copilot** section.
- [For Voice Use Cases](voice/voice-overview.md) — add the **UUIValue** value, which will be generated and forwarded via SIP headers during the transfer to the human agent.

## Embedding with JWT

You can embed AI Copilot into your contact center more securely using JWT authentication. To authenticate the AI Copilot session, pass a JWT in the URL:

```txt
https://{agent-assist-frontend-url}/?URLtoken={URLtoken}&auth={JWT}
```

Where:

- `URLToken` — the Endpoint token on the Cognigy side. To find this token, navigate to the Endpoint linked with AI Copilot. In the **Config URL** field, copy the token found after `https://endpoint-trial.cognigy.ai`. For example, in the URL `https://endpoint-trial.cognigy.ai/f38791ae20d4961acf0e97d9f377c4fe3df92894e1eff1c7a774a8ed089a4590`, the token would be `f38791ae20d4961acf0e97d9f377c4fe3df92894e1eff1c7a774a8ed089a4590`. Note that only authorized users can access or interact with the AI Copilot system through this URL. 
- `userId` — the Cognigy user ID. It helps AI Copilot associate the interaction with a specific user, allowing for tracking of user-specific information.
- `sessionId` — the Cognigy session ID. A session is a period of interaction or communication between the human agent and the AI Copilot workspace.

## More Information

- [Agent Copilot](overview.md)
- [Getting started with Agent Copilot](getting-started.md)
- [Agent Copilot Configuration](configuration.md)
- [Agent Copilot Nodes](../ai/build/node-reference/ai-copilot/overview.md)
- [Integration with Contact Centers](contact-center-integration.md)
