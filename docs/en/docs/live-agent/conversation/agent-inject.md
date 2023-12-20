---
title: "Agent Inject"
slug: "agent-inject"
description: ""
hidden: false
---

# Agent Inject

The _Agent Inject_ feature empowers Live Agents to respond on behalf of users, particularly in cases where the virtual agent struggles to understand the user's reply. This enables a seamless transition, allowing human agents to step in and continue the conversation with the user.

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/conversation/images/agent-inject.png" width="80%" alt="Agent Inject" />
  <figcaption>The Reply to Bot Tab</figcaption>
</figure>

## Activate Agent Inject 

To activate the Agent Inject feature, use the following Nodes:

- [Handover to Agent Node](#handover-to-agent-node)
- [Question Node](#question-node)

### Handover to Agent Node

To activate and configure Agent Inject for Live Agent in the **Handover to Agent** Node editor, do the following:

1. In the **Handover to Agent** Node editor, open **Live Agent Settings** field.
2. Enter in **Live Agent Inbox Id** field the correct Inbox Id in Live Agent.
3. Activate the toggle switch **Allow to reply as user via UI**. After that, a tab **Reply to Bot** will appear in the conversation on the Live Agent side.

### Question Node

To activate and configure Agent Inject for Live Agent in the **Question** Node editor, follow these steps:

1. In the **Question** Node editor, open the **Escalation - Wrong Answers** field.
2. In the **Escalation - Intents** field, select the **Escalation Action** section, specifically, **Handover to human agent**. Define the action that shall happen after an [Intent](https://docs.cognigy.com/ai/resources/tweak/intent-trainer/) is found.
3. Select the **Wrong Answer Count Trigger** by moving the counter slide to, for example, 3. When the user sends three incorrect answers to the Bot, a handover to a Live Agent will be initiated.
4. In the **Flow Continuation** section, choose the preferred option for where the user will resume in the chat upon returning from a Live Agent conversation. The options are:
    - **Below this Node**: The user will be taken to the Node below the Handover Node once the agent resolves the conversation. In this case, the user would continue in a different Flow, but the starting point would be the Node below the Handover Node.
    - **At current AgentInject Entrypoint**: The user will continue the chat at the current AgentInject entry point. This option allows the Agent to guide the user to a specific part of the chat and then give control back to the user.
5. Enter the correct Inbox Id in the **Live Agent Inbox Id** field.
6. Activate the toggle switch **Live Agent - Allow to reply as user via UI**. When enabled, a tab **Reply to Bot** will be added to the human agent's reply field, allowing them to reply as an end user in Live Agent.
7. In the **Handover Settings** field, select one of the **Handover Output Destination** options: **User, Agent, and Agent only**.

### Use Agent Inject

1. Select tab **Reply to Bot**, to open the input field.
2. Enter the message you want to send in behalf of the end user, or click ![transfer-arrow](../../assets/icons/transfer-arrow.svg) to transfer a result message from an assistant to the reply field. The transfer arrow will be visible when hovering over the area next to the assistant message.
3. Click **Send as User** to send the message to the end user.

#### Example

The **Reply to Bot** message, using the Agent Inject feature of the human agent, is red marked and is indicated by a small icon below the message.

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/conversation/images/Agent-Inject_LA_conversation.png" width="100%" alt="Live Agent AgentInject Chat" />
  <figcaption>Live Agent conversation with Agent Inject</figcaption>
</figure>

## More information

- [Question Node](../../ai/flow-nodes/message/question.md)
- [Agent Handover](../../ai/tools/agent-handover.md)
