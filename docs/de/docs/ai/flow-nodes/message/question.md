---
Titel: "Frage" 
slug: "Frage" 
ausgeblendet: false 
---
# Frage

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.55-blue.svg)] (.. /.. /.. /release-notes/4.55.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/message/question.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Ein Frageknoten wird verwendet, um eine Frage zu stellen, die bestimmte Informationen vom Benutzer anfordert. 

Nachdem eine Frage gestellt wurde und der Benutzer antwortet, wird die Antwort entsprechend ihrem Typ überprüft. Wenn sie erfolgreich ist, ist die Antwort gültig und gespeichert, und die Konversation wird fortgesetzt.

!!! Hinweis "Angehängte Flows"
    Wenn eine Benutzereingabe eingeht, wird sie von der NLU bewertet. Wenn ein angehängter Flow über ein Intent verfügt, das höher bewertet ist als Intents im aktuellen Flow, wird das angehängte Flow ausgeführt. Dies geschieht, bevor die Validierung des Fragenknotens abgeschlossen ist. Weitere Informationen finden Sie unter [Angehängter Flow](.. /.. /nlu/attachments/attached-flows.md).<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360020609199-Cognigy-Sessions-Question-Nodes" target="_blank">Technisches Video "Question Nodes"</a>
      </div>
      <div class="callout-subtext">Sehen Sie sich diese Folge von Cognigy Sessions an, um einen technischen Einblick zu erhalten      </div>
   </div>
</blockquote>## Frage-Typen<div class="divider"></div> Frageknoten verfügen über eine Auswahl von Typen, die die Validierung bestimmen, die verwendet wird, bevor eine Konversation fortgesetzt wird.

| Typ | Erwartete Benutzereingabe zur Beantwortung der Frage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Beispiel                                                             |
|--------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  ----------------------------------------------|---------------------------------------------------------------------|
| Text | Beliebige Texteingaben                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                     |
| Ja / Nein | Eine positive oder negative Antwort                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                     |
| Absicht | Einer der trainierten [Intents](.. /.. /nlu/nlu-overview/ml-intents.md) muss aus der Antwort des Benutzers identifiziert werden |                                                                     |
| Spielautomat | Ein [Systemsteckplatz](.. /.. /nlu/slot-mapping/slot-mapping.md#system-defined-slots) oder [Lexicon Slot](.. /.. /resources/build/lexicons.md) muss in der Antwort des Benutzers erkannt werden. Der Slot wird durch den Namen definiert.                                                                                                                                                                                                                                                                                                              |                                                                     |
| Datum | Beliebiges Datum (systemdefiniert)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                     |
| Anzahl | Beliebige Zahl (systemdefiniert)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                     |
| Temperatur | Beliebige Temperatur (systemdefiniert)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                     |
| Alter | Beliebiges Alter (systemdefiniert)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                     |
| Dauer | Beliebige Zeitdauer (systemdefiniert)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                     |
| E-Mail | Beliebige E-Mail-Adresse (systemdefiniert)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                     |
| Geld | Beliebiger Geldwert (systemdefiniert)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                     |
| Internetadresse | Jeder Verweis/jede Adresse auf eine Ressource im Internet, z. B. http://example.com |                                                                     |
| Prozentsatz | Beliebiger Prozentsatz (systemdefiniert)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                     |
| Regex | Jedes benutzerdefinierte Datenformat, das durch einen Regex-Ausdruck definiert wird, muss in der Antwort des Benutzers erkannt werden                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                     |
| Daten | Alle Dateneingaben (input.data)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |                                                                     |
| xApp | Beliebiger xApp-Eingang                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                     |
| Benutzerdefiniert | Beliebige Eingabe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |                                                                     |
| Muster: Nummernschild (DE) | Ein Muster für das [deutsche Kfz-Kennzeichen](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Germany). Dieses Nummernschild ist ein eindeutiges alphanumerisches Identifikationsschild, das an einem Fahrzeug angebracht ist. Es besteht aus Buchstaben, Zahlen und manchmal auch Sonderzeichen, z. B. "ö", "ä" oder "ü". Nummernschilder dienen der Identifizierung und Registrierung von Fahrzeugen und liefern wichtige Informationen wie Fahrzeugbesitz, Zulassungsdaten und die Einhaltung gesetzlicher Anforderungen.  | 'M-345', 'x1Y2Z3', 'D 12345C' |
| Muster: IBAN | Ein Muster für die Internationale Bankkontonummer (IBAN)                                                                                                                                                                                                                                                                                                                                                                                                                                                               | "DE12345678901234567890" | 
| Muster: Bank Identifier Code (BIC) | Ein Muster für den Bank Identifier Code (BIC)                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | "DEUTDEFF500" | 
| Muster: Sozialversicherungsnummer (US) | Ein Muster für die US-Sozialversicherungsnummer                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | "123-45-6789" |
| Muster: IP-Adresse (IPv4) | Ein Muster für die IPv4-Adresse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | "192.168.1.1" |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Muster: Telefonnummer | Ein Muster für die Telefonnummer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | "+49 00000000000", "49 000000000000", "+4900000000000", "(555) 000-000" |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Muster: Kreditkarte | Ein Muster für die Bankkarte                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | "4111111111111111" |                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ||

!!! Warnung "Regex"
    Stellen Sie sicher, dass der reguläre Ausdruck mit einem "/" beginnt und mit "/g" endet.

Beispiel: '/^1\d{7}$/g'

!!! Hinweis "Unterstützte Datenformate für systemdefinierte Steckplätze"
    Alle Datenformate, die von der Cognigy NLU für die System-Slot-Zuordnung unterstützt werden, sind auf der [Slot-Zuordnung](.. /.. /nlu/slot-mapping/slot-mapping.md) Seite.

## Kanäle und Ausgangstypen<div class="divider"></div>Die Ausgabetypen des Frageknotens verfügen über die gleiche Funktionalität wie der [Say-Knoten](say.md).

!!! Tipp "Date-Fragen"
    Falls der Fragetyp Datum ausgewählt wurde, rendert der Frageknoten automatisch eine Datumsauswahl, wenn der Kanal dies zulässt. Weitere Informationen finden Sie unter [Datepicker](datepicker.md). 

## Optionen für die erneute Eingabeaufforderung<div class="divider"></div>### Nachricht erneut auffordern

Erneute Eingabeaufforderung Nachrichten werden automatisch ausgelöst, wenn die Frage nicht richtig beantwortet wurde (z. B. mit dem erwarteten Eingabetyp oder eine Validierung, die nicht true zurückgegeben hat). 

Die erneute Eingabeaufforderung kann so konfiguriert werden, dass die Frage automatisch erneut gestellt wird. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/message/question-re-prompt-message.png" width="60%" />
</figure>

### Bedingung erneut auffordern

Optional kann ein [CognigyScript](.. /.. /tools/cognigy-script.md) hinzugefügt werden, die bestimmt, ob die Meldung "Erneute Eingabeaufforderung" angezeigt wird oder nicht.

### Absicht überspringen

Überspringt die erneute Eingabeaufforderung, wenn eine Absicht in der Eingabe gefunden wurde

## Speicherung von Ergebnissen<div class="divider"></div>Die Ergebnisse der Fragen werden immer in 'input.result' gespeichert.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/message/question-context.png" width="60%" />
</figure>

Wenn **Ergebnis im Kontext speichern** aktiviert ist, wird das Frageergebnis auch im Objekt [**Context**]({{config.site_url}}ai/tools/interaction-panel/context/) gespeichert. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/message/question-profile-storage.png" width="60%" />
</figure>

Wenn **Ergebnis im Kontaktprofil speichern** aktiviert ist, wird das Frageergebnis auch im Objekt [**Profil**]({{config.site_url}}ai/tools/interaction-panel/profile/) gespeichert.

## Eskalation bis zur Übergabe<div class="divider"></div>Ermöglicht es, dass die Konversation aus dem Frageknoten ausbricht, wenn eine bestimmte Absicht gefunden wurde. 

| Aktion | Beschreibung |
|-------------------------|-----------------------------------------------------------------------------------------------------|
| Nachricht ausgeben | Gibt eine Nachricht aus (entspricht einem Say-Knoten) |
| Frage überspringen | Überspringt die Frage und gibt einen bestimmten Wert in das Objekt "input.result" ein.                      |
| Gehe zu Knoten | Wechselt zu einem bestimmten Flow-Knoten und fährt von dort aus fort (entspricht Gehe zu Knoten) |
| Ausführen von Fluss und Rücklauf | Wechselt zu einem bestimmten Flow-Knoten und kehrt zur Frage nach (entspricht Execute Flow Node) |
| Übergabe an einen menschlichen Agenten | Das Gespräch wird an einen Agenten übergeben, der Ihnen helfen kann, den Frageschritt zu beenden und ihn zurückzugeben |

Fügen Sie Absichten hinzu, die die Funktion "Eskalation bei Absicht" auslösen können, indem Sie den Absichtsnamen in das Feld "Gültige Absichten" eingeben und die EINGABETASTE auf Ihrer Tastatur drücken. Passen Sie den Schieberegler für den Schwellenwert für die dedizierte Absichtsbewertung auf die bevorzugte Einstellung an, sodass die Eskalation nur erfolgt, wenn eine der aufgelisteten Absichten diese Bewertung erreicht.

## Eskalation bei falschen Antworten<div class="divider"></div>Ermöglicht es, dass die Konversation aus dem Frageknoten ausbricht, nachdem eine Reihe falscher Antworten eingegeben wurden.

| Aktion | Beschreibung |
|-------------------------|-----------------------------------------------------------------------------------------------------|
| Nachricht ausgeben | Gibt eine Nachricht aus (entspricht einem Say-Knoten) |
| Frage überspringen | Überspringt die Frage und gibt einen bestimmten Wert in das Objekt "input.result" ein.                      |
| Gehe zu Knoten | Wechselt zu einem bestimmten Flow-Knoten und fährt von dort aus fort (entspricht Gehe zu Knoten) |
| Ausführen von Fluss und Rücklauf | Wechselt zu einem bestimmten Flow-Knoten und kehrt zur Frage nach (entspricht Execute Flow Node) |
| Übergabe an einen menschlichen Agenten | Das Gespräch wird an einen Agenten übergeben, der Ihnen helfen kann, den Frageschritt zu beenden und ihn zurückzugeben |

Es ist möglich, erneute Eingabeaufforderungen zu verhindern, wenn die Eskalation stattfindet. 

Die Option "nur einmal eskalieren" legt fest, ob die Eskalation nur einmal auf der Schwelle oder auf jeder Eingabe der Schwelle erfolgt.

## Übergabe an den menschlichen Agenten

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.4.0-blue.svg)] ({{config.site_url}})<div class="divider"></div>Ab Version 4.4.0 haben wir die Option **Übergabe an menschlichen Agenten** hinzugefügt. Öffnen Sie den **Node-Editor** und Sie finden diese Option als Eskalationsaktion für Intents und Wrong_Answers, die die Möglichkeit bietet, Fragen zu eskalieren, indem Übergaben an einen echten menschlichen Agenten erstellt werden.  
Wenn diese Eskalation erreicht ist, wird das Gespräch an einen Agenten übergeben, der Ihnen dann helfen kann, den Frageschritt zu beenden und ihn zurückzugeben.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/message/question-escalation-to-handover.png" width="60%" />
</figure>

