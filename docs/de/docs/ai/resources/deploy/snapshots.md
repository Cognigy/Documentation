---
 Titel: "Schnappschüsse" 
 Schnecke: "Schnappschüsse" 
 ausgeblendet: false 
---
# Schnappschüsse

_Snapshots_ sind unveränderliche Formen Ihres virtuellen Agenten, einschließlich der folgenden Ressourcen:

* Flows (einschließlich aller trainierten NLU-Modelle)
*Lexika
*Verbindungen
* NLU-Steckverbinder
*Funktionen
* Spielbücher
*Einstellungen
*Lokalisierung
*Zeichen
*Erweiterungen

Sobald eine Ressource in einen Snapshot aufgenommen wurde, kann diese Ressource innerhalb des Snapshots nicht mehr durch einen Vorgang geändert werden, z. B. im Flow-Editor oder über die RESTful-APIs von Cognigy.

Snapshots können in den folgenden Fällen verwendet werden:

- Um eine unveränderliche Just-in-Time-Kopie aller relevanten Ressourcen eines virtuellen Agenten zu erstellen, sodass diese spezifische Version über Endpunkte bereitgestellt werden kann, während Ihre Entwickler bereits an der nächsten Version Ihres virtuellen Agenten arbeiten.
- Um eine Sicherungskopie Ihres virtuellen Agenten zu erstellen, damit Sie bei Bedarf zu einem früheren Zustand zurückkehren können.

## Einschränkungen

Die folgenden Ressourcen sind nicht im Snapshot enthalten:

*Endpunkte
* Intent-Trainer-Aufzeichnungen
* Analyse-Daten
* Kontakt-Profil
*Baumstämme
*Angehörige
* Wissen KI
* Andere Schnappschüsse

## Kontingente und Einschränkungen

- Die maximale Anzahl von Snapshots pro Agent beträgt 10. Dieser Grenzwert kann in einer dedizierten Produktinstallation geändert werden. Sie kann über die folgende Umgebungsvariable in der Konfigurationskarte 'cognigy-env' angepasst werden: 'MAX_AMOUNT_SNAPSHOTS_IN_AGENT'.
- Die maximale Größe eines gepackten Snapshots beträgt 256 MB. Wenn Sie dieses Limit erreicht haben, müssen Sie zuerst ältere Snapshots löschen, bevor Sie neue erstellen. Bei einer dedizierten Installation können Sie die maximale Anzahl von Snapshots erhöhen, indem Sie eine Umgebungsvariable in der Konfigurationszuordnung 'cognigy-env' verwenden: 'SNAPSHOT_MAX_FILE_SIZE'.
- Die Lebensdauer eines herunterladbaren Snapshots, bis Sie den Download neu erstellen müssen, beträgt 1 Tag.

## Snapshot-Dateiformat

Die '.csnap'-Datei (Cognigy Snapshot) ist ein spezieller Typ, der nur innerhalb der Cognigy.AI Snapshots verwendet werden kann. Sie können es nicht außerhalb von Cognigy.AI öffnen oder hochladen. Snapshots verschlüsseln ihre Daten, einschließlich potenziell sensibler Informationen in Form von [Cognigy Connections](.. /build/connections.md).

## Einen neuen Snapshot erstellen

Um einen neuen Snapshot des aktuellen Status Ihres virtuellen Agenten zu erstellen, gehen Sie wie folgt vor:

1. Öffnen Sie die Cognigy.AI-Schnittstelle.
2. Wählen Sie im Menü auf der linken Seite **Deploy > Snapshots** aus. 
3. Klicken Sie auf **Neuer Snapshot**. 
4. Geben Sie einen Namen und eine Beschreibung für den neuen Snapshot ein. Es wird empfohlen, eine Versionsnummer in das Namensfeld einzugeben und im Beschreibungsfeld eine Beschreibung der in dieser Version vorgenommenen Änderungen anzugeben.

Ihr Schnappschuss wird in der Liste angezeigt.

Wir empfehlen Ihnen dringend, Snapshots zu erstellen und produktive Endpunkte nur auf Flows zu verweisen, die in Snapshots enthalten sind.

## Einen Snapshot herunterladen

Sie können Snapshots herunterladen, die Sie zuvor erstellt haben. Dies ist nützlich, wenn Sie Ihre Snapshots offline archivieren möchten oder wenn Sie mehrere Cognigy.AI Systeme haben und einen Snapshot auf Ihr anderes Cognigy.AI System übertragen möchten.

Gehen Sie folgendermaßen vor, um einen Snapshot herunterzuladen:

