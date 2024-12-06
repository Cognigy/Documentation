---
title: "Overview"
slug: "agentic-ai"
description: "Agentic AI represents a new generation of autonomous, goal-oriented AI Agents designed to boost operational efficiency, enhance customer satisfaction, and drive superior enterprise outcomes."
hidden: false
---

# Agentic AI (Beta)

[![Version badge](https://img.shields.io/badge/Added in-v4.91(Beta)-purple.svg)](../../../release-notes/4.91.md)

{! _includes/ai/beta.md !}

_Agentic AI_ represents a new generation of autonomous, goal-oriented AI Agents designed to boost operational efficiency, enhance customer satisfaction, and drive superior enterprise outcomes.

Key features of Agentic AI:

- **Humanlike Reasoning**. Independently analyzes requests to determine the best course of action.
- **Autonomous Decision-Making**. Dynamically navigates and utilizes tools to accomplish tasks successfully.
- **Collaborative AI**. Works seamlessly with other AI Agents and humans to deliver efficient and accurate solutions.
- **Hyper-Personalization**. Built-in memory enables context-aware interactions, creating uniquely tailored experiences for each customer.

## Prerequisites

Before using the Agentic AI feature, you need:

1. Create an account in one of the LLM Providers:
    - [OpenAI](https://platform.openai.com/). You need to have a paid account or be a member of an organization that provides you access. Open your OpenAI user profile, copy the existing API Key, or create a new one and copy it.
    - [Azure OpenAI](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service). You need to have a paid account or be a member of an organization that provides you access. Ask your Azure administrator to provide API Key, resource name, and deployment model name.
    - [Anthropic Claude](https://console.anthropic.com/docs). You need to be a [member of an organization](https://console.anthropic.com/docs/access) that provides you access.
2. Add two models:
    - A primary model to control the AI Agent. It can be `gpt-4o` or `gpt-4o-mini` powered by [OpenAI](../llms/providers/openai.md) or [Azure OpenAI](../llms/providers/microsoft-azure-openai.md), or `claude-3-opus`, `claude-3-haiku`, or `claude-3-sonnet` by [Anthropic](../llms/providers/anthropic.md).
    - If you want to enable the [Knowledge AI](../knowledge-ai/overview.md) feature for your AI Agent, make sure to add an embedding model along with the primary model. Cognigy.AI recommends using the `text-embedding-ada-002` model to enhance Agentic AI capabilities.

## Use Cases

- **Using AI Agent Persona.** You can create various AI Agent personas to align conversations with their brand's tone and identity. This approach allows for more personalized, consistent, and brand-focused customer interactions.
- **Developing Tools**. Equip your AI Agent with a robust collection of tools to manage various tasks, with each task assigned to its own Node. This approach eliminates the need to create multiple Nodes or sub-Flows for a single task.
- **Using Agent-to-Agent Communication**. You can add multiple AI Agents with different roles to work together in one Flow. This teamwork helps the AI Agents complete specific tasks more efficiently and improves the user experience. For example, a customer support AI Agent can collaborate with a sales inquiry AI Agent. Together, they can quickly answer customer questions and provide personalized product recommendations.

## Concepts

- [AI Agent Management](#ai-agent-management)
- [ LLM-driven Flow Design](#llm-driven-flow-design)

### AI Agent Management

_AI Agent Management_ refers to the workspace used control AI Agents within a Project. 
This workspace includes the creation, modification, and deletion of AI Agents. 
With AI Agent Management, you can effectively build autonomous AI Agents for specific roles, tasks, and workflows.

#### Custom AI Agents

You can create AI Agents tailored to meet specific business needs.
Designing these AI Agents allows you to handle a wide range of tasks, such as providing customer support, driving sales, automating data analysis, and more.

#### Job Market

You can hire an agent with a ready-made set of skills for a specific task and adapt it to your needs.

The table shows available AI Agents for hire.

| AI Agent                                                                                            | Job              | Job Description                                                                                                               | Job Package                                                                                                                                                       |
|-----------------------------------------------------------------------------------------------------|------------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Skyron** <img src="../../../../_assets/ai/empower/agentic-ai/Skyron.png" alt="Skyron" width="50"> | Airline Support  | The AI Agent that supports tasks such as flight status updates, rebooking, passenger FAQs, and more.                          | - Flow: Main <br>- Knowledge Stores: ACME Airline Brochure and ACME Airline FAQs                                                                                  |
| **Anna** <br> <img src="../../../../_assets/ai/empower/agentic-ai/Anna.png" alt="Anna" width="50">  | BDR Assistance   | The AI Agent that assists with business development tasks such as answering questions, scheduling callbacks, and other tasks. | - Flow: Main <br>- Knowledge Stores: ACME Brochure and ACME CX FAQs                                                                                               |
| **Sophie** <img src="../../../../_assets/ai/empower/agentic-ai/Sophie.png" alt="Sophie" width="50"> | Restaurant Guide | The AI Agent that provides information on menu items, opening hours, reservations, and more.                                  | - Flows: Dining Concierge, Place Order - Order Expert, and Reserve Table - Reservation Expert <br>- Knowledge Stores: ACME Cantina Brochure and ACME Cantina Menu |

### LLM-driven Flow Design

_LLM-Driven Flow Design_ involves using large language models (LLMs) to power Flows and allowing AI Agents to manage decision-making processes within a conversation. This design pattern ensures that AI Agents can understand and process complex tasks, interact with tools, and make decisions autonomously within a defined Flow.

#### AI Agent Node

The [AI Agent Node](../../build/node-reference/ai/ai-agent.md) refers to the use of an AI Agent in the context of a specific job. The AI Agent Node references the AI Agent persona and defines the job name, job description, and job-related instructions and context.

##### Job Instructions

Within the AI Agent Node, you must give clear instructions that guide the AI Agents in performing specific tasks. 
For example, you could include instructions for executing an API call, processing data for analysis, performing a sentiment analysis, triggering automated emails, or classifying user queries.

##### Tool Actions

_Tool Actions_ represent specific tasks that an AI Agent needs to perform within a Flow. 
A [tool action](../../build/node-reference/ai/ai-agent.md#tool) allows the AI Agent to interact with external services to accomplish a particular job, such as calling an API or processing data.

##### Tool Calls

_Tool Calls_ occur when the AI Agent decides to use a Tool Action and sends a request to the LLM to execute it.

#### Resolve Tool Action Node

The [Resolve Tool Action Node](../../build/node-reference/ai/resolve-tool-action.md) is used to handle the result of a [tool action](#tool-actions) that was triggered by the AI Agent.
When the AI Agent calls a tool to perform an action, the tool action is executed.
Once the action is completed, the Resolve Tool Action Node sends a response back to the AI Agent,
indicating the result of that action.
This approach helps the AI Agent process and make decisions based on the results of the tool actions it initiated.

#### AI Agent Handover Node

The [AI Agent Handover Node](../../build/node-reference/ai/ai-agent-handover.md) enables smooth Agent-to-Agent handovers, allowing multiple AI Agents to collaborate and take over tasks to efficiently resolve complex customer inquiries.

#### Add Memory Node

The [Add Memory Node](../../build/node-reference/analytics/add-memory.md) stores memories within the [Contact Profile](../../analyze/contact-profiles.md),
enabling AI Agents to recall and reference past interactions for better future conversations.

#### Transcript Nodes

The Transcript Nodes enable the AI Agent to simulate, retrieve, and store conversation transcripts, allowing it to reference past interactions for improved decision-making and providing more accurate responses in conversations.

##### Get Transcript Node

The [Get Transcript Node](../../build/node-reference/service/get-transcript.md) lets AI
Agents receive a real-time conversation transcript and store the result in the Input or Context object.

##### Add Transcript Steps

The [Add Transcript Steps Node](../../build/node-reference/service/add-transcript-steps.md) lets you add a step for one of the conversation actor's inputs to simulate that input.

## More Information

- [Getting Started](getting-started.md)
- [Manage AI Agents](manage-ai-agents.md)
- [Build LLM-Driven Flows](build-llm-driven-flows.md)
- [LLMs](../llms/overview.md)
- [Knowledge AI](../knowledge-ai/overview.md)