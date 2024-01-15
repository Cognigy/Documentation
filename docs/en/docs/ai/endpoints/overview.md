---
title: "Overview" 
slug: "overview" 
hidden: false 
---
# Overview

**Endpoints** are the connector between your user interface and the Cognigy Agent.
This connection can range from text-based conversation to a conversation on your contact center phone-lines.

Endpoints are utilized to connect external channels, such as Facebook (Meta) Messenger, Slack, Alexa, and many others, to specific [Flows](../build/flows.md). They convert channel-specific input and output, including images, galleries, and voice, to the standardized Input object. This approach enables the development of a Cognigy Flow only once, following which it can be deployed to various channels by configuring Endpoints.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/endpoints-screen.png" width="100%" />
</figure>

Find more details about types of endpoints and links in Cognigy's [Help Center](https://support.cognigy.com/hc/en-us?_ga=2.36371232.1055740288.1600087042-336273911.1592472592).

## Features

Every Endpoint has the following features:

- Endpoints point to a single [Locale](#locale) of a single Flow of a single Snapshot
- Endpoints can be [disabled](#enable-endpoint).
- [Data Protection & Analytics](data-protection-and-analytics.md) of an Endpoint can be customized.
- Endpoints can have its own [Transformer Function](transformers/transformers.md).

Selected Endpoints also have the option to customize the NLU that provides the Intent and Slot mapping for the agent.

Additionally, there are Endpoint-specific features and configuration options available.


## Endpoint Types

The platform includes many pre-built Endpoints that can be configured in a couple of steps.

### Cognigy Endpoints

The following Endpoints are specific to the Cognigy.AI platform:

| Cognigy Endpoint                                        | Description                                                                                                                    |
|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| [Cognigy Webchat](webchat/webchat.md)                   | Cognigy Webchat is an open-source web-based chat widget that can be embedded on any website.                                   |
| [Cognigy Voice Gateway](cognigy-vg.md)                  | Voice Gateway lets you connect to SIP interfaces, which means that your Virtual Agent can be connected to the phone network.   |
| [Voice Copilot](voice-copilot.md)                       | The Voice Copilot Endpoint is used for integration between call centers and AI Copilot for voice use cases.                    |

### Generic Endpoints

The following Endpoints are provided for custom integrations:

| Generic Endpoint                                        | Description                                                                                                                    |
|---------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| [REST](rest.md)                                         | The REST Endpoint lets you connect to a Cognigy Flow directly through a REST interface.                                        |
| [Socket](socketio.md)                                   | The Socket Endpoint lets you connect to a Flow through a socket interface.                                                     |
| [Webhook](webhook.md)                                   | The Webhook Endpoint lets you expose Cognigy Flows via Webhook.                                                                |

### Third Party Endpoints

The following Endpoints provide integrations with third party products:
 
| Third Party Endpoint                                                       | Description                                                                                                                                                                               |
|----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Amazon Alexa](amazon-alexa.md)                                            | Alexa is Amazon's Virtual Assistant voice AI device. The devices come in different versions, like the Echo, Echo Dot and Echo Show.                                                       |
| [Amazon Lex (Beta)](amazon-lex.md)                                         | The Amazon Lex Endpoint allows you to connect your Amazon Lex bots with Cognigy.AI. This is achieved by using a [Lambda function](https://support.cognigy.com/hc/en-us/articles/6229644597020) with your Lex bots. |
| [Avaya CPaaS](avaya-cpaas.md)                                              | Using the Avaya CPaaS Endpoint you're able to connect your Cognigy.AI resources to your Avaya CPaaS phone number.                                                                         |
| [Azure Bot Services](azure-bot-services.md)                                | The Azure Bot Services Endpoint allows you to connect your Virtual Agent to all Azure Bot Service channels.                                                                               |
| [Dialogflow](dialogflow.md)                                                | DialogFlow is Google's Natural Language Understanding framework. By configuring a DialogFlow Endpoint, you can connect your Flow to all channels that are support by DialogFlow.          |
| [Facebook (Meta) Messenger](facebook-messenger.md)                         | Messenger is Facebook's messaging app and platform.                                                                                                                                       |
| [Intercom](intercom.md)                                                    | Intercom is a live chat suite.                                                                                                                                                            |
| [LINE Messenger](line-messenger.md)                                        | Line is a popular messaging and voice call app.                                                                                                                                           |
| [Microsoft Teams](microsoft-teams.md)                                      | Microsoft Teams is a popular communication and collaboration platform.                                                                                                                    |
| [RingCentral Engage](ringcentral-engage.md)                                | RingCentral Engage is a customer engagement platform that features built-in support for many channels and live-chat capabilities.                                                         |
| [Slack](slack.md)                                                          | Slack is a popular communication and collaboration platform.                                                                                                                              |
| [Sunshine Conversations](sunshine-conversations.md)                        | Sunshine Conversations is part of Zendesk and helps connect to another set of channels.                                                                                                   |
| [Twilio](twilio.md)                                                        | Twilio is a popular cloud communications platform. The Twilio Endpoint lets you connect Flows to Twilio Programmable Voice.                                                               |
| [Twilio SMS](twilio.md#twilio-voice-twilio-sms--whatsapp-twilio-autopilot) | Twilio is a popular cloud communications platform. The Twilio SMS Endpoint lets you connect Flows to Twilio Programmable SMS.                                                             |
| [Userlike](userlike.md)                                                    | Userlike is a popular live-chat platform.                                                                                                                                                 |
| [WhatsApp](whatsapp.md)                                                    | Using the WhatsApp Endpoint integration enables you to connect your Cognigy resources to the WhatsApp Cloud API access via Facebook (Meta) Developer Dashboard.                           |
| [Workplace by Facebook (Meta)](workplace-by-fb.md)                         | Using the Workplace by Facebook Endpoint integration enables you to connect your Cognigy resources to the **Workplace** channel.                                                          |
| [8x8](8x8.md)                                                              | The 8x8 Endpoint allows connecting virtual agent to the [8x8 platform](https://www.8x8.com/).                                                                                             |
| [Genesys](genesys.md)                                                      | The Genesys Endpoint allows connecting virtual agent to the [Genesys Cloud CX platform](https://apps.mypurecloud.de/) <br> using a [Genesys Bot Connector](https://help.mypurecloud.com/articles/about-genesys-bot-connector/).|

Endpoints that act as channel aggregators enable you to connect to multiple channels via a single connection point. Examples: [Sunshine Conversations](https://smooch.io/channels/), [DialogFlow](https://cloud.google.com/dialogflow/es/docs/integrations), [Azure Bot Service](https://docs.microsoft.com/en-us/azure/bot-service/bot-service-channels-reference?view=azure-bot-service-4.0) and [RingCentral Engage](https://www.ringcentral.com/digital-customer-engagement.html#ring-cc-off).


## General Endpoint Settings

Every Endpoint needs to be configured in the following configuration fields:

- [Snapshot](#snapshot) - Either use a Snapshot or the working state of the Agent.
- [Flow](#flow)
     - Select from Dropdown
     - Manual input
- [Locale](#locale)
- Configuration Information
    - [Endpoint URL](#endpoint-url)
- [Natural Language Understanding](#natural-language-understanding) - NLU Connector
- [Enable Endpoint](#enable-endpoint)

## Specific Endpoint Settings

Depending on their functions you can configure Endpoints in the following additional settings fields:

- [Data Protection & Analytics](../../ai/endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../../ai/endpoints/transformers/transformers.md) 
- [Session Management](../../ai/endpoints/session-management.md)
- [Real Time Translation Settings](../../ai/endpoints/real-time-translation-settings.md)  
- [Handover Settings](../../ai/endpoints/handover-settings.md)
- [Copilot](voice-copilot.md) - Voice Copilot manage your config via API call. CopilotConfigs OpenAPI Documentation.
- File Storage - Add credentials for a cloud storage provider with permissions to upload files.

## Provider-specific Settings for Endpoints:

The following settings fields are provider-specific:

- [8x8](8x8.md) Setup
- [Alexa](amazon-alexa.md) Settings
- [Amazon Lex](amazon-lex.md) settings
- [Avaya](avaya-cpaas.md) Settings
- [Gather](avaya-cpaas.md) Settings - specific settings for Avaya Endpoint.
- [Dialogflow](dialogflow.md) Settings
- [Intercom](intercom.md) Settings
- [Microsoft Teams](microsoft-teams.md) Settings
- [RingCentral Engage](ringcentral-engage.md) Setup
- [Slack](slack.md) Setup
- [Sunshine Conversations](sunshine-conversations.md) Setup
- [Twilio](twilio.md) Settings
- [Twilio SMS](twilio.md) Settings 
- [Userlike](userlike.md) Settings
- [Azure Bot Services](azure-bot-services.md) Settings

- specific settings for [Facebook (Meta) Messenger](facebook-messenger.md) Endpoint:
     - Facebook Page Setup
     - Facebook Profiles
     - Messenger Settings

- specific settings for [WhatsApp](whatsapp.md) Endpoint:
     - Whatsapp Setup
     - WhatsApp Settings

- specific settings for [Webhook](webhook.md) Endpoint:
     - Basic Auth Credentials
     - Azure Bot Services Settings

- specific settings for [Cognigy Voice Gateway](cognigy-vg.md) Endpoint:
     - Generic Settings
     - Call Events
     - Call Failover

- specific settings for [Cognigy Webchat](webchat/webchat.md) Endpoint:
     - Webchat Layout 
     - Webchat Behaviour
     - Teaser Message Settings
     - Unread Message Settings 
     - Conversation Rating Settings
     - Demo Webchat Settings
     - Business Hours
     - Maintenance
     - Webchat Custom Settings

## General Endpoint Configuration

### Snapshot

- Endpoints can be pointed to a specific [Snapshot](snapshots.md). This enables you to easily deploy different versions of your virtual agent.
- While an Endpoint is active, you can replace or remove a Snapshot. In this case, consider that there may still be active sessions running on the Endpoint using the old Snapshot.
- Keep in mind, if you have a configuration in which sessions never expire, for example, a Webchat Endpoint with [Persistent History](https://github.com/Cognigy/WebchatWidget/blob/master/docs/persistent-history.md). Without modifications, sessions started with enabled persistent history, will not automatically expire.

When a Snapshot is replaced with a new one or is deleted, the following rules will be applied to the active session:

- If a Snapshot was replaced and not deleted, the active session will continue with the old Snapshot. The reason is that the system cannot recognize if the new Snapshot contains the same Flows and Nodes where the user might be active in their session.
- If the old Snapshot was deleted, the session will be reset, and the new Snapshot will be used.

#### Override Snapshot Connections

When Agents use a Snapshot a toggle **Override Snapshot Connections** will be displayed in the Endpoint editor. When you enable this option, the Endpoint can override the Connections in a Snapshot with [Connections](../resources/build/connections.md) in the project. If a Connection is available only in the Snapshot, then it will be used from the Snapshot irrespective of this toggle setting. If needed, this Connection needs to be manually updated.

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
- Click ![jump to Flow](../../../assets/icons/jump-to-flow.svg) next to the Flow selection field on the right-hand side. The selected Flow will be displayed and active.

To display the Flow ID of the currently selected Flow, click **Manual Input** below the Flow drop-down field.

To toggle back to the drop-down selection list of Flows, click the **Select from Dropdown** link.

## Locale

Localization
A powerful concept, featured in Cognigy.AI that allows for customizability combined with content re-use. The Localization view allows for the configuration of any number of localizations. The system works with fallback layers, meaning that a Locale that has not any content configured, will fallback to another Locale that has.

The Localization feature provides tools for enabling multilingual Agents. Here you can add a Locale that will be applied across an Agent and allow for language specific output messages to be configured within Flows.

For more information, read the [Localization](../resources/manage/localization.md) documentation.

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

Cognigy.AI can be connected directly to Google's Chatbase analytics platform. When enabled, your Chatbase bot's API key needs to be entered. All relevant data that enters the Endpoint, is forwarded to Chatbase.

#### Dashbot

When enabled, **Dashbot** will collect analytics data for the selected Endpoint.


## More Information

- [Help Center](https://support.cognigy.com/hc/en-us?_ga=2.36371232.1055740288.1600087042-336273911.1592472592)
- [AI Copilot](../../ai-copilot/overview.md)