---
title: "Endpoints" 
slug: "endpoints" 
hidden: false 
---
# Endpoints

_Endpoints_ are utilized to connect external channels, such as Facebook Messenger, Slack, Alexa, and many others, to specific [Flows](../build/flows.md). They convert channel-specific input and output, including images, galleries, and voice, to the standardized Input object. This approach enables the development of a Cognigy Flow only once, following which it can be deployed to various channels by configuring Endpoints.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/endpoints-screen.png" width="100%" />
</figure>

Find more details about types of endpoints and links to our [Help Center](https://support.cognigy.com/hc/en-us?_ga=2.36371232.1055740288.1600087042-336273911.1592472592) in the [Endpoints]({{config.site_url}}ai/endpoints/overview/) documentation.

## Standard Endpoints

The platform includes many pre-built Endpoints that can be configured in a couple of steps. 

| Endpoint                                                                                   | Description                                                                                                                                                                                                                |
|--------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Webchat](../../endpoints/webchat/webchat.md)                                              | The Webchat is an open-source web-based chat widget that can be embedded on any website.                                                                                                                                   |
| [Alexa](../../endpoints/amazon-alexa.md)                                                   | Alexa is Amazon's Virtual Assistant voice AI device. The devices come in different versions, like the Echo, Echo Dot and Echo Show.                                                                                        |
| [DialogFlow](../../endpoints/dialogflow.md)                                                | DialogFlow is Google's Natural Language Understanding framework. By configuring a DialogFlow Endpoint, you can connect your Flow to all channels that are support by DialogFlow.                                           |
| [Facebook Messenger](../../endpoints/facebook-messenger.md)                                | Messenger is Facebook's messaging app and platform.                                                                                                                                                                        |                                                                      |
| [Voice Gateway](../../endpoints/cognigy-vg.md)                                             | Voice Gateway lets you connect to SIP interfaces, which means that your Virtual Agent can be connected to the phone network.                                                                                               |
| [Intercom](../../endpoints/intercom.md)                                                    | Intercom is a live chat suite.                                                                                                                                                                                            |
| [Line](../../endpoints/line-messenger.md)                                                  | Line is a popular messaging and voice call app.                                                                                                                                                                            |
| [Azure Bot Services](../../endpoints/azure-bot-services.md)                                | The [Azure Bot Services](../../endpoints/azure-bot-services.md) Endpoint allows you to connect your Virtual Agent to all Azure Bot Service channels.                                                                       |
| [Microsoft Teams](../../endpoints/microsoft-teams.md)                                      | Microsoft Teams is a popular communication and collaboration platform.                                                                                                                                                     |
| [REST](../../endpoints/rest.md)                                                            | The REST Endpoint lets you connect to a Cognigy Flow directly through a REST interface.                                                                                                                                    |
| [RingCentral Engage](../../endpoints/ringcentral-engage.md)                                | RingCentral Engage is a customer engagement platform that features built-in support for many channels and live-chat capabilities.                                                                                          |
| [Slack](../../endpoints/slack.md)                                                          | Slack is a popular communication and collaboration platform.                                                                                                                                                               |
| [Sunshine Conversations](../../endpoints/sunshine-conversations.md)                        | Sunshine Conversations is part of Zendesk and helps connect to another set of channels.                                                                                                                                    |
| [Socket](../../endpoints/socketio.md)                                                      | The Socket Endpoint lets you connect to a Flow through a socket interface.                                                                                                                                                 |
| [Twilio](../../endpoints/twilio.md)                                                        | Twilio is a popular cloud communications platform. The Twilio Endpoint lets you connect Flows to Twilio Programmable Voice.                                                                                                |
| [Twilio SMS](../../endpoints/twilio.md#twilio-voice-twilio-sms--whatsapp-twilio-autopilot) | Twilio is a popular cloud communications platform. The Twilio SMS Endpoint lets you connect Flows to Twilio Programmable SMS.                                                                                              |
| [Userlike](../../endpoints/userlike.md)                                                    | Userlike is a popular live-chat platform.                                                                                                                                                                                  |
| [Webhook](../../endpoints/webhook.md)                                                      | The Webhook Endpoint lets you expose Cognigy Flows via Webhook.                                                                                                                                                            |
| [Voice Copilot](../../endpoints/voice-copilot.md)                                          | The Voice Copilot Endpoint is used for integration between call centers and AI Copilot for voice use cases.                                                                                                                |
| [8x8](../../endpoints/8x8.md)                                                              | The 8x8 Endpoint allows connecting virtual agent to the [8x8 platform](https://www.8x8.com/).                                                                                                                              |
| [Genesys](../../endpoints/genesys.md)                                                      | The Genesys Endpoint allows connecting virtual agent to the [Genesys Cloud CX platform](https://apps.mypurecloud.de/) using a [Genesys Bot Connector](https://help.mypurecloud.com/articles/about-genesys-bot-connector/). |

Endpoints that act as channel aggregators enable you to connect to multiple channels via a single connection point. Examples: [Sunshine Conversations](https://smooch.io/channels/), [DialogFlow](https://cloud.google.com/dialogflow/es/docs/integrations), [Azure Bot Service](https://docs.microsoft.com/en-us/azure/bot-service/bot-service-channels-reference?view=azure-bot-service-4.0) and [RingCentral Engage](https://www.ringcentral.com/digital-customer-engagement.html#ring-cc-off).

### Endpoint Configuration

#### Snapshot

Endpoints can be pointed to a specific [Snapshot](snapshots.md).
This allows to easily deploy different versions of your virtual agent.

While an Endpoint is active, you can replace or remove a Snapshot. In this case, consider that there may still be active sessions running on the Endpoint using the old Snapshot.

Keep in mind, if you have a configuration in which sessions never expire, for example, a Webchat Endpoint with [Persistent History](https://github.com/Cognigy/WebchatWidget/blob/master/docs/persistent-history.md). Without modifications, sessions started with enabled persistent history, will not automatically expire.

When an old Snapshot is replaced with a new one or is deleted, the following rules will be applied to the active session:

- If the old Snapshot was replaced and not deleted, the active session will continue with the old Snapshot. The reason is that the system cannot recognize if the new Snapshot contains the same Flows and Nodes where the user might be active in their session.
- If the old Snapshot was deleted, the session will be reset, and the new Snapshot will be used.

##### Override Snapshot Connections

When Agents use a Snapshot a toggle **Override Snapshot Connections** will be displayed in the Endpoint editor. When you enable this option, the Endpoint can override the Connections in a Snapshot with [Connections]({{config.site_url}}ai/resources/build/connections/) in the project. If a Connection is available only in the Snapshot, then it will be used from the Snapshot irrespective of this toggle setting. If needed, this Connection needs to be manually updated.

!!! info "Default setting"
    By default, any Endpoint will keep using the Connections from the Snapshot unless the toggle is turned on.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/override-snapshots-connection_f.png" width="100%" />
</figure>

To override the connection in the designated Agent, begin by either restoring it from a Snapshot or importing Connections from another Agent using a [Package](../../resources/manage/packages.md). Ensure that the Snapshot selected in the Endpoint Editor is created from the same Agent to guarantee a match of Connections.

In this case, if the toggle is **ON**, any change in the Connections of the restored Agent will be considered over the Connections in the selected Snapshot.

!!! note
    You can verify or troubleshoot Connections by their `referenceId`, which needs to match both in the Project and the Snapshot for the override feature to work. To do that, use [Cognigy.AI API](../../developer-guides/using-api.md) with the **Get all Connections** request.

#### Flow

Endpoints need an entry [Flow](../build/flows.md) to start the conversation. You can switch Flows during a conversation. 
To switch to a Flow, click ![clock](../../../assets/icons/jump-to-flow.svg) next to the Flow selection field on the right-hand side.

To display the Flow ID of the currently selected Flow, click **Manual Input** below the Flow drop-down field.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Endpoint_Webchat_jump_to_Flow_button.png" width="100%" />
</figure>

Clicking the **Select from Dropdown** link will take you back to the drop-down selection list of Flows.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Flow_select_from_Dropdown.png" width="100%" />
</figure>

#### Endpoint URL

The Endpoint URL is the interface to the Endpoint. For most channels, you need to copy it in the channel's settings, so that the channel is configured for the Cognigy.AI connection. 

#### General Settings > Enabled

This switch allows you to quickly enable or disable the Endpoint.

#### Natural Language Understanding

This drop-down field allows you to select a different **NLU engine** for the selected Endpoint.
The available NLU engines you can find in [NLU Connectors](../../resources/build/nlu-connectors.md).

#### Data Protection & Analytics

In the **Data Protection & Analytics** section, you can configure the collection of analytics and choose whether or not to gather any data.

##### Chatbase

Cognigy.AI can be connected directly to Google's Chatbase analytics platform. When enabled, an API key needs to be entered. All relevant data that enters the Endpoint, is forwarded to Chatbase.

##### Dashbot

When enabled, **Dashbot** will collect analytics data for the selected Endpoint.

## More Information

- [Endpoints Overview](../../endpoints/overview.md)