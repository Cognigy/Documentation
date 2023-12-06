---
 title: "Metadaten senden" 
 Slug: "Send-Metadaten" 
 ausgeblendet: false 
---

# Metadaten senden

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/vg/send-metadata.png" width="80%" />
  <figcaption>Voice-Gateway-Knoten zum Senden von Metadaten</figcaption>
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