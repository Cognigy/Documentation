---
 Titel: "Angehängtes Lexikon" 
 Schnecke: "Angehängte-Lexika" 
 ausgeblendet: false 
---
# Angehängtes Lexikon

Mit der Funktion "Lexikonanhang" können einzelne Lexikonbibliotheken für alle Cognigy.AI Agenten wiederverwendet werden. Lexika können einfach an einzelne oder mehrere Flows angehängt werden, um benutzerdefinierte Schlüsselwörter zu erkennen.

Um ein Lexikon anzuhängen, muss es zunächst im [Lexicons Editor]({{config.site_url}}ai/resources/build/lexicons/) erstellt werden. Alle verfügbaren Lexika, die dem Agenten hinzugefügt wurden, werden in die Liste *Lexikon anhängen* eingetragen.

## Angehängte Lexika verwalten<div class="divider"></div>### Zugriff auf das Menü "Anhang"

Wählen Sie im Flow-Editor im oberen Menü die Registerkarte **NLU** und dann die Unterregisterkarte **Anhänge** aus, um das Menü Anhänge zu öffnen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/49cf615-attachFlowsMenu.PNG" width="100%" />
</figure>

### Ein Lexikon anhängen

Lexika werden angehängt, indem Sie auf das Lexikon in der Liste klicken, wodurch der Schalter für Anhänge aktiviert wird.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/3285852-attachLexicons.PNG" width="100%" />
</figure>

!!! Warnung "Train Intents beim Anhängen"
    Die NLU muss jedes Mal neu trainiert werden, wenn ein neuer Flow oder ein neues Lexikon angehängt wird.