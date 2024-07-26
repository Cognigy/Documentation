---
 title: "DTMF" 
 slug: "dtmf" 
 hidden: false 
---
# DTMF

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/vg/dtmf.png" width="80%" />
  <figcaption>Voice Gateway DTMF Node</figcaption>
</figure>

## Description

The DTMF Node plays the DTMF digit tones to the caller.

This Node is useful when paired with a [Handover To Agent](../../service/handover-to-agent.md) Node or a [Transfer](../generic/transfer.md) Node. By playing the DTMF digit tones, the DTMF Node informs the caller that they are transferred to another agent - either a voice AI Agent, or a human agent in a contact center.

| Parameter       | Type   | Description                                                                                                                                                           |
|-----------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Digits sequence | Text   | Specifies the digits sequence to play to the caller. The Digits sequence can be, for example, a telephone extension code or the number to the customer service center |
| Pause time      | Slider | Specifies the pause length in milliseconds between each individual DTMF digit tone. The default value is 500 ms                                                       |