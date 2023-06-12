---
 title: "Parameter Details" 
 slug: "parameter-details" 
 hidden: true 
---

# Voice Gateway Parameter Details

Cognigy Voice Gateway has many configuration settings that are controlled directly from within your Flow. These settings can be applied individually to the scopes:

- **Setting Session Parameters**. Session parameters can comfortably be set with the [Set Session Config](set-session-config.md) Node. When executed, the settings will apply for the remainder of the session.
- **Setting Activity Parameters**. Activity parameters can be set per activity/node. If, for example, barge-in is set on the [Play](play.md) Node, barge-in will only be activated during the execution of this Node. Therefore, the user can interrupt the virtual agent during this output but not afterward. These configurations are also available in the [Say](../message/say.md), [Question](../message/question.md), and [Optional Question](../message/optional-question.md) Nodes.

## Settings

<div class="divider"></div>

### Synthesizer - Text-To-Speech

The TTS settings can be chosen from a pre-filled dropdown for Microsoft Azure, AWS, Google, Nuance, or a custom vendor.

| Parameter                  | Type          | Description                                                                                                                                                                                                  |
|----------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TTS Vendor                 | Dropdown      | Defines the desired TTS Vendor.                                                                                                                                                                              |
| TTS Language               | Dropdown      | Defines the language of the Voice virtual agent output.                                                                                                                                                      |
| TTS Voice                  | Dropdown      | Defines the voice that should be used for the Voice virtual agent output.                                                                                                                                    |
| Custom                     | CognigyScript | Allows for choosing a TTS voice, which is not in the dropdown list. This setting can be the case for region-specific voices. The format to use depends on the TTS Vendor, for example, `de-DE-ConradNeural`. |
| Enable Advanced TTS Config | Toggle        | Enables the addition of a URL for an Azure Custom Voice Endpoint.                                                                                                                                            |

### Recognizer - Speech-To-Text

[![Version badge](https://img.shields.io/badge/Updated in-v4.48-blue.svg)](../../../release-notes/4.48.md)

The STT settings can be chosen from a pre-filled dropdown for Microsoft Azure, AWS, Google, Nuance, Soniox, or a custom vendor.

| Parameter                       | Type          | Description                                                                                                                                                                                                                                                          |
|---------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| STT Vendor                      | Dropdown      | Defines the desired STT Vendor.                                                                                                                                                                                                                                      |
| STT Language                    | Dropdown      | Defines the language that should be recognized.                                                                                                                                                                                                                      |
| STT Hints                       | Text          | Array of words or phrases to assist speech detection. <br> Note: This requires support from the STT engine. The field is not available for the Nuance speech vendor.                                                                                                 |
| Dynamic Hints                   | CognigyScript | Uses context or input for adding array hints. For example, <code>&lcub;&lcub;context.hints&rcub;&rcub;</code> or <code>&lcub;&lcub;input.hints&rcub;&rcub;</code>. You can override these settings using [Advanced parameters](#advanced).                           |
| Enable Voice Activity Detection | Toggle        | Delays connection to cloud recognizer until the speech is detected.                                                                                                                                                                                                  |
| VAD Sensitivity                 | Slider        | Detection sensitivity, the lowest value has the highest sensitivity.                                                                                                                                                                                                 |
| Minimal Voice Duration          | Slider        | Milliseconds of speech activity required before connecting to the cloud recognizer.                                                                                                                                                                                  |
| Disable STT Punctuation         | Toggle        | Prevents the STT response from the virtual agent to include punctuation marks.                                                                                                                                                                                       |
| Enable Advanced TTS Config      | Toggle        | Enables the addition of an ID for an Azure's Custom Speech model deployment.                                                                                                                                                                                         |
| Enable Audio Logging            | Toggle        | Enables recording and logging of audio from the user on Azure.                                                                                                                                                                                                       |
| Recognize Language              | Toggle        | Enables the addition of alternative languages for recognition. You can select at least 3 languages. To reuse these languages in other Nodes, such as the child Nodes of the [Lookup](../logic/lookup.md) Node,  use the following format: `de-DE`, `fr-FR`, `en-US`. |

### Barge In

Barge In enables the interruption of the virtual agent.

| Parameter              | Type   | Description                                                                                                 |
|------------------------|--------|-------------------------------------------------------------------------------------------------------------|
| Barge In On Speech     | Toggle | Enables interrupting the virtual agent with speech.                                                         |
| Barge In On DTMF       | Toggle | Enables interrupting the virtual agent with DTMF digits.                                                    |
| Barge In Minimum Words | Slider | Defines the minimum number of words that the user must say for the Voice Gateway to consider it a barge-in. |

### User Input Timeout

Defines what should happen when there is no input from the user.

| Parameter             | Type     | Description                                                                                              |
|-----------------------|----------|----------------------------------------------------------------------------------------------------------|
| User No Input Mode    | Dropdown | Defines the action if a user does not provide an input to the virtual agent in time.                     |
| User No Input Timeout | Number   | Defines the timeout for user input in ms.                                                                |
| User No Input Retries | Number   | Defines how often the virtual agent should retry to get an input from a user before completing the call. |

### DTMF

Enables DTMF collection.

| Parameter                | Type          | Description                                                                                                                                     |
|--------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Capture DTMF signals     | Toggle        | Enables capturing DTMF signals by the virtual agent.                                                                                            |
| DTMF Inter Digit Timeout | Number        | Defines the timeout between collected DTMF digits.                                                                                              |
| DTMF Max Digits          | Number        | Defines the maximum number of digits the user can enter. The digits are submitted automatically once this limit is reached.                     |
| DTMF Min Digits          | Number        | Defines the minimum number of digits before they are forwarded to the virtual agent. A submit digit can override this.                          |
| DTMF Submit Digit        | CognigyScript | Defines the DTMF submit digit, which is used for submitting the previously entered digits. This action overrides the minimum digits validation. |

### Continuous ASR

Continuous ASR enables the Voice Gateway to concatenate multiple STT recognitions of the user and then send them as a single textual message to the virtual agent.

| Parameter                   | Type          | Description                                                                                             |
|-----------------------------|---------------|---------------------------------------------------------------------------------------------------------|
| Enable Continuous ASR       | Toggle        | Enable or disable Continuous ASR.                                                                       |
| Continuous ASR Submit Digit | CognigyScript | Defines a special DTMF key, which sends the accumulated recognitions to the flow.                       |
| Continuous ASR Timeout      | Number        | Defines the number of milliseconds of silence before the accumulated recognitions are sent to the flow. |

### Advanced

[![Version badge](https://img.shields.io/badge/Added in-v4.48-blue.svg)](../../../release-notes/4.48.md)

| Parameter                     | Type | Description                                                                                                                                                                                                                                                     |
|-------------------------------|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Additional Session Parameters | JSON | Allows for configuring settings using JSON. If you have already made changes using the UI settings above, this field will overwrite them. Also, you can specify additional parameters in the JSON, which are unavailable in the UI, such as vendor credentials. | 

JSON example:

```json
{
  "synthesizer": {
    "vendor": "microsoft",
    "language": "de-DE""voice": "en-US-JennyNeural"
  },
  "recognizer": {
    "vendor": "google",
    "language": "de-DE",
    "hints": [
      "help",
      "skip",
      "confirm"
    ],
    "hintBoost": 20
  }
}
```
