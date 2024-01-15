---
 Titel: "Testmodus für Endpunkte" 
 slug: "Endpunkt-Test-Modus" 
 Ausgeblendet: Wahr 
---

# Testmodus für Endpunkte

## Beschreibung

Der Testmodus für Endpunkte ermöglicht das Senden von Nachrichten an vorhandene Endpunkte, die sich nicht auf die Anzahl der abrechenbaren Konversationen auswirken und auf die gleiche Weise wie eine normale Nachricht verarbeitet werden.

Sie können sie für Folgendes verwenden:

- Überprüfen Sie regelmäßig die Verfügbarkeit Ihres virtuellen Agenten.
- Führen Sie End-to-End-Tests unter Berücksichtigung der Bedingungen bestimmter Endbenutzerumgebungen durch.

## Verfügbarkeit

Der Testmodus wird von den folgenden Endpunkttypen unterstützt:

| Endpunkt | Unterstützt seit Cognigy.AI Version |
| -- | -- |
| [REST] (/ai/endpoints/rest) | '>= v4.27.0' |
| [Socket.io] (/ai/endpoints/socketio) | '>= v4.42.0' |

## Gebrauchsanweisung

Nachfolgend finden Sie Anweisungen zur Verwendung des Testmodus für die einzeln unterstützten Endpunkttypen.

### REST-Endpunkt

Um eine Testmodusmeldung zu übermitteln, stellen Sie "/test/" vor <URL token="">dem "" in der URL wie folgt voran:

'''
POST https:/// <ENDPOINT_BASE_URL>test/<URL_TOKEN>
'''

### Socket.io-Endpunkt

Um die Testmodus-Nachricht zu übermitteln, stellen Sie eine Socket-Verbindung mit einem Cognigy-Socket-Endpunkt her und übergeben Sie den Parameter 'testMode' mit 'true' an SocketClient. Sie können das Beispiel unten sehen. Dieses Beispiel kann sich unterscheiden, je nachdem, welche Socket.IO Clientbibliothek verwendet wird:

'''Javascript
const { SocketClient } = require("@cognigy/socket-client");

const client = new SocketClient("https://socket.url", "socket-token", {
  testMode: true,
});

'''

'''Javascript
socketClient = neuer SocketClient({<provide your="" config="" parameters="">})
...

if (config.testMode) {
	socketClient.io.opts.query["testMode"] = "true";
}

socketClient.connect();
...
'''
## Auswirkungen auf die Abrechnung

Nachrichten, die im Testmodus gesendet wurden, erhöhen die Anzahl der abrechenbaren Nachrichten in einer Konversation nicht. 
Wenn eine Konversation ausschließlich aus Eingaben besteht, die im Testmodus empfangen wurden, hat sie "0" gezählte Eingaben und wird nicht in Rechnung gestellt.

Zusätzlich zur Anzahl der abrechenbaren Konversationen verfolgt Cognigy.AI jedoch auch die Gesamtzahl der Konversationen, einschließlich des Testmodus, und beide Metriken sind in den Abrechnungsberichten an Cognigy enthalten, um eine missbräuchliche Nutzung zu verhindern. Maximal 600 Testnachrichten pro Stunde gelten als nicht missbräuchlich.</provide></URL_TOKEN></ENDPOINT_BASE_URL></URL>