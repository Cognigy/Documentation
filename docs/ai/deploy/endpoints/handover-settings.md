---
title: "Handover Settings" 
slug: "handover-settings" 
hidden: false 
---

# Handover Settings

Cognigy.AI's integration with various contact centers enables fast escalation to human agents from any point in chat and call interactions with an AI Agent, ensuring a smooth customer experience.

## Endpoints Compatible with Handover Providers

The Endpoints that support handover are listed below:

- [Facebook (Meta) Messenger](../endpoint-reference/facebook-messenger.md)
- [LINE Messenger](../endpoint-reference/line-messenger.md)
- [Azure Bot Services](../endpoint-reference/azure-bot-services.md)
- [RingCentral Engage](../endpoint-reference/ringcentral-engage.md)
- [Slack](../endpoint-reference/slack.md)
- [Socket](../endpoint-reference/socketio.md)
- [Sunshine Conversations](../endpoint-reference/sunshine-conversations.md)
- [WhatsApp](../endpoint-reference/whatsapp.md)
- [Webchat](../../../webchat/overview.md)
- [Webhook](../endpoint-reference/webhook.md)

## Handover Providers

{! _includes/release-notes/handover-providers-deprecation.md !}

Endpoints that support handover have a **Handover Settings** section in their Endpoint settings.
In this section,
you can select and configure the handover provider to which the user will be forwarded when a [Handover to Agent Node](../../build/node-reference/service/handover-to-agent.md) is triggered.
Cognigy.AI offers support for the following handover providers:

- [Cognigy Live Agent](../../escalate/handover-reference/live-agent.md)
- [Chatwoot](../../escalate/handover-reference/chatwoot.md)
- [RingCentral Engage](../../escalate/handover-reference/ring-central-engage.md)
- [Salesforce](../../escalate/handover-reference/salesforce.md)
- [Genesys Cloud Guest Chat](../../escalate/handover-reference/genesys-cloud-guest-chat.md)
- [Genesys Cloud Open Messaging](../../escalate/handover-reference/genesys-cloud-open-messaging.md)
- [8x8](../../escalate/handover-reference/8x8.md)