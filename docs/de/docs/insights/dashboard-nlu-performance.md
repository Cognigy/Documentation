---
Titel: "NLU Performance" 
Slug: "Dashboard-NLU-Leistung" 
ausgeblendet: false 
---

# NLU-Leistung

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.45-blue.svg)] (.. /release-notes/4.45.md)

Das NLU-Leistungsdashboard bietet wertvolle Einblicke in die Leistung der NLU-Funktionen (Natural Language Understanding) Ihres virtuellen Agenten. Es ermöglicht Ihnen, das Nachrichtenverständnis, die Absichtserkennung und die Ausführungseffizienz zu überwachen und zu verbessern. Darüber hinaus bietet es einen einfachen Zugriff auf Ressourcen wie den Intent Trainer zur weiteren Leistungsverbesserung.

Weitere Informationen zu NLU und Intents finden Sie unter [NLU-Übersicht](.. /ai/nlu/nlu-overview/overview.md).

Die NLU-Leistungsdaten Ihres Agenten werden in den folgenden Diagrammen visualisiert:

- [Indikatoren](#indicators) 
- [Balkendiagramme](#bar-Diagramme)
- [Liniendiagramme](#line-Diagramme)

In Diagrammen werden Daten basierend auf den Einstellungen für [globaler Filter](global-filter.md) angezeigt. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/NLU_dashboard.png" width="100%" />
  <figcaption>NLU-Leistungs-Dashboard</figcaption>
</figure>

## Indikatoren

Die Indikatordiagramme präsentieren Echtzeitdaten, die alle 30 Sekunden aktualisiert werden.

### Verstandene Botschaften

Gibt den Prozentsatz der verstandenen Nachrichten an, die während Unterhaltungen aufgetreten sind.
Ein Rechenbeispiel mit Datenvisualisierung in einem Balkendiagramm
finden Sie im Balkendiagramm [Verstanden/Verstanden](#understood--missverstandene-Nachrichten).  

### Durchschnittliche Ausführungszeit

Gibt die durchschnittliche Ausführungszeit auf einer Zeitskala an.

Formel:
 
Durchschnittliche Ausführungszeit = 'Summe der Ausführungszeiten / Gesamtzahl der Eingaben'

Ein Berechnungsbeispiel mit Datenvisualisierung in einem Liniendiagramm finden Sie im Liniendiagramm [Average Execution Time](#average-execution-time-1). 

### Durchschnittliche Absichtsbewertung

Gibt den durchschnittlichen Intent-Score in Abhängigkeit von der Zeitrahmeneinstellung an. Der Wert gibt die Qualität Ihres Agenten an, wie "gute" Intents in Konversationen gefunden wurden.
Weitere Informationen finden Sie unter [Machine Learning Intents](.. /ai/nlu/nlu-overview/ml-intents.md).        

Um die durchschnittliche Absichtsbewertung zu ermitteln, summiert Insights alle Absichtsbewertungen und dividiert sie durch die Gesamtzahl der Datensätze.

Quelltabelle:

'''txt
| Analytics-Datensatz | Absichts-Bewertung |
| ---------------- | ------------ |
| Datensatz-1 | 0,30 |
| Datensatz-2 | 0,90 |
| Datensatz-3 | 0,10 |
| Datensatz-4 | Nr. 1 |
| Datensatz-5 | 0,20 |
| Datensatz-6 | 0,02 |
| Datensatz-7 | 0,50 |
'''
Berechnung:

1. Summe der Intent-Scores = '0,30 + 0,90 + 0,10 + 1 + 0,20 + 0,02 + 0,50 = 3,02'
2. Anzahl der Datensätze = '7'
3. Durchschnittlicher Intent-Score = '(Summe der Intent-Scores) / (Anzahl der Datensätze)'
4. Durchschnittliche Absichtsbewertung = '3,02 / 7'

Ergebnis: '0.43'

### Maximaler Intent-Score

Gibt die Anzahl der Absichten an, die mit einer Wirksamkeit von 100 % abgeglichen wurden.

Quelltabelle:

'''txt
| Analytics-Datensatz | Absichts-Bewertung |
| ---------------- | ------------ |
| Datensatz-1 | 0,30 |
| Datensatz-2 | 0,90 |
| Datensatz-3 | 0,10 |
| Datensatz-4 | Nr. 1 |
| Datensatz-5 | 0,20 |
| Datensatz-6 | 0,02 |
| Datensatz-7 | 0,50 |
'''

Ergebnis: In der bereitgestellten Quelltabelle gibt es einen Datensatz mit einer Absichtsbewertung von "1", sodass die maximale Absichtsbewertung "1" ist.

## Balkendiagramme

### Verstandene / missverstandene Nachrichten

Gibt die zeitbezogene Anzahl der verstandenen und missverstandenen Nachrichten in Prozent an, die in einem Balkendiagramm angezeigt werden.

Eine Nachricht wird als verstanden gezählt, wenn sie einen Intent ausgelöst hat, ein Slot abgeglichen wird oder sie über den [Code Node](https://docs.cognigy.com/ai/flow-nodes/code/analytics-data/) oder [Overwrite Analytics Node](https://docs.cognigy.com/ai/flow-nodes/other-nodes/overwrite-analytics/) als verstanden markiert wird.
Eine Nachricht wird nicht als verstanden gezählt
wenn es im [Analytics-Knoten überschreiben](https://docs.cognigy.com/ai/flow-nodes/other-nodes/overwrite-analytics/) als "Nicht zählen" markiert ist
oder während einer aktiven Übergabe gesendet
ohne [LA AI Copilot](https://docs.cognigy.com/ai/handover-providers/la-agent-assist-overview/) Flow zu konfigurieren.

Mit einem Klick auf ! [vertikale-Auslassungspunkte] (https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg),
Sie können den **Go to Intent Trainer** auswählen,
Dadurch gelangen Sie zur Anwendung, Cognigy.AI Sie Ihren Flow verbessern können. Weitere Informationen finden Sie unter [Intent Trainer](.. /ai/resources/tweak/intent-trainer.md).

Quelltabelle:

'''txt
| Datum | verstanden | missverstanden | Prozentsätze |
| -----------| ------------ | --------------- | --------------- |
| 13.09.2023 | Nr. 20 | 33 | Nr. 38/62 |
| 14.09.2023 | -            | -               |   -             |
| 15.09.2023 | Nr. 29 | 18 | 62/38 |
| 16.09.2023 | 0 | 0 | -               |
| 17.09.2023 | 0 | 0 | -               |
| 18.09.2023 | 0 | 0 | -               |
| 19.09.2023 | 0 | 0 | -               |
| ------------------------------------------------------------- |
| INSGESAMT | Nr. 49 | Nr. 51 |                 |
'''

Berechnung für den ausgewählten Zeitraum:

1. Missverständnisse % = '(51 / 100) * 100 = 51%'
2. Verstanden % = '(49 / 100) * 100 = 49%'

Berechnungsbeispiel für das Datum '15.09.2023': 

1. Missverstanden % = '(18 / 47) * 100 = 38%'
2. Verstanden % = '(29 / 47) * 100 = 62%'

Ergebnis:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/NLU_understood_messages.png" width="80%" />
</figure>

### Top-Absichten

Gibt die höchste Anzahl der verwendeten Absichten an, die in einem horizontalen Balkendiagramm angezeigt werden, wobei maximal 6 Absichten in der Zusammenfassungsansicht und 25 in der Detailansicht angezeigt werden. Jedes Mal, wenn ein Intent abgeglichen wird, wird dies in den Analysedaten aufgezeichnet. Die Daten werden dann nach dem übereinstimmenden Intent gruppiert und in absteigender Reihenfolge sortiert.

Quelltabelle: 

'''txt
|  Absicht | Gesamtanzahl |
| ----------------- | ------------- |
| Rabatte für Flüge |      Nr. 12 |
| Einen Flug buchen |      Nr. 5 |
| Einen Flug ändern |      Nr. 5 |
| Zusätzliche Gebühr |      4 |
| Einen Flug ablehnen |      3 |
| Transferflüge |      3 |
'''

Ergebnis:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/top-intents.png" width="90%" />
</figure>

### Top-Slots

Ähnlich wie **Top-Ziele** und **Top-Absichten** zeigt dieses Diagramm die am besten bewertete Anzahl von Slots in einem horizontalen Balkendiagramm an.

Quelltabelle:

'''txt 
| Spielautomat | Anzahl |
| ----------- | ----------- |
| DATUM | 2 |
| ANZAHL | Nr. 1 |
'''

Ergebnis:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/top_slots.png" width="80%" />
</figure>

### Absichten nach Punktebereich

Der Bewertungsbereich der gefundenen Absichten, der in einem gestapelten Balkendiagramm angezeigt wird. Jeder Score-Bereichsbalken zeigt einen Min-Max-Wert an und verfügt über eine Durchschnittswertmarkierung.
Klicken Sie auf den Menüpunkt mit den drei Punkten,
Sie können den **Go to Intent Trainer** auswählen, der Sie zu der Anwendung führt, Cognigy.AI Ihren Flow zu verbessern.
Weitere Informationen finden Sie unter [Intent Trainer](.. /ai/resources/tweak/intent-trainer.md).

Quelltabelle:

'''txt
| Datum | intentScoreAvg | intentScoreMax | intentScoreMin |
| ------------------ | --------------     | --------------     | ------------------ |
| Kuchen | 0,6517875252045072 | 0,6517875252045072 | 0,6517875252045072 |
| Pizza | 0,6863160928710601 | 0,7237952611766103 | 0,6491475952551133 |
| Getränke | 0,698537294767418 | 0,698537294767418 | 0,698537294767418 |
| EIS | 0,7862064089630107 | 0,7862064089630107 | 0,7862064089630107 |
| Überweisung mit REFER| Nr. 1 | Nr. 1 | Nr. 1 |
| Übertragung mit Wählscheibe | Nr. 1 | Nr. 1 | Nr. 1 |
| Spielen | Nr. 1 | Nr. 1 | Nr. 1 |
| DTMF | Nr. 1 | Nr. 1 | Nr. 1 |

'''
Ergebnis: 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/NLU_intents_by_score_range.png" width="80%" />
</figure>

### Top-Intent-Scores

Gibt die am besten bewertete Anzahl von Absichten an, die in einem Balkendiagramm angezeigt werden.
Weitere Informationen finden Sie unter [Intent Analyzer](.. /ai/nlu/nlu-overview/intent-analyzer.md).

Quelltabelle:

'''txt
|  Absichten | Absichts-Bewertung |
| -------------------- | ------------------ |
| Spielen | Nr. 1 |
| Übertragung mit Wählscheibe | Nr. 1 |
| Überweisung mit REFER | Nr. 1 |
| DTMF | Nr. 1 |
| EIS | 0,7862064089630107 |
| Getränke | 0,698537294767418 |
| Pizza | 0,6863160928710601 |
| Kuchen | 0,6517875252045072 |
'''

Ergebnis: 

1. Absichts-Score Max: '1'
2. Absichts-Score min: '0,65'

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/NLU_top_intent_scores.png" width="80%" />
</figure>

## Liniendiagramme

### Durchschnittliche Ausführungszeit

Gibt die durchschnittliche Ausführungszeit eines Flow-Prozesses auf einer Zeitskala an. Das Diagramm zeigt die durchschnittliche Zeit an, die für die Ausführung des Flows in ms benötigt wurde. Die Zeitskalierung hängt von der globalen Filtereinstellung ab.

Formel:
                             
Durchschnittliche Ausführungszeit = 'Summe der Ausführungszeiten / Gesamtzahl der Eingaben'

Quelltabelle:

'''txt
|  Datum | Ausführungszeit |
| ------------ | --------------- |
| 13.09.2023 |      130 |
| 14.09.2023 |      0 |
| 15.09.2023 |      123 |
| 16.09.2023 |      0 |
| 17.09.2023 |      0 |
| 18.09.2023 |      0 |
| 19.09.2023 |      0 |
'''

Ergebnis: '(130ms + 123ms) / 2 = 127.5ms'

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/NLU_avg_execution_time.png" width="80%" />
</figure>

{! _includes/insights/download-report.md !}

## Mehr Informationen

- [Dashboard-Interaktion](dashboard-engagement.md)
- [Dashboard-Übersicht](dashboard-overview.md)
- [Dashboard-Live-Agent](dashboard-live-agent.md)