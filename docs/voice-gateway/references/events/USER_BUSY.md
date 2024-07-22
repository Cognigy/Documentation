---
title: "USER_BUSY"
slug: "USER_BUSY"
hidden: false
---

# USER_BUSY

This event indicates that the user (caller) was busy and could not answer the call or engage in the desired action. 

For instance, if an automated voice application tries to transfer the call to a human agent, but the user is already on another call, the `USER_BUSY` event would be logged or recorded.

Payload:

```json
{
  "payload": {
    "call_sid": "e234f07d-e7e7-407a-xxxx-xxxxxxxxxxxx",
    "direction": "outbound",
    "from": "441xxxxxxxxx",
    "to": "441xxxxxxxxx",
    "call_id": "aa901330-cbf4-123c-xxxx-xxxxxxxxxxxx",
    "sip_status": 603,
    "sip_reason": "Decline",
    "call_status": "busy",
    "account_sid": "b507f72e-be93-4802-xxxx-xxxxxxxxxxxx",
    "trace_id": "79a6573cf277a174c648c89bd0676dc8",
    "application_sid": "34b16acb-9b93-4312-xxxx-xxxxxxxxxxxx",
    "fs_sip_address": "10.1.193.xx:xxxx",
    "api_base_url": "voice-gateway.cognigy.ai/v1"
  },
  "msgid": "4dPkLyVhcK8bTxUoJFDXhm",
  "event": "USER_BUSY"
}
```
## More Information

- [Hangup](../verbs/hangup.md)