---
title: "Voice Preview" 
slug: "voice-preview" 
hidden: true 
---

# Voice Preview

The _Voice Preview_ feature lets
users quickly test their voice output without going through the entire flow with a mock call.
It supports cloud speech-to-text and text-to-speech services from providers such as Google, Microsoft, and Amazon AWS.
To use this feature, you need to input raw text or SSML syntax, select the language and voice.
However, note that the SSML syntax must be supported by the chosen Voice Preview provider.

!!! note "Access STT and TTS Providers"
    If your environment has network connection restrictions or requires strict security rules, make sure both Speech-to-Text (STT) and Text-to-Speech (TTS) providers are accessible. Add the IP address ranges of your STT and TTS providers to the firewall's whitelist. By doing so, the Cognigy.AI server can interact smoothly with both providers, guaranteeing the expected functionality of the Voice Preview feature.

### Set up a Voice Preview Provider

To set up a voice provider to test your voice agents, follow these steps:

{! _includes/ai/voice-providers.md !}

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/voice/voice-preview-settings.png" width="100%" />
  <figcaption>Voice Preview Settings</figcaption>
</figure>

### Use Voice Preview

You can use the Voice Preview from 3 different places:

1. With the hotkey ++ctrl+alt+p++ or ++cmd+opt+p++.

    <figure>
      <img class="image-center" src="../../../../_assets/ai/test/voice/voice-preview-panel.png" width="100%" />
      <figcaption>Voice Preview panel</figcaption>
    </figure>

2. Click on the Voice Preview icon from the Flow editor.

    <figure>
      <img class="image-center" src="../../../../_assets/ai/test/voice/voice-preview-flow-editor.png" width="100%" />
      <figcaption>Voice Preview Flow editor</figcaption>
    </figure>

3. Click on the Voice Preview button in the interactive tooltip of a message output in the Interaction Panel. The output text will be copied to the Voice Preview input field.

!!! note "Supported Output"
    Note that the Voice Preview button will only be shown for specific output. This includes regular text output, fallback text, as well as text/ssml output from channels with Voice support.

<figure>
  <img class="image-center" src="../../../../_assets/ai/test/voice/voice-preview-chat-panel.png" width="100%" />
  <figcaption>Voice Preview Interactive Tooltip</figcaption>
</figure>
