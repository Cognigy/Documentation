---
 Titel: "Optionale Frage" 
 Slug: "Optionale-Frage" 
 ausgeblendet: false 
---
# Optionale Frage

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/message/optional-question.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Ein optionaler Frageknoten wird verwendet, um eine Frage zu stellen, die bestimmte Informationen vom Benutzer anfordert. Der Knoten kann so konfiguriert werden, dass er verschiedene Arten von Eingaben erwartet. Sobald der ausgewählte Datentyp in der Benutzereingabe erkannt wird, wird der optionale Frageknoten beantwortet.

!!! Warnung "Unterschied zum Frageknoten"
    Der Knoten **Optionale Frage** ist **nicht blockierend**. Dies bedeutet, dass der Benutzer seine Konversation mit dem Flow fortsetzen kann, wenn er keine Antwort auf die optionale Frage gegeben hat. Vor der regulären Flow-Ausführung prüft das System, ob die Benutzereingabe die optionale Frage beantwortet, um ein Ergebnis zu erhalten. Ist dies nicht der Fall, folgt die Flow-Ausführung einem anderen Pfad.<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360020609199-Cognigy-Sessions-Question-Nodes" target="_blank">Technisches Video "Question Nodes"</a>
      </div>
      <div class="callout-subtext">Sehen Sie sich diese Folge von Cognigy Sessions an, um einen technischen Einblick zu erhalten      </div>
   </div>
</blockquote>!!! info "Fragetypen"
    Es gibt verschiedene Arten von Abfragen, die Sie verwenden können, die im Folgenden ausführlich beschrieben werden:

| Typ | Erforderliche Benutzereingabe zum Beantworten der Frage |
|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Text | Beliebige Texteingabe |
| Ja / Nein | Eine positive oder negative Antwort |
| Absicht | Eine der trainierten [Intents]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/) muss aus der Antwort des Benutzers identifiziert werden |
| Spielautomat | In der Antwort des Benutzers muss ein [System Slot]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/#system-defined-slots) oder [Lexicon Slot]({{config.site_url}}ai/resources/build/lexicons/) erkannt werden. Der Slot wird durch den Namen definiert. |
| Datum | Beliebiges Datum (systemdefiniert) |
| Anzahl | Beliebige Zahl (systemdefiniert) |
| Temperatur | Beliebige Temperatur (systemdefiniert) |
| Alter | Beliebiges Alter (systemdefiniert) |
| Dauer | Beliebige Zeitdauer (systemdefiniert) |
| E-Mail | Beliebige E-Mail-Adresse (systemdefiniert) |
| Geld | Beliebiger Geldwert (systemdefiniert) |
| Internetadresse | Jeder Verweis/jede Adresse auf eine Ressource im Internet, z. B. http://example.com |
| Prozentsatz | Beliebiger Prozentsatz (systemdefiniert) |
| Regex | Jedes benutzerdefinierte Datenformat, das durch einen Regex-Ausdruck definiert wird, muss in der Antwort des Benutzers erkannt werden |
| Daten | Beliebige Dateneingabe (input.data) |

!!! info "Unterstützte Datenformate für System Defined Slots"
    Alle Datenformate, die von der Cognigy NLU für die System-Slot-Zuordnung unterstützt werden, sind auf der Seite [Slot-Zuordnung]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/) aufgeführt.
## Kanäle und Ausgangstypen<div class="divider"></div>Die Ausgabetypen des Frageknotens haben die gleiche Funktionalität wie der [**Say Node**]({{config.site_url}}ai/flow-nodes/message/say/).

!!! Erfolg "Date-Fragen"
    Falls der Fragetyp Datum ausgewählt wurde, rendert der Frageknoten automatisch eine Datumsauswahl, wenn der Kanal dies zulässt. Weitere Informationen finden Sie unter [**Datepicker**]({{config.site_url}}ai/flow-nodes/message/datepicker/). 
## Fortgeschritten<div class="divider"></div>Der optionale Frageknoten verfügt über vier erweiterte Einstellungen, die verwendet werden können.

### Detaillierte Ergebnisse speichern
Wenn diese Einstellung aktiviert ist, wird ein detaillierteres JSON-Objekt unter der result-Eigenschaft der Eingabe gespeichert. Dies ist nützlich, falls weitere Informationen benötigt werden.

### Beenden der Flow-Ausführung nach der Antwort
Wenn diese Option aktiviert ist, wird die Flow-Ausführung nach dem Fall "On answer" gestoppt und wartet auf eine weitere Eingabe.

### Frageschwelle vergessen
Der Unterschied zu einem normalen Frageknoten besteht darin, dass der optionale Frageknoten nicht beantwortet werden muss. Wenn der optionale Frageknoten ausgelöst wird und keine Antwort gegeben wird, bleibt die Tatsache, dass die Frage "gestellt" wurde, dennoch im Speicher. Mit dieser Einstellung können Sie entscheiden, für wie viele Eingaben die optionale Frage im Speicher gehalten werden soll. 

### CognigyScript-Parsen
Hiermit können Sie entscheiden, bei welcher Benutzereingabe das CognigyScript nach Answer ausgeführt werden soll.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/711c019-optional-question-advanced.jpg" width="100%" />
</figure>

## Speicherung von Ergebnissen<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c04587d-context.jpg" width="100%" />
</figure>Wenn Ergebnis im Kontext speichern aktiviert ist, wird das Frageergebnis auch im Objekt [**Context**]({{config.site_url}}ai/tools/interaction-panel/context/) gespeichert. 

## Fragen Sie Informationen in der Eingabe<div class="divider"></div>Wenn eine optionale Frage "aktiv" ist, d. h. auf eine Antwort gewartet wird, werden dem Input-Objekt Informationen über die optionale Frage hinzugefügt.

'''JSON
"activeOptionalQuestion": {
    "nodeId": "cb81db3a-6230-49e7-8ce4-12f877abe0cb",
    "type": "jaNein",
    "lastExecutedAt": 1,
    "forgetQuestionThreshold": 3
}
''' 

## KI-gestützte Ausgabe

Um die KI-gestützte Umformulierung der Bot-Ausgabe zu verwenden, lesen Sie die [Generative AI](.. /.. /generative-ai.md#rephrase-bot-outputs) Artikel.