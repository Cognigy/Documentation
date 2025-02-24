---
title: "Cognigy AI Agents"
slug: "cognigy-ai-agents"
description: "Cognigy AI Agents are virtual assistants powered by artificial intelligence that can interact with users through text or voice, handling tasks traditionally performed by humans."
hidden: false
---

# Cognigy AI Agents

_AI Agents_ are virtual assistants powered by artificial intelligence that can interact with users through text or voice, handling tasks traditionally performed by humans.

_Cognigy AI Workforce_ is a collection of AI Agents that you can design using the Cognigy.AI platform to automate tasks and enhance various business processes.
Cognigy AI Agents can handle a wide range of tasks, from answering simple customer inquiries to providing complex technical support.

Key benefits of an AI Workforce include:

- **24/7 Availability**. AI Agents are always available, ensuring continuous customer support.
- **Scalability**. AI Agents can handle increased workloads without compromising quality.
- **Consistency**. AI Agents provide consistent and accurate responses.
- **Efficiency**. Automating routine tasks reduces operational costs and frees up human resources.

Cognigy AI Workforce goes beyond simply offering virtual assistants.
It offers intelligent AI Agents to support both end users and human agents:

- [Self-Service AI Agents](#self-service-ai-agents)
- [Human Agent Assistants](#human-agent-assistants)

### Self-Service AI Agents

Cognigy.AI enables the creation of autonomous AI Agents that can manage customer inquiries, resolve common issues, and guide users through processes without human intervention. 

Using the tools on the Cognigy.AI platform, you can create AI Agents customized to meet the specific needs of your business.
Here are some examples of AI Agents you can build with Cognigy.AI:

- [Chat-Based AI Agents](#chat-based-ai-agents)
- [Voice AI Agents](#voice-ai-agents)
- [Digital AI Agents](#digital-ai-agents)
- [LLM-Driven AI Agents](#llm-driven-ai-agents)

#### Chat-Based AI Agents

Chat-based AI Agents specialize in text-based interactions, primarily used for customer support, answering FAQs, and handling tasks, including booking appointments and providing product information through chat platforms, websites, and messaging apps.

To build a chat AI Agent using Cognigy.AI, you need to start by creating a [Project](../build/projects.md) and a [Flow](../build/flows/overview.md).
Once created, you can add at least [basic Nodes](../build/node-reference/overview.md) such as Say and Question Nodes,
which form the building blocks of the AI Agent's conversational flow.
After that, you need to choose an appropriate Endpoint for the channel you want to deploy the AI Agent on.
For example, select the [Webchat v3 Endpoint](../../webchat/v3/configuration.md) if you want to connect the AI Agent to the [Cognigy Webchat v3 widget](../../webchat/v3/overview.md), the [WhatsApp Endpoint](../deploy/endpoint-reference/whatsapp.md) to connect it to WhatsApp Messenger, or the [Slack Endpoint](../deploy/endpoint-reference/slack.md) to connect it to the Slack platform. To choose the best one for your needs, refer to the [full list of available Endpoints](../deploy/endpoint-reference/overview.md).

#### Voice AI Agents

Voice AI Agents handle spoken conversations; they use speech-to-text recognition and text-to-speech technology, which makes them ideal for phone-based customer support.

To build a voice AI Agent using Cognigy.AI,
you need to start by creating a [Project](../build/projects.md) and a [Flow](../build/flows/overview.md).
However, in addition to the [basic Nodes](../build/node-reference/overview.md),
you also need
to add [voice Nodes](../build/node-reference/voice/voice-gateway/overview.md)
that allow the AI Agent to interact with users through voice commands.
After that, you need to select a suitable voice Endpoint for the channel where you want to deploy the AI Agent.
For seamless connectivity, we recommend using the [Voice Gateway](../deploy/endpoint-reference/voice-gateway.md) Endpoint.
To enable voice interactions,
you'll require credentials from a speech provider and a Session Initiation Protocol (SIP) trunk.
Once you have configured the SIP Trunk and Speech provider on the Voice Gateway Self-Service Portal,
you can deploy your voice AI Agent in production.
For more information, read the [Voice Gateway](../../voice-gateway/getting-started.md) documentation.

#### Digital AI Agents

By integrating text and voice capabilities,
you can develop sophisticated digital AI Agents that engage customers across multiple channels,
providing omnichannel support on platforms such as websites, apps, and social media. 
For instance, an AI Agent may start a conversation through text and then suggest transitioning to a call with the contact center if needed. 
To enhance the capability of your AI Agent,
Cognigy.AI offers a [marketplace of prebuilt extensions](../build/extensions.md) and [custom Nodes](../developers/extension-framework.md)
to connect AI Agents with external systems, such as CRM and task management tools, or to build extensions from scratch.

#### LLM-Driven AI Agents

By using advanced AI technologies like [Generative AI](../empower/generative-ai.md), [Natural Language Understanding (NLU)](../empower/nlu/overview.md), and [Knowledge AI](../empower/knowledge-ai/overview.md),
you can empower AI Agents — whether chat, voice, or digital — to understand complex requests,
retrieve information from multiple sources, and deliver personalized responses that enhance user experiences.

Also, you can make your AI Agent [fully driven by Large Language Models (LLMs)](../empower/agentic-ai/overview.md), tailoring its personality to align with your brand and customer preferences.

### Human Agent Assistants

Cognigy AI Agents can assist human agents by offering real-time support, accessing knowledge bases, and analyzing customer sentiment. 
By assisting human agents, AI Agents improve efficiency, speed up resolution times, and enhance customer service quality.

Cognigy.AI offers a comprehensive suite of human assistants, each tailored to meet specific needs in your contact center solution:

- [AI Copilot](#ai-copilot)
- [AI Copilot Whisper](#ai-copilot-whisper)
- [AI Copilot Bot](#ai-copilot-bot)

#### AI Copilot

[Cognigy AI Copilot](../../ai-copilot/index.md) is an intelligent assistant that helps human agents work more effectively. 
It provides real-time suggestions, handles routine tasks, and manages extra workload during busy times.
With an easy-to-use interface and customizable widgets,
such as tools for quick knowledge searches or sentiment analysis, it offers human agents fast access to key information.
By boosting the productivity of each human agent, AI Copilot helps address labor shortages and combines AI and human strengths to deliver better customer service.

#### AI Copilot Whisper

[Cognigy AI Copilot Whisper](../../live-agent/assistants/ai-copilot-whisper.md) is a real-time AI assistant that provides direct, in-conversation support to human agents. It listens to the ongoing conversation and offers suggestions, recommendations, and relevant information directly within the chat interface, empowering agents to provide faster and more accurate responses.

AI Copilot Whisper is available only in the Cognigy Live Agent interface.

#### AI Copilot Bot

[Cognigy AI Copilot Bot](../../live-agent/assistants/ai-copilot-bot.md) is a dedicated chat-based assistant designed to support human agents.
It provides a personalized workflow, enabling AI Agents to access additional information and resources as needed.

AI Copilot Bot ia available only in the Cognigy Live Agent interface.

## More Information

- [Key Features](key-features.md)
- [Build Your Chat-Based AI Agent in Minutes](getting-started-with-digital-agent.md)
- [Build Your Voice AI Agent in Minutes](getting-started-with-voice-agent.md)