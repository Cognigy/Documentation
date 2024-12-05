---
title: "Build LLM-Driven Flows"
slug: "build-llm-driven-flows"
description: "LLM-Driven Flow Design involves using large language models (LLMs) to power Flows and allowing AI Agents to manage decision-making processes within a conversation."
hidden: false
---

# Build LLM-Driven Flows

[![Version badge](https://img.shields.io/badge/Added in-v4.91(Beta)-purple.svg)](../../../release-notes/4.91.md)

_LLM-Driven Flow Design_ involves using large language models (LLMs) to power Flows and allowing AI Agents to manage decision-making processes within a conversation. This design pattern ensures that AI Agents can understand and process complex tasks, interact with tools, and make decisions autonomously within a defined Flow.

## Add AI Agents to a Flow

When you create an AI Agent and click **Create & Chat**, a default Flow with your AI Agent's name will be created.

However, you can create a dedicated Flow and add more than one AI Agent to it.

To do so, follow these steps:

1. [Create a Flow](#create-a-flow)
2. [Add an AI Agent Node](#add-ai-agents-to-a-flow)
3. [Configure a Tool Action](#configure-a-tool-action)

### Create a Flow

1. Open the Cognigy.AI interface.
2. In the left-side menu of the **Projects** page, select a Project.
3. In the left-side menu of the **Project** page, select **Build > Flow**.
4. On the **Flows** page, click **+ New Flow**.
5. In the **New Flow** window, fill in the following fields:
    - **Name** — create a meaningful name for your Flow. For example, `Customer Support`.
    - **Description** — this field is optional. Create a meaningful description for your Flow. For example, `Automates the processing of incoming orders and updates inventory accordingly`.
6. Click **Create**.

### Add an AI Agent Node

1. In the Flow editor, click **+** to open the **Node Selection** menu.
2. On the **By Function** tab, go to the **AI** tab and select the [AI Agent](../../build/node-reference/ai/ai-agent.md) Node from the list. The AI Agent Node will appear in the Flow editor.
3. Left-click the Node to open the Flow editor.
4. Select the desired AI Agent from the AI Agent list. Configure the [rest of the fields](../../build/node-reference/ai/ai-agent.md#ai-agent-settings).
5. Click **Save Node**.

### Configure a Tool Action

1. Below the parent AI Agent Node, configure the [child Tool Node](../../build/node-reference/ai/ai-agent.md#ai-agent-tool-settings). Specify the tool's use case, such as unlocking an account or registering a new user. Make sure the tool's name and description are clear and informative for the model.
2. Click **Save Node**.
3. Below the child Tool Node, add an Action Node. If you are editing the AI Agent for the first time, replace the placeholder Node with an Action Node. The Action Node can be any Node that allows your AI Agent to perform an action, such as sending an [HTTP request](../../build/node-reference/service/http-request.md), [sending an email](../../build/node-reference/data/email-notification.md), or [querying a database](../../build/node-reference/service/mongo-db.md). This Action Node performs the task that the tool handles.
4. Below the Action Node, add a [Resolve Tool Action](../../build/node-reference/ai/resolve-tool-action.md) Node to control how the AI Agent responds after executing the Action Node. The Node returns the conversation to the parent AI Agent Node, providing the option to choose a different tool.

## Configure Additional Nodes

To enhance the AI Agent's Flow, you can add more Nodes related to the Agentic AI feature:

- [Add Memory](../../build/node-reference/analytics/add-memory.md)
- [AI Agent Handover](../../build/node-reference/ai/ai-agent-handover.md)
- [Add Transcript Steps](../../build/node-reference/service/add-transcript-steps.md)
- [Get Transcript](../../build/node-reference/service/get-transcript.md)

## More Information

- [Overview](overview.md)
- [Getting Started](getting-started.md)