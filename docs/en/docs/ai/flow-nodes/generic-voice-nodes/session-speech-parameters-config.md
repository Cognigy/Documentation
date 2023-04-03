---
 title: "Session Speech Parameters Config" 
 slug: "session-speech-parameters-config" 
 hidden: false 
---

# Session Speech Parameters Config

[![Version badge](https://img.shields.io/badge/Updated in-v4.48-blue.svg)](../../../release-notes/release-notes.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/generic-voice-nodes/images/session-speech-parameter-config.png" width="50%" />
  <figcaption>Generic Session Speech Parameters Config Node</figcaption>
</figure>

## Description

<div class="divider"></div>

The **Session Speech Parameters - Config** Node enables the change of speech parameters during the flow.

When executed, the settings will apply for the remainder of the session.

## Synthesizer - Text-To-Speech - Settings

The TTS settings can be chosen from a pre-filled dropdown for Microsoft Azure, AWS, Google, Nuance, or a custom vendor.

| Parameter                  | Type          | Description                                                                                                                                                                                                  |
|----------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TTS Vendor                 | Dropdown      | Defines the desired TTS Vendor.                                                                                                                                                                              |
| TTS Language               | Dropdown      | Defines the language of the Voice virtual agent output.                                                                                                                                                      |
| TTS Voice                  | Dropdown      | Defines the voice that should be used for the Voice virtual agent output.                                                                                                                                    |
| Custom                     | CognigyScript | Allows for choosing a TTS voice, which is not in the dropdown list. This setting can be the case for region-specific voices. The format to use depends on the TTS Vendor, for example, `de-DE-ConradNeural`. |
| Enable Advanced TTS Config | Toggle        | Enables the addition of a URL for an Azure Custom Voice Endpoint.                                                                                                                                            |

## Recognizer - Speech-To-Text - Settings

The STT settings can be chosen from a pre-filled dropdown  for Microsoft Azure, AWS, Google, Nuance, Soniox, or a custom vendor.

| Parameter                       | Type          | Description                                                                                                                                                          |
|---------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| STT Vendor                      | Dropdown      | Defines the desired STT Vendor.                                                                                                                                      |
| STT Language                    | Dropdown      | Defines the language that should be recognized.                                                                                                                      |
| STT Hints                       | Text          | Array of words or phrases to assist speech detection. <br> Note: This requires support from the STT engine. The field is not available for the Nuance speech vendor. |
| Dynamic Hints                   | CognigyScript | Uses context or input for adding array hints. For example, <code>&lcub;&lcub;context.hints&rcub;&rcub;</code> or <code>&lcub;&lcub;input.hints&rcub;&rcub;</code>.   |
| Enable Voice Activity Detection | Toggle        | Delays connection to cloud recognizer until the speech is detected.                                                                                                  |
| Disable STT Punctuation         | Toggle        | Prevents the STT response from the virtual agent to include punctuation marks.                                                                                       |
| Enable Advanced TTS Config      | Toggle        | Enables the addition of an ID for an Azure's Custom Speech model deployment.                                                                                         |
| Enable Audio Logging            | Toggle        | Enables recording and logging of audio from the user on Azure.                                                                                                       |
