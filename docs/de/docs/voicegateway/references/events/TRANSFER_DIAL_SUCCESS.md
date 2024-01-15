---
Titel: "TRANSFER_DIAL_SUCCESS"
Schnecke: "TRANSFER_DIAL_SUCCESS"
ausgeblendet: false
---

# TRANSFER_DIAL_SUCCESS

Dieses Ereignis weist auf eine erfolgreiche Anrufweiterleitung hin, die mit der "Dial"-Methode erreicht wurde. 

Das System initiierte einen neuen Aufruf an das Weiterleitungsziel, und das Ziel nahm den Anruf an, was zu einer erfolgreichen Weiterleitung führte.

Nutzlast:

'''json
{
  "event": "TRANSFER_DIAL_SUCCESS",
  "Nutzlast": {
    "call_sid": "a5f527ae-973b-xxxx-xxxx-xxxxxxxxxxxx",
    "direction": "ausgehend",
    "from": "+4414xxxxxxxx",
    "to": "+49176xxxxxxxx",
    "call_id": "d0fa7fc0-e370-xxxx-xxxx-xxxxxxxxxxxx",
    "sip_status": 200,
    "sip_reason": "OK",
    "call_status": "abgeschlossen",
    "caller_id": "+140xxxxxxxx",
    "account_sid": "1a3d4a19-a1e9-xxxx-xxxx-xxxxxxxxxxxx",
    "trace_id": "4a617e39cfd6xxxxxxxxxxxxxxxxxxxx",
    "application_sid": "e900b540-2475-xxxx-xxxx-xxxxxxxxxxxx",
    "fs_sip_address": "10.1.194.28:5060",
    "parent_call_sid": "b8aa1128-8a6c-xxxx-xxxx-xxxxxxxxxxxx",
    "Dauer": 4,
    "api_base_url": "voicegateway-app-dev-vg.cognigy.ai/v1"
  },
  "numberMetaData": {
    "number": "+140xxxxxxxx",
    "country": "USA",
    "countryCallingCode": "1",
    "nationalNumber": "40xxxxxxxx",
    "valid": wahr,
    "type": "FIXED_LINE_OR_MOBILE",
    "uri": "tel:+140xxxxxxxx"
  }
}
'''