---
 title: "Play" 
 slug: "play" 
 hidden: false 
---
# Play

[![Version badge](https://img.shields.io/badge/Updated in-v4.48-blue.svg)](../../../release-notes/4.48.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/vg/play.png" width="80%" />
  <figcaption>Voice Gateway Play Node</figcaption>
</figure>

## Description
<div class="divider"></div>
The Play Node lets you stream a sound file into the call with the ability to loop it. MP3 and WAV encoded files are supported.

| Parameter               | Type          | Description                                                         |
|-------------------------|---------------|---------------------------------------------------------------------|
| Media URL               | CognigyScript | You can use MP3 or WAV encoded files                                |
| Loop count              | Number        | Number of times the media will be looped                            |
| Set Activity Parameters | Toggle        | Option to add parameters which will be valid for this activity only |


!!! note "This Node supports Activity Parameters"
    You can find more information about activity parameters on our [Parameter Details]({{config.site_url}}ai/flow-nodes/vg/parameter-details/) page.
