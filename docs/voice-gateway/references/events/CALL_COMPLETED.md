---
title: "CALL_COMPLETED"
slug: "CALL_COMPLETED"
hidden: false
---

# CALL_COMPLETED

The call was terminated by the AI Agent or by the user.

To test a payload with the `CALL_COMPLETED` event, you can use an empty Flow.

Input: Start a call via the Interaction Panel by clicking ![phone](../../../_assets/icons/phone.svg) **> Start Call**. The call will either automatically end when the AI Agent terminates the conversation due to inactivity, or you can end the call by clicking **End Call**.

Payload:

```json
{
    "payload": {
        "call_sid": "c0855b01-4207-480b-xxxx-xxxxxxxxxxxx",
        "direction": "inbound",
        "from": "user-2U4yyrZ3sgBXYvX6yyxxxx",
        "to": "123456789",
        "call_id": "9adb52f3-5e1e-123c-xxxx-xxxxxxxxxxxx",
        "sip_status": 200,
        "sip_reason": "OK",
        "call_status": "completed",
        "account_sid": "28265983-502c-4ed7-xxxx-xxxxxxxxxxxx",
        "trace_id": "ddd45512f6c5bf3ab8d14727d2a93739",
        "application_sid": "822aff21-5879-403f-xxxx-xxxxxxxxxxxx",
        "fs_sip_address": "10.1.193.xxx:xxxx",
        "originating_sip_ip": "88.77.xx.xxx",
        "call_termination_by": "bot",
        "duration": 12,
        "api_base_url": "voice-gateway-app.cognigy.ai/v1"
    },
    "event": "CALL_COMPLETED"
}
```