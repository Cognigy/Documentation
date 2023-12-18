---
Titel: "Webhook" 
Schnecke: "Webhook" 
ausgeblendet: false 
---

# Webhook

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/c514dae-EP_webhook.png" width="100%" />
</figure>

In Cognigy.AI können Sie Ihre Ressourcen ganz einfach mit einem Webhook verbinden, indem Sie die Webhook-Endpunktintegration verwenden. Dieses Setup gewährleistet eine schnelle Kommunikation, indem Informationen sofort an eine angegebene Rückruf-URL gesendet werden, wenn sie bereit ist. Die Verbindung Ihrer Cognigy-Ressourcen mit diesem Webhook ermöglicht schnelle und reibungslose Interaktionen, die Aktualisierungen und Aktionen in Echtzeit ermöglichen.

Wenn Sie [AI Copilot für Sprache](.. /.. /ai-copilot/voice/voice-overview.md) mit dem Webhook-Endpunkt verwenden, können Sie zu einem bestimmten [Voice Copilot](voice-copilot.md)-Endpunkt wechseln. Dadurch entfällt die Notwendigkeit eines separaten Codeknotens, um eine Webhook-URL zu erstellen, da die gesamte erforderliche Logik bereits im Voice Copilot-Endpunkt enthalten ist.

## Generische Endpunkteinstellungen<div class="divider"></div>Informieren Sie sich auf den folgenden Seiten über die generischen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind:

- [Übersicht über Endpunkte]({{config.site_url}}ai/endpoints/overview/) 
- [Datenschutz & Analyse]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer-Funktionen]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU-Konnektoren]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Übergabe-Einstellungen]({{config.site_url}}ai/endpoints/handover-settings/)
- [Einstellungen für Echtzeitübersetzung]({{config.site_url}}ai/endpoints/real-time-translation-settings)

!!! Tipp "Unterstützt Inject & Notify"
    Sie können die **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)**-Funktionalität mit diesem Endpunkttyp verwenden.

## Verbinden Sie Ihre Anwendung<div class="divider"></div>Sie müssen einen Webserver ausführen, der POST-Aufrufe empfängt. Geben Sie die **Webhook-URL** Ihrer Anwendung ein, an die die Ausgaben des zugewiesenen Flows gesendet werden. Die Felder **Benutzer** und **Passwort** werden nur verwendet, wenn Sie eine Basisauthentifizierung für Ihren Webserver definiert haben.

Alle **POST**-Anforderungen, die an die **Endpunkt-URL** gesendet werden, werden vom zugewiesenen *Flow* verarbeitet, und die ausgelösten Ausgaben werden an die **Webhook-URL** weitergeleitet. Der Text der Anforderungen sollte das folgende Format haben:

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
*userId* - eine Benutzer-ID des Benutzers, der Zugriff auf den REST-Endpunkt in Form einer Zeichenfolge hat
*sessionId* - eine eindeutige ID, die verwendet wird, um die aktuelle Konversation in Form einer Zeichenfolge zu verfolgen
*text* - Meldungstext, der vom zugewiesenen Flow in Form eines Strings verarbeitet werden soll
*data* - Nachrichtendaten, die vom zugewiesenen Flow in Form eines Objekts verarbeitet werden sollen

!!! Hinweis "Senden von Text und Daten"
    Sie können den Webhook-Endpunkt verwenden, um entweder Text oder Daten an Ihren Flow zu senden. Sie können beide senden, aber mindestens eine ist erforderlich. Wenn ungültiger Text und ungültige Daten angegeben werden, löst der Webhook-Endpunkt einen Fehler aus.

!!! Hinweis "SessionID"
    Die sessionId ist ein eindeutiger Bezeichner, der verwendet wird, um den Status einer Konversation beizubehalten. Das bedeutet, dass Sie immer dann eine neue eindeutige ID generieren sollten, wenn eine neue Konversation beginnt, und nicht bei jeder Nachricht. Zu Testzwecken können Sie einen beliebigen Zeichenfolgenwert als sessionId verwenden und ihn jederzeit ändern, wenn eine neue Konversation beginnen soll.