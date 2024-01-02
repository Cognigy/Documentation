---
 title: "Flow ausführen" 
 slug: "Ausführen-Flow" 
 ausgeblendet: false 
---
# Flow ausführen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/execute-flow.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Ein Execute Flow Node wird verwendet, um sofort einen anderen Flow auszuführen.

Nachdem die Ausführung des Ziel-Flows abgeschlossen ist, wird der aktuelle Flow weiter ausgeführt.

Cognigy überwacht, wie oft ein Execute Flow Node ohne Benutzereingabe ausgelöst wird. Die maximale Schleifenanzahl ist standardmäßig auf 4 festgelegt. Dieser Wert kann nur für On-Premise-Installationen konfiguriert werden.

Wenn ein Flow ausgeführt wird, erbt er den aktuellen Context vom übergeordneten Flow. Der ausgeführte Flow kann dann Änderungen an diesem Kontext vornehmen, und diese Änderungen stehen dem übergeordneten Flow zur Verfügung, sobald die Ausführung des untergeordneten Flows abgeschlossen ist.

## Einstellungen

### Flow auswählen

Wählen Sie den Ziel-Flow aus, der immer dann ausgeführt wird, wenn die Flow-Ausführung den Knoten **Flow ausführen** auslöst.

### Knoten auswählen

Ein Knoten muss als Einstiegspunkt festgelegt werden, bevor er ausgewählt werden kann. Um einen Knoten als Einstiegspunkt festzulegen, verwenden Sie die Schaltfläche [Einstiegspunkt festlegen](.. /node-usage.md#set-entrypoint) eingestellt werden.

Wählen Sie den Zielknoten aus, der immer dann ausgeführt wird, wenn die Flow-Ausführung den **Execute Flow**-Knoten auslöst.

!!! Hinweis "Zielfluss öffnen"
    Mit einem Klick auf das Symbol rechts neben dem Dropdown-Menü Flow können Sie den Ziel-Flow öffnen. Stellen Sie sicher, dass Sie zuerst Ihren Node speichern.

### Fortgeschritten 

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|----------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  ----------------------------------------------------------------------------------------|
| Absichten analysieren | Umschalten | Legt fest, ob Cognigy Absichten innerhalb des untergeordneten Flows analysieren soll. Diese Option ist standardmäßig aktiviert.<br><br> Wenn die Einstellung aktiviert ist, analysiert Cognigy NLU die Intents im Ziel-Flow erneut, indem entweder [input.text](.. /.. /tools/interaction-panel/input.md#accessing-the-input-object) oder die [Optional eingefügter Text](go-to.md#optionaler-injizierter-Text). <br><br> Mit dieser Einstellung wird die Eingabe in den untergeordneten Flow analysiert, und die NLU bewertet diesen Text dann mithilfe der verfügbaren Absichten im untergeordneten Flow. Dies wird nicht basierend auf Intents im übergeordneten Flow bewertet. |                                                                                                                                                                                                                                                                                                                                                     |
| Spielautomaten parsen | Umschalten | Legt fest, ob Cognigy Slots innerhalb des untergeordneten Flows analysieren soll. Diese Option ist standardmäßig aktiviert.<br><br> Wenn die Einstellung aktiviert ist, analysiert Cognigy NLU die Slots im Ziel-Flow neu, indem entweder [input.text](.. /.. /tools/interaction-panel/input.md#accessing-the-input-object) oder die [Optional eingefügter Text](go-to.md#optionaler-injizierter-Text). <br><br> Mit dieser Einstellung wird die Eingabe in den untergeordneten Flow analysiert, und die NLU bewertet diesen Text dann anhand der verfügbaren Slots im untergeordneten Flow. Dies wird nicht basierend auf Slots im übergeordneten Flow bewertet.         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Kontext aufnehmen | Umschalten | Legt fest, ob der standardmäßige Flow-Kontext des untergeordneten Flows auf den aktuellen Context angewendet werden soll. <br><br> Wenn der untergeordnete Flow einen Wert innerhalb seines Standardkontexts hat, wird der Wert in den aktuellen Kontext kopiert, sobald Sie den untergeordneten Flow eingeben.                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

#### Wiederherstellung von Eingabeobjekten

Wenn Sie Absichten und Slots in einem untergeordneten Flow analysieren, verhält sich das Eingabeobjekt je nach den ausgewählten Optionen unterschiedlich. 

Wenn Sie sowohl **Parse Intents** als auch **Parse Slots** aktivieren, werden die meisten Eigenschaften des Eingabeobjekts wiederhergestellt, wenn Sie zum übergeordneten Flow zurückkehren. Die Eigenschaften 'inputId', 'execution' und alle benutzerdefinierten Eigenschaften, die dem Input-Objekt hinzugefügt wurden, werden jedoch nicht wiederhergestellt. Zum Beispiel:

1. Der übergeordnete Flow empfängt ein Eingabeobjekt mit der Absicht **A**.
2. Der untergeordnete Flow analysiert die Eingabe und erkennt die Absicht **B**.
3. Bei der Rückkehr zum übergeordneten Flow wird das Eingabeobjekt mit der Absicht **A** und allen Slot-Werten, die vom untergeordneten Flow übergeben wurden, wiederhergestellt.

Wenn Sie sowohl **Parse Intents** als auch **Parse Slots** deaktivieren, wird das Eingabeobjekt nicht wiederhergestellt, wenn Sie zum übergeordneten Flow zurückkehren. Zum Beispiel:

1. Der übergeordnete Flow empfängt ein Eingabeobjekt mit der Absicht **A**.
2. Child Flow analysiert die Eingabe, erkennt aber keine Absichten oder Slots.
3. Bei der Rückkehr zum übergeordneten Flow wird das Eingabeobjekt nicht wiederhergestellt und alle Änderungen, die im untergeordneten Flow vorgenommen werden, werden nicht an den übergeordneten Flow weitergegeben.