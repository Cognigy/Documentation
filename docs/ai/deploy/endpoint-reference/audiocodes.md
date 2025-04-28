---
title: "AudioCodes" 
slug: "audiocodes" 
hidden: false 
---

# AudioCodes

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/audiocodes.png" width="100%" />
</figure>

!!! warning "Removal of the AudioCodes Endpoint"
    The AudioCodes Endpoint was deprecated in April 2025 and will be removed in October 2025. Migrate to the [Voice Gateway Endpoint](voice-gateway.md) before the removal date.
    
Within our **Cognigy.AI** platform,
you are able to connect your AI Agent to your Contact Center or other phone numbers using the AudioCodes Endpoint,
allowing customers to speak to your AI Agent instead of just writing with it.

[Watch this Episode](https://support.cognigy.com/hc/en-us/articles/360017522940-Cognigy-Sessions-Building-a-Phone-Bot-with-Voice-Gateway) of Cognigy Sessions for a technical deep dive.

## AudioCodes Settings

### Async Mode
When async mode is enabled for the AudioCodes Endpoint, then outputs will be sent directly as they are processed in a Flow. This can be beneficial when the Flow, for example, has to send an HTTP request. When the async mode is off, then the outputs will be sent when the entire Flow has finished processing for the given input.

The [Inject & Notify](../endpoints/inject-and-notify.md) functionality only works when async mode is enabled.

## AudioCodes specific Nodes

Cognigy.AI comes with a large number of inbuilt Nodes to control the AudioCodes behaviour. See [AudioCodes Nodes](../../build/node-reference/voice/audiocodes/overview.md) for more information.

## Number Metadata

AudioCodes identifies information about the caller and adds it to the Cognigy [Input](../../test/interaction-panel/input.md) Object as `input.data.numberMetaData`.

| Parameter          | Type    | Description                                                              | Example            |
|--------------------|---------|--------------------------------------------------------------------------|--------------------|
| number             | string  | The phone number of the caller, including country code.                  | +4921154591991     |
| country            | string  | The 2-character country code.                                            | DE                 |
| countryCallingCode | string  | The calling code of the country.                                         | 49                 |
| nationalNumber     | string  | The national number without the country code and without a leading zero. | 21154591991        |
| valid              | boolean | Whether the number is valid.                                             | true               |
| valid              | string  | The type of number. See below.                                           | FIXED_LINE         |
| uri                | string  | The URI for the number.                                                  | tel:+4921154591991 |

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

!!! note "NumberMetaData in Tokens"
    All of the above are available as [Tokens](../../build/tokens.md) inside Cognigy Text fields as well.

## Generic Endpoint Settings
Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/transformers.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connectors.md)
- [Session Management](../endpoints/session-management.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md) 

!!! note "Contact Center & Phone number linking"
    To link the AudioCodes Endpoint to a phone number, contact your Cognigy representative to provision and configure a Voice Gateaway instance.

!!! warning "AudioCodes VoiceAI Connect"
    Cognigy AudioCodes Endpoint is 100% compatible with [AudioCodes VoiceAI Connect](https://voiceaiconnect.audiocodes.com), where you can sign up for free and get a phone number within minutes.

!!! warning "Rebranding of Voice Gateway with AudioCodes"
    With the native Voice Gateway integration to Cognigy AI the AudioCodes implementation will be rebranded from Voice Gateway to AudioCodes. This applies to the Flow Nodes and the Endpoint.