---
title: "TRANSFER_DIAL_ERROR"
slug: "TRANSFER_DIAL_ERROR"
hidden: false
---

# TRANSFER_DIAL_ERROR

[![Version badge](https://img.shields.io/badge/Added in-v4.61-blue.svg)](../../../release-notes/4.61.md)

This event indicates that a call transfer attempt using the `Dial` method resulted in an error or failure. 

The `Dial` method establishes a new, independent call to the transfer destination. However, in this case, the transfer failed due to various reasons, such as the destination being unreachable, the destination line being busy, or network issues.

Payload:

```json
{
  "payload": {
    "call_sid": "48bd7509-5c60-4b49-xxxx-xxxxxxxxxxxx",
    "direction": "outbound",
    "from": "+441xxxxxxxxx",
    "to": "+491xxxxxxxxx",
    "call_id": "fa142b41-d07e-123c-xxxx-xxxxxxxxxxxx",
    "sip_status": 488,
    "sip_reason": "Not Acceptable Here",
    "call_status": "failed",
    "caller_id": "+44xxxxxxxxxx",
    "account_sid": "41f4d1f1-13b2-4c00-xxxx-xxxxxxxxxxxx",
    "trace_id": "bb9c648d913cbffe3480723c632d398d",
    "application_sid": "f5451299-0d16-478a-xxxx-xxxxxxxxxxxx",
    "fs_sip_address": "10.1.193.242:5060",
    "parent_call_sid": "94ba4e2c-ecba-4a63-xxxx-xxxxxxxxxxxx",
    "api_base_url": "voice-gateway-app-dev-vg.cognigy.ai/v1"
  },
  "event": "TRANSFER_DIAL_ERROR",
  "numberMetaData": {
    "number": "+44xxxxxxxxxx",
    "country": "GB",
    "countryCallingCode": "44",
    "nationalNumber": "23921601xx",
    "valid": true,
    "type": "FIXED_LINE",
    "uri": "tel:+44xxxxxxxxxx"
  }
}
```

## More Information

- [Dial](../verbs/dial.md)