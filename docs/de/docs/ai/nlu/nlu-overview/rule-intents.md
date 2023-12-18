---
 title: "Rule Intents" 
 Slug: "Regel-Absichten" 
 ausgeblendet: false 
---
# Regel-Absichten

Regelabsichten bieten Ihnen die Möglichkeit, erweiterte Regeln zu verwenden, um zu verstehen, was ein Benutzer möchte. Sie können oft damit auskommen, nur unsere [Machine Learning Intents]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/) zu verwenden, die verschiedene Machine Learning-Techniken verwenden, um zu verstehen, was Ihre Benutzer sagen, aber manchmal benötigen Sie mehr Leistung als das. 

Dies ist beispielsweise der Fall, wenn Sie die universelle Sprache verwenden und eine Absicht für eine bestimmte Dateneingabe abgleichen möchten oder wenn Sie sicherstellen möchten, dass Sie einen bestimmten Eintrag im Kontext haben, bevor Sie die Absicht auslösen.

## Konzept<div class="divider"></div>Regelabsichten werden auf die gleiche Weise wie [Machine Learning Intents]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/) über die Registerkarte **NLU** im Flow-Editor erstellt. Nachdem Sie eine Absicht erstellt haben, können Sie im Abschnitt **Regeln** direkt unter dem Abschnitt für **Beispielsätze** Regeln für diese Absicht angeben.  Bei der Verwendung von Regeln in einem Intent sind Beispielsätze nicht erforderlich und können weggelassen werden. Sie können Beispielsätze aber auch in Kombination mit Regeln verwenden, aber dazu später mehr.

Für Rule Intents ist Folgendes erforderlich:

| Artikel | Beschreibung |
|-------------|------------------------------------------------------|
| Name der Absicht | Eindeutiger Name der Absicht |
| Regel(n) | Eine Reihe von Regeln für diese Absicht (mindestens eine Regel) |

## Regeln schreiben<div class="divider"></div>Jedem Intent kann eine beliebige Anzahl von Regeln zugeordnet werden. Die Regeln sind als Direct CognigyScript geschrieben, was bedeutet, dass Sie die CognigyScript-Tags nicht benötigen. Sie können Ihre Regeln daher mit [Input Object]({{config.site_url}}ai/tools/interaction-panel/input/) oder [Context Object]({{config.site_url}}ai/tools/interaction-panel/context/) schreiben (z. B. input.text === "restart") und Freiform-JavaScript verwenden. Sie können so viele Regeln erstellen, wie Sie möchten, und wenn eine von ihnen übereinstimmt, wird die Absicht mit einer Punktzahl von 1 zurückgegeben.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/b23c4c5-rules.PNG" width="100%" />
</figure>

!!! Hinweis "Beispiel für eine Regelabsicht"
    Die Absicht ist "orderFood". Zu den Regeln könnten gehören.

* input.text === "Ich möchte Pizza bestellen"
    * input.slots.food[0].keyphrase === "Pizza" && inut.slots.food.length === 1
    * input.text === \'${input.slots.male_firstname[0].keyphrase} will Kuchen\'
    * input.text.split(" ")[0] === "Hinzufügen" && input.text.match("zu den Favoriten")

## Welche Regeln haben Vorrang?

Regelabsichten haben Vorrang vor ML-Absichten. Das heißt, wenn der Benutzer einen Satz gesagt hat, der sowohl eine Regelabsicht **und** eine ML-Absicht auslösen würde, dann gewinnt die Regelabsicht.

Für den Fall, dass Regeln mit mehreren Absichten gleichzeitig gelten, spielt die Reihenfolge der Regelabsichten innerhalb des Ablaufs und der angehängten Abläufe eine Rolle, bei der die Absicht mit Priorität ausgelöst wird. Es gibt drei Prinzipien, die Sie bei der Arbeit mit Regeln beachten sollten:

1. Regelabsichten weiter unten in der Liste stehen an erster Stelle
2. Kinder kommen an zweiter Stelle
3. Angehängte Flows kommen an dritter Stelle, in der Reihenfolge, in der sie erstellt oder angeordnet wurden

Stellen Sie sich als Beispiel einen Agenten mit einem Flow vor, der mehrere Absichten auf verschiedenen Hierarchieebenen hat. Dem Flow sind außerdem zwei Flows zugeordnet, die jeweils ihre eigenen Absichten haben:

'''
Hauptstrom
├── Absicht A
│ └── Absicht A.1
│ └── Absicht A.2
└── Absicht B

Angehängter Flow 1
└── Absicht C
    └── Absicht C.1
        └── Absicht C.2

Angehängter Durchfluss 2
└── Absicht D
'''

### 1. Regelabsichten weiter unten in der Liste stehen an erster Stelle

