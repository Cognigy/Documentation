---
Titel: "Engagement" 
Slug: "Dashboard-Engagement" 
ausgeblendet: false 
---
# Engagement-Dashboard

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.51-blue.svg)] (.. /release-notes/4.51.md)

Das Engagement-Dashboard konzentriert sich auf Kundeninteraktionen in Konversationen. Die Engagement-Leistung Ihres Agenten wird in den folgenden Diagrammen visualisiert:

- [Indikatoren](#indicators) 
- [Heatmaps](#heat-Karten)
- [Balkendiagramme](#bar-Diagramme)
- [Liniendiagramme](#line-Diagramme)

{! _includes/insights/global-filters.md !}

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/engagement-dashboard.png" width="100%" />
  <figcaption>Dashboard für das Engagement</figcaption>
</figure>

## Indikatoren

Die Indikatordiagramme präsentieren Echtzeitdaten, die alle 30 Sekunden aktualisiert werden.

### Ziele erreicht 

Gibt die Gesamtzahl der [abgeschlossenen Ziele](.. /ai/flow-nodes/profile/complete-goal.md). 

Quelltabelle:

'''txt
 | Gestartet bei |  Sitzungen |  Ziele | Erreichte Ziele |
 | ---------- | ----------- | ------------------------ | ------------- |
 | 01.01.2022 | Sitzung-123 | "Ziel A, Ziel B, Ziel D" |       3 |
 | 01.01.2022 | Sitzung-456 | "Ziel B, Tor C, Ziel E" |       3 |
 | 03.01.2022 | Sitzung-789 | "Ziel B, Ziel E" |       2 |
 | 03.01.2022 | Sitzung-ABC | "Ziel B" |       Nr. 1 |
 | 05.01.2022 | session-def | "Ziel A, Ziel B" |       2 |
'''

Ergebnis: '11'

### Durchschnittliche Sitzungsdauer

Gibt an, wie lange die durchschnittliche Sitzung gedauert hat.

Die Sitzungslänge ist die Zeitdifferenz zwischen dem Zeitstempel der ersten Benutzereingabe und der letzten Benutzereingabe.

Die durchschnittliche Sitzungsdauer ist der Mittelwert aller Sitzungslängen innerhalb des angegebenen Zeitraums in Ihrem Insights-Filter.

Quelltabelle:

'''txt
 | Gestartet bei |  Beendet um | Sitzungen |          
 | ------------------- | ------------------- | ----------- |
 | 01.01.2022 12:15 00 Uhr | 01.01.2022 12:18 00 Uhr | Sitzung-123 |
 | 01.01.2022 14:00 00 Uhr | 01.01.2022 15:00 00 Uhr | Sitzung-456 |
 | 03.01.2022 09:05 30 Uhr | 03.01.2022 09:15 30 Uhr | Sitzung-789 |
 | 03.01.2022 11:30 00 Uhr | 03.01.2022 11:44 00 Uhr | Sitzung-ABC |
 | 05.01.2022 06:10 00 | 05.01.2022 06:20 00 Uhr | session-def |
'''

Berechnung:

1. Länge für eine bestimmte Sitzung 'Max(Zeitstempel) - Min(Zeitstempel)'.
2. "Dauer aller Sitzungen / Gesamtzahl der Sitzungen".

Beispiel:

1. Gesamtlänge = "3 Minuten + 1 Stunde + 10 Minuten + 14 Minuten + 10 Minuten = 1 Stunde 37 Minuten"
2. Durchschnittliche Sitzungsdauer = "1 Stunde 37 Minuten / 5 = 19 Minuten und 24 Sekunden"

Ergebnis: '00:19:24'

### Positive Bewertungen

Gibt die Gesamtzahl der positiven Bewertungen an, die vom Endbenutzer als Feedback abgegeben wurden.

Quelltabelle:

'''txt
| Sitzungen | Positive Bewertung | Negative Bewertung | Bewertete Sitzungen |
| ----------- | --------------- | --------------- | -------------- |
| Sitzung-123 |        Nr. 1 |        0 |       Nr. 1 |
| Sitzung-456 |        0 |        Nr. 1 |       Nr. 1 |
| Sitzung-789 |        0 |        0 |       0 |
| Sitzung-ABC |        Nr. 1 |        0 |       Nr. 1 |
| session-def |        Nr. 1 |        0 |       Nr. 1 |
| ---------------------------------------------------------------- |
| INSGESAMT |        3 |        Nr. 1 |       4 |
'''

Ergebnis: '3'

### Eindämmungsrate

Gibt das Verhältnis von Sitzungen ohne Übergabe zu allen Sitzungen an.

Quelltabelle:

'''txt
| Sitzungs-ID | Übergaben | Übergabe-Sitzungen | Sitzungen |
| ----------- | ----------| ----------------- | -------- |
| Sitzung-123 |     3 |        Nr. 1 |    Nr. 1 |
| Sitzung-456 |     0 |        0 |    Nr. 1 |
| Sitzung-789 |     0 |        0 |    Nr. 1 |
| Sitzung-ABC |     2 |        Nr. 1 |    Nr. 1 |
| session-def |     Nr. 1 |        Nr. 1 |    Nr. 1 |
| ------------------------------------------------------ |
| INSGESAMT |     6 |        3 |    Nr. 5 |
'''  

Formel:

1. Eindämmungsrate = '1 - (Übergabe inklusive Sitzungen)/(Sitzungen insgesamt)'.
   
2. Prozentsatz "Eindämmungsrate * 100 %". 

Ergebnis: '40%' 

## Heatmaps

### Übergaben nach Tageszeiten

Gibt an, wie oft ein menschlicher Agent kontaktiert wurde. Während einer Sitzung kann es zu mehreren Übergaben kommen.

Quelltabelle:

'''txt 
| Datum/Uhrzeit | Übergabe |
| --------------- | ---------- |
| 08.01.2023 16:00 Uhr |	   0 |
| 08.01.2023 17:00 Uhr |	   0 |
| 09.01.2023 00:00 Uhr |    0 |
| 11.01.2023 15:00 Uhr |    0 |
| 15.01.2023 18:00 Uhr |    0 |
| 16.01.2023 21:00 Uhr |    0 |
| 17.01.2023 11:00 Uhr |    0 |
| 18.01.2023 06:00 Uhr |    Nr. 1 |
| 18.01.2023 21:00 Uhr |    Nr. 1 |
| 19.01.2023 00:00 Uhr |    2 |
| 19.01.2023 10:00 Uhr |    Nr. 1 |
| 23.01.2023 13:00 Uhr |    0 |
| 24.01.2023 23:00 Uhr |    0 |
'''

Ergebnis:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/heatmap.png" width="100%" />
</figure>

## Balkendiagramme

### Top-Ziele

Gibt die am höchsten bewertete Anzahl der erreichten Ziele an. 

Mit einem Klick auf ! [vertikale-Auslassungspunkte] (https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg),
Sie können **Gehe zum Schritt-Explorer** auswählen,
Dies führt Sie zum Schritt-Explorer in Insights.

Quelltabelle:

'''txt 
| Sitzungen | Ziele |
| ----------- | ---------------------- |
| Sitzung-123 | Ziel A, Ziel B, Tor D |
| Sitzung-456 | Ziel B, Tor C, Ziel E |
| Sitzung-789 | Ziel A, Ziel B, Ziel E |
| Sitzung-ABC | Ziel A |
| session-def | Tor, Ziel A |
| Sitzungs-GHI | Tor, Ziel A |
'''

Ergebnis:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/goals.png" width="80%" />
</figure>

### Eindämmungsrate

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.48-blue.svg)] (.. /release-notes/4.48.md)

Gibt den Prozentsatz der Sitzungen ohne Übergabe während der Zeitachse an.

Quelltabelle:
 
'''txt
| Datum | Eindämmungsrate | Sitzungen gesamt | Übergabe inklusive Sessions |
| --------- | ---------------  | -------------- | -------------------------- |
| 01.03.2023 | 	87,5 |       40 | 	       35 |
| 02.03.2023 | 	82.60869565 |       Nr. 46 | 	       38 |
| 03.03.2023 | 	96.77419355 |       62 | 	       60 |
| 06.03.2023 | 	92,5 |       40 | 	       Nr. 37 |
| 07.03.2023 | 	100 |       Nr. 58 | 	       Nr. 58 |
| 08.03.2023 | 	100 |       92 | 	       92 |
| 10.03.2023 | 	100 |       Nr. 10 | 	       Nr. 10 |
'''

Formel:

1. Eindämmungsrate = '1 - (Übergabe inklusive Sitzungen)/(Sitzungen insgesamt)'.

2. Prozentsatz "Eindämmungsrate * 100 %".

Beispiel für den 01.03.2023: "(35/40)* 100% = 87,5%"

Ergebnis: 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/containment-rate.png" width="100%" />
</figure>

## Liniendiagramme

### Pünktliche Übergaben

Gibt an, wie oft ein menschlicher Agent kontaktiert wurde. Während einer Sitzung können mehrere Eskalationen auftreten.

Gibt an, wie oft ein Live-Agent angerufen wurde, der auf einer Zeitachsenskala angezeigt wird, abhängig von der Einstellung für den Zeitrahmenfilter.

Mit einem Klick auf ! [vertikale-Auslassungspunkte] (https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg),
Sie können **Gehe zum Schritt-Explorer** auswählen,
Dies führt Sie zum Schritt-Explorer in Insights.

Quelltabelle:

'''txt
| Datum/Uhrzeit | Übergaben pro Tag |
|------------|-------------------|
| 11.04.2023 |         3 |           
| 12.04.2023 |         0 |            
| 13.04.2023 |        24 |           
| 14.04.2023 |         8 |             
| 17.04.2023 |        Nr. 17 |        
| 18.04.2023 |        Nr. 12 |       
| 20.04.2023 |         Nr. 5 |         
| 21.04.2023 |         Nr. 5 |        
'''

Ergebnis:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/handovers-on-time.png" width="100%" />
</figure>

### Positive Bewertungen im Laufe der Zeit

Gibt die Gesamtzahl der positiven Bewertungen an, die vom Endbenutzer als Feedback abgegeben wurden.

Quelltabelle:

'''txt
| Datum (Wochen) | Positiv | Negativ | Anzahl der Bewertungen |
| ------------ | -------- | -------- | ----------------- |	
| 2023-W01 |     Nr. 1 |    0 |         Nr. 1 |
| 2023-W04 |     Nr. 1 |    0 |         Nr. 1 |
| 2023-W05 |     2 |    0 |         2 |
'''

Ergebnis:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/positive-ratings.png" width="80%" />
</figure>

### Einzigartige Kontakte

Gibt die Anzahl der eindeutigen Kontakte ('userid') auf einer Zeitskala an. Wenn der Benutzer mehr als eine Sitzung an einem einzigen Tag erstellt, wird dies als ein eindeutiger Kontakt für diesen Tag gezählt.

Quelltabelle:

'''txt
| Datum | Kontakte |
| --------- | -------- |
| 16.01.2023 |    Nr. 1 |
| 17.01.2023 |    8 |
| 18.01.2023 |    15 |
| 19.01.2023 |    6 |
| 20.01.2023 |    18 |
'''

Ergebnis:

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/unique-contacts.png" width="100%" />
</figure>

{! _includes/insights/download-report.md !}

## Mehr Informationen

- [Dashboard-Übersicht](dashboard-overview.md)
- [NLU-Leistung des Dashboards](dashboard-nlu-performance.md)
- [Dashboard-Live-Agent](dashboard-live-agent.md)