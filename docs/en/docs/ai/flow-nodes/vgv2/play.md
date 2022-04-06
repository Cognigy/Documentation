---
 title: "Play" 
 slug: "play" 
 hidden: false 
---
# Play

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/vgv2-play-node.png" width="100%" />
  <figcaption>Voice Gateway Play Node</figcaption>
</figure>

## Description
<div class="divider"></div>
The Play Node lets you stream a sound file into the call with the ability to loop it. MP3 and WAV encoded files are supported.

| Parameter | Type | Description |
| ----------- | ----------- | ----------- |
| Media URL | Text | You can use MP3 or WAV encoded files |
| Loop count | Number | Number of times the media will be looped |
| Cache Audio | Toggle | Whether to cache the audio file or not. Caching will make future playbacks quicker. Default: false. |
| Set Activity Parameters | Toggle | Option to add parameters which will be valid for this activity only |


???+ info "This Node supports Activity Parameters"
    To learn more about activity parameters, visit our Help Center at: [https://support.cognigy.com/hc/en-us/articles/360017413959](https://support.cognigy.com/hc/en-us/articles/360017413959)

## Voice Gateway Index
- [Cognigy Voice Gateway Endpoint Overview ]({{config.site_url}}ai/endpoints/cognigy-vgv2/)
- [Voice Gateway Nodes Overview]({{config.site_url}}ai/flow-nodes/vgv2/voice-gateway/)
- [DTMF Node]({{config.site_url}}ai/flow-nodes/vgv2/dtmf/)
- [Hang Up Node]({{config.site_url}}ai/flow-nodes/vgv2/hangup/)
- [Play Node]({{config.site_url}}ai/flow-nodes/vgv2/play/)
- [Refer Node]({{config.site_url}}ai/flow-nodes/vgv2/refer/)
- [Set Session Config Node]({{config.site_url}}ai/flow-nodes/vgv2/set-session-config/)