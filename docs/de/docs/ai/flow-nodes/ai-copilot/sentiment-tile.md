---
title: "Copilot: Sentiment Tile"
Schnecke: "Sentiment-Kachel"
Ausgeblendet: Wahr
---

# Copilot: Stimmungskachel

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.60-blue.svg)] (.. /.. /.. /release-notes/4.60.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/sentiment-tile.png" width="80%"/>
</figure>

## Beschreibung

Dieser Knoten führt eine Stimmungsanalyse für die letzte Eingabe durch und bietet Einblicke in den emotionalen Ton
(positiv, negativ oder neutral) der letzten Benutzereingaben.
Es bewertet kontinuierlich die Stimmung der Kundeninteraktionen,
wie Chat-Gespräche oder Telefonanrufe, in Echtzeit.
Diese Echtzeit-Analyse bietet den Agenten sofortiges Feedback über den emotionalen Ton des Kunden innerhalb des AI Copilot Workspace.
Wenn zum Beispiel die Stimmung während eines Gesprächs negativ wird,
Das System kann den menschlichen Agenten sofort alarmieren, damit er geeignete Maßnahmen ergreifen kann.

Bevor Sie diesen Node verwenden, legen Sie den Generative AI-Anbieter in den [Einstellungen](.. /.. /generative-ai.md#set-up-generative-ai) und wählen Sie das entsprechende Modell in der [Liste der unterstützten Modelle](.. /.. /resources/build/llm.md#supported-models).

## Einstellungen

| Parameter | Typ | Beschreibung |
|--------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| Kachel-ID | CognigyScript | Die ID, die Sie in der AI Copilot-Konfiguration erstellt haben.                                                                                       |
| Eingabe für die Stimmungsanalyse | Wählen Sie | Die Anzahl der Benutzereingaben, die von einem Modell analysiert werden sollen. Sie können wählen, ob Sie die letzte Eingabe oder die letzten 10 Eingaben analysieren möchten. |

## Anwendungsfall

Im Gegensatz zum Knoten [Copilot: Transkriptkachel](transcript-tile.md) können Sie mit diesem Knoten einen größeren Teil der Konversation analysieren, der über die letzte Nachricht des Benutzers hinausgeht. Dieser Knoten trägt zu einer objektiveren Bewertung von Gesprächen bei und ermöglicht die Verwaltung des Gesamteindrucks des Kunden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/sentiment-tile-example.png" width="80%"/>
  <figcaption>Widget "Stimmungskachel" im KI-Copilot</figcaption>
</figure>

## Mehr Informationen

- [Copilot: Transkript-Kachel](transcript-tile.md)
- [Copilot: Kachel für die nächste Aktion](next-action-tile.md)
- [Copilot: Identitätskachel](identity-tile.md)
- [KI-Copilot-Knoten](overview.md)
- [KI-Copilot](.. /.. /.. /ai-copilot/overview.md)