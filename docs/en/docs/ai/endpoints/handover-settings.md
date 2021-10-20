# Handover Settings

Cognigy.AI supports integrating with various `Live Agent Tools`, so that a user can be transferred to an agent at any point during the conversation by using a [Handover Node]({{config.site_url}}ai/tools/agent-handover/) in the Flow.

## Channel Support

<div class="divider"></div>

Supported Endpoints have a configuration tab called `Handover Settings`. In there, the `Handover Platform` that the user should be forwarded to when a Handover Node is triggered is selected and configured. Cognigy.AI currently has native support with the following Handover Platforms:

- Cognigy.AI Livechat
- [RingCentral Engage](https://www.ringcentral.com/digital-customer-engagement.html)
- [Chatwoot integration]({{config.site_url}}ai/endpoints/chatwoot-integration/), new in Cognigy.AI v4.3.0

The Endpoints that support handover are listed below:

| Method      |
| ----------- | 
| [Azure Bot Services]({{config.site_url}}ai/endpoints/azure-bot-services/) | 
| [RingCentral Engage]({{config.site_url}}ai/endpoints/ringcentral-engage/) | 
| [Slack]({{config.site_url}}ai/endpoints/slack/) |
| [Socket]({{config.site_url}}ai/endpoints/socketio/)|
| [Sunshine Conversations]({{config.site_url}}ai/endpoints/sunshine-conversations/) |
| [Webchat]({{config.site_url}}ai/endpoints/webchat/webchat/) |
| [Webhook]({{config.site_url}}ai/endpoints/webhook/)|

???+ info "Helpcenter Content"
    You can find detailed information about the Cognigy - RingCentral Engage Handover setup [here](https://support.cognigy.com/hc/en-us/articles/360016275260).