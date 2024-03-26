---
Titel: "ANSWERING_MACHINE_DETECTION"
Schnecke: "ANSWERING_MACHINE_DETECTION"
ausgeblendet: false
---

# ANSWERING_MACHINE_DETECTION

Der Anruf wurde initiiert und der Prozess der Anrufbeantwortererkennung (AMD) gestartet.

So testen Sie eine Payload mit diesem Node:

1. Erstellen Sie einen Flow.
2. Fügen Sie einen **Transfer**-Knoten hinzu. 
3. Aktivieren Sie im Typ **Wählen** des Knotens **Weiterleitung** die Einstellung **Anrufbeantwortererkennung**.
4. Klicken Sie auf **Knoten speichern**.
5. Fügen Sie unterhalb des Knotens **Übertragen** einen Knoten Suchen** hinzu.
6. Wählen Sie im Knoten **Suche** den Typ **Anrufereignisstatus** aus.
7. Wählen Sie im untergeordneten **Case**-Knoten des **Lookup**-Knotens den Anrufereignisstatus **Anrufbeantwortererkennung** aus.
8. Klicken Sie auf **Knoten speichern**.

Wenn der Benutzer das Ereignis "ANSWERING_MACHINE_DETECTION" empfängt, wird der Flow nahtlos fortgesetzt:

- Wenn ein Gerät erkannt wird, kann der Anruf an eine vorab aufgezeichnete Nachricht mit Self-Service-Optionen weitergeleitet werden. 
- Wenn ein menschlicher Agent erkannt wird, wird der Anruf wie gewohnt fortgesetzt, um eine persönliche Unterstützung zu gewährleisten.

Nutzlast:

'''json
{
  "Nutzlast": {
    "call_sid": "1722dc58-73ee-4830-xxxx-xxxxxxxxxxxx",
    "direction": "eingehend",
    "from": "++140xxxxxxxx",
    "to": "+441xxxxxxxx",
    "call_id": "7ce15e2f-74e9-123c-xxxx-xxxxxxxxxxxx",
    "sip_status": 200,
    "sip_reason": "OK",
    "call_status": "in Bearbeitung",
    "account_sid": "1a3d4a19-a1e9-483f-xxxx-xxxxxxxxxxxx",
    "trace_id": "6d6a5a78b853622429d9fdf9267cc96f",
    "application_sid": "e900b540-2475-4a6b-xxxx-xxxxxxxxxxxx",
    "fs_sip_address": "10.1.194.xx.xxxx",
    "originating_sip_ip": "54.171.xxx.xxx",
    "originating_sip_trunk_name": "Twilio-94t4Gcf1fiXFMwG4XQxxxx",
    "api_base_url": "voicegateway-app.cognigy.ai/v1",
    "type": "amd_machine_detected",
    "reason": "langer Gruß",
    "greeting": "Sanctuary war nie für die Menschheit gedacht, es war es",
    "language": "en-us"
  },
  "event": "ANSWERING_MACHINE_DETECTION",
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