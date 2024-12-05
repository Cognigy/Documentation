---
title: "Agentic AI (Beta)"
slug: "agentic-ai"
description: "To manage a new generation of AI Agents, Cognigy.AI introduces the AI Agent Management interface, where you can create, edit, and delete humanlike AI Agents."
hidden: false
---

# Agentic AI (Beta)

{! _includes/ai/beta.md !}

_Agentic AI_ represents a new generation of autonomous, goal-oriented AI Agents designed to boost operational efficiency, enhance customer satisfaction, and drive superior enterprise outcomes.

Key features of Agentic AI:

- **Humanlike Reasoning**. Independently analyzes requests to determine the best course of action.
- **Autonomous Decision-Making**. Dynamically navigates and utilizes tools to accomplish tasks successfully.
- **Collaborative AI**. Works seamlessly with other AI Agents and humans to deliver efficient and accurate solutions.
- **Hyper-Personalization**. Built-in memory enables context-aware interactions, creating uniquely tailored experiences for each customer.

To manage a new generation of AI Agents, Cognigy.AI introduces the AI Agent Management interface,
where you can create, edit, and delete AI Agents.

## Prerequisites

Before using this feature, you need:

1. Create an account in one of the LLM Providers:
    - [OpenAI](https://platform.openai.com/). You need to have a paid account or be a member of an organization that provides you access. Open your OpenAI user profile, copy the existing API Key, or create a new one and copy it.
    - [Azure OpenAI](https://azure.microsoft.com/en-us/products/cognitive-services/openai-service). You need to have a paid account or be a member of an organization that provides you access. Ask your Azure administrator to provide API Key, resource name, and deployment model name.
    - [Anthropic Claude](https://console.anthropic.com/docs). You need to be a [member of an organization](https://console.anthropic.com/docs/access) that provides you access. 
2. Add two models:
    - A primary model to control the AI Agent. It can be `gpt-4o` or `gpt-4o-mini` powered by [OpenAI](llms/providers/openai.md) or [Azure OpenAI](llms/providers/microsoft-azure-openai.md), or `claude-3-opus`, `claude-3-haiku`, or `claude-3-sonnet` by [Anthropic](llms/providers/anthropic.md).
    - If you want to enable the [Knowledge AI](knowledge-ai/overview.md) feature for your AI Agent, make sure to add an embedding model along with the primary model. Cognigy.AI recommends using the `text-embedding-ada-002` model to enhance Agentic AI capabilities.
  

## Add AI Agents to a Flow

When you create an AI Agent and click **Create & Chat**, a default Flow with your AI Agent's name will be created.

However, you can create a dedicated Flow and add more than one AI Agent to it.

To do so, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu of the **Projects** page, select a Project.
3. In the left-side menu of the **Project** page, select **Build > Flow**.
4. On the **Flows** page, click **+ New Flow**.
5. In the **New Flow** window, fill in the following fields:
    - **Name** — create a meaningful name for your Flow. For example, `Customer Support`.
    - **Description** — this field is optional. Create a meaningful description for your Flow. For example, `Automates the processing of incoming orders and updates inventory accordingly`.
6. Click **Create**.
7. In the Flow editor, click **+** to open the **Node Selection** menu.
8. On the **By Function** tab, go to the **AI** tab and select the [AI Agent](../build/node-reference/ai/ai-agent.md) Node from the list. The AI Agent Node will appear in the Flow editor.
9. Left-click the Node to open the Flow editor.
10. Select the desired AI Agent from the AI Agent list. Configure the [rest of the fields](../build/node-reference/ai/ai-agent.md#ai-agent-settings).
11. Click **Save Node**.
12. Below the parent AI Agent Node, configure the [child Tool Node](../build/node-reference/ai/ai-agent.md#ai-agent-tool-settings). Specify the tool's use case, such as unlocking an account or registering a new user. Make sure the tool's name and description are clear and informative for the model.
13. Click **Save Node**.
14. Below the child Tool Node, add an Action Node. If you are editing the AI Agent for the first time, replace the placeholder Node with an Action Node. The Action Node can be any Node that allows your AI Agent to perform an action, such as sending an [HTTP request](../build/node-reference/service/http-request.md), [sending an email](../build/node-reference/data/email-notification.md), or [querying a database](../build/node-reference/service/mongo-db.md). This Action Node performs the task that the tool handles.
15. Below the Action Node, add a [Resolve Tool Action](../build/node-reference/ai/resolve-tool-action.md) Node to control how the AI Agent responds after executing the Action Node. The Node returns the conversation to the parent AI Agent Node, providing the option to choose a different tool.

### Configure Additional Nodes

To enhance the AI Agent's Flow, you can add more Nodes related to the Agentic AI feature:

- [Add Memory](../build/node-reference/analytics/add-memory.md)
- [AI Agent Handover](../build/node-reference/ai/ai-agent-handover.md)
- [Add Transcript Steps](../build/node-reference/service/add-transcript-steps.md)
- [Get Transcript](../build/node-reference/service/get-transcript.md)

## Other Operations

### Copy the AI Agent Reference ID

Reference IDs can be helpful if you want to edit AI Agents [via the API](https://api-trial.cognigy.ai/openapi#get-/beta/aiagents).

To copy the Reference ID of an AI Agent, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu of the **Projects** page, select a Project.
3. In the left-side menu of the **Project** page, select **Build > AI Agents**.
4. On the **AI Agents** page, hover your cursor over the card of the AI Agent for which you want to copy the reference ID.
5. Click the ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) icon and select **Copy Reference ID**. The ID will be copied to the clipboard.

### Delete an AI Agent

Before deleting an AI Agent, make sure the AI Agent isn't used in any Flows.
Otherwise, Nodes linked to the deleted AI Agent may cause the Flow to fail.

To delete an AI Agent, follow these steps:

1. Open the Cognigy.AI interface.
2. In the left-side menu of the **Projects** page, select a Project.
3. In the left-side menu of the **Project** page, select **Build > AI Agents**.
4. On the **AI Agents** page, hover your cursor over the card of the AI Agent you want to delete.
5. Click the ![vertical-ellipsis](../../_assets/icons/vertical-ellipsis.svg) icon and select **Delete**.
6. Click **Confirm**.

## More Information

- AI Agent Nodes:
    - [AI Agent](../build/node-reference/ai/ai-agent.md)
    - [Resolve Tool Action](../build/node-reference/ai/resolve-tool-action.md)
    - [AI Agent Handover](../build/node-reference/ai/ai-agent-handover.md)
    - [Add Memory](../build/node-reference/analytics/add-memory.md)
    - [Get Transcript](../build/node-reference/service/get-transcript.md)
    - [Add Transcript Step](../build/node-reference/service/add-transcript-steps.md)
- [LLMs](llms/overview.md)
- [Knowledge AI](knowledge-ai/overview.md)