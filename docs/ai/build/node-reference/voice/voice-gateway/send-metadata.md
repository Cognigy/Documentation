---
title: "Send Metadata" 
slug: "send-metadata" 
hidden: false 
tags:
  - Voice Gateway
  - Send Metadata
---

# Send Metadata

<figure>
  <img class="image-center" src="../../../../../../_assets/ai/build/node-reference/vg/send-metadata.png" width="80%" />
  <figcaption>Voice Gateway Send Metadata Node</figcaption>
</figure>

## Description

The Send Metadata Node will send metadata via SIP INFO messages to the connected SIP trunk.

| Parameter | Type | Description                                                   |
|-----------|------|---------------------------------------------------------------|
| Metadata | JSON | The metadata to send via SIP INFO. See below for an example. |

```json
{
  "myParamName": "myParamValue"
}
```