## Einstellungen für die erneute Bestätigung<div class="divider"></div>Ermöglicht es, Antworten erneut zu bestätigen, bevor Sie fortfahren. Dies ist besonders nützlich, wenn Sie Voice-Bots verwenden und erneut bestätigen, was der Bot verstanden hat
(z. B. in Zahlenfragen, wenn der Benutzer sagt: "_my Zahl ist drei, doppelt, fünf, drei, neun, fünf, sechs, eight_").
Die Antwort auf die Rückbestätigungsfrage
als Ja/Nein-Antwort und folgt den gleichen Regeln wie eine Ja/Nein-Frage.

Rückbestätigungsfragen können eine bestimmte symbolische "ANTWORT" enthalten, die durch eine Kurzform der gegebenen Antwort ersetzt wird (z. B. "3 EUR" in einer Geldfrage). Die Kurzform der Antwort stammt aus 'input.activeQuestion.tentativeShortFormAnswer';

Für Rückbestätigungsfragen kann eine bestimmte erneute Eingabeaufforderung festgelegt werden, die vor der Frage ausgegeben wird, wenn die Antwort auf die Frage nicht im Ja/Nein-Stil ist.

## Fortgeschritten<div class="divider"></div>Der Frageknoten verfügt über zwei erweiterte Einstellungen, die verwendet werden können.

