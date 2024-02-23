---
title: "Transcribe"
slug: "transcribe"
hidden: false
---

# Transcribe

The `transcribe` command is used to generate real-time transcriptions of speech.

The `transcribe` command is only allowed to be nested within a [`dial`](dial.md) or [`listen`](listen.md) verb. When used in a `dial` command, it enables long-running transcription of a phone call, while nesting within a `listen` verb enables transcriptions of recorded messages (e.g., voicemail).

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

| Parameter                    | Description                                                                                         | required |
|------------------------------|-----------------------------------------------------------------------------------------------------|----------|
| recognizer.transcriptionHook | Webhook to receive an HTTP POST when an interim or final transcription is received form a provider. | yes      |
| recognizer                   | Speech recognition options.                                                                         | yes      |