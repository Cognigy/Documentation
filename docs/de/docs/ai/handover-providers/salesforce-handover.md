---
Titel: "Salesforce Service Cloud" 
Slug: "Salesforce-Übergabe" 
description: "Cognigy hat sich nahtlos in Salesforce integriert und als zusätzlichen Übergabeanbieter hinzugefügt. Diese Integration ermöglicht es Benutzern, mühelos mit menschlichen Agenten in Kontakt zu treten, die die Salesforce Service Cloud als Contact Center nutzen."
ausgeblendet: false 
---
# Salesforce Service Cloud

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.55.1-blue.svg)] (.. /.. /release-notes/4.55.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/salesforce.svg" width="100%" />
  <figcaption>Salesforce Service Cloud </figcaption>
</figure>

## Beschreibung<div class="divider"></div>Cognigy hat **Salesforce** als zusätzlichen Übergabeanbieter integriert,
, die verwendet werden kann, um Benutzer mit menschlichen Agenten zu verbinden, die Salesforce Service Cloud als Contact Center verwenden.

Weitere Informationen zu Übergaben finden Sie unter [Agentenübergabe](overview.md).

## Einrichtung<div class="divider"></div>Gehen Sie folgendermaßen vor, um Salesforce als Übergabeanbieter mit Cognigy.AI zu verwenden:

1. [Anmelden](https://login.salesforce.com/) bei Salesforce.
2. Wenn in Salesforce keine Chat-Bereitstellung verfügbar ist, erstellen Sie mithilfe der folgenden Anleitungen eine neue: [Erstellen einer einfachen Chat-Implementierung](https://help.salesforce.com/s/articleView?id=sf.live_agent_set_up_basic_implementation.htm) und [Erstellen von Chat-Bereitstellungen](https://help.salesforce.com/s/articleView?id=sf.live_agent_create_deployments.htm).

### Erstellen eines Endpunkts

1. Wechseln Sie zu **Bereitstellen > Endpunkte**.
2. Öffnen Sie den Endpunkt, an dem Sie die Übergabe an Salesforce aktivieren möchten.
3. Scrollen Sie nach unten zu **Übergabeeinstellungen** und wählen Sie **Salesforce** aus der Liste **Übergabeplattform** aus.
4. Füllen Sie die folgenden Felder aus:
    - **Live Agent Base URL** – die Basis-URL, die Sie aus der Salesforce-Installation abrufen müssen.
      Navigieren Sie auf der Seite **Startseite** zu **Funktionseinstellungen > Dienst > Chat > Chateinstellungen**.
      Navigieren Sie auf der Seite **Chateinstellungen** zu **API-Informationen > Chat-API-Endpunkt**.
      Kopieren Sie den Endpoint-Wert ohne den Teil "/chat/rest", z. B. "https://x.xxx-xx-xxx.salesforceliveagent.com".
    - **API-Version** — der Wert der API-Version ist '52'.
    - **Organisations-ID** – die ID Ihrer Organisation in Salesforce.
    - **Bereitstellungs-ID** – die ID Ihrer Bereitstellung in Salesforce.
    - **Schaltflächen-ID** – die ID Ihrer Schaltfläche für die zugehörige Bereitstellung in Salesforce.<br><br>Wechseln Sie zur Salesforce-Installation, um die Organisations-ID, die Bereitstellungs-ID und die Schaltflächen-ID abzurufen.
      Navigieren Sie zu **Featureeinstellungen > Service > Embedded Service > Embedded Service Deployments**.
      Klicken Sie in der Rohdatei mit der Bereitstellung, die Sie verwenden möchten, auf die Schaltfläche **3 weitere Aktionen anzeigen**, und wählen Sie dann **Ansicht** aus.
      Klicken Sie im Abschnitt **Codeausschnitte für eingebettete Dienste** auf **Code abrufen**.
      Es öffnet sich ein Dialog mit einem Code-Snippet.
      Suchen Sie im Codeausschnitt nach dem folgenden Teil, und kopieren Sie die kommentierten Werte aus dem Codeausschnitt in die Endpunkteinstellungen.
      Lassen Sie die '''''-Markierungen weg.      <br>'''Javascript
          embedded_svc.init(
              "https://..."
              "https://...",
              gslbBaseURL
              '<your-organization-id>', // Kopieren Sie die Organisations-ID
              '...',
              {
                  baseLiveAgentContentURL: '...',
                  deploymentId: '<your-deployment-id>', // Kopieren der Bereitstellungs-ID
                  buttonId: '<your-button-id>', // Kopiere die Button-ID
              }
          );
          '''

5. _(Optional)_ Aktivieren Sie die Einstellung **Ereignisse an den Flow weiterleiten**. Diese Einstellung leitet jedes Ereignis an den Flow weiter, was im Fall von Ereignissen eines Übergabestatus-Suchknotens behandelt werden kann. Agentenantworten und Ereignisse vom Typ "Konversation geschlossen" werden nicht weitergeleitet.
6. Klicken Sie auf **Speichern**.

### Übergabeeinstellungen konfigurieren

Wählen Sie in den Salesforce-Einstellungen der [Übergabe an den Agenten](.. /tools/agent-handover.md) Knoten,
Konfigurieren Sie die folgenden Einstellungen:

- **Transkript als erste Nachricht senden** – Die Einstellung ermöglicht es Salesforce, das Transkript der Konversation als erste Nachricht zu empfangen. Sie ist standardmäßig deaktiviert.
- **Schaltflächen-ID** – die ID der Schaltfläche, die Sie in der Salesforce-Installation erstellt haben. Diese Einstellung überschreibt die Standard-Schaltflächen-ID, die Sie in der [Endpunktkonfiguration](#create-an-endpoint) angegeben haben. Sie können unterschiedliche Schaltflächen-IDs für die individuelle Übergabe an Agentenknoten verwenden.
- **Pre-Chat-Entitäten und -Details** – der zusätzliche Kontext, der in einer benutzerdefinierten JSON-Struktur gesendet wird und die Informationen bereitstellt, bevor er mit dem menschlichen Agenten in Kontakt tritt. Weitere Informationen finden Sie im Abschnitt [Entitäten und Details vor dem Chat](#pre-chat-details).

#### Entitäten und Details vor dem Chat

Cognigy.AI sendet standardmäßig den Konversationsverlauf, der den gesamten Chat zwischen dem Benutzer und dem Agenten enthält. 
Sie wird angezeigt, wenn der Agent die erste Nachricht vom Benutzer erhält
und finden Sie auf der Registerkarte **Transkripte** der Salesforce Service Console im Abschnitt **Transkript > Details > Transkript > Text**.

Darüber hinaus ermöglicht Cognigy.AI Benutzern, Pre-Chat-Details und Pre-Chat-Entities-Arrays als benutzerdefinierte JSON-Struktur zu senden.
Diese Funktion ermöglicht es Benutzern,
, um zusätzlichen Kontext oder relevante Informationen einzubeziehen, bevor Sie den Chat mit dem menschlichen Agenten initiieren.
Diese Informationen können dann für die weitere Verarbeitung oder Personalisierung der Konversation auf der Grundlage der bereitgestellten Details verwendet werden.

##### Entitäten vor dem Chat

Cognigy.AI ermöglicht die Erstellung von Feldern
und das Verknüpfen von Benutzerdaten, die über Pre-Chat-Details erhalten wurden, mit Salesforce-Entitäten wie Kontakt oder Fall.

Zu diesem Zweck müssen Sie das Array "Pre-Chat-Entitäten" an die Live-Chat-Sitzung in Salesforce senden.

Das JSON-Beispiel zeigt, wie Sie die Konversation mit einem Fall verbinden und Pre-Chat-Details verwenden:

'''json
[
   {
         "entityName":"Kontakt",         
         "saveToTranscript": "Kontakt",
         "linkToEntityName":"Groß-/Kleinschreibung",
         "linkToEntityField":"Kontakt-ID",
         "showOnCreate":true,          
         "entityFieldsMaps":[
             {
               "fieldName":"Nachname",
               "label":"Nachname",
               "doFind":wahr,
               "isExactMatch":true,
               "doCreate":true
            },
            {
               "fieldName":"Vorname",
               "label":"Vorname",
               "doFind":wahr,
               "isExactMatch":true,
               "doCreate":true
            },
            {
               "fieldName":"E-Mail",
               "label":"E-Mail",
               "doFind":wahr,
               "isExactMatch":true,
               "doCreate":true
            }          
         ]
      }   
   ]
'''

##### Details vor dem Chat

Cognigy.AI ermöglicht das Senden von Konversationsinformationen an Salesforce Live Agent mithilfe von Pre-Chat-Details.

Durch die Verwendung des entityMaps-Felds können diese Informationen bestimmten Pre-Chat-Entitätsfeldern zugeordnet werden.

Cognigy Script kann Werte aus Cognigy-Eingabe-, Profil- und Kontextobjekten abrufen, bevor die Daten gesendet werden.

'''json
[
       {
         "label":"Nachname",
         "value":"Mustermann",
         "entityMaps":[
            {
               "entityName":"Kontakt",
               "fieldName":"Nachname"
            }
         ],
         "transcriptFields":[
            "LastName__c"
         ],
         "displayToAgent":true
      },
      {
         "label":"Vorname",
         "value":"Max",
         "entityMaps":[
            {
               "entityName":"Kontakt",
               "fieldName":"Vorname"
            }
         ],
         "transcriptFields":[
            "FirstName__c"
         ],
         "displayToAgent":true
      },
      {
         "label":"E-Mail",
         "value":"max.mustermann@mail.de",
         "entityMaps":[
            {
               "entityName":"Kontakt",
               "fieldName":"E-Mail"
            }
         ],
         "transcriptFields":[
            "Email__c"
         ],
         "displayToAgent":true
      }
   ]
'''

Weitere Informationen zu den Feldern "Pre-Chat-Entitäten" und "Pre-Chat-Details" und deren Verwendung finden Sie unter
Lesen Sie die [Salesforce-API-Dokumentation](https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm#CustomDetail). 

Um die Übergabe zu überprüfen, wechseln Sie zu der Installation, die Ihr Serveradministrator bereitgestellt hat.
</your-button-id></your-deployment-id></your-organization-id>