---
 Titel: "Intent Trainer" 
 Schnecke: "Intent-Trainer" 
 ausgeblendet: false 
---
# Intent-Trainer

Mit dem **Intent Trainer** können Sie die gesammelten Benutzereingaben (Datensätze) analysieren und zu **[Intents]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/)** hinzufügen, um das Verständnis der Benutzereingabe Ihres **Agenten** zu verbessern.  Sie können entscheiden, welcher Benutzereingabedatensatz die Absicht des Agenten verbessert, und dann auf **Zu Absicht hinzufügen** klicken - Verwenden Sie dann die Schaltfläche **Trainieren** oben rechts über der Datensatzliste, um die neue Absicht in die **NLU-Absichtsliste** in Ihrem Flow zu übernehmen. Sie müssen "Modell erstellen" nicht ausführen, da die "Train"-Funktion des 'Intent Trainers' bereits die Bewertung durchgeführt hat - Sie erkennen dies an den angegebenen Bewertungsdaten und den Farbsymbolen in der Intent-Liste.  

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/31f53b3-Intent_Trainer_filter_options_800px.svg" width="100%" />
  <figcaption>Intent Trainer mit Filtermöglichkeiten</figcaption>
</figure>

## Intent-Datensätze exportieren und importieren

### Intent-Datensätze importieren

Gehen Sie folgendermaßen vor, um Absichtsdatensätze zu importieren:

1. Gehe zu **Tweak > Intent Trainer**.
2. Klicken Sie in der oberen rechten Ecke auf ! [vertikale-Auslassungspunkte] (.. /.. /.. /assets/icons/vertical-ellipsis.svg) **> Trainerdatensätze importieren**.
3. Wählen Sie eine Datei im Format "CTRAIN" von Ihrem Computer aus und klicken Sie auf **Öffnen**.

Sobald die Datei hochgeladen ist, erhalten Sie eine Systemerfolgsmeldung.

### Intent-Datensätze exportieren

Gehen Sie folgendermaßen vor, um Absichtsdatensätze zu exportieren:

1. Gehe zu **Tweak > Intent Trainer**.
2. Klicken Sie in der oberen rechten Ecke auf ! [vertikale-Auslassungspunkte] (.. /.. /.. /assets/icons/vertical-ellipsis.svg) **> Trainerdatensätze exportieren**.
3. Wählen Sie einen Datumsbereich aus, indem Sie auf das Datum klicken und das gewünschte Datum im Kalender auswählen.
4. Um überprüfte Absichten in die Datei aufzunehmen, aktivieren Sie **Überprüfte einschließen**.
5. Klicken Sie auf **Bestätigen**.
6. Klicken Sie im neuen Fenster auf **Trainer-Aufzeichnungen herunterladen**.

Die Datei wird im Format 'CTRAIN' heruntergeladen.

## Datensätze filtern

Sie können Datensätze mit den folgenden Filtern filtern:

| **Filter** | **Option** | **Beschreibung** |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Schnappschuss | Kein Schnappschuss <br> (Liste der verfügbaren Snapshots) | Sie können verfügbare Snapshots auswählen.                                   |
| Gebietsschema | Beliebiges Gebietsschema <br> (Liste der verfügbaren Gebietsschemata) | Sie können ein Gebietsschema auswählen, wenn es verfügbar ist.                               |
| Absicht | Beliebiges Gebietsschema <br> (Liste der verfügbaren Gebietsschemata) | Sie können verfügbare Intents auswählen.                                     |
| Status der Überprüfung | Jegliche Absicht <br> (Liste der verfügbaren Intents) | Listet alle Absichten in Abhängigkeit von der Filteroption auf.                         |
| Gefundene Absicht | Nicht bewertet <br> Geprüft <br> Ignoriert <br> Übersprungen | Listet alle Intents auf, die je nach ausgewähltem Filter gefunden wurden.                 |
| [Einen Slot gefunden] (.. /.. /nlu/slot-mapping/any-slots.md) | Nicht ausgewählt <br> Gefundene Absichten <br> Keine Absicht gefunden | Listet alle gefundenen Slots in Abhängigkeit von der ausgewählten Filteroption auf.            |
| Absichts-Bewertung | Nicht ausgewählt <br> **Schlecht**(0-0.3) <br> **Mittelmäßig** (0,3-0,7) <br> **Gut**(0.7-1) | Die jeweiligen Scoring-Bereiche sind durch **farbige** Punkte gekennzeichnet.       |
| Eingabe-Typen | positive Antwort <br> Negative Antwort <br> Gruß <br> Abschiedsgruß <br> Aussage <br> Befehl <br> Warum-Frage <br> Wie-Frage <br> Ja oder Nein Frage | Sie können einen oder mehrere Arten von Benutzernachrichten als Filteroption auswählen. |
| [Steckplatz] (.. /.. /nlu/nlu-overview/ml-intents.md#slots-and-lexicons) | Nichts <br> Lexikon-Slots <br> System-Steckplätze | Listet alle Benutzernachrichten in Abhängigkeit vom ausgewählten Slot-Typ auf.              |

Mit dem Dropdown-Menü **Filtervoreinstellung** können Sie Filteroptionen mit einem Mausklick voreinstellen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/a68ad17-Filter_Preset.svg" width="100%" />
  <figcaption>Verfügbare Filtervoreinstellungen</figcaption>
</figure>

## Zu Absicht hinzufügen
Wenn Sie einen Datensatz zu einem Intent hinzufügen, müssen Sie den Flow und den Ziel-Intent auswählen, den Sie vor dem Hinzufügen auch ändern können. Die Eingabe wird anschließend zu einem Intent-Beispielsatz.

## Überspringen
**Überspringen** verschiebt die Benutzereingabe in die **Übersprungen** Datensätze, aber sobald ein Benutzer dieselbe Eingabe erneut eingibt, wird sie auch wieder in den **Unbehandelten** Datensätzen des Intent-Trainers angezeigt.

## Ignorieren
**Ignorieren** verschiebt die Benutzereingabe in die **Ignorierten** Datensätze, und sobald ein Benutzer dieselbe Eingabe erneut eingibt, wird sie ebenfalls ignoriert.