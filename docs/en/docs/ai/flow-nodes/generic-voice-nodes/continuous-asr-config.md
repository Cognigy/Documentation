---
 title: "Continuous ASR - Config" 
 slug: "continuous-asr-config" 
 hidden: false 
---

# Continuous ASR - Config

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/generic-voice-nodes/images/continuous-asr-config.png" width="80%" />
  <figcaption>Generic Continuous ASR - Config Node</figcaption>
</figure>

## Description

<div class="divider"></div>
Continuous ASR enables the Voice Gateway to concatenate multiple STT recognitions of the user and then send them as a single textual message to the bot.
<br/><br/>

When executed, the settings will apply for the remainder of the session.

| Parameter              | Type   | Description                                                                                            |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------ |
| Enable Continuous ASR  | Toggle | Enable or disable Continuous ASR                                                                       |
| Continuous ASR Submit Digit   | CognigyScript   | Defines a special DTMF key, which sends the accumulated recognitions to the flow                       |
| Continuous ASR Timeout | Number | Defines the number of milliseconds of silence before the accumulated recognitions are send to the flow |