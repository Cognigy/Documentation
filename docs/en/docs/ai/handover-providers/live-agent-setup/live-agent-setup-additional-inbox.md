---
 title: "Adding an Additional Inbox for your Project" 
 slug: "live-agent-setup-additional-inbox" 
 hidden: false 
---
# Adding an Additional Inbox for your Project

<div class="divider"></div>

Although normally you will not need to manually create an Inbox for your Project, you can create additional Inboxes in Live Agent and set them up for handover in your Flows. 

This may be necessary if you require a second Inbox for a single Project or Bot.

## Add an additional Inbox in Live Agent
<div class="divider"></div>

From the Live Agent Dashboard screen, click on **Inboxes** in the sidebar.

>You can also add new Inboxes from the welcome message, or by clicking on the plus button next to Inboxes in the sidebar

Live Agent will show you a screen to configure your API connection.
<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA-add-inbox-screen.png" width="100%" alt="Live Agent Add Inbox Screen">
  <figcaption>Live Agent Add Inbox Screen</figcaption>
</figure>

To create an Inbox, a channel name and a webhook URL needs to be set. Go to the Cognigy Endpoint Editor to retrieve it.

<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA-cognigy-endpoint-config-screen.png" width="100%" alt="Cognigy AI Endpoint Configuration Screen">
  <figcaption>Cognigy AI Endpoint Configuration Screen</figcaption>
</figure>

The webhook URL is the Cognigy.AI Endpoint Config URL domain plus `/handover/liveagent`.

<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA-add-api-channel-screen.png" width="100%" alt="Live Agent API channel Screen">
  <figcaption>Live Agent API Channel Screen</figcaption>
</figure>

<table>
<tr>
<th>Field</th>
<th>Example Value</th>
<th>Description</th>
</tr>
<tr>
<td>Channel Name</td>
<td>Inbox name</td>
<td>Name for the channel name</td>
</tr>
<tr>
<td>Webhook URL</td>
<td>https://endpoint-trial.cognigy.com/handover/liveagent</td>
<td>https://endpoint-trial.cognigy.com is the Cognigy.AI endpoint config URL domain</td>
</tr>
</table>

After adding the URL, Agents need to be assigned to the new Inbox. Start typing their names, select them from the selector, and click on **Add Agents**.

<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA-add-agents-to-inbox-screen.png" width="100%" alt="Live Agent Add Agents To Inbox Screen">
  <figcaption>Live Agent Add Agents To Inbox Screen</figcaption>
</figure>

Now note down the _Inbox ID_ of your new Inbox. The _Account ID_ and _Inbox ID_ values can be found on the Live Agent URL after creating the Inbox.

<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA-account-inbox-ids.png" width="100%" alt="Live Agent Account ID and Inbox ID">
  <figcaption>Live Agent Account ID and Inbox ID</figcaption>
</figure>

<table>
<tr>
<th>Field</th>
<th>Example Value</th>
</tr>
<tr>
<td>Live Agent URL</td>
<td>cognigy-live-agent.com/app/accounts/1234/inbox/4405</td>
</tr>
<tr>
<td>Account ID</td>
<td>10</td>
</tr>
</tr>
<tr>
<td>Inbox ID</td>
<td>25</td>
</tr>
</table>

Now your additional Inbox is almost ready.

## Configure a Flow for Handover to the Additional Inbox
<div class="divider"></div>

To begin using your new Inbox, setup a Flow with a <a href="/ai/tools/agent-handover">Handover To Agent Node</a>, as seen in the following screenshot.

<figure>
    <img src="{{config.site_url}}live-agent/images/LA-handover-node.png" width="100%" alt="Cognigy.AI Handover Flow Screen">
  <figcaption>Cognigy.AI Handover Flow Screen</figcaption>
</figure>

Within the *Handover to Agent Node* you need to set the **Live Agent Inbox ID** field under **Live Agent Settings** with the _Inbox ID_ of your additional Inbox.

You have now completed the setup for an additional Inbox.

## See Further Live Agent Documentation
<div class="divider"></div>

For more, please visit our Live Agent documentation here: 

- [**Live Agent Overview**]({{config.site_url}}live-agent/overview/)