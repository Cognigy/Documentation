---
 title: "DTMF Collect - Config" 
 slug: "dtmf-collect-config" 
 hidden: false 
---

# CDTMF Collect - Config

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/generic-voice-nodes/images/dtmf-collect-config.png" width="80%" />
  <figcaption>Generic DTMF Collect - Config Node</figcaption>
</figure>

## Description

<div class="divider"></div>
Enables capturing of DTMF signals by the bot during the entire call session.
<br/><br/>
When executed, the settings will apply for the remainder of the session.
<br/><br/>

| Parameter                | Type   | Description                                                                                                                                    |
| ------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Capture DTMF signals     | Toggle | Enables capturing of DTMF signals by the bot                                                                                                   |
| DTMF Inter Digit Timeout | Number | Defines the timeout in between collected DTMF digits                                                                                                        |
| DTMF Max Digits          | Number | Defines the maximum number of digits which can be entered by the user, the digits are being submitted automatically once this limit is reached |                         |
| DTMF Submit Digit        | CognigyScript   | Defines the DTMF submit digit which will be used for submitting the previously entered digits. This overrides the minimum digits validation    |


