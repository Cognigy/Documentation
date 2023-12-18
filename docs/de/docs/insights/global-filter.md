---
 Titel: "Globaler Filter" 
 Slug: "Global-Filter" 
 ausgeblendet: false 
---
# Globaler Filter

## Globale Filteroptionen<div class="divider"></div>Cognigy Insights verfügt über globale Filter. Diese Filter können in einem Auswahlmenü gesetzt werden, indem Sie auf das Filtersymbol neben dem Benutzermenü-Symbol oben rechts in der Benutzeroberfläche klicken. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/ce5e349-tooltip_Insights_Filter.svg" width="100%" />
  <figcaption>Filtersymbol mit Tooltip</figcaption>
</figure>

Der globale Filter ist immer verfügbar, egal wohin Sie navigieren. Sobald Sie die Filter geändert haben, berücksichtigen alle Daten, die an einem beliebigen Ort visualisiert werden, Ihre Filterkonfiguration.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/06794a7-Global_filter_1_250.png" width="100%" />
  <figcaption>Menü "Globaler Filter"</figcaption>
</figure>

!!! Anmerkung
    Die globalen Filteroptionen sind in allen Anwendungen verfügbar, die in Cognigy Insights ausgeführt werden.

!!! Warnung
    Jede Änderung der Filtereinstellungen muss mit **Übernehmen** bestätigt werden, um aktiv zu sein.

Mehrere Filtermenüs bieten einen **Negieren**-Schieberegler. Wenn diese Option aktiviert ist, werden alle außer den ausgewählten Endpunkten analysiert. 

## Zeitrahmen<div class="divider"></div>!!! Anmerkung
    In v4.16 wurde der Zeitrahmenfilter aktualisiert, um den aktuell ausgewählten Datumsbereich anzuzeigen. Das Widget wird nun oben auf der Seite platziert.

    <figure>
    <img class="image-center" src="{{config.site_url}}insights/images/timeframe-top.png" width="100%" />
    <figcaption>Zeitrahmenfilter, der den ausgewählten Datumsbereich anzeigt.</figcaption>
    </figure>
    
Sie können den Zeitraum auswählen oder mit einer Datumsauswahl in einem Kalender individuell festlegen.

Verfügbare voreingestellte Zeiträume sind: 

- Letzte 7 Tage
- Letzte 30 Tage
- Letzte 365 Tage
- Diesen Monat
-Dieses Jahr
- Benutzerdefinierter Zeitraum (frei wählbar mit der Eingabe von Startdatum und Enddatum)

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/f1a1b85-Global_filter_Timeframe_2.png" width="50%" />
  <figcaption>Optionen zum Filtern von Zeitrahmen</figcaption>
</figure>

### Eingrenzen der Ergebnisse auf Minuten

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.16-blue.svg)] ({{config.site_url}})

Es ist möglich, Stunden für den gewählten Zeitraum auszuwählen.
Dies kann bei Bedarf hilfreich sein, um das Ergebnis auf einen präziseren Bereich einzugrenzen.
Aktivieren Sie dazu die **Uhrzeit auswählen**
beim Festlegen eines benutzerdefinierten Zeitrahmens.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/select-time.png" width="50%" />
  <figcaption>Benutzerdefinierter Zeitrahmen mit Minutengenauigkeit</figcaption>
</figure>

## Endpunkte<div class="divider"></div>Endpunkte stellen sicher, dass die kanalspezifischen Ein- und Ausgaben (Bilder, Galerien, Sprache) in das standardisierte Input-Objekt konvertiert werden. Auf diese Weise muss ein Cognigy Flow nur einmal entwickelt werden, danach kann er durch die Konfiguration von Endpoints auf vielen Kanälen bereitgestellt werden.
Beispiele für Endpunkte sind Webchat, Voice Gateway und Microsoft Teams.
Weitere Informationen finden Sie hier: [Endpunkte](.. /ai/endpoints/overview.md)

Sie können einen oder mehrere Endpunkte auswählen, die analysiert werden sollen. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/1fe8b3c-Endpoints_filter.svg" width="100%" />
  <figcaption>Filteroptionen für Endpunkte</figcaption>
</figure>

**Admin-Konsole (Interaktionsbereich)-Filter**

Ab Cognigy.AI 4.10.0 können Sie die Insights-Berichte auch für die Admin-Konsole (oder das Interaktions-Panel) filtern.

Wenn Sie also den virtuellen Agenten mit dem Interaktions-Panel getestet haben, können Sie nun auch dafür die Insights-Berichte abrufen.

- Öffnen Sie den globalen Filter **Endpunkte**. 
- Wählen Sie "Interaction Panel" und bestätigen Sie mit **Übernehmen**, um die Analytics-Daten angezeigt zu bekommen.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/c4625a8-5268_Global_filter_Interaction_Panel_2.png" width="100%" />
  <figcaption>Insights-Dashboard für den Filter "Interaction Panel"</figcaption>
</figure>

## Schnappschüsse<div class="divider"></div>!!! Anmerkung
    Vor der Version 4.15 war es nur möglich, die Daten eines einzelnen Snapshots auf einmal zu überprüfen.

