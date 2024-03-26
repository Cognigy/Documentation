---
Titel: "USER_BUSY"
Schnecke: "USER_BUSY"
ausgeblendet: false
---

# USER_BUSY

Dieses Ereignis weist darauf hin, dass der Benutzer (Anrufer) beschäftigt war und den Anruf nicht annehmen oder die gewünschte Aktion ausführen konnte. 

Wenn beispielsweise eine automatisierte Sprachanwendung versucht, den Anruf an einen menschlichen Agenten weiterzuleiten, der Benutzer sich jedoch bereits in einem anderen Anruf befindet, wird das Ereignis "USER_BUSY" protokolliert oder aufgezeichnet.

Nutzlast:

'''json
{
  "Nutzlast": {
    "call_sid": "e234f07d-e7e7-407a-xxxx-xxxxxxxxxxxx",
    "direction": "ausgehend",
    "from": "441xxxxxxxxx",
    "to": "441xxxxxxxxx",
    "call_id": "aa901330-cbf4-123c-xxxx-xxxxxxxxxxxx",
    "sip_status": 603,
    "sip_reason": "Ablehnen",
    "call_status": "beschäftigt",
    "account_sid": "b507f72e-be93-4802-xxxx-xxxxxxxxxxxx",
    "trace_id": "79a6573cf277a174c648c89bd0676dc8",
    "application_sid": "34b16acb-9b93-4312-xxxx-xxxxxxxxxxxx",
    "fs_sip_address": "10.1.193.xx:xxxx",
    "api_base_url": "voicegateway.cognigy.ai/v1"
  },
  "msgstr": "4dPkLyVhcK8bTxUoJFDXhm",
  "event": "USER_BUSY"
}
'''