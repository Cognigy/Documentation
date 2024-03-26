---
Titel: "CALL_COMPLETED"
Schnecke: "CALL_COMPLETED"
ausgeblendet: false
---

# CALL_COMPLETED

Der Anruf wurde vom virtuellen Agenten oder vom Benutzer beendet.

Um eine Payload mit dem Ereignis "CALL_COMPLETED" zu testen, können Sie einen leeren Flow verwenden.

Eingabe: Starten Sie einen Anruf über das Interaction Panel, indem Sie auf ! [Telefon] (.. /.. /.. /assets/icons/phone.svg) **> Anruf starten**. Der Anruf wird entweder automatisch beendet, wenn der virtuelle Agent die Konversation aufgrund von Inaktivität beendet, oder Sie können den Anruf beenden, indem Sie auf **Anruf beenden** klicken.

Nutzlast:

'''json
{
    "Nutzlast": {
        "call_sid": "c0855b01-4207-480b-xxxx-xxxxxxxxxxxx",
        "direction": "eingehend",
        "from": "user-2U4yyrZ3sgBXYvX6yyxxxx",
        "to": "123456789",
        "call_id": "9adb52f3-5e1e-123c-xxxx-xxxxxxxxxxxx",
        "sip_status": 200,
        "sip_reason": "OK",
        "call_status": "abgeschlossen",
        "account_sid": "28265983-502c-4ed7-xxxx-xxxxxxxxxxxx",
        "trace_id": "DDD45512F6C5BF3AB8D14727D2A93739",
        "application_sid": "822aff21-5879-403f-xxxx-xxxxxxxxxxxx",
        "fs_sip_address": "10.1.193.xxx:xxxx",
        "originating_sip_ip": "88.77.xx.xxx",
        "call_termination_by": "Bot",
        "Dauer": 12,
        "api_base_url": "voicegateway-app.cognigy.ai/v1"
    },
    "event": "CALL_COMPLETED"
}
'''