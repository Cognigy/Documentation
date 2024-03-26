---
 Titel: "Machine Learning Intents" 
 Slug: "ML-Absichten" 
 ausgeblendet: false 
---
# Absichten für maschinelles Lernen

Absichten sind Sammlungen identifizierter Benutzerabsichten (z. B. was der Benutzer möchte).

Die Benutzereingabe wird anhand aller Beispielsätze bewertet, und Cognigy.AI identifizieren die Absicht mit der höchsten Punktzahl als Absicht für diese Eingabe, wenn sie über den konfigurierten [Schwellenwerten]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/#thresholds) liegt.

## Erstellen des NLU-Modells<div class="divider"></div>Das Gebäudemenü ist unter dem Reiter "NLU" im Flow-Editor verfügbar. Jeder Flow, für den die Erstellung seines NLU-Modells erforderlich ist, zeigt einen roten Indikator neben seinem Namen in der Liste der Flows und auf der Registerkarte NLU im Flow-Editor an. 

Flows, die nur als angehängter Flow verarbeitet werden, müssen nicht einzeln erstellt werden (das Ausrufezeichen kann ignoriert werden), da die Erstellung des angehängten Flows die Intents der angehängten Flows einzieht und der Build dort durchgeführt wird. Flows, die separat mit Absichtszuordnung verwendet werden, müssen separat erstellt werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/79986da-buildmodel.JPG" width="100%" />
</figure>

*Cognigy NLU* erfordert die Voraberstellung des Intent-Mapping-Modells.

Um Ihr Modell zu erstellen, gehen Sie in Ihrem Flow-Editor auf die Registerkarte Intents und klicken Sie auf die blaue Schaltfläche *Modell erstellen*.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/a5917c2-intentMenu.PNG" width="100%" />
</figure>

Eine neue [Aufgabe]({{config.site_url}}ai/resources/agents/tasks/) wird gestartet, und das sich drehende Aufgabensymbol zeigt an, dass die Modellerstellung ausgeführt wird. Während neue Modelle erstellt werden, greift die neueste Version des Flows auf das zuletzt trainierte Modell zurück.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/c33ef5a-trainedSuccess.PNG" width="100%" />
</figure>

Erfolgreiche Builds werden mit einer grünen Erfolgsbenachrichtigung angezeigt. Es ist möglich, dass Builds fehlschlagen, dies wird durch eine rote Fehlerbenachrichtigung angezeigt. Erweitern Sie die Fehlermeldung, um mehr zu erfahren, z. B. müssen Sie möglicherweise weitere Beispielsatzdaten hinzufügen, um den Build erfolgreich abzuschließen.

Jedes Mal, wenn Anpassungen an den Modelldaten vorgenommen werden, muss das NLU-Modell neu erstellt werden, um die Änderungen zu übernehmen. Die folgenden Aktionen lösen auch die Notwendigkeit aus, das Modell zu erstellen (das rote Ausrufezeichen neben dem Symbol **Modell erstellen** wird angezeigt):

* Erstellen, Bearbeiten und Löschen eines Intent
* Anhängen eines Lexikons
* Bearbeiten eines Lexikons
* Anbringen und Lösen eines Flows

### Schnellbau

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.1.0-blue.svg)] ({{config.site_url}})

Wenn Sie auf den Pfeil auf der Schaltfläche **Modell erstellen** klicken, kann eine Option für die **Schnellerstellung** ausgewählt werden. Mit dieser Option wird ein Machine-Learning-Modell für Ihre Absichten erstellt, das keine Spezifikationen für [States]({{config.site_url}}ai/tools/interaction-panel/state/) und Absichtsbedingungen enthält und daher bei der Erstellung Ihres Modells erheblich schneller ist.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/0a0edf3-quick.JPG" width="100%" />
</figure>

Wenn Sie [States]({{config.site_url}}ai/tools/interaction-panel/state/) oder Absichtsbedingungen nicht verwenden, sind die Trainingsgeschwindigkeit (d. h. die Zeit, die Cognigy.AI benötigt, um das Modell zu erstellen, nachdem Sie auf die Schaltfläche geklickt haben) und die Qualität des Modells gleich, unabhängig davon, ob Sie die regulären Optionen *Modell erstellen* oder *Schnellerstellung* verwenden.

