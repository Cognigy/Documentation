# Endpoints

**Endpoints** help connect **Channels** s(like Messenger or Alexa), to specific Cognigy [**Flows**]({{config.site_url}}ai/resources/build/flows/). They make sure that the **channel-specific input and output** (Images, Galleries, Voice) gets converted to the standardized [**Input**]({{config.site_url}}ai/tools/interaction-panel/input/)  object. This way, a Cognigy Flow needs to be developed only once, after which it can be deployed to many different channels by configuring Endpoints.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/6d72d72-endpoints-screen.jpg" width="100%" />
</figure>

???+ success "Endpoint Setup"
    Find more details about each type of endpoint and links to our [Help Center](https://support.cognigy.com/hc/en-us?_ga=2.36371232.1055740288.1600087042-336273911.1592472592) in the [Endpoints]({{config.site_url}}ai/endpoints/overview/) section of the documentation.

## Standard Endpoints
<div class="divider"></div>

The platform includes many pre-built Endpoints that can be configured in a couple of steps. 

| Endpoint      | Description                          |
| ----------- | ------------------------------------ |
| **Webchat** | The Webchat is an open-source web-based chat widget that can be embedded on any website. |
| **Alexa**       | Alexa is Amazon's Virtual Assistant voice AI device. The devices come in different versions, like the Echo, Echo Dot and Echo Show. |
| **DialogFlow**    | DialogFlow is Google's Natural Language Understanding framework. By configuring a DialogFlow Endpoint, you can connect your Flow to all channels that are support by DialogFlow. |
| **Messenger**   | Messenger is Facebook's messaging app and platform. |
|**Google Actions**    | Google Actions are part of Google Assistant and let you connect your Flows to any Google Assistant device. |
| **Voice Gateway**   | Voice Gateway lets you connect to SIP interfaces, which means that your Virtual Agent can be connected to the phone network. |
| **Intercom**    | Intercome is a live chat suite. |
| **Line**    | Line is a popular messaging and voice call app.|
|**Azure Bot Services**    | The [Azure Bot Services]({{config.site_url}}ai/endpoints/azure-bot-services) Endpoint allows you to connect your Virtual Agent to all Azure Bot Service channels. |
| **Microsoft Teams**    | Microsoft Teams is a popular communication and collaboration platform.|
| **REST**   | The REST Endpoint lets you connect to a Cognigy Flow directly through a REST interface.|
| **RingCentral Engage**    | RingCentral Engage is a customer engagement platform that features built-in support for many channels and live-chat capabilities.|
| **Slack**    | Slack is a popular communication and collaboration platform. |
| **Sunshine Conversations**    | Sunshine Conversations is part of Zendesk and helps connect to another set of channels. |
| **Socket**   | The Socket Endpoint lets you connect to a Flow through a socket interface.|
| **Twilio**    | Twilio is a popular cloud communications platform. The Twilio Endpoint lets you connect Flows to Twilio Programmable Voice. |
| **Twilio Autopilot**   | Twilio is a popular cloud communications platform. The Twilio Autopilot Endpoint makes use of Twilio NLU framework. |
| **Twilio SMS**   | Twilio is a popular cloud communications platform. The Twilio SMS Endpoint lets you connect Flows to Twilio Programmable SMS.|
| **Userlike**  | Userlike is a popular live-chat platform |
| **Webhook**   | The Webhook Endpoint lets you expose Cognigy Flows via Webhook.|