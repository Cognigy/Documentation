---
title: "AudioCodes" 
slug: "audiocodes"
description: "The AudioCodes Endpoint enables to connect your AI Agent to your contact center or other phone numbers using the AudioCodes platform. This Endpoint allows your customers to speak with your AI Agents instead of using a chat."
hidden: false
tags:
  - audiocodes
  - audiocodes endpoint
---

# AudioCodes

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/audiocodes.png" width="100%" />
</figure>

{! _includes/ai/ac-endpoint-deprecation.md !}

The AudioCodes Endpoint enables to connect your AI Agent to your contact center or other phone numbers using the [AudioCodes](https://www.audiocodes.com/) platform. This Endpoint allows your customers to speak with your AI Agents instead of using a chat.

## Prerequisites

- A Flow configured with [AudioCodes](../../build/node-reference/voice/audiocodes/overview.md) or [Voice Generic](../../build/node-reference/voice/generic/overview.md) Nodes.
- To link the AudioCodes Endpoint to a phone number, contact your Cognigy representative to provision and configure a Voice Gateway instance.
- The Cognigy AudioCodes Endpoint is 100% compatible with [AudioCodes VoiceAI Connect](https://voiceaiconnect.audiocodes.com), where you can sign up for free and get a phone number within minutes.

## Generic Endpoint Settings

Learn about the generic Endpoint settings on the following pages:

- [Endpoints Overview](../endpoints/overview.md)
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)
- [Transformer Functions](../endpoints/transformers/overview.md)

## Specific Endpoint Settings

??? info "Voice Gateway Settings"
    | **Parameter** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                   |
    |---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Async Mode    | When async mode is enabled for the AudioCodes Endpoint, outputs are sent directly as they are processed in a Flow. This mode is useful when the Flow needs to send an HTTP request. <br><br>When async mode is off, outputs are sent only after the entire Flow has finished processing the input.<br><br>The [Inject & Notify](../endpoints/inject-and-notify.md) feature only works when async mode is enabled. |

## How to Set Up

### Configuration on the Cognigy.AI Side

??? info "Create an AudioCodes Endpoint"
    1. In the left-side menu of the Cognigy.AI Project, go to **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:
        1. Select the **AudioCodes** Endpoint type.
        2. Add a unique name.
        3. Select a relevant Flow from the list.
    4. _(Optional)_ Activate the **Async Mode** setting.

## Additional Information

??? info "Call Metadata"
    AudioCodes identifies information about the caller and adds it to the [Input](../../build/ai-agent-memory/input.md) object as `input.data.numberMetaData`.

    | Parameter            | Type    | Description                                                                                                                                                                                    | Example              |
    |----------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
    | `number`             | string  | The complete phone number of the caller, including the country code.                                                                                                                           | `+4921154591991`     |
    | `country`            | string  | The 2-letter ISO country code.                                                                                                                                                                 | `DE`                 |
    | `countryCallingCode` | string  | The country calling code (without the `+` sign).                                                                                                                                               | `49`                 |
    | `nationalNumber`     | string  | The national number, excluding the country code and leading zero.                                                                                                                              | `21154591991`        |
    | `valid`              | boolean | Indicates whether the phone number is valid.                                                                                                                                                   | `true`               |
    | `type`               | string  | The type of phone number. Possible values: `PREMIUM_RATE`, `TOLL_FREE`, `SHARED_COST`, `VOIP`, `PERSONAL_NUMBER`, `PAGER`, `UAN`, `VOICEMAIL`, `FIXED_LINE_OR_MOBILE`, `FIXED_LINE`, `MOBILE`. | `FIXED_LINE`         |
    | `uri`                | string  | The URI representation of the phone number.                                                                                                                                                    | `tel:+4921154591991` |

## More Information

- [All Endpoints](overview.md)
- [Migration to Voice Gateway](../../../voice-gateway/migrate-from-ac-to-vg.md)