## Beispiel-Sätze<div class="divider"></div>Hier haben Entwickler die Möglichkeit, virtuellen Agenten ein einzigartiges Maß an individuellem Verständnis hinzuzufügen, das es ihnen ermöglicht, intelligent auf jede Nachricht zu reagieren, die ein Endbenutzer erhält.

Auch wenn jede Absicht bis zu 2000 Beispielsätze enthalten kann, empfehlen wir mindestens 5 und maximal 100. Bei diesen Sätzen sollte es sich um ein breites Spektrum möglicher Benutzereingaben handeln, von denen erwartet wird, dass sie die Absicht aktivieren. Das Erstellen einer umfassenden Beispielsatzliste ist ein entscheidender Schritt beim Aufbau eines intelligenten KI-Dienstes.

Bei der Eingabe der Beispielsätze können Sie mit der **TAB**- oder **ENTER**-Taste zum nächsten NLU-Beispielsatzfeld springen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/f97faca-exampleSentences.PNG" width="100%" />
  <figcaption>Machine Learning Intents: Beispielsätze</figcaption>
</figure>

!!! Warnung "Wiederholung vermeiden"
    Anstatt ähnliche Sätze für verschiedene Entitätsnamen zu schreiben, z. B. "Ich möchte Pizza bestellen, ich möchte Pasta bestellen...", erstellen Sie ein Lexikon und hängen Sie es an den Fluss an, das [Annotated]({{config.site_url}}ai/nlu/nlu-overview/annotations/) in Ihren Satz eingefügt werden kann.

Wie bereits erwähnt, werden mindestens 5 und maximal 100 Beispielsätze pro Intent empfohlen, um sicherzustellen, dass das NLU-Modell ausreichend trainiert ist. Wenn der Mindestschwellenwert nicht erreicht oder überschritten wird, wird ein Warnsymbol angezeigt, um den Benutzer aufzufordern, Beispielsätze hinzuzufügen oder zu entfernen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/87fee07-minSentenceWarning.PNG" width="100%" />
  <figcaption>Machine Learning-Absichten: Warnung zum minimalen Beispielsatz</figcaption>
</figure>

Jeder Versuch, die Intents mit weniger als 5 Beispielsätzen zu trainieren, führt zu einem negativen Feedback-Indikator, sobald der Build abgeschlossen ist.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/87fee07-minSentenceNegativeFeedback.PNG" width="100%" />
  <figcaption>Negativer Feedback-Indikator nach dem Training von Intents mit weniger als 5 Beispielsätzen</figcaption>
</figure>

Beispielsätze für Absichten sollten so eindeutig und einzigartig wie möglich sein. Wenn es zu viele Ähnlichkeiten und Überschneidungen mit anderen Absichten gibt, wird das Intent-Mapping weniger vorhersehbar und wenn konfiguriert, werden Absichtsbestätigungssätze häufiger ausgelöst.

!!! Hinweis "Auswertung von Beispielsätzen"
    Weitere Informationen darüber, wie Cognigy.AI Beispielsätze auswertet, finden Sie auf der [Intent Analyzer Page]({{config.site_url}}ai/nlu/nlu-overview/intent-analyzer/).

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.17.0-blue.svg)] ({{config.site_url}})

Wenn Sie mit der Maus über einen Beispielsatz fahren, wird ein *Löschen-Symbol* angezeigt. Wenn Sie darauf klicken, wird das entsprechende Beispielsatzfeld für Sie gelöscht.

!!! Warnung "Beispielsätze mit Tastatur löschen"
    Auf das *Löschen-Symbol* eines Beispielsatzes kann nicht zugegriffen werden, wenn nur eine Tastatur verwendet wird. Ein Benutzer, der nur über die Tastatur arbeitet, kann jedoch weiterhin einen Beispielsatz löschen, indem er das Feld einfach mit den Tasten *Löschen* oder *Rücktaste* löscht.

### Erstellen von Beispielen mit generativer KI 

