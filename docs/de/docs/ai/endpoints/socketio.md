---
 Titel: "Socket.io" 
 Schnecke: "socketio" 
 ausgeblendet: false 
---
# Socket.io

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/603e5e6-socket-io-logo.svg" width="100%" />
</figure>

Innerhalb unserer **Cognigy.AI** Plattform können Sie Ihre Cognigy-Ressourcen mit Ihrem **socket.io** Client verbinden, indem Sie unsere Socket Endpoint-Integration verwenden.

## Generische Endpunkteinstellungen<div class="divider"></div>Informieren Sie sich auf den folgenden Seiten über die generischen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind:

- [Übersicht über Endpunkte]({{config.site_url}}ai/endpoints/overview/) 
- [Datenschutz & Analyse]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer-Funktionen]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU-Konnektoren]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Sitzungsverwaltung]({{config.site_url}}ai/endpoints/session-management/)
- [Übergabe-Einstellungen]({{config.site_url}}ai/endpoints/handover-settings/)
- [Einstellungen für Echtzeitübersetzung]({{config.site_url}}ai/endpoints/real-time-translation-settings)

!!! Tipp "Unterstützt Inject & Notify"
    Sie können die **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)**-Funktionalität mit diesem Endpunkttyp verwenden.

## Verbinden Sie Ihre Anwendung<div class="divider"></div>### URL-Token

Das URL-Token ist der letzte Teil der angezeigten Endpunkt-URL:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/dfe50b1-EP_Socket_URL_token.png" width="100%" />
</figure>

Im angegebenen Beispiel würden Sie eine Verbindung zu **https://endpoint-trial.cognigy.ai** herstellen.

### Nachrichten senden

Nachrichten werden mithilfe des **processInput**-Ereignisses mit einer Nutzlast im folgenden Format gesendet:

'''JSON
{
    "URLToken": "urlToken",
    "sessionId": "sessionId",
    "userId": "user@cognigy.com",
    "passthroughIP": "127.0.0.1",
    "resetFlow": "false", // Setzt den Flow zurück und beginnt einen neuen von vorne
    "text": "Beispieltext", // Kann mit "resetFlow" übersprungen werden: true
    "Daten": {
        "key": "Wert"
    }
}
'''

Wenn das Flag "resetFlow" auf "true" gesetzt ist, beginnt der neue Flow von vorne. Eine solche Nutzlast kann eine Nachricht enthalten oder auch nicht. Wenn dies der Fall ist, wird diese Nachricht die erste in einem neuen Flow. Vergessen Sie nicht, das 'resetFlow'-Flag auf 'false' zu setzen, wenn Sie die folgenden Nachrichten senden, da sonst jede dieser Nachrichten einen neuen Flow startet.

### Empfangen von Nachrichten

Nachrichten können empfangen werden, indem das Ereignis **output** überwacht wird. Die Antworten haben das folgende Format:

'''JSON
{
  "type":"Ausgabe",
  "Daten":
  {
    "text":"responseText",
    "Daten":
    {
      "key":"Wert"
    }
  }
}
'''

### Cognigy Socket Client
Cognigy stellt einen Socket-Client für die Verbindung mit einem Cognigy-Socket-Endpunkt bereit. Die Dokumentation und der Open-Source-Code für diesen Client sind auf der [Cognigy GitHub Page](https://github.com/Cognigy/SocketClient) verfügbar.