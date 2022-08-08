---
 title: "Getting Started with VoiceGateway" 
 slug: "vg-getting-started" 
 hidden: false 
---

# Getting Started with VoiceGateway

 <figure>
  <img class="image-center" src="{{config.site_url}}voicegateway/images/VG-logo.png" width="100%" />
</figure>

# Getting Started with VoiceGateway

## How to Set Up VoiceGateway?

<div class="divider"></div>

Setting up VoiceGateway is easy and can be done in 3 steps:

1. Create your [Voice Flow]({{config.site_url}}voicegateway/WebApp/overview/) in Cognigy.AI.
2. Create a [VoiceGateway Endpoint]({{config.site_url}}ai/endpoints/cognigy-vgv2/) in your Cognigy.AI agent.
3. Route your Endpoint and Contact Center to VoiceGateway in the [VoiceGateway Web App]({{config.site_url}}voicegateway/WebApp/overview/).

## How to create a Voice Flow in Cognigy.AI?

<div class="divider"></div>

Start your **VoiceGateway** project by creating a voice enabled flow. With a voice conversation, the bot must respond with a text based message for every user input. Voice conversations happen on a turn-by-turn basis, meaning that all dialogue outputs that are triggered by the flow will be bundled into one message and delivered across the phone line.

Every Cognigy.AI node that offers text based messages can be used in a voice flow. If you have rich media in your flow the fallback text field will be used as voice output.

If there is a VoiceGateway channel-specific configuration, this configuration will be used instead of the one on the default section. In the VoiceGateway channel you can find pre-defined SSML tags and [activity parameters]({{config.site_url}}ai/flow-nodes/vgv2/parameter-details/).

For voice specific actions you can use the [VoiceGateway Flow Nodes]({{config.site_url}}ai/flow-nodes/vgv2/voice-gateway/).

<figure>
  <img class="image-center" src="{{config.site_url}}voicegateway/images/VG-nodes-overview.png" width="100%" />
</figure>

## Which Endpoint to create in Cognigy.AI?

In order to do enable voice-based experiences with your Virtual Agent create your [VoiceGateway Endpoint]({{config.site_url}}ai/endpoints/cognigy-vgv2/) in Cognigy.AI. To do this, navigate to your Agent, open the _Deploy_ submenu in the resources panel on the left side of the screen and select “Endpoints”. To add the VoiceGateway Endpoint, simply click the _+ New Endpoint_ button from the top of the screen. After you have created your Endpoint you can point it to your voice flow.

<figure>
  <img class="image-center" src="{{config.site_url}}voicegateway/images/VG-endpoint-new.png" width="100%" />
</figure>

## How to route your Endpoint and Contact Center or Phone Number to VoiceGateway?

In order to route your Contact Center or Phone Number to your VoiceGateway Endpoint you need to go to the **VoiceGateway Web App**. For this step your VoiceGateway Endpoint URL is needed. This URL can be found in your Endpoint settings.

<figure>
  <img class="image-center" src="{{config.site_url}}voicegateway/images/VG-endpoint-url.png" width="100%" />
</figure>

Head over to our VoiceGateway Web App documentation to find all the detailed information about the necessary steps.

- [**VoiceGateway Web App Documentation**]({{config.site_url}}voicegateway/WebApp/overview/)

???+ warning "Rebranding of Voice Gateway with AudioCodes"
With the native Cognigy VoiceGateway integration to Cognigy AI the AudioCodes implementation will be rebranded from Voice Gateway to AudioCodes.
This applies to the Flow Nodes and the Endpoint.
