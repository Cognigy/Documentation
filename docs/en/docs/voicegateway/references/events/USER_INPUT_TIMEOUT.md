---
title: "USER_INPUT_TIMEOUT"
slug: "USER_INPUT_TIMEOUT"
hidden: false
---

# USER_INPUT_TIMEOUT

The virtual agent terminated the call because the user did not respond.

Payload:

```json
{
    "payload": {
        "call_sid": "3c637500-944b-410a-bcc6-c0a6616afe2b",
        "direction": "inbound",
        "from": "user-hNXdMqitUc7V2n3PXCtcXR",
        "to": "123456789",
        "call_id": "5f301279-5e18-123c-a1a0-06f1c3f65bf4",
        "sip_status": 200,
        "sip_reason": "OK",
        "call_status": "in-progress",
        "account_sid": "f4cd23c1-d5c4-4fcc-8737-3859f41a3cbe",
        "trace_id": "9c1f453ac53cb7a337367cdceadfac31",
        "application_sid": "108d3a4c-cdfa-4632-a47b-c9e41dcdc3a3",
        "fs_sip_address": "10.1.193.108:5060",
        "originating_sip_ip": "88.77.34.146",
        "api_base_url": "voicegateway-app-dev-vg.cognigy.ai/v1",
        "reason": "timeout"
    },
    "event": "USER_INPUT_TIMEOUT"
}
```