Ein Snapshot ist ein exportierter Agent und enthält die erforderlichen Ressourcen.
In der Auswahlliste werden die verfügbaren Snapshots angezeigt, die analysiert werden können.
Weitere Informationen finden Sie hier: [Snapshots](https://docs.cognigy.com/docs/snapshots-1)

Standardmäßig zeigen wir die **Daten für alle Snapshots an, einschließlich der Daten, die gesammelt wurden 
ohne Snapshot (Live-Deployment, hier Option "Keine")**.

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.15-blue.svg)] ({{config.site_url}})

Sie können die Analysedaten granuell überprüfen, indem Sie nur die bevorzugten Snapshots auswählen.
Auch durch die Verwendung der Option "Negieren" – in diesem Fall schließen Sie bestimmte Optionen aus. 

Wenn Sie beispielsweise "Keine" und "Negieren" auswählen, werden alle Daten mit Ausnahme der Daten angezeigt, die von Endpunkten ohne ausgewählte Snapshots gesammelt wurden.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/snapshots.png" width="50%" />
  <figcaption>Der neue globale Filter "Snapshots"</figcaption>
</figure>

## Gebietsschemata<div class="divider"></div>Dieser Filter berücksichtigt die Gebietsschemas der verfügbaren Konversationen. 

Sie können ein oder mehrere Gebietsschemata auswählen, die analysiert werden sollen. 

Mit dem Schieberegler **Negieren** werden "alle außer den ausgewählten" Gebietsschemata analysiert.

Weitere Informationen finden Sie hier: [Lokalisierung]({{config.site_url}}ai/resources/manage/localization/).

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/2e76d97-Global_filter_Locales_2.svg" width="100%" />
  <figcaption>Lokale Filteroptionen</figcaption>
</figure>

!!! Anmerkung
    Um alle Filtereinstellungen auf einmal zu löschen, klicken Sie auf die Schaltfläche **Filter zurücksetzen**.  Wir zeigen es an, wenn der Wert eines globalen Filters nicht dem Standardwert entspricht.

## Bewertung

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.17-blue.svg)] ({{config.site_url}})

Mit diesem Filter können Sie die Analysedaten basierend auf der letzten Benutzerbewertung auswählen, die in einer Sitzung abgegeben wurde. Standardmäßig werden alle Daten angezeigt, unabhängig davon, ob Benutzerfeedback gegeben wird oder nicht.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/rating.png" width="50%" />
  <figcaption>Bewertungsfilter</figcaption>
</figure>

!!! Anmerkung
    Siehe Dokumentation für [Request rating Node]({{config.site_url}}ai/flow-nodes/other-nodes/request-rating/)

## Aktualisieren von Analytics-Datensätzen mit der REST-API<div class="divider"></div>Wenn Sie beabsichtigen, bestimmte Analysefelder in Insights-Dashboards für eine laufende Sitzung zu aktualisieren, müssen Sie die Update-API für Analysen verwenden, die unter [https://api-trial.cognigy.ai/openapi](https://api-trial.cognigy.ai/openapi) verfügbar ist.
Weitere Informationen finden Sie hier: [Using the API]({{config.site_url}}ai/developer-guides/using-api/).

Um die API "analytics" zu verwenden, müssen Sie **userId**, **projectId**, **sessionId** und **inputId** in der Anforderung angeben.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/0f15d77-OpenAPI_Analytics_v20_2.svg" width="100%" />
  <figcaption>OpenAPI-"Analysen" zum Aktualisieren von Analysedatensätzen</figcaption>
</figure>

## Freigeben der Anwendungs-URL<div class="divider"></div>Cognigy ist stets bestrebt, die Analyse und Verarbeitung von Konversationsdaten für Kunden zu verbessern und bietet die Möglichkeit, gemeinsam nutzbare URLs für die Insights-Anwendung zu verwenden.

Ausführlich:
Wenn Sie zu einem bestimmten Ziel in Insights navigieren und globale Filter anwenden, indem Sie die URL aus Ihrer Adressleiste kopieren und für ein Teammitglied freigeben, wird die Anwendung beim Öffnen der URL in denselben Zustand versetzt (dasselbe Tool, dieselben ausgewählten Daten, dieselben angewendeten Filter). 

Ihre Vorteile:

- Sie können auf jeder Insights-Seite neu laden, und es werden die globalen Filter wiederhergestellt, die Sie zuvor ausgewählt haben.
- Sie können ein geöffnetes Transkript im Transkript-Explorer neu laden und landen mit dem geöffneten Transkript auf derselben Seite.
- Sie können im Nachrichten-Explorer neu laden, während eine "Suche" angewendet wird, und auf den gleichen Stand gelangen, in dem Sie sich vor dem Neuladen befanden.
- Sie können im Nachrichten-Explorer neu laden, während Sie eine Nachricht ausgewählt haben, und zu der gleichen Nachricht gelangen, in der Sie sich vor dem Neuladen befanden.

## Mehr Informationen<div class="divider"></div>- [Cognigy Insights]({{config.site_url}}insights/cognigy-insights/)

- [Dashboard-Übersicht]({{config.site_url}}insights/dashboard-overview/)

- [Dashboard-Engagement]({{config.site_url}}insights/dashboard-engagement/)

- [NLU-Leistung des Dashboards]({{config.site_url}}insights/dashboard-nlu-performance/)

- [Schritt-Explorer]({{config.site_url}}insights/step-explorer/)

- [Transkript-Explorer]({{config.site_url}}insights/transcript-explorer/)

- [Nachrichten-Explorer]({{config.site_url}}insights/message-explorer/)

- [Bericht herunterladen]({{config.site_url}}insights/download-report/)