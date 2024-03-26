---
 Titel: "Once" 
 Schnecke: "einmal" 
 ausgeblendet: false 
---
# Einmal

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/once.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Der Once-Knoten wird verwendet, um den angehängten Teil des Flows nur einmal während einer Sitzung auszuführen. Er kann mit dem Reset Context Node zurückgesetzt werden.

Wenn zum ersten Mal in einer Sitzung ein **Once**-Knoten aktiviert wird, wird die Verzweigung **On First Time** verwendet. Alle zukünftigen Aktivierungen desselben Once-Knotens nehmen den Zweig **Danach** an. Es ist üblich, einen once-Knoten zu verwenden, um eine einzelne Willkommensnachricht an einen neuen Benutzer zu übermitteln und sicherzustellen, dass dieselbe Nachricht während der gesamten Konversation nicht erneut zugestellt wird.