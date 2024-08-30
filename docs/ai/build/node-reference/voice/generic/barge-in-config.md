---
 title: "Barge In - Config" 
 slug: "transfer" 
 hidden: false 
---

# Barge In - Config

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/generic-voice/barge-in-config.png" width="80%" />
  <figcaption>Generic Barge In - Config Node</figcaption>
</figure>

## Description

{! _includes/ai/node-reference/voice/ac-and-generic-node-deprecation.md!}

The Barge In - Config Node is a session config that enables the interruption of the voice agent.

When executed, the settings will apply for the remainder of the session.

| Parameter                | Type          | Description                                                                                                                                    |
|--------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Barge In On Speech       | Toggle        | Enables to interrupt the voice agent with speech.                                                                                              |
| Barge In Minimum Words   | Slider        | Defines the minimum number of words that the user must say for the Voice Gateway to consider it a barge in                                     |
| Barge In On DTMF         | Toggle        | Enables to interrupt the voice agent with DTMF digits. Capturing of DTMF signals is enabled by default                                         |
| DTMF Inter Digit Timeout | Number        | Defines the timeout in between collected DTMF digits                                                                                           |
| DTMF Max Digits          | Number        | Defines the maximum number of digits which can be entered by the user, the digits are being submitted automatically once this limit is reached |                      |
| DTMF Submit Digit        | CognigyScript | Defines the DTMF submit digit which will be used for submitting the previously entered digits. This overrides the minimum digits validation    |