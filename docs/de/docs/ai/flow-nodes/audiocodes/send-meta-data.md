---
 title: "Metadaten senden" 
 slug: "Metadaten senden" 
 ausgeblendet: false 
---
# Metadaten senden

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/audiocodes/send-metadata.png" width="80%" />
  <figcaption>AudioCodes-Metadaten</figcaption>
</figure>

## Beschreibung<div class="divider"></div>Der Send Meta Data Node sendet Metadaten über SIP INFO-Nachrichten an den angeschlossenen SIP-Trunk.

| Parameter | Typ | Beschreibung |
|-----------|------|---------------------------------------------------------------|
| Metadaten | JSON | Die Metadaten, die über SIP INFO gesendet werden sollen. Unten finden Sie ein Beispiel. |

'''json
{
  "myParamName": "meinParamWert"
}
''' 