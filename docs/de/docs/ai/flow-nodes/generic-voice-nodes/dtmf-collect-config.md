---
 title: "DTMF Collect - Config" 
 slug: "dtmf-collect-config" 
 ausgeblendet: false 
---

# CDTMF Collect - Konfiguration

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/generic-voice/dtmf-collect-config.png" width="80%" />
  <figcaption>Generische DTMF-Erfassung - Konfigurationsknoten</figcaption>
</figure>

## Beschreibung<div class="divider"></div>Ermöglicht die Erfassung von DTMF-Signalen durch den Bot während der gesamten Anrufsitzung.<br/><br/>Wenn die Einstellungen ausgeführt werden, gelten sie für den Rest der Sitzung.<br/><br/>| Parameter | Typ | Beschreibung |
| ------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| DTMF-Signale erfassen | Umschalten | Ermöglicht die Erfassung von DTMF-Signalen durch den Bot |
| DTMF-Zeitüberschreitung zwischen Ziffern | Anzahl | Definiert die Zeitüberschreitung zwischen erfassten DTMF-Ziffern |
| DTMF Max. Ziffern | Anzahl | Definiert die maximale Anzahl von Ziffern, die vom Benutzer eingegeben werden können, die Ziffern werden automatisch übermittelt, sobald dieses Limit erreicht ist |                         |
| DTMF-Sendeziffer | CognigyScript | Definiert die DTMF-Sendeziffer, die für die Übermittlung der zuvor eingegebenen Ziffern verwendet wird. Dadurch wird die Validierung der Mindestziffern überschrieben |