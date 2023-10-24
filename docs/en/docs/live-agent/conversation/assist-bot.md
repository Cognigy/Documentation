---
 title: "Agent Assist Bot"
 slug: "agent-assist-bot" 
 hidden: false 
---
# Assist Bot

Assist Bot is a tool for assisting Live Agents while talking to the customers. It consists of a preconfigured Flow to provide information to the Agents. Therefore, it needs to be configured as a separate Flow in Cognigy.AI.

Assist Bots are personal virtual assistants for Live Agents, they automate service processes, give Live Agents access to relevant resources and assist in answering common customer questions.

Assist Bots empower Support Live Agents in their daily work in helping  customers and answering  requests. Live Agents can call and interact with Assist Bots in every customer conversation to solve complex customer situations more efficiently and faster and to improve customer experience.

<figure>
<img src="{{config.site_url}}live-agent/conversation/images/LA_asked_Assist-Bot_for_help.png" width="100%" alt="Live Agent Assist Bot Overview" />
  <figcaption></figcaption>
</figure>

## How to work with Assist Bots

### Prerequisites
Before setting up the required **Endpoints** in Cognigy.AI and creating an Assist Bot in Live Agent, check whether these steps are done:

- [Live Agent is set up for your Organization](../getting-started/live-agent-setup/live-agent-setup-org.md)
- [The Inbox is created for your Live Agent Account](../getting-started/live-agent-setup/live-agent-setup-inbox.md). 

Live Agent conversation with a customer and Assist Bot interaction need separate channels, each with a separate Webchat Endpoint.
To use Assist Bots in a Live Agent conversation you need to create first two Flows in Cognigy.AI:

- **Main** Flow for customer conversation needs three configured entities:
    1. Handover Node to enable the handover to a Live Agent. 
    2. Webchat Endpoint configured 
    3. Inbox for Live Agent

- **Assist Bot** Flow, prepared to be able for Live Agent assistance.
    1. WebChat Endpoint, to enable communication between Live Agent and Assist Bot.

###  Testing Webchat conversation and Handover to Live Agent

To make sure that your main Flow is configured correct and provides a Handover to a Live Agent, do the following:

1. Open the Webchat Endpoint Editor for the main Flow in your Cognigy.AI interface.
2. Click **Open Demo Webchat**.
3. Start a conversation in the Webchat window, saying for example, "Hello - please connect me to a Live Agent". The Flow will initiate a handover procedure to a Live Agent using the previous configured Inbox for Live Agent. There will be a notification email for the assigned Live Agent that a conversation request received in the Inbox. 
4. Go to Live Agent, click **Conversations** and select the corresponding **Inbox** for the Live Agent communication. You will find the conversation send to the Inbox by a handover initiated by the Virtual Agent Flow in Cognigy.AI. For testing you need to be assigned as Live Agent in the **Conversation Actions** on the right side of the conversations window. 
5. As assigned Agent you can reply and continue the conversation. 

### Create an Assist Bot for an Inbox in Live Agent

!!! note
    Only users with Admin role can create, edit or delete Assist Bots in Live Agent.

To create a new Assist Bot, do the following:

1. Open Live Agent and go to **Settings > Inboxes**.
2. To edit the previous created Inbox settings click **Settings** next to the Inbox.
3. On the configuration page click **Add Bots** to open a setup page for the new Assist Bot.
4. Enter a **Name** you want and the **Endpoint Config URL**, according the below table. You can find and copy the Config URL in the Webchat Endpoint Editor settings for the previous created Assist Bot Flow in Cognigy.AI.
5. Click **Add** to create the new Assist Bot.    

| Field        | Value                                                   |
|--------------|---------------------------------------------------------|
| Name         | Assist Bot name.                                        |
| Endpoint URL | The URL copied from the Endpoint settings in Cognigy.AI.|

The created Assist Bot will be available for the Inbox and all assigned Live Agents. You can have multiple Assist Bots in the same Inbox and edit them as Admin. How to select and use Assist Bots in a conversation, see next section.

## Use Assist Bots in a conversation

Live Agents, dealing with customer requests, can call available **Assist Bots** in a conversation at any time for support. Assist Bots can be called as assistance by all Agents assigned to the Inbox and can serve multiple sessions at the same time.
To use Assist Bots as a Live Agent in a customer conversation, do the following:

1. On the right side of the conversation window, click **Assist**.
2. click ![vertical ellipsis](../../assets/icons/vertical-ellipsis.svg) next to the drop-down list.
2. Open the drop-down list and select one of the available **Assist Bots**.
3. In the edit message field at the bottom write your request to the Assist-Bot, for example, "I need information about Knowledge AI".
4. The Assist Bot does a research, as configured in the Assist Bot Flow, and sends back the result in the separate Live Agent chat, for example, a product video.
5. To forward the provided video to the Live Agent conversation, click directly on the video. It will be send to the Live Agents'**Reply to User** field.
6. Click **Send** to provide the video to the customer in the conversation.

This way, the Assist Bot is very helpful for the Live Agent, who is able to let the Assist Bot doing tasks and then can forward results to the customer. 

## Complete a session with Assist Bot by Live Agent

To complete a session of Live Agent and Assist Bot, proceed as follows:

1. Click ![vertical ellipsis](../../assets/icons/vertical-ellipsis.svg).
2. Select **Reset Session** in the drop-down list. The Assist Bot communication history will be cleared.

## Send a Transcript to assigned Agents 

In case you want to send a conversation transcript to a specific email address or to another assigned Agent, do the following:

1. Click **Send Transcript** in the top right corner in conversation details window. A selection list appears, providing following options:
     - Send transcript to the assigned agent
     - Send transcript to another email address

2. Select one option and click **Submit**. A transcript will be send to the selected receiver. 

!!! note
    The transcript email includes only the conversation between Live Agent and customer. When Live Agent called an Assist Bot for assistance, that interaction used another channel and is a different session and will not be a part of the send transcript.

## More Information

- [Endpoints](../../ai/resources/deploy/endpoints.md)
- [Agents](../../ai/resources/agents/agents.md)
- [Conversations Workflow](../conversation/conversation-workflow.md#assign-agent)
- [Live Agent Setup Handover Endpoint](../getting-started/live-agent-setup/live-agent-setup-handover-endpoint.md)
- [Inboxes](../settings/inboxes.md)