---
Titel: "Copilot: Transkript-Kachel"
Schnecke: "Transkript-Kachel"
Ausgeblendet: Wahr
---

# Copilot: Transkript-Kachel

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.60-blue.svg)] (.. /.. /.. /release-notes/4.60.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/transcript-tile.png" width="80%"/>
</figure>

## Beschreibung

Dieser Knoten erfasst die neueste Kundenantwort und zeigt sie in einem bestimmten Widget innerhalb des AI Copilot-Arbeitsbereichs an.

Darüber hinaus bietet der Transkript-Assist-Knoten die Möglichkeit, die Stimmungsanalyse zu aktivieren.
Dies ermöglicht es, den Sprachton des Benutzers zu beurteilen.
Diese Stimmungsanalyse kann Aufschluss darüber geben, ob die Reaktion des Benutzers positiv, negativ oder neutral ist.
Bevor Sie diese Option verwenden,
Legen Sie den Generative AI-Anbieter in den [Einstellungen](.. /.. /generative-ai.md#setup-generative-ai)
und wählen Sie das entsprechende Modell in der [Liste der unterstützten Modelle] (.. /.. /resources/build/llm.md#supported-models).

## Einstellungen

| Parameter | Typ | Beschreibung |
|------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Kachel-ID | CognigyScript | Die ID, die Sie in der AI Copilot-Konfiguration erstellt haben.                                                                                                                                                                             |
| Aktivieren von Stimmungen | Umschalten | Mit dieser Option können Sie entscheiden, ob die Stimmungsanalyse auf die Spracheingabe des Kunden angewendet werden soll. Wenn Sie diese Option aktivieren, bewertet das System den emotionalen Ton (positiv, negativ oder neutral) der Eingabe. |

## Anwendungsfall

Dieser Knoten eignet sich gut für Szenarien mit Sprachanrufen,
wo ein menschlicher Agent der Sprache des Benutzers zuhören und schnelle Entscheidungen treffen muss.
In solchen Fällen spielt der Transcript Assist Node eine entscheidende Rolle bei der Aufzeichnung und Darstellung der gesprochenen Antworten des Benutzers.
Dieser Ansatz ermöglicht es menschlichen Agenten, sofortigen Zugriff auf diese Informationen zu haben.
Dadurch wird eine effektivere und effizientere Kommunikation und Entscheidungsfindung bei Sprachanrufen ermöglicht.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ai-copilot/transcript-tile-example.png" width="80%"/>
    <figcaption>Transkriptkachel-Widget im KI-Copilot</figcaption>
</figure>

## Mehr Informationen

- [Copilot: Kachel für die nächste Aktion](next-action-tile.md)
- [Copilot: Stimmungskachel](sentiment-tile.md)
- [Copilot: Identitätskachel](identity-tile.md)
- [KI-Copilot-Knoten](overview.md)
- [KI-Copilot](.. /.. /.. /ai-copilot/overview.md)