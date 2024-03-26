---
 Titel: "Zum Kontext hinzufügen" 
 slug: "Zum Kontext hinzufügen" 
 ausgeblendet: false 
---
# Zum Kontext hinzufügen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/add-to-context.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Ein **Add to Context Node** wird verwendet, um Informationen im Cognigy [Context](.. /.. /tools/interaction-panel/context.md), so dass es während der gesamten Sitzung für nachfolgende Benutzereingaben verwendet werden kann. 

| Parameter | Typ | Beschreibung |
|-----------|--------------|---------------------------------------------------------------------------------------------------------|
| Schlüssel | Cognigy Text | Der Schlüssel, wo im Kontext gespeichert werden soll. Dies kann ein mit Punkt verschachtelter Schlüssel sein (z. B. my.first.key) |
| Wert | Cognigy Text | Der Wert, der im Kontext gespeichert werden soll.                                                                      |
| Modus | Wählen Sie | - Einfach speichert den Wert direkt auf dem Schlüssel<br>- Array speichert den Wert in einem Array auf dem Schlüssel |

!!! Hinweis "Speichern eines Objekts"
    Wenn Sie ein Objekt im Kontext speichern möchten, verwenden Sie '.preserveType()' am Ende, um es als Objekt zu behalten. Beispiel: 'input.slots.city[0].preserveType()' würde das vollständige Slot-Objekt für die erste gefundene city-Entität im Kontext speichern.

!!! Hinweis "Das Hinzufügen eines Wertes zu einem Array enthält nur eindeutige Werte"
    Wenn Sie einem Array mithilfe des addToContext-Knotens einen Wert hinzufügen, wird der Wert nicht hinzugefügt, wenn der Wert bereits im Array vorhanden ist. Wenn Sie einem Array einen Wert hinzufügen müssen, unabhängig davon, ob der Wert bereits im Array vorhanden ist, können Sie die Funktion '.push()' in einem Code-Node verwenden.