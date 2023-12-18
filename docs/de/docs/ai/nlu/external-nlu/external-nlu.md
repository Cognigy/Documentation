---
 Titel: "Externe NLU" 
 Schnecke: "external-nlu" 
 ausgeblendet: false 
---
# Externe NLU

Cognigy.AI ist so eingerichtet, dass die gesamte Intent- und Slot-Zuordnung für Agenten mit der integrierten Cognigy-NLU unter Verwendung der Ressourcen verarbeitet wird, die in Flow [Intents]({{config.site_url}}ai/nlu/nlu-overview/overview/#intents) und [Lexicons]({{config.site_url}}ai/resources/build/lexicons/) definiert sind. 

Es ist jedoch auch möglich, einen externen NLU-Anbieter zu integrieren, um das Intent-Mapping innerhalb Cognigy.AI mithilfe der Funktion [NLU Connectors]({{config.site_url}}ai/resources/build/nlu-connectors/) zu verarbeiten. Diese externen NLU-Konnektoren generieren das gleiche Eingabeobjekt wie Cognigy, sodass Agenten problemlos den NLU-Anbieter wechseln können, ohne die Abläufe ändern zu müssen. 

Cognigy.AI unterstützt nativ NLU-Verbindungen mit **Dialogflow**, **LUIS**, **Watson Assistant** und **Alexa**. Jede andere NLU von Drittanbietern kann mit dem NLU-Steckverbinder vom Typ "Code" integriert werden.

## Erstellen von NLU-Konnektoren<div class="divider"></div>Um eine neue NLU-Verbindung zu erstellen, öffnen Sie einen [Agent]({{config.site_url}}ai/resources/agents/agents/) und navigieren Sie zum Menü [NLU Connectors]({{config.site_url}}ai/resources/build/nlu-connectors/), das im Ressourcenmenü auf der linken Seite der Benutzeroberfläche im Abschnitt **Build** verfügbar ist. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/8c71128-NLUConnectors_Menu.PNG" width="100%" />
</figure>

Klicken Sie in diesem Menü einfach auf die Schaltfläche "+ Neuer NLU-Konnektor", fügen Sie einen Namen für den Konnektor hinzu und wählen Sie den *NLU-Konnektortyp* aus der Dropdown-Liste aus.

Eine neue NLU-Verbindung wird der Liste der NLU-Konnektoren hinzugefügt, und standardmäßig werden die Einstellungen für den neu hinzugefügten Konnektor geöffnet. Im Falle von NLUs von Drittanbietern werden hier die Anmeldeinformationen für die Authentifizierung eingegeben, damit Cognigy.AI eine Verbindung mit dem externen NLU-Dienst herstellen können. 

!!! Hinweis "Möchten Sie erfahren, wie Sie einen externen NLU-Dienst verbinden?"
    Informationen zum Herstellen einer Verbindung mit den einzelnen unterstützten externen NLU-Diensten finden Sie in den unten aufgeführten Hilfe-Center-Artikeln:

* Alexa NLU (Artikel folgt in Kürze)
    * [Watson-Assistent: Externe NLU] (https://support.cognigy.com/hc/en-us/articles/360017484979-Watson-Assistant-External-NLU)
    * [Microsoft LUIS: Externe NLU] (https://support.cognigy.com/hc/en-us/articles/360017517319)
    * [Dialogflow: Externe NLU] (https://support.cognigy.com/hc/en-us/articles/360017466620)

!!! Warnung "Nutzung externer Dienste"
    Hinweis: Bei der Verwendung externer NLU Connectors API-Kontingentgrenzen können zusätzliche Bedingungen und/oder Gebühren anfallen.

### Testen und Bereitstellen mit einer externen NLU<div class="divider"></div>Cognigy.AI bietet Plattformbenutzern die Möglichkeit, den NLU-Dienst, der für einen bestimmten Agenten verwendet wird, sowohl während des Tests als auch während der Bereitstellung zu ersetzen.

### Testen mit einer externen NLU
---
Ein externer NLU-Dienst, der über die NLU-Konnektoren-Funktion verbunden wurde, kann zum Testen über das **Interaction Panel** verwendet werden. Öffnen Sie das Interaktionsfenster in einem Agenten und wählen Sie die Registerkarte ***Einstellungen*** aus, um auf das Dropdown-Menü ***NLU Connector*** zuzugreifen. Dieses Menü wird mit allen NLU-Konnektoren aufgefüllt, die dem Agenten hinzugefügt wurden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/017da2e-NLUConnectors_MenuIP.PNG" width="100%" />
</figure>

### Bereitstellen mit einer externen NLU
---
Ein externer NLU-Dienst, der über eine [NLU-Konnektoren]({{config.site_url}}ai/resources/build/nlu-connectors/)-Funktion verknüpft wurde, kann für die Bereitstellung auf jedem [Endpunkt]({{config.site_url}}ai/resources/deploy/endpoints/) verwendet werden, der mit einem Bereitstellungskanal kommuniziert. Auf diese Weise können verschiedene Konversationskanäle unterschiedliche NLUs verwenden, wenn sie mit demselben Agenten in Cognigy.AI verbunden sind.

Um die NLU für einen bestimmten Endpunkt zu ändern, öffnen Sie das Menü ***Endpunkte*** unter dem Untermenü ***Bereitstellen*** im Ressourcenbereich. Wählen Sie den Endpunkt aus, den Sie anpassen möchten, indem Sie darauf klicken, um das Menü mit den Endpunkteinstellungen zu öffnen. Navigieren Sie zum Abschnitt **Natural Language Understanding** der Endpunkteinstellungen und greifen Sie auf das Dropdown-Menü ***NLU Connector*** zu. Dieses Menü wird mit allen NLU-Konnektoren aufgefüllt, die dem Agenten hinzugefügt wurden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/8fb7e35-NLUEndpointSelectionDocs.PNG" width="100%" />
</figure>

Wählen Sie einen NLU-Connector aus, um den zugeordneten NLU-Dienst für alle Nachrichten zu verwenden, die über diesen Endpunkt empfangen werden.