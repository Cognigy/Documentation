---
title: "Agent Assist Bot"
slug: "agent-assist-bot" 
hidden: false 
---

# Assist Bot

_Assist Bots_ are personal virtual assistants for human agents. These assistants automate service processes, give human agents access to relevant resources and assist in answering common customer questions.

Human agents can interact with Assist Bots in every customer conversation to solve complex customer issues more efficiently and faster to improve customer experience.

Only users with the `Administrator` role can create, edit, or delete Assist Bots in Live Agent.

Differing from other AI Copilot assistants, a human agent can use multiple Assist Bots within a single conversation.
While the AI Copilot assistants listen to the conversation and attempt to follow it,
an Assist Bot acts as an independent secondary bot with built-in logic to assist the human agent.
For instance, if the human agent requires additional expertise during the conversation,
they can activate a specialized Assist Bot, such as one for technical support or order processing.
Unlike other AI Copilot assistants, the workflow of this Assist Bot remains unchanged on the fly.

<figure>
   <img class="image-center" src="{{config.site_url}}live-agent/conversation/images/LA_asked_Assist-Bot_for_help.png" width="80%" alt="Live Agent Assist Bot Overview" />
</figure>

## Before you Begin

To use Assist Bots in a Live Agent conversation, you need to create two Flows and two Endpoints in Cognigy.AI that comply with the following conditions:

- The **Main** Flow for customer conversation. Handover to Agent Node to enable the handover to a Live Agent. The Inbox ID is added to the Handover to Agent Node. To create a Flow with Handover to Agent a Live Agent, refer to [Live Agent Setup Handover Endpoint](../getting-started/live-agent-setup/live-agent-setup-handover-endpoint.md).
- The **Endpoint** for the **Main** Flow.
- The **Assist Bot** Flow, prepared to be able for Live Agent assistance.
- The **Endpoint** for **Assist Bot** Flow.

## Create an Assist Bot

You can create multiple Assist Bots within an Inbox.

To create a new Assist Bot, do the following:

1. Open the Live Agent interface.
2. Navigate to **Settings > Inboxes**.
3. To edit the previously created Inbox settings, click **Settings** next to the Inbox.
4. On the **Settings** tab, click **Add Bots**.
5. In the **Create New Assist Bot** window, fill in the following fields:
    - **Name** — enter a unique name for your bot. This name is helpful if there are multiple bots within the same Inbox, allowing you to distinguish them easily.
    - **Endpoint Config URL** —  enter the URL copied from the Endpoint settings in Cognigy.AI. You can find and copy the **Config URL** in the Webchat Endpoint settings for the previously created Assist Bot Flow in Cognigy.AI.
6. Click **Add**.   

The created Assist Bot will be available for all assigned human agents within the Inbox.

## Use Assist Bots in a Conversation

Note that you can use multiple Assist Bots within a conversation.

Assist Bots can be called as assistance by all human agents assigned to the Inbox and can serve multiple sessions at the same time.

To use Assist Bots in a conversation, do the following:

1. Go to your conversation.
2. At the top of the conversation window, click **More Details**.
3. On the right side of the **Conversation Details** window, select the **Assist** tab. 
4. Open the drop-down list and select one of the available **Assist Bots**. 
5. In the **Edit Message** field at the bottom of the window, write your request to the Assist Bot. The Assist Bot performs research as configured in the Assist Bot Flow and sends back the result in a separate Live Agent chat, such as a product video, image, text, and so on. 
6. To forward the provided content to the Live Agent conversation, click directly on the content item. It will be sent to the **Reply to User** field in the main conversation chat. 
7. Click **Send** to provide the video to the customer in the conversation.

This way, the Assist Bot is a reliable helper for the human agent, who can delegate tasks to the Assist Bot and then forward the results to the customer.

## Complete an Assist Bot Session

To complete a session with Assist Bot, follow these steps:

1. Go to your conversation.
2. At the top of the conversation window, click **More Details**.
3. On the right side of the conversation window, select the **Assist** tab. 
4. Click ![vertical ellipsis](../../assets/icons/vertical-ellipsis.svg). 
5. In the drop-down list, select **Reset Session**. 

The session will stop, the interaction with the bot will finish, and the Assist Bot communication history will be cleared.

## Send a Transcript to Assigned Agents 

In case you want to send a conversation transcript to a specific email address or to the assigned human agents, do the following:

1. Click **Send Transcript** in the top right corner in the **Conversation Details** window. 
2. Select one of the following options from the list:
    - **Send transcript to the assigned agent** — the conversation transcript will be sent to the agent currently assigned to handle the interaction. This is useful when you want the assigned agent to have a record of the conversation for reference or follow-up.
    - **Send transcript to another email address** — the conversation transcript will be sent to a different email address. This is helpful when you need to share the conversation details with someone other than the assigned agent, such as a supervisor, team member, or any other relevant party.
3. Click **Submit**. 

A transcript will be send to the selected receiver.

!!! note
    The email transcript includes only the conversation history between a human agent and their customer. If the human agent calls an Assist Bot for help, that interaction takes place on a separate channel and in a different session, and it will not be included in the transcript.

## More Information

- [Endpoints](../../ai/resources/deploy/endpoints.md)
- [Agents](../../ai/resources/agents/agents.md)
- [Conversations Workflow](../conversation/conversation-workflow.md#assign-agent)
- [Live Agent Setup Handover Endpoint](../getting-started/live-agent-setup/live-agent-setup-handover-endpoint.md)
- [Inboxes](../settings/inboxes.md)