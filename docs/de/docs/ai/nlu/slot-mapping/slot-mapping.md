---
 Titel: "Slot-Mapping" 
 Slug: "Slot-Zuordnung" 
 ausgeblendet: false 
---
# Slot-Zuordnung

## Beschreibung<div class="divider"></div>Slots sind bestimmte Datentypen oder benutzerdefinierte Keyphrases, die von der Cognigy NLU erkannt und im [Input Object]({{config.site_url}}ai/tools/interaction-panel/input/) unter der Eigenschaft 'input.slots' abgelegt werden.

Es gibt zwei Arten von Slots:

- Systemdefinierte Steckplätze
- Benutzerdefinierte Slots (Lexika / Schlüsselwörter) - siehe [Lexicons]({{config.site_url}}ai/resources/build/lexicons/)

!!! Tipp "Tokenisieren Sie Ihre Slots"
    Erstellen Sie [Token]({{config.site_url}}ai/resources/manage/tokens/) für Ihre Slots, damit Sie den Prozess des Hinzufügens zu Konversationslogik und Ausgabefeldern beschleunigen können.

## Zugriff auf Slots über CognigyScript<div class="divider"></div>Auf System- und benutzerdefinierte Slots kann ganz einfach über CognigyScript zugegriffen werden.

'{{ " {{input.slots}}" }}' enthält alle gefundenen Slots, Tags und Keyphrases.

| CognigyScript | Beschreibung |
|------------------------------------|---------------------------------------------------|
| '{{ " {{input.slots.tagName}}" }}' | Gibt das Keyphrase-Array für das Tag 'tagName' zurück |

## Systemdefinierte Steckplätze<div class="divider"></div>Cognigy.AI erkennt automatisch die folgenden Slots. Alle systemdefinierten Slot-Tags werden groß geschrieben.<table>
    <tr>
        <th>Slot-Tag-Beispiel</th><th></th><th>Slot-JSON</th>
    </tr>
    <tr>
        <td>DATUM</td><td>Morgen, 1. Nov. August um 17 Uhr</td><td>'''json
"DATUM": [
        {
        "start": {
            "Tag": 2,
            "Monat": 6,
            Jahr: 2018,
            "Stunde": 12,
            "Minute": 0,
            "Sekunde": 0,
            "Millisekunde": 0,
            "text": "Morgen",
            "Wochentag": 6,
            "dayOfWeek": "Samstag",
            "ISODate": "2018-06-02T12:00:00Z"
        },
        "end": null
        }
    ]
'''        </td>
    </tr>
    <tr>
        <td></td><td>Nächste Woche</td><td>'''json
"DATUM": [
        {
        "start": {
          "Jahr": 2021,
          "Monat": 12,
          "Tag": 13,
          "Stunde": 0,
          "Minute": 0,
          "Sekunde": 0,
          "Millisekunden": 0,
          "Wochentag": 1,
          "dayOfWeek": "Montag",
          "ISODate": "2021-12-13T00:00:00+01:00",
          "plain": "13. Dezember 2021",
          "grain": "Woche"
        },
        "end": null,
        "text": "Nächste Woche"
        }
    ]
'''        </td>
    </tr>
    <tr>
        <td>ZAHL</td><td>einhundert, 143</td><td>'''json
"NUMMER": [
      100,
      143
    ]
'''        </td>
    </tr>
    <tr>
        <td>DAUER</td><td>10 Minuten 20 Sekunden</td><td>'''json
"DAUER": {
      "Stunde": null,
      "Minute": 10,
      "Sekunde": 20
    }
'''        </td>
    </tr>
    <tr>
        <td>TEMPERATUR</td><td>50 Grad</td><td>'''json
"TEMPERATUR": [
      50
    ]
'''        </td>
    </tr>
    <tr>
        <td>ÄNDERN</td><td>32 Jahre alt</td><td>'''json
"ALTER": [
      32
    ]
'''        </td>
    </tr>
    <tr>
        <td>E-MAIL</td><td>info@cognigy.com</td><td>'''json
"E-MAIL": [
      "info@cognigy.com"
    ]
'''        </td>
    </tr>
    <tr>
        <td>PROZENTSATZ</td><td>5 Prozent </td><td>'''json
"PROZENTSATZ": [
      5
    ]
'''        </td>
    </tr>
    <tr>
        <td>Internetadresse</td><td><a href="https://cognigy.com">https://cognigy.com</a></td><td>'''json
"URL": [
      "https://cognigy.com"
    ]
'''        </td>
    </tr>
    <tr>
        <td>KASTRIEREN</td><td>500 Dollar</td><td>'''json