Stellen Sie sich vor, dass sowohl "Absicht A.2" als auch "Absicht B" eine Regel "input.text.includes("foo bar")" haben. Wenn wir die Nachricht *Dieser Text enthält foo bar* an den Agenten senden, dann hat die letzte Absicht in der Liste der Absichten Vorrang und wird ausgelöst, nämlich "Absicht B".
### 2. Kinder kommen an zweiter Stelle

Stellen Sie sich vor, dass sowohl "Absicht A.1" als auch "Absicht A.2" eine Regel "input.text.includes("foo bar")" haben. Wenn wir die Nachricht *This text includes foo bar* an den Agenten senden, dann hat das untergeordnete Element, das am tiefsten in der Hierarchie steht, Vorrang und wird ausgelöst, nämlich "Intent A.2".
### 3. Angehängte Flows kommen an dritter Stelle

Stellen Sie sich vor, dass 'Intent A', 'Intent B', 'Intent C' und 'Intent D' jeweils eine Regel 'input.text.includes("foo bar")" haben. Denken Sie an das zweite Prinzip. Wenn wir die Nachricht *This text includes foo bar* an den Agenten senden, dann hat das letzte Kind in der Liste Vorrang und wird ausgelöst, was in diesem Fall 'Intent B' ist.

Stellen Sie sich nun vor, dass wir die Regeln in "Absicht A" und "Absicht B" löschen. Wenn wir nun die obige Nachricht an den Agenten senden, dann wird 'Intent C' ausgelöst. Dies liegt daran, dass wir die Absichten der angefügten Flows zuletzt betrachten, jedoch in der entsprechenden Reihenfolge. Wenn wir die Stellen von "Absicht C" und "Absicht D" in der Benutzeroberfläche vertauschen würden, so dass "Absicht D" vor "Absicht C" steht, dann würde "Absicht D" ausgelöst werden.

Stellen Sie sich als letztes Beispiel vor, dass sowohl "Intent C.2" als auch "Intent D" eine Regel "input.text.includes("foo bar")" haben. Wenn wir die Nachricht *This text includes foo bar* an den Agenten senden, wird 'Intent C.2' ausgelöst, da der gesamte 'Attached Flow 1' Vorrang vor allen Intent in 'Attached Flow 2' hat.

## Schwellenwerte<div class="divider"></div>Regelabsichten haben immer eine Punktzahl von 1, wenn sie übereinstimmen. Daher gelten keine Schwellenwerte.

## Was ist ein guter Anwendungsfall für Rule Intents?<div class="divider"></div>Nehmen wir an, wir möchten den Nutzer auf einer allgemeinen Ebene über ein ganz bestimmtes Thema informieren. Ein gutes Beispiel wären Informationen über eine bestimmte Krankheit, zum Beispiel "Diabetes". Es ist sehr unwahrscheinlich, dass der Name der Krankheit in Beispielsätzen für andere Absichten auftaucht, und sollte in der überwiegenden Mehrheit der Benutzereingaben für diese Absicht angezeigt werden. 

Darüber hinaus ist es sehr unwahrscheinlich, dass "Diabetes" erwähnt wird, wenn der Benutzer Informationen über andere Krankheiten wünscht.

!!! Hinweis "Beispiel für eine gute Regel"
    Für diesen Anwendungsfall sollte die folgende Regel eine Vielzahl von Benutzereingaben ausreichend abdecken.

'''js
ci.text.includes("Diabetes")
'''

Mit dieser Regel löst jede Benutzereingabe, die die Zeichenfolge "diabetes" enthält, den Intent aus - auch innerhalb von Wortkombinationen, die nicht durch " " getrennt sind!

!!! danger "Beispiel für eine schlechte Regel"
    Die folgende Regel ist schlimmer als ein ML-Intent mit nur einem Beispielsatz!

'''js
ci.text === "Ich möchte Informationen über Diabetes"
'''

Dies funktioniert nur für genau diesen Satz, selbst ein " " (doppeltes Leerzeichen) anstelle eines " " (einfaches Leerzeichen) oder ein Ausrufezeichen am Ende verhindert, dass der Intent ausgelöst wird.

## Was ist ein schlechter Anwendungsfall für Rule Intents?<div class="divider"></div>Nehmen wir an, wir haben mehrere Absichten, die eng miteinander verwandt sind und mit einer Vielzahl von Vokabeln ausgedrückt werden können. Ein passendes Beispiel wäre die Meldung von Symptomen an einen medizinischen Chatbot. 
Es macht einen großen Unterschied, ob du sagst "meine Brust tut weh" oder "es tut weh, wenn ich atme" oder "Ich habe Schwierigkeiten beim Atmen". 
In diesem Fall ist die Verwendung von ML-Absichten dem Versuch überlegen, eine passende Regelabsicht zu erstellen.