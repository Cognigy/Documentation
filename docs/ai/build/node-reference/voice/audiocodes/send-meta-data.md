---
title: "Send Metadata" 
slug: "send-meta-data" 
hidden: false 
---
# Send Metadata

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/audiocodes/send-metadata.png" width="80%" />
  <figcaption>AudioCodes Metadata</figcaption>
</figure>

## Description

{! _includes/ai/node-reference/voice/ac-and-generic-node-deprecation.md!}

The Send Metadata Node will send metadata via SIP INFO messages to the connected SIP trunk.

| Parameter | Type | Description                                                   |
|-----------|------|---------------------------------------------------------------|
| Metadata | JSON | The metadata to send via SIP INFO. See below for an example. |

```json
{
  "myParamName": "myParamValue"
}
``` 