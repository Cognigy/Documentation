---
 Titel: "Denken" 
 Schnecke: "denken" 
 ausgeblendet: false 
---
# Denk nach

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/think.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Dieser Knoten wird verwendet, um den Flow innerhalb eines Aufrufs erneut auszuführen.

Bei Erreichen dieses Knotens wird der Flow gestoppt und dann am Startknoten neu ausgeführt.

Sie können einen Eingabetext und Eingabedaten angeben, die dann als simulierte Nachricht des Benutzers behandelt werden.

!!! Hinweis "Think NLU"
    Wenn ein Flow erneut über einen Think Node ausgeführt wird, wird die neue Nachricht erneut durch die NLU-Pipeline gesendet, wobei Slots und übereinstimmende Absichten gefunden werden.

## Einstellungen

| Parameter | Typ | Beschreibung |
|-----------|--------------------|-----------------------------------------|
| Text | CognigyScript | Ein simulierter Meldungstext des Benutzers. |
| Daten | CognigyScript JSON | Simulierte Nachrichtendaten des Benutzers.   |

Sie können zwei **Erweiterte** Optionen auswählen, um eine Think Node-Funktionalität in Ihren Flow zu integrieren:

1. Text denken (Standardeinstellung)
2. Absicht auslösen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.2.0-blue.svg)] ({{config.site_url}})

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/558c716-Screen_Shot_057.PNG" width="100%" />
</figure>

Mit der Option **Trigger Intent** können Sie den Flow erneut ausführen und gleichzeitig erzwingen, dass eine bestimmte Absicht gefunden wird, anstatt das Intent-Ergebnis von unserer NLU-Engine abzurufen. Es ist genau das gleiche Verhalten wie in [Trigger Intent]({{config.site_url}}ai/nlu/nlu-overview/trigger-intent/ beschrieben).

Sie können einen Intent mit einer Benutzereingabe wie "cIntent:orderFood" auslösen, dann wird der Intent "orderFood" ausgelöst. 
Mit dem Think Node können Sie das gleiche Verhalten haben, indem Sie die Option "Trigger Intent" und "orderFood" im Feld "Intent to trigger" auswählen.

## Alternativen

Wenn Sie Benutzereingaben oder anderen Text in der Mitte eines Flows verarbeiten müssen, um ein NLU-Ergebnis abzurufen, und Sie den Flow nicht vom Startknoten aus neu starten möchten, verwenden Sie den Befehl [Cognigy NLU-Knoten ausführen](.. /nlu/execute-cognigy-nlu.md).