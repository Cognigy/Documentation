---
 Titel: "Wenn" 
 Schnecke: "wenn" 
 ausgeblendet: false 
---
# Wenn

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/if.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Ein **If Node** wird verwendet, um entweder einen oder einen anderen Teil eines [**Flow**]({{config.site_url}}ai/resources/build/flows/ basierend auf einer Bedingung auszuführen. Ein If-Knoten hat zwei untergeordnete Elemente: einen Dann-Knoten und einen Else-Knoten. Die Bedingung wird während der Ausführung des Flows ausgewertet. Wenn die Bedingung als "true" ausgewertet wird, nimmt der Flow den Pfad des **Then-Knotens**, wenn er als "false" ausgewertet wird, wird der Pfad des **Else-Knotens** ausgeführt. 
## Anlegen einer Bedingung<div class="divider"></div>!!! Hinweis "Direct CognigyScript"
    Im Bedingungsfeld sollte direct [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) verwendet werden. Das bedeutet, dass Sie '{{ " {{ }}" }}' nicht verwenden müssen. Daher ist "input.slots.city" alles, was benötigt wird. Dies wird als 'true' ausgewertet, wenn eine Eingabe-Keyphrase mit dem Tag 'city' gefunden wurde.
## Regel-Editor

Mit dem Regeleditor können Sie schnell einfache Bedingungen erstellen.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/db4d06f-if-conditions.jpg" width="100%" />
</figure>

## Erweiterter Editor

Mit dem erweiterten Editor können Sie Bedingungen schreiben, die über einen Vergleich hinausgehen.<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/48b7a3f-if-conditions-rule.jpg" width="100%" />
</figure>