"GELD": [
        {
        "Wert": 500,
        "unit": "$"
        }
    ]
'''        </td>
    </tr>
    <tr>
        <td>ABSTAND</td><td>12 Kilometer</td><td>'''json
"ENTFERNUNG": [
        {
        "Wert": 12,
        "unit": "Kilometer"
        }
    ]
'''        </td>
    </tr>
</table>## Datumsformate
---

!!! Tipp "Zeitzone & Datumsfenster"
    Die Erkennung von Datumsangaben hängt von der Zeitzone ab, die für den [Agent](.. /.. /resources/manage/settings.md#timezone) oder [Aktionen](.. /.. /flow-nodes/code/actions.md#actionssettimezoneoffset--apisettimezoneoffset).

Die folgenden Tabellen bieten eine Übersicht über die unterstützten Eingabemuster und -formate. 

| Sprachen | Beispiele für unterstützte Eingabemuster                                                                                                                                                                                                                                                                                                                                                                            |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Englisch | Jetzt, heute, morgen, gestern, letzten Freitag, letzte Nacht<br/>17. August 2013 - 19. August 2013 August 2013<br/>Diesen Freitag von 13:00 - 16.00 Uhr<br/>vor 5 Tagen<br/>In 2 Wochen<br/>Sat Aug 17 2013 18:40:39 GMT+0900 (JST)<br/>2014-11-30T08:15:30-05:30<br/>Übermorgen<br/>Tage vorgestern<br/>Nächsten Dienstag |
| English | Jetzt, Heute, Morgen, Gestern, Vorgestern<br/>Letzte Nacht, Heute Nacht, Diese Nacht, Morgen Vormittags, Gestern Abend<br/>Nach einem Tag, In einer Woche<br/>15/01/2021, 15.01.2021, 15. Jan 2021, Freitag den 15. Januar 2021 Januar 2021 Januar 2021<br/>17.08.2013 - 19.08.2013, 17.08.2013 bis 19.08.2013<br/>Kommenden Montag |
| Niederländisch | Nu, Deze Nacht, Deze Vannacht, Gisteren, Morgen, Gisteravond, Eergisteren, Overmorgen<br/>Morgen Middag, Deze Ochtend, Gisteren Voormiddag, Deze Namiddag, Morgen Avond, Overmorgen Nacht<br/>Binnen Een Dag, Na een halve Maand<br/>15/01/2021, 15.01.2021, 15. Jan 2021, Vrijdag de 15de januari 2021<br/>17.08.2013 - 19.08.2013, 17.08.2013 bis 19.08.2013<br/>Laatste/vorige/volgende/komende Woensdag |
| Japanisch | 今日, 当日, 昨日, 明日, 今夜, 今夕, 今晩, 今朝<br/>２０１６年２月１７日です<br/>Sa Aug 17 2013<br/>30.01.2018 |
| Andere Sprachen | Als Beispiel für Französisch werden die folgenden Muster unterstützt. Einige fortgeschrittene Muster, die fortgeschrittenere Gelegenheitsausdrücke wie "vorgestern" oder "nächsten Freitag" enthalten, werden nicht unterstützt:<br/><br/>15.04.2023 12:00<br/>15. August 2015<br/>15 aout 2015 a 12 oktober 2016<br/>aujourd'hui, demain, hier<br/>hier soir, demain après-midi |

Das DATE-Slot-Parsing hängt von der im Flow eingestellten Sprache ab. Hier finden Sie eine Übersicht über [Datumsformate nach Land](https://en.wikipedia.org/wiki/Date_format_by_country), die wir unterstützen möchten. In der folgenden Tabelle sind die sprachspezifischen Verhaltensweisen bei Datumsangaben im Schrägstrichformat aufgeführt:

| Sprachen | Sortierung des Slash-Datumsformats (01.01.2019) |
|----------------------------------------------|----------------------------------------------------------------------------------------------------|
| Standard (Englisch, UK, Deutsch, Universal usw.) | tt/mm/JJJJ |
| Englisch US, Japanisch, Chinesisch | MM/TT/JJJJ<br/><br/>Hinweis: Wenn mm/dd/YYYY ein ungültiges Datum ergibt, fällt der Parser auf dd/mm/YYYY zurück. |

!!! Warnung "Ungültige DATEN"
    Cognigy.AI prüft die Gültigkeit der angegebenen Daten, einschließlich Schaltjahre usw. Ungültige Datumsangaben werden in den erkannten Slots nicht angezeigt.

### Zuordnung von Zukunfts- und Vergangenheitsdaten

Die Datumsfenstererkennung verwendet das aktuelle Jahr für die Eingabe von Datumsangaben im aktuellen Monat und für ein Datum, das noch nicht innerhalb des aktuellen Jahres aufgetreten ist.

Bei der Datumsschlitzerkennung wird das nächste kommende Jahr verwendet, wenn das Datum der Eingabe nicht im aktuellen Monat liegt, bereits im aktuellen Jahr aufgetreten ist und in der Eingabe kein Jahr angegeben ist.

Um dem DATE-Slot ein vergangenes Datum zuzuweisen, wenn es aus einem vorherigen Monat (nicht aus dem aktuellen Monat) stammt, muss in der Eingabe ein Jahr angegeben werden.

#### Beispiele 

Wenn es sich bei der Eingabe um ein Datum aus dem aktuellen Monat handelt:

- Das heutige Datum ist der 26. Juli 2023
- Die Eingabe ist "Juli 21"
- DATE-Slot-Ergebnis: "Jahr": 2023, "Monat": 7, "Tag": 21'

Wenn es sich bei der Eingabe nicht um ein Datum des aktuellen Monats, sondern um einen vorherigen Monat handelt und kein Jahr angegeben wird:

- Das heutige Datum ist der 26. Juli 2023
- Die Eingabe ist "30. März"
- DATE-Slot-Ergebnis: '"Jahr": 2024, "Monat": 3, "Tag": 30'

Wenn es sich bei der Eingabe nicht um ein Datum aus dem aktuellen Monat, sondern um einen vorherigen Monat handelt und ein Jahr angegeben wird:

- Das heutige Datum ist der 26. Juli 2023
- Die Eingabe ist "30. März 2021"
- DATE-Slot-Ergebnis: '"Jahr": 2021, "Monat": 3, "Tag": 30'

## Benutzerdefinierte Slots (Lexika)<div class="divider"></div>Benutzerdefinierte Slots in Cognigy werden Keyphrases genannt, die im [Lexicons Editor]({{config.site_url}}ai/resources/build/lexicons/) erstellt und gepflegt werden.

In Cognigy AI sind Lexika Listen von Schlüsselwörtern mit Tags. Ein Lexikon kann eine beliebige Anzahl von Schlüsselwörtern haben, die wiederum eine beliebige Anzahl von Tags und Synonymen haben können.

Wenn einem Flow ein Lexikon zugewiesen ist, analysiert der Flow die Benutzereingabe für alle Keyphrases. Wenn Schlüsselwörter mit demselben Tag erkannt werden, werden sie den Slots zugewiesen.

### Zugriff auf Keyphrases

Erkannte Keyphrases werden in der Input-Eigenschaft 'input.slots.lexiconTagName.keyphrase' angezeigt (z. B. 'input.slots.product.keyphrase.shirt').

'''json
{
    "slots": {
        "tag1": [
            {
                "keyphrase": "Schlüsselwort gefunden",
                "lower": "Schlüsselphrase in Kleinbuchstaben gefunden",
                "synonym": "Synonym gefunden, sonst Schlüsselphrase",
                "count": "wie oft die Schlüsselphrase gefunden wurde"
            }
        ]
    }
}
'''

Schlüsselwörter und Synonyme werden in der Reihenfolge ihrer Wortanzahl erkannt, wobei die längste Schlüsselphrase zuerst erkannt wird. Wenn "Kuchen" und "Käsekuchen" definiert sind und der Text "Ich liebe Käsekuchen" lautet, wird nur "Käsekuchen" gefunden.

Wenn ein Synonym gefunden wird, ist die zurückgegebene Schlüsselphrase die Schlüsselphrase, der das Synonym zugeordnet ist, während das Synonym selbst in einer speziellen "Synonym"-Eigenschaft des Ergebnisses aufgezeichnet wird.

!!! Hinweis "Beispiel, wie Slots gefüllt werden"
    Wenn der Benutzer *Ich liebe Pizzakuchen* sagt, sieht die Input-Eigenschaft "slots" wie folgt aus:

'''json
{
    "Essen": [
        {
            "keyphrase": "Pizza",
            "Anzahl": 1,
            "Synonym": "Pizza Pie"
        }
    ]
}
'''

!!! Warnung "Anhängen von Lexika an Ihre Flows"
    Lexika müssen an NLU-Trainingsdaten angehängt werden, damit das NLU-Modell die erstellten Schlüsselwörter und Synonyme erkennt. Weitere Informationen finden Sie auf der Seite [Angehängte Lexika]({{config.site_url}}ai/nlu/attachments/attached-lexicons/).