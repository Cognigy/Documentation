---
 Titel: "Cognigy Insights" 
 Schnecke: "vor 4.30" 
 ausgeblendet: false 
---
# Cognigy Einblicke

## 4.29.0

**Veröffentlicht** 7. Juli 2022

## Fehlerbehebungen

- Es wurde ein Fehler behoben, bei dem Odata bereits stringifizierte Inhalte doppelt stringifizierte und falsches JSON erzeugte
- Es wurde ein Fehler behoben, bei dem der obere Teil der Filter-Seitenleiste blockiert wurde, nachdem die Benachrichtigung verschwunden war

## 4.28.0

**Veröffentlicht** 23. Juni 2022

### Verbesserungen

- Verbessert durch Hinzufügen der Spalte "Endpunkt" zum Transkript-Explorer

## 4.27.0

**Veröffentlicht** 7. Juni 2022

### Verbesserungen

- Verbessert, indem die OpenAPI-Dokumentation der Analytics-API korrigiert wurde, die unklar war und die Anfrage nicht zum Laufen bringen konnte. HandoverEskalationen auf Nummer geändert

### Fehlerbehebungen

- Es wurde ein Fehler behoben, bei dem sich die Gebietsschemaoptionen in globalen Filtern von Erkenntnissen zweimal wiederholten, da sie sowohl den Gebietsschemanamen als auch nluLanguage enthielten.
- Es wurde ein Fehler behoben, bei dem in Analysesitzungen immer das hartcodierte neue Date() anstelle des eingehenden Zeitstempels verwendet wurde.

## 4.26.0

**Veröffentlicht** 24. Mai 2022

### Verbesserungen

- Verbessert durch Hinzufügen notwendiger und fehlender Indizes für Analyse- und Sitzungssammlungen, sodass die anfängliche Last quantitativer Abfragen abgedeckt wird. Reduziert die Anzahl totalDocsExamine auf 0, indem nur die indizierten Schlüssel gescannt werden
- Verbessert durch Hinzufügen einer eindeutigen Farbe zu den Agentennachrichten

### Fehlerbehebungen

- Es wurde ein Fehler behoben, bei dem Konversationsdatensätze (Eingabe) die Analysedatenbank aufgrund ungültiger Feldnamen, die mit $ beginnen, übersehen haben.
- Ein Visualisierungsproblem von "Switched Flow"-Nachrichten im Transkript-Explorer wurde behoben

## 4.25.0

**Veröffentlicht** 10. Mai 2022

### Fehlerbehebungen

- Es wurde ein Fehler behoben, bei dem der Nachrichten-Explorer 2 Bildlaufleisten hatte, was zu einem ungültigen Infinite-Loader-Verhalten führte

## 4.24.0

**Veröffentlicht** 2. Mai 2022

### Verbesserungen

- Verbessert durch Hinzufügen eines Endpunkts zum Löschen von Analysedatensätzen für eine Organisation
- Verbessert durch Behebung von Problemen mit der Barrierefreiheit im Schritt-Explorer
- Verbessert durch Verkürzung der Reaktionszeit der Dashboard-Benutzeroberfläche durch Ersetzen von SVG-basierten Diagrammen durch Canvas-basierte Diagramme
- Verbessert durch Hinzufügen von Paginierung im Schritt-Explorer zur Unterstützung komplexer Schrittdiagramme

### Fehlerbehebungen

- Es wurde ein Fehler behoben, bei dem Zahlenberichte mit dem Typ "Betrag" nicht ganzzahlige Werte anzeigten
- Es wurde ein Fehler behoben, bei dem eine Transkriptliste nach einem Filter-/Agentenwechsel ein Ladeproblem hatte

## 4.23.0

**Veröffentlicht** 12. April 2022

Diese Version enthält keine Fehlerbehebungen oder Verbesserungen.

## 4.22.0

**Veröffentlicht** 28. März 2022

### Verbesserungen

- Verbessert durch die Anzeige von Flow-Schaltern im Expertenmodus des Transkript-Explorers

### Fehlerbehebungen

- Es wurde ein Fehler behoben, bei dem Daten im Step Explorer nicht geladen wurden
- Es wurde ein Fehler behoben, bei dem der Schritt-Explorer fälschlicherweise keine neu getrackten Schritte anzeigte, wenn bereits eine zwischengespeicherte Version des heutigen Berichts vorhanden war
- Es wurde ein Fehler behoben, bei dem Kontaktprofile im Transkript-Explorer nicht korrekt angezeigt wurden