---
 title: "Play" 
 slug: "play" 
 hidden: false 
---
# Play

[![Version badge](https://img.shields.io/badge/Updated in-v4.64-blue.svg)](../../../../../release-notes/4.64.md)

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/vg/play.png" width="50%" />
</figure>

## Description

The Play Node lets you stream a sound file into the call with the ability to loop it.

This Node is useful for playing advertisements, pre-recorded jingles, or other sound files for callers. It supports MP3 and WAV encoded files.

## Parameters

| Parameter               | Type          | Description                                                                                                                                                                                                                                                                                                                                                                        |
|-------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Media URL               | CognigyScript | Accepts URL links to MP3 and WAV tracks. The URL should point to the storage location where you want to host it and doesn't need to include the `.mp3` or `.wav` extension. For example, `https://abc.xyz/music.mp3` or `https://audio.jukehost.co.uk/N5pnlULbup8KabGRE7dsGwHTeIZAwWdr`. Make sure the file is publicly accessible.                                                |
| Loop count              | Number        | The number of times the track will be looped.                                                                                                                                                                                                                                                                                                                                      |
| Set Activity Parameters | Toggle        | Enables parameters which will be valid for this activity only. The available parameters are: <ul><li>[Recognizer (STT)](../voice-gateway/parameter-details.md)</li><li>[Barge In](../voice-gateway/parameter-details.md)</li><li>[DTMF](../voice-gateway/parameter-details.md)</li><li>[Advanced (Additional Session Parameters)](../voice-gateway/parameter-details.md)</li></ul> |

## More Information

- [Parameter Details](../voice-gateway/parameter-details.md)
- [AudioCodes Play URL Node](../audiocodes//play-url.md)
- [Generic Play URL Node](../generic//play-url.md)