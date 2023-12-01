---
 Titel: "Anrufaufzeichnung" 
 Slug: "Anruf-Aufzeichnung" 
 ausgeblendet: false 
---
# Anruf-Aufzeichnung

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/audiocodes/call-recording.png" width="80%" />
  <figcaption>AudioCodes-Anrufaufzeichnung</figcaption>
</figure>

## Beschreibung<div class="divider"></div>Der Anrufaufzeichnungsknoten steuert die Sprachaufzeichnungsfunktionen des Gesprächs.

Die Aufzeichnung erfolgt durch den SBC (SRC) unter Verwendung des SIPRec-Protokolls und fungiert als Sitzungsaufzeichnungsclient (SRC). Der Session Recording Server (SRS) kann z.B. AudioCodes SmartTAP Recording Lösung oder ein anderes SRS sein.

| Parameter | Typ | Beschreibung |
|-----------------------|---------------|-----------------------------------------------------------------------------------------------------------|
| Aktivität | Wählen Sie | Gibt an, ob eine Anrufaufzeichnung gestartet oder beendet werden soll.                                                                |
| Anrufaufzeichnungs-Server | CognigyScript | Definiert den SRS als IP-Gruppennamen (wie auf dem SBC konfiguriert), um den Anruf aufzuzeichnen.                        |
| Anrufaufzeichnungs-ID | CognigyScript | Definiert die Aufzeichnungs-ID-Sitzung, die vom SBC an den SRS im XML-Text weitergeleitet wird.               |
| Ziel-Benutzername | CognigyScript | Definiert den Benutzernamen, der in den Kopfzeilen SIP Request-URI und To der INVITE-Anforderung für SIPRec verwendet wird. |