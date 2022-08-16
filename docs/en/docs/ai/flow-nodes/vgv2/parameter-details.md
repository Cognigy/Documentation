---
 title: "Parameter Details" 
 slug: "parameter-details" 
 hidden: true 
---

# VoiceGateway Parameter Details

<div class="divider"></div>

Cognigy VoiceGateway comes with a large number of configuration settings which can be controlled directly from within your Cognigy Flow. These settings can be applied individually to two scopes:

**Setting Session Parameters**

Session parameters can comfortably be set with the "Set Session Config" Node. When executed, the settings will apply for the remainder of the session.

**Setting Activity Parameters**

Activity parameters can be set per activity/node. If for example barge in is set on the _Play Node_, barge in will only be activated during the execution of this node. Therefore, the user will be able to interrupt the bot during this output, but not afterwards.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/vgv2-session-activity-parameters.png" width="80%" />
  <figcaption>VoiceGateway Session and Activity Parameters</figcaption>
</figure>

## Overview

<div class="divider"></div>

**Synthesizer - Text-To-Speech - Settings**

The TTS settings can be chosen from a pre-filled dropdown for Microsoft Azure, AWS and Google.

| Parameter    | Type     | Description                                                                                                                                                                                                       |
| ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TTS Vendor   | Dropdown | Select the desired TTS Vendor                                                                                                                                                                                     |
| TTS Language | Dropdown | Defines the language of the Voice Bot output                                                                                                                                                                      |
| TTS Voice    | Dropdown | Defines the voice that should be used for the Voice Bot output                                                                                                                                                    |
| Custom       | Text     | The custom fields can be used to choose a TTS voice, which is not in the dropdown list. This can be the case for region specific voices. The format to use is depending on the TTS Vendor e.g. de-DE-ConradNeural |

**Recognizer - Speech-To-Text - Settings**

The STT settings can be chosen from a pre-filled dropdown for Microsoft Azure, AWS and Google.

| Parameter                       | Type     | Description                                                                        |
| ------------------------------- | -------- | ---------------------------------------------------------------------------------- |
| STT Vendor                      | Dropdown | Select the desired STT Vendor                                                      |
| STT Language                    | Dropdown | Defines the language that should be recognized                                     |
| STT Hints                       | Text     | Array of words or phrases to assist speech detection                               |
| Enable Voice Activity Detection | Toggle   | Delay connection to cloud recognizer until speech is detected                      |
| VAD Sensitivity                 | Slider   | Detection sensitivity, the lowest value has the highest sensitivity                |
| Minimal Voice Duration          | Slider   | Milliseconds of speech activity required before connecting to the cloud recognizer |

**Barge In**

Barge In enables the interruption of the bot.

| Parameter              | Type   | Description                                                                                                |
| ---------------------- | ------ | ---------------------------------------------------------------------------------------------------------- |
| Barge In On Speech     | Toggle | Select the desired STT Vendor                                                                              |
| Barge In On DTMF       | Toggle | Defines the language that should be recognized. DTMF collection must be activated for this                 |
| Barge In Minimum Words | Slider | Defines the minimum number of words that the user must say for the Voice Gateway to consider it a barge in |

**User Input Timeout**

Defines what should happen when there is no input from the user.

| Parameter             | Type     | Description                                                                                   |
| --------------------- | -------- | --------------------------------------------------------------------------------------------- |
| User No Input Mode    | Dropdown | Define the action if a user does not provide input to the bot in time                         |
| User No Input Timeout | Number   | Define the timeout for user input in ms                                                       |
| User No Input Retries | Number   | Defines how often the bot should retry to get an input from a user before completing the call |

**DTMF**

Enables DTMF collection.

| Parameter                | Type   | Description                                                                                                                                    |
| ------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Capture DTMF signals     | Toggle | Enables capturing of DTMF signals by the bot                                                                                                   |
| DTMF Inter Digit Timeout | Number | Define the timeout for user input in ms                                                                                                        |
| DTMF Max Digits          | Number | Defines the maximum number of digits which can be entered by the user, the digits are being submitted automatically once this limit is reached |
| DTMF Min Digits          | Number | Defines the mininum number of digits before they are forwarded to the bot. This can be overridden by a submit digit                            |
| DTMF Submit Digit        | Text   | Defines the DTMF submit digit which will be used for submitting the previously entered digits. This overrides the minimum digits validation    |

**Continuous ASR**

Continuous ASR enables the Voice Gateway to concatenate multiple STT recognitions of the user and then send them as a single textual message to the bot.

| Parameter              | Type   | Description                                                                                            |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------ |
| Enable Continuous ASR  | Toggle | Enable or disable Continuous ASR                                                                       |
| Continuous ASR Digit   | Text   | Defines a special DTMF key, which sends the accumulated recognitions to the flow                       |
| Continuous ASR Timeout | Number | Defines the number of milliseconds of silence before the accumulated recognitions are send to the flow |

## VoiceGateway Index

- [Cognigy VoiceGateway Endpoint Overview ]({{config.site_url}}ai/endpoints/cognigy-vgv2/)
- [VoiceGateway Nodes Overview]({{config.site_url}}ai/flow-nodes/vgv2/voice-gateway/)
- [DTMF Node]({{config.site_url}}ai/flow-nodes/vgv2/dtmf/)
- [Hang Up Node]({{config.site_url}}ai/flow-nodes/vgv2/hangup/)
- [Parameter Details]({{config.site_url}}ai/flow-nodes/vgv2/parameter-details/)
- [Play Node]({{config.site_url}}ai/flow-nodes/vgv2/play/)
- [Send Metadata Node]({{config.site_url}}ai/flow-nodes/vgv2/send-metadata/)
- [Set Session Config Node]({{config.site_url}}ai/flow-nodes/vgv2/set-session-config/)
- [Transfer Node]({{config.site_url}}ai/flow-nodes/vgv2/transfer/)
