---
title: "Mute Speech Input"
slug: "mute-speech-input"
description: "The Voice Gateway Mute Speech Input Node allows you to control when speech input is collected in your Flow, preventing interruptions and ensuring a smoother conversation experience, especially in xApp Flows. By enabling or disabling speech gathering as needed, you can maintain better control and create a seamless workflow in your application."
hidden: false
tags:
  - Voice Gateway
  - Mute
---

# Mute Speech Input

[![Version badge](https://img.shields.io/badge/Updated in-v4.61-blue.svg)](../../../../../release-notes/4.61.md)

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/vg/mute-speech-input.png" width="50%" />
</figure>

## Description

This Node controls when speech and Dual-Tone Multi-Frequency (DTMF) user inputs can be collected in your Flow.
It prevents speech and DTMF interruptions in specific cases, such as [xApp Flows](https://docs.cognigy.com/ai/xApp/overview/), allowing for a smoother conversation experience.
By enabling or disabling parameters in this Node as needed,
you can maintain better control and ensure a seamless workflow in your application.

## Parameters

!!! warning
    Do not turn off a speech user input throughout the call to receive additional messages from the user,
    especially when the AI Agent needs to send multiple messages with time gaps in between.

| Parameter         | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|-------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mute Speech Input | Toggle | Disables speech input recognition for the current call. By default, the parameter is deactivated, allowing the Nodes below the Mute Speech Input Node to accept speech inputs.<br><br>When this parameter is activated, the Nodes below the Mute Speech Input Node don't accept speech inputs or digits as the answer. It affects all speech inputs made through the following Nodes:<ul><li>Nodes with Set Activity Parameters</li><li>Say and Play Nodes with enabled barge-in can no longer be interrupted</li><li>Question and Optional Question Nodes</li></ul> |
| Mute DTMF Input   | Toggle | Disables DTMF input recognition for the current call. By default, this parameter is deactivated, allowing the Nodes below the Mute Input Node to accept DTMF inputs.<br><br>When this parameter is activated, the Nodes below the Mute DTMF Input Node don't accept DTMF inputs. This parameter affects all DTMF inputs made through the following Nodes:<ul><li>Nodes with Set Activity Parameters</li><li>DTMF and Play Nodes with the enabled DTMF parameter can no longer be interrupted</li></ul>                                                               |

## Examples

??? info "Mute Speech Input Example"

    You can control when speech input is accepted or not in the Flow:

    1. Say Node: `Hello, you will receive an xApp`.
    2. xApp: Init Session Node.
    3. Mute Speech Input (enabled).
    4. Question Node: `Please rate your experience with the xApp on a scale of 1 to 5`.<br>When the Mute Node STT is enabled, the Question Node will not accept speech inputs or digits as the answer. The user must provide the rating through other means, such as selecting a number using buttons or typing the response. This process ensures that the speech gathering is temporarily turned off during the rating question to avoid unintended interference from background speech.
    5. Mute Node STT (disabled).
    
    After the rating question, the Mute Node STT is disabled, allowing the subsequent Nodes to accept speech inputs normally.

??? info "Mute DTMF Input Example"

    You can control when DTMF input is accepted or not in the Flow:

    1. Say Node: `Welcome to the interactive menu`.
    2. xApp: Init Session Node.
    3. Mute DTMF Input (enabled).
    4. Question Node: `Please select an option from the menu using your keypad`. <br>When the Mute DTMF Input Node is enabled, the Question Node will not accept DTMF inputs. Users must interact with the menu using other means, such as speech recognition or selecting options through buttons or touchscreen. This prevents unintended DTMF input interference while speech recognition or other input methods are active.
    5. Mute DTMF Input (disabled).

    After the menu interaction, the Mute DTMF Input Node is disabled, allowing subsequent Nodes to accept DTMF inputs normally.

## More Information

- [Generic Mute Speech Input Node](../generic//mute-speech-input.md)
- [xApps](../../xApp/overview.md)
- [xApp Nodes](../../xApp/overview.md)