---
Titel: "RECOGNIZED_DTMF"
Schnecke: "RECOGNIZED_DTMF"
ausgeblendet: false
---

# RECOGNIZED_DTMF

Der DTMF-Code wurde vom virtuellen Agenten erkannt.

Um eine Payload mit dem Ereignis "RECOGNIZED_DTMF" zu testen, können Sie einen Flow mit nur einem **Set Session Config** Node verwenden.

Eingabe: Fügen Sie dem Flow-Editor den Knoten **Sitzungskonfiguration festlegen** hinzu und aktivieren Sie die Einstellung **DTMF-Signale erfassen** im Knoten. Starten Sie einen Anruf über das Interaction Panel, indem Sie auf ! [Telefon] (.. /.. /.. /assets/icons/phone.svg) **> Anruf starten** und geben Sie dann '#' ein.

Nutzlast:

'''json
{
    "Nutzlast": {
        "call_sid": "a140138d-2796-4184-xxxx-xxxxxxxxxxxx",
        "direction": "eingehend",
        "from": "user-vG92uZPRaxHmns4xUXxxxx",
        "to": "123456789",
        "call_id": "0cb0bef6-5e22-123c-xxxx-xxxxxxxxxxxx",
        "sip_status": 200,
        "sip_reason": "OK",
        "call_status": "in Bearbeitung",
        "account_sid": "34a2746a-782a-4804-xxxx-xxxxxxxxxxxx",
        "trace_id": "fbb8df1bd3fec33bfece07adb2a8xxxx",
        "application_sid": "6794ed5e-b3d4-4d36-xxxx-xxxxxxxxxxxx",
        "fs_sip_address": "10.102.202.xx:xxxx",
        "originating_sip_ip": "176.198.xxx.xx",
        "api_base_url": "voicegateway-app.cognigy.ai/v1",
        "digits": "9791108569",
        "reason": "dtmfErkannt"
    },
    "event": "RECOGNIZED_DTMF"
}
'''