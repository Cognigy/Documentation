---
Titel: "Copilot: Identitätskachel"
Schnecke: "Identitäts-Kachel"
Ausgeblendet: Wahr
---

# Copilot: Identitäts-Kachel

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.60-blue.svg)] (.. /.. /.. /release-notes/4.60.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/identity-tile.png" width="80%"/>
</figure>

## Beschreibung

Dieser Node wurde entwickelt, um kundenspezifische Informationen direkt im Widget Ihres AI Copilot Workspace anzuzeigen und zu verarbeiten und so den Kontext und die Benutzerfreundlichkeit der identitätsbezogenen Daten zu verbessern.

## Einstellungen

| Parameter | Typ | Beschreibung |
|---------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| Kachel-ID | CognigyScript | Die ID, die Sie in der AI Copilot-Konfiguration erstellt haben.                                                                                          |
| Widget-Layout | Wählen Sie | Das Layout, wie das Widget im Arbeitsbereich platziert werden soll (horizontal/vertikal).                                                             |
| Bildform | Wählen Sie | Die Form oder das Format des Bildes (rund oder quadratisch).                                                                                               |
| Bild-URL | Internetadresse | Die URL, unter der das Bild gehostet oder gespeichert wird.                                                                                                     |
| Kundendaten | CognigyScript | Zusätzliche kundenspezifische Daten für die Analyse in einem Schlüssel-Wert-Format. Der Schlüssel lautet z. B. "E-Mail" und der Wert ist "{{"{{profile.email}}"}}'. |

## Anwendungsfall 

Die Anzeige des Profilbilds des Benutzers verleiht der Konversation eine menschliche Note und macht sie ansprechender und persönlicher.
Eine Möglichkeit, die Konversation weiter zu verbessern, besteht darin, wichtige Kundendaten anzuzeigen.
wie z. B. ihren Namen, Kontoinformationen oder Präferenzen direkt in der Chat-Konversation.
Dies ermöglicht es menschlichen Agenten, kontextbezogene Diskussionen zu führen, ohne in mehreren Tools nach Kundendaten suchen zu müssen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/identity-assist-example.png" width="80%"/>
  <figcaption>Das Widget "Identitätskachel" in AI Copilot</figcaption>
</figure>

## Mehr Informationen

- [Copilot: Transkript-Kachel](transcript-tile.md)
- [Copilot: Stimmungskachelknoten](sentiment-tile.md)
- [Copilot: Nächster Aktionskachelknoten](next-action-tile.md)
- [KI-Copilot-Knoten](overview.md)
- [KI-Copilot](.. /.. /.. /ai-copilot/overview.md)