---
Titel: "TRANSFER_DIAL_ERROR"
Schnecke: "TRANSFER_DIAL_ERROR"
ausgeblendet: false
---

# TRANSFER_DIAL_ERROR

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.61-blue.svg)] (.. /.. /.. /release-notes/4.61.md)

Dieses Ereignis weist darauf hin, dass ein Anrufweiterleitungsversuch mit der "Dial"-Methode zu einem Fehler oder Misserfolg geführt hat. 

Die "Dial"-Methode baut einen neuen, unabhängigen Anruf an das Übertragungsziel auf. In diesem Fall ist die Übertragung jedoch aus verschiedenen Gründen fehlgeschlagen, z. B. weil das Ziel nicht erreichbar ist, die Zielleitung ausgelastet ist oder Netzwerkprobleme vorliegen.

Nutzlast:

'''json
{
  "Nutzlast": {
    "call_sid": "48bd7509-5c60-4b49-xxxx-xxxxxxxxxxxx",
    "direction": "ausgehend",
    "from": "+441xxxxxxxxx",
    "to": "+491xxxxxxxxx",
    "call_id": "fa142b41-d07e-123c-xxxx-xxxxxxxxxxxx",
    "sip_status": 488,
    "sip_reason": "Hier nicht akzeptabel",
    "call_status": "fehlgeschlagen",
    "caller_id": "+44xxxxxxxxxx",
    "account_sid": "41f4d1f1-13b2-4c00-xxxx-xxxxxxxxxxxx",
    "trace_id": "bb9c648d913cbffe3480723c632d398d",
    "application_sid": "f5451299-0d16-478a-xxxx-xxxxxxxxxxxx",
    "fs_sip_address": "10.1.193.242:5060",
    "parent_call_sid": "94ba4e2c-ecba-4a63-xxxx-xxxxxxxxxxxx",
    "api_base_url": "voicegateway-app-dev-vg.cognigy.ai/v1"
  },
  "event": "TRANSFER_DIAL_ERROR",
  "numberMetaData": {
    "number": "+44xxxxxxxxxx",
    "country": "GB",
    "countryCallingCode": "44",
    "nationalNumber": "23921601xx",
    "valid": wahr,
    "type": "FIXED_LINE",
    "uri": "tel:+44xxxxxxxxxx"
  }
}
'''