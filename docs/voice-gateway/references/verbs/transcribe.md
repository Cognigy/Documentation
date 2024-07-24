---
title: "Transcribe"
slug: "transcribe"
hidden: false
---

# Transcribe

The `transcribe` verb is used to generate real-time transcriptions of speech.

The `transcribe` verb is only allowed to be nested within a [`dial`](dial.md) or [`listen`](listen.md) verb.
When used in a `dial` verb, it enables long-running transcription of a phone call,
while nesting within a `listen` verb enables transcriptions of recorded messages, such as voicemail.

```json
{
  "verb": "transcribe",
  "transcriptionHook": "http://example.com/transcribe",
  "recognizer": {
    "vendor": "Google",
    "language" : "en-US",
    "interim": true
  }
}
```

## Configuration

The full set of configuration parameters:

| Parameter                    | Description                                                                                          | required |
|------------------------------|------------------------------------------------------------------------------------------------------|----------|
| recognizer.transcriptionHook | A webhook to receive an HTTP POST when a partial or final transcription is received from a provider. | yes      |
| recognizer                   | Speech recognition options.                                                                          | yes      |

## More Information

- [Dial](dial.md)
- [Listen](listen.md)