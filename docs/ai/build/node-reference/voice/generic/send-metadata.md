---
 title: "Send Metadata" 
 slug: "send-metadata" 
 hidden: false 
---

# Send Metadata

[![Version badge](https://img.shields.io/badge/Added in-v4.45-blue.svg)](../../../../../release-notes/4.45.md)

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/generic-voice/send-metadata.png" width="80%" />
  <figcaption>Voice Gateway Send Metadata Node</figcaption>
</figure>

## Description

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
    You can find more information about activity parameters on the [Parameter Details](../voice-gateway/parameter-details.md) page.