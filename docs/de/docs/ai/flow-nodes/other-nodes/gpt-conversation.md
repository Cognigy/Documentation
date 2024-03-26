---
Titel: "GPT Conversation"
Slug: "GPT-Konversation"
ausgeblendet: false
---

# GPT-Konversation (Forschungsvorschau)

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.48(Forschungsvorschau)-lila.svg)] (.. /.. /.. /release-notes/4.48.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/gpt-conversation.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>!!! Warnung
    Dieser Node ist Teil der Forschungsbemühungen von Cognigy im Bereich der großen Sprachmodelle und dient ausschließlich als Vorschaufunktion. Der GPT-Konversationsknoten ist nicht für die Verwendung in der Produktion vorgesehen.

Der GPT Conversation Node verarbeitet und versteht natürlichsprachliche Eingaben von Benutzern und nutzt diese Eingaben, um relevante und kontextuell angemessene Antworten zu generieren. Die Node-Konfiguration umfasst die Definition einer Persona, eines Wissens und einer Aufgabe für den Bot, sodass er KI-basierte Antworten auf Benutzereingaben generieren und Aktionen auslösen kann. Der GPT-Konversationsknoten kann die gesamte Konversation mithilfe von Large Language Models (LLMs) unterstützen.

Bevor Sie diesen Node verwenden, legen Sie den Generative AI-Anbieter in den [Einstellungen](.. /.. /generative-ai.md#set-up-generative-ai).

## Einstellungen

### Modus

Wählen Sie einen der folgenden Modi aus:

- **QnA** – konzentriert sich auf die Beantwortung von Benutzerfragen, die auf bereits vorhandenen Kenntnissen des Gesprächsthemas basieren.
- **Transaktional** – konzentriert sich auf die Beantwortung von Benutzerfragen auf der Grundlage bereits vorhandener Kenntnisse des Gesprächsthemas und der strikten Abfolge der Schritte des virtuellen Agenten. In diesem Modus können Sie eine Aktion aufrufen, die in der Flow-Logik nach dem GPT-Konversationsknoten behandelt werden soll. Sie können die Schaltfläche [Lookup](.. /logic/lookup.md) und [If](.. /logic/if.md) Knoten, um zu überprüfen, ob der Kontext über die Aktion verfügt, und dann eine bestimmte Aufgabe entsprechend auszuführen, z. B. eine HTTP-Anforderung zu erstellen.

### Persona

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                                                               |
|---------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Firmenname | CognigyScript | Der Name des Unternehmens.                                                                                                                                                                                                                                                                                                                  |
| Unternehmensbeschreibung | CognigyScript | Aktuelle Aktivitäten des Unternehmens: Was macht Ihr Unternehmen?                                                                                                                                                                                                                                                                                 |
| Bot-Name | CognigyScript | Der Name des virtuellen Agenten.                                                                                                                                                                                                                                                                                                            |
| Charakter | Text | Die Charaktereigenschaften des virtuellen Agenten. Ist der virtuelle Agent beispielsweise "professionell" oder "geduldig"? Geben Sie Sätze ein, die die Persönlichkeit Ihres Agenten beschreiben.                                                                                                                                                                           |
| Strenge | Wählen Sie | Der Grad der Befolgung, der vom virtuellen Agenten in Bezug auf die Aufgabe erwartet wird: <br/> - Trivia und Smalltalk – einschließlich Trivia und Smalltalk. <br> - Halten Sie sich an die Aufgabe – halten Sie sich strikt an die Aufgabe. <br> - Etwas Smalltalk – etwas Smalltalk einbeziehen. <br> - Völlig freier Stil – völlig freie Konversation. |

### Aufgaben-Einstellungen

Nur im Transaktionsmodus verfügbar.

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                                                      |
|-----------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bot-Aufgabe | CognigyScript | Task für den virtuellen Agenten. Beispiele: Termin buchen, Flug umbuchen, Produkt bestellen.                                                                                                                                                                                                                                     |
| Schritte | CognigyScript | Beschreibung der Aufgabenschritte.                                                                                                                                                                                                                                                                                                       |
| Step Analytics-Labels | Text | Bezeichnungen der Schritte, die in der Analyse verwendet werden sollen.                                                                                                                                                                                                                                                                                     |
| Slots zum Sammeln | Text | Die Schlüssel der zu sammelnden Slots |
| Verfügbare Aktionen | Text | Aktionen, die der virtuelle Agent auslösen kann. Sie können diese Aktionen in der [Suche](.. /logic/lookup.md) oder [If](.. /logic/if.md) Knoten, um zu überprüfen, ob der Kontext über die Aktion verfügt, und dann eine bestimmte Aufgabe entsprechend auszuführen, z. B. eine HTTP-Anforderung zu erstellen. Weitere Informationen finden Sie unter [Spezifisches Beispiel](#specific-Beispiel). |
| Weitere Informationen | CognigyScript | Zusätzliche Informationen für den virtuellen Agenten, z. B. Themen, die während des Gesprächs vermieden werden sollten.                                                                                                                                                                                                                     |

### Erdung

| Parameter | Typ | Beschreibung |
|---------------------|---------------|----------------------------------------------------------------------------------|
| Wissen auf der Grundlage | CognigyScript | Wissen, das dem virtuellen Agenten hilft, eine sachliche Antwort zu erstellen. Optionales Feld.    |
| Eingespritzte Steckplätze | CognigyScript | Slots, die Sie an den virtuellen Agenten senden möchten. Wird an die Benutzereingabe angehängt. |

### Fortgeschritten

| Parameter | Typ | Beschreibung |
|-------------------|-----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Temperatur | Indikator | Die geeignete Probenahmetemperatur für das Modell. Höhere Werte bedeuten, dass das Modell mehr Risiken eingeht.                                                                                        |
| Maximale Anzahl an Token | Indikator | Die maximale Anzahl von Token, die beim Abschluss generiert werden sollen.                                                                                                                                   |
| Anwesenheitsstrafe | Indikator | Zahl zwischen -2,0 und 2,0. Positive Werte bestrafen neue Token basierend darauf, ob sie bisher im Text erschienen sind, und erhöhen die Wahrscheinlichkeit, dass das Modell über neue Themen spricht.              |
| Häufigkeits-Strafe | Indikator | Zahl zwischen -2,0 und 2,0. Die Strafe weist Token, die häufig im generierten Text vorkommen, eine geringere Wahrscheinlichkeit zu und ermutigt das Modell, vielfältigere und einzigartigere Inhalte zu generieren. |
| Stopps verwenden | Umschalten | Gibt an, ob eine Liste von Stoppwörtern verwendet werden soll, um Generative AI wissen zu lassen, wo der Satz endet.                                                                                                       |
| Haltestellen | Text | Bis zu 4 Sequenzen, in denen die API keine weiteren Token mehr generiert. Der zurückgegebene Text enthält nicht die Stoppsequenz.                                                                    |

### Timeout-Einstellungen

| Parameter | Typ | Beschreibung |
|-----------------|---------------|--------------------------------------------------------------------------------------------|
| Zeitüberschreitung | Selektor | Die maximale Anzahl von Millisekunden, die auf eine Antwort des generativen KI-Anbieters gewartet werden soll. |
| Zeitüberschreitungsmeldung | CognigyScript | Die Meldung, die ausgegeben werden soll, wenn die Zeitüberschreitung erreicht wird.                                               |

## Beispiele

### Allgemeines Beispiel

Dieses Video zeigt ein Live-Beispiel, wie der GPT Conversation Node Text basierend auf der Benutzereingabe generieren kann.<div style="text-align:center;">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/WKJO4_JfIFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>Nach 0:12 Sekunden erhält der Benutzer die erwartete Antwort vom virtuellen Agenten in Form eines generierten Conversational AI-Textes:

'''text
Es tut mir leid, von dem Notfall zu hören, <user name="">. 
Können Sie mir Ihre Ticketnummer mitteilen? 
damit ich Ihnen helfen kann, so schnell wie möglich nach London zu kommen? 
Vielen Dank.
'''

### Konkretes Beispiel

Im Transaktionsmodus können Sie die Schaltfläche [Lookup](.. /logic/lookup.md) oder [If](.. /logic/if.md), um eine Ablauflogik fortzusetzen. 

Für beide Knoten müssen Sie die Aktion im Feld **Verfügbare Aktionen** des GPT-Konversationsknotens angeben. Wählen Sie dazu den Knoten aus:

=== "Nachschlagen"

1. Gehen Sie zum GPT-Konversationsknoten, wählen Sie den **Transaktionsmodus** aus und überprüfen Sie, ob der Parameter 'checkAppointment' im Feld **Verfügbare Aktionen** vorhanden ist. Ist dies nicht der Fall, fügen Sie diesen Wert hinzu und kopieren Sie ihn. 
      2. Fügen Sie nach dem GPT-Konversationsknoten den Knoten **Lookup** hinzu. 
      3. Wechseln Sie zum Knoten **Lookup**:<br>3.1 Wählen Sie **CognigyScript** aus der Liste **Typ** aus.<br>3.2 Geben Sie 'context.action' in das Feld **Operator** ein.<br>3.3 Klicken Sie auf **Knoten speichern**.
           <figure>
           <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/gpt-conversation-lookup.png" width="80%" />
         </figure>
      4. Wechseln Sie zum Fall des Lookup-Knotens:<br>4.1 Fügen Sie 'checkAppointment' in das Feld **Wert** ein.<br>4.2 Klicken Sie auf **Knoten speichern**.
       <figure>
           <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/gpt-conversation-lookup-case.png" width="80%" />
         </figure>
      5. Fügen Sie im Flow-Editor den zusätzlichen Say-Knoten mit der Ausgabe vom Typ **Text** hinzu. Sie können auch den HTTP-Knoten verwenden.
      6. Testen Sie diesen Ablauf über das Interaktionsfenster.

=== "WENN"

1. Gehen Sie zum GPT-Konversationsknoten, wählen Sie den **Transaktionsmodus** aus und überprüfen Sie, ob der Parameter 'checkAppointment' im Feld **Verfügbare Aktionen** vorhanden ist. Ist dies nicht der Fall, fügen Sie diesen Wert hinzu und kopieren Sie ihn.
      2. Fügen Sie nach dem GPT-Konversationsknoten den IF-Knoten hinzu.
      3. Gehen Sie zum Knoten **IF**:<br>3.1 Wählen Sie **CognigyScript** aus der Liste **Typ** aus.<br>3.2 Geben Sie 'context.action === "checkAppointment"' in das Feld **Bedingung** ein.<br>3.3 Wählen Sie **existiert** aus der Liste aus.
         3.4 Klicken Sie auf **Knoten speichern**.
         <figure>
           <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/gpt-conversation-if.png" width="80%" />
         </figure>
      4. Fügen Sie im Flow-Editor den zusätzlichen Say-Knoten mit der Ausgabe vom Typ **Text** hinzu. Sie können auch den HTTP-Knoten verwenden.
      5. Testen Sie diesen Ablauf über das Interaktionsfenster.

## Mehr Informationen

- [Generative KI](.. /.. /generative-ai.md)
- [LLM-Eingabeaufforderungsknoten](llm-prompt.md)</user>