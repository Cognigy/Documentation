---
Titel: "USER_INPUT_TIMEOUT"
Schnecke: "USER_INPUT_TIMEOUT"
ausgeblendet: false
---

# USER_INPUT_TIMEOUT

Der virtuelle Agent hat den Anruf beendet, weil der Benutzer nicht geantwortet hat.

Um eine Payload mit dem Ereignis "USER_INPUT_TIMEOUT" zu testen, können Sie einen leeren Flow verwenden.

Eingabe: Starten Sie einen Anruf über das Interaction Panel, indem Sie auf ! [Telefon] (.. /.. /.. /assets/icons/phone.svg) **> Anruf starten**. Wenn der Anruf beginnt, sagen Sie "Hallo". Warten Sie einige Sekunden, bis eine Payload mit dem Ereignis "USER_INPUT_TIMEOUT" angezeigt wird.

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
    "reason": "Zeitüberschreitung"
  },
  "event": "USER_INPUT_TIMEOUT"
}
'''