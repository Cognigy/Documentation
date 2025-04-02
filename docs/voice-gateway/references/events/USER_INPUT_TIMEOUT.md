---
title: "USER_INPUT_TIMEOUT"
slug: "USER_INPUT_TIMEOUT"
hidden: false
---

# USER_INPUT_TIMEOUT

The AI Agent terminated the call because the user did not respond.

To test a payload with the `USER_INPUT_TIMEOUT` event, you can use an empty Flow.

Input: Start a call via the Interaction Panel by clicking ![phone](../../../_assets/icons/phone.svg) **> Start Call**. When the call starts, say "Hello". Wait several seconds until a payload with the `USER_INPUT_TIMEOUT` event appears.

Payload:

```json
{
  "payload": {
    "call_sid": "ee654c0b-e1e3-45d9-xxxx-xxxxxxxxxxxx",
    "direction": "inbound",
    "from": "user-a6dRWVsNTxEYPU1Qkkxxxx",
    "to": "123456789",
    "call_id": "23b61302-5f72-123c-xxxx-xxxxxxxxxxxx",
    "sip_status": 200,
    "sip_reason": "OK",
    "call_status": "in-progress",
    "account_sid": "a6a34b37-6391-4f36-xxxx-xxxxxxxxxxxx",
    "trace_id": "012e7f38ccf2150c80f4169a8dd6xxxx",
    "application_sid": "16f9efd3-bb18-475f-xxxx-xxxxxxxxxxxx",
    "fs_sip_address": "10.1.193.xxx:xxxx",
    "originating_sip_ip": "88.77.xx.xxx",
    "api_base_url": "voice-gateway-app.cognigy.ai/v1",
    "reason": "timeout"
  },
  "event": "USER_INPUT_TIMEOUT"
}
```

## More Information

- [User Input Timeout](../../../ai/build/node-reference/voice/voice-gateway/parameter-details.md)