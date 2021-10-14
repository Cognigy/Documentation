# Creating a Cognigy.AI Handover Flow

With the endpoint and the inbox configured, the last step is to add a new Flow node of type Handover that need to be added to the desired flow like in the screenshot.

<figure>
    <img src="{{config.site_url}}assets/img/LA-performing-handover.png" width="100%" alt="Cognigy.AI Handover Flow Screen">
  <figcaption>Cognigy.AI Handover Flow Screen</figcaption>
</figure>

Remember to set the **Chatwoot Inbox ID** field with the _Inbox ID_ previously noted. Now it is time for testing everything is working. Save the node configuration, go back to the Endpoint editor, click on **Open Webchat**, type some greeting, and check the Live Agent conversations. 

<figure>
    <img class="image-center" src="{{config.site_url}}assets/img/LA-cognigy-handover-webchat.png" width="100%" alt="Cognigy.AI Webchat">
    <figcaption>Cognigy.AI Webchat</figcaption>
</figure>

It should contain the Cognigy.AI messages plus the customer ones. Send a message from the Live Agent. It should appear back on the Cognigy.AI Webchat.

<figure>
    <img src="{{config.site_url}}assets/img/LA-conversation-screen.png" width="100%" alt="Live Agent Conversation Screen">
    <figcaption>Live Agent Conversation Screen</figcaption>
</figure>

You can learn more in the rest of the Live Agent sections. Here are some recommendations:

<ul>
    <li>Grouping your agents in <a href="/live-agent/teams">Teams</a></li>
    <li>Adding labels for organising work <a href="/live-agent/labels">Labels</a></li>
    <li>Customizing Live Agent by changing the <a href="/live-agent/settings">Settings</a></li>
</ul>