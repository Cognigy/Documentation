---
 Titel: "Ablauf der Daten" 
 slug: "Ablauf der Daten" 
 ausgeblendet: false 
---
# Ablauf der Daten

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.59-blue.svg)] (.. /release-notes/4.59.md)

*Datenablauf* (TTL, Time-to-Live) zeigt die Dauer bis zum Ablauf der auf Dashboards angezeigten Insights-Daten an. 

Um zu erfahren, wann die Daten ablaufen, klicken Sie auf ! [Uhr] (images/icons/clock.svg) in der oberen rechten Ecke der aktuellen Seite. Um den Wert in Minuten anzuzeigen, bewegen Sie den Mauszeiger über den aktuellen Wert.

Wenn Cognigy-Produkte täglich verwendet werden, bleiben die Datenablaufwerte unverändert, da der Countdown ab der letzten Datenaktualisierung beginnt.

## Tabelle mit Datenablauf

In der folgenden Tabelle können Sie die in TTL enthaltenen Daten anzeigen.

| Daten | Beschreibung | Dashboards/Explorer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|---------------------|-------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  ------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Analytik | Dies gibt die Zeitspanne zwischen der Erstellung aller Analytics-Daten und deren Entfernung aus der Datenbank an.         | [Übersicht] dashboard-overview.md): <br>- Anzahl der Eingänge <br>- Top-Absichten  <br>- Verstandene Botschaften  <br>- Verstandene / missverstandene Nachrichten<br> [Verlobung] (dashboard-engagement.md): <br>- Durchschnittliche Sitzungsdauer<br> - Max. Sitzungsdauer <br> [NLU-Leistung] dashboard-nlu-performance.md): <br> - Durchschnittliche Absichtsbewertung <br> - Durchschnittliche Ausführungszeit <br> - Absichten nach Punktebereich <br> - Maximaler Intent-Score <br> - Verstandene Botschaften <br> - Verstandene / missverstandene Nachrichten <br> - Top-Absichten <br> - Top-Intent-Scores <br> | 
| Unterhaltungen | Dies gibt die Zeitspanne zwischen der Erstellung der Chatverlaufsanalyse und ihrer Entfernung aus der Datenbank an.     | [Transkript-Explorer] (transcript-explorer.md), [Nachrichten-Explorer](message-explorer.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Sitzungen | Dies gibt die Zeitspanne zwischen der Erstellung der Insights-Sitzungsanalyse und ihrer Entfernung aus der Datenbank an. | [Übersicht] dashboard-overview.md): <br> - Aktive Kontakte<br> - Positive Bewertungen<br> -Sitzungen<br> - Sitzung nach Kanal<br> - Anzahl der Sitzungen<br> - Top-Ziele<br>- Top-Slots<br> - Einzigartige Kontakte<br> - Benutzer nach Gebietsschema<br> [Verlobung] (dashboard-engagement.md): <br>-Kontakte <br>- Erreichte Ziele <br>- Übergaben nach Tageszeiten <br>- Live-Agenten-Eskalationen <br>- Positive Bewertungen <br>- Positive Bewertungen im Laufe der Zeit <br>- Top-Ziele <br>[NLU-Leistung] dashboard-nlu-performance.md):<br>- Top-Slots | 
| Schritt-Veranstaltungen | Dies gibt die Zeitspanne zwischen der Erstellung von Schrittdaten und deren Entfernung aus der Datenbank an.                  | [Schritt-Explorer] (step-explorer.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| LiveAgentEskalation | Dies gibt die Zeitspanne zwischen der Erstellung von Live Agent-Daten und deren Entfernung aus der Datenbank an.            | [Live-Agent] (dashboard-live-agent.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| VoiceGatewayEvents | Dies gibt die Zeitspanne zwischen der Erstellung von Voice Gateway-Daten und deren Entfernung aus der Datenbank an.         | -                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Datenablauf aktivieren

Cognigy bewahrt Daten standardmäßig auf unbestimmte Zeit auf. Um dieses Verhalten zu ändern, muss ein Ablaufdatum eingerichtet werden.

Um die Funktion "Datenablauf" zu aktivieren, legen Sie Limits über die [management-ui](.. /ai/tools/management-ui.md#expiration-values-ttl-for-sensitive-data), wenn Sie über eine lokale Cognigy.AI-Installation verfügen. Andernfalls wenden Sie sich an [Technischer Support](.. /help/get-help.md#help-center) und geben Sie die gewünschten Grenzwerte in Ihrer Anfrage an.

Wenn Sie bereits Grenzwerte im management-ui-Dienst festgelegt haben, wird der Indikator Datenablauf automatisch in der Insights-Benutzeroberfläche angezeigt.

Die Funktion "Datenablauf" gilt nur für neue Daten, die von Cognigy nach der Aktivierung des Datenablaufs in der Verwaltungsoberfläche abgerufen wurden. Daten, die vor dem Festlegen des Ablaufwerts abgerufen wurden, bleiben erhalten.

Zum Beispiel:

> In management-ui legen Sie den 1-Minuten-Ablaufwert für Sitzungen auf 13:00 Uhr fest.
> 
> Sitzungen, die nach 13:00 Uhr erstellt wurden, werden aufgrund des in der management-ui festgelegten Ablaufdatums von 1 Minute automatisch nach 1 Minute beendet.
> 
> Sitzungen, die vor 13:00 Uhr erstellt wurden, bleiben unverändert.

## Datenablauf ändern

Sie können die Dauer des Datenablaufs über die [management-ui](.. /ai/tools/management-ui.md#expiration-values-ttl-for-sensitive-data), wenn Sie über eine lokale Cognigy.AI-Installation verfügen. Andernfalls wenden Sie sich an [Technischer Support](.. /help/get-help.md#help-center). 

Wenn Sie den Wert für den Datenablauf anpassen, gilt er nur für neue Daten, die von Cognigy erhalten wurden. Der Ablaufwert für zuvor abgerufene Daten bleibt unverändert.