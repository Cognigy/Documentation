---
Titel: "NO_ANSWER"
Schnecke: "NO_ANSWER"
ausgeblendet: false
---

# NO_ANSWER

Dieses Ereignis dient dazu, anzuzeigen, dass der Anruf nicht innerhalb der angegebenen Klingelzeit angenommen wurde.

Wenn der virtuelle Agent für die Anzahl der Sekunden klingelt, geben Sie im [Übertragungsknoten](.. /.. /.. /ai/flow-nodes/vg/transfer.md) und wenn während dieses Klingelzeitraums keine Antwort erfolgt, legt der virtuelle Agent den Anruf auf. Der virtuelle Agent beendet den Anruf automatisch.

Nutzlast:

'''json
{
  "event": "NO_ANSWER",
  "Nutzlast": {
    "call_sid": "FD25A8F6-B7A0-41AD-XXXX-XXXXXXXXXXXX",
    "direction": "eingehend",
    "from": "+140xxxxxxxxx",
    "to": "+441xxxxxxxxx",
    "call_status": "abgeschlossen",
    "call_termination_by": "Anrufer",
    "Dauer": 15,
    "dial_call_status": "keine Antwort",
    "dial_sip_status": 487,
    "dial_call_sid": "5c854151-0e0a-4fbf-xxxx-xxxxxxxxxxxx"
  }
}
'''