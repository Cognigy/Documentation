---
title: "Agent Inject"
slug: "agent-inject"
description: ""
hidden: false
---

# Agent Inject

In Live Agent the human Agent can help customers when he is assignedto a customer based on a Handover procedure initiated by a Flow in Cognigy.AI. The human Agent can reply directly to the customer, using the "Reply to User" field at the bottom of the Live Agent conversation. The human Agent can chat with another Agent, not visible to the customer, using the "Private Note field". But the human Agent can use a different interaction in a conversation in case, the user is not able to send the required answer to a Bot (Virtual Agent) request in  a Cognigy.Ai Flow, using the "Reply to Bot" field. This is called "Agent Inject" and allows the human agent to send the required response to the bot as if it were the end user responding to the bot by using the "Reply to Bot" field. When successful, the human Agent will mark the conversation as "resolved" and the user will taken back to his previous Flow conversation (Bot) in Cognigy.AI and the conversation can go on with the next step in the Flow. 

Cognigy.AI supports two Flow Nodes to activate and to configure Agent inject.

- [Agent Inject with Handover Node](#flow-with-handover-node)
- [Agent Inject with Question Node](#flow-with-question-node)

## Flow with Handover Node

Flow with **Handover Node** 
To activate and configure Agent Inject for Live Agent in the **Handover Node** editor, do the following:

1. Open "Live Agent Settings" field in the Handover Node editor.
2. Enter in "Live Agent Inbox Id" field the correct Inbox Id in Live Agent.
3. Activate toggle switch "Allow to reply as user via UI". When enabled a (description:"Display a button allowing human agents to reply as end user") in Live Agent.

## Flow with Question Node

Flow with **Question Node** 
To activate and configure Agent Inject for Live Agent in the **Question Node** editor, do the following:

1. Open "Escalation - Wrong Answers" field in the Question Node editor.
2. Select in "Escalation - Intents" field the "Escalation Action" section  "Handover to human Agent" (description:What shall happen after an intent was found?).
3. Select the "Wrong Answer Count Trigger" via moving the counter to e.g. "3".
4. How important is the setting "Flow Continuation" with 2 options to select: 1."Below thios Node" and 2. "At current AgentInject Entrypoint"
5. Enter in "Live Agent Inbox Id" field the correct Inbox Id in Live Agent.
6. Activate toggle switch "Live Agent - Allow to reply as user via UI". When enabled a "Display a button allowing human agents to reply as end user" in Live Agent.
7. In the "Handover Settings" field select one of the "Handover Output Destination" options (User and Agent, Agent only, User only)  

### Example of a chat in Live Agent 

#### Webchat conversation

Webchat using a Flow with question node (without Handover Node)


Hello
Welcome
Yes or No?
what?
Not sure I understood this correctly.
Yes or No?
I do not understand?
I am your assigned Live Agent. How can I help you?
I do not understand the Bot. Can you help me?
okay, I see the what you mean and let me help you...
Yes
This is the correct answer!
I hope that it was helpful. I will close the session and you are taken back to the Bot conversation - bye.
Am I back now to the Bot?
Welcome
Yes or No?
Yes
This is the correct answer!
Powered by Cognigy.AI


#### Live Agent conversation - Transcript

Customer 2023-11-16 15:48:09 UTC 
Hello

Cognigy AgentBot 2023-11-16 15:48:09 UTC 
Welcome

Cognigy AgentBot 2023-11-16 15:48:09 UTC 
Yes or No?

Customer 2023-11-16 15:48:09 UTC 
what?

Cognigy AgentBot 2023-11-16 15:48:09 UTC 
Not sure I understood this correctly.

Cognigy AgentBot 2023-11-16 15:48:10 UTC 
Yes or No?

Customer 2023-11-16 15:48:10 UTC 
I do not understand?

Human Agent 2023-11-16 15:49:06 UTC 
I am your assigned Live Agent . How can I help you?

Customer 2023-11-16 15:49:43 UTC 
I do not understand the Bot. Can you help me?

Human Agent 2023-11-16 15:50:47 UTC 
okay, I see the what you mean. .and let me help you...

Human Agent 2023-11-16 15:51:02 UTC 
Yes

Cognigy AgentBot 2023-11-16 15:51:17 UTC 
This is the correct answer!

Human Agent 2023-11-16 15:53:40 UTC 
I hope that it was helpful. I will close the session and you are taken back to the Bot conversation - bye.


## More information

- [Question Node](https://docs.cognigy.com/ai/flow-nodes/message/question/)
- [Escalation to Handover](https://docs.cognigy.com/ai/flow-nodes/message/question/#escalation-to-handover)
- [Escalation on Wrong Answers](https://docs.cognigy.com/ai/flow-nodes/message/question/#escalation-on-wrong-answers)
- [Handover to Human Agent](https://docs.cognigy.com/ai/flow-nodes/message/question/#handover-to-human-agent)
- [Agent Handover](https://docs.cognigy.com/ai/tools/agent-handover/)


Flow Continuation	Selector	- Below this Node - the user will be taken to the node below the Handover node once the agent resolves the conversation. In this case, the user would continue in a different flow, but the starting point would be the node below the Handover node.
- At current AgentInject Entrypoint - the user will continue the chat at the current agent inject entrypoint. This option allows the agent to guide the user to a specific part of the chat and then give control back to the user.


