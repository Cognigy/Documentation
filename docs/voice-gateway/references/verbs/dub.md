---
title: "Dub"
slug: "dub"
hidden: false
---

# Dub

The `dub` verb adds an additional audio track into the conversation. The track will be blended with the `play` or `say` content sent to the user. One common usage is to apply it as background ambient noise to simulate an office environment, making the interaction between the Virtual Agent and the user more humanlike, but there are many possibile ways to use this feature. The source of the audio is an mp3 file linked directly from an http(s) URL.

Additionally, the volume (gain) of the inserted audio may be adjusted up or down. The default value is 0 dB.

```json
 {
    "verb": "dub",
    "action": "addTrack",
    "track": "ambient-sounds",
  },
  {
    "verb": "dub",
    "action": "playOnTrack",
    "track": "ambient-sounds",
    "play": "https://XXXX.XXX/XXX/XXXXXX.mp3"
    "loop": true
    "gain": "+2dB"
  }
```

## Configuration

The full set of configuration parameters:

| Parameter | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Required |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| action    | The various options for action parameter are: <br> - `addTrack` adds an audio track to the conversation; once added, the `play` or `say` command can be used to insert audio into the track <br> - `removeTrack` removes an audio track from the conversation <br> - `silenceTrack` silences an audio track but leaves it in place <br> - `playOnTrack` plays audio from an http(s) mp3 url into the audio track <br> - `sayOnTrack` generates text-to-speech into the audio track            | yes      |
| track     | track label                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | yes      |
| play      | plays an mp3 file from an http(s) url into the track                                                                                                                                                                                                                                                                                                                                                                                                                                          | no       |
| say       | plays text to convert to audio and play into the track                                                                                                                                                                                                                                                                                                                                                                                                                                        | no       |
| loop      | boolean value; if true, it loops the mp3                                                                                                                                                                                                                                                                                                                                                                                                                                                      | no       |
| gain      | a string value in "+2 dB" format, specifying the amount of decibels to increase or decrease the strength of the audio signal. The value must be between +- 50 dB.                                                                                                                                                                                                                                                                                                                          | no       |