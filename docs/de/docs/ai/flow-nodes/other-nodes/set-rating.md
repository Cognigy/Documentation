---
 title: "Bewertung festlegen" 
 Slug: "Satz-Bewertung" 
 ausgeblendet: false 
---
# Bewertung festlegen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.9.0-blue.svg)] ({{config.site_url}})

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/set-rating.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Cognigy führt ab Version Cognigy.AI (4.9.0) einen neuen Flow Node **Set Rating** ein, der die analytischen Fähigkeiten von Cognigy.AI zusammen mit der Anwendung [Insights]({{config.site_url}}insights/cognigy-insights/) erweitert. 

Der Knoten Bewertung festlegen legt die Bewertung und den Bewertungskommentar für eine Konversation fest.

## Einstellungen

| Parameter | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  --------------------------------------------------------------------------------------|
| **Bewertung** | Die Bewertung für die Unterhaltung. -1 für eine negative Bewertung oder 1 für eine positive Bewertung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **Kommentar zur Bewertung** | Zusätzliche Informationen zur Bewertung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Einstellungen** | - **Label**: Geben Sie einen Namen für den Node ein, den Sie wählen können. [Hinzufügen einer Beschriftung] ({{config.site_url}}ai/flow-nodes/node-usage/#add-label) ersetzt die unterste Textzeile eines Nodes.<br/>- **Kommentar**: [Zusätzliche Informationen]({{config.site_url}}ai/flow-nodes/node-usage/#add-comment) über den Node.<br/>- **Analytics-Schritt**: Geben Sie einen aussagekräftigen Schrittnamen ein, der als **[Annotation]({{config.site_url}}insights/step-explorer/#annotations)** für den [Step Explorer]({{config.site_url}}insights/step-explorer/) in [Insights]({{config.site_url}}insights/cognigy-insights/) Analytics verwendet wird. |