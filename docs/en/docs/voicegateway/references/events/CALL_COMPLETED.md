---
title: "CALL_COMPLETED"
slug: "CALL_COMPLETED"
hidden: false
---

# CALL_COMPLETED

The call was terminated by the virtual agent or by the user.

To test a payload with the `CALL_CREATED` event, you can use an empty Flow.

Input: Start a call via the Interaction Panel by clicking ![phone](../../../assets/icons/phone.svg) **> Start Call**. The call will either automatically end when the virtual agent terminates the conversation due to inactivity, or you can end the call by clicking **End Call**.

Payload:

```json
{
    "payload": {
        "call_sid": "c0855b01-4207-480b-aa64-b83915a95b81",
        "direction": "inbound",
        "from": "user-2U4yyrZ3sgBXYvX6yymTZw",
        "to": "123456789",
        "call_id": "9adb52f3-5e1e-123c-a1a0-06f1c3f65bf4",
        "sip_status": 200,
        "sip_reason": "OK",
        "call_status": "completed",
        "account_sid": "28265983-502c-4ed7-a62f-a199e5b7524a",
        "trace_id": "ddd45512f6c5bf3ab8d14727d2a93739",
        "application_sid": "822aff21-5879-403f-b4ef-bece9d1381dd",
        "fs_sip_address": "10.1.193.108:5060",
        "originating_sip_ip": "88.77.34.146",
        "call_termination_by": "bot",
        "duration": 12,
        "api_base_url": "voicegateway-app-dev-vg.cognigy.ai/v1"
    },
    "event": "CALL_COMPLETED"
}
```