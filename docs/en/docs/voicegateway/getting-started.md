---
 title: "Getting Started" 
 slug: "vg-getting-started" 
 hidden: false 
---

# Getting Started with Voice Gateway

<figure>
<img class="image-center" src="{{config.site_url}}voicegateway/images/VG-logo.png" width="80%" />
   <figcaption>Voice Gateway Logo</figcaption>
</figure>

## How to Set Up Voice Gateway?

To set up Voice Gateway, do the following steps:

1. [Create a Voice Gateway flow](#create-a-voice-gateway-flow)
2. [Create a Voice Gateway Endpoint](#create-a-voice-gateway-endpoint)
3. [Route your Contact Center or Phone Number to Voice Gateway](#route-your-contact-center-or-phone-number-to-voice-gateway)

## Create a Voice Gateway flow

Start your **Voice Gateway** project by creating a voice-enabled flow. With a voice conversation, the virtual agent must respond with a text-based message for every user input. Voice conversations happen on a turn-by-turn basis, meaning that all dialogue outputs that are triggered by the flow will be bundled into one message and delivered across the phone line.

Every Cognigy.AI node that offers text-based messages can be used in a voice flow. If you have rich media in your flow, the fallback text field will be used as voice output.

If there is a Voice Gateway channel-specific configuration, this configuration will be used instead of the one in the default section. In the Voice Gateway channel, you can find pre-defined SSML tags and [activity parameters]({{config.site_url}}ai/flow-nodes/vg/parameter-details/).

For voice-specific actions, you can use the [Voice Gateway Flow Nodes]({{config.site_url}}ai/flow-nodes/vg/voice-gateway/).

!!! note
    With the native Cognigy Voice Gateway integration to Cognigy.AI, the AudioCodes implementation will be rebranded from Voice Gateway to AudioCodes.

<figure>
   <img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-nodes-overview.png"  width="80%" />
</figure>

## Create a Voice Gateway Endpoint

To do voice-based experiences with your Virtual Agent, create your [Voice Gateway Endpoint]({{config.site_url}}ai/endpoints/cognigy-vg/) in Cognigy.AI. To do that:

1. In the left-side menu of your Agent, click **Deploy > Endpoints**. 
2. On the **Endpoints** page, click **+ New Endpoint**. 
3. In the **New Endpoint** section, do the following:
   3.1 Select the **VoiceGateway** Endpoint type.
   3.2 Add a unique name.
   3.3 Select a relevant Flow from the list.
4. Click **Save**.

<figure>
   <img class="image-center" src="{{config.site_url}}voicegateway/images/VG-endpoint-new.png" width="100%" />
</figure>


## Route your Contact Center or Phone Number to Voice Gateway

To route your Contact Center or Phone Number to your Voice Gateway Endpoint, your SIP Trunk needs to be set up. Get in touch with [Cognigy technical support](../help/get-help.md) to configure your SIP Trunk and route your number to the right Endpoint.

## What's next?

- [Create an account](webapp/accounts.md)
- [Create an application](webapp/applications.md)
- [Add a new carrier](webapp/carriers.md)
- [Add a phone number](webapp/phone-numbers.md)
- [Add speech provider credentials](webapp/speech-services.md)