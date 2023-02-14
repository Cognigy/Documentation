---
 title: "Getting Started" 
 slug: "vg-getting-started" 
 hidden: false 
---

# Getting Started with Voice Gateway

<img class="image-center" src="{{config.site_url}}voicegateway/images/VG-logo.png" width="Voice Gateway Logo" />

## How to Set Up Voice Gateway?

Setting up Voice Gateway is easy and can be done in 3 steps:
- [Getting Started with Voice Gateway](#getting-started-with-voice-gateway)
  - [How to Set Up Voice Gateway?](#how-to-set-up-voice-gateway)
  - [Create a Voice Gateway flow](#create-a-voice-gateway-flow)
  - [Create a Voice Gateway Endpoint](#create-a-voice-gateway-endpoint)
  - [Route your Contact Center or Phone Number to Voice Gateway](#route-your-contact-center-or-phone-number-to-voice-gateway)

## Create a Voice Gateway flow

Start your **Voice Gateway** project by creating a voice-enabled flow. With a voice conversation, the virtual agent must respond with a text-based message for every user input. Voice conversations happen on a turn-by-turn basis, meaning that all dialogue outputs that are triggered by the flow will be bundled into one message and delivered across the phone line.

Every Cognigy.AI node that offers text-based messages can be used in a voice flow. If you have rich media in your flow, the fallback text field will be used as voice output.

If there is a Voice Gateway channel-specific configuration, this configuration will be used instead of the one in the default section. In the Voice Gateway channel, you can find pre-defined SSML tags and [activity parameters]({{config.site_url}}ai/flow-nodes/vg/parameter-details/).

For voice-specific actions, you can use the [Voice Gateway Flow Nodes]({{config.site_url}}ai/flow-nodes/vg/voice-gateway/).

<img src="{{config.site_url}}voicegateway/images/VG-nodes-overview.png" width="Voice Gateway Nodes Overview" />

## Create a Voice Gateway Endpoint

To do voice-based experiences with your Virtual Agent, create your [Voice Gateway Endpoint]({{config.site_url}}ai/endpoints/cognigy-vg/) in Cognigy.AI. To do that:

1. In the left-side menu of you Agent, click **Deploy > Endpoints**. 
2. On the **Endpoints** page, click **+ New Endpoint**. 
3. In the **New Endpoint** section, do the following:
   3.1 Select the **VoiceGateway** Endpoint type.
   3.2 Add a unique name.
   3.3 Select a relevant FLow from the list.
4. Click **Save**.
   
<img src="{{config.site_url}}voicegateway/images/VG-endpoint-new.png" width="Voice Gateway New Endpoint" />

## Route your Contact Center or Phone Number to Voice Gateway

To route your Contact Center or Phone Number to your Voice Gateway Endpoint, your SIP Trunk needs to be set up. Get in touch with Cognigy technical support to configure your SIP Trunk and route your number to the right Endpoint.


???+ warning "Rebranding of Voice Gateway with AudioCodes"
    With the native Cognigy Voice Gateway integration to Cognigy.AI, the AudioCodes implementation will be rebranded from Voice Gateway to AudioCodes.
