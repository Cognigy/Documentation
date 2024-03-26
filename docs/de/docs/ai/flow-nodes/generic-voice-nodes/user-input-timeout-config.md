---
 title: "Zeitüberschreitung der Benutzereingabe - Konfiguration" 
 slug: "Benutzereingabe-Timeout-Konfiguration" 
 ausgeblendet: false 
---

# Zeitüberschreitung bei Benutzereingaben - Config

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.45-blue.svg)] (.. /.. /.. /release-notes/4.45.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/generic-voice/user-input-timeout-config.png" width="80%" />
  <figcaption>Generisches Zeitlimit für Benutzereingaben - Config</figcaption>
</figure>

## Beschreibung<div class="divider"></div>Der Benutzereingabe-Timeout - Konfigurationsknoten definiert die Aktion, die der virtuelle Agent ausführen soll, wenn er innerhalb eines bestimmten Zeitraums keine Eingaben vom Benutzer erhält. 

Sobald die Einstellungen ausgeführt wurden, bleiben sie für die Dauer der Sitzung wirksam.

| Parameter | Typ | Beschreibung |
|-----------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Benutzer-Modus "Keine Eingabe" | Dropdown-Liste | Definieren Sie die Aktion, wenn ein Benutzer nicht rechtzeitig Eingaben für den virtuellen Agenten bereitstellt.                                                            |
| Zeitüberschreitung für Benutzer ohne Eingabe | Anzahl | Definieren Sie die Zeitüberschreitung für Benutzereingaben in Millisekunden.                                                                                         |
| Wiederholungen von Benutzereingaben | Anzahl | Definieren Sie die Anzahl der Wiederholungsversuche für den virtuellen Agenten, um Eingaben vom Benutzer anzufordern, bevor der Anruf beendet wird. Der Maximalwert beträgt 999 Wiederholungen. |