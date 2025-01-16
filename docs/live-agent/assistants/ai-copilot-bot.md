---
title: "AI Copilot Bot"
slug: "ai-copilot-bot" 
hidden: false 
tags:
  - Live Agent
  - Assistant
  - Bot
---

# AI Copilot Bot

[![Version badge](https://img.shields.io/badge/Updated in-v4.67-blue.svg)](../../release-notes/4.67.md)

_AI Copilot Bots_ are personal virtual assistants for human agents. These assistants automate service processes, give human agents access to relevant resources and assist in answering common customer questions.

Human agents can interact with AI Copilot Bots in every customer conversation to solve complex customer issues more efficiently and faster to improve customer experience.

Only users with the `Administrator` role can create, edit, or delete AI Copilot Bots in Live Agent.

Differing from other AI Copilot assistants, a human agent can use multiple AI Copilot Bots within a single conversation.
While the AI Copilot assistants listen to the conversation and attempt to follow it,
an AI Copilot Bot acts as an independent secondary bot with built-in logic to assist the human agent.
For instance, if the human agent requires additional expertise during the conversation,
they can activate a specialized AI Copilot Bot, such as one for technical support or order processing.

<figure>
   <img class="image-center" src="../../../_assets/live-agent/conversation/la_ai_copilot_bot.png" width="60%" alt="Live Agent AI Copilot Bot Overview" />
</figure>

## Before you Begin

To use AI Copilot Bots in a Live Agent conversation, you need to create two Flows and two Endpoints in Cognigy.AI that comply with the following conditions:

- The **Main** Flow for interaction between an AI Agent and an end user. Within this Flow, add a [Handover to Agent](../../ai/build/node-reference/service/handover-to-agent.md) Node to transition the conversation from the AI Agent to a human agent. The Inbox ID must be included in the Handover to Agent Node.
- The **Endpoint** for the **Main** Flow.
- The **AI Copilot Bot** Flow for interaction between an AI Copilot Bot and a human agent.
- The **Endpoint** for the **AI Copilot Bot** Flow.

## Create an AI Copilot Bot

You can create multiple AI Copilot Bots within an Inbox.

To create an AI Copilot Bot, do the following:

1. In the Live Agent interface, go to **Settings > Inboxes**.
2. To edit the previously created Inbox settings, click **Settings** next to the Inbox.
3. On the **Settings** tab, click **Add Bots**.
4. In the **Create AI Copilot Bot** window, fill in the following fields:
    - **Name** — enter a unique name for your bot. This name is helpful if there are multiple bots within the same Inbox, allowing you to distinguish them easily.
    - **Endpoint Config URL** — enter the URL copied from the Endpoint settings in Cognigy.AI. You can find and copy the **Config URL** in the Webchat Endpoint settings for the previously created AI Copilot Bot Flow in Cognigy.AI.
5. Click **Add**.   

The created AI Copilot Bot will be available for all assigned human agents within the Inbox.

## Use AI Copilot Bots in a Conversation

Note that you can use multiple AI Copilot Bots within a conversation. Each bot creates a separate session that needs to be [manually closed](#complete-an-ai-copilot-bot-session) after ending the conversation.

To use AI Copilot Bots in a conversation, do the following:

1. Go to your conversation.
2. At the top of the conversation window, click **More Details**.
3. On the right side of the **Conversation Details** window, select the **Copilot** tab. 
4. Open the drop-down list and select one of the available **AI Copilot Bots**. 
5. In the **Edit Message** field at the bottom of the window, write your request to the AI Copilot Bot. The AI Copilot Bot performs research as configured in the AI Copilot Bot Flow and sends back the result in a separate Live Agent chat, such as a product video, image, text, and more. 
6. To forward the provided content to the Live Agent conversation, click directly on the content item. It will be sent to the **Reply to User** field in the main conversation chat. 
7. Click **Send** to provide the content item to the customer in the main conversation chat.

This way, the AI Copilot Bot becomes a dependable assistant for human agents, enabling them to delegate tasks to the bot and then share the outcomes with the customer.

## Complete an AI Copilot Bot Session

To complete a session with AI Copilot Bot, do the following:

1. Go to your conversation.
2. At the top of the conversation window, click **More Details**.
3. On the right side of the conversation window, select the **Copilot** tab. 
4. Click ![vertical ellipsis](../../_assets/icons/vertical-ellipsis.svg). 
5. In the drop-down list, select **Reset Session**. 

The session will stop, the interaction with the bot will finish, and the AI Copilot Bot communication history will be cleared.

## Send a Transcript to Assigned Agents 

In case you want to send a conversation transcript to a specific email address or to the assigned human agents, do the following:

1. Go to your conversation.
2. In the upper-right corner of the conversation window, click **Send Transcript**.
3. In the **Send conversation transcript** window, select one of the following options:
    - **Send transcript to the assigned agent** — the conversation transcript will be sent to a human agent currently assigned to handle the interaction. This is useful when you want the assigned human agent to have a record of the conversation for reference or follow-up.
    - **Send transcript to another email address** — the conversation transcript will be sent to a different email address. This is helpful when you need to share the conversation details with someone other than the assigned human agent, such as a supervisor, team member, or any other relevant party.
4. Click **Submit**. 

A transcript will be sent to the selected receiver.

!!! note
    The email transcript includes only the conversation history between a human agent and their customer. If the human agent calls an AI Copilot Bot for help, that interaction takes place on a separate channel and in a different session, and it will not be included in the transcript.

## More Information

- [Assistants](overview.md)
- [Endpoints](../../ai/deploy/endpoints/overview.md)
- [Inboxes](../settings/inboxes.md)