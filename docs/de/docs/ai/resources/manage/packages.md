---
Titel: "Pakete" 
slug: "Pakete" 
ausgeblendet: false 
---

# Pakete

_Pakete_ ermöglichen den Export und Import einzelner Ressourcen, wie z. B. Flows oder Lexika, um diese Ressourcen mit anderen Teams zu teilen. Pakete enthalten automatisch ihre direkten Abhängigkeiten und können nach dem Herunterladen als portables ZIP-Archiv freigegeben werden.

Sie können entweder ein Paket für eine einzelne Ressource oder für mehrere Ressourcen erstellen.

Die folgenden Agentenressourcen können in einem Paket enthalten sein:

- [Flüsse](.. /build/flows.md)
- [Absichten](.. /.. /nlu/nlu-overview/overview.md#intents)
- [Lexika](.. /build/lexicons.md)
- [NLU-Anschlüsse](.. /build/nlu-connectors.md)
- [Endpunkte](.. /.. /endpoints/overview.md)
- [Playbooks](.. /test/playbooks.md)
- [Verbindungen](.. /build/connections.md)

## Erstellen von Paketen mit einer einzelnen Ressource

Um ein Paket aus einer einzelnen Ressource zu erstellen, navigieren Sie zu einer Ressourcenliste, z. B. **Flows**, klicken Sie auf die **sekundäre Menüschaltfläche** auf der rechten Seite des Elements und klicken Sie dann im Menü auf **Als Paket exportieren**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Create_Package.png" width="80%" />
</figure>

Dadurch wird eine **Paketerstellungsaufgabe** gestartet, und Sie werden benachrichtigt, dass das Paket erstellt wurde. Sobald die Aufgabe abgeschlossen ist, können Sie das Paket herunterladen, indem Sie auf den Link im Aufgabenmenü klicken. Wenn Sie auf den Link klicken, wird ein Dialogfeld zum Speichern von Dateien in Ihrem Browser geöffnet - wählen Sie einen Speicherort aus, um den Download zu starten.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Download_Package.png" width="80%" />
</figure>

## Erstellen von Paketen mit mehreren Ressourcen

Neben dem Exportieren oder Importieren einzelner Ressourcen in Paketen können Sie auch mehrere Ressourcen gleichzeitig exportieren. Navigieren Sie zu **Paketierung** im Abschnitt **Verwaltung** der Agenten-Seitenleiste. Dadurch wird unser Verpackungstool geöffnet.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Import-Export_page.png" width="80%" />
</figure>

Hier können Sie mit dem Exportieren oder Importieren eines Pakets beginnen.

### Exportieren
Ab Release v4.5.0 können Sie eine / viele / alle Ressourcen auswählen, indem Sie die entsprechenden Checkboxen für jede Ressource per Klick aktivieren. Legen Sie dann den Namen fest, erstellen Sie das Paket und starten Sie den Download. Sie können auch unsere Suchfunktion verwenden, um die Ressource, die Sie exportieren möchten, schnell zu identifizieren und zu suchen.

### Importieren
Ähnlich wie beim Export ist auch der Import von Paketen unkompliziert. Ziehen Sie einfach ein Paket per Drag & Drop auf den Bereich am oberen Rand des Paketerstellungstools oder verwenden Sie die Dateiauswahlfunktion. Ihr Paket wird von Cognigy.AI hochgeladen und bearbeitet. Nach der Analyse zeigt das Verpackungstool den Inhalt des Pakets an, und Sie können fortfahren und ihn importieren.

## Paket-Kompatibilität

Pakete, die in älteren Versionen von Cognigy.AI erstellt wurden, können problemlos in neuere Versionen der Plattform importiert werden und werden vollständig unterstützt.

Pakete, die in neueren Versionen erstellt wurden, sind jedoch möglicherweise nicht mit älteren Versionen kompatibel und werden nicht unterstützt.

Das Importieren eines Pakets aus einer neueren Version in eine ältere Version von Cognigy.AI wird nicht empfohlen, da dies zu unerwarteten Fehlern führen kann.

## Importieren von Paketen, die vor v4.0.0 erstellt wurden

Pakete, die vor v4.0.0 erstellt wurden, können Sonderzeichen enthalten, die in der aktuellen Version nicht zulässig sind. 
Um ihren Import zu ermöglichen, werden diese Zeichen entfernt, und falls dies zu einer Namensduplizierung führt, wird ein Index-Iterator hinzugefügt.

Zum Beispiel:

* altes Paket (vor v4.0.0)
    * Absichtsname>2
    * absichtsname<2
  * current version
    * intentName 2
    * intentName 2 (2)

## Import Configuration

As of v4.5.0, importing a Package will show you conflict resolution options in case e.g. name conflicts occur. You can either select a conflict resolution strategy for the complete import or per resource.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Import_Configuration.png" width="80%" />
</figure>

## Gebietsschema-Zuordnung

Wenn das Paket einen Flow für den Import enthält, müssen Sie für jedes Gebietsschema aus dem Paket eine Gebietsschemazuordnung bereitstellen. Sie können entscheiden, ob Sie ein Paketgebietsschema einem Agentengebietsschema zuordnen oder es nicht importieren möchten. Es ist jedoch zwingend erforderlich, das primäre Gebietsschema aus dem Paket dem primären Gebietsschema des Agenten zuzuordnen.

## Konfliktmanagement

Falls Ihr Agent bereits die Ressourcen aus dem Paket enthält, müssen Sie entscheiden, wie Cognigy.AI mit den Duplikaten umgehen soll. Sie können entweder eine Konfliktlösungsmethode für alle Ressourcen oder für jede Ressource unabhängig auswählen. Derzeit unterstützen wir das Importieren einer Ressource **als Kopie** oder durch **Ersetzen** der vorhandenen Version.

Nachdem Sie eine Konfliktlösungsstrategie ausgewählt haben, klicken Sie auf **Importieren**, um den Paketimport zu starten.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Conflict_Import_handling.png" width="80%" />
</figure>

!!! Warnung "Pakete als Vorlagen verwenden: Knoten-IDs und Importieren von Paketen"
    Knoten-IDs ändern sich beim Import nicht, um sicherzustellen, dass hartcodierte Verknüpfungen zwischen Flows und Knoten nicht unterbrochen werden.
    Wenn Sie einen Flow mehrmals in dasselbe Projekt importieren müssen, können Sie einen Knoten löschen und neu erstellen, um ID-Konflikte zu vermeiden.