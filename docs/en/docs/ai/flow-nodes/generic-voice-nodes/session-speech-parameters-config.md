---
 title: "Session Speech Parameters Config" 
 slug: "session-speech-parameters-config" 
 hidden: false 
---

# Session Speech Parameters Config

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/generic-voice-nodes/images/session-speech-parameter-config.png" width="80%" />
  <figcaption>Generic Session Speech Parameters Config Node</figcaption>
</figure>

## Description

<div class="divider"></div>
The Session Speech Parameters - Config Node enables the change of speech parameters during the flow.
<br/><br/>
When executed, the settings will apply for the remainder of the session.
<br/><br/>

**Synthesizer - Text-To-Speech - Settings**

The TTS settings can be chosen from a pre-filled dropdown for Microsoft Azure, AWS Polly and Google.

| Parameter    | Type     | Description                                                                                                                                                                                                       |
|--------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TTS Vendor   | Dropdown | Select the desired TTS Vendor                                                                                                                                                                                     |
| TTS Language | Dropdown | Defines the language of the Voice Bot output                                                                                                                                                                      |
| TTS Voice    | Dropdown | Defines the voice that should be used for the Voice Bot output                                                                                                                                                    |
| Custom       | Text     | The custom fields can be used to choose a TTS voice, which is not in the dropdown list. This can be the case for region specific voices. The format to use is depending on the TTS Vendor e.g. de-DE-ConradNeural |
<br/><br/>

**Recognizer - Speech-To-Text - Settings**

The STT settings can be chosen from a pre-filled dropdown for Microsoft Azure, AWS and Google.

| Parameter               | Type     | Description                                                                                           |
|-------------------------|----------|-------------------------------------------------------------------------------------------------------|
| STT Vendor              | Dropdown | Select the desired STT Vendor                                                                         |
| STT Language            | Dropdown | Defines the language that should be recognized                                                        |
| STT Hints               | Text     | Array of words or phrases to assist speech detection. Note: This requires support from the STT engine |
| Disable STT Punctuation | Toggle   | Prevents the STT response from the bot to include punctuation marks                                   |