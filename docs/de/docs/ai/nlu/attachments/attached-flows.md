---
 Titel: "Angehängter Flow" 
 Slug: "Attached-Flows" 
 ausgeblendet: false 
---
# Angehängter Flow

Mit der Funktion "Flow-Anhang" müssen Sie Funktionen nicht mehr über Cognigy.AI Agenten-Flows hinweg duplizieren. Flows können einfach aneinander angehängt werden, um die an anderen Stellen erstellten Absichten zu erkennen.

Die Flow-Funktionalität wird von Flows gemeinsam genutzt, indem ihre [Intents]({{config.site_url}}ai/nlu/nlu-overview/overview/#intents) im anderen Flow verfügbar gemacht werden. Wenn die Absicht des angehängten Flows die höchste Bewertung aufweist, wird der angehängte Flow anstelle des Haupt-Flows ausgeführt.

Um einen Flow anzufügen, muss zuerst der Flow mit der freigegebenen Funktionalität geschrieben werden, um die Liste **Angehängte Flows** zu füllen.

!!! Tipp "Flows modular aufbauen und umgestalten"
    Es wird empfohlen, die Flow-Größe klein zu halten. Refactoring häufig und verwenden Sie einen modularen Ansatz für klare, wartbare und effektive Flows.

Beachten Sie, dass Sie Knoten und Unterbäume auch zwischen Flows kopieren, ausschneiden und einfügen können. Dies erleichtert z. B. das Ausschneiden von Teilbäumen aus einem großen Flow und das Verteilen der Logik auf kleinere angehängte Flows.

## Absichts-Vererbung<div class="divider"></div>Wie oben beschrieben, werden die Absichten des angehängten Flows der Liste der Absichten im Hauptfluss hinzugefügt. Während des Intent-Mappings werden dann die angehängten *Intents* zusammen mit den Main Intents bewertet.

!!! Warnung "Vorsicht vor überlappenden Absichten"
    Cognigy-Smalltalk-Flows und alle anderen angehängten Flows können überlappende Absichten enthalten. Sie müssen sicherstellen, dass die Absichten in allen angehängten Flows unterschiedlich sind.

Die Reihenfolge, in der die Intents bewertet werden, wird durch die Einstellung "Map global Intents first" in [Agent Settings]({{config.site_url}}ai/resources/manage/settings/) bestimmt.

Wenn die zuerst bewerteten Absichten eine Punktzahl von 1,0 (die höchste Übereinstimmung) erhalten, werden die anderen Absichten nicht ausgewertet.

| Globale Absichten zuerst zuordnen | Wirkung | Ergebnis |
|--------------------------|--------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| falsch | Intents im Main Flow werden zuerst gewertet | Wenn Absichten im Hauptfluss die gleiche oder eine höhere Punktzahl als Absichten in angehängten Flüssen haben, haben Absichten im Hauptfluss Vorrang.  |
| Wahr | Intents in angehängten Flows werden zuerst bewertet | Wenn Intents in angefügten Flows gleich oder höher bewertet werden als Intents im Hauptflow, haben Intents in Attached Flows Vorrang. |

## Verwalten von angehängten Flows<div class="divider"></div>### Zugriff auf das Menü "Anhang"
Wählen Sie im Flow-Editor im oberen Menü die Registerkarte **NLU** und dann die Unterregisterkarte **Anhänge** aus, um das Menü Anhänge zu öffnen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/49cf615-attachFlowsMenu.PNG" width="100%" />
</figure>

### Einen Flow anhängen

Flows werden angefügt, indem Sie auf den Flow in der Liste klicken, wodurch der Umschalter für die Anlage aktiviert wird.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/50c1363-attachflows.PNG" width="100%" />
</figure>

!!! Warnung "Train Intents beim Anhängen"
    Die NLU muss jedes Mal neu trainiert werden, wenn ein neuer Flow oder ein neues Lexikon angehängt wird.

### Sortieren von Flow Intent Mapping

Sie können die Intent-Zuordnung der verfügbaren Flows wie folgt sortieren:

1. Klicken Sie auf die Schaltfläche *Sortieren* neben der Schaltfläche *Anhängen* oben in der Flow-Liste. Die Ansicht wechselt in den Sortiermodus.
2. Sortieren Sie angehängte Flows, indem Sie sie per Drag & Drop in die gewünschte Reihenfolge ziehen<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/26d4606-sortAttachedFlows.PNG" width="100%" />
</figure>