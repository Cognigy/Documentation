---
 Titel: "Live Agent (Beta)" 
 slug: "Live-Agent (Beta)" 
 Ausgeblendet: Wahr 
---

# Live-Agent (Beta)

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.62(Beta)-lila.svg)] (.. /release-notes/4.62.md)

!!! Anmerkung
    Das Live Agent-Dashboard befindet sich in der Beta-Phase. Wir empfehlen Ihnen, diese Funktion auszuprobieren und uns Feedback zu geben.

Das Live Agent-Dashboard zeigt Live Agent-Metriken für einen bestimmten virtuellen Agenten an.

Mit diesem Dashboard können Sie:

- Behalten Sie den Überblick, wie schnell menschliche Agenten reagieren und Kundenanfragen lösen.
- Überwachen Sie die Gesamtzahl der Übergaben für den virtuellen Agenten.
- Fassen Sie den Konversationsstatus zusammen.
- Bewerten Sie Konversationstypen basierend auf dem zugewiesenen Label.

Diese Metriken werden in den folgenden Diagrammen visualisiert:

- [Indikatoren](#indicators) 
- [Balkendiagramme](#bar-Diagramme)
- [Liniendiagramme](#line-Diagramme)

{! _includes/insights/global-filters.md !}

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/live-agent-dashboard.png" width="100%" />
  <figcaption>Live-Agenten-Dashboard</figcaption>
</figure>

## Indikatoren 

Die Indikatordiagramme präsentieren Echtzeitdaten, die alle 30 Sekunden aktualisiert werden.

### Live-Agenten-Übergaben

Gibt die Anzahl der Übergaben an. Die Übergabe erfolgt, wenn ein virtueller Agent die Konversation an einen menschlichen Agenten überträgt. Während einer Sitzung kann es zu mehreren Übergaben kommen.

Quelltabelle:

'''txt 
| Sitzungen | Datum/Uhrzeit | Übergaben pro Sitzung | Eskalation |
| ----------- | --------- | ---------------------- | ---------- |
| Sitzung-123 | 08.01.2023 |          Nr. 1 |     Nr. 1 |
| Sitzung-456 | 09.01.2023 |          0 |     0 |
| Sitzung-789 | 11.01.2023 |          0 |     0 |
| Sitzung-ABC | 15.01.2023 |          2 |     Nr. 1 |
| session-def | 16.01.2023 |          4 |     Nr. 1 |
'''

Ergebnis: '7'

### Übergaberieren

Gibt den Prozentsatz aller Sitzungen an, die mindestens einmal an Cognigy Live Agent eskaliert wurden, berechnet als Verhältnis der Live Agent-Eskalationen geteilt durch die Gesamtzahl der Sitzungen. Ein niedrigerer Wert ist besser.

Kommt es während einer Sitzung zu mehreren Übergaben, zählt Cognigy diese als eine Eskalation.

Quelltabelle:

'''txt 
| Sitzungen | Datum/Uhrzeit | Übergaben pro Sitzung |  Eskalation |
| ----------- | --------- | ---------------------- | ------------- |
| Sitzung-123 | 08.01.2023 |          Nr. 1 |       Nr. 1 |
| Sitzung-456 | 09.01.2023 |          0 |       0 |
| Sitzung-789 | 11.01.2023 |          0 |       0 | 
| Sitzung-ABC | 15.01.2023 |          2 |       Nr. 1 | 
| session-def | 16.01.2023 |          4 |       Nr. 1 | 
'''

Berechnung: "(Anzahl der Live-Agent-Eskalationen) / (Gesamtsitzungen) * 100 %"

Ergebnis: '60%' 

### Durchschn. Zeit bis zur ersten Reaktion

Gibt die durchschnittliche Zeit an, die ein menschlicher Agent benötigt, um die erste Antwort an einen Benutzer zu senden.

Quelltabelle:

'''txt
 | Uhrzeit anfordern | Erste Reaktionszeit | Sitzungen |          
 | ------------------- | ------------------- | ----------- |
 | 01.01.2022 12:15 00 Uhr | 01.01.2022 12:16 00 Uhr | Sitzung-123 |
 | 01.01.2022 14:00 00 Uhr | 01.01.2022 14:02 00 Uhr | Sitzung-456 |
 | 03.01.2022 09:05 30 Uhr | 03.01.2022 09:05 30 Uhr | Sitzung-789 |
 | 03.01.2022 11:30 00 Uhr | 03.01.2022 11:31 00 Uhr | Sitzung-ABC |
 | 05.01.2022 06:10 00 | 05.01.2022 06:12 30 Uhr | session-def |
'''

Berechnung: 

1. Für jede Sitzung "Zeit der ersten Antwort - Zeit der Anfrage".
2. Durchschnittliche Zeit bis zur ersten Antwort = "Gesamtzeit bis zum Senden einer ersten Antwort / Anzahl der Sitzungen"

Ergebnis: '1 min 10 sek'

### Durchschnittliche Lösungszeit

Gibt die durchschnittliche Differenz zwischen der Eskalation einer Benutzeranforderung an einen menschlichen Agenten und dem Zeitpunkt an, an dem der menschliche Agent die Konversation auflöst.

Quelltabelle:

'''txt
 | Uhrzeit anfordern | Zeit auflösen | Sitzungen |          
 | ------------------- | ------------------- | ----------- |
 | 01.01.2022 12:15 00 Uhr | 01.01.2022 12:30 00 Uhr | Sitzung-123 |
 | 01.01.2022 14:00 00 Uhr | 01.01.2022 14:15 00 Uhr | Sitzung-456 |
 | 03.01.2022 09:05 00 Uhr | 03.01.2022 09:14 30 Uhr | Sitzung-789 |
 | 03.01.2022 11:30 00 Uhr | 03.01.2022 11:42 00 Uhr | Sitzung-ABC |
 | 05.01.2022 06:10 00 | 05.01.2022 06:12 30 Uhr | session-def |
'''

Berechnung: 

1. Für jede Sitzung 'Auflösungszeit - Anforderungszeit'.
2. Durchschnittliche Lösungszeit = "Gesamtlösungszeit / Gesamtzahl der Sitzungen"

Ergebnis: '9 min'

### Geöffnet

Gibt die Anzahl der Konversationen an, die von einem Benutzer geöffnet oder von einem menschlichen Agenten erneut geöffnet wurden.

### Zugewiesen

Gibt die Anzahl der Konversationen an, die einem menschlichen Agenten zugewiesen wurden

### Ausstehend

Gibt die Anzahl der Konversationen an, die angehalten wurden, bis ein Kunde oder ein menschlicher Agent geantwortet hat.

### Schlummernd

Gibt die Anzahl der Konversationen an, die vorübergehend ausgesetzt wurden, bis ein Zeitauslöser oder ein Kundenantwortauslöser aktiviert wurde.

## Balkendiagramme 

### Endgrund der Übergabe

Gibt die Zeitskala der folgenden Konversationsstatus an:

- Abgebrochen: Eine Konversation wird geschlossen, weil der Benutzer eine Konversation verlassen hat.
- Gelöst: Eine Konversation wird geschlossen, weil das Problem des Benutzers gelöst wurde.

Das Diagramm zeigt, wie sich die Leistung der Live-Agenten im Laufe der Zeit verändert hat. 

Quelltabelle:

'''txt
| Datum | Status |  Unterhaltungen |
| --------- | --------- | --------------- |
| 20.03.2023 | Aufgegeben |        3 |
| 21.03.2023 | Aufgegeben |        2 |
| 21.03.2023 | Gelöst |        Nr. 1 |
| 29.03.2023 | Aufgegeben |        2 |
| 29.03.2023 | Gelöst |       24 |
| 30.03.2023 | Gelöst |        Nr. 5 |
| 04.04.2023 | Gelöst |        Nr. 1 |
| 13.04.2023 | Gelöst |       15 |
| 13.04.2023 | Aufgegeben |       Nr. 13 |
| 13.04.2023 | ausstehend |        Nr. 1 |
| 13.04.2023 | Schlummernd |        Nr. 1 |
| 14.04.2023 | zugewiesen |       Nr. 22 |
| 14.04.2023 | Aufgegeben |        3 |
| 14.04.2023 | Gelöst |        Nr. 5 |
| 17.04.2023 | zugewiesen |        7 |
| 17.04.2023 | Gelöst |       15 |
| 18.04.2023 | zugewiesen |        6 |
| 18.04.2023 | Aufgegeben |        6 |
'''

Ergebnis:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/handover-end-reason.png" width="100%" />
</figure>

### Zusammenfassung des Labels

Gibt Live Agents-Beschriftungen an, um Konversationen zu kategorisieren und zu priorisieren.

'''txt
| Name des Etiketts | Anzahl der Etiketten | 
| ---------  | ---------------- | 
|   Qualitätssicherung |       4 |
|   Testen |       Nr. 1 |
'''

Ergebnis:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/label-summary.png" width="80%" />
</figure>

## Liniendiagramme

### Performance-Zeiten für Live-Agenten

Gibt die Zeitachse der durchschnittlichen ersten Antwort und die durchschnittliche Lösungszeit an. Diese Metrik wird basierend auf der Anzahl der Sitzungen berechnet und hilft bei der Bewertung der Effektivität menschlicher Agentenvorgänge, indem die Reaktionszeiten und die Lösungszeit der Kundendienstmitarbeiter verglichen werden.

Die Metrik "First Response Time" bezieht sich auf die durchschnittliche Zeit, die ein menschlicher Agent benötigt, um eine erste Antwort auf die Anfrage eines Kunden zu senden. 
Die Metrik "Lösungszeit" bezieht sich auf die durchschnittliche Zeit der Interaktion eines Kunden mit einem menschlichen Agenten vom Beginn der Übergabesequenz bis zum Ende der Sitzung.

Quelltabellen:

- [Durchschn. Erste Reaktionszeit](#avg-erste-Reaktionszeit)
- [Durchschnittliche Auflösungszeit](#avg-Auflösungszeit)

Ergebnis:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/live-agent-performance-times.png" width="100%" />
</figure>

{! _includes/insights/download-report.md !}

## Mehr Informationen

- [Dashboard-Übersicht](dashboard-overview.md)
- [Dashboard-Interaktion](dashboard-engagement.md)
- [NLU-Leistung des Dashboards](dashboard-nlu-performance.md)