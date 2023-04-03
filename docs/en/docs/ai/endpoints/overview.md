---
 title: "Overview" 
 slug: "overview" 
 hidden: false 
---
# Overview

**Endpoints** are the connector between your user interface and the Cognigy **Agent**. This connection can range from text based conversation to a conversation on your contact center phone-lines.

 <figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/0c6834f-6d72d72-endpoints-screen.jpg" width="100%" />
</figure>

## Features

<div class="divider"></div>

Every **Endpoint** has the following features: 
- it points to a single **Locale** of a single **Flow** of a single **Snapshot**
- it can be disabled
- customization of the [Data Protection & Analytics ]({{config.site_url}}ai/endpoints/data-protection-and-analytics/) 
- it can have its own [Transformer Function]({{config.site_url}}ai/endpoints/transformers/transformers/) 

 <figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/9ca0d5a-endpointGeneral.PNG" width="100%" />
</figure>

Selected Endpoints also have the option to customize the NLU that provides the Intent and Slot mapping for the agent. 

 <figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/675c2d2-nluConnector.PNG" width="100%" />
</figure>

The [NLU Connectors]({{config.site_url}}ai/resources/build/nlu-connectors/) that are configured to the agent are available to select from this dropdown menu. Alternatively, the [No NLU]({{config.site_url}}ai/nlu/external-nlu/no-nlu/) option can be selected to completely disable the intent and slot mapping for an endpoint. 

Additionally, there are **Endpoint** specific features and configuration options available.

## Cognigy Endpoints

<div class="divider"></div>

The following Endpoints are specific to the Cognigy.AI platform:

- [**Cognigy Webchat**]({{config.site_url}}ai/endpoints/webchat/webchat/) 
- [**Cognigy Voice Gateway**]({{config.site_url}}ai/endpoints/cognigy-vg/) 

## Generic Endpoints

<div class="divider"></div>

The following Endpoints are provided for custom integrations:

- [**REST**]({{config.site_url}}ai/endpoints/rest/) 
- [**Socket**]({{config.site_url}}ai/endpoints/socketio/) 
- [**Webhook**]({{config.site_url}}ai/endpoints/webhook/) 

## Third Party Endpoints

<div class="divider"></div>

The following Endpoints provide integrations with third party products:

- [**Amazon Alexa**]({{config.site_url}}ai/endpoints/amazon-alexa/)
- [**Amazon Lex (Beta)**]({{config.site_url}}ai/endpoints/amazon-lex/) 
- [**Avaya CPaaS**]({{config.site_url}}ai/endpoints/avaya-cpaas/) 
- [**Dialogflow**]({{config.site_url}}ai/endpoints/dialogflow/) 
- [**Facebook Messenger**]({{config.site_url}}ai/endpoints/facebook-messenger/) 
- [**Google Actions**]({{config.site_url}}ai/endpoints/google-actions/) 
- [**Intercom**]({{config.site_url}}ai/endpoints/intercom/) 
- [**LINE Messenger**]({{config.site_url}}ai/endpoints/line-messenger/) 
- [**Azure Bot Services**]({{config.site_url}}ai/endpoints/azure-bot-services/) 
- [**Microsoft Teams**]({{config.site_url}}ai/endpoints/microsoft-teams/) 
- [**RingCentral Engage**]({{config.site_url}}ai/endpoints/ringcentral-engage/)
- [**Slack**]({{config.site_url}}ai/endpoints/slack/) 
- [**Sunshine Conversations**]({{config.site_url}}ai/endpoints/sunshine-conversations/) 
- [**Twilio**]({{config.site_url}}ai/endpoints/twilio/) 
- [**Userlike**]({{config.site_url}}ai/endpoints/userlike/) 
- [**Workplace by Facebook**]({{config.site_url}}ai/endpoints/workplace-by-fb/)
- [**WhatsApp**]({{config.site_url}}ai/endpoints/whatsapp/)