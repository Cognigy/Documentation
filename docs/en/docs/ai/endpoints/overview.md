---
title: "Endpoints" 
slug: "endpoints" 
hidden: false 
---
# Overview

*Endpoints* are connectors between Cognigy virtual agents and external systems or platforms, such as Facebook (Meta) Messenger, Slack, Alexa, and more.

Endpoints can include text-based conversations as well as conversations on your contact center phone lines.

Endpoints convert channel-specific input and output, including images,
galleries and voice, to the standardized Cognigy Input object.
This approach enables the development of a [Flow](../resources/build/flows.md) only once,
following which it can be deployed to various channels by configuring Endpoints.

## Endpoint Types

The platform includes many pre-built Endpoints that can be configured in a couple of steps.

### Cognigy Endpoints

The following Endpoints are specific to the Cognigy.AI platform:

| Cognigy Endpoint                                        | Description                                                                                                                    |
|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| [Cognigy Webchat](webchat/webchat.md)                   | Cognigy Webchat is an open-source web-based chat widget that can be embedded on any website.                                   |
| [Cognigy Voice Gateway](cognigy-vg.md)                  | Voice Gateway lets you connect to SIP interfaces, which means that your virtual agent can be connected to the phone network.   |
| [Voice Copilot](voice-copilot.md)                       | The Voice Copilot Endpoint is used for integration between call centers and AI Copilot for voice use cases.                    |

### Generic Endpoints

The following Endpoints are provided for custom integrations:

| Generic Endpoint                                        | Description                                                                                                                    |
|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| [REST](rest.md)                                         | The REST Endpoint lets you connect to a Cognigy Flow directly through a REST interface.                                        |
| [Socket](socketio.md)                                   | The Socket Endpoint lets you connect to a Flow through a socket interface.                                                     |
| [Webhook](webhook.md)                                   | The Webhook Endpoint lets you expose Cognigy Flows via Webhook.                                                                |

### Third-party Endpoints

The following Endpoints provide integrations with third party products:
 
