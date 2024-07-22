---
title: "ANSWERING_MACHINE_DETECTION"
slug: "ANSWERING_MACHINE_DETECTION"
hidden: false
---

# ANSWERING_MACHINE_DETECTION

The call was initiated and the Answering Machine Detection (AMD) process started.

To test a payload with this Node:

1. Create a Flow.
2. Add a **Transfer** Node. 
3. In the **Dial** type of the **Transfer** Node, activate the **Answering Machine Detection** setting.
4. Click **Save Node**.
5. Below the **Transfer** Node, add a **Lookup** Node.
6. In the **Lookup** Node, select the **Call Event Status** type.
7. In the child **Case** Node of the **Lookup** Node, select the **Answering Machine Detection** call event status.
8. Click **Save Node**.

When the user receives the `ANSWERING_MACHINE_DETECTION` event, the Flow will seamlessly continue:

- If a machine is detected, the call can be routed to a pre-recorded message with self-service options. 
- If a human agent is detected, the call will proceed as usual, ensuring personalized assistance.

Payload:

```json
{
  "payload": {
    "call_sid": "1722dc58-73ee-4830-xxxx-xxxxxxxxxxxx",
    "direction": "inbound",
    "from": "++140xxxxxxxx",
    "to": "+441xxxxxxxx",
    "call_id": "7ce15e2f-74e9-123c-xxxx-xxxxxxxxxxxx",
    "sip_status": 200,
    "sip_reason": "OK",
    "call_status": "in-progress",
    "account_sid": "1a3d4a19-a1e9-483f-xxxx-xxxxxxxxxxxx",
    "trace_id": "6d6a5a78b853622429d9fdf9267cc96f",
    "application_sid": "e900b540-2475-4a6b-xxxx-xxxxxxxxxxxx",
    "fs_sip_address": "10.1.194.xx.xxxx",
    "originating_sip_ip": "54.171.xxx.xxx",
    "originating_sip_trunk_name": "Twilio-94t4Gcf1fiXFMwG4XQxxxx",
    "api_base_url": "voice-gateway-app.cognigy.ai/v1",
    "type": "amd_machine_detected",
    "reason": "long greeting",
    "greeting": "Sanctuary was never meant for human kind it was",
    "language": "en-us"
  },
  "event": "ANSWERING_MACHINE_DETECTION",
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

- [Answering Machine Detection (AMD)](../verbs/amd.md)



