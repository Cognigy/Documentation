---
 Titel: "NLU Übersicht" 
 Schnecke: "Übersicht" 
 ausgeblendet: false 
---
# NLU Übersicht

**Natural Language Understanding** ist der Kern fortschrittlicher virtueller Agenten. Cognigy.AI verfügt über eine branchenführende NLU-Engine namens Cognigy NLU. 

## Absichten<div class="divider"></div>Intent Mapping ist der Kern der NLU-Engine, und der Prozess verwendet maschinelles Lernen, um die Äußerung des Benutzers mit den definierten Absichten abzugleichen.

Um zu erfahren, wie Sie Intents verwenden, lesen Sie [Trainieren Sie Ihren virtuellen Agenten zur Erkennung von Intents](https://support.cognigy.com/hc/en-us/articles/360014776879-Train-your-Virtual-Agent-to-recognize-Intents) im Cognigy Help Center.<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360019857220-Cognigy-Sessions-Cognigy-NLU" target="_blank">Technisches Video "Cognigy NLU"</a>
      </div>
      <div class="callout-subtext">Sehen Sie sich diese Folge von Cognigy Sessions an, um einen technischen Einblick zu erhalten      </div>
   </div>
</blockquote>**Intents** können direkt im Abschnitt "Intents" der Registerkarte "NLU" erstellt und mit **Trainingsdaten** in Form von **Beispielsätzen** gefüttert werden. Diese Beispielsätze sollten ein gewisses Maß an Variation enthalten, damit das Modell gut funktioniert. Die folgende Abbildung zeigt ein Beispiel für eine Intent-Bibliothek im Menü für die Intent-Erstellung:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/b3aad66-nlu-intents-trainingdata.jpg" width="100%" />
</figure>

Machine-Learning-Modelle funktionieren am besten mit einer vergleichbaren Menge an Informationen über alle Intent-Klassen. Das heißt, im Idealfall haben alle Absichten eine ähnliche Anzahl von Beispielsätzen und sind inhaltlich klar trennbar. Er ist zwar in der Lage, mit unvollkommenen Eingaben umzugehen, aber es ist immer hilfreich, wenn Sie die Arbeit für die Maschine erleichtern.

Stellen Sie sicher, dass Sie keine Absichten haben, die nur aus einem einzigen Wort oder Satz ohne nützliche Informationen bestehen. Solche Absichten können die Gesamtwirksamkeit des Modells verringern.
Wenn die NLU vorhersagt, dass sich die Äußerung außerhalb des Gültigkeitsbereichs des Intent-Modells befindet, wird keine Absicht ausgelöst und die Absicht wird im [Input]({{config.site_url}}/ai/tools/interaction-panel/input/)-Objekt auf ''null'' gesetzt. Sie können dem [Reject Intent]({{config.site_url}}ai/nlu/nlu-overview/reject-intents/) Beispiele hinzufügen, um absichtlich zu verhindern, dass die NLU Benutzereingaben erkennt, die außerhalb des Bereichs des virtuellen Agenten liegen.
### NLU-Modell-Feedback

Sobald das Modell trainiert ist, ist Cognigy NLU in der Lage, Feedback zur Leistung des Modells zu geben. Dies wird mit verschiedenen Farben dargestellt, wobei Grün gut, Orange suboptimal und Rot schlecht ist. Zusätzliche Informationen werden beim Mouse-Hover angezeigt.

!!! Warnung "Anzahl der Beispielsätze"
    Intents müssen mindestens fünf Beispielsätze enthalten, um die NLU zu trainieren.

### Regeln
Regeln können verwendet werden, um das Intent unter bestimmten Bedingungen auszulösen. Regeln werden als **JavaScript-Ausdrücke** definiert, die ausgewertet werden, wenn die NLU ausgeführt wird.

### Absichts-Einstiegspunkt
Intent-Einstiegspunkte können verwendet werden, um den Einstiegspunkt im Flow zu ändern, nachdem die NLU ausgeführt wurde. Die drei Optionen sind:

* **Normal ausführen**
   Legen Sie den Einstiegspunkt automatisch fest.

* **Ausführen von START in diesem Ablauf**
   Führt den Flow mithilfe des Startknotens aus. 

* **Ausführen von einem Knoten in diesem Flow** 
   Führt den Flow ausgehend von einem bestimmten Knoten aus.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/53e2c9e-intents-entry.jpg" width="100%" />
</figure>

### Standardantworten
Intents können mit direkter Ausgabe (Antworten) in Form von sogenannten **Default Replies** konfiguriert werden. Standardantworten sind integriert [**Say**]({{config.site_url}}ai/flow-nodes/message/say/) und können mit kanalspezifischer Ausgabe konfiguriert werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/intent_settings_default_replies_training.png" width="100%" />
</figure>

Sie können die Einstellung überschreiben, um die **Standardantworten** als Beispielsätze für jede einzelne Absicht zu verwenden. Standardmäßig ist die Einstellung auf **Flow-Einstellungen verwenden** festgelegt, was bedeutet, dass wir den Flow [Einstellungen]({{config.site_url}}ai/resources/manage/settings/) verwenden. 

Wenn diese Funktion aktiviert ist, verwendet die NLU auch die konfigurierten Standardantworten zum Trainieren, wodurch die Übereinstimmungsrate für die konfigurierte Absicht verbessert wird.<div style="display: grid; grid-template-columns: auto auto">
  <img style="margin: 0px; padding: 0px" src="{{config.site_url}}ai/nlu/images/intent_default_replies_training_off.png"/>
  <img style="margin: 0px; padding: 0px" src="{{config.site_url}}ai/nlu/images/intent_default_replies_training_on.png"/>
</div>### Fortgeschritten 
Intents können mit einer Reihe erweiterter Optionen konfiguriert werden.

#### Schlagwörter
Tags können verwendet werden, um Absichten zu kategorisieren, was die Verwaltung erleichtert.

#### Bedingungen

Siehe [Intent-Bedingungen](conditions.md) für weitere Informationen zum dynamischen Aktivieren und Deaktivieren von Intents mit CognigyScript-Bedingungen.

#### Bestätigungssatz
Cognigy NLU verfügt über einen Mechanismus zur Bestätigung von Absichten, der durch die Konfiguration von Bestätigungssätzen in jeder Absicht funktioniert. Immer wenn ein Intent-Score in einen (konfigurierbaren) Bereich fällt - sagen wir 0,4 - 0,6 -, wird der Bestätigungssatz ausgelöst und dem Benutzer angezeigt. Wenn der Benutzer den Intent bestätigt, wird der Intent ausgelöst.

Informationen zum Hinzufügen von Sätzen zur erneuten Bestätigung finden Sie unter [Machine Learning Intents](.. /.. /nlu/nlu-overview/ml-intents.md).

### Menü "Intent-Optionen"
Das Menü "Intent-Optionen" kann ausgewählt werden, indem Sie auf die drei Punkte neben der Schaltfläche "Absicht erstellen" klicken. Das Menü bietet eine Reihe von Optionen:

* **Intents-CSV- oder JSON-Datei hochladen**. Mit dieser Option können Sie die Intent-Sammlung entweder im CSV- oder JSON-Format hochladen. 

* **Download-Absichten**. Intents können auch im CSV- und JSON-Format heruntergeladen werden.

* **Ablehnungsabsicht erstellen**. Reject Intents können verwendet werden, um bestimmte Äußerungen explizit herauszufiltern. Eine Ablehnungsabsicht kann für den Fall verwendet werden, dass bestimmte Benutzeräußerungen nicht als Absicht registriert werden sollen.

* **Alle Absichten löschen**. Diese Option kann verwendet werden, um alle Absichten in einem bestimmten Flow im Stapel zu löschen.

#### Intents hochladen

Gehen Sie folgendermaßen vor, um Absichten hochzuladen:

1. Öffnen Sie Ihren Flow.
2. Navigieren Sie im Flow-Editor zu **NLU > Intents**.
3. Klicken Sie auf der rechten Seite der Schaltfläche **+ Absicht erstellen** auf ! [vertikale-Auslassungspunkte] (.. /.. /assets/icons/vertical-ellipsis.svg).
4. Wählen Sie **Intents CSV- oder JSON-Datei hochladen** aus.
5. Wählen Sie einen der folgenden Modi:
    * **Überspringen** — Wenn bereits eine Absicht mit diesem Namen vorhanden ist, überspringt der Importvorgang diese Absicht.
    * **Überschreiben** — wenn bereits eine Absicht mit demselben Namen vorhanden ist, wird die vorhandene Absicht gelöscht und durch die neuen Werte ersetzt.
    * **Merge** — Wenn bereits ein Intent mit demselben Namen vorhanden ist, werden die Eigenschaften, die mehrere Werte zulassen, zusammengeführt. Zu diesen Eigenschaften gehören:
        * Beispiel-Sätze
        *Regeln
        *Schilder
        * Bestätigungssätze
    Andere Eigenschaften, wie z. B. Standardantwort und Bedingung, werden nicht geändert.
6. Klicken Sie auf **Bestätigen**.

Durch das Hochladen von Absichten werden vorhandene Absichten, die nicht in der Uploaddatei enthalten sind, nicht gelöscht. Wenn Sie Absichten löschen möchten, können Sie die Option **Alle Absichten löschen** verwenden oder einzelne Absichten vorher löschen.

#### Intents herunterladen

!!! Warnung
    {! _includes/ai/forbidden-characters.md !}

Gehen Sie folgendermaßen vor, um Intents herunterzuladen:

1. Öffnen Sie Ihren Flow.
2. Navigieren Sie im Flow-Editor zu **NLU > Intents**.
3. Klicken Sie auf der rechten Seite der Schaltfläche **+ Absicht erstellen** auf ! [vertikale-Auslassungspunkte] (.. /.. /assets/icons/vertical-ellipsis.svg).
4. Wählen Sie **Download Intents** aus.
5. Wählen Sie das heruntergeladene Format aus: CSV oder JSON.
6. Klicken Sie auf **Bestätigen**.

Die Datei wird im ausgewählten Format heruntergeladen.

### Menü "Individuelle Intent-Optionen"
Jeder Intent hat zusätzlich sein eigenes Optionsmenü, das durch Klicken auf die drei Punkte neben dem Intent-Namen ausgewählt werden kann. Das Menü bietet eine Reihe von Optionen:

* **Untergeordnete Absicht erstellen**. Fügt der Auswahl eine Absicht als untergeordnete Absicht hinzu. Siehe [Absichtshierarchie]({{config.site_url}}ai/nlu/nlu-overview/intent-hierarchy/). Diese Eigenschaft ist beim Importieren/Exportieren von Daten enthalten.

* **Absicht deaktivieren**. Deaktiviert den ausgewählten Intent so, dass er von einer Benutzereingabe nicht erkannt oder aktiviert werden kann. Diese Funktion entfernt vorübergehend die Absicht und die zugehörigen Trainingsdaten aus dem Modell, ermöglicht jedoch das erneute Hinzufügen mit einem einzigen Klick. Diese Eigenschaft ist beim Importieren/Exportieren von Daten enthalten.

* **Absichten löschen**. Entfernt die Absicht und alle zugehörigen Trainingsdaten aus dem Modell.

### Anhänge<div class="divider"></div>Cognigy NLU kann zusätzliche Flows und Lexika berücksichtigen, wenn sie angehängt werden.

### Angehängte Flows
Wenn ein Flow mit Intents an einen anderen Flow angehängt wird, werden die Intents in diesem angehängten Flow beim Trainieren des NLU-Modells berücksichtigt. Dies ist eine praktische Möglichkeit, verschiedene Intent-Kollektionen zu einem größeren Modell zu kombinieren. 

!!! warning "Vorsicht beim Anhängen von Flows"
    Jedes Mal, wenn ein Flow an einen anderen Flow angehängt wird, werden die Absichten beider Flows in einem einzigen Modell kombiniert. Dies kann zu unerwarteten Ergebnissen führen.

### Angehängte Lexika
Lexika müssen an einen Flow angehängt werden, damit ein Flow seine Keyphrases erkennen kann. Stellen Sie sicher, dass Sie das Modell jedes Mal neu trainieren, wenn Sie Ressourcen anfügen oder trennen. 

## Zustände<div class="divider"></div>Staaten können verwendet werden, um bestimmte Absichten absichtlich zu blockieren. Dies kann bei Grenzfällen oder sehr großen Intent-Sammlungen hilfreich sein.

Weitere Informationen finden Sie unter [State](.. /.. /tools/interaction-panel/state.md).

## Slot-Füller<div class="divider"></div>

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360020609199-Cognigy-Sessions-Question-Nodes" target="_blank">Technisches Video "Question Nodes"</a>
      </div>
      <div class="callout-subtext">Sehen Sie sich diese Folge von Cognigy Sessions an, um einen technischen Einblick zu erhalten      </div>
   </div>
</blockquote>Schlitzfüller ermöglichen eine erweiterte Schlitzfüllung mit sehr geringem Aufwand. Sie können mit einem bestimmten Slot-Typ konfiguriert werden und werden immer dann ausgeführt, wenn die NLU ausgeführt wird (in der Regel bei jeder Eingabe). Slot-Filler kopieren gefundene Slots automatisch in das [Context]({{config.site_url}}ai/tools/interaction-panel/context/)-Objekt, was bedeutet, dass sie mit einer Reihe von nachfolgenden Benutzeräußerungen gefüllt werden können. In Kombination mit Question Nodes ermöglicht dies einen sehr natürlichen Mechanismus zum Sammeln von Informationen, da es den Benutzern ermöglicht, "zu viel zu antworten". 

**Beispiel:**
Angenommen, wir möchten drei Informationen sammeln:

Größe**
  E-Mail**
  Produkt**

Wir würden geeignete **Slot-Füller** für diese Informationen konfigurieren:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/f3a2f48-nlu-slot-filling.jpg" width="100%" />
</figure>

Wenn wir nun passende Question Nodes hinzufügen, erhalten wir folgenden Flow:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/8334ff0-nlu-slot-filling-flow.jpg" width="100%" />
</figure>

Stellen Sie sicher, dass Sie die Frageknoten mit der Option "Überspringen, wenn Antwort im Kontext vorhanden ist" konfigurieren, da hier die Slot-Filler-Ergebnisse gespeichert werden. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/3d699cb-nlu-slot-filling-question-node.jpg" width="100%" />
</figure>

Der Flow ist nun bereit, verschiedene Arten von Äußerungen entgegenzunehmen und automatisch nach den fehlenden Informationen zu fragen.

*"Ich hätte gerne ein T-Shirt in XL"* -->**[fehlende E-Mail]**-->*"Wie lautet Ihre E-Mail-Adresse?" *.

*"Ich möchte ein T-Shirt in XL und meine E-Mail-Adresse ist max@cognigy.com"*--> **Flow abgeschlossen.**

### Erweiterte Slot-Filler-Optionen

#### Zusätzliche Validierung
Eine [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/)-Bedingung, die 'true' zurückgeben muss, damit die Übereinstimmung als gültig angesehen wird. Ein Beispiel wäre eine zusätzliche Validierung für eine E-Mail-Frage von 'input.slots.EMAIL[0].endsWith("cognigy.com")', die garantieren würde, dass nur cognigy.com E-Mail-Adressen die Validierung bestehen.

#### Position des Ergebnisses
Die Position eines gefüllten Slot-Ergebnisses wird standardmäßig durch den Slot-Typ bestimmt (z. B. 'input.slots.EMAIL[0]' für E-Mail-Fragen). Dies kann mit dieser Einstellung überschrieben werden (z.B. würde 'input.slots.EMAIL' alle gefundenen E-Mail-Slots speichern). Wenn die Ergebnisposition keinen Wert zurückgibt (= ist falsch), wird die Antwort als ungültig betrachtet.