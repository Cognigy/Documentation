---
 Titel: "Transfer" 
 slug: "Übertragung" 
 ausgeblendet: false 
---

# Übertragung

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/generic-voice/transfer.png" width="80%" />
  <figcaption>Generische Übertragung</figcaption>
</figure>

## Beschreibung<div class="divider"></div>Mit dem Transfer Node können Sie einen aktiven Anruf an ein Tel- oder SIP-Ziel weiterleiten.

| Parameter | Typ | Beschreibung |
|----------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------|
| Begründung | CognigyScript | Der Grund für die Übergabe. Wird in VG/AC-Protokollen angezeigt |
| Transfer-Ziel | CognigyScript | E.164-Syntax oder ein SIP-URI werden unterstützt |
| Benutzerdefinierte SIP-Header | JSON | Array von Objekten, die SIP-Header auflisten, die an den Empfänger gesendet werden sollen. Jedes Objekt besteht aus einem Namens- und einem Wertattribut. |