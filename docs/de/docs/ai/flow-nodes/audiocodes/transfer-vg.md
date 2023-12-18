---
 Titel: "Transfer" 
 Schnecke: "Transfer-AC" 
 ausgeblendet: false 
---
# Übertragung

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/audiocodes/transfer.png" width="80%" />
  <figcaption>AudioCodes-Übertragung</figcaption>
</figure>

## Beschreibung<div class="divider"></div>Mit dem Transfer Node können Sie einen aktiven Anruf an ein Tel- oder SIP-Ziel weiterleiten.

| Parameter | Typ | Beschreibung |
|----------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------|
| Gründe | CognigyScript | Der Grund für die Übergabe. Wird in AudioCode-Protokollen angezeigt.                                                                       |
| Ziel | CognigyScript | Der Ziel-URI, an den der Aufruf übergeben werden soll. In der Regel entweder ein "tel"- oder ein "sip"-URI.                                                      |
| Empfehlungs-URL | CognigyScript | Definiert den Teilnehmer (URL), der die Anrufweiterleitung initiiert hat |
| SIP-Header übertragen | JSON | Array von Objekten, die SIP-Header auflisten, die an den Empfänger gesendet werden sollen. Jedes Objekt besteht aus einem Namens- und einem Wertattribut. |