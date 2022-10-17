---
 title: "Cognigy Voice Gateway" 
 slug: "cognigy-vg" 
 hidden: false 
---
# Cognigy Voice Gateway

## Overview

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/dea6737-bdb5548-EP_Voice_Gateway.png" width="100%" />
</figure>

Within our **COGNIGY.AI** platform you are able to connect your **Agent** to your Contact Center or other phone numbers using our **VoiceGateway**, allowing customers to speak with your **Agent** instead of just writing to it.

## Voice Gateway Specific Nodes

Cognigy.AI comes with built in Nodes to control Voice Gateway. See [Voice Gateway Nodes]({{config.site_url}}ai/flow-nodes/vgv2/voice-gateway/) for more information.

## Call Meta Data

Cognigy Voice Gateway identifies important information about the call from the SIP INVITE and makes it available to the bot during the session.

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
## Number Meta Data

AudioCodes identifies information about the caller and adds it to the Cognigy [Input]({{config.site_url}}ai/tools/interaction-panel/input/) Object as `input.data.numberMetaData`.

| Parameter   | Type |Description|Example|
| ----------- | ------------------------------------ |||
| number      | string |The phone number of the caller, including country code|+4921154591991|
| country     | string |The 2-character country code|DE|
| countryCallingCode | string |The calling code of the country|49|
| nationalNumber      | string |The national number without the country code and without a leading zero.|21154591991|
| valid      | boolean |Whether the number is valid|true|
| valid      | string |The type of number. See below.|FIXED_LINE|
| uri      | string |The URI for the number|tel:+4921154591991|

`numberMetaData.type` can be any of:

- PREMIUM_RATE
- TOLL_FREE
- SHARED_COST
- VOIP
- PERSONAL_NUMBER
- PAGER
- UAN
- VOICEMAIL
- FIXED_LINE_OR_MOBILE
- FIXED_LINE
- MOBILE


???+ info "NumberMetaData in Tokens"
    All of the above are available as [Tokens]({{config.site_url}}ai/resources/manage/tokens/) inside Cognigy Text fields as well.

## Generic Endpoint Settings

<div class="divider"></div>

Find out about the generic Endpoint settings available with this Endpoint on the following pages:

- [Endpoints Overview]({{config.site_url}}ai/endpoints/overview/)
- [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers/)
- [NLU Connectors]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Session Management]({{config.site_url}}ai/endpoints/session-management/)
- [Real Time Translation Settings]({{config.site_url}}ai/endpoints/real-time-translation-settings)

???+ info "Contact Center & Phone number linking"
   In order to route your Contact Center or Phone Number to your Voice Gateway Endpoint, please get in touch with us via an email to support@cognigy.com.

???+ warning "Rebranding of Voice Gateway with AudioCodes"
    With the native Voice Gateway integration to Cognigy AI the AudioCodes implementation will be rebranded from Voice Gateway to AudioCodes. This applies to the Flow Nodes and the Endpoint. You can find the AudioCodes documentation here.