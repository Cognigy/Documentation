---
 title: "Metadaten senden" 
 Slug: "Send-Metadaten" 
 ausgeblendet: false 
---

# Metadaten senden

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.45-blue.svg)] (.. /.. /.. /release-notes/4.45.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/generic-voice/send-metadata.png" width="80%" />
  <figcaption>Voice-Gateway-Knoten zum Senden von Metadaten</figcaption>
</figure>

## Beschreibung<div class="divider"></div>Der Send Meta Data Node sendet Metadaten über SIP INFO-Nachrichten an den angeschlossenen SIP-Trunk.

| Parameter | Typ | Beschreibung |
|-----------|------|------------------------------------|
| Metadaten | JSON | Die Metadaten, die über SIP INFO gesendet werden sollen. |

Beispiel:

'''json
{
  "myParamName": "meinParamWert"
}
'''

!!! Hinweis "Dieser Knoten unterstützt Aktivitätsparameter"
    Weitere Informationen zu Aktivitätsparametern finden Sie auf der Seite [Parameter Details]({{config.site_url}}ai/flow-nodes/vg/parameter-details/).