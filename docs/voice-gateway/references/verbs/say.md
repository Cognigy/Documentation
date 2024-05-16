---
title: "Say"
slug: "say"
hidden: false
---

# Say

The `say` verb is used to send synthesized speech to the remote party. The text provided may be either plain text or use SSML tags.

## Speech vendors

- [Check supported speech vendors](../tts-and-stt-vendors.md)
- [Add a custom speech API](../../webapp/speech-services.md#add-a-custom-speech-vendor)

```json
{
  "verb": "say",
  "text": "hi there!",
  "synthesizer" : {
    "vendor": "google",
    "language": "en-US",
    "voice": "en-US-Wavenet-F"
  }
}
```

## Configuration

The full set of configuration parameters:

| Parameter            | Description                                                                                                                                                                                | Required |
|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| text                 | The text to speak. May contain SSML tags.                                                                                                                                                  | Yes      |
| synthesizer.vendor   | The speech vendor to use for synthesis.                                                                                                                                                    | No       |
| synthesizer.language | The language code. Required, if `synthesizer.vendor` is defined                                                                                                                            | No       |
| synthesizer.voice    | The voice to use. Check the voice lists of the vendor used. Defaults to the [Application](../../webapp/applications.md) setting, if provided. Required, if `synthesizer.vendor` is defined | No       |
| loop                 | The number of times the text is to be repeated; 0 means repeat forever. The default value is `1`.                                                                                          | No       |
| earlyMedia           | If this parameter is `true` and the call has not yet been answered, play the audio without answering the call. The default value is `false`.                                               | No       |
