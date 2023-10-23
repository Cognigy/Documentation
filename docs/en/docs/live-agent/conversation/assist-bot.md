---
 title: "Agent Assist Bot"
 slug: "agent-assist-bot" 
 hidden: false 
---
# Assist Bot

The Assist Bot is the tool for assisting the agents while talking to the customers. It consists of a dedicated flow to provide information to the agent. Therefore, it needs to be configured as a separate flow in Cognigy.AI. 

<figure>
<img src="{{config.site_url}}live-agent/conversation/images/LA_asked_Assist-Bot_for_help.png" width="100%" alt="Live Agent Assist Bot Overview" />
  <figcaption></figcaption>
</figure>

## Create an Assist Bot

### Prerequisites
Before setting up the Endpoint, check whether these steps are done:

Live Agent is set up for your Organization
The Inbox is created for your Live Agent Account.

### 1. Create a new Virtual Agent
1. Open the Cognigy.AI interface
2. Go to the top left side in Cognigy.AI and click **+Create Agent**.
3. Create a Virtual Agent and enable Set up of a Live Agent and creating of a default Live Agent Inbox.
4. Skip the "Select Solution Accelerator" page and click "Select Channels".
5. Select **Webchat** channel.
6. Skip "Skills" selection page.
7. Click **Create**. The Virtual Agent will be created.


### 2. Create two Flows in Cognigy.AI

To use Assist Bots in Live Agent you need to create two Flows in Cognigy.AI:
1. Create a main Flow with a Handover Node which enables Handover to the Live Agent on customer request
2. Create a 

1. Go to 'Deploy > Endpoints'.
2. 

### 2. Create a new Webchat Endpoint

A new WebChat endpoint needs to be created.  Once the endpoint is created, it is time to copy the endpoint URL from its settings.

1. Go to 'Deploy > Endpoints'.

A new WebChat endpoint needs to be created.  Once the endpoint is created, it is time to copy the endpoint URL from its settings.


### 2. Create an Assist Bot for an Inbox

Once the endpoint with the Assist flow is set up, and the URL is copied, it is time to create the Assist Bot in Live Agent. Go to the inbox settings and add a new Assist Bot.



Click on the "Add Bots" button and fill in the following fields:

| Field        | Value                                                   |
|--------------|---------------------------------------------------------|
| Name         | Assist Bot name.                                        |
| Endpoint URL | The URL copied from the endpoint settings in Cognigy.AI.|

The newly added Assist Bot will be available in the "Assist Bot" section of the conversations belonging to the according inbox. It is possible to have multiple Assist Bots in the same inbox and edit them. The changes will be applied instantly.






## Use Assist Bots in a conversation

Live Agents, dealing with customer requests, can call available **AssistBots** in a conversation at any time for support. To use Assist Bots in a customer conversation, do the following:

1. On the right side of the conversation window, click **Assist**.
2. Click three dots icon next to the drop-down list.
2. Open the drop-down list and select one of the available **Assist Bots**.
3. In the edit message field at the bottom write your request to the Assist-Bot, for example, "Provide me with a video about Knowledge AI".
4. The Assist Bot does a research and sends back the video in the separate Live Agent chat.
5. To forward the video to the Live Agent conversation, click directly on the Video. The Video will be send to the Live Agents'"Reply to User" field.
6. To provide the video to customer in the conversation, click "Send".

This way, the Assist Bot is very helpful for the Live Agent, who is able to let the Assist Bot doing tasks and then can forward reply results to the customer. 

## How to complete a session with Assist Bot 

As a Live Agent, you have following options at the end of a call:

1. To complete a session of Live Agent and Assist Bot, click the **Reset Session** three dots icon in the dropdown menu next to the Assist Bot drop-down list. The Assist Bot can now be used in another conversation, called by a Live Agent.

2. To clear the whole conversation of Live Agent and customer, click **Clear Conversation History" in the top right corner of the Converstion details window. 

3. To close a conversation, click "Resolved" in the top right corner of the Converstion details window.

## More Information

- [Endpoints](../../ai/resources/deploy/endpoints.md)
- [Agents](../../ai/resources/agents/agents.md)
- [Conversations Workflow](../conversation/conversation-workflow.md#assign-agent)
- [Live Agent Setup Handover Endpoint](../../getting-started/live-agent-setup/live-agent-setup-handover-endpoint/)



