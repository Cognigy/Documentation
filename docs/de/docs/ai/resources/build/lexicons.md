---
 Titel: "Lexika" 
 Schnecke: "Lexika" 
 ausgeblendet: false 
---
# Lexika

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.52-blue.svg)] (.. /.. /.. /release-notes/4.52.md)

**Lexika** sind Sammlungen von domänenspezifischen **Schlüsselwörtern** (auch als **Entitäten** bezeichnet), die an einen Flow angehängt werden können. Ein Lexikon kann als ein Wörterbuch betrachtet werden, das es dem virtuellen Agenten ermöglicht, bestimmte Wörter wie Automarken, Produktgruppen oder Postleitzahlen zu "verstehen". Sobald eine Keyphrase erkannt wird, wird sie zur weiteren Verwendung im Objekt [Input]({{config.site_url}}ai/tools/interaction-panel/input/) veröffentlicht. Dieser Vorgang wird als **Slot-Mapping** bezeichnet.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/c95b04b-lexicon-small.jpg" width="100%" />
</figure>

Weitere Informationen zu Anwendungsfällen für Lexika finden Sie im Hilfecenter-Artikel [Abgleichen von Benutzerausdrücken mit einem Lexikon](https://support.cognigy.com/hc/en-us/articles/360014776979-Match-user-expressions-with-a-Lexicon. 

## Einschränkungen

- Maximal 1 Schlüsselphrase und 199 Synonyme pro Eintrag (Zeile).
- Maximal 250 Slots pro Lexikon.
- Maximal 100.000 Einträge pro Lexikon.

## Keyphrases verwalten<div class="divider"></div>Einzelne Lexikoneinträge werden als **Schlüsselwörter** bezeichnet. Schlüsselwörter haben **Slots** (auch als Tags bezeichnet) und **Synonyme** und können von der [NLU]({{config.site_url}}ai/nlu/nlu-overview/overview/) verwendet werden. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/973f877-lexicon-keyphrase.jpg" width="100%" />
</figure>

Im obigen Beispiel lautet die **Schlüsselphrase** *Apple iPhone*. Die **Slots**, die gefüllt werden, wenn diese Schlüsselphrase erkannt wird, sind *device* und *mobile*. Sein Synonym ist *Cooles Telefon*. 

### Keyphrasen hinzufügen
Um eine neue Keyphrase hinzuzufügen, gehen Sie in das Eingabefeld ''Neue Keyphrase eingeben'', geben Sie den Namen der Keyphrase ein und drücken Sie die Eingabetaste.

### Keyphrases bearbeiten
Um eine Keyphrase zu bearbeiten, klicken Sie einfach auf den Namen der Keyphrase und es erscheint ein Eingabefeld. Um Tags/Synonyme hinzuzufügen, klicken Sie einfach in das entsprechende Textfeld, geben Sie den Tag-/Synonymnamen ein und drücken Sie die Eingabetaste. 

### Keyphrase-Daten hinzufügen 
Sie können auch Daten zu Lexika hinzufügen, die beim Auslösen einer Keyphrase im Eingabeobjekt angezeigt werden, und daher ist es sinnvoll, hier so etwas wie Produkt-IDs zu hinterlegen. Um Daten hinzuzufügen, klicken Sie einfach auf den Pfeil "Erweitern" rechts neben dem Keyphrase-Eintrag und geben Sie dann die gewünschten Daten im JSON-Format ein.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/1776c15-lexiconData.PNG" width="100%" />
</figure>

### Keyphrases löschen
Es gibt zwei Möglichkeiten, eine Keyphrase zu löschen: Die eine besteht darin, die Keyphrase zu erweitern, indem Sie auf den "Expand"-Pfeil auf der rechten Seite des Menüs klicken und dann auf die Schaltfläche "LÖSCHEN" in der unteren rechten Ecke klicken. Eine andere Möglichkeit besteht darin, die gewünschte(n) Keyphrase(s) zu markieren, indem Sie auf das Kontrollkästchen links neben einer Keyphrase klicken und dann nach unten scrollen, um sie zu löschen. Auf diese Weise können Sie mehrere Schlüsselwörter löschen.

### Suche Schlüsselwörter
Sie können Ihre Keyphrases über die Suchleiste in der oberen rechten Ecke durchsuchen. Dadurch werden Schlüsselwörternamen, Tags und Synonyme in den Suchergebnissen zurückgegeben.

### Keyphrases navigieren

Unten können Sie zu verschiedenen Seiten navigieren und die Anzahl der Keyphrases umschalten, die Sie pro Seite anzeigen möchten. Dies ist sehr praktisch, wenn Ihre Lexika zu wachsen beginnen und Dutzende von Einträgen haben - wechseln Sie einfach zu einer kleineren Seitengröße auf kleineren Bildschirmen oder erhöhen Sie das Limit der Einträge auf einer Seite für die Verwendung großer Monitore.

!!! Warnung "Hängen Sie Ihre Lexika an"
    Lexika werden von der Cognigy NLU nicht automatisch erkannt, nachdem sie im Flusseditor hinzugefügt wurden. Sie müssen an die spezifischen Flüsse angehängt werden, in denen sie verwendet werden sollen. Weitere Informationen finden Sie auf der Seite [Angehängte Lexika]({{config.site_url}}ai/nlu/attachments/attached-lexicons/).

!!! Tipp "Zugriff auf Slots in deinem Flow"
    Erstellen Sie intelligente virtuelle Agenten, die Ihre benutzerdefinierten Bibliotheken erkennen, indem Sie Lexicon-Schlüsselwörter in den NLU-Slot-Zuordnungsergebnissen finden. Weitere Informationen finden Sie auf der [Slot-Mapping-Seite]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/).

