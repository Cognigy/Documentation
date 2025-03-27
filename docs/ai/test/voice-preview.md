---
title: "Voice Preview" 
slug: "voice-preview"
description: "The Voice Preview feature lets users quickly test their voice output without going through the entire flow with a mock call. It supports cloud speech-to-text and text-to-speech services from providers such as Google, Microsoft, and Amazon AWS."
hidden: true 
---

# Voice Preview

[![Version badge](https://img.shields.io/badge/Updated in-v4.97.1-blue.svg)](../../release-notes/4.97.md)

The _Voice Preview_ feature lets
users quickly test their voice output without going through the entire flow with a mock call.
It supports cloud speech-to-text and text-to-speech services from providers such as Google, Microsoft, and Amazon AWS.
To use this feature, you need to input raw text or SSML syntax, select the language and voice.
However, note that the SSML syntax must be supported by the chosen Voice Preview provider.

## Prerequisites

- Allow microphone access in your browser, and then in your device settings if needed.

## Restrictions

- Only Google, Microsoft, Amazon AWS, and Deepgram speech providers support the Voice Preview feature. When testing a voice Flow through the Interaction Panel, you should check the STT and TTS settings of the voice Nodes to ensure that one of these providers is specified. If any other provider, such as Evenlabs, is specified in the Nodes, the Interaction Panel won't support the voice conversation.
- The voice preview feature doesn't support SSML for Deepgram.

## Access STT and TTS Providers
    
If your environment has network connection restrictions or requires strict security rules, make sure both Speech-to-Text (STT) and Text-to-Speech (TTS) providers are accessible. Add the IP address ranges of your STT and TTS providers to the firewall's whitelist. By doing so, the Cognigy.AI server can interact smoothly with both providers, guaranteeing the expected functionality of the Voice Preview feature.

## Set up a Voice Preview Provider

To set up a voice provider to test your voice agents, follow these steps:

{! _includes/ai/voice-providers.md !}

### Use Voice Preview

You can access the Voice Preview feature in three different ways:

- Use the hotkey ++ctrl+alt+p++ or ++cmd+opt+p++ in the Flow editor to open the Voice Panel.
- Click the **Voice Preview** ![voice-preview](../../_assets/icons/voice-preview.svg) button from the Flow editor.
- Click the **Voice Preview** ![voice-preview](../../_assets/icons/voice-preview.svg) button in the interactive tooltip of a message output within the Interaction Panel. This action will copy the output text to the Voice Preview input field. The Voice Preview button displays for certain types of output, including regular text output, fallback text, and text or SSML output from channels that support voice.

## More Information

- [Interaction Panel](interaction-panel/overview.md)
- [Voice Gateway](../../voice-gateway/index.md)
- [Voice Nodes](../build/node-reference/voice/overview.md)
