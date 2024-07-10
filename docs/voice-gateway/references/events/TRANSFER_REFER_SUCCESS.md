---
title: "TRANSFER_REFER_SUCCESS"
slug: "TRANSFER_REFER_SUCCESS"
hidden: false
---

# TRANSFER_REFER_SUCCESS

This event indicates a successful call transfer that was achieved using the `Refer` method. 

The system passed the responsibility for handling the call to another destination, and the destination accepted the call, resulting in a successful transfer.

Payload:

```json
{
  "payload": {
    "call_sid": "dff0c1fa-ae84-xxxx-xxxx-xxxxxxxxxxxx",
    "direction": "inbound",
    "from": "+140xxxxxxxx",
    "to": "+4417xxxxxxxx",
    "call_id": "42aac143-dd3b-xxxx-xxxx-xxxxxxxxxxxx",
    "sip_status": 200,
    "sip_reason": "OK",
    "call_status": "in-progress",
    "account_sid": "1a3d4a19-a1e9-xxxx-xxxx-xxxxxxxxxxxx",
    "trace_id": "64e90af2af98xxxxxxxxxxxxxxxxxxxx",
    "application_sid": "d6a219b6-683a-xxxx-xxxx-xxxxxxxxxxxx",
    "fs_sip_address": "10.1.192.202:5060",
    "originating_sip_ip": "54.171.127.194",
    "originating_sip_trunk_name": "Twilio",
    "api_base_url": "voice-gateway-app-dev-vg.cognigy.ai/v1",
    "refer_status": 202,
    "final_referred_call_status": 200
  },
  "event": "TRANSFER_REFER_SUCCESS",
  "numberMetaData": {
    "number": "+140xxxxxxxx",
    "country": "US",
    "countryCallingCode": "1",
    "nationalNumber": "40xxxxxxxx",
    "valid": true,
    "type": "FIXED_LINE_OR_MOBILE",
    "uri": "tel:+140xxxxxxxx"
  }
}
```