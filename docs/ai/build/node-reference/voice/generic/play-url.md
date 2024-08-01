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

The Play URL Node might be useful when you want to stream an advertisement, a pre-recorded jingle or other sound file for the caller. MP3 and WAV encoded files are supported.

## Settings

| Parameter               | Type   | Description                                                                                                                                                                                                                                                                                                           |
|-------------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Media URL               | Text   | Accepts direct URL links to MP3 and WAV tracks, for example, https://abc.xyz/music.mp3.                                                                                                                                                                                                                               |
| Set Activity Parameters | Toggle | Enables parameters which will be valid for this activity only. The available parameters are: <br> - [Recognizer (STT)](../voice-gateway/parameter-details.md#recognizer---speech-to-text) <br> - [Barge In](../voice-gateway/parameter-details.md#barge-in) <br> - [DTMF](../voice-gateway/parameter-details.md#dtmf) |

To use the Play URL Node:
1. Open the [Voice Gateway Flow](../../../../../voice-gateway/getting-started.md#create-a-voice-gateway-flow) you want to test.
2. Insert the Node in the Flow where the sound file will be played.
3. Fill out the above settings.
4. Make a test call.
  
## More Information

- [Parameter Details](../voice-gateway/parameter-details.md) 
- [AudioCodes Play URL Node](../../../../../_assets/ai/build/node-reference/audiocodes/play-url.png)