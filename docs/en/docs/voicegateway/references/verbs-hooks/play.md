---
title: "Play"
slug: "play"
hidden: false
---

# Play

The `play` command is used to stream recorded audio to a call.

```json
{
  "verb": "play",
  "url": "https://example.com/example.mp3",
  "timeoutSecs": 10,
  "seekOffset": 8000,
  "actionHook": "/play/action"
}
```

### Configuration

You can use the following options in the `play` command:

| Parameters  | Description                                                                                                   | Required |
|-------------|---------------------------------------------------------------------------------------------------------------|----------|
| url         | A single URL or an array of URLs (will play in sequence) to a WAV or MP3 file.                                | Yes      |
| loop        | Number of times to play the URLs. The default value is `1`.                                                   | No       |
| earlyMedia  | If true and the call has not yet been answered, play the audio without answering the call. Defaults to false. | No       |
| timeoutSecs | The number of seconds to play the URLs.                                                                       | No       |
| seekOffset  | How many samples to seek into the URL.                                                                        | No       |
| actionHook  | Webhook that is called when the play verb completes.                                                          | No       |

## actionHook Properties

| Property Name            | Description                          |
|--------------------------|--------------------------------------|
| playback_seconds         | The number of seconds played.        |
| playback_milliseconds    | The number of milliseconds played.   |
| playback_last_offset_pos | The last offset position in samples. |

