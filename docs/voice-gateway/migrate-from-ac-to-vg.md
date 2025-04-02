---
title: "Migration from AudioCodes to Voice Gateway"
slug: "migrate-from-ac-to-vg"
description: "Before the deprecation date, we strongly recommend migrating from the third-party AudioCodes service to the native Cognigy Voice Gateway product."
hidden: false
---

# Migration from AudioCodes to Voice Gateway

Starting from February 2025,
you will no longer be able
to create new [AudioCodes Nodes](../ai/build/node-reference/voice/audiocodes/overview.md) and [Generic Voice Nodes](../ai/build/node-reference/voice/generic/overview.md),
but you can still edit or clone existing ones.
Flows using these Nodes will continue to operate after the deprecation date.

Before that date, we strongly recommend migrating from the third-party AudioCodes service to the native Cognigy product,
[Voice Gateway](index.md), for smoother integration with your voice AI Agents.

## Prerequisites

- Add the `FEATURE_VG_AC_COMPATIBILITY_MODE` feature flag to the Cognigy.AI `values.yaml` file to activate the compatibility mode.
- Note that when transferring settings from [AudioCodes Nodes](../ai/build/node-reference/voice/audiocodes/overview.md) to [Voice Gateway Nodes](../ai/build/node-reference/voice/voice-gateway/overview.md):
    - Some parameter names may differ slightly, as well as the [names of the Nodes](#mapping-of-voice-nodes). 
    - The values of some parameters may also vary slightly. If you notice a significant difference in the configuration, contact [Cognigy technical support](../help/get-help.md).

## Install Voice Gateway

1. Install the [Voice Gateway Self-Service Portal](overview.md) as a SaaS or on-premises solution.
2. Follow the [Getting Started Guide](getting-started.md) for further actions. For additional assistance, keep in touch with the customer success manager to help you with configuration.

## Create a Voice Gateway Endpoint

1. In the left-side menu of the Cognigy.AI interface, select the Project where you want to create a Voice Gateway Endpoint.
2. In the left-side menu of the Project, go to **Deploy > Endpoints**.
3. On the **Endpoints** page, click **+ New Endpoint**.
4. In the **New Endpoint** section, do the following:<br>
    1. Select the **Voice Gateway** Endpoint type.<br>
    2. Add a unique name.<br>
    3. Select a relevant voice Flow from the list.<br>
5. Click **Save**.
6. In the Endpoint, go to the **AudioCodes Compatibility Mode** section.
7. Activate the **Enable AudioCodes Compatibility Mode** setting. This setting allows the Voice Gateway to treat your Flow with the AudioCodes Node as if it were a Flow with Voice Gateway Nodes, ensuring that the voice AI Agent works smoothly without interruptions.
8. Manually move the required settings from your previous AudioCodes Endpoint to the Voice Gateway Endpoint.
9. Save your changes.

You can use the AudioCodes Endpoint alongside the Voice Gateway Endpoint. First, test the AI Agent with the Voice Gateway Endpoint, and if the tests are successful, you can switch to the Voice Gateway Endpoint permanently.

With Compatibility Mode enabled, you can simultaneously use both Voice Gateway and AudioCodes Nodes in a Flow.

## Mapping of Voice Nodes

The table outlines the mapping of Generic and AudioCodes Nodes to their corresponding Voice Gateway Nodes.
By following this mapping during migration,
you can ensure that your AI Agents remain functional and effectively use the features of Cognigy Voice Gateway.

| Generic Voice Node                                                                                                 | AudioCodes Node                                                                                                                                        | Voice Gateway Node                                                                                                                                                      |
|--------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| -                                                                                                                  | [Call Recording](../ai/build/node-reference/voice/audiocodes/call-recording.md)                                                                        | [Call Recording](../ai/build/node-reference/voice/voice-gateway/call-recording.md)                                                                                      |
| [Barge In - Config](../ai/build/node-reference/voice/generic/barge-in-config.md)                                   | Set Session Params: [Barge In](../ai/build/node-reference/voice/voice-gateway/parameter-details.md)                                           | Set Session Config: [Barge In](../ai/build/node-reference/voice/voice-gateway/parameter-details.md)                                                            |
| [Continuous ASR - Config](../ai/build/node-reference/voice/generic/continuous-asr-config.md)                       | Set Session Params: [Continuous ASR](https://support.cognigy.com/hc/en-us/articles/360017413959-Audiocodes-Advanced-Configuration#continuous-asr-0-10) | Set Session Config: [Continuous ASR](../ai/build/node-reference/voice/voice-gateway/parameter-details.md)                                                |
| [DTMF Collect - Config](../ai/build/node-reference/voice/generic/dtmf-collect-config.md)                           | Set Session Params: [DTMF](https://support.cognigy.com/hc/en-us/articles/360017413959-Audiocodes-Advanced-Configuration#dtmf-0-6)                      | Set Session Config: [DTMF](../ai/build/node-reference/voice/voice-gateway/parameter-details.md) and [DTMF](../ai/build/node-reference/voice/voice-gateway/dtmf.md) |
| [Hang Up](../ai/build/node-reference/voice/generic/hang-up.md)                                                     | [Hang Up](../ai/build/node-reference/voice/audiocodes/hangup.md)                                                                                       | [Hang Up](../ai/build/node-reference/voice/voice-gateway/hangup.md)                                                                                                     |
| [Mute Speech Input](../ai/build/node-reference/voice/generic/mute-speech-input.md)                                 | -                                                                                                                                                      | [Mute Speech Input](../ai/build/node-reference/voice/voice-gateway/mute-speech-input.md)                                                                                |
| [Play URL](../ai/build/node-reference/voice/generic/play-url.md)                                                   | [Play URL](../ai/build/node-reference/voice/audiocodes/play-url.md)                                                                                    | [Play](../ai/build/node-reference/voice/voice-gateway/play.md)                                                                                                          |
| [Send Metadata](../ai/build/node-reference/voice/generic/send-metadata.md)                                         | [Send Metadata](../ai/build/node-reference/voice/audiocodes/send-meta-data.md)                                                                        | [Send Metadata](../ai/build/node-reference/voice/voice-gateway/send-metadata.md)                                                                                       |
| -                                                                                                                  | [Send Message](../ai/build/node-reference/voice/audiocodes/send-message.md)                                                                            | - [^*]                                                                                                                                                                  |
| [Session Speech Parameters - Config](../ai/build/node-reference/voice/generic/session-speech-parameters-config.md) | [Set Session Params](../ai/build/node-reference/voice/audiocodes/set-session-params.md)                                                                | [Set Session Config](../ai/build/node-reference/voice/voice-gateway/set-session-config.md)                                                                              |
| [Transfer](../ai/build/node-reference/voice/generic/transfer.md)                                                   | [Transfer](../ai/build/node-reference/voice/audiocodes/transfer-vg.md)                                                                                 | [Transfer](../ai/build/node-reference/voice/voice-gateway/transfer.md)                                                                                                  |
| [User Input Timeout - Config](../ai/build/node-reference/voice/generic/user-input-timeout-config.md)               | Set Session Params: [User Timeouts](https://support.cognigy.com/hc/en-us/articles/360017413959-Audiocodes-Advanced-Configuration#user-timeouts-0-12)   | Set Session Config: [User Input Timeout](../ai/build/node-reference/voice/voice-gateway/parameter-details.md)                                        |

[^*]: There is no direct replacement for the [Send Message](../ai/build/node-reference/voice/audiocodes/send-message.md) Node. Alternatively, you can use a [Say Node](../ai/build/node-reference/basic/say.md) with the [Voice Gateway Channel](../ai/build/nodes/channels.md#voice-gateway) that supports SSML.

## More Information

- [Generic Voice Nodes](../ai/build/node-reference/voice/generic/overview.md)
- [AudioCodes Nodes](../ai/build/node-reference/voice/audiocodes/overview.md)
- [AudioCodes Endpoint](../ai/deploy/endpoint-reference/audiocodes.md)
- [Voice Gateway Nodes](../ai/build/node-reference/voice/voice-gateway/overview.md)
- [Voice Gateway Endpoint](../ai/deploy/endpoint-reference/voice-gateway.md)