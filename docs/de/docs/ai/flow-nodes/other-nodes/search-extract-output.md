---
Titel: "Suchextrakt-Ausgabe"
slug: "Suchen-Extrahieren-Ausgabe"
description: "Die Suchextraktausgabe führt eine Inhaltssuche durch, extrahiert und gibt Inhalte aus Daten aus, die zuvor über eine Quelldatei in den Wissensspeicher hochgeladen wurden."
ausgeblendet: false
---

# Ausgabe des Suchextrakts

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.63-blue.svg)] (.. /.. /.. /release-notes/4.63.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/search-extract-output.png" width="80%"/>
</figure>

## Beschreibung<div class="divider"></div>Dieser Node durchsucht Daten innerhalb der Knowledge AI-Lösung, extrahiert eine relevante Antwort über ein generatives KI-Modell und erstellt eine Ausgabe.

Bevor Sie diesen Knoten verwenden,
Stellen Sie sicher, dass Sie das Modell 'text-embedding-ada-002' sowie die
Modelle "Text-DaVinci-003 (deprecated)" oder "GPT-3.5-turbo".
Weitere Informationen finden Sie in der [Liste der unterstützten Anbieter](.. /.. /resources/build/llm.md).

## Einstellungen

### Modus

Es gibt drei Modi, die unterschiedliche Ebenen der Datenextraktion und -präsentation bieten.

#### Suchen & Extrahieren & Ausgabe

Führt eine Suche durch, extrahiert eine Antwort und gibt das Ergebnis als Text oder adaptive Karte aus.

Im Modus Suchen & Extrahieren & Ausgabe sind die folgenden Schritte erforderlich:

1. Das System führt eine Wissenssuche durch und ruft relevante Informationen ab.
2. Die abgerufenen Daten werden zur weiteren Verarbeitung an ein Sprachmodell (LLM) gesendet. 
3. Der LLM extrahiert wichtige Punkte oder Antworten aus den Suchergebnissen und filtert unnötige Details heraus. 
4. Die extrahierten Informationen werden in den Input- oder Context-Objekten gespeichert. 
5. Das System gibt das Ergebnis aus dem LLM automatisch entweder als Klartext oder als adaptive Karte aus.

Wählen Sie für diesen Modus Modelle aus der [Liste der unterstützten Anbieter] (.. /.. /resources/build/llm.md), die sowohl die Fälle "LLM Prompt Node & Search Extract Output Node" als auch "Knowledge Search" abdecken.

#### Suchen & Extrahieren

Führt eine Suche durch, extrahiert eine Antwort, führt jedoch keine automatische Ausgabe durch. Unsere Kunden können dann manuell die gewünschte Ausgabe erstellen.

Im Modus "Suchen & Extrahieren" sind die folgenden Schritte erforderlich:

1. Das System führt eine Wissenssuche durch und ruft relevante Informationen ab.
2. Die abgerufenen Daten werden direkt an das LLM gesendet, um Schlüsselpunkte oder Antworten zu extrahieren.
3. Der LLM extrahiert die relevanten Informationen und schreibt sie in die Input- oder Context-Objekte.

Wählen Sie für diesen Modus Modelle aus der [Liste der unterstützten Anbieter] (.. /.. /resources/build/llm.md), die sowohl die Fälle "LLM Prompt Node & Search Extract Output Node" als auch "Knowledge Search" abdecken.

#### Nur suchen

Führt eine Wissenssuche durch und ruft Informationen ohne Extraktion oder automatische Ausgabe ab.

Im Modus "Nur Suche" sind die folgenden Schritte erforderlich:

1. Das System führt eine Wissenssuche durch und ruft relevante Informationen ab. 
2. Die Suchantwort wird in den Input- oder Context-Objekten gespeichert.

Wählen Sie für diesen Modus Modelle aus der [Liste der unterstützten Anbieter] (.. /.. /resources/build/llm.md), die den Fall "Wissenssuche" abdecken.

### Wissensspeicher

Wählen Sie einen Speicher aus der Liste aus, damit der Knoten die Daten abrufen kann.

### Such-Einstellungen

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|---------------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  -------------------------------------------------------------------|
| Kontextbezogene Suche | Wählen Sie | Berücksichtigung des Kontexts des Transkripts für die Suche. Es ermöglicht einem virtuellen Agenten, Folgefragen zu beantworten. Sie können eine der folgenden Optionen auswählen:<br>- **Ein** — ist die Standardoption. Wenn diese Einstellung aktiviert ist, wirkt sie sich auf die Tokenisierungskosten aus, die sich auf die Menge an Arbeitsspeicher, Rechenleistung und Gesamtkosten auswirken, die für die Ausführung eines OpenAI- oder Azure OpenAI-Modells erforderlich sind. Um ein besseres Verständnis dafür zu bekommen, wie die Funktion in der Praxis funktioniert, siehe [Beispiele](#examples). <br> - **Aus** — die Einstellung ist ausgeschaltet. |
| Schritte zur Transkription | Indikator | Anzahl der vorherigen Transkriptschritte, die in einer kontextsensitiven Suche verwendet werden sollen. Dieser Parameter ist aktiv, wenn die Einstellung Kontextabhängige Suche aktiviert ist.                                                                                                                                                                                                                                                                                                                                                                                            |
| Wo soll das Ergebnis gespeichert werden? | Wählen Sie | Der Speicher für die Suchergebnisse. Wählen Sie einen Speicher aus:<br> - **default** — der Inhalt wird im Input-Objekt ('input.knowledgeSearch') gespeichert. <br> - **Input** — der Inhalt wird im Input-Objekt gespeichert.<br> - **Kontext** — der Inhalt wird im Kontext gespeichert.                                                                                                                                                                                                                                                    |
| Zeichenfolge, nach der gesucht werden soll | CognigyScript | Die Zeichenfolge, nach der im Wissensspeicher gesucht werden soll. Ein Standardwert wird in 'input.text' gespeichert.                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Quell-Schlagwörter | CognigyScript | Die Tags dienen dazu, den Umfang Ihrer Wissenssuche zu verfeinern, sodass Sie nur die relevantesten Abschnitte der Wissensdatenbank einbeziehen und dadurch die Genauigkeit der Suchausgaben verbessern können. <br><br> Stellen Sie vor dem Angeben von Tags sicher, dass diese beim Hochladen der Quelldatei für diese Wissensquelle bereitgestellt wurden. Fügen Sie Tags hinzu, indem Sie jedes Tag separat angeben und die Eingabetaste drücken. Die maximale Anzahl von Tags beträgt 5.                                                                                                |

!!! Tipp "Tipps: Quellen-Tags"
	- Sie können CognigyScript innerhalb von Quell-Tags hinzufügen.  
	- Quellen-Tags sind immer in Kleinbuchstaben geschrieben, nur alphanumerische Zeichen (a-z, 0-9), Unterstriche und Bindestriche sind zulässig.  
	- Bei der Verwendung von CognigyScript für Quell-Tags ist es wichtig, diese in Kleinbuchstaben zu schreiben. Zum Beispiel, indem Sie Folgendes verwenden: '{{"{{input.text.toLowerCase()}}"}}'

### Einstellungen extrahieren

| Parameter | Typ | Beschreibung |
|-------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Eingabeaufforderung | CognigyScript | Die Eingabeaufforderung zum Generieren von Vervollständigungen für.                                                                                                                                                       |
| Temperatur | Indikator | Die geeignete Probenahmetemperatur für das Modell. Höhere Werte bedeuten, dass das Modell mehr Risiken eingeht.                                                                                        |
| Maximale Anzahl an Token | Indikator | Die maximale Anzahl von Token, die beim Abschluss generiert werden sollen.                                                                                                                                   |
| Anwesenheitsstrafe | Indikator | Zahl zwischen -2,0 und 2,0. Positive Werte bestrafen neue Token basierend darauf, ob sie bisher im Text erschienen sind, und erhöhen die Wahrscheinlichkeit, dass das Modell über neue Themen spricht.              |
| Häufigkeits-Strafe | Indikator | Zahl zwischen -2,0 und 2,0. Die Strafe weist Token, die häufig im generierten Text vorkommen, eine geringere Wahrscheinlichkeit zu und ermutigt das Modell, vielfältigere und einzigartigere Inhalte zu generieren. |
| Stopps verwenden | Umschalten | Gibt an, ob eine Liste von Stoppwörtern verwendet werden soll, um Generative AI wissen zu lassen, wo der Satz endet.                                                                                                       |
| Haltestellen | Text | Bis zu 4 Sequenzen, in denen die API keine weiteren Token mehr generiert. Der zurückgegebene Text enthält nicht die Stoppsequenz.                                                                    |
| Zeitüberschreitung | Anzahl | Die maximale Zeitspanne in Millisekunden, die auf eine Antwort des generativen KI-Anbieters gewartet werden soll.                                                                                            |
| Zeitüberschreitungsmeldung | CognigyScript | Die Meldung, die ausgegeben werden soll, wenn die Zeitüberschreitung erreicht ist.                                                                                                                                              |

### Ausgabe-Einstellungen

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                         |
|----------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ausgabemodus | Wählen Sie | Mit diesem Parameter können Sie zwischen zwei Optionen für die Ausgabe wählen:<br> - **Text** — Wählen Sie diese Option aus, wenn das System eine einfache textbasierte Antwort als Ausgabe bereitstellen soll.<br>- **Adaptive Karte**: Wählen Sie diese Option aus, wenn Sie eine visuelle Darstellung einer adaptiven Karte als Ausgabe wünschen. Adaptive Karten sind interaktiv und zeigen umfangreiche Inhalte mit Schaltflächen, Bildern und mehr an. |
| Fallback-Text ausgeben | CognigyScript | Der Text, der ausgegeben werden soll, wenn keine Antwort gefunden wurde.                                                                                                                                                                                                                                                                                                                                                          |

### Fehlerbehandlung

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                            |
|--------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Auswählen des Fehlerbehandlungsansatzes | Wählen Sie | Sie können eine der Optionen für die Fehlerbehandlung auswählen:<br>- **Stop Flow Execution** — Beendet die aktuelle Flow-Ausführung.<br>- **Flow-Ausführung fortsetzen** – Lassen Sie zu, dass der Flow die Ausführung fortsetzt, den Fehler umgeht und mit den nächsten Schritten fortfährt.<br>- **Go to Node** – leitet den Workflow an einen bestimmten Node im Flow weiter, was für die Fehlerbehebung oder die benutzerdefinierte Fehlerbehandlung nützlich sein kann. |
| Fehlermeldung (optional) | Text | Aktiv, wenn die Option **Flow-Ausführung fortsetzen** ausgewählt ist. Optionale Meldung, die ausgegeben wird, wenn der Such- oder Extraktionsdienst fehlschlägt.                                                                                                                                                                                                                                                                     |
| Wählen Sie Flow | Wählen Sie | Aktiv, wenn die Option **Gehe zu Knoten** ausgewählt ist. Wählen Sie einen Flow aus den verfügbaren Optionen aus.                                                                                                                                                                                                                                                                                                           |
| Knoten auswählen | Wählen Sie | Aktiv, wenn die Option **Gehe zu Knoten** ausgewählt ist. Wählen Sie einen Knoten aus den verfügbaren Optionen aus.                                                                                                                                                                                                                                                                                                           |

## Beispiele

### Kontextbezogene Suche

Durch [Berücksichtigung des Kontexts](#search-Einstellungen)
Die Suche kann Benutzern helfen, Informationen innerhalb eines Transkripts schneller zu finden.
da es die Nuancen des Inhalts versteht.
Wenn Sie ein kontextsensitives Suchsystem aktivieren,
Sie können die Anzahl der vorherigen Transkriptschritte, die bei der Suche verwendet werden sollen, so konfigurieren, dass sie Ihren spezifischen Anforderungen entspricht.
Die Anzahl der vorherigen Transkriptschritte wirkt sich auf die Tiefe des Kontexts aus, der beim Abrufen von Suchergebnissen berücksichtigt wird.

In der folgenden Tabelle wird ein Dialog zwischen dem Benutzer und dem virtuellen Agenten dargestellt, in dem die Antworten des Agenten sowohl im aktivierten als auch im deaktivierten Modus der Funktion "Kontextabhängige Suche" angezeigt werden.

| <div style="width:430px">Die kontextabhängige Suche ist deaktiviert</div>                                                                                                                                                                                                                                                                                                            | Die kontextabhängige Suche ist aktiviert.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- - -------------------------------------------------------------------------------------------------------------------------------------|
| **user:** Welche Tiere sind in einem Flugzeug erlaubt?<br> **virtueller Agent:** Passagiere dürfen maximal zwei Tiere (Hunde oder Katzen) mit ins Flugzeug nehmen, entweder in der Kabine oder im Frachtraum, solange sie sich in zugelassenen Transportbehältern befinden.<br> **user:** Gib mir mehr Details! <br> **virtueller Agent:** Leider kann ich Ihre Frage nicht beantworten. | **user:** Welche Tiere sind in einem Flugzeug erlaubt?<br> **virtueller Agent:** Passagiere dürfen maximal zwei Tiere (Hunde oder Katzen) mit ins Flugzeug nehmen, entweder in der Kabine oder im Frachtraum, solange sie sich in einem zugelassenen Transportbehälter befinden.<br> **user:** Gib mir mehr Details! <br> **virtueller Agent:** Der zugelassene Transportbehälter für Tiere in einem Flugzeug muss eine maximale Größe von 118 cm (55 x 40 x 23 cm) oder 47 Zoll (22 x 16 x 9 Zoll) und ein Gesamtgewicht von höchstens 8 kg haben. Der Behälter sollte ausbruchsicher, auslaufsicher, bissfest und mit saugfähigem Material ausgekleidet sein. In der Kabine ist nur ein Transportbehälter pro Passagier erlaubt, und die Anzahl der Tiere pro Behälter ist auf ein Tier begrenzt, mit Ausnahmen für bestimmte Fälle. |

## Mehr Informationen

- [Knoten "Wissenssuche](knowledge-search.md)
- [Übersicht über die Wissenssuche](.. /.. /wissens-ai/übersicht.md)
- [LLM](.. /.. /resources/build/llm.md)