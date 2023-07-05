---
 title: "Send Metadata" 
 slug: "send-metadata" 
 hidden: false 
---

# Send Metadata

[![Version badge](https://img.shields.io/badge/Added in-v4.45-blue.svg)](../../../release-notes/4.45.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/generic-voice/send-metadata.png" width="80%" />
  <figcaption>Voice Gateway Send Metadata Node</figcaption>
</figure>

## Description

<div class="divider"></div>

The Send Meta Data Node sends metadata via SIP INFO messages to the connected SIP trunk.

| Parameter | Type | Description                        |
|-----------|------|------------------------------------|
| Meta Data | JSON | The metadata to send via SIP INFO. |

Example:

```json
{
  "myParamName": "myParamValue"
}
```

!!! note "This Node supports Activity Parameters"
    You can find more information about activity parameters on the [Parameter Details]({{config.site_url}}ai/flow-nodes/vg/parameter-details/) page.