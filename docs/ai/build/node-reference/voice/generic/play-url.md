---
title: "Play URL" 
slug: "play-url" 
hidden: false 
---

# Play URL

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/generic-voice/play-url.png" width="80%" />
  <figcaption>Generic Play URL Node</figcaption>
</figure>

## Description

{! _includes/ai/node-reference/voice/ac-and-generic-node-deprecation.md!}

The Play URL Node lets you stream a sound file into the call. 

This Node is useful for playing advertisements, pre-recorded jingles, or other sound files for callers. It supports MP3 and WAV encoded files.

## Parameters

| Parameter               | Type          | Description                                                                                                                                                                                                                                                                                                                         |
|-------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Media URL               | CognigyScript | Accepts URL links to MP3 and WAV tracks. The URL should point to the storage location where you want to host it and doesn't need to include the `.mp3` or `.wav` extension. For example, `https://abc.xyz/music.mp3` or `https://audio.jukehost.co.uk/N5pnlULbup8KabGRE7dsGwHTeIZAwWdr`. Make sure the file is publicly accessible. |
| Set Activity Parameters | Toggle        | Enables parameters which will be valid for this activity only. The available parameters are: <br> - [Recognizer (STT)](../voice-gateway/parameter-details.md) <br> - [Barge In](../voice-gateway/parameter-details.md) <br> - [DTMF](../voice-gateway/parameter-details.md)               |

## More Information

- [AudioCodes Play URL Node](../audiocodes//play-url.md)
- [Voice Gateway Play Node](../voice-gateway//play.md)
- [Parameter Details](../voice-gateway/parameter-details.md)