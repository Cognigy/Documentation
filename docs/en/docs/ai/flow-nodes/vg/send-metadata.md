---
 title: "Send Metadata" 
 slug: "send-metadata" 
 hidden: false 
---

# Send Metadata

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/vgv2-send-metadata-node.png" width="100%" />
  <figcaption>Voice Gateway Send Metadata Node</figcaption>
</figure>

## Description

<div class="divider"></div>
The Send Meta Data Node will send meta data via SIP INFO messages to the connected SIP trunk.

| Parameter | Type | Description                                                   |
|-----------|------|---------------------------------------------------------------|
| Meta Data | JSON | The meta data to send via SIP INFO. See below for an example. |

```json
{
  "myParamName": "myParamValue"
}
```