## Lexika hoch- und herunterladen

Lexikonbibliotheken können im CSV-Format hoch- und heruntergeladen werden.

### Anforderungen an CSV-Dateien

#### Kodierung

Um die Datei hochzuladen, stellen Sie sicher, dass Ihre CSV-Datei UTF-8-codiert ist.

#### Format

Die CSV-Datei sollte folgendes Format haben:

'''txt
SCHLÜSSELWORT,"TAGS","SYNONYME","{DATEN}"
'''

Beispiel:

'''txt
Keyphrase1,"tag","synonym1","{""key1"":""value""}"
Keyphrase2,"tag,tag2","synonym2,synonym2_2","{""key2"":""value""}"
Keyphrase3,"tag,tag2,tag3","synonym3,synonym3_2,synonym3_3","{""key3"":""value""}"
'''
#### Verbotene Zeichen

{! _includes/ai/forbidden-characters.md !}

### Lexika hochladen

Um Lexika hochzuladen, gehen Sie folgendermaßen vor:

1. Gehen Sie zu **Erstellen > Lexika**.
2. Öffnen Sie das vorhandene Lexikon.
3. Klicken Sie in der oberen rechten Ecke der Seite des Lexikon-Editors auf ! [hochladen] (.. /.. /.. /assets/icons/upload.svg).
4. Wählen Sie im Fenster **Lexikon-CSV-Datei importieren** eine der folgenden Optionen aus:
    - **Import doppelter Schlüsselwörter überspringen** — die Option überspringt den Import von Synonymen aus der CSV-Datei, die bereits im aktuellen Lexikon vorhanden sind. Wenn die CSV-Datei doppelte Synonyme enthält, werden diese beim Import ignoriert. Es werden nur neue und eindeutige Synonyme importiert.
    - **Aktuelle Schlüsselwörter überschreiben** — die Option ersetzt alle aktuellen Schlüsselwörter im Lexikon durch die Schlüsselwörter aus der CSV-Datei. Wenn im Lexikon Schlüsselwörter vorhanden sind, werden diese vollständig überschrieben, und nur die Schlüsselwörter aus der CSV-Datei bleiben erhalten.
    - **Tags und Synonyme aus den aktuellen und importierten Schlüsselwörtern zusammenführen** — die Option ermöglicht das Zusammenführen der Synonyme von Schlüsselwörtern sowohl aus dem aktuellen Lexikon als auch aus der CSV-Datei. Nur eindeutige Synonyme werden zusammengeführt. Wenn ein Synonym sowohl im aktuellen Lexikon als auch in der CSV-Datei vorhanden ist, wird dieses Synonym nicht zusammengeführt.
5. Klicken Sie auf **CSV-Datei auswählen**.

Um den Upload-Prozess zu verfolgen, können Sie die Aufgabe **Lexikon importieren** anzeigen, indem Sie auf ! [Aufgaben-Menü] (.. /.. /assets/icons/task-menu.svg) in der oberen rechten Ecke.

### Lexika herunterladen

Gehen Sie folgendermaßen vor, um Lexika herunterzuladen:

1. Gehen Sie zu **Erstellen > Lexika**.
2. Öffnen Sie das vorhandene Lexikon.
3. Klicken Sie in der oberen rechten Ecke der Seite des Lexikon-Editors auf ! [herunterladen] (.. /.. /assets/icons/download.svg). Warten auf den Zeitpunkt, an dem die CSV-Datei zum Herunterladen generiert wird. Um diesen Vorgang zu verfolgen, können Sie die Aufgabe **Lexikon exportieren** anzeigen, indem Sie auf ! [Aufgaben-Menü] (.. /.. /assets/icons/task-menu.svg) in der oberen rechten Ecke.
4. Wenn die Aufgabe abgeschlossen ist, klicken Sie auf! [Wolke] (.. /.. /.. /assets/icons/cloud.svg) in der oberen rechten Ecke der Seite Lexikon-Editor.

Die Datei wird heruntergeladen.

## Eingebaute Steckplätze<div class="divider"></div>Cognigy.AI verfügt über eine integrierte Slot-Erkennung für eine breite Palette gängiger Datentypen. Es ist nicht notwendig, benutzerdefinierte Lexikonbibliotheken zu erstellen, um diese Datentypen zu erkennen, da sie automatisch von der Cognigy NLU gefunden werden. Die integrierten Slot-Typen sind unten aufgeführt:

| Slot-Typ |
|-------------|
| Datum |
| Anzahl |
| Dauer |
| Temperatur |
| Alter |
| E-Mail |
| Prozentsatz |

!!! Hinweis "Eingebaute Steckplatzdetails"
    Weitere Informationen zur Verwendung von integrierten Slots und ihren verschiedenen Formaten finden Sie auf der [Slot-Mapping-Seite]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/).

## Generative KI

Um die generative KI-Technologie zum Erstellen eines neuen Lexikons zu verwenden, lesen Sie die [Generative KI](.. /.. /generative-ai.md#generate-lexicons) Artikel.