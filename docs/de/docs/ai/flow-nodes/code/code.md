---
title: "Code"
slug: "Code"
ausgeblendet: false
---
# Kodierung

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.50-blue.svg)] (.. /.. /.. /release-notes/4.50.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/code/code.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Codeknoten ermöglichen es einem Flow-Ersteller, benutzerdefinierten JavaScript- oder TypeScript-Code innerhalb des Flows auszuführen. Der Editor verfügt über vollständiges IntelliSense und macht alle Cognigy-Objekte und -Aktionen verfügbar. Um eine bessere Leistung zu erzielen, wird der TypeScript-Code beim Speichern des Knotens transpiliert. Wenn die Transpilation fehlschlägt, wird der Code gespeichert, und in der oberen rechten Ecke des Codeknotens wird ein Fehlersymbol angezeigt, das darauf hinweist, dass ein potenzielles Problem mit dem Code vorliegt.

Die Ausführung des Codeknotens erfolgt synchron, der Flow wird fortgesetzt, nachdem der Codeknoten die Ausführung abgeschlossen hat.

Genau wie in anderen Nodes können 'input', 'context' und 'profile' innerhalb von Code Nodes aufgerufen (und geändert) werden. Wenn das Skript abstürzt oder länger als eine Sekunde zum Ausführen braucht, wird es gestoppt und es wird ein Fehler ausgelöst. Im Falle eines nicht abgefangenen Fehlers wird die Flow-Ausführung gestoppt.

Das 'actions'-Objekt bietet Zugriff auf die meisten internen Knotenfunktionen innerhalb des Code-Knotens.

Der Einfachheit halber werden die Bibliotheken "lodash" ([https://lodash.com/](https://lodash.com/)) und "moment" ([https://momentjs.com/](https://momentjs.com/)) für die Verwendung in Codeknoten verfügbar gemacht.

## Einschränkungen

- Die maximale Anzahl von Zeichen im Code-Editor beträgt 200 KB.
- Die maximale Codeausführungszeit beträgt 1 Sekunde. Wenn der Grenzwert überschritten wird, wird ein Fehler zurückgegeben, und auf die Nachricht kann unter input.codeNodeError.message zugegriffen werden. Die maximale Ausführungszeit ist nicht konfigurierbar. Zum Ausführen von Code, dessen Ausführung länger als eine Sekunde dauert, empfehlen wir die Verwendung von benutzerdefinierten [Erweiterungen](.. /.. /resources/manage/extensions.md#extension-marketplace).

## Facebook-JSON senden<div class="divider"></div>Sie können Facebook-JSON direkt aus Codeknoten mithilfe der Ausgabeaktion senden. Sie können dies auf zwei Arten tun:

- JSON selbst schreiben
    '''javaScript
    Erstellen der Faceboook-Antwort
    const obj = {
        "_cognigy": {
            "_facebook": {      
                "Nachricht": {
                    "text": "Hallo Welt",
                    "quick_replies": [
                        {
                            "content_type": "Text",
                            "condition": "",
                            "title": "Hallo",
                            "image_url": "",
                            "payload": "Hallo"
                        }
                    ]
                }
            }
        }
    }

Antwort ausgeben
    actions.output("test", obj);
    ''' 

- Verwendung des Facebook-Bot-Messenger-Moduls (weitere Informationen auf [GitHub](https://github.com/snlangsuan/facebook-bot-messenger)
    '''javaScript
    Verwenden Sie Facebook-Bot-Messenger, um Antworten zu kompilieren
    const builder = new MessengerPlatform.QuickRepliesMessageBuilder('Wählen Sie eine Farbe:');
    builder.addImageOption('Rot', 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED', 'http://petersfantastichats.com/img/red.png')
        .addImageOption('Grün', 'DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN', 'http://petersfantastichats.com/img/green.png');

Antwort ausgeben
    actions.output("test", { "_cognigy": { "_facebook": {"message": builder.buildMessage() }}});
    ''' 

## Autovervollständigung im Code-Nodes-Editor<div class="divider"></div>Wenn Sie den Operator **input.** im Node-Editor eines Code-Knotens verwenden, werden automatisch alle verfügbaren Eingabeobjekte angezeigt, z.

Frage<br/>entryPoint<br/>flowName<br/>traceId<br/>localeId<br/>conditionalEntryPointWasExecuted

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/3c5a246-Screen_Shot_008.PNG" width="100%" />
</figure>

## Hinzufügen von Protokollanweisungen zu Codeknoten<div class="divider"></div>So zeigen Sie Protokollanweisungen auf der Seite [Protokolle] an (.. /.. /resources/test/logs.md), platzieren Sie die Anweisungen 'api.log()' im Codeknoten.

- Code in einen Codeknoten eingeben:
    '''javaScript
    const testKeyAPILOG = "Test für api.log"
    actions.addToContext("test.contextKeyAPI", testKeyAPILOG, "einfach")
    api.log("debug", testKeyAPILOG);
    ''' 
- Ergebnis auf der Seite "Protokolle":

'2023-01-12 10:27:08 <mark>debug</mark> ***Test for api.log*** { "flowId": "94311a23-b905-4e38-b121-9bffeb658783", "entrypoint": "63bff4588642adbc590be047", "userId": "user1234"'