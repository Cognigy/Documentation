---
 Titel: "Anrufaufzeichnung" 
 Slug: "Anruf-Aufzeichnung" 
 ausgeblendet: false 
---
# Anruf-Aufzeichnung

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.45-blue.svg)] (.. /.. /.. /release-notes/4.45.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/vg/call-recording.png" width="80%" />
  <figcaption>Voice-Gateway-Anrufaufzeichnung</figcaption>
</figure>

## Beschreibung<div class="divider"></div>Der Voice Gateway Call Recording Node steuert die Sprachaufzeichnungsfunktionen des Gesprächs.

Der Anrufaufzeichnungsknoten des Voice Gateways initiiert oder beendet die Aufzeichnung eines Gesprächs.

Der Knoten verwendet eine Voice Gateway-API, um als [SIPREC](https://datatracker.ietf.org/doc/html/rfc7866)-Client zu fungieren und die Audiodaten mit dem SIPREC-Protokoll aufzuzeichnen. Die aufgezeichneten Audiodaten werden zur Speicherung an einen Sitzungsaufzeichnungsserver (SRS) gesendet. Sie können ein beliebiges SRS zum Speichern von Audioaufzeichnungen verwenden.

| Parameter | Typ | Beschreibung | Art der Aktivität |
|-----------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------|
| Aktivität | Wählen Sie | Gibt an, ob eine Anrufaufzeichnung gestartet, beendet, angehalten oder fortgesetzt werden soll.                                                                                                                                                                                                                                                                                 | -                    |
| Anrufaufzeichnungs-Server | CognigyScript | Geben Sie eine IP-Gruppe (eine Sammlung von IP-Adressen) an, z. B. "sip:3.208.57.175" oder "sip:siprec.cognigy.ai". <br> Das Voice Gateway sendet Anrufaufzeichnungen an eine IP-Gruppe, die mit dem SRS verknüpft ist, und stellt so sicher, dass Anrufe ordnungsgemäß aufgezeichnet und für die zukünftige Verwendung gespeichert werden. Je nach Einrichtung kann die IP-Gruppe mit mehreren SRS-Servern verknüpft sein. | Anrufaufzeichnung starten |
| Anrufaufzeichnungs-ID | CognigyScript | Definiert die Aufzeichnungssitzungskennung, die vom Voice Gateway an den SRS weitergeleitet wird.                                                                                                                                                                                                                                              | Anrufaufzeichnung starten |