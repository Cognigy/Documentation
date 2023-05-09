---
title: "USER_INPUT_TIMEOUT"
slug: "USER_INPUT_TIMEOUT"
hidden: false
---

# USER_INPUT_TIMEOUT

The virtual agent terminated the call because the user did not respond.

To test a payload with the `RECOGNIZED_SPEECH` event, you can use an empty Flow.

Input: Start a call via the Interaction Panel by clicking ![phone](../../../assets/icons/phone.svg) **> Start Call**. When the call starts, say "Hello". Wait several seconds until a payload with the `USER_INPUT_TIMEOUT` event appears.

Payload:

```json
{
  "payload": {
    "call_sid": "ee654c0b-e1e3-45d9-ba7e-8f444080c955",
    "direction": "inbound",
    "from": "user-a6dRWVsNTxEYPU1QkkZG4X",
    "to": "123456789",
    "call_id": "23b61302-5f72-123c-e8a5-020052186fa0",
    "sip_status": 200,
    "sip_reason": "OK",
    "call_status": "in-progress",
    "account_sid": "a6a34b37-6391-4f36-aad8-afdcb3399a7d",
    "trace_id": "012e7f38ccf2150c80f4169a8dd6b783",
    "application_sid": "16f9efd3-bb18-475f-8b13-8750aacda925",
    "fs_sip_address": "10.1.193.108:5060",
    "originating_sip_ip": "88.77.34.146",
    "api_base_url": "voicegateway-app-dev-vg.cognigy.ai/v1",
    "reason": "timeout"
  },
  "event": "USER_INPUT_TIMEOUT"
}
```