---
 title: "Audio Preview" 
 slug: "audio-preview" 
 hidden: false 
---
# Audio Preview

[![Version badge](https://img.shields.io/badge/Added in-v4.32.0-blue.svg)]({{config.site_url}})

This audio preview feature allows users to quickly test how voice output sounds without having to go all the way till the flow node.

It suppors the cloud audio providers for SST/TTS from Google, Microsoft and Amazon AWS.

Once in the Audio Preview panel, you will be able to introduce raw text or SSML syntach; and also choose the language and the voice to play your audio. Bear in mind that the SSML syntach that you introduce will have to be supported by the Audio Preview provider you chose.

### Set up an Audio Preview provider
<div class="divider"></div>

You need to navigate to the agent settings -> Audio Preview Settings. From there choose your STT/TTS provider and
enter your creedentials.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/audio-preview-settings.png" width="100%" />
  <figcaption>Audio Preview settings</figcaption>
</figure>

### Use Audio Preview

<div class="divider"></div>

You can use the Audio Preview from 3 different places:

1 - With the hotKey (control + alt + p).

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/audio-preview-panel.png" width="100%" />
  <figcaption>Audio Preview settings</figcaption>
</figure>

2 - Click on the Audio Preview icon from the Flow editor.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/audio-preview-icon.png" width="20%" />
  <figcaption>Audio Preview Icon</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/audio-preview-flow-editor.png" width="100%" />
  <figcaption>Audio Preview Flow editor</figcaption>
</figure>

3 - On the chat panel you can play the bot response.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/audio-preview-chat-panel.png" width="100%" />
  <figcaption>Audio Preview Flow editor</figcaption>
</figure>