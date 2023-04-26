---
title: "RECOGNIZED_DTMF"
slug: "RECOGNIZED_DTMF"
hidden: false
---

# RECOGNIZED_DTMF

The DTMF code was recognized by the virtual agent.

Payload:

```json
{
    "payload": {
        "call_sid": "a140138d-2796-4184-bd6d-880a8b8eb123",
        "direction": "inbound",
        "from": "user-vG92uZPRaxHmns4xUXnXNp",
        "to": "123456789",
        "call_id": "0cb0bef6-5e22-123c-0896-028048fc7828",
        "sip_status": 200,
        "sip_reason": "OK",
        "call_status": "in-progress",
        "account_sid": "34a2746a-782a-4804-9fb5-00634b4b1c17",
        "trace_id": "fbb8df1bd3fec33bfece07adb2a8813f",
        "application_sid": "6794ed5e-b3d4-4d36-9a8a-b12713ca7222",
        "fs_sip_address": "10.102.202.72:5060",
        "originating_sip_ip": "176.198.201.91",
        "api_base_url": "voicegateway-app-vg-staging.cognigy.ai/v1",
        "digits": "9791108569",
        "reason": "dtmfDetected"
    },
    "event": "RECOGNIZED_DTMF"
}
```