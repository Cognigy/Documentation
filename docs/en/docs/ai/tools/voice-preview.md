---
 title: "Voice Preview" 
 slug: "voice-preview" 
 hidden: false 
---

# Voice Preview

[![Version badge](https://img.shields.io/badge/Added in-v4.33.0-blue.svg)]({{config.site_url}})

This Voice Preview feature allows users to quickly test how voice output sounds without having to go all the way till the flow node.

It suppors the cloud Voice providers for SST/TTS from Google, Microsoft and Amazon AWS.

Once in the Voice Preview panel, you will be able to introduce raw text or SSML syntach; and also choose the language and the voice to play your Voice. Bear in mind that the SSML syntach that you introduce will have to be supported by the Voice Preview provider you chose.

### Set up an Voice Preview provider

<div class="divider"></div>

You need to navigate to the agent settings -> Voice Preview Settings. From there choose your STT/TTS provider and
enter your creedentials.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/voice-preview-settings.png" width="100%" />
  <figcaption>Voice Preview settings</figcaption>
</figure>

### Use Voice Preview

<div class="divider"></div>

You can use the Voice Preview from 3 different places:

1 - With the hotKey (control + alt + p).

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/voice-preview-panel.png" width="100%" />
  <figcaption>Voice Preview panel</figcaption>
</figure>

2 - Click on the Voice Preview icon from the Flow editor.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/voice-preview-icon.png" width="20%" />
  <figcaption>Voice Preview Icon</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/voice-preview-flow-editor.png" width="100%" />
  <figcaption>Voice Preview Flow editor</figcaption>
</figure>

3 - On the chat panel you can play the bot response.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/voice-preview-chat-panel.png" width="100%" />
  <figcaption>Voice Preview Flow editor</figcaption>
</figure>
