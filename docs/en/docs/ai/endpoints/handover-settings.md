---
title: "Handover Settings" 
slug: "handover-settings" 
hidden: false 
---

# Handover Settings

Cognigy.AI supports integrating with various `Live Agent Tools`,
so that a user can be transferred to an agent at any point during the conversation
by using a [Handover to Agent Node](../nodes/service/handover-to-agent.md) in the Flow.

## Channel Support

Supported Endpoints have a configuration tab called `Handover Settings`. In there, the `Handover Platform` that the user should be forwarded to when a Handover Node is triggered is selected and configured. Cognigy.AI currently has native support with the following Handover Platforms:

- [Cognigy Live Agent](../handover-providers/live-agent-handover.md)
- [Chatwoot](../handover-providers/chatwoot-handover.md)
- [RingCentral Engage](../handover-providers/ringcentralengage-handover.md)
- [Salesforce](../handover-providers/salesforce-handover.md)
- [Genesys Cloud Guest Chat](../handover-providers/genesys-cloud-guest-chat.md)
- [Genesys Cloud Open Messaging](../handover-providers/genesys-cloud-open-messaging.md)
- [8x8](../handover-providers/8x8.md)

The Endpoints that support handover are listed below:

- [Facebook (Meta) Messenger](facebook-messenger.md)   
- [LINE Messenger](line-messenger.md)                  
- [Azure Bot Services](azure-bot-services.md)          
- [RingCentral Engage](ringcentral-engage.md)          
- [Slack](slack.md)                                   
- [Socket](socketio.md)                               
- [Sunshine Conversations](sunshine-conversations.md) 
- [WhatsApp](whatsapp.md)                             
- [Webchat](../../webchat/overview.md)                                                 
- [Webhook](webhook.md)                               