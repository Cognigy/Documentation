---
 title: "Barge In - Config" 
 slug: "Übertragung" 
 ausgeblendet: false 
---

# Barge In - Konfiguration

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/generic-voice/barge-in-config.png" width="80%" />
  <figcaption>Generischer Barge In - Config Node</figcaption>
</figure>

## Beschreibung<div class="divider"></div>Der Barge In - Config Node ist eine Sitzungskonfiguration, die die Unterbrechung des Bots ermöglicht.<br/><br/>Wenn die Einstellungen ausgeführt werden, gelten sie für den Rest der Sitzung.<br/><br/>| Parameter | Typ | Beschreibung |
|--------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Barge In On Speech | Umschalten | Ermöglicht es, den Bot mit Sprache zu unterbrechen.                                                                                                      |
| Barge in minimalen Worten | Schieberegler | Definiert die Mindestanzahl von Wörtern, die der Benutzer sagen muss, damit das Voice Gateway es als Barge in |
| Binnenschiff in DTMF | Umschalten | Ermöglicht es, den Bot mit DTMF-Ziffern zu unterbrechen. Die Erfassung von DTMF-Signalen ist standardmäßig aktiviert |
| DTMF-Zeitüberschreitung zwischen Ziffern | Anzahl | Definiert die Zeitüberschreitung zwischen erfassten DTMF-Ziffern |
| DTMF Max. Ziffern | Anzahl | Definiert die maximale Anzahl von Ziffern, die vom Benutzer eingegeben werden können, die Ziffern werden automatisch übermittelt, sobald dieses Limit erreicht ist |                      |
| DTMF-Sendeziffer | CognigyScript | Definiert die DTMF-Sendeziffer, die für die Übermittlung der zuvor eingegebenen Ziffern verwendet wird. Dadurch wird die Validierung der Mindestziffern überschrieben |