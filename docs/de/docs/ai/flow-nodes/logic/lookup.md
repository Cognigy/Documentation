---
title: "Lookup" 
Schnecke: "Nachschlagen" 
ausgeblendet: false 
---
# Nachschlagen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.58-blue.svg)] (.. /.. /.. /release-notes/4.58.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/lookup.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Ein **Lookup-Knoten** wird verwendet, um verschiedene Flow-Pfade basierend auf einem ausgewählten Operanden zu erstellen.

Der 'Operand' kann manuell auf 'Intent', 'State', 'Type' und 'Mode' gesetzt werden, oder auf ein benutzerdefiniertes 'CognigyScript'. In den angehängten Fallknoten werden die spezifischen Werte für den ausgewählten Operanden eingetragen. Der Operand wird während der Ausführung des Flows ausgewertet, und das Ergebnis wird mit den Werten der einzelnen Fälle verglichen. Wenn es eine Übereinstimmung gibt, wird der Flow-Pfad des übereinstimmenden Falls ausgeführt. Wenn es keine Übereinstimmung mit der Groß-/Kleinschreibung gibt, wird der Pfad des **Default Node** ausgeführt.

Wenn Sie CognigyScript als Operanden auswählen, müssen Sie ein direktes CognigyScript verwenden, das dem [If-Knoten](.. /logic/if.md). Sie können auch auswählen, ob das CognigyScript als Zeichenfolge analysiert werden soll oder nicht.

!!! Warnung "Groß-/Kleinschreibung beachten"
    Bei allen Lookup-Case-Knoten wird zwischen Groß- und Kleinschreibung unterschieden. Achten Sie darauf, die richtige Groß- oder Kleinschreibung im Feld **Wert** Ihrer Fallknoten zu verwenden.

### Eine Alternative zu verschachtelten IF-Knoten

**Nachschlageknoten** werden verwendet, wenn die Anzahl der möglichen Optionen zu groß wird, um If-Knoten zu verwenden. 

Anstatt if 'input.intent === "orderFood"' then x, else -> 'input.intent === "orderDrink"', else -> 'input.intent === "askHelp"', else ..., zu sagen, können Sie einfach ein **Lookup on Intent** mit mehreren Fällen ('orderFood', 'orderDrink', 'askHelp') und einem Standardwert verwenden.

## Typ der Suche<div class="divider"></div>### Absicht 

Dies ist die Standardeinstellung für den **Lookup-Knoten** und ermöglicht es Ihnen, die ausgelöste Absicht einfach nachzuschlagen. 

Standardmäßig wird die Absicht am detailliertesten **[Absichtshierarchie](.. /.. /nlu/nlu-overview/intent-hierarchy.md)** übereinstimmt. In diesem Fall sind die Intents aller drei Ebenen im Dropdown-Menü Intent der Case Nodes auswählbar.

Sie können aber auch über das Dropdown "Intent Level" eine Ebene auswählen, wenn Intents nur auf einer bestimmten Hierarchieebene abgeglichen werden sollen.
In diesem Fall können nur die Intents der gewählten Ebene im Dropdown-Menü Intent der Case Nodes ausgewählt werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/lookup-intent.png" width="100%" />
  <figcaption>Ein Suchknoten vom Typ "Intent" mit 3 Fällen</figcaption>
</figure>

!!! Hinweis "Möchten Sie mehr über die Verwendung von Intents erfahren?"
    Weitere Informationen zum Erstellen von Flows mit Absichten finden Sie auf der **[NLU-Übersichtsseite](.. /.. /nlu/nlu-overview/overview.md)**.

### Text

Wenn Sie den Suchtyp in **Text** ändern, wählt der Flow eine Groß-/Kleinschreibung aus, die dem Wert von "input.text" entspricht. Die Fallwerte müssen für diese Art der Suche manuell geschrieben werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/lookup-text.png" width="100%" />
  <figcaption>Ein Nachschlageknoten vom Typ Text mit 2 Fällen</figcaption>
</figure>

### Zustand

Durch Ändern des Suchtyps in **[State](.. /.. /tools/interaction-panel/state.md)** wählen, wählt der Flow einen Fall aus, der dem Wert von 'input.state' entspricht. Die Fallwerte müssen für diese Art der Suche manuell geschrieben werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/lookup-state.png" width="100%" />
  <figcaption>Ein Suchknoten vom Typ Status mit 3 Fällen</figcaption>
</figure>

!!! Notiz "Was ist Staat??"
    Zustände erlauben das Festlegen von Einschränkungen für eine Konversation, die die gültigen Absichten einschränken, auf die die NLU Zugriff hat. Weitere Informationen finden Sie auf der **[States Page]({{config.site_url}}ai/tools/interaction-panel/state/)**.

### Typ

Wenn Sie den Suchtyp in **Type** ändern, wählt der Flow eine Groß-/Kleinschreibung aus, die dem Wert von "input.type" entspricht. Die Fallwerte müssen für diese Art der Suche manuell geschrieben werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/lookup-type.png" width="100%" />
  <figcaption>Ein Type Lookup Node mit 3 Fällen</figcaption>
</figure>

!!! Hinweis "Was ist Typ?"
    Der **Typ** ist definiert als eine Klassifizierung der letzten Benutzernachricht, die von der NLU festgelegt wird. Der Typ ist eine [Input]({{config.site_url}}ai/tools/interaction-panel/input/)-Variable, die einen der folgenden Werte annehmen kann: *Statement, Command, Greeting, BGreeting, whQuestion, howQuestion, ynQuestion, pAnswer oder nAnswer.* 

### Modus

