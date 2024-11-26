---
title: "Play"
slug: "play"
hidden: false
---

# Play

The `play` verb is used to stream recorded audio to a call.

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

You can use the following options in the `play` verb:

| Parameters  | Description                                                                                                                                                                                                                                  | Required |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| url         | A single WAV or MP3 URL or an array of URLs to play in sequence. The URLs don't need to include the `.mp3` or `.wav` extension. For example, `https://abc.xyz/music.mp3` or `https://audio.jukehost.co.uk/N5pnlULbup8KabGRE7dsGwHTeIZAwWdr`. | Yes      |
| loop        | The number of times to play the URLs. The default value is `1`.                                                                                                                                                                              | No       |
| earlyMedia  | If this parameter is `true` and the call has not yet been answered, play the audio without answering the call. The default value is `false`.                                                                                                 | No       |
| timeoutSecs | The number of seconds to play the URLs.                                                                                                                                                                                                      | No       |
| seekOffset  | The number of samples to seek into the URL.                                                                                                                                                                                                  | No       |
| actionHook  | A webhook to receive an HTTP POST when the `play` verb completes.                                                                                                                                                                            | No       |

## actionHook Properties

| Property Name            | Description                          |
|--------------------------|--------------------------------------|
| playback_seconds         | The number of seconds played.        |
| playback_milliseconds    | The number of milliseconds played.   |
| playback_last_offset_pos | The last offset position in samples. |