Um die generative KI-Technologie zum Erstellen von Intent-Beispielsätzen zu verwenden, lesen Sie den Abschnitt [Generative AI](.. /.. /generative-ai.md#generate-intent-sentences) Artikel.

## Slots und Lexika<div class="divider"></div>Beim Schreiben von Beispielsätzen ist es möglich, der Satzstruktur mithilfe der Funktion "Anmerkungen" Systemslots und angehängte Lexika hinzuzufügen. 

Wenn Sie **Lexika** mit ähnlichen Elementen konfiguriert haben (z. B. Pizza = ESSEN und Kuchen = ESSEN), müssen Sie für beide keine ähnlichen Sätze eingeben. Erstellen Sie einen allgemeinen Satz, der mit Anmerkungen konfiguriert wird, um Ihre benutzerdefinierten Lexikon-Schlüsselwörter zu erkennen, z. B. "Ich möchte etwas ESSEN bestellen".

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/e85013c-lexiconSentences.PNG" width="100%" />
  <figcaption>Machine-Learning-Absichten: Slot- und Lexikon-Anmerkungen</figcaption>
</figure>

Markieren Sie einfach das Wort, das als Slot oder Lexikon zugeordnet werden soll, und klicken Sie auf das **+** am rechten Ende des Textfelds, um das Menü **Anmerkungen** zu öffnen. Das Anmerkungsmenü enthält Optionen zur Auswahl des Slot-Typs, der dem markierten Wort zugeordnet werden soll. 

!!! Hinweis "Beispiel für eine Satzanmerkung"
    Erfahren Sie mehr über das Erkennen von **Slots** und **Lexika** in Beispielsätzen auf der [Anmerkungsseite]({{config.site_url}}ai/nlu/nlu-overview/annotations/).

## Schwellenwerte<div class="divider"></div>Absichten können in einen von drei Schwellenwerten fallen:

Bestätigt**
    Die Absicht hat eine Punktzahl, die höher ist als die Konfidenzschwelle und gilt als "bestätigt".

* **Erneute Bestätigung erforderlich**
    Die Absicht hat eine Punktzahl, die höher als der Schwellenwert für die erneute Bestätigung, aber niedriger als der Konfidenzschwellenwert ist, und muss vom System erneut bestätigt werden.

* **Nicht gefunden**
    Die Absicht hat eine niedrigere Punktzahl als der Schwellenwert für die erneute Bestätigung und wird für diese Eingabe nicht als gültiges Ergebnis betrachtet.

Sie können diese Schwellenwerte in [Agenteneinstellungen]({{config.site_url}}ai/resources/manage/settings/) ändern.

!!! danger "Confirmation Sentence"
    Falls Sie keinen Bestätigungssatz für Ihre Machine Learning-Absicht definiert haben, wird der Schwellenwert für die erneute Bestätigung verwendet, um eine Absicht zu bestätigen.

Die Rückbestätigungsschwelle wird also auf zwei verschiedene Arten verwendet, je nachdem, ob ein Bestätigungssatz vorhanden ist:

- **Mit** Bestätigungssatz: Die Rückbestätigungsschwelle löst den Rückbestätigungssatz aus.

- **Ohne** Bestätigungssatz: Die Rückbestätigungsschwelle bestätigt die Eingabe.

## Bestätigungssatz und Rückbestätigungen<div class="divider"></div>Wenn ein Intent als "Erneute Bestätigung erforderlich" markiert wurde und es sich um die höchste gefundene Absicht handelt, stellt Cognigy AI dem Benutzer die Frage, die in der Eigenschaft "Bestätigungssatz" für die Absicht festgelegt ist. Wenn der Benutzer die Frage mit einer positiven Antwort bestätigt, merkt sich Cognigy AI die Antwort für diesen Benutzer und fragt den Benutzer nicht erneut. 

!!! Hinweis "So funktioniert die Rückbestätigung"
    * Benutzer: *"Ich möchte einen Snack bestellen"*
    * Cognigy AI bewertet den Intent 'orderPizza' mit 0,7
    * Cognigy AI: *"Meinst du, du willst eine Pizza bestellen?" *
    * Benutzer: *"Ja"*
    * Cognigy AI führt den Satz so aus, als hätte der Nutzer *"Ich möchte Pizza bestellen"* gesagt, und merkt sich die Bestätigung für die Zukunft

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/9ab14af-reconfirmation.PNG" width="100%" />
  <figcaption>Machine Learning Intents: Bestätigungssatz</figcaption>
</figure>
