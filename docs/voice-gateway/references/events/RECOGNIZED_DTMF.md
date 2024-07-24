---
title: "RECOGNIZED_DTMF"
slug: "RECOGNIZED_DTMF"
hidden: false
---

# RECOGNIZED_DTMF

The DTMF code was recognized by the AI Agent.

To test a payload with the `RECOGNIZED_DTMF` event, you can use a Flow with only one **Set Session Config** Node.

Input: Add the **Set Session Config** Node to the Flow editor and enable the **Capture DTMF Signals** setting in the Node. Start a call via the Interaction Panel by clicking ![phone](../../../_assets/icons/phone.svg) **> Start Call**, then enter `#`.

Payload:

```json
{
    "payload": {
        "call_sid": "a140138d-2796-4184-xxxx-xxxxxxxxxxxx",
        "direction": "inbound",
        "from": "user-vG92uZPRaxHmns4xUXxxxx",
        "to": "123456789",
        "call_id": "0cb0bef6-5e22-123c-xxxx-xxxxxxxxxxxx",
        "sip_status": 200,
        "sip_reason": "OK",
        "call_status": "in-progress",
        "account_sid": "34a2746a-782a-4804-xxxx-xxxxxxxxxxxx",
        "trace_id": "fbb8df1bd3fec33bfece07adb2a8xxxx",
        "application_sid": "6794ed5e-b3d4-4d36-xxxx-xxxxxxxxxxxx",
        "fs_sip_address": "10.102.202.xx:xxxx",
        "originating_sip_ip": "176.198.xxx.xx",
        "api_base_url": "voice-gateway-app.cognigy.ai/v1",
        "digits": "9791108569",
        "reason": "dtmfDetected"
    },
    "event": "RECOGNIZED_DTMF"
}
```