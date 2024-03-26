---
 Titel: "CognigyScript" 
 Schnecke: "Kognigy-Schrift" 
 ausgeblendet: false 
---
# CognigyScript

CognigyScript ist eine Obermenge von JavaScript, die Ihnen Zugriff auf die Objekte [Input]({{config.site_url}}ai/tools/interaction-panel/input/) und [Context]({{config.site_url}}ai/tools/interaction-panel/context/) in Text und JSON ermöglicht.

Mit CognigyScript können Sie leistungsstarke Skripte ausführen, um die Antworten zu erstellen, die Sie an den Client zurückgeben möchten.

Innerhalb von Text schreiben Sie CognigyScript innerhalb von '{{"{{ }}"}}'-Tags. Beispiel: '{{"{{input.text}}"}}'

CognigyScript ist im Wesentlichen JavaScript, ermöglicht Ihnen aber den Zugriff auf die Cognigy-Objekte über verfügbar gemachte Variablen:

| Variabel | Beschreibung | Beispiel |
|----------|----------------------------|------------------------------------|
| Eingabe | 	Das Eingabeobjekt | {{ " {{input.text}}" }} |
| Kontext | Das Context-Objekt | {{ " {{context.selectedHotel}}" }} |
| Profil | Das Kontaktprofilobjekt | {{ " {{Profil.Vorname}}" }} |

## Knoten-Argumente<div class="divider"></div>Der Zugriff auf die CognigyScript-Funktionalität unterscheidet sich zwischen verschiedenen Arten von Argumenten.

## Für Text-Argumente

Innerhalb von Textargumenten eines Cognigy Flow Node wird CognigyScript mit '{{"{{ }}"}}'-Tags geschrieben. Es wurde so ausgewertet, wie es geschrieben ist. Dies wird durch die Beschriftung 'CognigyScript' oberhalb des Eingabefeldes angezeigt.

!!! Hinweis "Ungültige Ausdrücke geben einen leeren String zurück"
    Wenn der Ausdruck ungültig ist, wird eine leere Zeichenfolge zurückgegeben.

*Beispiel*
'{{"{{input.text.toUpperCase()}}"}}' würde den vom Client gesendeten Text in Großbuchstaben zurückgeben.

**Typerhaltung**
CognigyScript in Node Arguments wird immer als Zeichenfolge zurückgegeben, es sei denn, Sie erzwingen, dass der Typ beibehalten wird. Sie können dies tun, indem Sie '.preserveType()' an Ihr Skript anhängen.

*Beispiel*
'{{"{{context.anObject.preserveType()}}"}}' gibt das zurück, was auch immer 'anObject' ist, also z.B. ein JavaScript-Objekt.

## Für JSON-Argumente

Innerhalb von JSON-Argumenten kann eine spezielle Notation '{ "$cs": { "script": "x", "type": "t"}}" }}' zum Ausführen von CognigyScript verwendet werden. Sie können ein Skript und einen Rückgabetyp angeben. Die spezielle Notation ermöglicht es Ihnen, einen Typ zu definieren. Anschließend wird versucht, den Wert in diesen Typ zu konvertieren, z. B. String "6" in eine Zahl oder ein Object in einen String.

**Beispiel mit Typisierung**
'''JavaScript
{
    "customer_orders": {
        "$cs": {
            "script": "context.orders",
            "type": "Objekt"
        }
    }
}
'''

**Beispiel mit Inline CognigyScript**
'''JavaScript
{
    "customer_orders": "{{ "{{context.orders}}" }}"
}
'''
Dadurch wird versucht, das orders-Objekt aus dem Kontext abzurufen und customer_orders zuzuweisen. Wenn 'context.orders' nicht existiert, wird die Taste "customer_orders" einfach übersprungen.

## IF-Bedingungen und SWITCH-Operanden

Innerhalb von Bedingungen wird CognigyScript auch ohne '{{"{{ }}"}}'-Tags geschrieben. Es wird genau wie Standard-JavaScript ausgewertet. Dies wird durch die Beschriftung 'CognigyScript (direct)' oberhalb des Eingabefeldes angezeigt.

!!! Hinweis "Beispiel"
    Die Bedingung 'context.orders === 3' würde als 'true' ausgewertet werden, wenn die im 'context' gespeicherte Variable 'orders' gleich '3' ist.

## Code-Knoten

Innerhalb von Codeknoten müssen Sie die {{ " {{ }}" }}-Tags nicht verwenden. Die Variablen 'input', 'context', 'profile' und 'actions' werden standardmäßig angezeigt, ebenso wie '_' und 'moment'.

**Beispiel**
'''JavaScript
const ordercount = context.orders;
switch(ordercount) {
    Sturz 0:
        input.ordertext = "Sie haben keine Artikel bestellt";
        actions.output('Hallo', {'Aktion': 1}); gibt den Text 'hello' mit data {'action': 1} aus
        brechen;
    Herbst 1:
        input.ordertext = "Sie haben einen Artikel bestellt";
        brechen;
    Vorgabe:
        input.ordertext = "Sie haben viele Artikel bestellt";
}
'''

## Lebensdauer von Cognigy-Objekten<div class="divider"></div>Das Bild unten zeigt die Lebensdauer der verschiedenen Cognigy-Objekte. Das Input-Objekt (input) wird bei jeder neuen Benutzereingabe neu erstellt (jede neue Flow-Ausführung), das Context-Objekt (context) wird für die Dauer der gesamten Konversation gespeichert, und das Profile-Objekt (profile) wird für immer gespeichert. Dies bedeutet, dass Informationen über den Benutzer, den Sie beibehalten möchten (z. B. der Name des Benutzers), im Profile-Objekt gespeichert werden sollten.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/a570379-data.PNG" width="100%" />
  <figcaption>Lebensdauer von Cognigy-Objekten</figcaption>
</figure>

