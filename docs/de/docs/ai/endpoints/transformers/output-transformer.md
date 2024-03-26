---
 Titel: "Ausgangsübertrager" 
 Slug: "Ausgangs-Übertrager" 
 ausgeblendet: false 
---
# Ausgangsübertrager

## Beschreibung<div class="divider"></div>Der 'Output Transformer' wird bei jedem Ausgang des Flows ausgelöst, jedoch unterscheidet sich das Verhalten der Transformer-Funktion stark, je nachdem, welcher [Basistyp]({{config.site_url}}ai/endpoints/transformers/transformers/#different-base-transformer-types) des Transformers verwendet wird, was im Folgenden näher beschrieben wird.

Der "Output Transformer" wird durch die Implementierung der "handleOutput"-Funktion im Transformer im Endpunkt konfiguriert.

 <figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/0d259a5-output_transformer.png" width="100%" />
  <figcaption>Beispiel für einen Ausgangstransformator</figcaption>
</figure>

## Unterschiede zwischen den Transformatortypen<div class="divider"></div>## REST-Transformatoren
Bei REST-basierten Transformern ist es nicht möglich, mehrere Ausgänge an den Benutzer zu senden, aber es ist immer noch möglich, mehrere Say-Node-Ausführungen in einem Flow pro Eingabe des Benutzers zu haben. Alle Ausgaben werden daher in einem "Puffer" gespeichert und nach Abschluss der Ausführung zu einer Ausgabe zusammengeführt. Das bedeutet, dass der Rückgabewert der handleOutput-Funktion *nicht* an den Benutzer gesendet wird, sondern stattdessen im Puffer gespeichert und im 'handleExecutionFinished'-Transformer verarbeitet wird. Es ist daher möglich, die endgültige Ausgabe an den Benutzer zu beeinflussen, indem jede einzelne Ausgabe in der handleOutput-Funktion manipuliert und zurückgegeben wird.

## Webhook- und Socket-Transformatoren
Bei Webhook- und Socket-basierten Transformern wird die Ausgabe des Flows an den Benutzer gesendet, sobald sie ausgegeben wird. Das bedeutet, dass der Rückgabewert der handleOutput-Funktion ohne weitere Änderungen direkt an den Benutzer gesendet wird. Dies hat zur Folge, dass es in der Verantwortung des Transformer-Editors liegt, sicherzustellen, dass das Format des Rückgabewerts der handleOutput-Funktion das richtige Format aufweist, das dem vom Kanal verwendeten Format entspricht. Es ist daher notwendig, die Dokumentation für den betreffenden Kanal zu lesen, um das Format zu bestimmen, das für das Senden einer Nachricht an den Benutzer erforderlich ist.

Die handleOutput-Funktion erhält in diesem Fall ein weiteres Argument namens 'processedOutput'. Diese Variable enthält die Ausgabe, die *wie besehen* an den Kanal gesendet wird, was bedeutet, dass sie im richtigen Format für den jeweiligen Kanal vorliegt. Ein Beispiel ist [hier](#section-return-values-of-the-transformer) zu sehen

## Argumente für Transformer-Funktionen<div class="divider"></div>Die Funktion 'handleOutput' ruft ein Konfigurationsobjekt als Argument ab. Eine Übersicht über die Schlüssel im Objekt finden Sie unten

|Argument|	Beschreibung|	Webhook-Transformatoren|	REST-Transformatoren|	Steckdosen-Transformatoren|
|--|--|--|--|--|
|endpunkt|	Das Konfigurationsobjekt für den Endpunkt. Enthält die URLToken etc.|	X |X|	X|
|Ausgang |Die Rohausgabe des Flows.|	X|	X |X|
|processedOutput|	Die Ausgabe, die in dem Format verarbeitet wurde, das der jeweilige Kanal erwartet. Dies ist das, was an den Benutzer gesendet wird, wenn der Ausgangstransformator nicht ausgeführt wird.|	X ||	X|
|userId|	Die eindeutige ID des Benutzers.|	X|	X |X|
|sessionId|	Die eindeutige ID der Konversation.|	X|	X|	X|

## Rückgabewerte des Übertragers<div class="divider"></div>Der Rückgabewert des 'Output Transformers' hängt von der Art des Transformers ab. Der Rückgabewert des Ausgangstransformators wird nicht überprüft.

## REST-Transformatoren
Der 'Output Transformer' muss einen Ausgang zurückgeben, der in einem 'outputs'-Array gespeichert wird, das in der 'handleExecutionFinished' Transformer-Funktion verfügbar ist. Die Ausgaben haben normalerweise das unten gezeigte Format, aber es ist auch möglich, ein anderes Ausgabeformat im outputs-Array zu speichern.

**Rest-Return-Format**
'''JavaScript
handleOutput: asynchron ({ }) => {
  const modifiedOutput = {
    text: "irgendeinText",
    Daten: {}
  };
 
return modifiedOutput;
}
'''

Wenn der 'Output Transformer' einen falschen Wert zurückgibt, dann wird die spezifische Ausgabe nicht im 'outputs'-Array gespeichert und im Wesentlichen verworfen.

## Webhook- und Socket-Transformatoren
Der 'Output Transformer' muss einen Ausgang zurückgeben, der ohne weitere Modifikationen direkt an den jeweiligen Kanal gesendet werden kann. Das heißt, wenn der Transformer in einem "Sunshine Conversations"-Endpunkt aktiv ist, muss das Format dem in der Sunshine Conversations-Dokumentation beschriebenen Nachrichtenformat entsprechen.

Im Folgenden finden Sie ein Beispiel für das richtige Rückgabeformat für einen Sunshine Conversations-Endpunkt:

**Webhook-/Socket-Rückgabeformat**
'''JavaScript
handleOutput: asynchron ({ }) => {
   const requestPayload = {
	   Rolle: "appMaker",
     type: "Text",
		 text: "etwas Text"
   };
  
return requestPayload;
}
'''
Wenn der 'Output Transformer' falsch zurückgibt, wird die Ausgabe nicht an den Benutzer gesendet und somit verworfen.