---
 Titel: "Anhänge" 
 slug: "Anhänge" 
 ausgeblendet: false 
---
# Anhänge

Agentenflüsse und Lexika können über mehrere Flows im gesamten Agenten hinweg gemeinsam genutzt werden. Dies wird über das Menü **Anhänge** erreicht, in dem Listen der jeweiligen Ressourcen aufgefüllt und aktiviert werden können. 

Das **Menü Anhänge** befindet sich auf der Registerkarte **NLU** im Flow-Editor.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/b585fa6-attachments.PNG" width="80%" />
</figure>

Die **Anlagen**-Funktion bedeutet, dass die Duplizierung von Absichts- und Lexikonbibliotheken nicht erforderlich ist, da mehrere Flüsse entworfen werden können, um auf einzelne Bibliotheken zu verweisen.

!!! Warnung "Train Intents beim Anhängen"
    Die NLU muss jedes Mal neu trainiert werden, wenn ein neuer Flow oder ein neues Lexikon angehängt wird.

## Angehängte Flows<div class="divider"></div>Die Flow-Zuordnung ist eine optionale Funktion, die es virtuellen Agenten ermöglicht, auf die Absichten separater Flows zuzugreifen.

!!! Hinweis "Verwenden von angehängten Flows"
    Weitere Informationen zum Flow-Anhang finden Sie auf der Seite [Attached Flows]({{config.site_url}}ai/nlu/attachments/attached-flows/).

## Angehängte Lexika<div class="divider"></div>Das Anhängen eines Lexikons ist erforderlich, um der NLU beizubringen, die spezifischen Schlüsselphrasen zu verstehen, die im [Lexikon-Editor](https://docs.cognigy.com/v4.11/docs/lexicons) hinzugefügt wurden. Dies bedeutet, dass bestimmte Flows bestimmte Schlüsselwörter erkennen können, während andere dies nicht tun, was die Flexibilität Cognigy.AI virtuellen Agenten erhöht.

!!! Hinweis "Angehängte Lexika verwenden"
    Weitere Informationen zum Anhängen von Lexika finden Sie auf der [Seite Angehängte Lexika]({{config.site_url}}ai/nlu/attachments/attached-lexicons/).