### Detaillierte Ergebnisse speichern

Wenn diese Einstellung aktiviert ist, wird ein detaillierteres JSON-Objekt unter der result-Eigenschaft der Eingabe gespeichert. Dies ist nützlich, falls weitere Informationen benötigt werden.

### Überspringen, wenn Antwort in Eingabe

Wenn diese Einstellung aktiviert ist, wird die Frage übersprungen, wenn die Antwort bereits im Eingabetext enthalten ist.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/message/question-skip-if-answer-in-input.png" width="60%" />
</figure>

### Zusätzliche Validierung

Ein [CognigyScript](.. /.. /tools/cognigy-script.md), die 'true' zurückgeben muss, damit die Antwort als gültig angesehen wird. Ein Beispiel wäre eine zusätzliche Validierung für eine E-Mail-Frage von 'input.slots.EMAIL[0].endsWith("cognigy.com")', die garantieren würde, dass nur cognigy.com E-Mail-Adressen die Validierung bestehen.

### Position des Ergebnisses

Die Position einer Antwort wird standardmäßig durch den Fragetyp bestimmt (z. B. "input.slots.EMAIL[0]" für E-Mail-Fragen). Dies kann mit dieser Einstellung überschrieben werden (z. B. würde 'input.slots.EMAIL' alle gefundenen E-Mail-Slots speichern). Wenn die Ergebnisposition keinen Wert zurückgibt (= ist falsch), wird die Antwort als ungültig betrachtet.