1. Wenn Ihr Schnappschuss erstellt wurde, klicken Sie auf! [vertikale Auslassungspunkte] (.. /.. /.. /assets/icons/vertical-ellipsis.svg) auf der rechten Seite neben dem Snapshot, den Sie aus der Liste herunterladen möchten.
2. Wählen Sie **Download vorbereiten**. Es wird ein herunterladbares Snapshot-Paket erstellt. Eine Erfolgsbenachrichtigung wird angezeigt, sobald Ihr Snapshot-Paket vorbereitet wurde.
3. Klicken Sie auf ! [Schnappschuss herunterladen] (.. /.. /.. /assets/icons/snapshot-download.svg) auf der rechten Seite neben dem zuvor vorbereiteten Snapshot
   um den Download zu starten.
  
Der Webbrowser beginnt mit dem Herunterladen Ihres vorbereiteten Snapshot-Pakets als '.csnap'-Datei.

## Einen Schnappschuss hochladen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.47-blue.svg)] (.. /.. /.. /release-notes/4.47.md)

Der Anwendungsfall für das Hochladen eines Snapshots besteht in der Regel darin, seine Flows in der Produktion bereitzustellen.
Da sich Snapshots in virtuellen Agenten als andere Ressourcen befinden,
Sie müssen entweder zuerst einen neuen virtuellen Agenten erstellen oder den Snapshot in einen Ihrer vorhandenen hochladen.

Um einen Snapshot hochzuladen, gehen Sie folgendermaßen vor:

1. Öffnen Sie die Cognigy.AI-Schnittstelle.
2. Klicken Sie im Menü auf der linken Seite auf **Deploy > Snapshots**.
3. Klicken Sie auf der Seite **Snapshots** auf **Snapshot hochladen**.
4. Wählen Sie einen Snapshot im Format ".csnap" von Ihrem Computer aus. Wenn die Datei hochgeladen wird, wird ein Dialogfenster mit einem Fortschrittsbalken angezeigt.
5. Sobald die Datei hochgeladen wurde, wird eine neue [Aufgabe](.. /agents/tasks.md) mit dem Titel **Upload Snapshot** erstellt. Um die Aufgabe anzuzeigen, klicken Sie auf ! [Aufgaben-Menü] (.. /.. /assets/icons/task-menu.svg) in der oberen rechten Ecke.

Nach Abschluss der Aufgabe **Snapshot hochladen** wird Ihr Snapshot installiert und in der Liste auf der Seite **Snapshots** angezeigt.

## Vorgehensweise zum Wiederherstellen eines virtuellen Agenten aus einem Snapshot

Wenn Sie Snapshots verwenden, um Ihren virtuellen Agenten zu archivieren, sollten Sie den virtuellen Agenten an dem Punkt wiederherstellen, an dem der Snapshot ursprünglich erstellt wurde.

### Bevor es losgeht

- **Bei der Wiederherstellung eines Snapshots werden alle vorhandenen Agentenressourcen überschrieben**. Stellen Sie sicher, dass Sie sich der Auswirkungen bewusst sind, wenn Sie einen virtuellen Agenten aus einem Snapshot wiederherstellen. Alle Ressourcen innerhalb des virtuellen Agenten werden gelöscht, bevor sie aus dem Snapshot rekonstruiert werden. Falls Sie aktive Endpunkte haben, die auf die Flows in Ihrem virtuellen Agenten verweisen, werden Konversationen unterbrochen, da diese Flows entfernt werden.
- **Die Wiederherstellung eines Snapshots von einem anderen Agenten erfordert möglicherweise manuelle Änderungen an den Endpunkten**. Durch die Wiederherstellung eines Snapshots von einem anderen Agenten werden die Endpunkte, denen das primäre Gebietsschema zugewiesen ist, automatisch aktualisiert, für Endpunkte mit dem sekundären Gebietsschema ist jedoch ein manuelles Update erforderlich. Diese Endpunkte werden mit einem roten Punkt neben dem Namen des Endpunkts angezeigt, wie in den folgenden Abbildungen.

### Wiederherstellen eines Agenten aus dem Snapshot

