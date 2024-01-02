---
 title: "Ausführung abgeschlossen Transformer" 
 Slug: "Execution-Finished-Transformer" 
 ausgeblendet: false 
---
# Ausführung Transformator beendet

## Beschreibung<div class="divider"></div>Der 'Execution Finished Transformer' wird ausgelöst, wenn die Flow-Ausführung beendet ist, jedoch unterscheidet sich das Verhalten der Transformer-Funktion stark, je nachdem, welcher [Basistyp]({{config.site_url}}ai/endpoints/transformers/transformers/#different-base-transformer-types) von Transformer verwendet wird, was im Folgenden näher beschrieben wird.

Der "Execution Finished Transformer" wird konfiguriert, indem die Funktion "handleExecutionFinished" im Transformer im Endpunkt implementiert wird.

 <figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/40791e8-alexa-transformer.png" width="100%" />
  <figcaption>Beispiel für einen abgeschlossenen Transformator</figcaption>
</figure>

## Unterschiede zwischen den Transformatortypen<div class="divider"></div>## REST-Transformatoren
Bei REST-basierten Transformern wird die Ausgabe an den Benutzer in dieser Transformer-Funktion gesendet.

Die Funktion handleExecutionFinished erhält in diesem Fall ein weiteres Argument namens 'processedOutput'. Diese Variable enthält die Ausgabe, die *wie besehen* an den Kanal gesendet wird, was bedeutet, dass sie im richtigen Format für den jeweiligen Kanal vorliegt. Ein Beispiel ist [hier](#section-return-values-of-the-transformer) zu sehen. Außerdem erhält er Zugriff auf die Liste der Ausgänge, die im Ausgangstransformator verarbeitet wurden.

## Webhook- und Socket-Transformatoren
Der 'Execution Finished Transformer' hat keine wichtige Funktion für Webhook- und Socket-basierte Endpunkte. Weitere Informationen [hier](#section-return-values-of-the-transformer).

## Argumente für Transformer-Funktionen<div class="divider"></div>Die Funktion 'handleExecutionFinished' ruft ein Konfigurationsobjekt als Argument ab. Eine Übersicht über die Schlüssel im Objekt finden Sie unten

|Argument|	Beschreibung |Webhook-Transformatoren|	REST-Transformatoren|	Steckdosen-Transformatoren|
|--|--|--|--|--|
|endpunkt|	Das Konfigurationsobjekt für den Endpunkt. Enthält die URLToken etc.|	X|	X |X|
|Ausgänge|	Eine Liste aller Ausgaben des Flows. Diese Ausgänge in der Liste können im Ausgangstransformator für REST-Endpunkte| |	X ||
|processedOutput|	Die Ausgabe, die in dem Format verarbeitet wurde, das der jeweilige Kanal erwartet. Dies ist das, was normalerweise an den Kanal gesendet wird, wenn der Execution Finished-Transformer deaktiviert wäre.|	|	X ||
|userId|	Die eindeutige ID des Benutzers.|	X |X|	X|
|sessionId |Die eindeutige ID der Konversation.|	X|	X|	X|

## Rückgabewerte des Übertragers<div class="divider"></div>Der Rückgabewert des 'Execution Finished Transformers' hängt vom Basistyp des Transformers ab. Es findet keine Überprüfung des Rückgabewerts des Transformators "Ausführung abgeschlossen" statt.

## REST-Transformatoren
Der 'Execution Finished Transformer' muss einen Ausgang zurückgeben, der ohne weitere Modifikationen direkt an den jeweiligen Kanal gesendet werden kann. Das heißt, wenn der Transformer in einem 'Alexa'-Endpunkt aktiv ist, dann muss das Format dem Nachrichtenformat entsprechen, das in der Dokumentation für Alexa beschrieben ist.

Hier ist ein Beispiel für das richtige Rückgabeformat für einen Alexa-Endpunkt:

**Webhook-/Socket-Rückgabeformat**
'''JavaScript
handleExecutionFinished: async ({ processedOutput, outputs, userId, sessionId, endpoint, response }) => {
    /**
     * Kombinieren Sie alle Flow-Ausgänge in einer Nachricht
     */
    const text = outputs.reduce((mergedOutput, output) => '${mergedOutput}. ${output.text}', "").trim();

const responseToAlexa = {
        Ausführung: "1.0",
        Antwort: {
            outputSpeech: {
                Typ: 'SSML',
                ssml: '<speak>${text}</speak>'
            },
            shouldEndSession: false
        }
    };

return responseToAlexa;
}
'''

Wenn der 'Execution Finished Transformer' einen Fehler zurückgibt, wird die Ausgabe nicht an den Benutzer gesendet und somit verworfen.

## Webhook- und Socket-Transformatoren
Der 'Execution Finished Transformer' hat keine spezielle Funktionalität und daher auch keinen Rückgabewert. Zu diesem Zeitpunkt wurden alle Ausgänge an den Benutzer gesendet, und es ist möglich, den Transformer zu verwenden, um z.B. Protokollierungsinformationen an ein externes System zu senden.