---
 title: "Cognigy Voice Gateway" 
 slug: "cognigy-vg" 
 hidden: false 
---
# Cognigy Voice Gateway

[![Version badge](https://img.shields.io/badge/Updated in-v4.60-blue.svg)](../../release-notes/4.60.md)

## Overview

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/dea6737-bdb5548-EP_Voice_Gateway.png" width="100%" />
</figure>

Within our **Cognigy.AI** platform you are able to connect your **Agent** to your Contact Center or other phone numbers using our **VoiceGateway**, allowing customers to speak with your **Agent** instead of just writing to it.

## Voice Gateway Specific Nodes

Cognigy.AI comes with built-in Nodes to control Voice Gateway. See [Voice Gateway Nodes]({{config.site_url}}ai/flow-nodes/vg/voice-gateway/) for more information.

## Call Meta Data

Voice Gateway identifies information about the caller and adds it to the Cognigy [Input]({{config.site_url}}ai/tools/interaction-panel/input/) Object as `input.data.numberMetaData`.

| Parameter          | Type    | Description                                                              | Example            |
|--------------------|---------|--------------------------------------------------------------------------|--------------------|
| headers            | JSON    | The SIP Headers of the call on INVITE, including Custom Headers          | See example below  |
| number             | string  | The phone number of the caller, including country code                   | +4921154591991     |
| country            | string  | The 2-character country code                                             | DE                 |
| countryCallingCode | string  | The calling code of the country                                          | 49                 |
| nationalNumber     | string  | The national number without the country code and without a leading zero. | 21154591991        |
| valid              | boolean | Whether the number is valid                                              | true               |
| valid              | string  | The type of number. See below.                                           | FIXED_LINE         |
| uri                | string  | The URI for the number                                                   | tel:+4921154591991 |

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

```json
{
  "from": "<caller-phone-number>",
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

!!! note "NumberMetaData in Tokens"
    All of the above are available as [Tokens]({{config.site_url}}ai/resources/manage/tokens/) inside Cognigy Text fields as well.

## Call Events

Allows activating call events for a Flow.
Select a call event from the [Voice Gateway Events](../../voicegateway/references/events/overview.md) list.
This event that will trigger the action.

If you have configured the same call event in both the Endpoint and the [Lookup](../flow-nodes/logic/lookup.md) Node, the Endpoint settings will overwrite the Node settings.

### Call Event Settings

!!! note
    As with all other Endpoint settings, you cannot test the Call Events settings in the Endpoint within the Interaction Panel.

| Parameter    | Type     | Description                                                                                                                                                                                                                                                                                                                            | 
|--------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Action       | Selector | Choose the action to be performed when the call event is detected: <br> - **Inject into current Flow** — inject the defined text and data payload into the current flow. <br> - **Execute Flow** — trigger a selected Flow when the call event is detected. <br> - **None** — no action will be taken when the call event is detected. |
| Text Payload | String   | Enter the text that will be sent to your Flow. Available only for the **Inject into current Flow** action.                                                                                                                                                                                                                             |
| Data Payload | JSON     | Provide the data that will be sent into your Flow in JSON format. Available only for the **Inject into current Flow** action.                                                                                                                                                                                                          | 
| Execute Flow | Selector | Execute the selected Flow. Flow execution will stop afterward. Available only for the **Execute Flow** action.                                                                                                                                                                                                                         |

## Generic Endpoint Settings

Find out about the generic Endpoint settings available with this Endpoint on the following pages:

- [Endpoints Overview](overview.md)
- [Data Protection & Analytics](data-protection-and-analytics.md)
- [Transformer Functions](transformers/transformers.md)
- [NLU Connectors](../resources/build/nlu-connectors.md)
- [Session Management](session-management.md)
- [Real Time Translation Settings](real-time-translation-settings.md)

!!! note "Contact Center & Phone number linking"
    In order to route your Contact Center or Phone Number to your Voice Gateway Endpoint, get in touch with us via an email to support@cognigy.com.

!!! warning "Rebranding of Voice Gateway with AudioCodes"
    With the native Voice Gateway integration to Cognigy AI the AudioCodes implementation will be rebranded from Voice Gateway to AudioCodes. This applies to the Flow Nodes and the Endpoint.