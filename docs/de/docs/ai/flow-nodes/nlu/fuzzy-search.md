---
 Titel: "Fuzzy-Suche" 
 Slug: "Fuzzy-Suche" 
 ausgeblendet: false 
---
# Fuzzy-Suche

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/nlu/fuzzy-search.png" width="80%" />
</figure>

## Beschreibung
Der Fuzzy-Suchknoten ermöglicht es einem Flow, eine Liste (String-Array) von Quelldaten zu durchsuchen, indem er ein Suchmuster bereitstellt. Es gibt die bestmögliche(n) Übereinstimmung(en) zurück, basierend auf einer Reihe von Parametern.

Die Punktzahl, die jeder Übereinstimmung zugewiesen wird, reicht von 0 (die nächste Übereinstimmung - die beste) bis 1 (keine Übereinstimmung - die schwächste).

Das Ergebnis wird entweder im Cognigy-Kontext ('context. STORE') oder input-Objekt ('input. STORE') unter Verwendung des in den Einstellungen des Knotens angegebenen Speichernamens.

Im Falle eines Fehlers wird dieser entweder im Cognigy-Kontext ('context. STORE.error') oder input-Objekt ('input. STORE.error'). 

## Parameter

| Parameter | Typ | Beschreibung |
|--------------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Suchmuster | Zeichenfolge | Das Muster, nach dem gesucht werden soll |
| Quelldaten | JSON | Ein Array von Zeichenfolgen oder ein Objekt, das durchsucht werden soll |
| Groß-/Kleinschreibung wird beachtet | Boolescher Wert | Gibt an, ob bei Vergleichen zwischen Groß- und Kleinschreibung unterschieden werden soll |
| Partitur einbeziehen | Boolescher Wert | Gibt an, ob die Bewertung in das Resultset einbezogen werden soll. Ein Wert von 1,0 zeigt eine perfekte Übereinstimmung an, während ein Wert von 0,0 eine vollständige Nichtübereinstimmung anzeigt |
| Übereinstimmungen einschließen | Boolescher Wert | Gibt an, ob die Übereinstimmungen in das Resultset einbezogen werden sollen. Wenn diese Option aktiviert ist, enthält jeder Datensatz in der Ergebnismenge die Indizes der übereinstimmenden Zeichen |
| Minimale Anzahl von Zeichen | Anzahl | Nur die Übereinstimmungen, deren Länge diesen Wert überschreitet, werden zurückgegeben |
| Soll sortieren | Boolescher Wert | Gibt an, ob die Ergebnisliste nach Punktzahl sortiert werden soll |
| Alle Übereinstimmungen suchen | Boolescher Wert | Wenn diese Option aktiviert ist, wird die Matching-Funktion bis zum Ende eines Suchmusters fortgesetzt, auch wenn bereits ein perfekter Treffer in der Zeichenfolge |
| Lage | Anzahl | Bestimmt ungefähr, wo im Text das Muster zu finden ist |
| Schwellenwert | Anzahl | An welchem Punkt gibt der Match-Algorithmus auf? Ein Schwellenwert von 1,0 erfordert eine perfekte Übereinstimmung (sowohl der Buchstaben als auch des Ortes), ein Schwellenwert von 0,0 würde mit allem übereinstimmen |
| Distanz | Anzahl | Legt fest, wie no die Übereinstimmung an der Fuzzy-Position sein muss (angegeben durch Location) |
| Standort ignorieren | Boolescher Wert | Wenn diese Option aktiviert ist, ignoriert die Suche "Ort" und "Entfernung", sodass es keine Rolle spielt, an welcher Stelle in der Zeichenfolge das Muster |