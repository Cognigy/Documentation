---
 Titel: "Transkript-Explorer" 
 Schnecke: "Transkript-Explorer" 
 ausgeblendet: false 
---
# Transkript-Explorer

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.48-blue.svg)] (.. /release-notes/4.48.md)

Mit dem Transkript-Explorer erhalten Sie eine Inspektionsanwendung, mit der Sie Nachrichten auswerten können 
im Detail, um Ihren Agenten, Ihren Kundenservice und die Benutzererfahrung Ihrer Kunden zu verbessern.

Der Transkript-Explorer ermöglicht es Ihnen, in einer Liste von Transkripten nach Schlüsselbegriffen wie "Buchung", "Stornierung", "Nachricht" zu suchen.

Klicken Sie im Menü der Insights-Seitenleiste auf **Transkript-Explorer**.

## Nachrichtenrecherche<div class="divider"></div>Die Kundensitzungen werden in einer Liste mit folgenden Daten angezeigt: 

- Sitzungs-ID
- Kontakt-ID
- Anzahl der Nachrichten
-Kanal
-Endpunkt
- Datum und Uhrzeit der letzten Nachricht

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/transcript-explorer.png" width="100%" />
  <figcaption>Transkript-Explorer zeigt eine Liste von Transkripten (Konversationen) an</figcaption>
</figure>

- Verwenden Sie die lokalen Filteroptionen, um Ihre Recherche zu konfigurieren. Sie können bestimmte Sitzungen mit Transkripten finden, indem Sie nach Textnachrichten, Sitzungs-ID oder Kontakt-ID suchen. Verwenden Sie Ausdrücke oder Schlüsselwörter, um genauere Suchergebnisse zu erhalten. Sie können die Sitzungs-ID oder Kontakt-ID kopieren, indem Sie auf ! [vertikale-Auslassungspunkte] (.. /assets/icons/vertical-ellipsis.svg).
- Verwenden Sie die Optionen [global filter]({{config.site_url}}insights/global-filter/), um Ihre Recherche zu konfigurieren.
- Sie können eine oder mehrere Nachrichtenquellen auswählen, z. B. **Virtuelle Agentenmeldungen**, **Benutzernachrichten** oder **Agentennachrichten** durch **lokalen Filter** oben rechts.  Wenn Sie nur nach Nachrichten suchen möchten, die für den virtuellen Agenten spezifisch sind, klicken Sie auf die Filteroption Nachrichten des virtuellen Agenten und lassen Sie die anderen Optionen deaktiviert.
- Sie können einen oder mehrere Flows auswählen, um nur Nachrichten anzuzeigen, die während der ausgewählten Flow-Übergabe generiert wurden.

!!! Anmerkung
    Verwenden des Schiebereglers "Negieren". Alle Filteroptionen außer der ausgewählten werden analysiert. Wenn Sie z. B. Agentennachrichten auswählen und **Negieren** umschalten, werden alle Daten mit Ausnahme der Agentennachrichtendaten analysiert.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/fd64fcb-Transcript_Explorer_n2.svg" width="100%" />
  <figcaption>Lokaler Filter "Quelle"</figcaption>
</figure>

- Sie können die Ergebnisse auf eine Konversation beschränken, die eine bestimmte Anzahl von Nachrichten enthält, indem Sie die Filter "Nachrichtenanzahl" verwenden.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/message-count-filter-inputs.png" width="50%" />
  <figcaption>Lokale Filter "Anzahl der Nachrichten"</figcaption>
</figure>

- Um die Ergebnisse auf eine Konversation zu beschränken, die einen bestimmten Schritt enthält, siehe [Enthält Schritt](.. /insights/transcript-explorer.md#contains-step-filter) filtern.

- Wenn globale und lokale Filteroptionen eingestellt sind, geben Sie eine Schlüsselphrase wie "Buchung", "Stornierung", "Zeitplan", "Nachricht" oder "Termin" usw. ein und Sie erhalten eine Liste aller Nachrichten, die Ihren Suchkriterien entsprechen.

- Der Transkript-Explorer bietet eine Sortierfunktion für "Nachrichtenanzahl" und "Letzte Nachricht". 
- Wenn Sie auf "Nachrichtenanzahl" klicken, werden die aufgelisteten Transkripte abwechselnd nach auf- und absteigender Reihenfolge sortiert.
- Mit einem Klick auf "Letzte Nachricht" werden die aufgelisteten Transkripte abwechselnd nach den neuesten/ältesten Einträgen sortiert.

### Enthält Schrittfilter

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.49-blue.svg)] (.. /release-notes/4.49.md)

Um Ihre Suchergebnisse weiter zu verfeinern, um nur Unterhaltungen einzubeziehen, die einen bestimmten Schritt enthalten,
Klicken! [Live-Folgen] (.. /assets/icons/filter.svg) im Suchfeld und wählen Sie einen Schritt aus der Liste aus. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/contains-step-filter-button.png" width="100%" />
  <figcaption>Liste der Schritte, die über die Filterschaltfläche geöffnet werden (rot markiert)</figcaption>
</figure>

### Lokale Filter zurücksetzen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.16-blue.svg)] ({{config.site_url}})

Sie können lokale Filter zurücksetzen, indem Sie auf die Schaltfläche "Zurücksetzen" klicken. Es wird angezeigt, sobald Sie einen Filter mit einem nicht standardmäßigen Wert haben.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/transcript-explorer-reset.png" width="50%" />
  <figcaption>Die Schaltfläche Zurücksetzen wurde angezeigt, nachdem der virtuelle Agent als einzige Quelle ausgewählt wurde.</figcaption>
</figure>

## Konversation untersuchen 

