---
title: "Cognigy Voice Gateway" 
slug: "cognigy-vg" 
hidden: false 
---

# Cognigy Voice Gateway

[![Version badge](https://img.shields.io/badge/Updated in-v4.62-blue.svg)](../../release-notes/4.62.md)

## Overview

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/dea6737-bdb5548-EP_Voice_Gateway.png" width="100%" />
</figure>

Within our **Cognigy.AI** platform you are able to connect your **Agent** to your Contact Center or other phone numbers using our **VoiceGateway**, allowing customers to speak with your **Agent** instead of just writing to it.

## Voice Gateway Specific Nodes

Cognigy.AI comes with built-in Nodes to control Voice Gateway. See [Voice Gateway Nodes](../flow-nodes/vg/voice-gateway.md) for more information.

## Call Meta Data

Voice Gateway identifies information about the caller and adds it to the Cognigy [Input Object](../tools/interaction-panel/input.md)  as `input.data.numberMetaData`.

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

| Parameter    | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 
|--------------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Action       | Selector | Choose the action to be performed when the call event is detected: <br> - **Inject into current Flow** — inject the defined text and data payload into the current flow. <br> - **Execute Flow** — trigger a selected Flow when the call event is detected. <br> - **None** — no action will be taken when the call event is detected. <br> - **Transfer** — transfer a call in case [TRANSFER_DIAL_ERROR](../../voicegateway/references/events/TRANSFER_DIAL_ERROR.md) or [TRANSFER_REFER_ERROR](../../voicegateway/references/events/TRANSFER_REFER_ERROR.md) call events occur. This action for call events is configured similarly to [Call Failover](#call-failover). |
| Text Payload | String   | Enter the text that will be sent to your Flow. Available only for the **Inject into current Flow** action.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Data Payload | JSON     | Provide the data that will be sent into your Flow in JSON format. Available only for the **Inject into current Flow** action.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 
| Execute Flow | Selector | Execute the selected Flow. Flow execution will stop afterward. Available only for the **Execute Flow** action.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Call Failover

The Call Failover section is intended to handle runtime errors that occur on the Cognigy.AI side during the execution of a Flow.

!!! info "Feature availability"
    - If you use a SaaS Cognigy installation, contact the support team to activate this feature.
    - If you use an On-Premise Cognigy installation, activate this feature by adding `FEATURE_ENABLE_ENDPOINT_CALL_FAILOVER` in `values.yaml`.

| Parameter                   | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Transfer Type |
|-----------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Failover enabled            | Toggle        | If enabled, the configuration below will be used to perform a transfer in case of a runtime error                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | -             |
| Transfer Type               | Dropdown      | There are two transfer types: <br> - **Refer** — forwarding an existing call. <br> - **Dial** — creating a new outgoing call. If you want to use this type and still have the old Node version, add a new Voice Gateway Transfer Node in the Flow Editor and manually transfer the required settings from the old Node.                                                                                                                                                                                                                                           | -             | 
| Reason                      | CognigyScript | The reason for the handover. It is shown in Voice Gateway logs.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | All           | 
| Target                      | CognigyScript | E.164 syntax or a SIP URI are supported.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | All           | 
| Caller ID                   | Number        | The caller ID. Some carriers, like Twilio, require a registered number for outgoing calls.                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Dial          |
| Dial Music                  | URL           | Custom audio or ring-back which plays to the caller while the outbound call is ringing.  Only the `.wav` or `.mp3` formats are supported.                                                                                                                                                                                                                                                                                                                                                                                                                         | Dial          | 
| Timeout                     | Number        | The amount of time (in seconds) that the virtual agent will ring before a [no-answer](../../voicegateway/references/events/NO_ANSWER.md) timeout. The default value is 60 seconds.                                                                                                                                                                                                                                                                                                                                                                                | Dial          |
| Failover Transcribe Enabled | Toggle        | If enabled, transcriptions will be attempted in case of a failed call transfer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Dial          |
| STT Vendor                  | Selector      | Select the desired STT Vendor. For custom use all lowercase letters like microsoft, google, aws, or nuance.                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Dial          |
| STT Language                | Selector      | Select the desired STT Language. For custom languages, use the following format: de-DE, fr-FR, en-US.                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Dial          |
| Google Model                | Dropdown      | This parameter is active only when Google is selected in the STT Vendor setting.<br><br>Utilizes one of Google Cloud Speech-to-Text transcription models, with the `latest_short` model being the default choice. For a detailed list of Google models, refer to the [Transcription models](https://cloud.google.com/speech-to-text/docs/transcription-model#transcription_models)  section in the Google Documentation. Keep in mind that the `default` value is a Google Model type that can be used if other models don't suit your specific scenario.         | Dial          |
| Transcription Webhook       | URL           | The Webhook is triggered with an HTTP POST whenever an interim or final transcription is received. Uses the default recognizer.                                                                                                                                                                                                                                                                                                                                                                                                                                   | Dial          |
| Audio Stream Selection      | Selector      | Select the source of the audio stream: <br> - **Caller/Called** - both the incoming and outgoing audio streams of the caller and the called party. <br> - **Caller** - the incoming and outgoing audio stream of the caller. <br>- **Called** - the incoming and outgoing audio stream of the called party. <br> <br> Ensure that the selected audio stream matches the language specified for transcription. If no audio stream is provided, the system will use the one set in the beginning, which should also match the language specified for transcription. | Dial          |
| Custom Transfer SIP Headers | Toggle        | Data that needs to be sent as SIP headers in the generated SIP message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | All           |


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