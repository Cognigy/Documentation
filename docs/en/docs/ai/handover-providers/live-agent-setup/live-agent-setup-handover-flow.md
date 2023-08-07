---
 title: "Flow Setup" 
 slug: "live-agent-setup-handover-flow" 
 hidden: false 
---
# Setup a Cognigy.AI Flow for Handover
<div class="divider"></div>

## Set up a Flow for Handover

Once you have [Set up your Endpoint for Handover to Live Agent]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-handover-endpoint/), you can set up your [Flow]({{config.site_url}}ai/resources/build/flows/) for handover to Live Agent.

Create a new Flow with a <a href="/ai/tools/agent-handover">Handover To Agent Node</a>, as seen in the following screenshot.

<figure>
    <img src="{{config.site_url}}live-agent/images/LA-handover-node.PNG" width="100%" alt="Cognigy.AI Handover Flow Screen">
  <figcaption>Cognigy.AI Handover Flow Screen</figcaption>
</figure>

Within the *Handover to Agent Node* you need to set the **Live Agent Inbox ID** field under **Live Agent Settings** with the _Inbox ID_ found in the [previous step]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-handover-endpoint/#account-id-and-api-key-in-live-agent).

## Login to Live Agent and Test Conversations
<div class="divider"></div>

Now it is time to test that everything is working.

Go back to the Endpoint Editor, click on **Open Demo Webchat**.

Say "Hi", and click the send button to start the Conversation. 

<figure>
    <img src="{{config.site_url}}live-agent/images/LA-webchat-hi.PNG" width="100%" alt="Webchat Screen">
    <figcaption>Webchat Screen</figcaption>
</figure>

Next let's check the Live Agent conversations. 

The Live Agent Inbox should contain the Cognigy.AI messages, plus what the customer has sent. 

Open a tab with Live Agent via the User Menu.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/user-menu-with-live-agent-item.png" width="100%" />
  <figcaption>User Menu</figcaption>
</figure>

Find the Conversation by clicking the Conversation bubble on the left. Next, click *All*.

<figure>
    <img src="{{config.site_url}}live-agent/images/LA-inbox-example.PNG" width="100%" alt="Live Agent Conversation Screen">
    <figcaption>Live Agent Conversation Screen</figcaption>
</figure>

Open the Conversation, and send a message from Live Agent.

<figure>
    <img src="{{config.site_url}}live-agent/images/LA-conversation-example.PNG" width="100%" alt="Live Agent Conversation">
    <figcaption>Live Agent Conversation</figcaption>
</figure>

This messages should also appear on the Cognigy.AI Webchat window.

<figure>
    <img class="image-center" src="{{config.site_url}}live-agent/images/LA-webchat.PNG" width="100%" alt="Cognigy.AI Webchat">
    <figcaption>Cognigy.AI Webchat</figcaption>
</figure>

Congratulations! You have had your first Conversation in Live Agent!

## Next Steps - Adding Agents and Admins
Next, you can add more Agents and Admins, and assign them to Inboxes in Live Agent:

- [Adding Agents and Admins to Live Agent]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-agents/)