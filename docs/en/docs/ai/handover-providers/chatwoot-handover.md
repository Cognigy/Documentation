---
 title: "Chatwoot" 
 slug: "chatwoot-handover" 
 hidden: false 
---
# Chatwoot Integration

## Description

<div class="divider"></div>

Cognigy has integrated **"Chatwoot"** as an additional handover provider that can be used by our customers to connect their users with real agents (in third-party sources). Chatwoot is an open-source solution and free to use. You can read more about Agent Handover [here]({{config.site_url}}ai/tools/agent-handover/). 

## Setup
<div class="divider"></div>
To start using Chatwoot as a handover provider with Cognigy.AI, you first have to sign in to Chatwoot here: https://www.chatwoot.com.

!!! note "Running Chatwoot On-Premise"
    You can also set up Chatwoot to run on an On-Premise environment. You can read more about that <a href="https://www.chatwoot.com/docs/self-hosted" target="_blank">here</a>


## Add webhook while creating the inbox

You need to configure the webhook **Inbox** for incoming messages.

- Click on **"Inboxes"** in the main menu on the Chatwoot homepage 

- Click on **"Add Inbox"** to start the Inbox creation and configuration procedure 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/e18890e-Inbox_Create_API_Channel_edit.PNG" width="100%" />
</figure>

**Create API Channel**

- Choose the API channel and enter a channel name 

- Enter the Endpoint Base URL in the "Webhook URL" line and append **/handover/chatwoot/** to the end of the URL (e.g. for example https://endpoint-trial.cognigy.com/handover/chatwoot)

- Click on **"Create API Channel"**

- Select the Agent who will be assigned to the Inbox messages, then confirm with a click on the "Add agents" button.

The new channel will be added to the Chatwoot Inbox.

!!! note "Note"
    You need two numbers that are listed in the Chatwoot address line:

    - **Account ID** (is unique for you as the user)
    - **Inbox ID** (is not unique and will be created newly with every new channel)

    Both IDs are required to use the new Inbox channel.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/3a75da9-Chatwoot_Account_ID.png" width="100%" />
  <figcaption>Chatwood Account ID</figcaption>
</figure>

**Chatwoot Account ID** (red marked in the Chatwoot address line)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/6696134-Chatwoot_Inbox_ID.png" width="100%" />
  <figcaption>Chatwood Inbox ID</figcaption>
</figure>

**Chatwoot Inbox ID** (red marked in the Chatwoot address line)

## Connect Chatwoot to Cognigy.AI

<div class="divider"></div>

In the Handover Node in Cognigy.AI, you can specify to which Inbox you want the handover to start in. 

You need to configure this by opening the Handover Node, opening the **Chatwoot Settings** menu, and filling in the Inbox ID.

!!! note "Dynamically setting the Inbox ID"
    You can use CognigyScript to dynamically decide which Inbox should be used for the handover request

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/8306b54-Handover_to_Chatwoot.PNG" width="100%" />
  <figcaption>Enter the Chatwoot Inbox ID</figcaption>
</figure>

Now we need to connect the Endpoint to Chatwoot. To do this, open the Endpoint Editor and open the Handover Settings section.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/df4f5f0-Chatwoot_endpoint_settings.PNG" width="100%" />
  <figcaption>Handover settings</figcaption>
</figure>

- Enter following data 
 -- Select **"Chatwoot"** as  Handover Platform
 -- Select **BaseUrl** as shown (e.g. `https://app.chatwoot.com/api/v1` or your on-premise Chatwoot API URL)
 -- Enter Chatwoot **"Account ID"** 
 -- Enter the **API Key** (use copy and paste -  you will find the key in Chatwoot in your **"Profile Settings"** in **"AccessToken"** - use the **"Copy"** button)

- Click on **"Save"** to confirm the entries

- Click on "Open Webchat" and start a conversation

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/ae33f9b-Webchat_start_conversation.PNG" width="100%" />
  <figcaption>Webchat conversation</figcaption>
</figure>

When you start a conversation with the Endpoint and trigger the Handover Node, then an Agent Handover will be started with Chatwoot (you will find a handover message in the Chatwoot Inbox)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/c7741b1-Chatwoot_handing_over_info.PNG" width="100%" />
  <figcaption>Inbox handover message</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/c7741b1-Chatwoot_handing_over_info.PNG" width="100%" />
  <figcaption>Chatwoot conversation example</figcaption>
</figure>

On the left-hand side the user messages are displayed - on the right-hand side the connected real agent replies are displayed in Chatwoot.

!!! note "Note"
    When a User request is answered and solved by the agent, the agent can **"Resolve"** the connection and if a further request will come in from the user side the agent can **"Reopen"** the connection in Chatwoot to be able to reply to the request.

## Supported message content

<div class="divider"></div>

Using the Chatwoot integration the user can receive

  - text messages
  - files
  - videos (mp4, ...)
  - images ( jpg,png,... see example below)
  - animated gifs


<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/7740095-Screen_Shot_139.PNG" width="100%" />
  <figcaption>Webchat conversation with text and image</figcaption>
</figure>

## Agents in Chatwoot

<div class="divider"></div>

In case you want to add a new Agent to Chatwoot go to the Chatwoot homepage and click on the **"Agents"** menu item.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/8cd2b86-Chatwoot_settings_menu.svg" width="100%" />
  <figcaption>Chatwoot "Settings" menu</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/502340e-Chatwoot_Agents_text.svg" width="100%" />
  <figcaption>Chatwoot  info about Agents</figcaption>
</figure>

## Chatwoot API updated

<div class="divider"></div>

With Cognigy.AI 4.10.0 the Chatwoot API has been updated due to the implementation with Cognigy Live Agent (new color, chat history).

**Details**:

- Chatwoot API updated to version 1.19.0.
	
- Support of custom agent bot name (config-map: AGENT_BOT_NAME).
	
- Support of custom agent bot description (config-map: AGENT_BOT_DESCRIPTION).
	
- Message history of a conversation is available.
	
- Messages in the Chatwoot dashboard appear in a new theming / styling.