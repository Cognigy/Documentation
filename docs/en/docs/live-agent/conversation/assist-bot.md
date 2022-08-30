---
 title: "Conversation Assist Bot"
 slug: "conversation-assist-bot" 
 hidden: false 
---
# Assist Bot

<figure>
<img src="{{config.site_url}}live-agent/conversation/images/live-agent-assist-bot-overview.png" width="100%" alt="Live Agent Assist Bot Overview" />
  <figcaption>Live Agent Assist Bot Overview</figcaption>
</figure>

The Assist Bot is the tool for assisting the agents while talking to the customers. It consists of a dedicated flow to provide information to the agent. Therefore, it needs to be configured as a separate flow in Cognigy.AI.


## Creating an Assist Bot

### 1. Create a new WebChat Endpoint

A new WebChat endpoint needs to be created for learning about how to create endpoints head over to [Endpoints]({{config.site_url}}ai/resources/deploy/endpoints). Once the endpoint is created, it is time to copy the endpoint URL from its settings.

<figure>
<img src="{{config.site_url}}live-agent/conversation/images/ai-endpoint-config-url.png" width="100%" alt="Cognigy.AI Endpoint Config URL" />
  <figcaption>Cognigy.AI Endpoint Config URL</figcaption>
</figure>

### 2. Create an Assist Bot for an inbox

Once the endpoint with the Assist flow is set up, and the URL is copied, it is time to create the Assist Bot in Live Agent. Go to the inbox settings and add a new Assist Bot.

<figure>
<img src="{{config.site_url}}live-agent/conversation/images/live-agent-inbox-settings-assist-bots.png" width="100%" alt="Live Agent Assist Bot Inbox Settings" />
  <figcaption>Live Agent Assist Bot Inbox Settings</figcaption>
</figure>

Click on the "Add Bots" button and fill in the following fields:

| Field | Value |
| ------ | ------ |
| Name | Assist Bot Name |
| Endpoint URL | The URL copied from the endpoint settings |

After adding it, it will be available in the "Assist Bot" section of the conversations belonging to the inbox where the Assist Bot was added. It is possible to have multiple Assist Bots in the same inbox and edit them. The changes will be applied instantly.

### 3. Use the Assist Bot in a conversation

When the conversation inbox configures Assist Bot, they can be selected under the Conversation Information section in the right-hand sidebar. There is a tab called "Assist", and then the Assist Bots can be set via the dropdown to chat with them.

<figure>
<img src="{{config.site_url}}live-agent/conversation/images/live-agent-assist-bot-chat.png" width="100%" alt="Live Agent Assist Bot Chat" />
  <figcaption>Live Agent Assist Bot Chat</figcaption>
</figure>

## Forwarding Assist Bot messages

The Assist Bot messages can be easily forwarded to the customer by clicking directly on the messages. The message will be forwarded automatically, as shown in the screenshot.

<figure>
<img src="{{config.site_url}}live-agent/conversation/images/live-agent-assist-bot-forward-messages.png" width="100%" alt="Live Agent Assist Bot Forward Messages" />
  <figcaption>Live Agent Assist Bot Forward Messages</figcaption>
</figure>

## Reseting Assist Bot session

The Assist Bot chat can be reset by clicking on the "Reset Session" button in the dropdown three dots menu. This will clear the history and reset the session with the Assist Bot.

<figure>
<img src="{{config.site_url}}live-agent/conversation/images/live-agent-assist-bot-reset-session.png" width="100%" alt="Live Agent Assist Bot Reset Session" />
  <figcaption>Live Agent Assist Bot Reset Session</figcaption>
</figure>
