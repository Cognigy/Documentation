---
 title: "Configuring a Cognigy.AI Endpoint for Handover" 
 slug: "configuring-a-cognigy-endpoint-for-handover" 
 hidden: false 
---
# Configuring a Cognigy.AI Endpoint for Handover

First, a **Webchat** endpoint needs to be created in Cognigy.AI. Then in the **Endpoint Editor**, go to the **Handover Settings**. The **Handover platform** must be _"Chatwoot"_, and for the base URL, use the Live Agent installation URL plus `/api/v1`. Leave _Account ID_ and _API Key_ fields empty as they will be filled in the next chapter.

???+ info "Cognigy.AI Endpoints"
    Head over to [**Endpoints**]({{config.site_url}}ai/endpoints/overview/) for any doubt regarding Cognigy.AI endpoints.

<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA-endpoint-editor-webchat.png" width="100%" alt="Cognigy.AI Endpoint Flow Screen">
  <figcaption>Cognigy.AI Endpoint Flow Screen</figcaption>
</figure>

<table>
<tr>
<th>Field</th>
<th>Example Value</th>
<th>Description</th>
</tr>
<tr>
<td>Live Agent URL</td>
<td>https://cognigy-live-agent.com/api/v1</td>
<td>https://cognigy-live-agent.com is the Live Agent URL</td>
</tr>
</table>

After creating the endpoint, [Add an Inbox for Handling The Handover]({{config.site_url}}live-agent/getting-started/add-an-inbox-for-handling-the-handover/)
