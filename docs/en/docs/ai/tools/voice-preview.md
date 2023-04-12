---
 title: "Voice Preview" 
 slug: "voice-preview" 
 hidden: true 
---

# Voice Preview

The Voice Preview feature allows users to quickly test how voice output sounds without having to execute the whole flow with a mock call.

It supports the cloud SST/TTS from the providers Google, Microsoft and Amazon AWS.

Once in the Voice Preview panel, you will be able to introduce raw text or SSML syntax. You can also choose the language and the voice to use. Bear in mind that the SSML syntax that you introduce will have to be supported by the Voice Preview provider you chose.

### Set up a Voice Preview provider

<div class="divider"></div>

You need to navigate to the Agent Settings -> Voice Preview Settings. From there, choose your STT/TTS provider and
enter your credentials.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/voice-preview-settings.png" width="100%" />
  <figcaption>Voice Preview Settings</figcaption>
</figure>

### Use Voice Preview

<div class="divider"></div>

You can use the Voice Preview from 3 different places:

1 - With the hotkey **Ctrl + Alt + p** or **Command + Option + p**.

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

3 - Click on the Voice Preview button in the interactive tooltip of a message output in the Interaction Panel. The output text will be copied to the Voice Preview input field.

!!! note "Supported Output"
    Note that the Voice Preview button will only be shown for specific output. This includes regular text output, fallback text, as well as text/ssml output from channels with Voice support.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/voice-preview-chat-panel.png" width="100%" />
  <figcaption>Voice Preview Interactive Tooltip</figcaption>
</figure>
