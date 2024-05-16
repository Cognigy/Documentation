# Chat and Voice AI Agents

Cognigy AI offers two types of AI agents: Chat and Voice. The conversational flows of both Chat and Voice AI Agents can be designed using Cognigy.AI's intuitive interface. The platform allows seamless integration with different systems and APIs, which enables the agents to access data from multiple sources.

Both types of AI agents support contact center integration and advanced features such as [Natural Language Understanding (NLU)](../empower/nlu/overview.md), [Generative AI](../empower/generative-ai.md), and [Knowledge AI](../empower/knowledge-ai/overview.md). The platform also provides tools for testing and performance analytics to improve agents' effectiveness.

There are slight differences in the approaches to creating chat and voice agents, which are described below.

## Chat AI Agents

To build a chat agent using Cognigy.AI, you need to start by creating a [project](projects.md) and a [Flow](flows.md). 
Once created, you can add at least [basic Nodes](../build/node-reference/overview.md) such as Say and Question Nodes, which form the building blocks of the agent's conversational flow.
After that, you need to choose an appropriate Endpoint for the channel you want to deploy the agent on. 
For example, select the [Webchat v3 Endpoint](../../webchat/v3/configuration.md) if you want to connect the agent to the [Cognigy Webchat v3 widget](../../webchat/v3/overview.md), the [WhatsApp Endpoint](../deploy/endpoint-reference/whatsapp.md) to connect it to WhatsApp Messenger, or the [Slack Endpoint](../deploy/endpoint-reference/slack.md) to connect it to the Slack platform. To choose the best one for your needs, refer to the [full list of available Endpoints](../deploy/endpoint-reference/overview.md).

## Voice AI Agents

To build a voice agent using Cognigy.AI, you need to start by creating a [project](projects.md) and a [Flow](flows.md). However, in addition to the [basic Nodes](../build/node-reference/overview.md), you also need to add [voice Nodes](../build/node-reference/voice/voice-gateway/overview.md) that allow the agent to interact with users through voice commands.
After that, you need to select a suitable voice Endpoint for the channel where you want to deploy the agent.
For seamless connectivity, we recommend using the [Voice Gateway](../deploy/endpoint-reference/voice-gateway.md) Endpoint.
To enable voice interactions,
you'll require credentials from a speech provider and a Session Initiation Protocol (SIP) trunk.
Once you have configured the SIP Trunk and Speech provider on the Voice Gateway Self-Service Portal,
you can deploy your voice agent in production.
For more information, read the [Voice Gateway](../../voice-gateway/getting-started.md) documentation.