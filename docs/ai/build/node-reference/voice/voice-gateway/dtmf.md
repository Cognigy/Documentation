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

This Node is useful when paired with a [Handover to Agent](../../service/handover-to-agent.md) Node or a [Transfer](../generic/transfer.md) Node. By playing the DTMF digit tones, the DTMF Node informs the caller that they are transferred to another agent - either a voice AI Agent or a human agent in a contact center.

## Settings

| Parameter       | Type   | Description                                                                                                                                                           |
|-----------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Digits sequence | Text   | Specifies the sequence of digits to be played to the caller. The sequence of digits can be a telephone extension code or the number for the customer service center. |
| Pause time      | Slider | Specifies the pause length in milliseconds (ms), between each individual DTMF digit tone. The default value is 500 ms. |

## Example

To build a Flow using the DTMF Node, follow these steps:

1. In your Cognigy AI Project, open your Voice Gateway Flow.
2. In the Flow editor, add a DTMF Node.
3. In the DTMF Node editor, enter the required values: 
   - For the Digits sequence, specify the number to your customer service center hotline, or an extension code to a human agent. 
   - For the Pause time, specify the pause length between each digit tone in milliseconds.
4. Click **Save**.
5. Make a test call to Voice Gateway to test your Flow.