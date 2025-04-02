---
title: "Getting Started"
slug: "getting-started"
description: "In this guide, you'll create a Project with an LLM-powered AI Agent from scratch and learn how to enable the AI Agent to manage interactions with the end user. Then, you’ll test your flow using the Interaction Panel."
hidden: false
---

# Getting Started with Agentic AI

[![Version badge](https://img.shields.io/badge/Added in-v4.91-blue.svg)](../../../release-notes/4.91.md)

This guide walks you through the process of creating a Project with an AI Agent powered by a large language model (LLM). 
You'll learn how to create an AI Agent with the persona of a customer support engineer,
implement a tool to unlock accounts by validating the user email,
and test your Flow using the Interaction Panel.

## Prerequisites

- Ensure you have access to your Cognigy.AI account and have [configured a primary LLM](overview.md#prerequisites).
- During the Flow Configuration steps, an [Email Notification Node](../../build/node-reference/data/email-notification.md) will be used. Make sure your SMTP server settings are properly configured to receive notifications.

## Create a Project

To create a Project, follow these steps:

1. In the upper-left corner, click **+** to create a Project.
2. Configure your basic Project settings.
3. Select **Agentic AI** as your Project type.

## Create an AI Agent

To create your first LLM-powered AI Agent, follow these steps:

1. In the **General Settings** step, fill in the following fields:
    - **Name** — enter a name for your AI Agent. This name will be visible to end users when the AI Agent greets them in the chat or when one AI Agent transfers the conversation to another. For example, `Hello, my name is John. How can I help you?`
    - **Description** — enter a description of the AI Agent that shapes its behavior and enhances its ability to understand the desired communication style. For example, `John works at ACME and is highly skilled at making customers feel comfortable.`
2. In the **Avatar** section, select an avatar of your choice.
3. In the **Speaking Style** step, configure how the AI Agent's choice of wording is influenced by the selected speaking style, which can affect the tone and clarity of its responses:
    - **Concise/Comprehensive** — adjust the slider to the left for brief responses.
    - **Formal/Informal** — adjust the slider to the left for more casual and conversational responses.
4. In the **Knowledge & Instructions** step, configure the following fields:
    - **Instructions** — provide special instructions to your AI Agent in bullet-point form. For example:
    ```txt
     - Greet users warmly and professionally.
     - Keep responses concise; expand only if requested.
    ```
5. In the **Data Privacy & Security** step, we recommend leaving the settings unchanged. 
6. In the **Job Selection** step, select **Default** to create an AI Agent with a predefined Flow. 
7. Click **Create & Configure LLM** to save changes and open the Flow with the created AI Agent.

## Configure the AI Agent in your Flow

Once the Flow opens, you'll see the AI Agent Node with predefined settings based on the AI Agent persona you created.

To configure the Flow, follow these steps:

1. Below the parent AI Agent Node, configure the [child Tool Action Node](../../build/node-reference/ai/ai-agent.md#ai-agent-tool-settings). Left-click the **unlock_account** Node to open the Node editor.
2. Activate the **Use Parameters** setting to request a user email before unlocking the account. In the **Parameters** section, make sure that the email parameter appears.
3. Below the child Tool Node, replace the placeholder Node with an [Email Notification](../../build/node-reference/data/email-notification.md) Node. The Email Notification Node acts as an Action Node, designed to trigger specific actions and perform the task assigned to the tool. In this case, the Email Notification Node will send a confirmation email when the task is completed.
4. Open the Node editor and configure the following fields:
    - **Recipient TO Email Addresses** — enter the email address to which the account unlocking confirmation should be sent.
    - **Email Subject** — enter `Account Unlocked`.
    - **Email Content** — enter `Dear user, your account has been successfully unlocked`.
5. Below the Action Node, add a [Resolve Tool Action](../../build/node-reference/ai/resolve-tool-action.md) Node to control how the AI Agent responds after executing the Email Notification Node. The Resolve Tool Action Node returns the conversation to the parent AI Agent Node, providing the option to choose a different tool.

## Test your Agent

To run your Flow, follow these steps:

1. Open the Interaction Panel.
2. Enter the following text: `Hello, I want to unlock my account`. The AI Agent will ask you to provide your email.
3. Enter your email. The AI Agent will validate your email address and send an update to the provided email address. The AI Agent will confirm that the account is unlocked by posting: `Your account has been successfully unlocked`.

<figure>
  <img class="image-center" src="../../../../_assets/ai/empower/agentic-ai/getting-started.png" width="100%" />
</figure>

## What's Next?

1. Try [creating an AI Agent tailored to your business needs](manage-ai-agents.md#create-an-ai-agent) or [hire one from the Job Market](manage-ai-agents.md#create-an-ai-agent).
2. [Add the AI Agent to your Flow](../../build/flows/overview.md) and [create a set of tool actions](../../build/node-reference/ai/ai-agent.md) for your AI Agent to operate.
3. For a deeper dive into Agentic AI, visit the [Cognigy Help Center](https://support.cognigy.com/hc/en-us/articles/17346581840796-Getting-Started-with-AI-Agents).