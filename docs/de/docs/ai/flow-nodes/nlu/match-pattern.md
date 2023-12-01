---
 Titel: "Übereinstimmungsmuster" 
 Schnecke: "Match-Muster" 
 ausgeblendet: false 
---
# Muster abgleichen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/nlu/match-pattern.png" width="80%" />
</figure>

## Beschreibung

Der Übereinstimmungsmuster-Knoten ermöglicht es einem Benutzer, Muster im Text zu finden und sie im [Eingabeobjekt](.. /.. /tools/interaction-panel/input.md).

Sie können Muster definieren, nach denen im Eingabetext oder im angegebenen Alternativtext gesucht wird. Wenn ein Muster gefunden wird, wird eine matchedPatterns-Gruppe im [Eingabeobjekt](.. /.. /tools/interaction-panel/input.md).

## Muster

Muster können beliebiger Text sein und Verweise auf Slots enthalten, indem das "@"-Symbol verwendet wird. 

Beispiel: '@color @product'

Ein Text wie "Ich brauche ein grünes Hemd" würde die zusammengesetzte Slot-Gruppe finden und "Farbe = Grün" und "Produkt = Hemd" zuweisen.

### Schlagwörter

Slots können in einem Muster markiert werden, um später leichter identifiziert werden zu können.

Beispiel: "vom @city>Start- zum @city>Zielort".

Ein Text wie "Ich möchte von Düsseldorf nach Tokio fahren" würde eine übereinstimmende Mustergruppe mit Ursprung und Ziel finden.

## Parameter

| Parameter | Typ | Beschreibung |
|-------------------------|-------------|--------------------------------------------------------------------------------------|
| Muster | TextArray | Die Muster, die auf den Text angewendet werden sollen.                                              |
| Name der Mustergruppe | CognigyText | Der Name der Mustervergleichsgruppe.                                              |
| Neue Slots erstellen | Boolescher Wert | Gibt an, ob neue Slots aus Tags erstellt werden sollen oder nicht.                      |
| Vorhandene Slots markieren | Boolescher Wert | Gibt an, ob vorhandene Slots markiert werden sollen oder nicht.                            |
| Detaillierte zusammengesetzte Slots | Boolescher Wert | Gibt an, ob detaillierte Ergebnisse für die übereinstimmenden Muster gespeichert werden sollen oder nicht. |
| Alternative Eingabe | CognigyText | Der Eingabetext, der anstelle des aktuellen Eingabetextes verwendet werden soll.                         |

## Beispiel

Text: "Ich möchte am 1. Oktober 2021 mit 3 oder 4 Personen von bErlin nach NEW York fliegen, wenn es 30 Grad hat und ich zu 100% 22 Jahre alt bin"

Muster: 'vom @city>Ursprung zum @city>Ziel mit @NUMBER>ppl1 oder @NUMBER>ppl2 Personen @DATE>date, wenn es @TEMPERATURE>Grad Celsius ist und ich @AGE>Userage Jahre alt bin @PERCENTAGE>perc"

Ergebnis:

'''JSON
"matchedPatterns": {
        "Gruppe": [
            {
                "matchedPhrase": "von bErlin nach NEW York mit 3 oder 4 Personen am 1. Oktober 2021, wenn es 30 Grad hat und ich 22 Jahre alt bin, 100%",
                "origin": "Berlin",
                "destination": "New York",
                "ppl1": 3,
                "ppl2": 4,
                "Datum": {
                    "Tag": 1,
                    "Monat": 10,
                    "Jahr": 2021,
                    "Stunde": 12,
                    "Minute": 0,
                    "Sekunde": 0,
                    "Millisekunde": 0,
                    "Wochentag": 1,
                    "dayOfWeek": "Montag",
                    "ISODate": "2020-06-15T12:00:00"
                },
                "Celsius": 30,
                "Benutzeralter": 22,
                "Schl": 100
            }
        ]
    }
'''