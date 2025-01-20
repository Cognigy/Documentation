---
title: "Streaming"
slug: "streaming"
hidden: false
---

# Streaming

!!! danger "Unavailable Feature"
    Starting from release 4.72, this feature is unavailable. We are working on enhancing its quality, and we will inform you once the feature becomes available.

In the context of Text-to-Speech (TTS), _streaming_ technology enables instant speech responses from voice agents, creating a more seamless and natural conversational experience for users.

## Traditional TTS vs. Streaming TTS

Traditionally, TTS systems require the entire text to be submitted and processed before audio can be played back.
This approach means a delay between the request and the delivery of the spoken word,
especially noticeable with long texts.

On the other hand, Streaming TTS begins to deliver audio content as soon as the first words are synthesized. This method doesn't wait for the entire text to be converted into speech. Instead, it processes the text in segments and starts playing those segments immediately, leading to a more fluid and natural interaction.

## Streaming in Voice Gateway

Voice Gateway integrates streaming capabilities with the [ElevenLabs](https://elevenlabs.io/) provider.

To enable streaming for voice agent, follow these steps:

1. In the left-side menu of the Voice Gateway Self-Service Portal, select **Speech**.
2. On the **Speech services** page, navigate to the existing Evenlabs speech service (if previously created) or create a new one by clicking **Add speech service**.
3. On the **Add Speech service** page, enable the **Use Streaming** option. Note that the **Use for text-to-speech** option must also be activated.
4. _(Optional)_ To ensure a smoother and more tailored TTS output, customize the streaming settings. These settings include parameters for optimizing streaming latency, stability, similarity boost, and speaker boost. To configure these settings, activate Extra Options at the end of the page and change the desired parameters.
5. Click **Save**.

## More Information

- [Speech Services](speech-services.md)
- [TTS and STT vendors](../references/tts-and-stt-vendors.md)