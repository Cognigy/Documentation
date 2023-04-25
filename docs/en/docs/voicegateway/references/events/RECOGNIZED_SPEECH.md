---
title: "RECOGNIZED_SPEECH"
slug: "RECOGNIZED_SPEECH"
hidden: false
---

# RECOGNIZED_SPEECH

The user's answer was recognized by the virtual agent.

```json
{
  "payload": {
    "call_sid": "9cac257f-483a-42e2-a62a-83a9d905f12d",
    "direction": "inbound",
    "from": "user-qztPKheGTXWPXwDxxsz7DF",
    "to": "123456789",
    "call_id": "3bc026f7-5e19-123c-e8a5-020052186fa0",
    "sip_status": 200,
    "sip_reason": "OK",
    "call_status": "in-progress",
    "account_sid": "c798036a-2e6f-401f-848d-024e9401097a",
    "trace_id": "89d664629ff9f6b64759d8a2a2e0caf4",
    "application_sid": "04f90460-fb1d-49c7-b4bd-ffff1fd4cfe5",
    "fs_sip_address": "10.1.200.233:5060",
    "originating_sip_ip": "88.77.34.146",
    "api_base_url": "voicegateway-app-dev-vg.cognigy.ai/v1",
    "speech": {
      "language_code": "en-US",
      "channel_tag": 1,
      "is_final": true,
      "alternatives": [
        {
          "confidence": 0.820771,
          "transcript": "Pizza."
        }
      ],
      "vendor": {
        "name": "microsoft",
        "evt": {
          "id": "3d33887348534f58a371eb21ee4f5a56",
          "recognition_status": "Success",
          "offset": 11400000,
          "duration": 5700000,
          "channel": 0,
          "display_text": "Pizza.",
          "n_best": [
            {
              "confidence": 0.820771,
              "lexical": "pizza",
              "itn": "pizza",
              "masked_i_t_n": "pizza",
              "display": "Pizza.",
              "words": [
                {
                  "word": "pizza",
                  "offset": 11400000,
                  "duration": 5700000,
                  "confidence": 0.820771
                }
              ]
            },
            {
              "confidence": 0.7713108,
              "lexical": "pizza hut",
              "itn": "pizza hut",
              "masked_i_t_n": "pizza hut",
              "display": "pizza hut",
              "words": [
                {
                  "word": "pizza",
                  "offset": 11400000,
                  "duration": 4600000,
                  "confidence": 0.7693497
                },
                {
                  "word": "hut",
                  "offset": 16100000,
                  "duration": 1000000,
                  "confidence": 0.77968997
                }
              ]
            },
            {
              "confidence": 0.41549414,
              "lexical": "piazza",
              "itn": "piazza",
              "masked_i_t_n": "piazza",
              "display": "piazza",
              "words": [
                {
                  "word": "piazza",
                  "offset": 11400000,
                  "duration": 5700000,
                  "confidence": 0.41549414
                }
              ]
            },
            {
              "confidence": 0.7938725,
              "lexical": "a pizza",
              "itn": "a pizza",
              "masked_i_t_n": "a pizza",
              "display": "a pizza",
              "words": [
                {
                  "word": "a",
                  "offset": 11000000,
                  "duration": 200000,
                  "confidence": 0.32845265
                },
                {
                  "word": "pizza",
                  "offset": 11300000,
                  "duration": 5800000,
                  "confidence": 0.8175379
                }
              ]
            },
            {
              "confidence": 0.39418924,
              "lexical": "pizzas",
              "itn": "pizzas",
              "masked_i_t_n": "pizzas",
              "display": "pizzas",
              "words": [
                {
                  "word": "pizzas",
                  "offset": 11400000,
                  "duration": 5700000,
                  "confidence": 0.39418924
                }
              ]
            }
          ]
        }
      }
    },
    "reason": "speechDetected"
  },
  "event": "RECOGNIZED_SPEECH"
}
```