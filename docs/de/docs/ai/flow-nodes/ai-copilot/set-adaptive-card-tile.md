---
Titel: "Copilot: Adaptive Kartenkachel"
Slug: "Adaptive-Karten-Kachel setzen"
Ausgeblendet: Wahr
---

# Copilot: Adaptive Kartenkachel

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/set-adaptive-card-tile.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Mit diesem Knoten können Sie adaptive Karten in Ihrem AI Copilot-Arbeitsbereich erstellen und anzeigen. Adaptive Karten können umfangreiche Inhalte und interaktive Elemente wie Bilder, Text, Schaltflächen und Formulare anzeigen. 

Der [Designer adaptiver Karten](https://adaptivecards.io/designer) kann Ihnen dabei helfen, eine adaptive Karte zu definieren. Kopieren Sie die JSON-Kartennutzlast und fügen Sie sie in das Formular ein.

## Einstellungen 

| Parameter | Typ | Beschreibung |
|--------------------|---------------|-----------------------------------------------------------|
| Kachel-ID | CognigyScript | Die ID, die Sie in der AI Copilot-Konfiguration erstellt haben.  |
| JSON für adaptive Karten | HTML | Die JSON-Nutzlast der adaptiven Karte, die innerhalb der Kachel gerendert werden soll. |
| JSON-Daten | JSON | Die Daten, die als postMessage-Ereignis an den IFrame gesendet werden sollen.    |

## Mehr Informationen

- [Copilot: HTML-Datei](set-html-tile.md)
- [Copilot: IFrame-Kachel](set-iframe-tile.md)
- [Copilot: Raster einstellen](set-grid.md)
- [KI-Copilot-Knoten](overview.md)
- [KI-Copilot](.. /.. /.. /ai-copilot/overview.md)