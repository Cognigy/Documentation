---
 title: "Cognigy Voice Gateway" 
 slug: "cognigy-voice-gateway" 
 hidden: true 
---

# Cognigy Voice Gateway: Nodes Overview

Cognigy Voice Gateway Nodes expose functionality provided by [Cognigy Voice Gateway](https://www.cognigy.com/products/voice-gateway){:target="\_blank"} directly in the Flow Editor.

The Nodes are installed by default from Cognigy.AI 4.23.0 on.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/vgv2-node-overview.png" width="80%" />
  <figcaption>Voice Gateway Nodes</figcaption>
</figure>

???+ warning "Rebranding of Voice Gateway with AudioCodes"
With the native Cognigy Voice Gateway integration to Cognigy AI the AudioCodes implementation will be rebranded from Voice Gateway to AudioCodes.
This applies to the Flow Nodes and the Endpoint.

## Call Metadata

Cognigy Voice Gateway identifies important information about the call from the SIP INVITE and makes it available to the bot during the session.

| Parameter | Type   | Description                                                     | Example           |
| --------- | ------ | --------------------------------------------------------------- | ----------------- |
| from      | string | The phone number of the caller, including country code.         | +4921154591991    |
| headers   | JSON   | The SIP Headers of the call on INVITE, including Custom Headers | See example below |

```json
{
  "to": "<sip-destination>",
  "call-id": "<id-value>",
  "allow": "NOTIFY, OPTIONS, BYE, INVITE, ACK, CANCEL, REFER",
  "X-Custom-Headers": "<custom-headers-value>",
  "X-Originating-Carrier": "<carrier-name>",
  "X-Voip-Carrier-Sid": "<id-value>",
  "X-Twilio-AccountSid": "<id-value>",
  "X-Twilio-CallSid": "<id-value>",
  "other-properties": "..."
}
```

## Voice Gateway Index

- [Cognigy Voice Gateway Endpoint Overview ]({{config.site_url}}ai/endpoints/cognigy-vgv2/)
- [Voice Gateway Nodes Overview]({{config.site_url}}ai/flow-nodes/vgv2/voice-gateway/)
- [DTMF Node]({{config.site_url}}ai/flow-nodes/vgv2/dtmf/)
- [Hang Up Node]({{config.site_url}}ai/flow-nodes/vgv2/hangup/)
- [Play Node]({{config.site_url}}ai/flow-nodes/vgv2/play/)
- [Refer Node]({{config.site_url}}ai/flow-nodes/vgv2/refer/)
- [Set Session Config Node]({{config.site_url}}ai/flow-nodes/vgv2/set-session-config/)
