---
 title: "Play" 
 slug: "play" 
 hidden: false 
---
# Play

[![Version badge](https://img.shields.io/badge/Updated in-v4.64-blue.svg)](../../../../../release-notes/4.64.md)

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/vg/play.png" width="80%" />
  <figcaption>Voice Gateway Play Node</figcaption>
</figure>

## Description

The Play Node lets you stream a sound file into the call with the ability to loop it.

This Node is useful for playing advertisements, pre-recorded jingles, or other sound files for callers. It supports MP3 and WAV encoded files.

## Settings

| Parameter               | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|-------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Media URL               | CognigyScript | Accepts direct URL links to MP3 and WAV tracks. You need to upload the file with an `.mp3` or `.wav` extension to the storage location where you want to host it. Make sure the file is publicly accessible. Copy the URL link to the file. The URL must have the following format: `https://<yourdomain>.<domain_extension>/<file-name-or-id>`, and it must not end with `.mp3` or `.wav`. For example: `https://yourdomain.com/PvTrzkiPG4sZStvoeldNZZn7nNY9CLDT`. |
| Loop count              | Number        | The number of times the track will be looped.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Set Activity Parameters | Toggle        | Enables parameters which will be valid for this activity only. The available parameters are: <br> - [Recognizer (STT)](../voice-gateway/parameter-details.md#recognizer---speech-to-text) <br> - [Barge In](../voice-gateway/parameter-details.md#barge-in) <br> - [DTMF](../voice-gateway/parameter-details.md#dtmf) <br> - [Advanced (Additional Session Parameters)](../voice-gateway/parameter-details.md#advanced)                                             |

## More Information

- [Parameter Details](../voice-gateway/parameter-details.md)
- [AudioCodes Play URL Node](../audiocodes/play-url.md)
- [Generic Play URL Node](../generic/play-url.md)