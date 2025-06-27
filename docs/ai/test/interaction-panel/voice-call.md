---
title: "Voice Call"
slug: "voice-call"
description: "The Interaction Panel's voice call mode allows you to test voice AI Agents."
hidden: false
tags:
    - voice testing
    - call monitoring
    - call duration
    - interaction panel
---

# Voice Call

With _Voice Call_ mode, you can initiate a test call to hear how your voice AI Agent sounds.

## Prerequisites

- Activate voice call:
    - For SaaS installations, contact the support team to activate the feature.
    - For on-premises installations, activate the feature by adding `FEATURE_ENABLE_VOICECALL_WHITELIST` in `values.yaml` and assigning the corresponding organization IDs. For example, `FEATURE_ENABLE_VOICECALL_WHITELIST:<organization-1-id>,<organization-2-id>`. For all organizations, use `*`.
- Configure a voice provider in the Project's [Voice Preview Settings](../../test/voice-preview.md#set-up-a-speech-provider) and the AI Agent's [voice and language](overview.md).
- Allow microphone access in your browser, and then in your device settings if needed.

## How to Use Voice Call Mode

To start a test call with the AI Agent, click the ![voice-call](../../../_assets/icons/voice-call-interaction-panel.svg) tab in the Interaction Panel and click ![start-call](../../../_assets/icons/start-voice-call.svg) at the bottom. To end the call, click ![end-call](../../../_assets/icons/end-voice-call.svg).

During a call, you can:

- **Monitor the call duration**. The timer displayed next to the ![end-call](../../../_assets/icons/end-voice-call.svg) button shows how long the call has been active.
- **Send DTMF tones**. Click ![dialpad](../../../_assets/icons/dialpad.svg) to open a dialpad and send touch-tone (DTMF) signals during the call. With the dialpad, you can enter codes or navigate menus during a call.
- **Follow the conversation**. View the real-time conversation transcript in the Interaction Panel to track the call.

Voice call mode has a timeout. If you don't provide any voice input for a period, the call ends automatically to prevent unnecessary connection time.

To view and analyze the payload of a voice input, click ![expand](../../../_assets/icons/expand.svg) indicated in the message fields.

## More Information

- [Voice Gateway Nodes](../../build/node-reference/voice/voice-gateway/overview.md)
- [Voice Preview](../../test/voice-preview.md)
- [Voice Gateway](../../../voice-gateway/overview.md)