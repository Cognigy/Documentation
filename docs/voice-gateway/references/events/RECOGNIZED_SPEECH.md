---
title: "RECOGNIZED_SPEECH"
slug: "RECOGNIZED_SPEECH"
hidden: false
---

# RECOGNIZED_SPEECH

The user's answer was recognized by the AI Agent.

To test a payload with the `RECOGNIZED_SPEECH` event, you can use an empty Flow.

Input: Start a call via the Interaction Panel by clicking ![phone](../../../_assets/icons/phone.svg) **> Start Call**. When the call starts, say "Hello". 

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
    "speech": {
      "language_code": "en-US",
      "channel_tag": 1,
      "is_final": true,
      "alternatives": [
        {
          "confidence": 0.9612209,
          "transcript": "Hello."
        }
      ],
      "vendor": {
        "name": "microsoft",
        "evt": {
          "id": "bbc41b27d34a40afbdb6b0bb25daxxxx",
          "recognition_status": "Success",
          "offset": 17300000,
          "duration": 7400000,
          "channel": 0,
          "display_text": "Hello.",
          "n_best": [
            {
              "confidence": 0.9612209,
              "lexical": "hello",
              "itn": "hello",
              "masked_i_t_n": "hello",
              "display": "Hello.",
              "words": [
                {
                  "word": "hello",
                  "offset": 17300000,
                  "duration": 7400000,
                  "confidence": 0.9612209
                }
              ]
            },
            {
              "confidence": 0.82822037,
              "lexical": "hello hello",
              "itn": "hello hello",
              "masked_i_t_n": "hello hello",
              "display": "hello hello",
              "words": [
                {
                  "word": "hello",
                  "offset": 17300000,
                  "duration": 3600000,
                  "confidence": 0.83673537
                },
                {
                  "word": "hello",
                  "offset": 21000000,
                  "duration": 3700000,
                  "confidence": 0.81992954
                }
              ]
            },
            {
              "confidence": 0.6618517,
              "lexical": "hello no",
              "itn": "hello no",
              "masked_i_t_n": "hello no",
              "display": "hello no",
              "words": [
                {
                  "word": "hello",
                  "offset": 17300000,
                  "duration": 4100000,
                  "confidence": 0.61299324
                },
                {
                  "word": "no",
                  "offset": 21500000,
                  "duration": 3200000,
                  "confidence": 0.7240353
                }
              ]
            },
            {
              "confidence": 0.3121025,
              "lexical": "helo",
              "itn": "helo",
              "masked_i_t_n": "helo",
              "display": "helo",
              "words": [
                {
                  "word": "helo",
                  "offset": 17300000,
                  "duration": 7400000,
                  "confidence": 0.3121025
                }
              ]
            },
            {
              "confidence": 0.94312507,
              "lexical": "hello l",
              "itn": "hello l",
              "masked_i_t_n": "hello l",
              "display": "hello L",
              "words": [
                {
                  "word": "hello",
                  "offset": 17300000,
                  "duration": 6800000,
                  "confidence": 0.9587209
                },
                {
                  "word": "L",
                  "offset": 24500000,
                  "duration": 200000,
                  "confidence": 0.5844207
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