Wenn Sie den Suchtyp in **Mode** ändern, wählt der Flow einen Fall aus, der dem Wert von "input.mode" entspricht. Die Fallwerte müssen für diese Art der Suche manuell geschrieben werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/lookup-mode.png" width="100%" />
  <figcaption>Ein Lookup-Knoten vom Typ Modus mit 2 Fällen</figcaption>
</figure>

!!! Hinweis "Was ist der Modus?"
    Der **Modus** gibt Auskunft darüber, was in der letzten Benutzernachricht enthalten war. Der Typ ist eine [Input]({{config.site_url}}ai/tools/interaction-panel/input/)-Variable, die einen der folgenden Werte annehmen kann: *TextOnly oder TextData.* (Nur-Daten-Nachrichten haben einen implizit definierten Text, der 'DATA_ONLY_MESSAGE_' gefolgt von einer zufällig generierten Zeichenfolge von 20 Zeichen enthält)

### Status der Übergabe

Wenn Sie den Suchtyp in **Übergabestatus** ändern, wählt der Flow einen Fall aus, der dem Wert von "input.handover.status" entspricht. Die case-Werte müssen manuell für den Typ der Suche geschrieben werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/lookup-handover-status.png" width="100%" />
  <figcaption>Ein Suchknoten vom Typ "Übergabestatus" mit 4 Fällen</figcaption>
</figure>

Die folgende Tabelle zeigt die Übergabestatus, die Sie im Fallknoten auswählen können.

| Status | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Einschränkungen                                                                                                                                                                                                                                                |
|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  -------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Abgeschlossen | Konversationen werden erfolgreich gelöst. Agentenunterstützung wird angeboten.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | -                                                                                                                                                                                                                                                           |
| Abgesagt | Unterhaltungen werden von Benutzern beendet, was auf eine Beendigung vor der Lösung hinweist.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | -                                                                                                                                                                                                                                                           |
| Fehler | Gespräche stoßen auf Probleme. Diese Probleme können technischer, kommunikativer Natur sein oder mit Fehlinformationen zusammenhängen. Menschliche Agenten arbeiten daran, das Problem zu beheben und das Gespräch wieder in die gewünschte Richtung zu lenken.                                                                                                                                                                                                                                                                                                                                           | -                                                                                                                                                                                                                                                           |
| Veranstaltungen | Unterhaltungen werden durch bestimmte Ereignisse ausgelöst, die für die Konversation von Bedeutung sind. Dabei kann es sich um zeitkritische Ereignisse, wichtige Aktualisierungen oder Eingabeaufforderungen handeln, die die Richtung der Konversation vorgeben oder zusätzlichen Kontext bereitstellen.                                                                                                                                                                                                                                                                                                                              | -                                                                                                                                                                                                                                                           |
| Aktiv | Konversationen werden aktiv von einem menschlichen Agenten verwaltet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -                                                                                                                                                                                                                                                           |
| Warteschlange | Unterhaltungen werden angehalten und warten auf die Zuweisung durch einen Agenten. Der Endbenutzer kann eine Nachricht erhalten, wenn ein Say-Knoten unter dem Case-Knoten platziert wird. Der Say-Knoten sollte den folgenden Text enthalten:<br/><br><code>Estimated time:  {{"{{input?.handover?.data?.estimatedWaitTime / 1000}}"}} seconds</code><br><code>Position: {{"{{input?.handover?.data?.position}}"}}</code><br> <br>Dabei ist "Geschätzte Zeit" die ungefähre Dauer in Sekunden, die der Benutzer auf eine Antwort eines menschlichen Agenten warten muss, und "Position" ist die Reihenfolge der Konversation in der Warteschlange. | Der Status gilt nur für [RingCentral Engage](.. /.. /handover-providers/ringcentralengage-handover.md), wenn die [Get Queue Updates](.. /.. /handover-providers/ringcentralengage-handover.md#get-queue-updates) aktiviert ist. |

### CognigyScript
Wenn Sie den Suchtyp in **CognigyScript** ändern, wählt der Flow einen Fall aus, der mit dem Wert einer beliebigen Variablen übereinstimmt, die in das Feld "Operator" eingegeben wird, entweder durch Verwendung eines *Tokens* oder durch Schreiben des Variablenpfads in *CognigyScript*. Diese Funktion ermöglicht es, den Flow-Pfad basierend auf einer beliebigen Variable in der 'Eingabe', 'Kontext' oder 'Profil' zu ändern. Die Fallwerte müssen für diese Art der Suche manuell geschrieben werden.

<figure><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/lookup-cognigy-script.png" width="100%" /><figcaption>Festlegen des Suchtyps</figcaption>
  
  
</figure> auf CognigyScript <figure><figcaption>Ein Suchknoten vom Typ CognigyScript mit 3 Fällen basierend auf einer Profilvariablen</figcaption><img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/lookup-cognigy-script-example.png" width="100%" />
  
  
</figure>

!!! Tipp "Was ist CognigyScript?"
    CognigyScript ist eine Obermenge von JavaScript, die den Zugriff auf die Input-, Context- und Profile-Objekte in Text und JSON ermöglicht. Weitere Informationen finden Sie im Abschnitt [CognigyScript](.. /.. /tools/cognigy-script.md) Seite.

### Status des Anrufereignisses

Wenn Sie den Suchtyp in **Anrufereignisstatus** ändern, wählt der Flow einen Fall aus, der dem Wert von "input.data.event" entspricht. Die Fallwerte müssen für diese Art der Suche manuell geschrieben werden.

Im untergeordneten Suchknoten können Sie verschiedene Voice Gateway-Ereignisse behandeln, z. B. erkannte Sprache, erkanntes DTMF, Anruf erstellt, Anrufbeantwortererkennung und mehr.

Weitere Informationen zu diesen Ereignissen finden Sie in der [Voice Gateway Events](.. /.. /.. /voicegateway/references/events/overview.md) Referenz.