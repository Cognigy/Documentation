---
 Titel: "Ja/Nein-Absichten (Beta)" 
 Schnecke: "Ja-Nein-Absichten" 
 ausgeblendet: false 
---

# Ja/Nein-Absichten (Beta)

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.47(Beta)-lila.svg)] (.. /.. /.. /release-notes/4.47.md)

!!! Anmerkung
    Die Ja/Nein-Absichten befinden sich in der Beta-Phase. Wir empfehlen Ihnen, diese Funktion auszuprobieren und uns Feedback zu geben.

Die **Ja/Nein-Intents**-Funktion ermöglicht es maschinellem Lernen, "Ja"- und "Nein"-Bestätigungen zu ermitteln, ähnlich wie beim regulären Intent-Abgleich. Auf diese Weise kann ein kleiner Satz von Beispielsätzen ein Modell trainieren, das in der Lage ist, verschiedene "Ja"- und "Nein"-Bestätigungsphrasen zu verstehen, was zu einer flüssigeren natürlichen Spracherfahrung führt.

In der vorhergehenden [Bestätigungswörter](.. /.. /resources/manage/settings.md#general-flow-logic--flow-settings) haben Sie eine begrenzte Auswahl an "Ja"- und "Nein"-Variationen, und Sie müssen diese anpassen, indem Sie manuell eine Liste von Synonymen hinzufügen. Mit der **Ja/Nein-Absichten**-Funktion verfügen Sie über ein vorinstalliertes Vokabular mit der Möglichkeit, neue Wörter hinzuzufügen, was einem virtuellen Agenten hilft, verschiedene Variationen von "Ja"- und "Nein"-Absichten zu erkennen.

Vor der Verwendung von Ja/Nein-Absichten:

'''txt
Benutzer: Hallo! 
Virtueller Agent: Willst du das Star Wars-Quiz spielen?
Benutzer: Auf jeden Fall
Virtueller Agent: Ich bin mir nicht sicher, ob ich das richtig verstanden habe. Wiederholen.
'''

Nach der Verwendung von Ja/Nein-Absichten:

'''txt
Benutzer: Hallo! 
Virtueller Agent: Willst du das Star Wars-Quiz spielen?
Benutzer: Auf jeden Fall
Virtueller Agent: Los geht's!
'''

Die Ja/Nein-Intents-Funktion wird in der [Frage](.. /.. /flow-nodes/message/question.md), [optionale Frage](.. /.. /flow-nodes/message/optionale-frage.md) und [Code](.. /.. /flow-nodes/code/code.md) Knoten.

Um diese Funktion einzurichten, gehen Sie wie folgt vor:

1. [Wählen Sie ein geeignetes Gebietsschema aus oder verwenden Sie ein Standardgebiet](#select-a-locale)
2. [Wählen Sie aus, ob Sie local für bestimmte oder alle Flows verwenden möchten](#use-yesno-intents-for-specific-or-all-flows)
3. [Testen Sie Ihren Flow mithilfe des Interaktionsfensters](#test Sie Ihren Flow mithilfe des Interaktionsbereichs verwenden)

### Wählen Sie ein Gebietsschema aus

Für jedes für das Projekt konfigurierte Gebietsschema wird ein separates Ja/Nein-Intents-Modell trainiert. Daher wird das Ja/Nein-Intents-Training für jedes Gebietsschema separat konfiguriert. Das universelle Gebietsschema verfügt über vorinstallierte englische Beispielsätze.

Um ein Gebietsschema zu konfigurieren, gehen Sie wie folgt vor:

1. Um die konfigurierten Gebietsschemata des Projekts anzuzeigen, klicken Sie auf **> Lokalisierung verwalten**.
2. Wählen Sie ein Gebietsschema aus und klicken Sie auf! [Auslassungspunkte] (.. /images/icons/vertical-ellipsis.svg), dann **Ja/Nein-Absichten bearbeiten**.
3. Im Bereich **Ja/Nein-Absichten bearbeiten** können Sie Absichten für das aktuelle Gebietsschema konfigurieren:
      - **Ja Absicht** – standardmäßig ist die Einstellung aktiviert. Wenn die Einstellung deaktiviert ist, wird die Absicht aus dem Build ausgeschlossen.
      - **Keine Absicht** – standardmäßig ist die Einstellung aktiviert. Wenn die Einstellung deaktiviert ist, wird die Absicht aus dem Build ausgeschlossen.
      - **Absicht ablehnen** – standardmäßig ist die Einstellung aktiviert. Sie müssen Beispiele manuell hinzufügen. Wenn die Einstellung deaktiviert ist, wird die Absicht aus dem Build ausgeschlossen.
4. Zusätzlich können Sie für Ja- und Nein-Absichten [Regeln](rule-intents.md) hinzufügen. 
5. Klicken Sie auf **Speichern & Erstellen**, um ein Modell zu erstellen. Das Ja/Nein-Modell wird immer erstellt, wenn Sie Einstellungen bearbeiten und speichern. 

## Ja/Nein-Absichten für bestimmte oder alle Flows verwenden

Sie können die Ja/Nein-Absichtsfunktion für Folgendes verwenden:

- [ein bestimmter Flow](#flow-Level-Einstellungen) 
- [alle Flows im Projekt des virtuellen Agenten](#project-level-settings)

### Einstellungen auf Projektebene

Um Ja/Nein-Absichten für alle Flows zu verwenden, gehen Sie wie folgt vor:

1. Klicken Sie im Menü auf der linken Seite auf **> Einstellungen verwalten**.
2. Klicken Sie auf der Seite **Einstellungen** auf **NLU-Einstellungen**. 
3. Wählen Sie im Abschnitt **Allgemeine Ablauflogik** eine der folgenden Optionen aus der Liste **Ja/Nein-Logik** aus:
     - **Bestätigungswörter** — deaktiviert die Ja/Nein-Absichtsfunktion. Bestätigungswörter werden auf die gleiche Weise wie zuvor in der Ja/Nein-Intents-Funktion verwendet. Die Option ist standardmäßig aktiviert.
     - **Ja/Nein-Absichten mit erweiterten Regeln** – wertet zuerst die Standardlogik für Bestätigungswörter aus. Wenn die standardmäßige Logik der Bestätigungswörter den Eingabetyp nicht ermitteln kann, wird das Ja/Nein-Intents-Modell ausgewertet.
     - **Ja/Nein-Absichten** – wertet die Ja/Nein-Absichtslogik für jede Benutzereingabe aus. Die standardmäßige Logik für Bestätigungswörter wird nur dann als Fallback verwendet, wenn keine Ja-, Nein- oder Ablehnungsabsichten aus dem Ja/Nein-Intents-Modell ausgelöst werden.
4. Wenn Sie **Ja/Nein-Absichten – mit erweiterten Regeln** oder **Ja/Nein-Absichten** ausgewählt haben, konfigurieren Sie **Ja/Nein-Schwellenwert**. Der Schieberegler für den Konfidenzschwellenwert legt die Mindestpunktzahl fest, die für das Auslösen von Ja/Nein-Absichten erforderlich ist. Ein Ja, Nein oder Absicht ablehnen wird nur ausgelöst, wenn die Absichtsbewertung größer oder gleich diesem Schwellenwert ist. Dieser Wert gilt für Ja/Nein-Intents-Modelle für alle Gebietsschemas.
Sie können diesen Wert für einen bestimmten Flow ändern.
5. Klicken Sie auf **Speichern**, um Einstellungen anzuwenden und ein Modell zu erstellen. Das Ja/Nein-Modell wird immer erstellt, wenn Sie Einstellungen bearbeiten und speichern. 

Wenn Sie Einstellungen auf Projektebene festgelegt haben, diese aber für bestimmte Flows ändern möchten, sollten Sie zu den Einstellungen auf Flow-Ebene wechseln.

### Einstellungen für die Durchflussebene

Standardmäßig erben alle Flows die Einstellungen **Ja/Nein-Logik** und **Ja/Nein-Schwellenwert** von der Konfiguration auf Projektebene. Sie können diese Einstellungen für einen bestimmten Flow überschreiben.

Um Ja/Nein-Absichten für einen bestimmten Flow zu verwenden, gehen Sie wie folgt vor:

1. Öffnen Sie den vorhandenen Flow.
2. Wählen Sie in der oberen rechten Ecke der Seite **Flow-Editor** die Option **Einstellungen** aus.
3. Aktivieren Sie auf der Registerkarte **Konfiguration** unter **Allgemeine Ablauflogik** das Kontrollkästchen neben der Einstellung **Ja/Nein-Logik**.
4. Wählen Sie in der Liste **Ja/Nein-Logik** eine der folgenden Optionen aus:
     - **Bestätigungswörter** – deaktiviert die Ja/Nein-Intents-Funktion des aktuellen Flows. Bestätigungswörter werden auf die gleiche Weise wie zuvor in der Ja/Nein-Intents-Funktion verwendet. Die Option ist standardmäßig aktiviert.
     - **Ja/Nein-Absichten mit erweiterten Regeln** – wertet zuerst die Standardlogik für Bestätigungswörter aus. Wenn die standardmäßige Logik der Bestätigungswörter den Eingabetyp nicht ermitteln kann, wird das Ja/Nein-Intents-Modell ausgewertet.
     - **Ja/Nein-Absichten** – wertet die Ja/Nein-Absichtslogik für jede Benutzereingabe aus. Die standardmäßige Logik für Bestätigungswörter wird nur dann als Fallback verwendet, wenn keine Ja-, Nein- oder Ablehnungsabsichten aus dem Ja/Nein-Intents-Modell ausgelöst werden.
5. Wenn Sie **Ja/Nein-Absichten – mit erweiterten Regeln** oder **Ja/Nein-Absichten** ausgewählt haben, konfigurieren Sie **Ja/Nein-Schwellenwert**. Der Schieberegler für den Konfidenzschwellenwert legt die Mindestpunktzahl fest, die für das Auslösen von Ja/Nein-Absichten erforderlich ist. Ein Ja, Nein oder Absicht ablehnen wird nur ausgelöst, wenn die Absichtsbewertung größer oder gleich diesem Schwellenwert ist. Dieser Wert gilt für Ja/Nein-Intents-Modelle für alle Gebietsschemas im aktuellen Flow.
6. Klicken Sie auf **Speichern**, um Einstellungen anzuwenden und ein Modell zu erstellen. Das Ja/Nein-Modell wird immer erstellt, wenn Sie Einstellungen bearbeiten und speichern. 

## Testen Sie Ihren Flow mithilfe des Interaktionsfensters

!!! Trinkgeld
    Ab Cognigy 4.47 werden Ja/Nein-Absichten im [Expertenmodus](.. /.. /tools/interaction-panel/interaction-panel.md#expert-mode).

Überprüfen Sie, ob die Ja/Nein-Absichtsfunktion wie erwartet funktioniert, indem Sie den [Interaktionsbereich](.. /.. /tools/interaction-panel/context.md):

1. Öffnen Sie im vorhandenen Flow das Interaktionsfenster, indem Sie auf ! [Interaktions-Panel] (.. /images/icons/interaction-panel.svg) **Chatten Sie mit Ihrem Agenten** in der oberen rechten Ecke der Seite.
2. Führen Sie einen Flow aus.
3. Wählen Sie auf der Registerkarte **INFO** die Option **Eingabe** aus, um JSON anzuzeigen. Im Objekt "yesNoIntentResults" sehen Sie das Ergebnis der Auswertung des Yes/No-Intents-Modells. Im Folgenden finden Sie Beispiele für mögliche Ergebnisse:

=== "Ja Absicht"

'''json
      "nlu": {
        "yesNoIntentResults": {
            "finalIntentName": "yesIntent",
            "finalIntentScore": 0.8887347172756052,
            "Partituren": [
                  {
                  "ID": "A396391D-3CAB-43AB-8B8A-CEFD0135041B",
                  "name": "yesIntent",
                  "Punktzahl": 0.8887347172756052
                  },
                  {
                  "ID": "FA2AB1D3-B5CD-4021-91C6-8B642EC51DD8",
                  "name": "keine Absicht",
                  "Partitur": 0.32411091251643426
                  }
            ]
         }
      },
      "mode": "Nur Text",
      "type": "pAntwort"
      '''

=== "Keine Absicht"

'''json
      "nlu": {
        "yesNoIntentResults": {
            "finalIntentName": "noIntent",
            "finalIntentScore": 0,9659235010108965,
            "Partituren": [
                  {
                  "ID": "FA2AB1D3-B5CD-4021-91C6-8B642EC51DD8",
                  "name": "keine Absicht",
                  "Punktzahl": 0.9659235010108965
                  },
                  {
                  "ID": "A396391D-3CAB-43AB-8B8A-CEFD0135041B",
                  "name": "yesIntent",
                  "Punktzahl": 0.021069213045105353
                  },
                  {
                  "ID": "C646DD2B-F7D2-45D8-8451-CAE95142C81F",
                  "name": "Absicht",
                  "Punktzahl": 0.0034825030367928644
                  }
            ]
        }
      },
      "mode": "Nur Text",
      "type": "nAntwort"
      '''
=== "Absicht ablehnen"
      
'''json
      "nlu": {
        "yesNoIntentResults": {
            "finalIntentName": "rejectIntent",
            "finalIntentScore": 0.7307951831435443,
            "Partituren": [
                  {
                  "ID": "C646DD2B-F7D2-45D8-8451-CAE95142C81F",
                  "name": "Absicht",
                  "Punktzahl": 0.7307951831435443
                  },
                  {
                  "ID": "A396391D-3CAB-43AB-8B8A-CEFD0135041B",
                  "name": "yesIntent",
                  "Punktzahl": 0.03191703050840985
                  },
                  {
                  "ID": "FA2AB1D3-B5CD-4021-91C6-8B642EC51DD8",
                  "name": "keine Absicht",
                  "Punktzahl": 0.007946727310282035
                  }
               ]
            }
      },
      "mode": "Nur Text",
      "type": "Anweisung"
      '''
     
=== "Fallback-Ablehnungsabsicht"

'''json
      "nlu": {
        "yesNoIntentResults": {
            "finalIntentName": null,
            "finalIntentScore": null,
            "Partituren": [
                  {
                  "id": null,
                  "name": "null - Fallback-Ablehnungsabsicht",
                  "Punktzahl": 0.7277484634707633
                  },
                  {
                  "ID": "A396391D-3CAB-43AB-8B8A-CEFD0135041B",
                  "name": "yesIntent",
                  "Bewertung": 0.207322792467384
                  },
                  {
                  "ID": "C646DD2B-F7D2-45D8-8451-CAE95142C81F",
                  "name": "Absicht",
                  "Punktzahl": 0.018095447571065546
                  }
            ]
         }
      },
      "mode": "Nur Text",
      "type": "Anweisung"
      '''  

Abhängig von der Einstellung **Ja/Nein-Logik** wird das Ja/Nein-Intents-Modell möglicherweise nicht ausgewertet. In diesem Fall hat 'yesNoIntentResults' die Standardwerte:

'''json
"yesNoIntentResults": {
  "finalIntentName": null,
  "finalIntentScore": null,
  "scores": []
}
'''
Ja/Nein-Intents werden unabhängig von regulären Intents ausgewertet und überschreiben nicht die vorhandenen Felder für Intents im Eingabeobjekt. Die Auswertung von Ja/Nein-Absichten wirkt sich nur auf den 'Typ' und 'yesNoIntentResults' aus. 

## Häufig gestellte Fragen

F1: Was passiert, wenn die **Ja/Nein-Logik** auf **Ja/Nein-Absichten** festgelegt ist, aber sowohl die Ja- als auch die Nein-Absichten einzeln in den Gebietsschemaeinstellungen deaktiviert wurden?

**A1**: Es wird die Standardlogik **Bestätigungswörter** verwendet.

F2: Ich sehe keine Ja/Nein-Absichten im Intent-Trainer. Warum? 

**A2**: Ja/Nein Intents-Unterstützung wurde im Intent Trainer nicht implementiert. 

F3: Ich sehe die Ampeln und das Trainingsfeedback nicht, wenn ich Ja/Nein-Absichten trainiere. Warum?

**A3**: Das Ampelsystem wurde für Ja/Nein-Absichten noch nicht implementiert. 

**F4**: Sind Ja/Nein-Absichten unabhängig von der standardmäßigen Absichtsbewertung?

**A4**: Ja, die Ja/Nein-Absichten sind völlig unabhängig von der standardmäßigen Absichtsbewertung ("input.intentScore" oder "input.nlu.intentMapperResults"). Sie finden insbesondere die Typen "nAnswer" und "yAnswer" innerhalb des Flows. Diese Typen werden für den Typ **Ja/Nein** in [Frageknoten](.. /.. /flow-nodes/message/question.md) und für [confirm intents](ml-intents.md), ähnlich wie [confirmation words](.. /.. /resources/manage/settings.md#additional-confirmation-words).

F5: Wie werden Ja/Nein-Absichten ausgewertet, wenn der Knoten "Flow ausführen" mit und ohne aktivierte **Parse Intents** verwendet wird?

**A5**: Das Bewertungsverhalten der Ja/Nein-Absicht unterscheidet sich nur, wenn die Ja/Nein-Absichtseinstellungen in den beiden Flows unterschiedlich sind. 

Zum Beispiel:

Voraussetzungen:

- Flow A hat "Ja/Nein-Intents" und nur einen Knoten, nämlich einen Execute Flow-Knoten, der Flow B ausführt.
- Flow B verfügt über "Ja/Nein-Absichten – mit erweiterten Regeln" und einen Say-Knoten.

Szenario 1: 

1. Die Einstellung "Absichten analysieren" ist im Knoten "Flow ausführen" von Flow A deaktiviert.
2. Wenn der Benutzer in Flow A "Ja" sendet, wird die Ja-Absicht in Flow B ausgelöst. 
3. Flow B erbt die Ja/Nein-Logik von Flow A.

Szenario 2: 

1. Die Einstellung "Absichten analysieren" ist im Knoten "Flow ausführen" von Flow A aktiviert.
2. Wenn der Benutzer in Flow A "Ja" sendet, wird die Ja-Absicht in Flow B nicht ausgelöst. 
3. Flow B verwendet seine eigene Ja/Nein-Logik.