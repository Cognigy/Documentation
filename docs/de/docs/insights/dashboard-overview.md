---
title: "Dashboard-Übersicht" 
Slug: "Dashboard-Übersicht" 
ausgeblendet: false 
---

# Dashboard-Übersicht

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.45-blue.svg)] (.. /release-notes/4.45.md)

Das Übersichts-dasboard gibt Ihnen eine kurze Zusammenfassung wichtiger Informationen darüber, wie Kunden mit Ihrem virtuellen Agenten interagieren.

Die Zusammenfassung der wichtigsten Metriken ist in den folgenden Diagrammen dargestellt:

- [Indikatoren](#indicators) 
- [Ringdiagramme](#ring-Karten)
- [Balkendiagramme](#bar-Diagramme)
- [Liniendiagramme](#line-Diagramme)

In Diagrammen werden Daten basierend auf den globalen Filtereinstellungen angezeigt.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/overview_dashboard.png" width="100%" />
  <figcaption>Übersichts-Dashboard</figcaption>
</figure>

## Indikatoren

### Aktive Kontakte 

Gibt die Gesamtzahl der derzeit aktiven Benutzersitzungen in den letzten 15 Minuten an. Dieses Widget wird in einem regelmäßigen Intervall von 30 Sekunden aktualisiert.

### Anzahl der Sitzungen

Gibt die Gesamtzahl der Sitzungen an.

### Verstandene Botschaften

Gibt den Prozentsatz der verstandenen Nachrichten an, die während Unterhaltungen aufgetreten sind.

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

## Ringdiagramme

### Sitzungen nach Kanal

Gibt die Gesamtzahl der Konversationen an, die in einem Kreisdiagramm basierend auf den verwendeten Kanälen angezeigt werden. 

Quelltabelle:

'''txt
| Sitzungen | Kanal | Unterhaltungen | Prozentsatz |
| ----------- | ---------------  | --------------- | -------------- |
| Sitzung-123 | Demo Webchat |        Nr. 14 |       46,67 |
| Sitzung-456 | Sprach-Gateway |        Nr. 12 |       40 |
| Sitzung-789 | Interaktions-Panel|        3 |       Nr. 10 |
| Sitzung-ABC | Webchat |        Nr. 1 |       3,33 |
| ----------------------------------------------------------------- |
| INSGESAMT |                  |        30 |       100 |
'''
Ergebnis: 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/sessions_by_channel.png" width="100%" />
</figure>

## Balkendiagramme

### Top-Absichten

Gibt die am höchsten bewertete Anzahl der verwendeten Absichten an, die in einem horizontalen Balkendiagramm angezeigt werden. Das Diagramm zeigt die am besten bewertete Anzahl der verwendeten Intents, wobei maximal 6 Intents in der Zusammenfassungsansicht und 25 in der Detailansicht angezeigt werden. Jedes Mal, wenn eine Absicht übereinstimmt, wird sie in den Analysedaten aufgezeichnet. Die Daten werden dann nach der übereinstimmenden Absicht gruppiert und in absteigender Reihenfolge sortiert.

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
  <img class="image-center" src="{{config.site_url}}insights/images/calls/top-intents.png" width="100%" />
</figure>

### Benutzer nach Gebietsschema

Gibt zeitbezogene erkannte Konversationen in Abhängigkeit von verschiedenen Gebietsschemata an, die in Prozent angegeben werden.

Quelltabelle:

'''txt
| Datum | Unterhaltungen | Gebietsschemata | Prozentsatz |
| -----------| --------------- | --------------- | --------------- |
| 27.08.2023 | 0 |     -           |  -              |
| 28.08.2023 | Nr. 1 | "en-US" | 100 |
| 29.08.2023 | 4 | "en-US" | 100 |
| 30.08.2023 | Nr. 27 | "en-US" | 100 |
| 31.08.2023 | Nr. 1 | "en-US" | 100 |
| 01.09.2023 | Nr. 1 | "en-US" | 100 |
| 02.09.2023 | 0 |     -           |  -              |
'''
Ergebnis: 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/users_by_locale.png" width="100%" />
</figure>

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
  <img class="image-center" src="{{config.site_url}}insights/images/goals.png" width="100%" />
</figure>

### Top-Slots

Ähnlich wie bei "Top-Ziele" und "Top-Absichten" zeigt dieses Diagramm die am besten bewertete Anzahl von Slots an, die in einem Balkendiagramm angezeigt werden.

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

### Verstandene / missverstandene Nachrichten

Gibt die zeitbezogene Anzahl der verstandenen und missverstandenen Nachrichten in Prozent an, die in einem Balkendiagramm angezeigt werden.

Eine Nachricht wird als verstanden gezählt, wenn sie einen Intent ausgelöst hat, ein Slot abgeglichen wird oder sie über den [Code Node](https://docs.cognigy.com/ai/flow-nodes/code/analytics-data/) oder [Overwrite Analytics Node](https://docs.cognigy.com/ai/flow-nodes/other-nodes/overwrite-analytics/) als verstanden markiert wird. 
Eine Nachricht wird nicht als verstanden gezählt
wenn es im [Analytics-Knoten überschreiben](https://docs.cognigy.com/ai/flow-nodes/other-nodes/overwrite-analytics/) als "Nicht zählen" markiert ist
oder während einer aktiven Übergabe gesendet
ohne [LA AI Copilot](https://docs.cognigy.com/ai/handover-providers/la-agent-assist-overview/) Flow zu konfigurieren. 

Mit einem Klick auf ! [vertikale-Auslassungspunkte] (https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg),
Sie können den **Go to Intent Trainer** auswählen,
Dadurch gelangen Sie zur Anwendung, Cognigy.AI Sie Ihren Flow verbessern können.

Quelltabelle:

'''txt
| Datum | verstanden | missverstanden | Prozentsätze |
| -----------| ------------ | --------------- | --------------- |
| 27.08.2023 | 0 |     0 |  0 |
| 28.08.2023 | Nr. 1 | 0 | 100/0 |
| 29.08.2023 | Nr. 12 | Nr. 10 | 55/45 |
| 30.08.2023 | 31 | 18 | 63/37 |
| 31.08.2023 | 7 | Nr. 1 | 87,5/12,5 |
| 01.09.2023 | 2 | 0 | 100/0 |
| 02.09.2023 | 0 |     -           |  -              |
'''
Ergebnis: 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/understood_messages.png" width="100%" />
</figure>

### Anzahl der Eingänge

Gibt die zeitbezogene Anzahl der Eingaben an, die in einem Balkendiagramm angezeigt werden.

Quelltabelle:

'''txt
| Datum | Eingänge | 
| -----------| ------------ |
| 27.08.2023 | 0 | 
| 28.08.2023 | Nr. 1 |
| 29.08.2023 | 23 | 
| 30.08.2023 | 72 | 
| 31.08.2023 | 8 | 
| 01.09.2023 | 3 | 
| 02.09.2023 | 0 | 
'''
Ergebnis: 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/number_of_inputs.png" width="100%" />
</figure>

## Liniendiagramme

### Sitzungen

Gibt die Anzahl der Sitzungen auf einer Zeitskala an

Quelltabelle:

'''txt
| Datum | Sitzungen | 
| -----------| ------------ |
| 27.08.2023 | 0 | 
| 28.08.2023 | Nr. 1 |
| 29.08.2023 | 4 | 
| 30.08.2023 | 30 | 
| 31.08.2023 | 6 | 
| 01.09.2023 | Nr. 1 | 
| 02.09.2023 | 0 | 
'''

Ergebnis: 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/sessions.png" width="100%" />
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

- [Dashboard-Interaktion](dashboard-engagement.md)
- [NLU-Leistung des Dashboards](dashboard-nlu-performance.md)
- [Dashboard-Live-Agent](dashboard-live-agent.md)