---
title: "Dub"
slug: "dub"
hidden: false
---

# Dub

The verb `dub` includes an additional audio track in the conversation. The source of the audio is an MP3 file linked directly from an http(s) URL. During the conversation, the track will play in the background as a second sound layer, independently of other verbs such as `play` or `say`. One common use is to apply it as background sound to simulate an office environment, for example, keyboard clicking, making the interaction between end users and AI Agents more humanlike.


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

| Parameter | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Required |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| action    | The various options for action parameter are: <br> - `addTrack` — adds an audio track to the conversation. Once the track is added, the `play` or `say` verbs can be used to insert audio into the track. <br> - `removeTrack` — removes an audio track from the conversation. <br> - `silenceTrack` — silences an audio track but keeps it in place. <br> - `playOnTrack` — plays MP3 audio directly from an HTTP or HTTPS URL onto the track.  <br> - `sayOnTrack` — generates text-to-speech and inserts it into the audio track. | yes      |
| track     | A name of the track. Use a name that reflects the track content. For example, for office noises, you can use the name `office-sounds`.                                                                                                                                                                                                                                                                                                                                                                                               | yes      |
| play      | Plays an MP3 file from an http(s) url into the track. The URL doesn't need to include the `.mp3` extension. For example, `https://abc.xyz/music.mp3` or `https://audio.jukehost.co.uk/N5pnlULbup8KabGRE7dsGwHTeIZAwWdr`.                                                                                                                                                                                                                                                                                                             | no       |
| say       | Plays text to convert to audio and play into the track.                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | no       |
| loop      | Boolean value; if true, it loops the MP3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | no       |
| gain      | A string value in `+2dB` format, specifying the number of decibels to increase or decrease the strength of the audio signal. The value must be between - 50 dB and + 50 dB.                                                                                                                                                                                                                                                                                                                                                          | no       |