---
title: "Send Meta Data" 
slug: "send-meta-data" 
hidden: false 
---
# Send Meta Data

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/audiocodes/send-metadata.png" width="80%" />
  <figcaption>AudioCodes Meta Data</figcaption>
</figure>

## Description

{! _includes/ai/node-reference/voice/ac-and-generic-node-deprecation.md!}

The Send Meta Data Node will send meta data via SIP INFO messages to the connected SIP trunk.

| Parameter | Type | Description                                                   |
|-----------|------|---------------------------------------------------------------|
| Meta Data | JSON | The meta data to send via SIP INFO. See below for an example. |

```json
{
  "myParamName": "myParamValue"
}
``` 