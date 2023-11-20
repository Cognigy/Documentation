---
title: "Agent Inject"
slug: "agent-inject"
description: ""
hidden: false
---

# Agent Inject

The Agent Inject feature enable Live Agents to manage user interactions by allowing human Agents to send messages on behalf of users.
In Live Agent the human Agent can help users when he is assigned to a user based on a Handover procedure, initiated by a Flow in Cognigy.AI. The human Agent can reply directly to the user, using the **Reply to User** field at the bottom of the Live Agent panel. The human Agent can chat with another Agent, not visible to the customer, using the **Private Note** field. 
In addition to that the human Agent can also use another interaction in a conversation in case, the user is not able to send a required answer to a Virtual Agent Bot request in  a Cognigy.AI Flow, using the **Reply to Bot** field. This is called **Agent Inject** and allows the human agent to send the required response to the Virtual Agent Bot in behalf of the end user responding to the Bot by using the **Reply to Bot** field. When successful, the human Agent will mark the conversation as **Resolved** and the user will be returned back to his previous Flow conversation (Bot) in Cognigy.AI and the conversation can go on with the next step in the Flow. 

**Agent Inject** 

- can be activated in a **Handover to Agent** Node in Cognigy.AI.
- improves human Agents message handling by using a separate **Reply to Bot** option in the Agent's reply field.
- enables handling of messages and sending them on behalf of users.

!!! note
    The tab **Reply to Bot** will be available in Live Agent, when the option **Allow to reply as user via UI** in the Node editor settings of Cognigy.AI is anabled.

Cognigy.AI supports two Flow Nodes to activate and to configure Agent inject.

- [Agent Inject with Handover Node](#activate-agent-inject-for-a-handover-to-agent-node)
- [Agent Inject with Question Node](#activate-agent-inject-for-a-question-node)

## Activate Agent Inject for a Handover to Agent Node

Flow with **Handover to Agent** Node 
To activate and configure Agent Inject for Live Agent in the **Handover to Agent** Node editor, do the following:

1. Open **Live Agent Settings** field in the **Handover to Agent** Node editor.
2. Enter in **Live Agent Inbox Id** field the correct Inbox Id in Live Agent.
3. Activate the toggle switch **Allow to reply as user via UI**. When enabled a tab **Reply to Bot** will be added to the human Agents Reply field allowing to reply as an end user in Live Agent.

The **Handover to Agent** Node initiates the handover to Live Agent depending on the Node editor settings.

## Activate Agent Inject for a Question Node

To activate and configure **Agent Inject** for Live Agent in the [Question Node](https://docs.cognigy.com/ai/flow-nodes/message/question/) editor, do the following:

1. Open **Escalation - Wrong Answers** field in the Question Node editor.
2. Select in **Escalation - Intents** field the **Escalation Action** section  **Handover to human Agent**. You can define the action what shall happen after an [Intent](https://docs.cognigy.com/ai/resources/tweak/intent-trainer/) was found.
3. Select the **Wrong Answer Count Trigger** via moving the counter slide to, for example, to 3. When the user send three times a wron answer to the Bot, a handover to a Live Agent will be initiated.
4. In section **Flow Continuation** select the preferred option at which step in the Flow the user will go on in the chat when returned from a Live Agent conversation.

    Options are:

    - **Below this Node**: The user will be taken to the Node below the Handover Node once the agent resolves the conversation. In this case, the user would continue in a different Flow, but the starting point would be the nNde below the Handover Node.

    - **At current AgentInject Entrypoint**: The user will continue the chat at the current AgentInject entrypoint. This option allows the Agent to guide the user to a specific part of the chat and then give control back to the user.

5. Enter in **Live Agent Inbox Id** field the correct Inbox Id in Live Agent.
6. Activate the toggle switch **Live Agent - Allow to reply as user via UI**. When enabled a tab **Reply to Bot** will be added to the human Agents Reply field allowing to reply as an end user in Live Agent.
7. In the **Handover Settings** field select one of the **Handover Output Destination** options. You can select **User, Agent, and Agent only**.  

For more information, read the [On Resolve Options](https://docs.cognigy.com/ai/tools/agent-handover/?h=below+node#on-resolve-options).

### Sending a Message using Agent Inject

1. Select tab **Reply to Bot**, to open the input field.
2. Enter the message you want to send in behalf of the end user, or click ![transfer-arrow](../../assets/icons/transfer-arrow.svg) to transfer a result message from an assistant to the reply field. The transfer arrow will be visible when hovering over the area next to the assistant message.
3. Click **Send as User** to send the message to the end user.

### Example of a Live Agent conversation 

The **Reply to Bot** message, using the Agent Inject feature of the human Agent, is red marked and is indicated by a small icon below the message.

<figure>
<img src="{{config.site_url}}live-agent/conversation/images/Agent-Inject_LA_conversation.png" width="100%" alt="Live Agent AgentInject Chat" />
  <figcaption>Live Agent conversation with Agent inject</figcaption>
</figure>

## More information

- [Question Node](https://docs.cognigy.com/ai/flow-nodes/message/question/)
- [Escalation to Handover](https://docs.cognigy.com/ai/flow-nodes/message/question/#escalation-to-handover)
- [Escalation on Wrong Answers](https://docs.cognigy.com/ai/flow-nodes/message/question/#escalation-on-wrong-answers)
- [Handover to Human Agent](https://docs.cognigy.com/ai/flow-nodes/message/question/#handover-to-human-agent)
- [Agent Handover](https://docs.cognigy.com/ai/tools/agent-handover/)
