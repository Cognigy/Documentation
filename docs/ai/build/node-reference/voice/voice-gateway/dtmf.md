---
title: "DTMF" 
slug: "dtmf"
description: "A Voice Gateway DTMF Node sends RTP payloads to the caller's SIP provider to play DTMF digit tones to the caller. If the caller's SIP provider supports RTP payloads according to [RFC 2833](https://datatracker.ietf.org/doc/html/rfc2833), the customer will hear the voice tones of the DTMF digits. The Node can also be used in scenarios where it confirms digit entries by playing back the corresponding DTMF tones."
hidden: false
tags:
  - Voice Gateway
  - DTMF
  - dtmf
---

# DTMF

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/vg/dtmf.png" width="80%" />
  <figcaption>Voice Gateway DTMF Node</figcaption>
</figure>

## Description

The DTMF Node sends RTP payloads to the caller's SIP provider to play DTMF digit tones to the caller. If the caller's SIP provider supports RTP payloads according to [RFC 2833](https://datatracker.ietf.org/doc/html/rfc2833), the customer will hear the voice tones of the DTMF digits.

This Node is useful when paired with a [Handover to Agent](../../service/handover-to-agent.md) Node or a [Transfer](../generic/transfer.md) Node.
By playing the DTMF digit tones,
the DTMF Node informs the caller
that they are being transferred to another agent — either a voice AI Agent or a human agent in a contact center.

The Node can also be used in combination with DTMF input
(the **Capture DTMF Signals** parameter in the [Set Session Config](set-session-config.md) Node) to provide feedback on the caller's input.
For example, after a caller enters digits, the system plays back the corresponding DTMF tones for each digit entered to confirm the input.

## Settings

| Parameter       | Type   | Description                                                                                                                                                          |
|-----------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Digits sequence | Text   | Specifies the sequence of digits to be played to the caller. The sequence of digits can be a telephone extension code or the number for the customer service center. |
| Pause time      | Slider | Specifies the pause length in milliseconds (ms), between each individual DTMF digit tone. The default value is 500 ms.                                               |

## Example

Consider the example
where a company provides an option
for customers to order equipment by leaving a voice message with the details
or to get assistance with equipment they have already received.
An AI Agent guides the customer through this process using DTMF digit tones.

To build a flow with the DTMF Node, either add a new Flow or extend an existing one, then follow these steps:

1. In the Flow editor, click **+** and select **Extensions > VG**. 
2. Create a new Node by selecting **Set Session Config** from the list. The Node appears in the Flow editor. 
3. Left-click the **Set Session Config** Node to open the Node editor. 
4. In the Node editor, go to the **DTMF** section. Activate the **Capture DTMF Signals** setting and remove `#` from the **DTMF Submit Digit** field. 
5. Click **Save** Node. 
6. Below the Set Session Config Node, add a Question Node.<br>
7. In the Question Node editor, configure the following settings:<br>
    1. From the **Question Type** list, select **Number**.<br>
    2. From the **Output Type** list, select **Text**.<br>
    3. In the **Text** field, enter the following sentence:`Hello! Welcome to our Support. We can help you with your equipment needs. If you want to place an order for equipment, press 1. If you have already received your equipment and need help with setup or are experiencing issues, press 2.`<br>
    4. Click **Save Node**.<br>
8. Below the Question Node, add a Lookup Node. 
9. In the Lookup Node editor, select the **Text** type and click **Save Node**. 
10. Configure the logic in the branch for the first **Case** Node:<br>
    1. Click the **Case** Node. In the **Value** field, specify `1`, then click **Save Node**.<br>
    2. Below the **Case** Node, add a Say Node. In the Say Node editor, go to the **Text** field and in specify the following sentence: `After the signal, please leave a voice message with the information about the equipment you wish to order, and we will call you back`.<br> 
    3. Click **Save Node**.<br> 
    4. Below the Say Node, add a DTMF Node. Specify `1` in the **Digit Sequence** field to correspond the tone to the dial number that the caller presses.<br> 
    5. Click **Save Node**.<br>
    6. After that, you can add a **Call Recording** Node to record the caller speech.<br>
11. Configure the logic in the branch for the second **Case** Node:<br>
    1. Click the second **Case** Node. In the **Value** field, specify `2`.<br> 
    2. Below the second **Case** Node, add a Say Node. In the Say Node editor, go to the **Text** field and in specify the following sentence: `After the signal, you will be transferred to a contact center`.<br>
    3. Click **Save Node**.<br>
    4. Below the second Say Node, add another DTMF Node. Specify `2` in the **Digit Sequence** field to correspond the tone to the dial number that the caller presses.<br>
    5. Click **Save Node**.<br>
    6. After that, you can add a **Handover to Agent** Node to route the caller to the contact center.

    <figure>
      <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/vg/dtmf-example.png" width="100%" />
    </figure>

Test your Flow via the Interaction Panel. Use the [Voice Call](../../../../test/interaction-panel/overview.md#voice-call) setting.

## More Information

- [DTMF Parameter](parameter-details.md#dtmf)
- [DTMF Verb](../../../../../voice-gateway/references/verbs/dtmf.md)
- [DTMF Collect Config](../generic/dtmf-collect-config.md)