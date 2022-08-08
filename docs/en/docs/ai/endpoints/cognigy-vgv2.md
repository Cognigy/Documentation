---
 title: "Cognigy VoiceGateway" 
 slug: "cognigy-voicegateway" 
 hidden: true 
---

# Cognigy VoiceGateway

## Overview

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/dea6737-bdb5548-EP_Voice_Gateway.png" width="100%" />
</figure>

Within our **COGNIGY.AI** platform you are able to connect your **Agent** to your Contact Center or other phone numbers using our **VoiceGateway**, allowing customers to speak with your **Agent** instead of just writing to it.

## VoiceGateway Specific Nodes

Cognigy.AI comes with built in Nodes to control VoiceGateway. See [VoiceGateway Nodes]({{config.site_url}}ai/flow-nodes/vgv2/voice-gateway/) for more information.

## Generic Endpoint Settings

<div class="divider"></div>

Find out about the generic Endpoint settings available with this Endpoint on the following pages:

- [Endpoints Overview]({{config.site_url}}ai/endpoints/overview/)
- [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers/)
- [NLU Connectors]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Session Management]({{config.site_url}}ai/endpoints/session-management/)
- [Real Time Translation Settings]({{config.site_url}}ai/endpoints/real-time-translation-settings)

## Call Metadata

Cognigy VoiceGateway identifies important information about the call from the SIP INVITE and makes it available to the bot during the session.

| Parameter | Type   | Description                                                     | Example           |
| --------- | ------ | --------------------------------------------------------------- | ----------------- |
| from      | string | The phone number of the caller, including country code.         | +4921154591991    |
| headers   | JSON   | The SIP Headers of the call on INVITE, including Custom Headers | See example below |

```json
{
  "to": "<sip-destination>",
  "call-id": "<id-value>",
  "allow": "NOTIFY, OPTIONS, BYE, INVITE, ACK, CANCEL, REFER",
  "X-Custom-Headers": "<custom-headers-value>",
  "X-Originating-Carrier": "<carrier-name>",
  "X-Voip-Carrier-Sid": "<id-value>",
  "X-Twilio-AccountSid": "<id-value>",
  "X-Twilio-CallSid": "<id-value>",
  "other-properties": "..."
}
```

???+ info "Contact Center & Phone number linking"
In order to route your Contact Center or Phone Number to your VoiceGateway Endpoint you need to go to the **VoiceGateway Web App**. Head over to our [**VoiceGateway Web App Documentation**]({{config.site_url}}voicegateway/webapp/overview/) to find all the detailed information about the necessary steps in the Web App.

???+ warning "Rebranding of Voice Gateway with AudioCodes"
With the native Voice Gateway integration to Cognigy AI the AudioCodes implementation will be rebranded from Voice Gateway to AudioCodes. This applies to the Flow Nodes and the Endpoint.
