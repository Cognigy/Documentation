---
title: "CALL_IN_PROGRESS"
slug: "CALL_IN_PROGRESS"
hidden: false
---

# CALL_IN_PROGRESS

[![Version badge](https://img.shields.io/badge/Added in-v4.90-blue.svg)](../../../release-notes/4.90.md)

The call is in progress once the call has been successfully established.

To capture this event, follow these steps:

1. In your voice Flow, add a [Question](../../../ai/build/node-reference/basic/question.md),
   [Optional Question](../../../ai/build/node-reference/basic/optional-question.md),
   or [Wait For Input](../../../ai/build/node-reference/logic/wait-for-input.md) Node before the [Lookup](../../../ai/build/node-reference/logic/lookup.md) Node
   where the `CALL_IN_PROGRESS` event is selected.
2. In the [Voice Gateway](../../../ai/deploy/endpoint-reference/voice-gateway.md) Endpoint, activate the **Enable Call Event: Call in Progress** setting.
3. Navigate to the **Call Events** section and enable the **Call in Progress** option.

Payload:

```json
{
  "event": "CALL_IN_PROGRESS",
  "payload": {
    "call_sid": "b3d6dc93-9659-41af-b222-eaa0bf7fea52",
    "direction": "inbound",
    "from": "user",
    "to": "+44xxxxxxxxxxx",
    "call_id": "152a1325-25da-123e-0cb3-002248a2a992",
    "sip_status": 200,
    "sip_reason": "OK",
    "call_status": "in-progress",
    "account_sid": "b06a4572-a30b-4e6a-8446-bcac0012d740",
    "trace_id": "70334e50a878a528d3ab9c170bd614e0",
    "application_sid": "29d6fe22-fc2b-47c3-bf92-73c5f9582724",
    "fs_sip_address": "10.0.0.65:5060",
    "originating_sip_ip": "54.171.127.194",
    "originating_sip_trunk_name": "Twilio",
    "api_base_url": "api-vg-staging.cognigy.ai/v1"
  }
}
```