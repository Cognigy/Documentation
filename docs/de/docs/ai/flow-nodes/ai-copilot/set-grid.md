---
title: "Copilot: Set Grid"
Schnecke: "Set-Grid"
Ausgeblendet: Wahr
---

# Copilot: Raster festlegen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.57-blue.svg)] (.. /.. /.. /release-notes/4.57.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/set-grid.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Dieser Knoten aktualisiert das vorhandene AI Copilot Workspace-Raster in der AI Copilot-Konfiguration, die Sie über eine [API POST-Anforderung](https://api-dev.cognigy.ai/openapi#post-/v2.0/agentassistconfigs) erstellt haben. Darüber hinaus können Sie diesen Knoten verwenden, um eine Vorschau des Rasters anzuzeigen, bevor Sie diese Anforderung stellen.

Innerhalb eines einzigen AI Copilot Flow können mehrere Knoten verwendet werden, sodass Sie das Raster nach Ihren spezifischen Anforderungen anpassen können.

## Einstellungen

| Parameter | Typ | Beschreibung |
|----------------------------|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Copilot Grid-Konfiguration | JSON | Aktualisiert die Rasterkonfiguration des AI Copilot-Arbeitsbereichs. Standardmäßig gibt es ein Rasterbeispiel im Code-Editor. Sie können ein Raster mit Kachel-IDs im Knoten-Editor anzeigen. |

## Mehr Informationen

- [HTML-Datei festlegen](set-html-tile.md)
- [Kachel für adaptive Karte festlegen](set-adaptive-card-tile.md)
- [IFrame-Kachel setzen](set-iframe-tile.md)
- [KI-Copilot-Knoten](overview.md)
- [KI-Copilot](.. /.. /.. /ai-copilot/overview.md)