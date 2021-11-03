# Add an Inbox for Handling the Handover

From the Live Agent Dashboard screen, do click on **Inboxes** in the sidebar.

>You can also add new inboxes from the welcome message or clicking on the plus button next to Inboxes in the sidebar

Live Agent will show you a screen to configure your API connection.
<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA-add-inbox-screen.png" width="100%" alt="Live Agent Add Inbox Screen">
  <figcaption>Live Agent Add Inbox Screen</figcaption>
</figure>

Now for creating the inbox, a channel name and a webhook URL needs to be set. Go to the Cognigy endpoint editor for getting it.

<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA-cognigy-endpoint-config-screen.png" width="100%" alt="Cognigy AI Endpoint Configuration Screen">
  <figcaption>Cognigy AI Endpoint Configuration Screen</figcaption>
</figure>

The webhook URL is the Cognigy.AI endpoint config URL domain plus `/handover/chatwoot`.

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
<td>Live Agent Handover</td>
<td>Name for the channel name</td>
</tr>
<tr>
<td>Webhook URL</td>
<td>https://endpoint-trial.cognigy.com/handover/chatwoot</td>
<td>https://endpoint-trial.cognigy.com is the Cognigy.AI endpoint config URL domain</td>
</tr>
</table>

After that, agents need to be assigned to the new inbox. Start typing their names, pick them from the selector and click on **Add agents**.

<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA-add-agents-to-inbox-screen.png" width="100%" alt="Live Agent Add Agents To Inbox Screen">
  <figcaption>Live Agent Add Agents To Inbox Screen</figcaption>
</figure>

One more thing to do is note down the following data, the _Inbox ID_ and the _Account ID_. This can be found on the URL after creating the inbox.

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
<td>1234</td>
</tr>
</tr>
<tr>
<td>Inbox ID</td>
<td>4405</td>
</tr>
</table>

Now your inbox is ready to be used. You can now fill the _Account ID_ field in the **Endpoint Editor** plus the _API Key_ that can be found in Live Agent **Profile Settings** as per the screenshot.

<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA-profile-settings-access-token.png" width="100%" alt="Live Agent Profile Settings API Key">
  <figcaption>Live Agent Profile Settings API Key</figcaption>
</figure>

Now a handover flow needs to be connected to the inbox, head over to 
[Creating a Cognigy.AI Handover Flow]({{config.site_url}}live-agent/getting-started/creating-a-cognigy-handover-flow/).
