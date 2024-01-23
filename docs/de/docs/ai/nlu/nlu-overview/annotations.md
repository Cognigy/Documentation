---
 title: "Anmerkungen" 
 slug: "Anmerkungen" 
 ausgeblendet: false 
---
# Anmerkungen

Der Cognigy.AI Intent-Builder verfügt über das Tool **Anmerkungen**, mit dem Satzwörter als Platzhalter zugewiesen werden können, um bestimmte Details aus Benutzeräußerungen zu erkennen. Jeder Platzhalter wird dem **Slot** zugewiesen, der von der NLU erkannt und gefüllt wird.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/d6edddb-annotations.PNG" width="100%" />
</figure>

Diese Funktion ist besonders nützlich, um Wiederholungen zu reduzieren, indem Lexikonbibliotheken in Beispielsatzstrukturen erkannt werden können.

## Beispiel-Sätze<div class="divider"></div>Anmerkungen können zu Beispielsätzen hinzugefügt werden, indem Sie das gewünschte Wort im Textfeld markieren und das **+**-Symbol am rechten Ende des Feldes auswählen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/da1ef79-annotateWord1.PNG" width="100%" />
</figure>

Für jede Anmerkung, die dem Satz hinzugefügt wird, wird eine neue Menüzeile erstellt. Das Anmerkungsmenü enthält Dropdown-Felder zur Auswahl des "Slot-Typs" und des "Schlüssels". Beide Werte sind für jede Annotation erforderlich.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/0c923ee-annotateWord3.PNG" width="100%" />
</figure>

Mehrere Anmerkungen unterschiedlichen Typs können zu einem einzigen Beispielsatz hinzugefügt werden, wobei jede Anmerkung in einer anderen Farbe unterstrichen wird. 

!!! Hinweis "Kopieren und Einfügen von kommentierten Sätzen"
    Es ist möglich, einen Satz mit Anmerkungen in eine andere Beispielsatzzeile zu kopieren, die alle zugewiesenen Anmerkungen mitnimmt. Obwohl ähnliche Sätze vermieden werden sollten, kann dies dazu beitragen, Zeit zu sparen, indem die Notwendigkeit reduziert wird, Wörter erneut zu kommentieren.

### Lexikon-Steckplatz
Fügen Sie **Lexicon Slot** Platzhalter in Beispielsätze ein, um der NLU beizubringen, Wörter mit ähnlicher Bedeutung zu erkennen. Kommentieren Sie z. B. den Produktnamen "Hemden" mit einem benutzerdefinierten "Produkt"-Lexikon-Tag, damit die NLU "Hosen", "Hüte" und "Jacken" erkennen kann, die im [Lexikon-Editor]({{config.site_url}}ai/resources/build/lexicons/) dasselbe Slot-Tag erhalten haben.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/bc5d3a5-lexiconSlot.PNG" width="100%" />
</figure>

**Synonyme**, die Sie in angehängten Lexika angeben, werden zur Notations- und Trainingszeit verwendet, um die Genauigkeit zu verbessern.

Beachten Sie, dass Slot-Tags und Synonyme für Absichten im selben Ablauf angehängt werden müssen. Dies bedeutet, dass beim Training mit angefügten Flows Intents in angefügten Flows die Lexika ihrer angehängten Flows verwenden, nicht die Lexika des übergeordneten Flows.

!!! Hinweis "Profi-Tipp: Verwenden Sie Synonyme, um seltene Wörter zu übersetzen"
    Geben Sie verständliche, gebräuchliche Synonyme für seltene Wörter an. Cognigy Natural Language Understanding wird in der Lage sein, seltene Wörter besser zu verstehen, wenn Sie sie in gängige Äußerungen übersetzen. So könnte z.B. ein bestimmter Markenname wie "PremiumPayID" mit dem Synonym "Kreditkarte" versehen werden, und Cognigy wird seine Verbindung zu Zahlungen verstehen, wo es sonst ein unbekanntes Wort wäre.

!!! Warnung "Tags nicht überstrapazieren"
    Für kleine Wortgruppen, die das Gleiche bedeuten, ist es effektiver, nur Synonyme zu verwenden. Tags eignen sich für eine große Anzahl von Wörtern, die in einem Konzept zusammengefasst sind, z. B. Vornamen oder Ländercodes.

!!! Hinweis "Exaktes Tag ersetzte Matching-Algorithmus"
    Beispiel- und Eingabeäußerungen, die genau übereinstimmen, mit Ausnahme von Schlüsselwörtern, die dasselbe Tag verwenden, erhalten automatisch eine Punktzahl von 0,95

Zur Veranschaulichung:

Die Eingabe "Ich möchte eine Pizza" stimmt direkt mit einem Beispielsatz "Ich möchte einen Burger" mit einer Punktzahl von 0,95 überein, wenn "Pizza" und "Burger" Schlüsselwörter in einem angehängten Lexikon sind, die dasselbe Tag haben.

Beachten Sie, dass der direkte Vergleich nur aus Effizienzgründen auf das **allererste Tag in einem Lexikon** beschränkt ist.

| Name des Steckplatzes |
| --------- |
| Anzahl |
| Datum |
| Alter |
| Temperatur |
| Dauer |
| Prozentsatz |
| E-Mail |
| Internetadresse |
| Geld |
| Distanz |

!!! Hinweis "Detaillierte Slot-Informationen"
    Weitere Informationen zu System-Slots, einschließlich Datenformaten und Beispielen, finden Sie unter [Slot-Mapping]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/).

### Beliebiger Spielautomat

Diese Slot-Option stellt ein offenes Textfeld für einen benutzerdefinierten Slot-Namen bereit, der angegeben werden kann. Der Name sollte mit jedem Slot übereinstimmen, der von der NLU erkannt und in den Eingabedaten als untergeordnetes Element von "input.slots" veröffentlicht wird.