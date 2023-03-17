---
 title: "Play URL" 
 slug: "play-url" 
 hidden: false 
---
# Play URL

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ac-play-url-node.png" width="100%" />
  <figcaption>AudioCodes Play URL</figcaption>
</figure>

## Description
<div class="divider"></div>
The Play URL Node lets you retrieve a WAV file from a URL location and play it back to the user.

| Parameter               | Type          | Description                                                                                         |
|-------------------------|---------------|-----------------------------------------------------------------------------------------------------|
| Media URL               | CognigyScript | The URL to the WAV file. Must be accessible to your AudioCodes instance.                            |
| Media Format            | Select        | Options:<br/>- wav/lpcm15<br/>- raw/lpcm16                                                          |
| Cache Audio             | Toggle        | Whether to cache the audio file or not. Caching will make future playbacks quicker. Default: false. |
| Set Activity Parameters | Toggle        | Option to add parameters which will be valid for this activity only                                 |


???+ info "This Node supports Activity Parameters"
    To learn more about activity parameters, visit our Help Center at: [https://support.cognigy.com/hc/en-us/articles/360017413959](https://support.cognigy.com/hc/en-us/articles/360017413959)