---
Titel: "Aufrufe"
Slug: "Dashboard-Aufrufe"
ausgeblendet: false
---

# Aufrufe

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.51-blue.svg)] (.. /release-notes/4.51.md)

Im Dashboard "Anrufe" werden Daten aus dem Voice Gateway-Dienst angezeigt. Dieses Dashboard hilft Ihnen, Bereiche zu identifizieren, in denen Ihr virtueller Agent möglicherweise verbessert werden muss, und Anpassungen vorzunehmen, um die Gesamtqualität der Sprachinteraktionen zu verbessern.

Metriken werden in den folgenden Diagrammen visualisiert:

- [Indikatoren](#indicators)
- [Balkendiagramme](#bar-Diagramme)
- [Liniendiagramme](#line-Diagramme)

Jedes Diagramm stellt Echtzeitdaten dar, die alle 30 Sekunden aktualisiert werden.

Alle in den Diagrammen angezeigten Daten beziehen sich auf die Einstellungen [globaler Filter](global-filter.md).

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/calls-dashboard-overview.png" width="100%" />
  <figcaption>Dashboard "Anrufe"</figcaption>
</figure>

## Indikatoren

### Aktive Anrufe

Gibt an, dass die Daten für die Anzahl der derzeit aktiven Anrufe für die letzten 15 Minuten abgerufen und alle 30 Sekunden aktualisiert werden.

### Gesamtzahl der Anrufe

Gibt die Gesamtzahl der Anrufe an, die im ausgewählten Zeitraum stattgefunden haben.

### Tarif für weitergeleitete Anrufe

Gibt den Prozentsatz der Anrufe an, die erfolgreich an einen Agenten weitergeleitet wurden.

Berechnung: '(erfolgreiche Weiterleitungen / Anrufe insgesamt) x 100%'

Beispiel: '(600 / 1000) x 100% = 60%'

### Gesamtdauer des Anrufs

Gibt die Gesamtdauer der Anrufe im ausgewählten Zeitrahmen an.

Berechnung: "Dauer des Anrufs 1 + Dauer des Anrufs 2 + Dauer des Anrufs 3 + ... + Dauer des Anrufs n"

## Balkendiagramme

### Anruf beendet von

Zeigt den Prozentsatz der Anrufe an, die vom virtuellen Agenten oder vom Benutzer beendet wurden.

Quelltabelle:

'''txt
|   Datum |   Schauspieler | Anzahl der Anrufe |
| --------  | ---------- | --------------- |
| 2023-W08 |    Benutzer |      Nr. 13 |
| 2023-W08 |    Vermittler |      Nr. 46 |
| 2023-W09 |    Benutzer |      78 |
| 2023-W10 |    Benutzer |      Nr. 22 |
| 2023-W10 |    Vermittler |      Nr. 21 |
| 2023-W11 |    Benutzer |      15 |
| 2023-W11 |    Vermittler |      2 |
'''

Ergebnis:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/call-ended-by.png" width="80%" />
</figure>

### Top-Absichten

Zeigt die am höchsten bewertete Anzahl der verwendeten Absichten an, wobei maximal 6 Absichten in der Zusammenfassungsansicht und 25 in der Detailansicht angezeigt werden. Jedes Mal, wenn eine Absicht übereinstimmt, wird sie in den Analysedaten aufgezeichnet. Die Daten werden dann nach der übereinstimmenden Absicht gruppiert und in absteigender Reihenfolge sortiert.

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
  <img class="image-center" src="{{config.site_url}}insights/images/calls/top-intents.png" width="80%" />
</figure>

### Gesamtdauer des Anrufs

Zeigt die Gesamtdauer der Anrufe im ausgewählten Zeitrahmen an.

Quelltabelle:

'''txt
| Datum | totalCallDuration | averageCallDuration | minCallDuration | maxCallDuration |
| 19.02.2023 | 142000 | 23666.66667 |    10000 | 40000 |
| 20.02.2023 | 136000 | 19428.57143 |    1000 | 50000 |
| 21.02.2023 | 88000 | 14666.66667 |    2000 | 32000 |
| 22.02.2023 | 95000 | 31666.66667 |    12000 | 48000 |
| 23.02.2023 | 144000 | 20571.42857 |    2000 | 48000 |
'''

Ergebnis:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/total-call-duration.png" width="100%" />
</figure>
  
## Liniendiagramme

### Wegbeschreibung anrufen

Zeigt die Anzahl der ein- und ausgehenden Anrufe an und fasst sie in einem mehrzeiligen Diagramm zusammen.

Ein mehrzeiliges Diagramm, das aus drei Linien besteht:

- Eingehend — die Anzahl der eingehenden Anrufe auf der Zeitskala.
- Ausgehend — die Anzahl der ausgehenden Anrufe auf der Zeitskala.
- Bidirektional – die Anzahl der Anrufe, die während einer Sitzung auf der Zeitskala sowohl eingehende als auch ausgehende Richtungen beinhalten.
- Gesamt – die Anzahl aller eingehenden, ausgehenden und bidirektionalen Anrufe auf der Zeitskala.

Quelltabelle:

'''txt
|   Datum |   Typ | Anzahl der Anrufe |
| --------- | ------------ | --------------- |
| 26.04.2023 | Insgesamt |       Nr. 12 |
| 26.04.2023 | Eingehend |	   Nr. 10 |
| 26.04.2023 | Ausgehend |	   0 |
| 26.04.2023 | Bidirektional|	   2 |
| 27.04.2023 | Insgesamt |	   Nr. 19 |
| 27.04.2023 | Eingehend |	   18 |
| 27.04.2023 | Ausgehend |	    0 |
| 27.04.2023 | Bidirektional|	    Nr. 1 |

'''

Ergebnis:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/call-directions.png" width="100%" />
</figure>

### Abbruchrate

Zeigt den Prozentsatz der Benutzer an, die einen Anruf innerhalb von 5 Sekunden nach Initiierung beendet haben.

Quelltabelle:

'''txt
|   Datum | Links vor 5 Sekunden |   Gesamt |
| --------- | --------------- | ------------ |
| 20.02.2023 |      7 |      7 |
| 21.02.2023 |      3 |      6 |
| 22.02.2023 |      0 |      3 |
| 23.02.2023 |      3 |      7 |
'''

Berechnung: "(Anzahl der Personen, die den Anruf vor 5 Sekunden verlassen haben / Gesamtzahl der Personen, die den Anruf betreten haben) x 100 %"

Beispiel: '(4 / 7) x 100% = 12.5%'

Ergebnis:

'''txt
|   Datum |      %       |
| --------- | ------------ |
| 20.02.2023 |  100 |
| 21.02.2023 |  50 |
| 22.02.2023 |  0 |
| 23.02.2023 |  42.85714286 |
'''

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/abandon-rate.png" width="100%" />
</figure>

### TTS-Reaktionszeit

Zeigt die Zeit (in Millisekunden) an, die ein Sprachagent benötigt, um auf eine Text-to-Speech-Konvertierungsanforderung (TTS) zu antworten. Die TTS-Antwortzeit umfasst die Zeit, die das System benötigt, um die Anforderung zu verarbeiten, das Audio zu generieren und die Ausgabe zu liefern. Diese Antwortzeit gibt an, wie schnell das System auf Anfragen reagiert und wird verwendet, um die Leistung eines TTS-Systems zu messen.

Quelltabelle:

'''txt
|   Datum | Dauer |
| --------- | --------- |
| 23.02.2023 |   Nr. 13 |
| 22.02.2023 |   18 |
| 21.02.2023 |   15 |
| 20.02.2023 |   Nr. 13 |
| 19.02.2023 |   Nr. 14 |
'''
Ergebnis:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/tts-response-time.png" width="100%" />
</figure>

### Prozentsatz (%) der weitergeleiteten Anrufe

Zeigt eine mehrzeilige Anzeige des Prozentsatzes der Anrufe an, die erfolgreich an einen Agenten weitergeleitet wurden.

Quelltabelle:

'''txt
|   Datum | Weitergeleitete Anrufe | Anrufe gesamt |
| --------- | ----------------- | ----------- |
| 23.02.2023 |        3 |    6 |
| 22.02.2023 |        3 |    7 |
| 21.02.2023 |        2 |    4 |
| 20.02.2023 |        0 |    2 |
| 19.02.2023 |        3 |    7 |
'''
Berechnung: "(Anzahl der weitergeleiteten Anrufe / Gesamtzahl der Anrufe) * 100"

Beispiel: '(3 / 6) * 100 = 50%'

Ergebnis:

'''txt
| Datum | Weitergeleitete Anrufe |
| --------- | ----------------- |
| 19.02.2023 | 50 |
| 20.02.2023 | 42.85714286 |
| 21.02.2023 | 50 |
| 22.02.2023 | 0 |
| 23.02.2023 | 42.85714286 |
'''

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/transferred-calls.png" width="100%" />
</figure>

### Durchschnittliche gleichzeitige Sitzung

Die durchschnittliche Anzahl aktiver Sitzungen, die innerhalb eines bestimmten Zeitraums stattfinden. Darüber hinaus zeigt Insights das Limit für gleichzeitige Sitzungen im Diagramm mit einer Linie an, die angibt, ob das Limit für die Anruflizenz überschritten wird.

Quelltabelle:

'''txt
| Datum | Gesamtdauer des Anrufs | Zeitraum |
|-----------|---------------------|-----------------------|
| 25.04.2023 | 7.04 Minuten | 1 Stunde (3600 Sekunden) |
'''

Berechnung: 'Gesamtsitzungszeit während eines Zeitraums / Zeitraums'

Beispiel: 

1. Gesamtanrufdauer: 7,04 Minuten x 60 Sekunden = 422,4 Sekunden
2. Durchschnittliche gleichzeitige Sitzungen: 422,4 / 3600 = 0,117

Ergebnis: '0.117'

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/calls/average-concurrent-session.png" width="100%" />
</figure>

{! _includes/insights/download-report.md !}

## Mehr Informationen

- [Dashboard-Übersicht](dashboard-overview.md)
- [NLU-Leistung des Dashboards](dashboard-nlu-performance.md)
- [Dashboard-Interaktion](dashboard-engagement.md)
- [Dashboard-Live-Agent](dashboard-live-agent.md)