| Third-party Endpoint                                                       | Description                                                                                                                                                                                                                     |
|----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Amazon Alexa](amazon-alexa.md)                                            | Alexa is Amazon's Virtual Assistant voice AI device. The devices come in different versions, like the Echo, Echo Dot and Echo Show.                                                                                             |
| [Amazon Lex (Beta)](amazon-lex.md)                                         | The Amazon Lex Endpoint allows you to connect your Amazon Lex bots with Cognigy.AI. This is achieved by using a [Lambda function](https://support.cognigy.com/hc/en-us/articles/6229644597020) with your Lex bots.              |
| [Avaya CPaaS](avaya-cpaas.md)                                              | Using the Avaya CPaaS Endpoint you're able to connect your Cognigy.AI resources to your Avaya CPaaS phone number.                                                                                                               |
| [Azure Bot Services](azure-bot-services.md)                                | The Azure Bot Services Endpoint allows you to connect your virtual agent to all Azure Bot Service channels.                                                                                                                     |
| [Dialogflow](dialogflow.md)                                                | DialogFlow is Google's Natural Language Understanding framework. By configuring a DialogFlow Endpoint, you can connect your Flow to all channels that are support by DialogFlow.                                                |
| [Facebook (Meta) Messenger](facebook-messenger.md)                         | Messenger is Facebook's messaging app and platform.                                                                                                                                                                             |
| [Intercom](intercom.md)                                                    | Intercom is a live chat suite.                                                                                                                                                                                                  |
| [LINE Messenger](line-messenger.md)                                        | Line is a popular messaging and voice call app.                                                                                                                                                                                 |
| [Microsoft Teams](microsoft-teams.md)                                      | Microsoft Teams is a popular communication and collaboration platform.                                                                                                                                                          |
| [RingCentral Engage](ringcentral-engage.md)                                | RingCentral Engage is a customer engagement platform that features built-in support for many channels and live-chat capabilities.                                                                                               |
| [Slack](slack.md)                                                          | Slack is a popular communication and collaboration platform.                                                                                                                                                                    |
| [Sunshine Conversations](sunshine-conversations.md)                        | Sunshine Conversations is part of Zendesk and helps connect to another set of channels.                                                                                                                                         |
| [Twilio](twilio.md)                                                        | Twilio is a popular cloud communications platform. The Twilio Endpoint lets you connect Flows to Twilio Programmable Voice.                                                                                                     |
| [Twilio SMS](twilio.md#twilio-voice-twilio-sms--whatsapp-twilio-autopilot) | Twilio is a popular cloud communications platform. The Twilio SMS Endpoint lets you connect Flows to Twilio Programmable SMS.                                                                                                   |
| [Userlike](userlike.md)                                                    | Userlike is a popular live-chat platform.                                                                                                                                                                                       |
| [WhatsApp](whatsapp.md)                                                    | Using the WhatsApp Endpoint integration enables you to connect your Cognigy resources to the WhatsApp Cloud API access via Facebook (Meta) Developer Dashboard.                                                                 |
| [Workplace by Facebook (Meta)](workplace-by-fb.md)                         | Using the Workplace by Facebook Endpoint integration enables you to connect your Cognigy resources to the **Workplace** channel.                                                                                                |
| [8x8](8x8.md)                                                              | The 8x8 Endpoint allows connecting virtual agent to the [8x8 platform](https://www.8x8.com/).                                                                                                                                   |
| [Genesys](genesys.md)                                                      | The Genesys Endpoint allows connecting virtual agent to the [Genesys Cloud CX platform](https://apps.mypurecloud.de/) <br> using a [Genesys Bot Connector](https://help.mypurecloud.com/articles/about-genesys-bot-connector/). |

## Endpoint Settings

### General Endpoint Settings

Every Endpoint needs to be configured in the following configuration fields:

- [Snapshot](#snapshot)
- [Locale](#locale)
- [Endpoint URL](#endpoint-url)
- [NLU Connector](#natural-language-understanding)
- [Enable Endpoint](#enable-endpoint)

### Snapshot

- Endpoints can be pointed to a specific [Snapshot](../resources/deploy/snapshots.md). This enables you to easily deploy different versions of your virtual agent.
- While an Endpoint is active, you can replace or remove a Snapshot. In this case, consider that there may still be active sessions running on the Endpoint using the old Snapshot.
- Keep in mind, if you have a configuration in which sessions never expire, for example, a Webchat Endpoint with [Persistent History](https://github.com/Cognigy/WebchatWidget/blob/master/docs/persistent-history.md). Without modifications, sessions started with enabled persistent history will not automatically expire.

When a Snapshot is replaced with a new one or is deleted, the following rules will be applied to the active session:

- If a Snapshot was replaced and not deleted, the active session will continue with the old Snapshot. The reason is that the system cannot recognize if the new Snapshot contains the same Flows and Nodes where the user might be active in their session.
- If the old Snapshot was deleted, the session will be reset, and the new Snapshot will be used.

#### Override Snapshot Connections

When Agents use a Snapshot, a toggle **Override Snapshot Connections** will be displayed in the Endpoint editor. When you enable this option, the Endpoint can override the Connections in a Snapshot with [Connections](../resources/build/connections.md) in the project. If a Connection is available only in the Snapshot, then it will be used from the Snapshot irrespective of this toggle setting. If needed, this Connection needs to be manually updated.

!!! info "Default setting"
By default, any Endpoint will keep using the Connections from the Snapshot unless the toggle is turned on.

To override the connection in the designated Agent, begin by either restoring it from a Snapshot or importing Connections from another Agent using a [Package](../resources/manage/packages.md). Ensure that the Snapshot selected in the Endpoint Editor is created from the same Agent to guarantee a match of Connections.

In this case, if the toggle is **ON**, any change in the Connections of the restored Agent will be considered over the Connections in the selected Snapshot.

!!! note
You can verify or troubleshoot Connections by their `referenceId`, which needs to match both in the Project and the Snapshot for the override feature to work. To do that, use [Cognigy.AI API](../../ai/developer-guides/using-api.md) with the **Get all Connections** request.

### Flow

Endpoints need an entry [Flow](../resources/build/flows.md) to start the conversation. You can switch Flows during a conversation.

To switch to a Flow during a conversation, do the following:

- Go to **Deploy > Endpoints** and select the Endpoint you want to use, if required.
- Open the drop-down menu of the **Flow** selection field.
- Click ![jump to Flow](../../assets/icons/jump-to-flow.svg) next to the Flow selection field on the right-hand side. The selected Flow will be displayed and active.

To display the Flow ID of the currently selected Flow, click **Manual Input** below the Flow drop-down field.

To toggle back to the drop-down selection list of Flows, click the **Select from Dropdown** link.

## Locale

The [Localization](../resources/manage/localization.md) feature in Cogngigy.AI provides tools for enabling multilingual Agents. Here, you can add a Locale that will be applied across an Agent and allow language-specific output messages to be configured within Flows. The system works with fallback layers, which means that a Locale that has not any content configured will fall back to another Locale that has.

The **Locale** configuration field of the Endpoint Editor provides all configured and defined locales in a drop-down menu.

To select a Locale, do the following:

- Go to **Deploy > Endpoints** and select the Endpoint you want to use.
- Click ![expand](../../assets/icons/expand.svg) next to the Locale selection field on the right-hand side to open the drop-down menu.
- Select a locale.
- Click **Save** to confirm your selection. The endpoint is configured to that Locale now if the selected language has been edited /defined.

As a result of the selected locale your Endpoint, for example, **Webchat** will use the selected language in a conversation based on your Flow.

You can test the functionality of your **Webchat** Endpoint locale setting as follows:

1. Click **Open Demo Webchat** at the top right of the Endpoint Editor. The Cognigy Webchat window is displayed.
2. Enter a text message in the text field at the bottom and click  to send the message as a user.
3. The bot replies as configured in the Flow, but using the language of your previous selected Locale.
4. Check if it works as expected. When no translated content of the selected Locale is defined, a fallback language will be used.

### Endpoint URL

The **Endpoint URL** is the interface to the Endpoint. For most channels, you need to copy it in the channel's settings, so that the channel is configured for the Cognigy.AI connection.

### Enable Endpoint

This switch allows you to quickly enable or disable the Endpoint.

### Natural Language Understanding

This drop-down field allows you to select a different **NLU engine** for the selected Endpoint.
The available NLU engines you can find in [NLU Connectors](../resources/build/nlu-connectors.md).

The [NLU Connectors](../resources/build/nlu-connectors.md) that are configured to the agent are available to select from this drop-down menu. Alternatively, the [No NLU](../nlu/external-nlu/no-nlu.md) option can be selected to completely disable the intent and slot mapping for an endpoint.

### Data Protection & Analytics

In the [Data Protection & Analytics](data-protection-and-analytics.md) section, you can configure the collection of analytics and choose whether or not to gather any data.

#### Chatbase

Cognigy.AI can be connected directly to Google's **Chatbase** [^1] analytics platform. When enabled, your Chatbase bot's API key needs to be entered. All relevant data that enters the Endpoint, is forwarded to Chatbase.

!!! warning "Support of Chatbase tool is ended"
Chatbase is an outdated analytics tool and is not supported any longer.

[^1]: Chatbase is an outdated analytics tool and can not be used any longer.

#### Dashbot

When enabled, **Dashbot** will collect analytics data for the selected Endpoint.

## Specific Endpoint Settings

You can configure Endpoints in the following additional settings fields:

- [Data Protection & Analytics](../../ai/endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../../ai/endpoints/transformers/transformers.md) 
- [Session Management](../../ai/endpoints/session-management.md)
- [Real Time Translation Settings](../../ai/endpoints/real-time-translation-settings.md)  
- [Handover Settings](../../ai/endpoints/handover-settings.md)
- [AI Copilot](../../ai-copilot/overview.md).
- [File Storage](file-storage.md)

## More Information

- [Help Center](https://support.cognigy.com/hc/en-us?_ga=2.36371232.1055740288.1600087042-336273911.1592472592)
- [AI Copilot](../../ai-copilot/overview.md)
- [Localization](../resources/manage/localization.md)