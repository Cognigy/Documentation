---
Titel: "TRANSFER_REFER_SUCCESS"
Schnecke: "TRANSFER_REFER_SUCCESS"
ausgeblendet: false
---

# TRANSFER_REFER_SUCCESS

Dieses Ereignis weist auf eine erfolgreiche Anrufweiterleitung hin, die mit der Methode "Refer" erreicht wurde. 

Das System übergab die Verantwortung für die Bearbeitung des Anrufs an ein anderes Ziel, und das Ziel nahm den Anruf an, was zu einer erfolgreichen Weiterleitung führte.

Nutzlast:

'''json
{
  "Nutzlast": {
    "call_sid": "dff0c1fa-ae84-xxxx-xxxx-xxxxxxxxxxxx",
    "direction": "eingehend",
    "from": "+140xxxxxxxx",
    "to": "+4417xxxxxxxx",
    "call_id": "42AAC143-DD3B-XXXX-XXXX-xxxxxxxxxxxx",
    "sip_status": 200,
    "sip_reason": "OK",
    "call_status": "in Bearbeitung",
    "account_sid": "1a3d4a19-a1e9-xxxx-xxxx-xxxxxxxxxxxx",
    "trace_id": "64e90af2af98xxxxxxxxx",
    "application_sid": "d6a219b6-683a-xxxx-xxxx-xxxxxxxxxxxx",
    "fs_sip_address": "10.1.192.202:5060",
    "originating_sip_ip": "54.171.127.194",
    "originating_sip_trunk_name": "Twilio",
    "api_base_url": "voicegateway-app-dev-vg.cognigy.ai/v1",
    "refer_status": 202,
    "final_referred_call_status": 200
  },
  "event": "TRANSFER_REFER_SUCCESS",
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