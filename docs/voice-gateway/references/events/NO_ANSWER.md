---
title: "NO_ANSWER"
slug: "NO_ANSWER"
hidden: false
---

# NO_ANSWER

This event serves to indicate that the call was not answered within the specified ringing time.

When the AI Agent rings for the number of seconds, you specify in the [Transfer Node](../../../ai/build/node-reference/voice/voice-gateway/transfer.md) settings, and if there is no response during this ringing period, the AI Agent will hang up the call. AI Agent will automatically end the call.

Payload:

```json
{
  "event": "NO_ANSWER",
  "payload": {
    "call_sid": "fd25a8f6-b7a0-41ad-xxxx-xxxxxxxxxxxx",
    "direction": "inbound",
    "from": "+140xxxxxxxxx",
    "to": "+441xxxxxxxxx",
    "call_status": "completed",
    "call_termination_by": "caller",
    "duration": 15,
    "dial_call_status": "no-answer",
    "dial_sip_status": 487,
    "dial_call_sid": "5c854151-0e0a-4fbf-xxxx-xxxxxxxxxxxx"
  }
}
```

## More Information

- [Hangup](../verbs/hangup.md)