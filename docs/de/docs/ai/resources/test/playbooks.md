---
 Titel: "Playbooks" 
 Slug: "Spielbücher" 
 ausgeblendet: false 
---
# Playbooks

**Playbooks** helfen Ihnen, Ihre **Flows** zu testen und sicherzustellen, dass sie wie beabsichtigt funktionieren. Dabei handelt es sich um automatisierte Konversationen, die **Assertions** enthalten, mit denen verschiedene Elemente Ihres **Flows** überprüft werden können.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/68fdbe2-playbook.png" width="100%" />
</figure>

!!! Hinweis "Erstellen von Playbooks über das Interaktionsfenster"
    Sie können jede Konversation in Ihrem Interaktions-Panel direkt in ein Playbook verwandeln:<br><br>1. Gehen Sie zum Interaktionsbereich und chatten Sie mit Ihrem Bot<br>2. Klicken Sie auf die drei Punkte rechts neben der Flow-Auswahl<br>3. Wählen Sie *Playbook erstellen*<br><br>Sie werden mit einem neuen Playbook, das auf Ihrem Chatverlauf basiert, zum Playbook-Editor weitergeleitet. Sie können nun fortfahren und Assertionen und zusätzliche Schritte hinzufügen.

## Funktionsweise

#### Timeout pro Schritt festlegen
Um den Timeoutschwellenwert für jeden Schritt im Playbook festzulegen, geben Sie eine Dauer in Millisekunden in dieses Textfeld ein. Wenn ein Schritt länger als dieser Schwellenwert dauert, wird im Playbook-Player ein Fehler ausgelöst.

#### 'Abbruch bei Fehler' umschalten
Diese Einstellung bestimmt, ob nach einem fehlgeschlagenen Schritt fortgefahren oder das Playbook beim ersten Schritt mit Fehlern abgebrochen werden soll.

#### Playbook-Schritt
Ein **Schritt** stellt eine einzelne Eingabe dar, die sowohl Text als auch Daten enthält, in Kombination mit verschiedenen **Assertions** für die Flow-Ausgabe und den Status.

!!! Warnung
    Playbooks enthalten maximal 50 Schritte.

#### Behauptung
**Assertions** sind Überprüfungen für verschiedene Flow-bezogene Elemente, die Sie überprüfen können:

* Text ausgeben
* Ausgangsdaten
* Durchfluss-Zustand
*Zusammenhang 
*Schlitze
*Absicht

Alle Assertion-Ergebnisse können invertiert werden.

## Playbook-Läufe

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.27.0-blue.svg)] ({{config.site_url}})

Zusätzlich zum Ausführen eines Playbooks im Interaktionsbereich können Sie auch eine Playbook-Ausführung über den Playbook-Editor planen. Wenn Sie ein Playbook aus der Liste öffnen, wird nun eine neue Registerkarte mit dem Namen **Ausführen** angezeigt, auf der alle zuvor geplanten Playbook-Ausführungen aufgelistet sind.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/playbook-runs.png" width="100%" />
</figure>

Um einen neuen Lauf zu planen, klicken Sie auf die Schaltfläche *Ausführen*. Wählen Sie im daraufhin geöffneten Dialogfeld den Snapshot, den Flow und das Gebietsschema aus, für die Sie Ihr aktuelles Playbook ausführen möchten. Das Konfigurieren einer Playbook-Ausführung in diesem Dialogfeld ähnelt der Konfiguration einer Playbook-Ausführung im Interaktionsbereich. Wenn Sie fertig sind, klicken Sie im Dialogfeld auf die Schaltfläche **Ausführen**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/playbook-runs-dialog.png" width="100%" />
</figure>

!!! Tipp "Planen Sie Playbook-Ausführungen in großen Mengen mit der Cognigy CLI"
    Sie können mehrere Playbook-Ausführungen gleichzeitig mit dem Befehl "run" in der [Cognigy CLI](https://www.npmjs.com/package/@cognigy/cognigy-cli) planen, anstatt sie nacheinander über die Benutzeroberfläche zu planen.

Die Playbookausführung wird im Hintergrund erstellt, und eine Erfolgsbenachrichtigung wird angezeigt, sobald die Erstellung abgeschlossen ist. Wenn die Erstellung der Playbookausführung erfolgreich ist, wird die neu erstellte Ausführung in der Liste Ausführungen angezeigt. Jedes Element in dieser Liste zeigt den Status, den Ersteller und die Erstellungszeit des Laufs an. Die Liste kann nach diesen drei Parametern sortiert werden. Darüber hinaus kann die Liste auch nach ihrem *Status* und *Ersteller* gefiltert werden.

Wenn der Status einer Ausführung **Fehler** lautet, bedeutet dies, dass eine oder mehrere fehlgeschlagene Assertionen in der Playbookausführung vorhanden sind. Wenn der Status **Erfolgreich** lautet, wurden alle Playbook-Assertionen bestanden. Wenn Sie auf eine Playbook-Ausführung klicken, erhalten Sie weitere Informationen darüber, welche Assertionen fehlgeschlagen oder bestanden wurden, sodass Sie sehen können, was mit dem ausgeführten Flow schief oder richtig gelaufen ist.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/playbook-run-details.png" width="100%" />
</figure>

!!! Hinweis "Tipp: Planen Sie eine Ausführung oder navigieren Sie in der Playbooks-Liste zur Seite "Ausführungen"
    Sie können eine Ausführung auch direkt aus der Playbooks-Liste planen. Klicken Sie dazu auf die sekundäre Schaltfläche des Playbooks, das Sie ausführen möchten. Klicken Sie im Menü auf die Option **Playbook ausführen**. Sie können dann eine Playbookausführung auf die gleiche Weise konfigurieren und erstellen wie auf der Seite *Ausführungen*.
	Eine schnelle Navigation zur Seite "Läufe" ist möglich, indem Sie im Menü auf die Option "Läufe anzeigen" klicken.