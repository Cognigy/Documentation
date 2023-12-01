---
Titel: "Wissenssuche"
Slug: "Wissenssuche"
description: "Der Knowledge Search Node führt eine Inhaltssuche durch und ruft Inhalte aus Daten ab, die zuvor über eine Quelldatei in den Wissensspeicher hochgeladen wurden."
ausgeblendet: false
---

# Wissenssuche

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.61-blue.svg)] (.. /.. /.. /release-notes/4.61.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/knowledge-search.png" width="80%"/>
</figure>

## Beschreibung<div class="divider"></div>!!! danger "Deprecation des Knowledge Search Node"
    Der Knoten ist veraltet. Um einen nahtlosen Übergang zu gewährleisten, empfehlen wir dringend, den Knoten [Search Extract Output](search-extract-output.md) zu verwenden, der die gleiche Funktionalität wie dieser enthält.

Dieser Knoten sucht und ruft Inhalte aus Daten ab, die zuvor in die Knowledge AI-Lösung hochgeladen wurden.

Bevor Sie diesen Node verwenden, stellen Sie bitte sicher, dass Sie einen 'text-embedding-ada-002' LLM konfiguriert haben - siehe diese [Liste der unterstützten Anbieter](.. /.. /resources/build/llm.md). 

Gehen Sie folgendermaßen vor, um dem Benutzer die Ausgabe des Knowledge Search-Knotens anzuzeigen:

1. Fügen Sie im Flow-Editor einen Say-Knoten unter dem Knowledge-Suchknoten hinzu.
2. Wählen Sie im Feld **Ausgabetyp** die Option **Text** aus.
3. Klicken Sie im Feld **Text** auf ! [Marke] (.. /.. /.. /assets/icons/token.svg) und wählen Sie das **KSearch:TopK Texts** Token aus.
4. Klicken Sie auf **Knoten speichern**.

## Einstellungen

### Wissensspeicher

Wählen Sie einen Speicher aus der Liste aus, damit der Knoten die Daten abrufen kann.

### Such-Einstellungen

| Parameter | Typ | Beschreibung |
|-------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nach oben K | Anzahl | Die Anzahl der optimal übereinstimmenden Chunks, die die Knowledge AI-Lösung bereitstellen soll.                                                                                           |
| Wo soll das Ergebnis gespeichert werden? | Wählen Sie | Der Speicher für die Suchergebnisse. Wählen Sie einen Speicher aus:<br> - Eingabe - der Inhalt wird im Input-Objekt gespeichert.<br> - Kontext - der Inhalt wird im Kontext gespeichert. |
| Eingabetaste zum Speichern des Ergebnisses | CognigyScript | Der Speicherort im Eingabeobjekt, an dem das Ergebnis gespeichert wird. Beispiel: 'input.knowledgeSearch'.                                                                        |
| Eingabekontext zum Speichern des Ergebnisses | CognigyScript | Der Speicherort im Kontextobjekt, an dem das Ergebnis gespeichert wird. Beispiel: "context.knowledgeSearch".                                                                    |

## Mehr Informationen

- [Ausgabe des Suchextrakts](search-extract-output.md) 
- [Übersicht über die Wissenssuche](.. /.. /wissens-ai/übersicht.md)