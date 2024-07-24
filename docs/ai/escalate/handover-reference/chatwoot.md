---
title: "Chatwoot" 
slug: "chatwoot-handover" 
hidden: false 
---

# Chatwoot

<figure>
  <img class="image-center" src="../../../../_assets/ai/escalate/handover-reference/chatwoot/chatwoot.svg" width="25%" />
</figure>

## Description

Cognigy has integrated **Chatwoot** as an additional handover provider. This integration allows Cognigy customers to connect their users with human agents via the [Chatwoot](https://www.chatwoot.com/) platform. Chatwoot is an open-source solution and is free to use.

## Setup

### Prerequisites

- You need to have an account in [Chatwoot](https://www.chatwoot.com/). You can also set up Chatwoot to run on an [on-premise environment](https://www.chatwoot.com/docs/self-hosted).
- You need two IDs that are listed in the Chatwoot address line:

    - **Account ID** is a unique number for you as the user.
    - **Inbox ID** is not unique and will be created newly with every new channel.<br>
    Both IDs are required to use the new Inbox channel. You can find them in your Chatwoot URL. For example, `https://app.chatwoot.com/app/account/6607/inbox/5446`, where the Account ID is `6607` and the Inbox ID is `5446`.

### Agents in Chatwoot

In case you want to add a new Agent to Chatwoot, go to your Chatwoot installation.
On the Home page, and click the **Agents** in the left-side Settings menu.

<figure>
  <img class="image-center" src="../../../../_assets/ai/escalate/handover-reference/chatwoot/Chatwoot_settings_menu.png" width="80%" />
  <figcaption>Settings menu in Chatwoot</figcaption>
</figure>

### Add a Webhook

To configure the webhook for the **Inbox** incoming messages, follow these steps:

1. In the left-side menu of the **Chatwoot** main page, click **Inboxes**. 
2. To start the Inbox creation and configuration procedure, click **Add Inbox**.
3. Create an API channel by selecting the **API channel** and entering a channel name. 

    <figure>
      <img class="image-center" src="../../../../_assets/ai/escalate/handover-reference/chatwoot/inbox-create-api-channel-edit.png" width="100%" />
    </figure>

4. Enter the Endpoint Base URL in the **Webhook URL** field and append `/handover/chatwoot/` to the end of the URL, for example, `https://endpoint-trial.cognigy.com/handover/chatwoot`.
5. Click **Create API Channel**. 
6. Select the Agent that will be assigned to the Inbox messages, then confirm the action by clicking **Add agents**.

The new channel will be added to the Chatwoot Inbox.
 
### Connect Chatwoot to Cognigy.AI

#### Set your Chatwoot Inbox

To connect Chatwoot to your AI Agent in Cognigy.AI, you need to specify to which Chatwoot Inbox you want the handover to go.

To do this, follow these steps:

1. In the Flow editor, add a **Handover to Agent** Node if you did not do it before.
2. In the Node editor of the **Handover to Agent** Node, go to the **Chatwoot settings** section. 
3. In the **Chatwoot Inbox Id** field, specify the Inbox ID.  You can use [CognigyScript](../../build/cognigy-script.md) to dynamically decide which Inbox should be used for the handover request.

#### Connect your Endpoint to Chatwoot

To connect the Endpoint to Chatwoot, do the following:

1. Open your **Endpoint Editor** in Cognigy.AI and select the **Handover Settings**.
2. Select **Chatwoot** as **Handover Platform**.
3. Enter a Base URL for the Chatwoot instance. The Base URL is your Chatwoot installation URL extended by `/api/v1`. For example, `https://app.chatwoot.com/api/v1` serves as the Base URL, where `https://app.chatwoot.com` is the Chatwoot URL. Alternatively, you can use your on-premise Chatwoot API URL.
4. Enter Chatwoot **Account ID**.
5. Enter the **API Key**.
6. Click **Save** to confirm the entries.
7. To check the functionality, click **Open Webchat** and start a conversation with a handover request.

When you start a conversation with the Endpoint and the Handover Node is triggered, Agent Handover with Chatwoot will be started, and you will find a handover message in the Chatwoot Inbox.

In your Chatwoot Inbox, user messages are displayed on the left-hand side, on the right-hand side you can see the connected real Agent replies.
On the left-hand side, the user messages are displayed. On the right-hand side, the connected real agent replies are displayed in Chatwoot.

!!! note "Note"
    When a User request is answered and solved by the agent, the agent can **Resolve** the connection, and if a further request comes in from the user side, the agent can **Reopen** the connection in Chatwoot to be able to reply to the request.

### Supported message content

Using the Chatwoot integration, the user can receive

- text messages
- files
- videos (for example, mp4)
- images (for example, jpg, png)
- animated gifs

<figure>
  <img class="image-center" src="../../../../_assets/ai/escalate/handover-reference/chatwoot/Screen_Shot_139.png" width="100%" />
  <figcaption>Webchat conversation with text and image</figcaption>
</figure>

### Chatwoot API updates

With Cognigy.AI 4.10.0, the Chatwoot API has been updated due to the implementation with Cognigy Live Agent (new color, chat history).

Details:

- Chatwoot API updated to version 1.19.0.
- Support for custom agent bot name (config-map: `AGENT_BOT_NAME`).
- Support for custom agent bot description (config-map: `AGENT_BOT_DESCRIPTION`).
- Message history of a conversation is available.
- Messages in the Chatwoot dashboard appear in a new theming and styling.