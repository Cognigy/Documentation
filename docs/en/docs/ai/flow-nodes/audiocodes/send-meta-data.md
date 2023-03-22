---
 title: "Send Meta Data" 
 slug: "send-meta-data" 
 hidden: false 
---
# Send Meta Data

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ac-send-meta-data-node.png" width="100%" />
  <figcaption>AudioCodes Meta Data</figcaption>
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