---
 Titel: "REST" 
 Schnecke: "Ruhe" 
 ausgeblendet: false 
---
# AUSRUHEN

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/d4a23f8-EP_REST.png" width="100%" />
</figure>

Innerhalb unserer **Cognigy.AI**-Plattform können Sie Ihre Cognigy-Ressourcen mit Ihrem **Rest**-Client verbinden, indem Sie unsere REST-Endpunkt-Integration verwenden.

## Generische Endpunkteinstellungen

- [Übersicht über Endpunkte]({{config.site_url}}ai/endpoints/overview/) 
- [Datenschutz & Analyse]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer-Funktionen]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU-Konnektoren]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Einstellungen für Echtzeitübersetzung]({{config.site_url}}ai/endpoints/real-time-translation-settings)

## Verbinden Sie Ihre Anwendung<div class="divider"></div>Nachdem Sie einen REST-Endpunkt erstellt haben, können Sie **POST**-Anforderungen an die **Endpunkt-URL** senden. Der Text der Anforderungen sollte das folgende Format haben:

'''JSON
{
  "userId":"Benutzer-ID",
  "sessionId": "someUniqueId",
  "text":"Text der Nachricht",
  "Daten": {
    "key": "Wert"
  }
}
'''

**Parameter**
*userId* - eine Benutzer-ID des Endbenutzers in Form eines Strings
*sessionId* - eine eindeutige ID, die verwendet wird, um die aktuelle Konversation in Form einer Zeichenfolge zu verfolgen
*text* - Meldungstext, der vom zugewiesenen Flow in Form eines Strings verarbeitet werden soll
*data* - Nachrichtendaten, die vom zugewiesenen Flow in Form eines Objekts verarbeitet werden sollen

!!! Hinweis "Senden von Text und Daten"
    Standardmäßig können Sie den REST-Endpunkt verwenden, um entweder Text oder Daten an Ihren Flow zu senden. Sie können beide senden, aber mindestens eine ist erforderlich. Wenn ungültiger Text und ungültige Daten angegeben werden, löst der REST-Endpunkt einen Fehler aus.

!!! Tipp "Session-ID"
    Die sessionId ist ein eindeutiger Bezeichner, der verwendet wird, um den Status einer Konversation beizubehalten. Das bedeutet, dass Sie immer dann eine neue eindeutige ID generieren sollten, wenn eine neue Konversation beginnt, und nicht bei jeder Nachricht. Zu Testzwecken können Sie einen beliebigen Zeichenfolgenwert als sessionId verwenden und ihn jederzeit ändern, wenn eine neue Konversation beginnen soll.

Die Antwort enthält den Ausgabetext, die Ausgabedaten und den outputStack, bei dem es sich um ein Array aller Flow-Ausgaben handelt. Da der Rest-Endpunkt alle Flow-Ausgaben (z. B. alle Say-Knoten) zu einer Text-/Datenausgabe verkettet, können Sie den outputStack für Debugging-Zwecke verwenden.

'''JSON
{
    "text": "Ausgabe2",
    "Daten": {
        "Ausgang": 2
    },
    "outputStack": [
        {
            "text": "Ausgang 1",
            "Daten": {
                "Ausgang": 1
            }
        },
        {
            "text": "Ausgang 2",
            "Daten": {
                "Ausgang": 2
            }
        }
    ]
}
'''

!!! Hinweis "AI-Standardkanalformate"
    Weitere Informationen zum Format für die Standardkanäle finden Sie [**hier**]({{config.site_url}}ai/flow-nodes/code/ai-default-channel-formats/)