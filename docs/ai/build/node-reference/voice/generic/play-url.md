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

The Play URL Node might be useful when you want to stream an advertisement, some pre-recorded information or other audio file for the caller. MP3 and WAV encoded files are supported.

## Settings

| Parameter               | Type          | Description                                                                                                                                                                                                                                                                                                                 |
|-------------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Media URL               | Text          | Accepts direct URL links to MP3 and WAV tracks, for example, https://abc.xyz/music.mp3.                                                                                                                                                                                                                                     |
| Set Activity Parameters | Toggle        | Option to add parameters which will be valid for this activity only. The available parameters are: <br> - [Recognizer (STT)](../voice-gateway/parameter-details.md#recognizer---speech-to-text) <br> - [Barge In](../voice-gateway/parameter-details.md#barge-in) <br> - [DTMF](../voice-gateway/parameter-details.md#dtmf) |

## Example

To build a Flow using the Play URL Node, follow these steps:

1. In your Cognigy AI Project, open your Voice Gateway Flow.
2. In the Flow editor, add a Play URL Node.
3. In the Play URL Node editor, enter the required values: 
  

## More Information

- [Parameter Details](../voice-gateway/parameter-details.md) 
- [AudioCodes Play URL Node](../../../../../_assets/ai/build/node-reference/audiocodes/play-url.png)