---
 Titel: "Cognigy Insights" 
 Schnecke: "Kognigie-Einblicke" 
 ausgeblendet: false 
---
# Cognigy Einblicke 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/overview.png" width="100%" />
</figure>

## Beschreibung

<div class="divider"></div>

Cognigy hat es sich zur Aufgabe gemacht, Ihnen die Tools zur Verfügung zu stellen, die Sie benötigen, um das Kundenerlebnis Ihrer Kunden zu verbessern.

Cognigy.AI verfügt über integrierte Analytics-Reporting-Funktionalitäten sowie eine OData,
Schnittstelle, auf die sich unsere Kunden verlassen können, um ihre Rohdaten abzurufen.
Unser integriertes Analyse-Dashboard bietet eine Reihe wichtiger Metriken
um die Nutzung und Leistung Ihrer Bots zu verstehen.
Wir waren der Meinung, dass es an der Zeit ist, ein verbessertes Erlebnis zu bieten, wenn es darum geht, die Leistung Ihrer Bots zu verstehen.
Aus diesem Grund haben wir ein neues Produkt entwickelt
genannt **Cognigy Insights**, das das statische Analyse-Dashboard vollständig durch eine ganze Reihe neuer Tools ersetzt.

Ab Version 4.10 bietet Cognigy eine komplett neu gestaltete Analytics-Lösung für Insights.

## Dashboard

<div class="divider"></div>


Cognigy Insights ist eine neue Anwendung, die das alte und statische Analyse-Dashboard ersetzt. Insights verfolgt die Daten Ihrer Kunden, während sie mit Ihren virtuellen Agenten interagieren, und stellt diese Daten auf einer Vielzahl neuer Dashboards und neuer Tools zur Verfügung.

Insights ist eine neue Anwendung, die Seite an Seite mit Cognigy.AI existiert und eng in das Cognigy.AI Produkterlebnis integriert ist.

Mit Cognigy.AI 4.10.0 haben wir unsere Funktionen zum Erstellen von Metriken verbessert, um benutzerdefinierte Metriken für jeden Dienst zu erhalten.

<figure><img class="image-center" src="{{config.site_url}}insights/images/ca1ca18-Agent_dashboard.svg" width="100%" /> Wählen Sie den <figcaption>Agenten aus, den Sie analysieren möchten</figcaption>
  
  
</figure>

- Beginnen Sie mit der Erstellung eines neuen Agenten oder der Auswahl eines vorhandenen Agenten in Ihrem Cognigy.AI.

<figure><img class="image-center" src="{{config.site_url}}insights/images/f21c0dc-Cognigy.AI_start_Insight_application_.svg" width="100%" /><figcaption>Agenten-Dashboard mit Seitenleistenmenü – wählen Sie Insights aus, um zur Analyselösung zu wechseln</figcaption>
  
  
</figure>

- Um zu Cognigy Insights zu wechseln, öffnen Sie das Menü in der Seitenleiste in Cognigy.AI und klicken Sie auf **Insights**. Wir haben diese Option verwendet, bevor wir Benutzer zu unserer Anwendung [Analytics]({{config.site_url}}ai/tools/analytics/agents-analytics/) geleitet haben.

