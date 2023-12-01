---
 Titel: "Knotensuche" 
 Slug: "Knoten-Suche" 
 ausgeblendet: false 
---
# Suche nach Flow-Knoten

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.16.0-blue.svg)] ({{config.site_url}})

Mit dem Feld Node Search kann man eine Suche ohne Berücksichtigung der Groß-/Kleinschreibung durch die Flow-Nodes durchführen. Werfen Sie einen Blick [hier]({{config.site_url}}ai/tools/node-search/#searchable-contents) auf eine Liste dessen, was innerhalb eines Flows durchsucht werden kann.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/node-search-field.png" width="100%" />
</figure>

So durchsuchen Sie die Flow-Knoten:

1. Klicken Sie auf das **Suchsymbol** unter den anderen Werkzeugen in der unteren linken Ecke des Diagrammeditors.
2. Es öffnet sich eine Eingabe, die mit einem Platzhalter *Search Nodes* abgelegt ist, in der Sie den Suchtext eingeben können.
3. Alternativ können Sie das Eingabefeld für die Suchknoten auch mit den Tastenkombinationen ++Strg+Alt+F++ oder ++Cmd+Opt+F++ öffnen.

### Hervorhebung von Knoten und Knoten-Editor<div class="divider"></div>Sobald der Suchtext eingegeben wurde, werden alle Nodes, die den Suchtext enthalten, gelb hervorgehoben und die Seite wird automatisch zum ersten passenden Node gescrollt. Mit den Pfeilen *nach oben* und *unten* innerhalb des Suchfeldes kann man zum vorherigen bzw. nächsten passenden Knoten scrollen. Darüber hinaus wird auch die Gesamtzahl der Knoten, die den Suchtext enthalten, im Suchfeld angezeigt. Wenn Sie den Suchtext zurücksetzen und löschen möchten, klicken Sie im Suchfeld auf die Schaltfläche *Eingabe löschen*.  

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/search-node.gif" width="100%" />
  <figcaption>Diagramm-Editor nach der Suche nach dem Begriff "Willkommen"</figcaption>
</figure>

!!! Hinweis "Tipp: Suchsymbol umschalten"
    Um das Eingabefeld Knotensuche zu schließen, ohne den Suchtext zurückzusetzen, klicken Sie erneut auf das *Suchsymbol* in der Symbolleiste des Diagrammeditors. Dadurch wird die Hervorhebung des Knotens umgeschaltet.

Wenn ein markierter Knoten geöffnet wird, wird die Beschriftung des Felds mit der Übereinstimmung hervorgehoben.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/node-editor-with-highlighting.png" width="100%" />
  <figcaption>Sagen Sie Node Editor, nachdem Sie nach dem Begriff "Willkommen" gesucht haben.</figcaption>
</figure>

!!! Hinweis "*Sektionsbezeichnung* und *Kanal-Tab* Hervorhebung"
	[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.18.0-blue.svg)] ({{config.site_url}})

Wenn sich das Feld mit der Übereinstimmung in einem reduzierbaren Abschnitt befindet, wird auch die Beschriftung des Abschnitts hervorgehoben. Wenn sich das Feld, das eine Übereinstimmung aufweist, in einem Kanal-Registerkartenformular eines Knotens befindet, wird der Rahmen des Kanal-Registerkartensymbols hervorgehoben (siehe Beispiel 5 im Abschnitt [Beispiele]({{config.site_url}}ai/tools/node-search/#examples).

### Durchsuchbare Inhalte<div class="divider"></div>Innerhalb der Flow-Knoten können Sie nach Folgendem suchen:

| Durchsuchbarer Knotenwert | Beschreibung |
|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Knoten-Beschriftung | Die tatsächliche Beschriftung, die auf einem Knoten angezeigt wird (konfigurierbar in den Einstellungen) |
| Knoten-Kommentar | Der optionale Kommentar, der an den Knoten |
| Knotenanalyse-Schritt [![ Versions-badge](https://img.shields.io/badge/Added in-v4.36.0-blue.svg)]({{config.site_url}}) | Der Analyseschritt, der auf einem Knoten angezeigt wird |
| Knotentyp | Der Typ des Knotens |
| Knoten-ID | Die eindeutige Datenbank-ID des Knotens (wird in der Regel nicht von Benutzern verwendet) |
| Knoten-Referenz-ID | Die ID, die verwendet wird, wenn auf einen Node verwiesen wird, z.B. als Einstiegspunkt für einen Go-To-Node (diese ID kann aus dem sekundären Menü im Node-Editor kopiert werden) |
| Schlüssel oder Werte im JSON-Editor | Entspricht einem Schlüssel oder Wert innerhalb eines JSON-Objekts, z. B. POST Data-Objekt in einem HTTP-Anforderungsknoten |
| Code im Code-Editor | Entspricht dem Text innerhalb eines Codeknotens |
| Eingabefelder für jeden Ausgabetyp / Kanaltyp in Say Node und Question Node | Jede Art von Ausgabe über alle Kanaltypen hinweg wird abgeglichen.                                                                                         |
| Benutzerdefinierte Schaltflächenbeschriftungen in "Knoten sagen" und "Frageknoten" | Schaltflächenbeschriftungen und -werte werden abgeglichen und hervorgehoben |
| Weitere relevante Eingabefelder in allen Knotentypen | Stimmt mit relevanten Feldtypen in allen Cognigy- und Erweiterungsknoten überein |

### Beispiele<div class="divider"></div>**Beispiel 1:**
Suche nach allen Knoten des Typs "Say" im Flow
<img style="padding-bottom: 20px;" class="image-center" src="{{config.site_url}}ai/tools/images/search-by-type.png" width="100%" />

**Beispiel 2:**
Code-Node-Editor nach der Suche nach dem Begriff "Willkommen"
<img style="padding-bottom: 20px;" class="image-center" src="{{config.site_url}}ai/tools/images/search-in-code-node.png" width="100%" />

**Beispiel 3:**
Alexa-Kanal nach der Suche nach dem Begriff "Willkommen"
<img style="padding-bottom: 20px;" class="image-center" src="{{config.site_url}}ai/tools/images/search-in-alexa-channel.png" width="100%" />

**Beispiel 4:**
Gehen Sie zum Knoten-Editor, nachdem Sie nach dem Begriff "Willkommen" gesucht haben.
<img style="padding-bottom: 20px;" class="image-center" src="{{config.site_url}}ai/tools/images/search-in-goTo-node.png" width="100%" />

### Suchknoten mit Analytics-Schritt<div class="divider"></div>[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.36.0-blue.svg)] ({{config.site_url}})

Um Knoten mit Analytics-Schritt zu finden, können Sie im Feld "Knotensuche" nach dem spezifischen Schlüsselwort "has:analyticsStep" suchen. 

Es hebt alle Knoten hervor, bei denen das Analytics-Schrittfeld nicht leer oder null ist. <img style="padding-bottom: 20px;" class="image-center" src="{{config.site_url}}ai/tools/images/search-analytics-step.png" width="100%" />