---
Titel: "RECOGNIZED_SPEECH"
Schnecke: "RECOGNIZED_SPEECH"
ausgeblendet: false
---

# RECOGNIZED_SPEECH

Die Antwort des Benutzers wurde vom virtuellen Agenten erkannt.

Um eine Payload mit dem Ereignis "RECOGNIZED_SPEECH" zu testen, können Sie einen leeren Flow verwenden.

Eingabe: Starten Sie einen Anruf über das Interaction Panel, indem Sie auf ! [Telefon] (.. /.. /.. /assets/icons/phone.svg) **> Anruf starten**. Wenn der Anruf beginnt, sagen Sie "Hallo". 

Nutzlast:

'''json
{
  "Nutzlast": {
    "call_sid": "ee654c0b-e1e3-45d9-xxxx-xxxxxxxxxxxx",
    "direction": "eingehend",
    "from": "user-a6dRWVsNTxEYPU1Qkkxxxx",
    "to": "123456789",
    "call_id": "23b61302-5f72-123c-xxxx-xxxxxxxxxxxx",
    "sip_status": 200,
    "sip_reason": "OK",
    "call_status": "in Bearbeitung",
    "account_sid": "a6a34b37-6391-4f36-xxxx-xxxxxxxxxxxx",
    "trace_id": "012e7f38ccf2150c80f4169a8dd6xxxx",
    "application_sid": "16f9efd3-bb18-475f-xxxx-xxxxxxxxxxxx",
    "fs_sip_address": "10.1.193.xxx:xxxx",
    "originating_sip_ip": "88.77.xx.xxx",
    "api_base_url": "voicegateway-app.cognigy.ai/v1",
    "Rede": {
      "language_code": "en-US",
      "channel_tag": 1,
      "is_final": wahr,
      "Alternativen": [
        {
          "Vertrauen": 0,9612209,
          "transcript": "Hallo."
        }
      ],
      "Anbieter": {
        "name": "Microsoft",
        "evt": {
          "id": "bbc41b27d34a40afbdb6b0bb25daxxxx",
          "recognition_status": "Erfolg",
          "offset": 17300000,
          "Dauer": 7400000,
          "Kanal": 0,
          "display_text": "Hallo.",
          "n_best": [
            {
              "Vertrauen": 0,9612209,
              "lexical": "Hallo",
              "itn": "Hallo",
              "masked_i_t_n": "Hallo",
              "display": "Hallo.",
              "Wörter": [
                {
                  "word": "Hallo",
                  "offset": 17300000,
                  "Dauer": 7400000,
                  "Vertrauen": 0,9612209
                }
              ]
            },
            {
              "Konfidenz": 0,82822037,
              "lexical": "Hallo, hallo",
              "itn": "Hallo Hallo",
              "masked_i_t_n": "Hallo Hallo",
              "display": "Hallo Hallo",
              "Wörter": [
                {
                  "word": "Hallo",
                  "offset": 17300000,
                  "Dauer": 3600000,
                  "Konfidenz": 0,83673537
                },
                {
                  "word": "Hallo",
                  "Versatz": 21000000,
                  "Dauer": 3700000,
                  "Vertrauen": 0,81992954
                }
              ]
            },
            {
              "Konfidenz": 0,6618517,
              "lexical": "Hallo nein",
              "itn": "Hallo nein",
              "masked_i_t_n": "Hallo nein",
              "display": "Hallo nein",
              "Wörter": [
                {
                  "word": "Hallo",
                  "offset": 17300000,
                  "Dauer": 4100000,
                  "Vertrauen": 0,61299324
                },
                {
                  "word": "nein",
                  "Offset": 21500000,
                  "Dauer": 3200000,
                  "Konfidenz": 0,7240353
                }
              ]
            },
            {
              "Konfidenz": 0,3121025,
              "lexical": "helo",
              "itn": "helo",
              "masked_i_t_n": "Helo",
              "display": "Helo",
              "Wörter": [
                {
                  "word": "helo",
                  "offset": 17300000,
                  "Dauer": 7400000,
                  "Konfidenz": 0,3121025
                }
              ]
            },
            {
              "Konfidenz": 0,94312507,
              "lexical": "Hallo L",
              "itn": "Hallo L",
              "masked_i_t_n": "Hallo L",
              "display": "Hallo L",
              "Wörter": [
                {
                  "word": "Hallo",
                  "offset": 17300000,
                  "Dauer": 6800000,
                  "Vertrauen": 0,9587209
                },
                {
                  "word": "L",
                  "Offset": 24500000,
                  "Dauer": 200000,
                  "Konfidenz": 0,5844207
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
'''