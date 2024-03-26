---
 Titel: "Keine NLU" 
 Schnecke: "No-NLU" 
 ausgeblendet: false 
---
# Keine NLU

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/7b49c59-Screenshot_from_2019-08-29_15-26-11.png" width="100%" />
</figure>

## Beschreibung<div class="divider"></div>Der No-NLU-Konnektor ist kein NLU-Konnektor, der erstellt werden kann, sondern einer, der immer in einem Endpunkt ausgewählt werden kann. Durch das Festlegen des No NLU-Connectors in einem Endpunkt wird die NLU-Pipeline von Cognigy.AI für diesen Endpunkt vollständig deaktiviert, was bedeutet, dass keine Absichten oder Slots gefunden werden.

## Flow-basierte NLU-Ausführung<div class="divider"></div>Obwohl [Code NLU Connector](http://127.0.0.1:8008/ai/nlu/external-nlu/external-nlu/) das empfohlene Tool für die Verbindung mit einem nicht nativen NLU-Dienst ist, ist der No NLU-Connector in einem Szenario nützlich, in dem der NLU-Prozess durch Flusslogik (Aufrufen einer externen NLU von einem Flussknoten) ausgeführt wird.  Beispielsweise ist es möglich, einen [HTTP Request](http://127.0.0.1:8008/ai/flow-nodes/services/http-request/)-Knoten am Anfang eines Flows zu verwenden, um einen Intent für den Satz des Benutzers zu finden. Es ist auch möglich, [Erweiterungen](http://127.0.0.1:8008/ai/resources/manage/extensions/) zu verwenden, um einen wiederverwendbaren Knoten zu erstellen, der aus einem Flow heraus eine Verbindung zu einem NLU-System herstellt.

!!! Tipp "Erstellen von Erweiterungen für die NLU-Ausführung"
    Das Erstellen von [Erweiterungen](http://127.0.0.1:8008/ai/resources/manage/extensions/), die eine Verbindung zu einem externen NLU-System herstellen, ermöglicht eine einfache Verbindung zur externen NLU-Verarbeitung aus vielen Flows, ohne sich Gedanken über doppelte Informationen machen zu müssen, die in HTTP-Anforderungsknoten über Flows hinweg hinweg gespeichert sind.

## Flow-basierte NLU-Ausführung<div class="divider"></div>Der No-NLU-Konnektor kann auch verwendet werden, um das Timing der NLU-Ausführung zu steuern. Standardmäßig wird die Cognigy.AI NLU-Pipeline ausgeführt, bevor der Flow ausgeführt wird, aber es kann erforderlich sein, bestimmte Teile eines Flows auszuführen, bevor der NLU ausgeführt wird, um eine bessere Kontrolle darüber zu haben, wann z. B. ein Intent ausgelöst wird. Dies kann erreicht werden, indem der No NLU Connector in einem Endpunkt und dann [Execute Cognigy NLU Node](http://127.0.0.1:8008/ai/flow-nodes/nlu/execute-cognigy-nlu/) in einem Flow verwendet wird, wenn die Ausführung der Cognigy.AI NLU-Pipeline erforderlich ist.