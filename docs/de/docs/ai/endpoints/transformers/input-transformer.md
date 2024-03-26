---
 Titel: "Eingangsübertrager" 
 Slug: "Eingangs-Übertrager" 
 ausgeblendet: false 
---
# Eingangs-Übertrager

## Beschreibung

Der 'Input Transformer' wird bei jeder Nachricht des Benutzers ausgelöst, bevor der Flow ausgeführt wird. Dadurch ist es möglich, den Text zu manipulieren, bevor er an den Flow gesendet wurde, mit externen Systemen zu kommunizieren, Integrationen mit einem neuen Kanal zu implementieren und vieles mehr.

Der 'Input Transformer' wird durch die Implementierung der ''handleInput'' Funktion im Transformer im Endpunkt konfiguriert.

 <figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/7944f05-handleInputTransformer.png" width="100%" />
</figure>

## Argumente für Transformer-Funktionen<div class="divider"></div>Die Funktion 'handleInput' ruft ein Konfigurationsobjekt als Argument ab. Dieses Objekt enthält immer den Schlüssel 'endpoint', der die Endpoint-Konfiguration enthält. Der Rest der Schlüssel im Objekt hängt vom [Basistyp]({{config.site_url}}ai/endpoints/transformers/transformers/#different-base-transformer-types) des Transformers ab. Eine Übersicht über die Schlüssel im Objekt finden Sie unten

|Argument|	Beschreibung|	Webhook-Transformatoren|	REST-Transformatoren|	Steckdosen-Transformatoren|
|--|--|--|--|--|
|endpunkt|	Das Konfigurationsobjekt für den Endpunkt. Enthält die URLToken etc.|	X|	X |X|
|Anfrage|	Das Express-Anforderungsobjekt mit einem JSON-analysierten Text.|	X|	X ||
|Antwort|	Das Express-Antwortobjekt.|	X |X ||
|Nutzlast|	Das Payload-Objekt enthält die userId, sessionId, den Text und die Daten, die über den Socket gesendet wurden. Es enthält auch den Kanal des Clients.|||			X|

## Rückgabewerte des Übertragers<div class="divider"></div>## Regelmäßige Nutzung des Transformators
Der "Input Transformer" kann eine gültige Benutzer-ID, Sitzungs-ID und Text und/oder Daten zurückgeben, die an den Flow gesendet werden sollen. Diese Werte sollten aus dem Text der Anforderung extrahiert werden. Es ist wichtig zu beachten, dass das Format des Anfragetextes je nach verwendetem Kanal unterschiedlich ist, d. h. eine Anfrage von Alexa sieht ganz anders aus als eine Anfrage von Facebook Messenger. Es ist daher notwendig, die Dokumentation des jeweiligen Kanals zu lesen, um zu wissen, wie der Anforderungstext formatiert ist. 

Beispiel:

'''Javascript
return {
    userId: request.body.user,
    sessionId: request.body.conversation,
    text: request.body.messageText,
    data: { "test": 1 }
};
'''

## Partielle Transformator-Ergebnisse
Wenn "undefined" für userId, sessionId, text oder data zurückgegeben wird, wird der bereits extrahierte Wert aus dem Endpunkt verwendet.

Im folgenden Beispiel werden "text" und "data" überschrieben, aber userId und sessionId bleiben unverändert:

'''Javascript
return {
    userId: nicht definiert,
    sessionId: nicht definiert,
    text: request.body.messageText,
    data: { "test": 1 }
};
'''

## Ausführung stoppen
Wenn der 'Input Transformer' insgesamt einen falschen Wert zurückgibt, wird die Nachricht des Benutzers nie an den Flow gesendet.

Beispiel:

'''Javascript
return null;
'''

### Transformer und Konversationszählung
Unterhaltungen in Cognigy.AI werden nur gezählt, wenn der Eingangstransformator ein nicht falsches Ergebnis liefert.

!!! Warnung "Rückgabewertvalidierung"
    Der Rückgabewert des 'Input Transformer', falls angegeben, wird anhand einer Reihe von Regeln validiert und abgelehnt, wenn die Regeln nicht erfüllt sind. 
    Jeder Wert kann undefined zurückgegeben werden. Wenn etwas anderes zurückgegeben wird, gelten die folgenden Regeln:

- userId ist eine Zeichenfolge mit einer maximalen Länge von 256 Zeichen.
    - sessionId ist eine Zeichenfolge mit einer maximalen Länge von 256 Zeichen.
    - Text ist eine Zeichenfolge mit einer maximalen Länge von 10000 Zeichen.
    - Daten sind ein Objekt

### Transformatoren und Ereignismeldungen

Der Webchat und die Socket.IO-Endpunkte erzeugen Ereignismeldungen, die auf die Benutzeraktivität hinweisen, z. B. ob der Benutzer verbunden ('user-connected') oder getrennt ('user-disconnected') ist. Diese Ereignismeldungen lösen keine Flows aus und werden nicht gezählt, aber Sie können auf sie stoßen, wenn Sie die Eingabetransformatoren verwenden:

'''json
{
    "userId": "<current-user-id>",
    "sessionId": "<current-session-id>",
    "text": "",
    "Daten": {
        "_cognigy": {
            "Ereignis": {
                "type": "mit dem Benutzer verbunden"
            }
        }
    }
}
'''

Die Ereignismeldungen informieren die Übergabeanbieter über die Benutzeraktivität, sodass menschliche Agenten feststellen können, ob der Benutzer noch an der Konversation beteiligt ist. 

Wenn Sie in den Eingangstransformatoren auf diese Ereignismeldungen stoßen, empfehlen wir Ihnen, diese unverändert weiterzugeben. Die Ereignismeldungen können nur dann als solche erkannt werden, wenn ihre Datennutzlast einem bestimmten Format folgt. Um dieses Ergebnis zu erzielen, können Sie den folgenden Codeausschnitt in Ihrem Eingabetransformator verwenden:

'''Javascript
{

handleInput: async ({ payload, endpoint }) => {
        if (!! payload.data?. _cognigy?. Ereignis) {
            "Ereignismeldungen" unverändert weitergeben
			Nutzlast zurückgeben;
		}

Rest des Input-Transformer-Codes
	}
}
</current-session-id></current-user-id>'''