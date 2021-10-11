# Live Agent

<br>
[![Version badge](https://img.shields.io/badge/Added in-v4.1.0-blue.svg)](https://shields.io/)

Cognigy Live Agent (lite) was released with Cognigy.AI 4.1.0 and is a tool that can help you to enrich the customer experience of a Contact even beyond the capabilities of your Conversational AI. Our goal here at Cognigy is to provide tools for you that you can use to improve the customer experience of your customers.

There are situations where your Bots might not be able to understand your users or you might have situations where your customers directly want to talk to a specific person. In these scenarios, you can create the handover capability into your bots and forward your user's inputs to Cognigy Live Agent and a real human.

## Sign in

<div class="divider"></div>

**URL:**

- Trial: [https://live-agent-trial.cognigy.ai/login](https://live-agent-trial.cognigy.ai/login)
- App: [https://live-agent-app.cognigy.ai/login](https://live-agent-app.cognigy.ai/login)

In order to sign in into Cognigy Live Agent, you have to visit the login page and go through the authentication process using Cognigy.AI. Please note that you will need to have access to Cognigy.AI and that you need the "livechat"-role set globally. The login screen does not directly ask for your credentials, but will forward you to Cognigy.AI for authentication purpose.


<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/ef18d96-live-agent-staging-v4.cognigy.ai_loginCognigy_smallest.png" width="100%" />
  <figcaption>Cognigy Live Agent login screen.</figcaption>
</figure>

Once you click the "Sign In" button, the known Cognigy.AI login screen will appear in a popup. Use your normal Cognigy.AI login credentials in order to finish the signing process.

???+ info "Permissions"
    Agents need to exist in Cognigy.AI - otherwise, they will not be able to login into Cognigy Live Agent. They will also need to have access to the projects in Cognigy.AI for which they should handle conversations with your end-users. If they don't have access to certain projects in Cognigy.AI, they will not be able to see conversations from users who interact with these projects!

## Selecting a chat

<div class="divider"></div>

Once you are in Live Agent, you will see the column-based user interface which we have picked for this tool. The dark sidebar on the left shows the main navigation - right next to it, you can see the list of available chats. This list is divided into a section with **your chats** (currently empty) and **queued chats** (currently 4). Queued chats are conversations with users who are waiting for an agent.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/f211849-live-agent-staging-v4.cognigy.ai_loginCognigy_smallest_1.png" width="100%" />
  <figcaption>Users are waiting for agents to help them</figcaption>
</figure>

## Take over a chat

<div class="divider"></div>

You can always click on one of the **queue chats** in order to load to display the chat history. This might be useful in order to understand whether you can actually help this customer or whether one of your colleagues might need to take it. Click on one of the queued chats in order to inspect the history and have a look at the top toolbar.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/02c770c-live-agent-staging-v4.cognigy.ai_loginCognigy_smallest_2.png" width="100%" />
  <figcaption>Taking over a chat and inspecting the top toolbar with various actions.</figcaption>
</figure>

Once you have selected a chat, you will see the chat history of the user as well as a toolbar that gives you the ability to **take over** this specific conversation. Once you click this button, the chat will disappear from the **queued chats** list and will be moved into your own **assigned to me** section. No other agent will now be able to take this conversation as it is now assigned to you.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/774f5fd-live-agent-staging-v4.cognigy.ai_loginCognigy_smallest_3.png" width="100%" />
  <figcaption>A chat was assigned to the current agent and disappeared from the queued section.</figcaption>
</figure>

## Interacting with the customer

<div class="divider"></div>

At this point, you can now interact with the customer and have a chat - similar to using an instant messenger. Live Agent will forward your responses to Cognigy.AI and that product will forward everything to the actual end customer e.g. browsing your website right now.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/3cbaf76-live-agent-staging-v4.cognigy.ai_loginCognigy_smallest_4.png" width="100%" />
  <figcaption>Interacting with the customer through a chat.</figcaption>
</figure>

You might have also recognized that the top toolbar has changed. Instead of a "take over" button, you will now see two other buttons: "drop" and "finish".

You can drop a chat at any time which will add it back to the queue. Other agents will then have the chance to take this chat and help the customer. This functionality is especially useful if you have recognized that you are not able to help, but might have a colleague who can.

Once you are done with a chat and want to hand the conversation back to Cognigy.AI and the bot, you can finish the conversation which will completely close and remove it from Cognigy Live Agent.

## Using Cognigy Contact Profiles


<div class="divider"></div>

Depending on whether a user is completely new or already known to the system, the bots in Cognigy.AI might have already collected some personal information about the user such as the users' name. Once you have selected a chat, you can click on the "person icon" in the toolbar in order to load the Cognigy Contact Profile for this user.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/2a5531b-live-agent-staging-v4.cognigy.ai_loginCognigy_smallest_5.png" width="100%" />
  <figcaption>Inspecting the Cognigy Contact Profile which fields that were propagated by bots.</figcaption>
</figure>

In our example, you see that the system already knows the name of the customer as well as an email address. Let's assume that the email is wrong and that the customer complained about not receiving a newsletter. You can click on a field in the contact profile viewer in order to manipulate the field and change its content.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/a42abd7-live-agent-staging-v4.cognigy.ai_loginCognigy_smallest_6.png" width="100%" />
  <figcaption>Manipulating fields in a Cognigy Contact Profile.</figcaption>
</figure>

Once you clicked on "save", Live Agent will update the Cognigy Contact Profile with the new value.

## Agent assist

<div class="divider"></div>

Agent assist is a concept that we have integrated in Cognigy Live Agent in order to support your Agents with their work. So-called Agent-helpers can be configured and help your Agents by answering their questions or help them with composing structured content like quick-replies, galleries, and e.g. product lists.

## Using Agent assist

Agent assist can be accessed by clicking on the little "chat icon" on the right-top corner of the screen. Once opened, a side-panel will fly in. In order to use Agent assist, a bot needs to have been prepared for this use-case. We will cover this topic at a later point. Let's have a look at our example in which we have prepared two Agent-helpers.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/48740fb-live-agent-staging-v4.cognigy.ai_workspace_5fe3214007af1b159d0ad11cCognigy_smallest.png" width="100%" />
  <figcaption>Selecting an Agent-helper we want to have a conversation with.</figcaption>
</figure>

In our example, we have selected the "Restaurant" bot with which we can now have a chat - all while having an ongoing conversation with the real human in the center of our screen. Agent-helpers are usually built in a way that agents can use simple phrases in order to get relevant information quickly. A simple phrase might be e.g. a short keyword like "reservation" or things like "show me information to product XYZ". Agents can now click next to the messages in the Agent assist chat in order to copy the content, insert it into the chat with the actual customer, and send the structured content to the real customer.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/590486c-live-agent-staging-v4.cognigy.ai_workspace_5fe3214007af1b159d0ad11cCognigy_smallest_2.png" width="100%" />
  <figcaption>Clicking next to the structured content in Agent assist will copy to the content to your main view.</figcaption>
</figure>

You can always reset your conversation with an Agent-helper by clicking on the "recycle" button on the top right corner - right next to the "X"-button for closing Agent assist. Selecting the "Forward" option will forward all messages from the real customer to your Agent-helper - this can e.g. be used in order to fill in some personal information into a form.

## Configuring Agent-helpers

To configure a new Agent-helper, you have to build a Flow in Cognigy.AI and expose it by creating a Webchat endpoint. Copy the **Config URL** of your Webchat - it should look like the following:

**Webchat Config URL**
```
https://endpoint-trial-v4.cognigy.ai/d6497c8ce09af531cb448bfb4a38a9c87f20077bd25c9fe8cedd94b14bd28f7e
```

Right now you have to split the config URL into its two components - the "hostname" and the "URL-token". Using the config URL from above, the two components would be:

**Hostname**
```
https://endpoint-trial-v4.cognigy.ai
```
**URL Token**
```
d6497c8ce09af531cb448bfb4a38a9c87f20077bd25c9fe8cedd94b14bd28f7e
```

In Cognigy Live Agent, select the second menu item located in the dark sidebar on the very left of your screen - right below the chat-symbol. This will open the Agent-helper configuration panel. You will see a list of all configured bots Agents can interact with right now. You can click on "Add Agent helper" in order to add a new bot, you can hover a list item and click on the "trashcan"-button in order to delete one of the helpers.

Clicking on the "Add Agent helper" button will open a dialog in which you can enter a "Name", the "Endpoint URL" (that is the hostname) as well as the "URL Token". Click on "Add" in order to add a new helper and publish it to your Agents.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/38a23dd-live-agent-staging-v4.cognigy.ai_workspace_5fe3214007af1b159d0ad11cCognigy_smallest_4.png" width="100%" />
  <figcaption>Configure a new Agent helper.</figcaption>
</figure>