---
 title: "Send Metadata" 
 slug: "send-metadata" 
 hidden: false 
---
# Send Metadata

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/vg2-send-metadata-node.png" width="100%" />
  <figcaption>VoiceGateway Send Metadata Node</figcaption>
</figure>

## Description
<div class="divider"></div>
The Send Meta Data Node will send meta data via SIP INFO messages to the connected SIP trunk.

| Parameter | Type | Description |
| ----------- | ----------- | ----------- |
| Meta Data | JSON | The meta data to send via SIP INFO. See below for an example. |

```json
{
  "myParamName": "myParamValue"
}
``` 


???+ info "This Node supports Activity Parameters"
    You can find more information about activity parameters on our [Parameter Details]({{config.site_url}}ai/flow-nodes/vgv2/parameter-details) page.

## VoiceGateway Index

- [Cognigy VoiceGateway Endpoint Overview ]({{config.site_url}}ai/endpoints/cognigy-vgv2/)
- [VoiceGateway Nodes Overview]({{config.site_url}}ai/flow-nodes/vgv2/voice-gateway/)
- [DTMF Node]({{config.site_url}}ai/flow-nodes/vgv2/dtmf/)
- [Hang Up Node]({{config.site_url}}ai/flow-nodes/vgv2/hangup/)
- [Parameter Details]({{config.site_url}}ai/flow-nodes/vgv2/parameter-details/)
- [Play Node]({{config.site_url}}ai/flow-nodes/vgv2/play/)
- [Send Metadata Node]({{config.site_url}}ai/flow-nodes/vgv2/send-metadata/)
- [Set Session Config Node]({{config.site_url}}ai/flow-nodes/vgv2/set-session-config/)
- [Transfer Node]({{config.site_url}}ai/flow-nodes/vgv2/transfer/)
