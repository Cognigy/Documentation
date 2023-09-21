---
 title: "Chatwoot" 
 slug: "chatwoot-handover" 
 hidden: false 
---
# Chatwoot Integration

## Description

Cognigy has integrated **Chatwoot** as an additional handover provider that can be used by our customers to connect their users with real agents (in third-party sources). Chatwoot is an open-source solution and free to use. You can read more about Agent Handover [here]({{config.site_url}}ai/tools/agent-handover/). 

## Agents in Chatwoot

In case you want to add a new Agent to Chatwoot go to the Chatwoot homepage and click on the **Agents** menu item. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/Chatwoot_settings_menu.png" width="80%" />
  <figcaption>Chatwoot "Settings" menu</figcaption>
</figure>


## Setup

To start using Chatwoot as a handover provider with Cognigy.AI, you first have to sign in to Chatwoot here: https://www.chatwoot.com.

!!! note "Running Chatwoot On-Premise"
    You can also set up Chatwoot to run on an On-Premise environment. You can read more about that <a href="https://www.chatwoot.com/docs/self-hosted" target="_blank">here</a>


## Add webhook while creating the inbox

You need to configure the webhook **Inbox** for incoming messages.

- Click on **Inboxes** in the main menu on the Chatwoot homepage 

- Click on **Add Inbox** to start the Inbox creation and configuration procedure 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/Inbox_Create_API_Channel_edit.PNG" width="100%" />
</figure>

**Create API Channel**

- Choose the API channel and enter a channel name 

- Enter the Endpoint Base URL in the "Webhook URL" line and append **/handover/chatwoot/** to the end of the URL (e.g. for example https://endpoint-trial.cognigy.com/handover/chatwoot)

- Click on **Create API Channel**

- Select the Agent who will be assigned to the Inbox messages, then confirm with a click on the "Add agents" button.

The new channel will be added to the Chatwoot Inbox.

!!! note "Note"
    You need two numbers that are listed in the Chatwoot address line:

    - **Account ID** (is unique for you as the user)
    - **Inbox ID** (is not unique and will be created newly with every new channel)

    Both IDs are required to use the new Inbox channel. How to find them, see sections below.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/Chatwoot_Account_ID.png" width="100%" />
  <figcaption>Chatwood Account ID</figcaption>
</figure>

**Chatwoot Account ID** (red marked in the Chatwoot address line)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/Chatwoot_Inbox_ID.png" width="100%" />
  <figcaption>Chatwood Inbox ID</figcaption>
</figure>

**Chatwoot Inbox ID** (red marked in the Chatwoot address line)

## Connect Chatwoot to Cognigy.AI


### Set your Chatwoot Inbox

To connect Chatwoot with your Agent, you need to specify to which Chatwoot Inbox you want the handover to go in. You can do this in the **Handover Node** of your Agent in Cognigy.AI as follows:  

1. Click on the **Handover Node** in Cognigy.AI.
2. Open the **Chatwoot Settings** menu and enter the Inbox ID. How to find the **Inbox ID**, see section below.

!!! note "Dynamically setting the Inbox ID"
    You can use CognigyScript to dynamically decide which Inbox should be used for the handover request.

### Connect your Endpoint to Chatwoot

To connect the Endpoint to Chatwoot, do the following:

1. Open your **Endpoint Editor** in Cognigy.AI and select the **Handover Settings**.
2. Select **Chatwoot** as **Handover Platform**.
3. Enter the **BaseUrl** for the Chatwwot instance. The Base URL is your Chatwoot installation URL, extended by `/api/v1`. For example, `https://app.chatwoot.com/api/v1` is the Base URL where `https://app.chatwoot.com` is the Chatwoot URL. You can use alternatively your on-premise Chatwoot API URL.
4. Enter Chatwoot **Account ID**. How to find the **Account ID**, see section below.
5. Enter the **API Key**. How to find the **API Key**, see section below. 
6. Click on **Save** to confirm the entries.
7. To check the functionality, click on "Open Webchat" and start a conversation with handover request.

When you start a conversation with the Endpoint and the Handover Node is triggered, Agent Handover with Chatwoot will be started and you will find a handover message in the Chatwoot Inbox.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/Chatwoot_handing_over_info.PNG" width="100%" />
  <figcaption></figcaption>
</figure>

In your Chatwoot Inbox user messages are displayed on the left-hand side, on the right-hand side you can see the  connected real Agent replies.
On the left-hand side the user messages are displayed - on the right-hand side the connected real agent replies are displayed in Chatwoot.

!!! note "Note"
    When a User request is answered and solved by the agent, the agent can **Resolve** the connection and if a further request will come in from the user side the agent can **Reopen** the connection in Chatwoot to be able to reply to the request.

#### Find Account ID and Inbox ID

The Chatwoot Inbox, you have created in a previous step for your project, is defined by an **Account ID** and **Inbox ID**. 

You can find the Account ID in the Chatwoot URL of your Chatwoot **Inbox**.

To locate the ID, follow these steps:

1. Open your Live Agent Account and go to **Inboxes**. 
2. In the Inboxes list, find the Inbox of your project and click on it. 
3. The Inbox settings will be displayed, and you will see the address line of your browser as follows: `https://<your-environment>/app/accounts/<account-id>/settings/inbox/<inbox-id>`. For example, in the URL `https:/app.chatwoot.com/app/accounts/6607/inbox/5446`, the **Account ID** is 6607 and the Inbox ID is 5446.

#### Find an API Key

1. Click the **Profile Settings** icon of your Account in the bottom-left corner of the Chatwoot dashboard, then select **Profile Settings** in the selection menu.
2. Find the **Access Token** section, showing your API Key. 
3. Copy the API Key and paste it into the **API Key** field of your Endpoint in Cognigy.AI. 

## Supported message content

Using the Chatwoot integration the user can receive

  - text messages
  - files
  - videos (mp4, ...)
  - images ( jpg,png,... see example below)
  - animated gifs

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/Screen_Shot_139.png" width="100%" />
  <figcaption>Webchat conversation with text and image</figcaption>
</figure>

## Chatwoot API updated

With Cognigy.AI 4.10.0 the Chatwoot API has been updated due to the implementation with Cognigy Live Agent (new color, chat history).

**Details**:

- Chatwoot API updated to version 1.19.0.
- Support of custom agent bot name (config-map: AGENT_BOT_NAME).
- Support of custom agent bot description (config-map: AGENT_BOT_DESCRIPTION).
- Message history of a conversation is available.
- Messages in the Chatwoot dashboard appear in a new theming / styling.