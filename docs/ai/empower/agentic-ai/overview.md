---
title: "Overview"
slug: "agentic-ai"
description: "Agentic AI represents a new generation of autonomous, goal-oriented AI Agents designed to boost operational efficiency, enhance customer satisfaction, and drive superior enterprise outcomes."
hidden: false
---

# Agentic AI

[![Version badge](https://img.shields.io/badge/Updated in-v4.99-blue.svg)](../../../release-notes/4.99.md)

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
    - [Google Gemini](https://ai.google.dev/gemini-api/docs/models/gemini). You need to have a paid account or be a member of an organization that provides you access.
    - [Amazon Bedrock](https://docs.aws.amazon.com/bedrock/). You need to have a paid account or be a member of an organization that provides you access.
2. Add two models:
    - A primary model to control the AI Agent, selected from the following providers:
        - `gpt-4o` or `gpt-4o-mini` powered by [OpenAI](../llms/providers/openai.md) or [Azure OpenAI](../llms/providers/microsoft-azure-openai.md).
        - `claude-3-opus`, `claude-3-haiku`, `claude-3-5-sonnet`, or `claude-3-7-sonnet` by [Anthropic](../llms/providers/anthropic.md).
        - `gemini-2.0-flash` or `gemini-2.0-flash-lite` by [Google Gemini](../llms/providers/google-gemini.md).
        - `amazon.nova-lite-v1:0`, `amazon.nova-pro-v1:0`, `anthropic.claude-3-5-sonnet-20240620-v1:0` by [Amazon Bedrock](../llms/providers/amazon-bedrock.md). Note that the model will only work if your AWS administrator gives you [access to this model](https://docs.aws.amazon.com/bedrock/latest/userguide/model-access.html).
        - `mistral-large-2411`, `mistral-small-2503`, `pixtral-large-2503`, or `pixtral-12b-2409` by [Mistral AI](../llms/providers/mistral.md).
     - If you want to enable the [Knowledge AI](../knowledge-ai/overview.md) feature for your AI Agent, make sure to add an embedding model along with the primary model. Cognigy.AI recommends using the `text-embedding-ada-002` model to enhance Agentic AI capabilities.

## Concepts

- [AI Agent Management](#ai-agent-management)
- [AI Agents — a New Conversational Paradigm](#ai-agents--a-new-conversational-paradigm)

### AI Agent Management

_AI Agent Management_ refers to the workspace used to control AI Agents within a Project. 
This workspace includes the creation, modification, and deletion of AI Agents. 
With AI Agent Management, you can effectively build autonomous AI Agents for specific roles, tasks, and workflows.

#### AI Agent Creation

You can create AI Agents tailored to meet specific business needs.
Designing these AI Agents allows you to handle a wide range of tasks, such as providing customer support, driving sales, automating data analysis, and more.

#### Job Market

You can hire an agent with a ready-made set of skills for a specific task and adapt it to your needs.

The table shows available example AI Agents for hire.

| AI Agent                                                                    | Job              | Job Description                                                                                                               | Job Package                                                                                                                                                               |
|-----------------------------------------------------------------------------|------------------|-------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <img src="../../../../_assets/ai/empower/agentic-ai/John.png"  width="50">  | Airline Support  | The AI Agent that supports tasks such as flight status updates, rebooking, passenger FAQs, and more.                          | - Flow: Main <br>- Knowledge Stores: ACME Airline Brochure and ACME Airline FAQs                                                                                          |
| <img src="../../../../_assets/ai/empower/agentic-ai/Anna.png" width="50">   | BDR Assistance   | The AI Agent that assists with business development tasks such as answering questions, scheduling callbacks, and other tasks. | - Flow: Main <br>- Knowledge Stores: ACME Brochure and ACME CX FAQs                                                                                                       |
| <img src="../../../../_assets/ai/empower/agentic-ai/Sophie.png" width="50"> | Restaurant Guide | The AI Agent that provides information on menu items, opening hours, reservations, and more.                                  | - Flows: Main - Dinging Concierge, Place Order - Order Expert, and Reserve Table - Reservation Expert <br>- Knowledge Stores: ACME Cantina Brochure and ACME Cantina Menu |
| <img src="../../../../_assets/ai/empower/agentic-ai/Martin.png" width="50"> | Health Insurance | The AI Agent that assists with tasks such as adjusting policies and managing claims.                                          | - Flow: Main - Health Insurance <br>- Knowledge Store: FitDirekt FAQs                                                                                                     |

### AI Agents — a New Conversational Paradigm

AI Agents autonomously perform many tasks that in previous conversational AI deployments had to be manually developed, such as intent detection and management, decision-making, entity extraction, and more. All of these tasks are now configured as part of the AI Agent.

#### AI Agent Node

The [AI Agent Node](../../build/node-reference/ai/ai-agent.md) refers to the use of an AI Agent in the context of a specific job. The AI Agent Node references the AI Agent persona and defines the job name, job description, and job-related instructions and context.

##### Job Instructions

Within the AI Agent Node, you must give clear instructions that guide the AI Agents in performing specific tasks. 
For example, you could include instructions for executing an API call, processing data for analysis, performing a sentiment analysis, triggering automated emails, or classifying user queries.

##### Tool Actions

_Tool Actions_ represent specific tasks that an AI Agent can perform. 
A [tool action](../../build/node-reference/ai/ai-agent.md#ai-agent-tool-settings) allows the AI Agent to perform a variety of tasks, for example, interact with external services such as an API or to execute several rules-based actions. The full power of Cognigy.AI can be used to configure what happens when a tool action is called.

Along with tool actions, you can use [Model Context Protocol](../../build/node-reference/ai/ai-agent.md#ai-agent-mcp-tool-settings) (MCP), which boosts tool actions by providing a standardized connection between AI Agents and external services. It allows smooth integration with remote systems like APIs and databases, enabling the AI Agent to perform more complex tasks in a secure and efficient way.

##### Tool Calls

_Tool Calls_ occur when the AI Agent decides to use a tool action and executes the branch underneath the Tool Action Node.

#### Resolve Tool Action Node

The [Resolve Tool Action Node](../../build/node-reference/ai/resolve-tool-action.md) sends an answer as the response to a tool call to the AI Agent after completing a [tool action](#tool-actions).

When the AI Agent calls a tool to perform an action, the tool action is executed.
Once the action is completed, the Resolve Tool Action Node sends a response back to the AI Agent,
indicating the result of that action.
This approach helps the AI Agent process and make decisions based on the results of the tool actions it initiated.

#### AI Agent Handover Node

The [AI Agent Handover Node](../../build/node-reference/ai/ai-agent-handover.md) enables smooth AI Agent-to-AI Agent handovers, allowing multiple AI Agents to collaborate and take over tasks to efficiently resolve complex customer inquiries.

#### Transcript Nodes

AI Agents use the conversation transcript to process conversations, allowing it to reference past interactions for improved decision-making and providing more accurate responses in conversations.

##### Get Transcript Node

The [Get Transcript Node](../../build/node-reference/service/get-transcript.md) lets receive a real-time conversation transcript and store the result in the Input or Context object.

##### Add Transcript Steps

The [Add Transcript Steps Node](../../build/node-reference/service/add-transcript-steps.md) lets you add a step for one of the conversation actors to simulate an input or output.

## More Information

- [Getting Started](getting-started.md)
- [Manage AI Agents](manage-ai-agents.md)
- [LLMs](../llms/overview.md)
- [Knowledge AI](../knowledge-ai/overview.md)