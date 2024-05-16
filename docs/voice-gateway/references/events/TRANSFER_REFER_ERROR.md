---
title: "TRANSFER_REFER_ERROR"
slug: "TRANSFER_REFER_ERROR"
hidden: false
---

# TRANSFER_REFER_ERROR

[![Version badge](https://img.shields.io/badge/Added in-v4.61-blue.svg)](../../../release-notes/4.61.md)

This event indicates that a call transfer attempt using the `Refer` method resulted in an error or failure.

The `Refer` method involves passing the responsibility for handling the call to another destination while maintaining the media path. 

However, in this case, the transfer failed due to the destination being unavailable or rejecting the transfer request.

Payload:

```json
{
  "payload": {
    "call_sid": "fead969f-77d0-45e2-xxxx-xxxxxxxxxxxx",
    "direction": "inbound",
    "from": "+140xxxxxxx",
    "to": "+44177xxxxxxx",
    "call_id": "fba5f700-dd3a-123c-xxxx-xxxxxxxxxxxx",
    "sip_status": 200,
    "sip_reason": "OK",
    "call_status": "in-progress",
    "account_sid": "1a3d4a19-a1e9-483f-xxxx-xxxxxxxxxxxx",
    "trace_id": "896c407644c5f22d84e5d492f503f06a",
    "application_sid": "d6a219b6-683a-4e04-xxxx-xxxxxxxxxxxx",
    "fs_sip_address": "10.1.192.202:5060",
    "originating_sip_ip": "54.171.127.194",
    "originating_sip_trunk_name": "Twilio",
    "api_base_url": "voice-gateway-app-dev-vg.cognigy.ai/v1",
    "refer_status": 500
  },
  "event": "TRANSFER_REFER_ERROR",
  "numberMetaData": {
    "number": "+140xxxxxxx",
    "country": "US",
    "countryCallingCode": "1",
    "nationalNumber": "40xxxxxxx",
    "valid": true,
    "type": "FIXED_LINE_OR_MOBILE",
    "uri": "tel:+140xxxxxxx"
  }
}
```