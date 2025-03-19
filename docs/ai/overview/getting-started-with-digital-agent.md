---
title: "Chat"
slug: "quickstart-guide-for-chat-based-ai-agents"
description: "Build Your Chat-Based AI Agent in Minutes: In this tutorial, you will learn how to create a simple chat AI Agent from scratch that greets you by name. Then you will test this agent using built-in Cognigy testing tools."
hidden: false
---

# Guide for Chat AI Agents

In this tutorial, you will learn how to create a simple chat AI Agent from scratch that greets you by name.
Then you will test this agent using built-in Cognigy testing tools.

## Prerequisites

- You need to have access to a Cognigy.AI account.

## Log in to Cognigy.AI

You can log in with your Cognigy.AI credentials or, optionally, with single sign-on (SSO), if you have [set up login with SSO](../../ai/installation/single-sign-on-saml2.md). If [login with SSO is enforced](../../ai/installation/single-sign-on-saml2.md#enforce-login-with-sso), you can only log in with SSO.

### Log in with Credentials

{! _includes/ai/overview/log-in-with-credentials.md !}

### Log in with SSO

{! _includes/ai/overview/log-in-with-sso.md !}

{! _includes/ai/overview/create-projects.md !}

## Build a Chat AI Agent

To build a chat AI Agent, follow these steps:

1. In the left-side menu of the Project, go to **Build > Flows**.
2. Create a new Flow by clicking **+ New Flow** in the upper-right corner.
3. In the **New Flow** window, do the following:<br>
    1. Add a unique name, for example, `Getting Started`.<br>
    2. Add a relevant description, for example, `Getting Started Guide for chat agent`.<br>
    3. Click **Create**.<br>
4. In the Flow editor, create a new Node by clicking **+** and selecting a Question Node from the list.
5. Left-click the Question Node to open the Node editor.
6. In the Question Node editor, set up the following parameters:<br>
    1. From the **Question Type** list, select **Text**.<br>
    2. In the **Text** field, enter the following sentences: `Hello! What's your name?`<br>
    3. Click **Save Node**.<br>
7. Below the Question Node, add a Say Node. 
8. Left-click the Say Node to open the Node editor. 
9. In the Say Node editor, go to the **Text** field.
10. In the **Text** field, enter `Hello` and click ![token](../../_assets/icons/token.svg).
11. From the **Tokens** list, select **Answer**. This token lets reuse the user's answer in the AI Agent's response.
12. Click **Save Node**.

Once your AI Agent is created, you can test it via the Interaction Panel.

## Test your Chat AI Agent

To test your AI Agent, follow these steps:

1. In the existing Flow, open the Interaction Panel by clicking ![interaction-panel](../../_assets/icons/interaction-panel.svg) **Chat with your Agent** in the upper-right corner of the page. The Interaction panel appears on the right side of the Flow Editor.
2. Initiate a conversation by entering `Hello` in the **Text Message** field and press **Enter**.
3. Answer the AI Agent's question by entering your name. The AI Agent will greet you by your name.

<figure>
  <img class="image-center" src="../../../_assets/ai/overview/getting-started-chat.png" width="100%" />
</figure>

Now you can deploy the agent using the [Webchat v3](../../webchat/getting-started.md#create-an-endpoint) Endpoint, and see how conversations look on the production environment through Demo Webchat.

## What's Next?

- Familiarize yourself with the core concepts of building AI Agents, such as [Projects](../build/projects.md), [Flows](../build/flows/overview.md), [Nodes](../build/nodes/overview.md), and [Cognigy Script](../build/cognigyscript.md).
- Enhance your agent's performance with AI features, such as [NLU](../empower/nlu/overview.md), [LLMs](../empower/llms/overview.md) and [Generative AI](../empower/generative-ai.md), as well as [Knowledge AI](../empower/knowledge-ai/overview.md).
- Explore [test](../test/interaction-panel/overview.md) and [deploy](../deploy/endpoints/overview.md) features.
- Connect your agent to the [contact center](../escalate/handovers.md).