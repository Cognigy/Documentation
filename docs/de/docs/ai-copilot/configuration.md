---
title: "Konfiguration"
slug: "Konfiguration"
ausgeblendet: false
---

# Konfiguration des KI-Copiloten

Die AI Copilot Konfiguration bezieht sich auf die AI Copilot Config, die du per API definieren kannst, um die Position und Größe der Widgets in deinem Grid zu konfigurieren. Diese Funktion bietet volle Flexibilität, um den Agent Assist-Arbeitsbereich so effizient wie möglich zu nutzen.

Der Arbeitsbereich kann angepasst werden, um verschiedene Arten von Inhalten anzuzeigen, z. B. HTML, adaptive Karten oder iframes. Bei der Konfiguration Ihres Rasters können Sie die beste Platzierung für bestimmte Arten von Widgets auswählen.

Die AI Copilot-Konfigurationen können **nur** mit der [AI Copilot-API](https://api-trial.cognigy.ai/openapi#get-/v2.0/agentassistconfigs) erstellt, geändert und gelöscht werden.

## Raster

Der Arbeitsbereich von AI Copilot basiert auf einem anpassbaren Rasterlayout, in dem Widgets hinzugefügt werden können, um verschiedene Informationen anzuzeigen. 

Der Gürtel ist vollständig anpassbar und gibt Ihnen die Möglichkeit, die Anzahl der Spalten, Zeilen sowie die Abstände zwischen ihnen zu konfigurieren.

## Kachel-ID

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.54-blue.svg)] (.. /release-notes/4.54.md)

Jede Kachel muss einen Namen haben, z. B. "Karte", "Profil" oder "Verlauf", der als eindeutiger Bezeichner fungiert. Genau diese Kachel-ID wird für die Konfiguration des AI Copilot-Knotens benötigt, um sicherzustellen, dass der Inhalt im richtigen Widget angezeigt wird.

Wenn AI Copilot Aktualisierungen für eine Kachel-ID erhält, die nicht in der AI Copilot-Konfiguration vorhanden ist, wird die Kachel nicht gerendert. In solchen Fällen wird in der unteren rechten Ecke des Arbeitsbereichs eine Warnanzeige angezeigt, die darauf hinweist, dass ein "unbekanntes Kachelupdate" empfangen wurde.

## URL

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.65-blue.svg)] (.. /release-notes/4.65.md)

Wenn Sie AI Copilot als eigenständige Anwendung verwenden, folgt die AI Copilot-URL dem folgenden Muster:

{! _includes/agent-assist/url-pattern.md !}

## Mehr Informationen

- [Arbeitsbereich für KI-Copilot](overview.md)
- [Erste Schritte mit AI Copilot](getting-started.md)
- [KI-Copilot-Knoten](.. /ai/flow-nodes/ai-copilot/overview.md)
- [KI-Copilot-Einbettung](embedding.md)
- [KI-Copilot für Sprache](voice/voice-overview.md)
- [KI-Copilot für Chat](chat.md)
- [Integration mit Contact Centern](contact-center-integration.md)