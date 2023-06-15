---
 title: "Endpoints" 
 slug: "endpoints" 
 hidden: false 
---
# Endpoints

**Endpoints** are used to connect external channels, such as Facebook Messenger, Slack, Alexa and many others, to specific Cognigy [**Flows**]({{config.site_url}}ai/resources/build/flows/). They convert channel-specific input and output (images, galleries, voice) to the standardized [**Input**]({{config.site_url}}ai/tools/interaction-panel/input/)  object. This way, a Cognigy Flow needs to be developed only once, after which it can be deployed to many channels by configuring Endpoints.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/6d72d72-endpoints-screen.jpg" width="100%" />
</figure>

Find more details about each type of endpoint and links to our [Help Center](https://support.cognigy.com/hc/en-us?_ga=2.36371232.1055740288.1600087042-336273911.1592472592) in the [Endpoints]({{config.site_url}}ai/endpoints/overview/) section of the documentation.

## Standard Endpoints
<div class="divider"></div>

The platform includes many pre-built Endpoints that can be configured in a couple of steps. 

| Endpoint                                                                                   | Description                                                                                                                                                                      |
|--------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Webchat](../../endpoints/webchat/webchat.md)                                              | The Webchat is an open-source web-based chat widget that can be embedded on any website.                                                                                         |
| [Alexa](../../endpoints/amazon-alexa.md)                                                   | Alexa is Amazon's Virtual Assistant voice AI device. The devices come in different versions, like the Echo, Echo Dot and Echo Show.                                              |
| [DialogFlow](../../endpoints/dialogflow.md)                                                | DialogFlow is Google's Natural Language Understanding framework. By configuring a DialogFlow Endpoint, you can connect your Flow to all channels that are support by DialogFlow. |
| [Facebook Messenger](../../endpoints/facebook-messenger.md)                                | Messenger is Facebook's messaging app and platform.                                                                                                                              |
| [Google Actions](../../endpoints/google-actions.md)                                        | Google Actions are part of Google Assistant and let you connect your Flows to any Google Assistant device.                                                                       |
| [Voice Gateway](../../endpoints/cognigy-vg.md)                                             | Voice Gateway lets you connect to SIP interfaces, which means that your Virtual Agent can be connected to the phone network.                                                     |
| [Intercom](../../endpoints/intercom.md)                                                    | Intercome is a live chat suite.                                                                                                                                                  |
| [Line](../../endpoints/line-messenger.md)                                                  | Line is a popular messaging and voice call app.                                                                                                                                  |
| [Azure Bot Services](../../endpoints/azure-bot-services.md)                                | The [Azure Bot Services]({{config.site_url}}ai/endpoints/azure-bot-services/) Endpoint allows you to connect your Virtual Agent to all Azure Bot Service channels.               |
| [Microsoft Teams](../../endpoints/microsoft-teams.md)                                      | Microsoft Teams is a popular communication and collaboration platform.                                                                                                           |
| [REST](../../endpoints/rest.md)                                                            | The REST Endpoint lets you connect to a Cognigy Flow directly through a REST interface.                                                                                          |
| [RingCentral Engage](../../endpoints/ringcentral-engage.md)                                | RingCentral Engage is a customer engagement platform that features built-in support for many channels and live-chat capabilities.                                                |
| [Slack](../../endpoints/slack.md)                                                          | Slack is a popular communication and collaboration platform.                                                                                                                     |
| [Sunshine Conversations](../../endpoints/sunshine-conversations.md)                        | Sunshine Conversations is part of Zendesk and helps connect to another set of channels.                                                                                          |
| [Socket](../../endpoints/socketio.md)                                                      | The Socket Endpoint lets you connect to a Flow through a socket interface.                                                                                                       |
| [Twilio](../../endpoints/twilio.md)                                                        | Twilio is a popular cloud communications platform. The Twilio Endpoint lets you connect Flows to Twilio Programmable Voice.                                                      |
| [Twilio Autopilot](../../endpoints/twilio.md#twilio-autopilot-endpoint-settings)           | Twilio is a popular cloud communications platform. The Twilio Autopilot Endpoint makes use of Twilio NLU framework.                                                              |
| [Twilio SMS](../../endpoints/twilio.md#twilio-voice-twilio-sms--whatsapp-twilio-autopilot) | Twilio is a popular cloud communications platform. The Twilio SMS Endpoint lets you connect Flows to Twilio Programmable SMS.                                                    |
| [Userlike](../../endpoints/userlike.md)                                                    | Userlike is a popular live-chat platform                                                                                                                                         |
| [Webhook](../../endpoints/webhook.md)                                                      | The Webhook Endpoint lets you expose Cognigy Flows via Webhook.                                                                                                                  |

!!! note
    Endpoints that act as **channel aggregators** allow you to connect to multiple channels via a single connection point. Examples: [Sunshine Conversations](https://smooch.io/channels/), [DialogFlow](https://cloud.google.com/dialogflow/es/docs/integrations), [Azure Bot Service](https://docs.microsoft.com/en-us/azure/bot-service/bot-service-channels-reference?view=azure-bot-service-4.0) and [RingCentral Engage](https://www.ringcentral.com/digital-customer-engagement.html#ring-cc-off).


### Endpoint Configuration

<div class="divider"></div>

#### Snapshot

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/3c33561-endpoints-snapshot.jpg" width="100%" />
</figure>

Endpoints can be pointed to a specific [**Snapshot**]({{config.site_url}}ai/resources/deploy/snapshots/). This makes it possible to easily deploy different versions of your Virtual Agent.

While an Endpoint is active, you can replace or remove a Snapshot. In this case, you need to take into account that there may still be active sessions running on the Endpoint using the old Snapshot.

This is especially important to know when you have a configuration in which sessions never expire, for example, when using a Webchat Endpoint and [Persistent History](https://github.com/Cognigy/WebchatWidget/blob/master/docs/persistent-history.md). Without modifications, sessions started with Persistent History enabled will not automatically expire.

When an old Snapshot is replaced with a new one or is deleted, the following rules will be applied to the active session:

- If the old Snapshot was replaced and not deleted, the active session will continue with the old Snapshot. The reason is that the system cannot recognize if the new Snapshot contains the same Flows and Nodes where the user might be active in their session.
- If the old Snapshot was deleted, the session will be reset, and the new Snapshot will be used.

##### Override Snapshot Connections

[![Version badge](https://img.shields.io/badge/Added in-v4.21.0-blue.svg)]({{config.site_url}})

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/override-snapshots-connection.png" width="100%" />
</figure>

Agents with Snapshots have the toggle "Override Snapshot Connections" in the Endpoint editor. Turning this toggle ON will allow this Endpoint to override the Connections in a Snapshot with the [**Connections**]({{config.site_url}}ai/resources/build/connections/) in the Project. If a Connection is available only in the Snapshot, then it will be used from the Snapshot irrespective of this toggle setting. If needed, this Connection needs to be manually updated.

!!! info "Default setting"
    By default, any Endpoint will keep using the Connections from the Snapshot unless the toggle is turned ON.

The Agent in which the Connection is to be overridden should initially be either restored from a Snapshot, or should have the Connections imported from another (source) Agent using a Package. The Snapshot selected in the Endpoint editor should be a Snapshot created from the same (source) Agent, to make sure that the Connections "match". In this case, if the toggle is ON, any change in the Connections of the restored Agent will be considered over the Connections in the selected Snapshot.

!!! note
    You can verify or troubleshoot Connections by their `referenceId`, which needs to match both in the Project and the Snapshot for the override feature to work. To do that, use [Cognigy.AI API](../../developer-guides/using-api.md) with the Get all Connections request.


#### Flow

[![Version badge](https://img.shields.io/badge/Added in-v4.10.0-blue.svg)]({{config.site_url}})

Endpoints also need an entry [**Flow**]({{config.site_url}}ai/resources/build/flows/) to start the conversation with. Note that it is possible to switch Flows during a conversation. 
As of Cognigy.AI 4.9.0, you can use the "**jump to Flow**" button next to the Flow selection field on the right-hand side.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/6f3084d-Endpoint_Webchat_jump_to_Flow_button_5.svg" width="100%" />
</figure>

Clicking on the link "Manual Input" below the Flow drop-down field displays the Flow ID of the currently selected Flow. Clicking the "Select from Dropdown" link will take you back to the drop-down selection list of Flows.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/99b555f-Flow_select_from_Dropdown.svg" width="100%" />
</figure>

#### Endpoint URL
The Endpoint URL states the **technical interface** to the specific Endpoint. For most channels, it needs to be copied / configured in the channel's settings so that the channel knows how to contact Cognigy.AI. 

#### General Settings > Enabled
This switch allows you to quickly enable or **disable the Endpoint**.

#### Natural Language Understanding

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/af0d4ec-endpoints-nlu.jpg" width="100%" />
</figure>

This drop-down allows you to select a different **NLU engine** for this particular Endpoint. Only NLUs that are configured under [**NLU Connectors**]({{config.site_url}}ai/resources/build/nlu-connectors/) are shown in this list.

#### Data Protection & Analytics (*previously called Data Management*)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/0c950c4-Data_Protection__Analytics.PNG" width="100%" />
</figure>

The Data Protection & Analytics section lets you configure which analytics (if any) are collected. 

**Chatbase**
Cognigy.AI can be connected directly to Google's Chatbase analytics platform. When enabled, an API key needs to be entered. All relevant data that enters the Endpoint, is forwarded to Chatbase.

**Dashbot**
The Endpoint can also be setup to forward all relevant analytics to Dashbot.

## More information

- [Endpoints Overview](../../endpoints/overview.md)