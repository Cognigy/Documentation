---
 Titel: "Protokolle" 
 Schnecke: "Protokolle" 
 ausgeblendet: false 
---
# Protokolle

Die **Protokolle**-Funktion ermöglicht es Plattformbenutzern, jede Eingabe- und Ausgabenachricht zu verfolgen, die mit einem **Agent** auftritt. Die Protokolle werden am häufigsten zum Debuggen von Workflows verwendet, indem beobachtet wird, ob und wo Fehler auftreten.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/8ef7347-logs.png" width="100%" />
</figure>

Die Protokolle können in Echtzeit verfolgt werden, da sie automatisch angehängt werden, wenn neue Protokollausgaben ausgegeben werden. Der Protokollverlauf kann auch geladen werden, um Ausgaben zu überprüfen, die in der Vergangenheit aufgetreten sind.

### Log-Einträge

Jeder Log-Eintrag besteht aus einem 'Zeitstempel', dem 'Log-Typ', der Log-'Nachricht' und zusätzlichen 'Metadaten'.

##Log Filtern<div class="divider"></div>### Anzeige-Einstellungen
Die Konfiguration der Protokollanzeige ist möglich, indem die folgenden Funktionen aktiviert oder deaktiviert werden:

| Name der Einstellung | Funktion |
|--------------------------|------------------------------------------------------------------------|
| Live-Protokollierung | Aktiviert/deaktiviert die sofortige Aktualisierung des Protokolls, sobald Ereignisse eintreten |
| Zeitstempel anzeigen | Aktiviert/deaktiviert den Zeitstempel jedes Ereignisses |
| Zusätzliche Metadaten anzeigen | Aktiviert/deaktiviert Daten, die an ein- und ausgehende Nachrichten angehängt sind |
| Infos | Aktivieren/Deaktivieren von Infotyp-Ereignissen |
| Fehler | Aktivieren/Deaktivieren von Fehlertypereignissen |
| Debuggen | Aktivieren/Deaktivieren von Debugging-Typereignissen |

### Suche

Es ist möglich, nach bestimmten Benutzer-IDs und **Flow**-Namen zu suchen, indem Sie diese Werte in die entsprechenden Suchfelder oben rechts auf der Protokollseite eingeben. Das Protokoll wird sofort nach jedem Wert gefiltert, der diesen Feldern hinzugefügt wird.

!!! Warnung "Kopieren von Log-Einträgen"
    Aus Gründen der Browserleistung wird die Protokollliste virtualisiert, was bedeutet, dass nur die Protokolleinträge vorhanden sind, die Sie derzeit in Ihrem Browser sehen. Dadurch wird verhindert, dass mehr Zeilen gescrollt und kopiert werden, als sich derzeit in Ihrer Ansicht befinden.