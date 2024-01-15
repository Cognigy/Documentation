---
 Titel: "Gehe zu" 
 Slug: "Go-to" 
 ausgeblendet: false 
---
# Gehe zu
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/go-to.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Ein **Go To Node** wird verwendet, um die Konversation auf einen anderen **Node** oder **Flow** umzuschalten, der sofort ausgeführt wird, wenn dieser Node aktiviert wird.

## Einstellungen

### Flow auswählen

Wählen Sie den Ziel-Flow aus, zu dem gewechselt wird, wenn die Flow-Ausführung den **Gehe zu**-Knoten auslöst.

### Knoten auswählen

Wählen Sie den Zielknoten aus, zu dem immer dann gewechselt wird, wenn die Flow-Ausführung den **Gehe zu**-Knoten auslöst.

Ein Knoten muss als Einstiegspunkt festgelegt werden, bevor er ausgewählt werden kann. Um einen Knoten als Einstiegspunkt festzulegen, verwenden Sie die Schaltfläche [Einstiegspunkt festlegen](.. /node-usage.md#set-entrypoint) eingestellt werden.

!!! Hinweis "Gehe zu und Ausführen zusammen verwenden"
    Ein Gehe zu Knoten überschreibt die Ausführung eines Execute Flow-Knotens. Wenn ein Flow mit einem Go To Node ausgeführt wird, stoppt der Go To Node nach einem Execute Flow Node die ursprüngliche Ausführung und die Sitzung verbleibt im Ziel-Flow des Go To Nodes. Dadurch wird verhindert, dass das normale Verhalten des Execute-Flow-Knotens zu dem Flow zurückkehrt, in dem er sich befindet.

## Fortgeschritten

### Ausführungsmodus

Der Ausführungsmodus bestimmt das Verhalten des Gehe zu-Knotens. Er kann zum Zielknoten wechseln und fortfahren oder auf Eingaben warten.

### Optionaler eingefügter Text

Wenn der Ausführungsmodus auf **Gehe zu Knoten und fortfahren** eingestellt ist, können Sie den Text überschreiben, mit dem Sie hier fortfahren möchten. Wenn kein Text angegeben ist, wird input.text verwendet.

### Optional injizierte Daten

Wenn der Ausführungsmodus auf **Gehe zu Knoten und fortfahren** eingestellt ist, können Sie die Daten überschreiben, mit denen Sie hier fortfahren möchten. Wenn keine Daten angegeben werden, wird input.data verwendet.

### Absichten analysieren

Der Benutzer entscheidet, ob wir Intents innerhalb des Sub-Flows **parsen** sollen. Diese Option ist standardmäßig deaktiviert.

Wenn die Einstellung **Parse Intents** aktiviert ist, analysiert Cognigy NLU die Intents im Ziel-Flow erneut, indem entweder [input.text](.. /.. /tools/interaction-panel/input.md#accessing-the-input-object) oder [Optional eingefügter Text](#optionally-injected-text)

Mit dieser Einstellung wird die Eingabe in den Sub-Flow geparst, und die NLU bewertet diesen Text dann mit den verfügbaren Intents im Sub-Flow. Dies wird nicht basierend auf Intents im übergeordneten Flow bewertet.

### Slots analysieren

Der Benutzer entscheidet, ob wir Slots innerhalb des Sub-Flows **parsen** sollen. Diese Option ist standardmäßig deaktiviert.

Wenn die Einstellung **Parse Slots** aktiviert ist, analysiert Cognigy NLU die Slots im Ziel-Flow im Ziel-Flow neu, indem entweder [input.text](.. /.. /tools/interaction-panel/input.md#accessing-the-input-object) oder [Optional eingefügter Text](#optionally-injected-text)

Mit dieser Einstellung wird die Eingabe in den Sub-Flow geparst, und die NLU bewertet diesen Text dann anhand der verfügbaren Slots im Sub-Flow. Dies wird nicht basierend auf Slots im übergeordneten Flow bewertet.

### Kontext aufnehmen
Wenn die Einstellung **Kontext absorbieren** aktiviert ist, wird beim Umschalten der Standardkontext des Zielflows auf den aktuellen Kontext angewendet.

!!! Warnung "Schleifen"
    Cognigy.AI prüft, wie oft ein Go To Node ohne Benutzereingabe dazwischen aktiviert wurde. Die Standardeinstellung für die maximale Anzahl von Schleifen ist 4, kann aber für On-Premise-Installationen konfiguriert werden.

!!! Hinweis "Zielfluss öffnen"
    Mit einem Klick auf den Flow-Namen in der Node-Vorschau können Sie direkt zum Ziel-Flow springen.