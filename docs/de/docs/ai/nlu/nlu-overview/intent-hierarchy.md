---
 Titel: "Absichtshierarchie" 
 Schnecke: "Absichts-Hierarchie" 
 ausgeblendet: false 
---
# Absichts-Hierarchie

Das Intent-Trainingsmodul enthält eine **Hierarchie**-Funktion, die das Gruppieren und Layern von Absichten ermöglicht. Dies bedeutet, dass übergeordnete Absichten erstellt werden, die die Beispielsätze von untergeordneten Absichten erben können, um dem Verständnis des Agenten mehr Flexibilität zu verleihen und die Wahrscheinlichkeit zu erhöhen, dass die richtige Absicht identifiziert wird.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/51146c7-hierarchy.PNG" width="80%" />
</figure>

## Übersicht<div class="divider"></div>Absichten werden als untergeordnete Absichten hinzugefügt, indem Sie die übergeordnete Absicht per Drag & Drop über die Absichtsliste ziehen.

Intents können in drei Ebenen strukturiert werden:

- Absichten der Stufe 1
- Absichten der Stufe 2
- Absichten der Stufe 3

!!! tip "Tipp: Verwenden Sie Absichts-Namenskonventionen"
    Es wird empfohlen, bei der Benennung Ihrer Absichten einem Muster zu folgen. Erstellen Sie entweder einen Themenkategorienamen, oder verwenden Sie ein Nummerierungssystem, um Absichtsfamilien zu gruppieren.

Absichten der Ebene 1 können Beispielsätze von ihren untergeordneten Absichten der Ebene 2 erben, die wiederum Beispielsätze von ihren untergeordneten Absichten der Ebene 3 erben können. 

## Vererbung<div class="divider"></div>Aktivieren Sie den Schieberegler *"Beispielsätze von untergeordneten Absichten erben"* für jede Absicht, um die Beispielsätze aller untergeordneten Absichten in das Trainingsmodell einzubinden. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/df59f39-inherit.PNG" width="80%" />
</figure>

Wenn ein geerbter Beispielsatz gefunden wird, erzielen sowohl die übergeordnete als auch die untergeordnete Absicht ein hohes Ergebnis für die Absichtszuordnung, aber die untergeordnete Absicht wird in der Eigenschaft "input.intent" platziert. Suchen Sie das übergeordnete Element als zusätzliche Absicht mit hoher Bewertung im Array "input.nlu.intentMapperResults.scores".
Sie finden die gesamte gefundene Intent-Hierarchie im 'input.intentLevel'-Objekt und im 'input.nlu.intentMapperResults.intentPath'-Array.