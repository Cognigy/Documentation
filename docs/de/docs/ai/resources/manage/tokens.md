---
 title: "Tokens" 
 Schnecke: "Token" 
 ausgeblendet: false 
---
# Marke

Mit der **Tokens**-Funktion können **CognigyScript**-Ausdrücke in ein visuelles **Token** gepackt werden, um nicht-technischen Plattformerstellern Zugriff auf dynamische Konversationsdaten zu gewähren, ohne selbst Code schreiben zu müssen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/10ad17a-TokensNode.PNG" width="100%" />
</figure>

## Verwenden von Token

Das folgende Beispiel zeigt zwei Antworten, die auf die letzte Nachricht des Benutzers zugreifen. Beide Sätze erzeugen die gleiche Ausgabe. In der ersten Nachricht wird ein Standardsystemtoken verwendet, während im zweiten Satz das codierte Format [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) verwendet wird.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/deb1830-TokenExample.PNG" width="100%" />
</figure>

Token können von jedem Textfeld aus zu einer Dialogmeldung hinzugefügt werden, in dem das **AI**-Symbol angezeigt wird. Klicken Sie einfach auf das **AI**-Symbol, um das Token-Menü zu erweitern, in dem eine durchsuchbare Liste der verfügbaren Token angezeigt wird. Die Token werden basierend auf dem Speicherort der Daten, auf die sie zugreifen, in Kategorien sortiert, d. h. [Input]({{config.site_url}}ai/tools/interaction-panel/input/), [Context]({{config.site_url}}ai/tools/interaction-panel/context/), [Profile]({{config.site_url}}ai/flow-nodes/profile/profile/) oder Custom.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/f00f6f8-createTokenNode.PNG" width="100%" />
</figure>

Cognigy.AI enthält eine Auswahl an Standardtoken, die mit Basiseingabe- und Profilvariablen verknüpft sind.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/bc8e21d-Token_Answer_Snippet_6.svg" width="100%" />
  <figcaption>Token "Antwort", das in einem Say-Knoten verwendet wird</figcaption>
</figure>

## Erstellen von Token

Sie können **Token** entweder aus Textfeldern des Flow-Knotens mit dem **AI**-Symbol oder aus dem Token-Management-Menü (siehe unten) erstellen. Klicken Sie in den Flow-Knoten auf das **AI**-Symbol, um das Token-Auswahlmenü zu erweitern, und klicken Sie dann auf das **+**-Symbol am Ende des Suchfelds. Wenn Sie ein Token über das *Token-Management-Menü* erstellen, klicken Sie einfach auf die Schaltfläche *"Neuen Token erstellen"* oben auf der Benutzeroberfläche.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/987e80f-createnewtoken.PNG" width="100%" />
</figure>

Für das Erstellen eines **Tokens** sind die folgenden Informationen erforderlich:

* Name - Der Name, der den Plattformbenutzern auf dem Token angezeigt wird
  * Skript - Der [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/)-Pfad, der für den Zugriff auf die Daten verwendet wird
  * Type - Der Datenspeicherort (wird zum Sortieren des Tokens im Suchfenster verwendet)

!!! Warnung "Geschweifte Klammern sind hier nicht erforderlich!"
    Token werden automatisch in geschweifte Klammern gesetzt, daher müssen sie beim Erstellen von Token im Skriptfeld und bei der Verwendung von Token in Textfeldern weggelassen werden.

!!! Hinweis "Token aus JSON erstellen"
    Sie können ein Token direkt aus einem beliebigen JSON-Editor innerhalb Cognigy.AI erstellen. Klicken Sie dazu mit der rechten Maustaste auf den Wert, auf den Sie verweisen möchten, und wählen Sie im Kontextmenü **Token aus JSON-Pfad erstellen** aus. Das Feld **Skript** ist bereits vorausgefüllt. Sie können den Wert auch markieren, bevor Sie mit der rechten Maustaste darauf klicken, damit das Feld Name mit dem markierten Text vorausgefüllt wird.

## Menü "Token-Verwaltung"

Das **Token-Verwaltungsmenü** finden Sie im Abschnitt *Verwalten* des Menüs *Agentenressourcen*. Eine vollständige Liste der Token, die in einem Agent erstellt wurden, kann angezeigt werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/5970d92-tokensMenu.PNG" width="100%" />
</figure>

Ein Token kann gelöscht werden, indem Sie den Cursor auf ein Token setzen, auf das Menüsymbol klicken, das am rechten Ende der Benutzeroberfläche angezeigt wird, und **Löschen** auswählen.

!!! Hinweis "Skript-Persistenz"
    Durch das Löschen von Token wird das **CognigyScript** nicht von den Knoten entfernt, die das Token verwendet haben.