!!! Anmerkung
    Wenn Sie sich in Cognigy.AI in einer agentenspezifischen Route befinden (Agent ist ausgewählt), sollte im Popup-Fenster [Benutzermenü]({{config.site_url}}insights/cognigy-insights/#user-menu) "Insights" angezeigt werden. Sie können zu Insights dieses Agenten navigieren, wenn Sie auf den Menüpunkt klicken.

Wenn Sie von Cognigy.AI zu Cognigy Insights wechseln, werden Sie zum Abschnitt "Insights" **Dashboard** weitergeleitet, beginnend mit dem Dashboard "Übersicht".

<figure><img class="image-center" src="{{config.site_url}}insights/images/overview_dashboard_overall.png" width="100%" /><figcaption>Dashboard "Insights-Übersicht"</figcaption>
  
  
</figure>

Sie finden alle möglichen verschiedenen Berichtstypen, die wichtige Metriken Ihres aktuell ausgewählten virtuellen Agenten visualisieren. 

Cognigy bietet drei Kategorien von Dashboards, die über das Insight-Sideboard-Menü verfügbar sind:

- [Übersicht Dashboard]({{config.site_url}}insights/dashboard-overview/) (befasst sich mit allgemeinen Analysen)  
- [Engagement Dashboard]({{config.site_url}}insights/dashboard-engagement/) (Analysen, die sich auf Kundenreaktionen in Konversationen konzentrieren)
- [NLU Performance Dashboard]({{config.site_url}}insights/dashboard-nlu-performance/) (diese Analysen beziehen sich auf Natural Language Understanding) 

## Lokaler Filter

<div class="divider"></div>

!!! Anmerkung
    Die lokalen Filteroptionen sind anwendungsspezifisch und werden im entsprechenden Abschnitt beschrieben.

## Globaler Filter

<div class="divider"></div>

Cognigy Insights verfügt über sogenannte globale Filter. Diese Filter sind sichtbar, egal wohin Sie navigieren. Sobald Sie die Filter geändert haben, berücksichtigen alle Daten, die an einem beliebigen Ort visualisiert werden, Ihre Filterkonfiguration.

- Zeitrahmen
-Endpunkte
-Schnappschuss
-Locales

- Um das globale Filtermenü zu öffnen, klicken Sie auf das Filtersymbol neben dem Benutzermenüsymbol oben rechts auf der Benutzeroberfläche.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/overview_dashboard_overall.png" width="100%" />
  <figcaption>Das globale Filtermenü ist geöffnet</figcaption>
</figure>

!!! Anmerkung
    Die globalen Filteroptionen sind in allen Anwendungen verfügbar, die in Cognigy Insights ausgeführt werden.
    Weitere Informationen zum globalen Filter finden Sie hier: [Globaler Filter]({{config.site_url}}insights/global-filter/).

## Benutzer-Menü

<div class="divider"></div>


Sie finden das [Benutzermenü]({{config.site_url}}ai/tools/user-menu/user-menu/) in der oberen rechten Ecke des Bildschirms (Benutzerprofil-Symbol)

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/32749de-tooltip_Insights_user_menu_80.svg" width="100%" />
  <figcaption>Benutzermenü-Symbol mit Tooltip</figcaption>
</figure>

- **[MeinProfil](.. /ai/tools/user-menu/my-profile.md)**
Im Abschnitt **Einstellungen** kann die **Sprache der Benutzeroberfläche** ausgewählt werden.
Spracheinstellungen in Insights oder Cognigy.AI wirken sich automatisch auf beide Anwendungen aus.
Insights unterstützt derzeit die folgenden Sprachen der Benutzeroberfläche: **Englisch**, **Deutsch**, **Koreanisch**, **Japanisch** und **Spanisch**.
Weitere Informationen finden Sie hier: [Mein Profil]({{config.site_url}}ai/tools/user-menu/my-profile/)

- **[Zugriffskontrolle]({{config.site_url}}ai/tools/user-menu/access-control/)**
In der Insights-Benutzerverwaltung können Sie neue Benutzerkonten anlegen.
Benutzer müssen über ausreichende Berechtigungen für den Zugriff auf die Insights-Anwendungen verfügen.   

- **[Details zur Organisation]({{config.site_url}}ai/tools/user-menu/organisation-details/)** 
In diesem Abschnitt wird die Gesamtzahl der Benutzerkonversationen und eine zeitachsenbezogene Anzahl von Konversationen als Liniendiagramm angezeigt.  Sie können den Zeitraum in einem Dropdown-Menü auswählen. 

- **[Dokumentation]({{config.site_url}})** 
Mit einem Klick auf diesen Menüpunkt gelangen Sie zur Cognigy Produktdokumentation.

- **[Cognigy.AI]({{config.site_url}}ai/resources/agents/agents/)**
Sie können jederzeit zu Cognigy.AI und Ihrem virtuellen Agenten zurückkehren. Öffnen Sie das Benutzer-Pop-up-Menü in der rechten oberen Ecke Ihres Bildschirms und klicken Sie auf den Menüpunkt "Cognigy.AI".

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/bdc1aab-User_menu_my_profile_250.svg" width="100%" />
  <figcaption>Menü "Benutzer"</figcaption>
</figure>

## Hauptmenü

<div class="divider"></div>

Über das Seitenleistenmenü von Insights können Sie alle verfügbaren Datenanalyseanwendungen auswählen, um die Leistung der Agenten zu analysieren und den Agenten für ein besseres Verständnis und eine verbesserte Benutzererfahrung zu verbessern.
Die aktuell ausgewählte Anwendung wird in einer Primärfarbe hervorgehoben und wird auch oben neben dem Agenten angezeigt.
Sie können jederzeit zu Cognigy.AI und Ihrem virtuellen Agenten zurückkehren, indem Sie auf den Eintrag Cognigy.AI in der Seitenleiste klicken. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/insights_sidebar_menu.png" width="100%" />
  <figcaption>Hauptmenü der Insights-Seitenleiste</figcaption>
</figure>

<div class="divider"></div>!!! Tipp "Insights Produkteinführung"
    Um Ihr Verständnis zu verbessern, können Sie sich hier unsere Live-Präsentation von Cognigy Insights ansehen:

- [Insights Produkteinführung / English](https://youtu.be/kCkUrHM9dQo)
    - [Insights-Produkteinführung / Englisch](https://youtu.be/hYB2iQ_dT5g)

## Mehr Informationen

- [Globaler Filter]({{config.site_url}}insights/global-filter/)

- [Dashboard-Übersicht]({{config.site_url}}insights/dashboard-overview/)

- [Dashboard-Engagement]({{config.site_url}}insights/dashboard-engagement/)

- [NLU-Leistung des Dashboards]({{config.site_url}}insights/dashboard-nlu-performance/)

- [Schritt-Explorer]({{config.site_url}}insights/step-explorer/)

- [Transkript-Explorer]({{config.site_url}}insights/transcript-explorer/)

- [Nachrichten-Explorer]({{config.site_url}}insights/message-explorer/)

- [Bericht herunterladen]({{config.site_url}}insights/download-report/)