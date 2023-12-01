---
title: "CALL_FAILED"
slug: "CALL_FAILED"
hidden: false
---

# CALL_FAILED

The call was terminated. 

Payload:

```json
{
  "payload": {
    "call_sid": "ec16c74e-8e8a-4dee-xxxx-xxxxxxxxxxxx",
    "direction": "outbound",
    "from": "12345",
    "to": "10001",
    "call_id": "9439b7bc-ce3c-123c-xxxx-xxxxxxxxxxxx",
    "sip_status": 400,
    "sip_reason": "Bad Request",
    "call_status": "failed",
    "account_sid": "3508315f-e780-4eed-xxxx-xxxxxxxxxxxx",
    "trace_id": "a61eb8bdfae5599d075544b75af2194e",
    "application_sid": "b5ec4723-b6ea-4d2f-xxxx-xxxxxxxxxxxx",
    "fs_sip_address": "10.0.0.xx:xxxx",
    "api_base_url": "api-vg.cognigy.ai/v1"
  },
  "msgid": "6pAjboxUDzavLME7JMUMUC",
  "event": "CALL_FAILED"
}
```