### Frageschwelle vergessen

Diese Einstellung legt fest, wie lange ein Benutzer vom Node "abwesend" gewesen sein kann, nachdem die Frage zum ersten Mal gestellt wurde. Bei der Standardeinstellung '1' bedeutet dies, dass die Frage bei der nächsten Benutzereingabe beantwortet werden muss. Wenn eine Benutzereingabe zu einem späteren Zeitpunkt auf die Frage zurückkommt, wird sie so behandelt, als ob die Frage zum ersten Mal getroffen wurde, und die Frage wird gestellt.<div class="divider"></div>!!! Warnung "Question Nodes und Intent Execution"
    Question Nodes werden - standardmäßig - immer wieder ausgelöst, bis eine gültige Antwort gegeben wurde. Um dies zu vermeiden, können Sie sich für eine [**Optionale Frage**]({{config.site_url}}ai/flow-nodes/message/optionale-frage/) entscheiden oder die Einstellung **Intent Execution** ändern.

!!! Tipp "Schlitzfüller"
    Fragen können mit **Slot Fillern** kombiniert werden, um ein sogenanntes "Missing Pattern" zu erstellen. Dieser Mechanismus fragt den Benutzer auf sehr natürliche Weise nach den fehlenden Informationen, bis alle Fragen beantwortet sind.

## Fragen Sie Informationen in der Eingabe<div class="divider"></div>Wenn eine Frage "aktiv" ist, d. h. auf eine Antwort gewartet wird, werden dem Input-Objekt Informationen über die Frage hinzugefügt.

'''JSON
"activeQuestion": {
    "nodeId": "18b158bf-71a3-4d4f-a31f-812b1810f8af",
    "type": "jaNein",
    "lastExecutedAt": 2,
    "forgetQuestionThreshold": 1,
    "repromptCount": 1,
    "escalationCount": 0
}
''' 

Diese Informationen können verwendet werden, um bei einer Eskalation bestimmte Aktionen auszulösen oder nach einer Eskalation zurück zum Question Node zu springen.

## KI-gestützte Ausgabe

Um die KI-gestützte Umformulierung der Bot-Ausgabe zu verwenden, lesen Sie die [Generative AI](.. /.. /generative-ai.md#rephrase-bot-outputs) Artikel.

## Vorverarbeitung von Antworten

Sie können verschiedene Funktionen des [Text Cleaner](.. /.. /.. /ai/tools/text-cleaner.md), um die Antwort auf eine Frage vorzuverarbeiten, bevor sie ausgewertet wird. Dies kann z. B. hilfreich sein, wenn Sie einen Namen mit einer Frage vom Typ "Text" oder eine Teilenummer mit einer Frage vom Typ "Slot" anfordern.

Zusätzlich zu den Textbereinigungsfunktionen haben Benutzer die Möglichkeit, NLU nach dem Bereinigungsvorgang erneut auszuführen. Dieser Ansatz ermöglicht Aufgaben wie das erneute Erkennen von Slots oder das ordnungsgemäße Füllen von verbleibenden Slots.