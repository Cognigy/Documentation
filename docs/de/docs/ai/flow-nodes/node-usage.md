---
 Titel: "Allgemeine Knotenverwendung" 
 slug: "Knoten-Nutzung" 
 ausgeblendet: false 
---
# Allgemeine Knotennutzung

Flow-Knoten können verwendet werden, um einem Flow Interaktivität hinzuzufügen. Wenn sie auf eine bestimmte Weise kombiniert werden, können sie dazu beitragen, dynamische, interaktive Gespräche zu führen. Es gibt viele Arten von Nodes, von Basic bis Advanced.

## Einen Knoten erstellen<div class="divider"></div>Knoten können durch Klicken auf das +-Symbol in einem [Flow](.. /resources/build/flows.md), woraufhin das Knotenauswahlmenü angezeigt wird.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/Node-Create-Menu.png" width="100%" />
</figure>

Wechseln Sie zu den [Erweiterungen](.. /resources/manage/extensions.md), um Knoten aus Erweiterungen zu installieren, oder klicken Sie auf die Schaltfläche Erweiterung in der Ecke, um neue Erweiterungen aus dem [Extension Marketplace](.. /resources/manage/extensions.md#extension-marketplace).

Ein Node kann kopiert werden, indem Sie mit der rechten Maustaste darauf klicken, und eingefügt werden, indem Sie mit der rechten Maustaste auf einen **+**-Abschnitt im [Flow](.. /resources/build/flows.md). 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c032451-node-copy-paste.jpg" width="100%" />
</figure>

## Einen Knoten entfernen<div class="divider"></div>Um einen Knoten zu entfernen, können Sie ihn entweder löschen oder ausschneiden. Wenn Sie den Knoten ausschneiden möchten, können Sie ihn an der gewünschten Stelle einfügen. Wenn Sie sie löschen, ist sie verschwunden, kann aber wiederhergestellt werden, indem Sie die Änderung rückgängig machen. Wenn Sie einen Knoten entfernen, werden auch alle untergeordneten Knoten entfernt.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9fdb2b4-node-cut.jpg" width="100%" />
</figure>

!!! Hinweis "Flow-Editor-Hotkeys"
    Eine vollständige Liste der Tastaturkürzel für den Flow-Editor finden Sie auf der [Hotkeys-Seite]({{config.site_url}}ai/tools/hotkeys/).

## Kopieren eines Knotens<div class="divider"></div>Sie können einen Knoten mit dem entsprechenden Menüpunkt kopieren. Dadurch werden auch alle untergeordneten Knoten kopiert (z. B. alle Fall- und Standardknoten und deren untergeordnete Knoten, wenn Sie einen Nachschlageknoten kopieren).

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c032451-node-copy-paste.jpg" width="100%" />
</figure>

!!! Hinweis "Drag & Drop"
    Der Flow-Editor unterstützt Drag & Drop innerhalb des Flow-Editors. Um einen Knoten zu kopieren, halten Sie einfach die **Alt**-Taste gedrückt, während Sie den Knoten an der gewünschten Stelle ablegen.

## Kommentar hinzufügen<div class="divider"></div>Sie können zusätzliche Informationen zu Knoten im Knotenkommentar hinzufügen. Um einen Kommentar hinzuzufügen, öffnen Sie einen Knoten, indem Sie darauf klicken, und scrollen Sie nach unten zum Abschnitt **Styling**. Hier können Sie einen Kommentar hinzufügen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/e710f5e-styling.jpg" width="100%" />
</figure>

## Beschriftung hinzufügen<div class="divider"></div>Durch das Hinzufügen einer Beschriftung wird die untere Textzeile eines Knotens ersetzt. Auf diese Weise erhalten Sie eine Zusammenfassung der Knotenfunktionalität, die direkt im Flow-Editor angezeigt wird. Sie können die Beschriftung ändern, indem Sie einen Knoten öffnen und nach unten zum Abschnitt **Styling** scrollen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/e710f5e-styling.jpg" width="100%" />
</figure>

## Einstiegspunkt setzen<div class="divider"></div>Ein beliebiger Flow-Knoten kann als Einstiegspunkt für den Flow hinzugefügt werden. Das bedeutet, dass ein [Go To Node]({{config.site_url}}ai/flow-nodes/logic/go-to/) oder ein [Execute Flow Node]({{config.site_url}}ai/flow-nodes/logic/execute-flow/) so eingestellt werden kann, dass er direkt an einem beliebigen Knoten startet. Der **Startknoten** ist der Standardeinstiegspunkt für den Flow, und sowohl [Question Nodes]({{config.site_url}}ai/flow-nodes/message/question/) als auch [Optionale Frageknoten]({{config.site_url}}ai/flow-nodes/message/optionale-frage/) werden automatisch als optionaler Einstiegspunkt zugewiesen, wenn sie hinzugefügt werden. 
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9d7d9bc-SetEntrypoint1.jpg" width="100%" />
</figure>

Jeder andere Knoten kann manuell als Flow-Einstiegspunkt zugewiesen werden, indem Sie das Knotenbearbeitungsmenü öffnen und das Drei-Punkte-Menü in der oberen rechten Ecke auswählen. Die Option "Einstiegspunkt setzen" kann ausgewählt werden, wodurch dieser Knoten zur Liste der verfügbaren Einstiegspunkte hinzugefügt wird.

!!! Hinweis "Benennung von Einstiegspunkten"
    Es ist hilfreich, eindeutige Namen für jeden Einstiegspunktknoten mit der Funktion [label]({{config.site_url}}ai/flow-nodes/node-usage/#add-label) zu definieren. Dies bedeutet, dass Benutzer leicht unterscheiden können, wenn sie sie aus einer Liste von Optionen auswählen. Beispielsweise werden alle Frageknoten als "Frage" bezeichnet, es sei denn, die Beschriftung wird manuell angepasst.

## Warnung<div class="divider"></div>[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.8.0-blue.svg)] ({{config.site_url}})

Ab Version 4.8 wird eine Warnmeldung angezeigt, falls Ihr Flow mehr als 100 Knoten enthält:

- Wenn Sie einen Flow mit mehr als 100 Knoten erstellen, erhalten Sie eine Warnung.
- Wenn Sie einen vorhandenen Flow mit mehr als 100 Knoten öffnen, erhalten Sie diese Warnung.
- Der Fehler sollte verschwinden, wenn Sie einige Knoten entfernen und unter 100 sinken.
- Sie können die Benachrichtigung in Ihren Profileinstellungen deaktivieren.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/0faf93c-warning_more_than_100_nodes_in_Flow.svg" width="100%" />
  <figcaption>Warnhinweise - Knoten > 100</figcaption>
</figure>

## Knoten-ID<div class="divider"></div>[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.10.0-blue.svg)] ({{config.site_url}})

Ab Version Cognigy.AI (4.10.0) stellt Cognigy.AI Knoten-IDs in jedem Flow bereit. Wenn Sie durch eine solche URL navigieren, wird die Seitenleiste geöffnet und im Viewport zum Node gescrollt.

Ausführlich:

- Wenn Sie auf einen Knoten im Flussdiagramm klicken, wird seine ID zur URL hinzugefügt.
- Wenn Sie die Seitenleiste schließen, wird die ID aus der URL entfernt.
- Wenn Sie die Seite öffnen, die die Node-ID enthält, wird die Seitenleiste geöffnet und das Viewport auf dem Node zentriert.

## Flow aus Branch erstellen<div class="divider"></div>[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.26.0-blue.svg)] ({{config.site_url}})

Es ist möglich, einen neuen Flow aus dem Ausführungszweig eines Knotens zu erstellen.  Jeder Node, der einen *Child Flow* erstellen kann, hat die Option **Create Flow from Branch** in seinem Kontextmenü. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/create-flow-from-children.png" width="100%" />
  <figcaption>Option "Flow aus Verzweigung erstellen".</figcaption>
</figure>

Wenn Sie auf die Option **Flow aus Branch erstellen** klicken, wird ein Dialogfeld geöffnet, in dem Sie aufgefordert werden, den Namen für Ihren neuen Flow einzugeben.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/create-flow-from-children-2.png" width="100%" />
  <figcaption>Untergeordneter Flow aus Branch-Name</figcaption>
</figure>

Wenn Sie einen gültigen Flow-Namen angeben und im Dialogfeld auf die Schaltfläche *Erstellen* klicken, wird Folgendes ausgeführt:

* Erstellen Sie einen neuen ausgeführten Flow, der alle Knoten aus dem ausgewählten Zweig enthält.

* Ersetzen Sie alle Nodes aus dem ausgewählten Branch durch einen **Execute Flow Node**, von dem aus der erstellte Flow ausgeführt wird.

* Die Intents/Slots werden nicht geparst und der Kontext wird beim Ausführen des neuen ausgeführten Flows nicht absorbiert.

* Außerdem werden NLU-Konfigurationen/Einstellungen/Standardkontext usw. nicht in den ausgeführten Flow kopiert. Überprüfen Sie daher den NLU-Abschnitt des erstellten Flows und passen Sie ihn bei Bedarf an.