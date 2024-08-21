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

The Play URL Node lets you stream a sound file into the call. 

This Node is useful for playing advertisements, pre-recorded jingles, or other sound files for callers. It supports MP3 and WAV encoded files.

## Settings

| Parameter               | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
|-------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Media URL               | URL    | Accepts direct URL links to MP3 and WAV tracks. The parameter requires a URL in the `https://<yourdomain>.<domain_extension>/<file-name>.mp3` format, for example,  `https://yourdomain.com/welcome_message.mp3`.                                                                                                                                                                                                       |       
| Set Activity Parameters | Toggle | Enables parameters which will be valid for this activity only. The available parameters are: <br> - [Recognizer (STT)](../voice-gateway/parameter-details.md#recognizer---speech-to-text) <br> - [Barge In](../voice-gateway/parameter-details.md#barge-in) <br> - [DTMF](../voice-gateway/parameter-details.md#dtmf) <br> - [Advanced (Additional Session Parameters)](../voice-gateway/parameter-details.md#advanced) |


## More Information

- [Parameter Details](../voice-gateway/parameter-details.md) 
- [AudioCodes Play URL Node](../../../../../_assets/ai/build/node-reference/audiocodes/play-url.png)