---
 Titel: "Transformator injizieren" 
 Slug: "Inject-Transformer" 
 ausgeblendet: false 
---
# Transformator einspritzen

## Beschreibung

Der 'Inject Transformer' ermöglicht es, sich in die [Inject API]({{config.site_url}}ai/endpoints/transformers/transformers/#different-base-transformer-types) einzuklinken. Ein häufiger Anwendungsfall ist, dass externe Systeme sich in eine Konversation einklinken und z.B. eine Benachrichtigung an den Benutzer senden müssen, nachdem ein bestimmter Prozess abgeschlossen ist. Mit dem "Inject Transformer" ist es nicht mehr erforderlich, einen Dienst zu haben, der die Webhook-Nutzlast des externen Dienstes in das richtige Format übersetzt, das für die "Inject API" benötigt wird. Dies alles kann nun im 'Inject Transformer' gehandhabt werden.

Der 'Inject Transformer' wird ausgelöst, wenn die 'Inject Transformer API' aufgerufen wird. Der benutzerdefinierte Anforderungstext aus dem externen Dienst kann dabei geparst werden, um die notwendigen Werte für die Inject-API zurückzugeben, nämlich die Benutzer-ID und die Sitzungs-ID sowie Text und/oder Daten, die als Benachrichtigung an den Benutzer gesendet werden.

Der 'Inject Transformer' wird durch die Implementierung der ''handleInject'' Funktion im Transformer im Endpoint konfiguriert.

 <figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/86f34e4-inject_transformer.png" width="100%" />
</figure>

!!! Warnung "REST-Transformer-Unterstützung"
    Der Inject Transformer wird für REST-basierte Endpunkte nicht unterstützt.

## Argumente für Transformer-Funktionen<div class="divider"></div>Die Funktion 'handleInject' ruft ein Konfigurationsobjekt als Argument ab. Eine Übersicht über die Schlüssel im Objekt ist unten zu sehen:

|Argumentation |Beschreibung |Webhook-Transformatoren|	Steckdosen-Transformatoren|
|--|--|--|--|
|endpunkt|	Das Konfigurationsobjekt für den Endpunkt. Enthält die URLToken etc.|	X|	X|
|Anfrage|	Das Express-Anforderungsobjekt mit einem JSON-analysierten Text.|	X|	X|
|Antwort|	Das Express-Antwortobjekt.|	X|	X|

## Rückgabewerte des Übertragers<div class="divider"></div>Der 'Inject Transformer' muss eine gültige Benutzer-ID, eine Sitzungs-ID und Text und/oder Daten zurückgeben, die an den Flow gesendet werden sollen. Diese Werte sollten aus dem Text der Anforderung extrahiert werden. Es ist wichtig zu beachten, dass das Format des Anfragetextes je nach verwendetem Kanal unterschiedlich ist, d. h. eine Anfrage von Alexa sieht ganz anders aus als eine Anfrage von Facebook Messenger. Es ist daher notwendig, die Dokumentation des jeweiligen Kanals zu lesen, um zu wissen, wie der Anforderungstext formatiert ist. 

Wenn der 'Inject Transformer' einen falschen Wert zurückgibt, wird die Nachricht nie an den Benutzer weitergeleitet.

!!! Warnung "Rückgabewertvalidierung"
    Der Rückgabewert des 'Inject Transformer' wird anhand einer Reihe von Regeln validiert und abgelehnt, wenn die Regeln nicht erfüllt sind. Die Regeln sind:

- Die Benutzer-ID ist im Rückgabewert erforderlich. Es hat eine maximale Länge von 256 Zeichen.
    - Die Sitzungs-ID ist erforderlich. Es hat auch eine maximale Länge von 256 Zeichen.
    - Der Text ist nicht erforderlich. hat aber eine maximale Länge von 10000 Zeichen.
    - Das Datenobjekt ist nicht erforderlich.

Wenn weder Text noch Daten definiert sind, schlägt auch die Validierung fehl.