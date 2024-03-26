---
 Titel: "Kontinuierliche ASR - Konfiguration" 
 slug: "continuous-asr-config" 
 ausgeblendet: false 
---

# Kontinuierliche ASR - Konfiguration

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/generic-voice/continuous-asr-config.png" width="80%" />
  <figcaption>Generische fortlaufende ASR - Konfigurationsknoten</figcaption>
</figure>

## Beschreibung<div class="divider"></div>Die kontinuierliche ASR ermöglicht es dem System, mehrere STT-Erkennungen des Benutzers zu verketten und sie dann als eine einzige Textnachricht an den Bot zu senden.<br/><br/>Wenn die Einstellungen ausgeführt werden, gelten sie für den Rest der Sitzung.

| Parameter | Typ | Beschreibung |
|-----------------------------|---------------|--------------------------------------------------------------------------------------------------------|
| Aktivieren der kontinuierlichen ASR | Umschalten | Aktivieren oder Deaktivieren der fortlaufenden ASR |
| Fortlaufende ASR-Sendeziffer | CognigyScript | Definiert einen speziellen DTMF-Schlüssel, der die akkumulierten Erkennungen an den Fluss |
| Kontinuierliches ASR-Timeout | Anzahl | Definiert die Anzahl der Millisekunden Stille, bevor die akkumulierten Erkennungen an den Flow gesendet werden |