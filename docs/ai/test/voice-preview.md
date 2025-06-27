---
title: "Voice Preview" 
slug: "voice-preview"
description: "The Voice Preview feature lets users quickly test their voice output without going through the entire flow with a mock call. It supports cloud speech-to-text and text-to-speech services from providers such as Google, Microsoft, and Amazon AWS."
hidden: true 
---

# Voice Preview

The _Voice Preview_ feature lets users quickly test their AI Agents' voice output in the [Flow editor](../build/flows/editor.md) or [Interaction Panel](interaction-panel/overview.md) without going through the entire [Flow](../build/flows/overview.md) with a mock call. This feature supports cloud speech-to-text (STT) and text-to-speech (TTS) services. To use the Voice Preview, you need to enter text or SSML syntax, and select the language and voice.

## Restrictions

- The Voice Preview feature supports only the Google, Microsoft, Amazon AWS, and Deepgram speech providers. When testing a voice Flow through the Interaction Panel, you should check the STT and TTS settings of the voice Nodes to ensure that one of these providers is specified. If any other provider, such as Evenlabs, is specified in the Nodes, the Interaction Panel won't support the voice conversation.
- To use SSML syntax in the Voice Preview, the speech provider must support SSML syntax.

## Access STT and TTS Providers
    
If your environment has network connection restrictions or requires strict security rules, make sure that both STT and TTS providers are accessible. Add the IP address ranges of your STT and TTS providers to the firewall's whitelist. This approach ensures the Cognigy.AI server can interact smoothly with both providers, guaranteeing the expected functionality of the Voice Preview feature.

## How to Use Voice Preview

### Set up a Speech Provider

To set up a speech provider and test your voice agents, follow these steps:

{! _includes/ai/voice-providers.md !}

### Use Voice Preview

You can access the Voice Preview feature in two different ways:

- In the Flow editor, click ![voice-preview](../../_assets/icons/voice-preview.svg).
- In the Interaction Panel, hover over the AI Agent message in the chat and click ![voice-preview](../../_assets/icons/voice-preview.svg) in the interactive tooltip. The Voice Preview button is displayed only for certain types of output, including regular text output, fallback text, and text or SSML output from channels that support voice.

## More Information

- [Interaction Panel](interaction-panel/overview.md)
- [Voice Gateway](../../voice-gateway/index.md)
- [Voice Nodes](../build/node-reference/voice/overview.md)