- Um ein bestimmtes Transkript zu überprüfen, klicken Sie auf ein Transkript-Konversationselement in der Liste, und die Transkriptdetails werden auf der rechten Seite in einem Konversationsfenster angezeigt.

- Verwenden Sie die Bildlaufleiste, um durch die Konversation zu navigieren. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/781cb26-Transcript_Explorer_n4.svg" width="100%" />
  <figcaption>Transkript-Explorer: Ausgewähltes Transkript wird auf der rechten Seite für die Recherche angezeigt</figcaption>
</figure>

Wenn Sie auf das "Profil"-Symbol auf der linken oberen Seite des Konversationsfensters klicken, werden die **Konversationsdetails** des Benutzers und die **Kontaktprofildetails** des Benutzers angezeigt. 
 
**Details zur Konversation**:

- Conversation-ID (eindeutig)
- Erste Nachricht (Datum und Uhrzeit)
- Letzte Nachricht (Datum und Uhrzeit)
- Anzahl der Benutzernachrichten (numerischer Wert)
- Anzahl der Bot-Nachrichten (numerischer Wert)
- Anzahl der Agentennachrichten (numerischer Wert)
- Flow-Name (z. B. 00 Main)
- Bewertung (Benutzerfeedback im Gespräch: Daumen-runter-Symbol: Bewertung 0 bis 4 / Daumen-hoch-Symbol: Bewertung 5 bis 10)
- Kommentar (Benutzer kann einen Kommentar in einer Konversation schreiben, die hier angezeigt wird)

**Details zum Kontaktprofil**:

-Vorname
-Nachname
-E-Mail
-Geschlecht
-Ändern
-Geburtstag
-Ort 
- Akzeptierte DSGVO (akzeptierte Datenschutz-Grundverordnung)
- Erreichte Ziele (alle Ziele, die in der Sitzung erreicht wurden)

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/76ad683-Transcript_Explorer_n5.svg" width="100%" />
  <figcaption>Ausgewähltes Transkript mit angezeigten Kundenprofildaten</figcaption>
</figure>

### Experten-Modus

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.15-blue.svg)] ({{config.site_url}})

Sie können einen "Expertenmodus" aktivieren, indem Sie auf einen Schalter oben im Bedienfeld des Transkripts klicken. Dies wird dazu führen, dass
Bereitstellen zusätzlicher Informationen zu Unterhaltungsnachrichten (falls vorhanden), z. B.:

- Welcher Intent ausgelöst wurde und welche Punktzahl er hat
- Welche Slots wurden gefüllt?

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/expert-mode.png" width="50%" />
  <figcaption>Transkript mit aktiviertem "Expertenmodus" </figcaption>
</figure>

### Offener Durchfluss 
So überprüfen Sie Ihren [Flow](.. /ai/resources/build/flows.md) oder zur Verbesserung der Konfiguration bietet der Transkript-Explorer die Kontextmenüoption **Flow öffnen**, wenn Sie mit der rechten Maustaste auf eine bestimmte Nachricht klicken, die im Konversationsbereich angezeigt wird.
Wenn Sie auf die Schaltfläche klicken, gelangen Sie zum zugehörigen Flow in Cognigy.AI.

!!! Anmerkung
    Das Kontextmenü "Flow öffnen" ist bei "Drop-off"-Schritten oder reduzierten Schritten (Schritte mit Pfeilen) nicht verfügbar. 
    Die Option "Open Flow" ist nicht verfügbar, wenn es keinen entsprechenden Flow in Cognigy gibt. KI oder wenn die Daten aus einem Snapshot stammen.

Über das Feld "Suchen" können Sie Schlüsselwörter eingeben, um die Nachrichten zu finden, in denen diese Schlüsselwörter in Konversationen verwendet wurden.

- Geben Sie ein Stichwort in das Suchfeld ein, z. B. "Termin". Alle Transkript-Konversationen, die das Schlüsselwort enthalten, werden nun angezeigt. 
- Klicken Sie auf eine beliebige Transkript-Konversation in der Liste.
- Die angeklickte Transkript-Konversation, die den Suchbegriff enthält, wird in einem Konversationsfenster angezeigt. 
Die Nachricht, die den Suchtext enthält, hat einen grauen Hintergrund.
  Außerdem wird der übereinstimmende Text in der Nachricht selbst gelb hervorgehoben.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/5326ee3-Open_Flow_in_Transcript_Explorer_3.svg" width="100%" />
  <figcaption>Schlüsselwort in einer Nachricht hervorgehoben und Kontextmenü "Open Flow" angezeigt</figcaption>
</figure>

## Navigieren zum Nachrichten-Explorer<div class="divider"></div>Mit der Nutzung des Transkript-Explorers bietet Ihnen Cognigy die Möglichkeit, nach der Auswahl einer Konversation direkt in den Nachrichten-Explorer zu wechseln, der Ihnen die vorherige Nachricht und die nachfolgende Nachricht zur ausgewählten Nachricht anzeigen kann. Diese Option unterstützt eine detailliertere Konversationsanalyse.

Um vom Transkript-Explorer in den Nachrichten-Explorer zu wechseln, gehen Sie wie folgt vor:

- Wählen Sie eine Transkriptnachricht in der Liste Transkript-Explorer aus. Auf der rechten Seite des Bildschirms wird der Unterhaltungsbereich angezeigt, in dem der Konversationsfluss angezeigt wird. 

- Klicken Sie nun auf eine einzelne Nachricht, um die konkrete Gesprächssituation zu analysieren.

Der Meldungs-Explorer wird gestartet und zeigt die ausgewählte Meldung mit der vorherigen Meldung und der folgenden Meldung auf dem Bildschirm an. 

## Mehr Informationen 

- [Nachrichten-Explorer]({{config.site_url}}insights/message-explorer/)