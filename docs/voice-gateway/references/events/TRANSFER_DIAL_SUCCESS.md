---
title: "TRANSFER_DIAL_SUCCESS"
slug: "TRANSFER_DIAL_SUCCESS"
hidden: false
---

# TRANSFER_DIAL_SUCCESS

This event indicates a successful call transfer that was achieved using the `Dial` method. 

The system initiated a new call to the transfer destination, and the destination accepted the call, resulting in a successful transfer.

Payload:

```json
{
  "event": "TRANSFER_DIAL_SUCCESS",
  "payload": {
    "call_sid": "a5f527ae-973b-xxxx-xxxx-xxxxxxxxxxxx",
    "direction": "outbound",
    "from": "+4414xxxxxxxx",
    "to": "+49176xxxxxxxx",
    "call_id": "d0fa7fc0-e370-xxxx-xxxx-xxxxxxxxxxxx",
    "sip_status": 200,
    "sip_reason": "OK",
    "call_status": "completed",
    "caller_id": "+140xxxxxxxx",
    "account_sid": "1a3d4a19-a1e9-xxxx-xxxx-xxxxxxxxxxxx",
    "trace_id": "4a617e39cfd6xxxxxxxxxxxxxxxxxxxx",
    "application_sid": "e900b540-2475-xxxx-xxxx-xxxxxxxxxxxx",
    "fs_sip_address": "10.1.194.28:5060",
    "parent_call_sid": "b8aa1128-8a6c-xxxx-xxxx-xxxxxxxxxxxx",
    "duration": 4,
    "api_base_url": "voice-gateway-app-dev-vg.cognigy.ai/v1"
  },
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
## More Information

- [Dial](../verbs/dial.md)