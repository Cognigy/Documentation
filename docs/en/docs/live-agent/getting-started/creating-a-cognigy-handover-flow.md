---
 title: "Creating a Cognigy.AI Handover Flow" 
 slug: "creating-a-cognigy-handover-flow" 
 hidden: false 
---
# Creating a Cognigy.AI Handover Flow

With the Endpoint and the Inbox configured, the last step is to add a new Flow with a Handover Node, as seen in the following screenshot.

<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA-performing-handover.png" width="100%" alt="Cognigy.AI Handover Flow Screen">
  <figcaption>Cognigy.AI Handover Flow Screen</figcaption>
</figure>

Here you need to set the **Chatwoot Inbox ID** field with the _Inbox ID_ previously noted. 

Now it is time to test that everything is working. 

Save the Node configuration, go back to the Endpoint Editor, click on **Open Webchat**, enter some text, and send to start the conversation. 

Next let's check the Live Agent conversations. 

<figure>
    <img class="image-center" src="{{config.site_url}}live-agent/getting-started/images/LA-cognigy-handover-webchat.png" width="100%" alt="Cognigy.AI Webchat">
    <figcaption>Cognigy.AI Webchat</figcaption>
</figure>

The Live Agent Inbox should contain the Cognigy.AI messages, plus what the customer has sent. Send a message from Live Agent. This message should appear on the Cognigy.AI Webchat window.

<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA-conversation-screen.png" width="100%" alt="Live Agent Conversation Screen">
    <figcaption>Live Agent Conversation Screen</figcaption>
</figure>

You can learn more in the rest of the Live Agent sections. Here are some recommendations:

<ul>
    <li>Grouping your Agents in <a href="/live-agent/teams">Teams</a></li>
    <li>Organizing work by adding <a href="/live-agent/labels">Labels</a></li>
    <li>Customizing Live Agent by changing the <a href="/live-agent/settings">Settings</a></li>
</ul>