Bevor Sie mit dem Wiederherstellungsprozess beginnen, überprüfen Sie die damit verbundenen Risiken im Abschnitt [Vor den ersten Schritten](#before-erste Schritte).

Um einen Agenten aus einem Snapshot wiederherzustellen, gehen Sie wie folgt vor:

1. Laden Sie den Snapshot hoch, falls der Snapshot, von dem Sie wiederherstellen möchten, nicht in Ihrem virtuellen Agenten vorhanden ist.
2. Klicken Sie auf ! [vertikale Auslassungspunkte] (.. /.. /.. /assets/icons/vertical-ellipsis.svg) auf der rechten Seite neben dem Snapshot, den Sie wiederherstellen möchten. Es erscheint ein Auswahlmenü.
3. Klicken Sie auf **Wiederherstellen**. Ein Warndialogfeld wird angezeigt.
4. Geben Sie den Namen des Snapshots ein, um den Vorgang zu bestätigen.
  
Es wird eine neue Aufgabe erstellt, da das Löschen aller aktuellen Ressourcen aus dem virtuellen Agenten und das Wiederherstellen der Ressourcen aus dem Snapshot einige Zeit in Anspruch nehmen kann.
Eine Erfolgsbenachrichtigung wird angezeigt, sobald Ihr virtueller Agent erfolgreich aus dem Snapshot wiederhergestellt wurde.

## Einen Snapshot löschen

Sobald Sie die maximale Anzahl von Snapshots in Ihrem virtuellen Agenten erreicht haben, müssen Sie mit dem Löschen älterer Snapshots beginnen. 

!!! danger "Überprüfen Sie die Verwendung Ihres Snapshots"
    In der Produktion sollten Endpunkte an Snapshots weitergeleitet werden. Es ist wichtig, zunächst zu überprüfen, ob Endpunkte noch auf den Snapshot verweisen, den Sie entfernen möchten. Das Entfernen eines Snapshots, auf den noch von einem Ihrer Endpunkte verwiesen wird, unterbricht die Konversation für Ihre Kunden.

Um einen Snapshot zu löschen, gehen Sie wie folgt vor:

1. Öffnen Sie die Cognigy.AI-Schnittstelle.
2. Klicken Sie im Menü auf der linken Seite auf **Deploy > Snapshots**.
3. Wählen Sie auf der Seite **Snapshots** den Snapshot aus, den Sie löschen möchten. 
4. Klicken Sie auf ! [vertikale Auslassungspunkte] (.. /.. /.. /assets/icons/vertical-ellipsis.svg) auf der rechten Seite neben dem Snapshot, den Sie löschen möchten. Es erscheint ein Auswahlmenü. 
5. Wählen Sie **Löschen**. 
6. Klicken Sie im sich öffnenden Dialog auf **Bestätigen**.
  
Es wird eine neue Aufgabe erstellt und Ihr Snapshot wird entfernt.

## Snapshot-Kompatibilität

Snapshots, die in älteren Versionen von Cognigy.AI erstellt wurden, können problemlos in neuere Versionen der Plattform importiert werden und werden vollständig unterstützt.

Snapshots, die in neueren Versionen erstellt wurden, sind jedoch möglicherweise nicht mit älteren Versionen kompatibel und werden nicht unterstützt.

Das Importieren und Wiederherstellen eines Snapshots aus einer neueren Version in eine ältere Version von Cognigy.AI wird nicht empfohlen, da dies zu unerwarteten Fehlern führen kann.

## Bereitstellen von virtuellen Agenten in der Produktion mit Snapshots

Die folgenden drei Szenarien zeigen die empfohlenen Methoden zum Bereitstellen virtueller Agents in der Produktion. Betrachten Sie einen Agenten in Cognigy.AI als Analogie zu einem Projekt in einer anderen Software.

### Verwenden Sie einen einzelnen virtuellen Agenten

Das Snapshot-Konzept ermöglicht es Ihnen, Ihre virtuellen Agenten über Endpunkte verfügbar zu machen, während Sie bereits an der nächsten Version Ihres virtuellen Agenten arbeiten. Dieses Szenario ist das einfachste von allen, aber auch ziemlich elegant. 

Nehmen wir an, Sie haben einen virtuellen Agenten namens **Order Bot** für Ihr Restaurant.

Die Entwickler des Bots würden wie gewohnt Flows, Lexika, Absichten und alle anderen Ressourcen erstellen. Schließlich erreichen Sie einen Zustand, in dem Sie für Ihre Kunden veröffentlichen möchten. Es muss ein neuer Snapshot erstellt werden. Sie müssen kein herunterladbares Paket für den Snapshot vorbereiten, da Sie es nicht an einen anderen Ort herunterladen und hochladen – alles verbleibt im Projekt des aktuellen virtuellen Agenten.

Um den neuen Snapshot freizugeben, gehen Sie zu Ihren Endpunkten, z. B. Ihrem Webchat-Endpunkt, der auf Ihrer Website verwendet wird, und wählen Sie den neuen Snapshot und die darin enthaltenen Flows aus.

Da Sie jetzt Ressourcen innerhalb des Snapshots in der Produktion verwenden, können Entwickler die Flows im virtuellen Agenten direkt ändern, ohne die Konversationslogik für Ihre Kunden zu unterbrechen.

### Verwenden Sie mehrere virtuelle Agenten

Für mehr Kontrolle darüber, was tatsächlich in der Produktion ausgeführt wird, sollte dieser Ansatz gewählt werden.

Nehmen wir an, Sie möchten einen virtuellen Agenten für FAQs auf ihrer Website erstellen.
In diesem Fall sollten zwei virtuelle Agenten in Cognigy.AI erstellt werden:

- FAQ Bot-Entwicklung
- FAQ Bot-Produktion

Entwickler haben nur Zugriff auf den **FAQ Bot-Entwicklung** Agent. Alle Flows, Lexika, Absichten und alle Entwicklungen im Allgemeinen finden hier statt. Schließlich wird ein bestimmter Zustand erreicht, und es wird ein Snapshot erstellt. Ein herunterladbares Paket für den Snapshot muss erstellt werden, und der Snapshot muss heruntergeladen werden.

Um den Snapshot freizugeben, lädt eine Person mit Zugriff auf den **FAQ Bot-Produktionsagent** den gepackten Snapshot hoch und verweist dann den produktiven Webchat-Endpunkt auf die neue Version des Snapshots.

Denken Sie daran, dass **Snapshots nicht wiederhergestellt** werden müssen, damit Endpunkte ihren Inhalt verwenden können. Der Agent **FAQ Bot production** sollte keine direkten Ressourcen wie Flows enthalten. Es sollten nur Snapshots gespeichert werden, und seine Endpunkte sollten direkt auf diese Snapshots verweisen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/deploy/images/deployment-two-agents.drawio.png" width="100%" />
  <figcaption>Deployment-Konzept mit Snapshots und zwei Agenten (Projekten)</figcaption>
</figure>

### Verwenden Sie mehrere virtuelle Agenten mit mehreren Cognigy.AI Systemen

Sie können im Vergleich zum Konzept [Using Multiple Virtual Agents](#use-multiple-virtual-agents) noch einen Schritt weiter gehen, wenn Sie über mehrere physisch getrennte Cognigy.AI Installationen verfügen.

Nehmen wir an, Sie verfügen über die folgenden Umgebungen:

-**Dev**. Eine Cognigy.AI Installation mit niedrigen Hardwarespezifikationen für Entwicklungszwecke.
-**Inszenierung**. Eine Cognigy.AI Installation mit höheren Hardwarespezifikationen für Staging-Zwecke, bei der Akzeptanztests für neue Versionen durchgeführt werden.
-**Produktion**. Eine Cognigy.AI Installation mit hohen Hardwarespezifikationen für Produktionszwecke.

In diesem Fall haben Ihre Entwickler nur Zugriff auf virtuelle Agentenprojekte in der **Dev**-Installation.
Sie entwickeln Bots, schaffen völlig neue Erfahrungen oder verbessern bereits bestehende Lösungen.
Sobald sie einen gewünschten Zustand in ihren Projekten erreicht haben, erstellen sie neue Snapshots.
Herunterladbare Pakete für Snapshots werden dann erstellt und den Teams zur Verfügung gestellt, die an der **Staging**-Installation arbeiten.

Staging-Personen erhalten die Snapshots von Entwicklern
und laden Sie sie in ihre virtuellen Agentenprojekte im **Staging**-System hoch.
Sie verweisen ihre Endpunkte auf die neuen Snapshots und führen Akzeptanztests durch.
Wenn sie Fehler finden, informieren sie ihre Entwicklungsteams, die dann die Probleme beheben und neue Snapshots bereitstellen.
Wenn die Tests erfolgreich verlaufen, werden die Snapshots in das **Produktionssystem** verschoben.

Personen mit Zugriff auf das Produktionssystem (in der Regel nur eine sehr kleine Gruppe von Personen) verweisen die produktiven Endpunkte auf die neuen Snapshots
von den Teams zur Verfügung gestellt werden, die die Qualität der **Inszenierung**
System.
Die **Produktion**
System ist auch der Ort, an dem
in dem [Cognigy Insights](.. /.. /.. /insights/cognigy-insights.md) wird verwendet, um zu verstehen, wie die tatsächlichen Benutzer die virtuellen Agenten verwenden.
da die produktive Interaktion nur auf diesem System stattfindet.

## Mehr Informationen

- [Endpunkte](endpoints.md)
- [Flüsse](.. /build/flows.md)