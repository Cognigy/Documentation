---
Titel: "TRANSFER_REFER_ERROR"
Schnecke: "TRANSFER_REFER_ERROR"
ausgeblendet: false
---

# TRANSFER_REFER_ERROR

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.61-blue.svg)] (.. /.. /.. /release-notes/4.61.md)

Dieses Ereignis weist darauf hin, dass ein Anrufweiterleitungsversuch mit der Methode "Refer" zu einem Fehler oder Misserfolg geführt hat.

Bei der "Refer"-Methode wird die Verantwortung für die Verarbeitung des Aufrufs an ein anderes Ziel übergeben, während der Medienpfad beibehalten wird. 

In diesem Fall ist die Übertragung jedoch fehlgeschlagen, da das Ziel nicht verfügbar war oder die Übertragungsanforderung abgelehnt wurde.

Nutzlast:

'''json
{
  "Nutzlast": {
    "call_sid": "fead969f-77d0-45e2-xxxx-xxxxxxxxxxxx",
    "direction": "eingehend",
    "from": "+140xxxxxxx",
    "to": "+44177xxxxxxx",
    "call_id": "FBA5F700-DD3A-123C-XXXX-XXXXXXXXXXXX",
    "sip_status": 200,
    "sip_reason": "OK",
    "call_status": "in Bearbeitung",
    "account_sid": "1a3d4a19-a1e9-483f-xxxx-xxxxxxxxxxxx",
    "trace_id": "896c407644c5f22d84e5d492f503f06a",
    "application_sid": "d6a219b6-683a-4e04-xxxx-xxxxxxxxxxxx",
    "fs_sip_address": "10.1.192.202:5060",
    "originating_sip_ip": "54.171.127.194",
    "originating_sip_trunk_name": "Twilio",
    "api_base_url": "voicegateway-app-dev-vg.cognigy.ai/v1",
    "refer_status": 500
  },
  "event": "TRANSFER_REFER_ERROR",
  "numberMetaData": {
    "number": "+140xxxxxxx",
    "country": "USA",
    "countryCallingCode": "1",
    "nationalNumber": "40xxxxxxx",
    "valid": wahr,
    "type": "FIXED_LINE_OR_MOBILE",
    "uri": "tel:+140xxxxxxx"
  }
}
'''