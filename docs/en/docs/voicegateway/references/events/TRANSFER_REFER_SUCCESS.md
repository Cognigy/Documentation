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
    "direction": "inbound",
    "caller_name": "",
    "call_sid": "2dfaa589-08f7-xxxx-xxxx-xxxxxxxxxxxx",
    "from": "anonymous",
    "to": "+441xxxxxxxxx",
    "call_status": "trying",
    "defaults": {
      "synthesizer": {
        "vendor": "microsoft",
        "language": "en-US",
        "voice": "en-US-JennyNeural"
      },
      "recognizer": { "vendor": "microsoft", "language": "en-US" }
    }
  },
  "event": "TRANSFER_REFER_SUCCESS"
}
```