---
 title: "Getting Started" 
 slug: "vg-getting-started" 
 hidden: false 
---

# Getting Started with Voice Gateway

<img src="{{config.site_url}}voicegateway/images/VG-logo.png" width="Voice Gateway Logo" />

## How to Set Up Voice Gateway?

<div class="divider"></div>

Setting up Voice Gateway is easy and can be done in 3 steps:

1. Create your [Voice Flow]({{config.site_url}}ai/flow-nodes/vg/voice-gateway/) in Cognigy.AI.
2. Create a [Voice Gateway Endpoint]({{config.site_url}}ai/endpoints/cognigy-vg/) in your Cognigy.AI agent.
3. Route your Endpoint and Contact Center to Voice Gateway in the [Voice Gateway Web App]({{config.site_url}}voicegateway/webapp/overview/).

## How to create a Voice Flow in Cognigy.AI?

<div class="divider"></div>

Start your **Voice Gateway** project by creating a voice enabled flow. With a voice conversation, the bot must respond with a text based message for every user input. Voice conversations happen on a turn-by-turn basis, meaning that all dialogue outputs that are triggered by the flow will be bundled into one message and delivered across the phone line.

Every Cognigy.AI node that offers text based messages can be used in a voice flow. If you have rich media in your flow the fallback text field will be used as voice output.

If there is a Voice Gateway channel-specific configuration, this configuration will be used instead of the one on the default section. In the Voice Gateway channel you can find pre-defined SSML tags and [activity parameters]({{config.site_url}}ai/flow-nodes/vg/parameter-details/).

For voice specific actions you can use the [Voice Gateway Flow Nodes]({{config.site_url}}ai/flow-nodes/vg/voice-gateway/).

<img src="{{config.site_url}}voicegateway/images/VG-nodes-overview.png" width="Voice Gateway Nodes Overview" />

## Which Endpoint to create in Cognigy.AI?

In order to do enable voice-based experiences with your Virtual Agent create your [Voice Gateway Endpoint]({{config.site_url}}ai/endpoints/cognigy-vg/) in Cognigy.AI. To do this, navigate to your Agent, open the _Deploy_ submenu in the resources panel on the left side of the screen and select “Endpoints”. To add the Voice Gateway Endpoint, simply click the _+ New Endpoint_ button from the top of the screen. After you have created your Endpoint you can point it to your voice flow.

<img src="{{config.site_url}}voicegateway/images/VG-endpoint-new.png" width="Voice Gateway New Endpoint" />

## How to route your Endpoint and Contact Center or Phone Number to Voice Gateway?

In order to route your Contact Center or Phone Number to your Voice Gateway Endpoint your SIP Trunk needs to be set up. Please get in touch with us to configure your SIP Trunk and route your number to the right endpoint.


???+ warning "Rebranding of Voice Gateway with AudioCodes"
    With the native Cognigy Voice Gateway integration to Cognigy AI the AudioCodes implementation will be rebranded from Voice Gateway to AudioCodes.
    This applies to the Flow Nodes and the Endpoint.
