---
 title: "Text Cleaner" 
 Slug: "Text-Bereinigung" 
 Ausgeblendet: Wahr 
---

# Text-Bereinigung

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.58-blue.svg)] (.. /.. /release-notes/4.58.md)

Cognigy.AI bietet verschiedene Funktionen zur Unterstützung bei der Vorverarbeitung von Benutzereingaben, wie z. B. Textnachrichten oder transkribierte Sprachnachrichten. Diese Funktionen erleichtern die Verarbeitung von Daten in Cognigy.AI.

Ein Beispiel wäre, wenn ein Benutzer eine Teilenummer als "alpha tango hotel double seven three nine minus L für London und C für Kanada" buchstabiert, was zu "ath 7739 - lc" führt.

Diese Funktionen unterstützen die englischen ('en') und deutschen ('de') Gebietsschemas.

Die Funktionen sind in den folgenden Entitäten verfügbar:

- [Textknoten bereinigen](.. /flow-nodes/nlu/clean-text.md)
- [Frage-Knoten](.. /flow-nodes/message/question.md#answer-pre-processing)
- [Code-Knoten](.. /flow-nodes/code/actions.md#text-cleaner)
- [Transformatoren](.. /endpoints/transformers/transformers.md#text-cleaner-class)

## Funktionen

| Name der Funktion | Beschreibung |
|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cleanDisallowedSymbols | Entfernt alle Symbole, die nicht explizit zulässig sind. Alle Buchstaben und Zahlen sind standardmäßig erlaubt, und es können zusätzliche zulässige Symbole festgelegt werden.                                                   |
| resolveSpelledOutNumbers | Ersetzt alle Zahlenwörter durch ihre numerische Darstellung. Beispiel: "fünfunddreihundertneunzehn" > "5 319".                                                                          |
| resolvePhoneticAlphabet | Erkennt und ersetzt alle Wörter, die Teil des phonetischen Alphabets sind. Zum Beispiel "alpha tango lima" > "a t l".                                                                                 |
| replaceSpecialWords _(Veraltet)_ | Ersetzt spezifisch festgelegte Wörter durch ihre Ersetzungen. Beispiel: "lufthansa" > "lh". <br><br> Diese Funktion ist seit v4.58 veraltet. Verwenden Sie stattdessen die Funktion replaceSpecialPhrases. |
| replaceSpecialPhrases | Ersetzt bestimmte Wörter oder Ausdrücke durch Ersetzungen. Zum Beispiel wird "Conversational AI" in "CAI", "New York" in "NY" und "lufthansa" in "lh" geändert.                                          |                                               |
| resolveSpelledOutAlphabet | Löst Ausdrücke wie "a für anton b wie in Bertram" in "a b" auf.                                                                                                                                     |
| resolvePhoneticCounters | Löst Zeichenfolgen wie "3 mal 2" in "222" oder "double 4" in "44" auf. Weitere Informationen zu speziellen Regeln finden Sie im Abschnitt [Regeln für resolvePhoneticCounters](#rules-for-resolvephoneticcounters).          |
| contractSingleCharacters | Verbindet alle einzelnen Zeichen, die für sich allein stehen, zu einer vollständigen Zeichenfolge. Zum Beispiel "Mein Name ist c o g n i g y" > "Mein Name ist kognig".                                                                    |
| contractNumberGroups | Verbindet alle Zahlen, die nebeneinander stehen. Zum Beispiel: "Seine Nummer ist 333 43 22 44" > "Seine Nummer ist 333432244".                                                                             |
| trimResult | Kürzt den Anfang und das Ende der Zeichenfolge und ersetzt alle doppelten (oder mehr) Leerzeichen durch einfache Leerzeichen.                                                                                                |

### Regeln für resolvePhoneticCounters

Diese Funktion dient dazu, Ausdrücke wie "3 mal 2" in ihre numerische Darstellung umzuwandeln, z. B. "3 mal 2" in "222" oder "double 4" in "44". Die Funktion verarbeitet Sätze, die sowohl einen Multiplikator (z. B. "3 mal" oder "doppelt") als auch einen Multiplikator (z. B. "2" oder "4") enthalten. Der Multiplikand kann entweder eine Zahl oder ein Zeichen sein.

Einige Beispiele können mehrdeutig sein. Betrachten Sie zum Beispiel die Phrase "double ap 3 4", die entweder als "aap34" oder "apap34" interpretiert werden könnte.

Um diese Mehrdeutigkeit zu vermeiden, hat Cognigy die folgenden Regeln für Multiplikantentypen definiert:

| Multiplikant-Typ | Regel | Beispiel |
|--------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| **Anzahl** |                                                                                                                                                                                       | 2 mal **3**, 2 mal **16** |
| Multiplicand ist eine Zahl kleiner als 13 | Der Multiplikator wiederholt sich selbst.                                                                                                                                                  | "2 mal 3" gibt "33" zurück <br> "2 mal 11" gibt "1111" zurück |
| Multiplikanz ist eine Zahl größer oder gleich 13 | Es wird nur die erste Ziffer wiederholt. <br><br> Die erste Ziffer hat aufgrund der häufigeren Verwendung von Ausdrücken wie "3 mal 4" oder "3 mal 12" im Vergleich zu "3 mal 25" Vorrang.      | "2 mal 16" gibt "116" zurück |
| **Charakter** |                                                                                                                                                                                       | 2 mal **Alpha**, 2 mal **OX** |
| Multiplicand ist ein phonetisches Zeichen | Es wird aufgelöst und das Zeichen wird wiederholt.                                                                                                                                        | "2 mal Alpha" gibt "aa" zurück |
| Multiplicand hat mehr als ein Zeichen und ist kein phonetisches Zeichen | Es wird nur das erste Zeichen wiederholt. <br><br> Cognigy geht davon aus, dass das Speech-to-Text-System (STT) die Benutzereingabe falsch transkribiert hat und dass der Benutzer beabsichtigte, eine andere zu sagen. | "2 mal ox" gibt "oox" zurück <br> (Wir gehen davon aus, dass der Benutzer beabsichtigt hat, "2 mal o, x" zu sagen) |