---
 title: "Einstellungen" 
 slug: "Einstellungen" 
 ausgeblendet: false 
---
# Einstellungen

Cognigy.AI bietet Entwicklern Anpassungseinstellungen, mit denen die Agentenprozesse angepasst werden können, um eine optimale Leistung zu erzielen.

Die **Agenteneinstellungen** werden verwendet, um Folgendes zu konfigurieren:

- Die **Flow-Logik** aller Flows innerhalb dieses Agenten
- Die **Zeitzone** des Agenten
- Der **Intent Mapper** von Flows NLU
- Die **Schwellenwerte** für die NLU-Erkennung
- Die **Analyse** des Agenten

Klicken Sie in Ihrem Agent in der linken Symbolleiste auf **Verwalten** --> **Einstellungen**, um auf das Menü mit den Agenteneinstellungen zuzugreifen.

## Allgemeine Ablauflogik || Flow-Einstellungen<div class="divider"></div>### Ja/Nein-Logik

Fügen Sie eine bestimmte [Ja/Nein-Logik](.. /.. /nlu/nlu-overview/yes-no-intents.md) in Ihrem Flow, um eine [Intent](.. /.. /nlu/nlu-overview/ml-intents.md) oder den Typ **Ja/Nein** von [Question Nodes](.. /.. /flow-nodes/flow-nodes-overview.md#question) .

### Zusätzliche Bestätigungswörter

Fügen Sie Ihre eigenen benutzerdefinierten Antworten hinzu, um eine [Absicht](.. /.. /nlu/nlu-overview/ml-intents.md) und [Question Nodes](.. /.. /flow-nodes/flow-nodes-overview.md#question).

### Zusätzliche negative Bestätigungswörter 

Fügen Sie Ihre eigenen benutzerdefinierten Antworten hinzu, um eine [Absicht](.. /.. /nlu/nlu-overview/ml-intents.md) und [Question Nodes](.. /.. /flow-nodes/flow-nodes-overview.md#question).

### Weiter **main** Flow nach angehängtem Flow

Sie können diese Einstellung deaktivieren und den Hauptablauf beenden, nachdem ein angehängter Abfluss ausgeführt wurde.

### Flow nach Standardantwort fortsetzen

Aktivieren Sie diese Einstellung, um die Ausführung der Ablauflogik fortzusetzen, nachdem eine Standardantwort übermittelt wurde.

### Flow nach negativer Bestätigung fortsetzen

Aktivieren Sie diese Einstellung, um die Ablauflogik fortzusetzen, nachdem ein Intent-Bestätigungssatz zu negativ beantwortet wurde.

### Standardantwort an Flow übergeben

Wenn die Einstellung aktiviert ist, antwortet der virtuelle Agent nicht mit der Standardantwort, sondern schreibt sie in das Eingabeobjekt. Anschließend können diese Informationen verwendet werden, um in der Ablauflogik etwas damit anzufangen. 

### Standardantwort in NLU-Training einbeziehen

Wenn die Einstellung aktiviert ist, enthält das NLU-Training auch Standardantworten, die für jede Absicht als Beispielsatz konfiguriert sind, um der Absicht zu entsprechen. Diese Einstellung kann auch individuell auf Intent-Ebene konfiguriert werden.

## Zeitzone<div class="divider"></div>Legen Sie die Zeitzone fest, in der Ihr virtueller Agent arbeiten soll.

## Absichts-Mapper<div class="divider"></div>### Aktivieren der Absichtszuordnung unter Berücksichtigung der Groß-/Kleinschreibung

Wenn diese Option aktiviert ist, werden Groß-/Kleinschreibung und Interpunktion vom Intent-Mapper berücksichtigt. Deaktivieren Sie diese Einstellung, um Groß-/Kleinschreibung und Interpunktion in der ML-Absichtszuordnung zu ignorieren.

!!! danger "Englischer Support"
    Obwohl diese Funktion in den Einstellungen des Agenten konfigurierbar ist, ist sie nicht für die regulären englischen Gebietsschemata implementiert, d. h. US-amerikanisches, indisches, britisches, kanadisches und australisches Englisch. Sie können diese Funktion jedoch mit dem Gebietsschema "Universal" verwenden, das auch allgemeines Englisch unterstützt.

### Angehängte Flow-Intent-Mapping-Priorität
- Haupt- und angehängten Flow gemeinsam zuordnen: Behandelt Haupt- und angehängte Flow-Intents so, als wären sie eine einzelne Intent-Sammlung, findet die am besten übereinstimmende Absicht und führt den entsprechenden Flow aus.
- Main Flow zuerst zuordnen: Ordnet zuerst die Main Flow Intents separat zu. Wenn im Hauptfluss kein Intent gefunden wird, wird der angehängte Fluss zugeordnet.
- Angehängten Flow zuerst zuordnen: Zuerst werden die angehängten Flow-Intents separat zugeordnet. Wenn im angehängten Flow kein Intent gefunden wird, wird der Main Flow zugeordnet.

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.1.4-blue.svg)] ({{config.site_url}})

### Implizites Slot-Parsing
Legt fest, ob Slots in NLU-Beispielsätzen implizit analysiert werden sollen oder nur Slot-Anmerkungen für das Training verwendet werden sollen. Konfigurierbar ab 4.1.4. Vor 4.1.4 war das Verhalten wie im "Full"-Modus, vorhandene Agenten behalten diese Standardeinstellung bei.

- Deaktiviert: Nur Slot-Anmerkungen verwenden: Dies berücksichtigt nur vom Benutzer kommentierte Slots, Lexikone oder beliebige Slots in Beispielsätzen.
- Vollständig: Analysiert implizit sowohl System- als auch Lexikon-Slots
- System-Slots - Keine Lexikon-Slots: Analysieren Sie nur System-Slots wie Zahlen, Datumsangaben, E-Mail-Adressen implizit. Berücksichtigen Sie nur Anmerkungen für Lexikon-Slots.
- Lexikon-Slots - Keine System-Slots: Analysieren Sie nur Lexikon-Slots wie aus angehängten Lexika implizit. Berücksichtigen Sie nur Anmerkungen für Systemsteckplätze.

## Schwellenwerte<div class="divider"></div>### Vergessen Sie die Frageschwelle

Anzahl der Kontaktantworten, nach denen die Antwort eines Benutzers auf eine Frage nicht mehr registriert wird.

### Konfidenzschwelle

Punktzahl, ab der ein Intent als bestätigt gilt, wenn ein Bestätigungssatz gesetzt ist. Wert zwischen 0 und 1.

### Schwellenwert für die Rückbestätigung

Punktzahl, ab der ein Intent als bestätigt gilt oder für die erneute Bestätigung markiert wird, wenn ein Rückbestätigungssatz festgelegt ist. Wert zwischen 0 und 1.

!!! danger "Passen Sie die Rückbestätigungsschwelle an"
    Der Konfidenzschwellenwert hat **keine Auswirkungen, es sei denn, die Absicht verwendet Bestätigungssätze**.
    Der Schwellenwert für die erneute Bestätigung ist Ihre untere Konfidenzgrenze – Sie müssen ihn zusätzlich zum Konfidenzschwellenwert festlegen. **Absichtswerte, die über dem Schwellenwert für die erneute Bestätigung liegen, werden bestätigt oder für die erneute Bestätigung markiert.**

## Analytik<div class="divider"></div>### Sammeln

Wenn diese Option deaktiviert ist, werden keine Analysedaten für den Agenten erfasst und gespeichert.

### Nur Daten zulassen

Wenn diese Option deaktiviert ist, werden keine Analysedaten für Nachrichten erfasst, die nur eine JSON-Datennutzlast und keine Texteingabe enthalten.

## Generative.AI

Um die Verbindung zwischen Cognigy.AI und dem Generative AI Provider einzurichten, lesen Sie die [Generative AI](.. /.. /generative-ai.md#prerequisites) Artikel.