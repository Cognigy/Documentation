---
Titel: "Agenten" 
Schnecke: "Agenten"
description: "Cognigy.AI Agenten sind Projekte, die Sammlungen von Conversational AI-Ressourcen enthalten, einschließlich [Flows](.. /build/flows.md), [Lexika](.. /build/lexicons.md), [Endpunkte](.. /deploy/endpoints.md) und andere Ressourcen. Sie können an einem bestimmten Agenten mit mehreren Teammitgliedern zusammenarbeiten."
ausgeblendet: false 
---
# Agenten

_Agents_ sind Projekte, die Sammlungen von Conversational AI-Ressourcen enthalten, einschließlich [Flows](.. /build/flows.md), [Lexika](.. /build/lexicons.md), [Endpunkte](.. /deploy/endpoints.md) und andere Ressourcen. Sie können an einem bestimmten Agent mit mehreren Teammitgliedern zusammenarbeiten.

Innerhalb eines Agenten als Projekt können Sie virtuelle Agenten erstellen. Ein virtueller Agent ist ein Bot, der darauf ausgelegt ist, Interaktionen automatisch zu verarbeiten. Ein virtueller Agent ist in der Regel für einen Anwendungsfall konzipiert und kann mehrere Benutzerabsichten verarbeiten.
Virtuelle Agenten können auf einer Vielzahl von Kanälen bereitgestellt werden. 

## Erstellen eines Agenten

1. Gehen Sie zur Cognigy.AI Oberfläche.
2. Klicken Sie in der oberen linken Ecke auf **Agent erstellen**.

    <img class="image-center" src="{{config.site_url}}ai/resources/images/create_agent.png" width="80%" style="margin-bottom: 5px">

3. Geben Sie Ihrem Projekt einen eindeutigen Namen, der seinen Zweck beschreibt. Sie können den Namen auch später ändern.
4. Wählen Sie die primäre Sprache für Ihren Agenten aus.
5. Wählen Sie eine Farbe aus, die Ihrem Agenten zugeordnet werden soll.
6. _(Optional)_ Aktivieren Sie **Live Agent einrichten**. Weitere Informationen finden Sie im Abschnitt [Erstellen eines Agenten mit Live-Agent-Flow](#create-einer-Agent-mit-Live-Agent-Flow)).
7. Klicken Sie auf **Weiter: Solution Accelerator auswählen**.

    <img class="image-center" src="{{config.site_url}}ai/resources/images/agent_wizard_basic_settings.png" width="80%">

8. Wählen Sie **Leer** oder einen beliebigen vorgefertigten Solution Accelerator aus, mit dem Sie einen bestimmten virtuellen Agenten erstellen können.

    <img class="image-center" src="{{config.site_url}}ai/resources/images/agent_wizard_solution_accelerator.png" width="80%">

9. Wählen Sie einen Endpunkt aus, den Sie zuerst für den Agenten verwenden möchten. Sie können auch später weitere Endpunkte hinzufügen.

    <img class="image-center" src="{{config.site_url}}ai/resources/images/agent_wizard_channels.png" width="80%">

10. Wählen Sie die vorgefertigten Skills aus, wenn Sie einen für Ihren Agenten verwenden möchten.

    <img class="image-center" src="{{config.site_url}}ai/resources/images/agent_wizard_skills.png" width="80%">

11. Klicken Sie auf **Gehe zu Agent**, um den erstellten Agenten anzuzeigen.

    <img class="image-center" src="{{config.site_url}}ai/resources/images/agent_wizard_go_to_agent.png" width="80%">

Sobald diese Schritte abgeschlossen sind, ist die Einrichtung des Agenten abgeschlossen.

## Erstellen eines Agenten mit Live Agent Flow

Die Einrichtung des Live Agents hängt von Ihrer Projektrolle ab:

- Wenn Sie ein **Administrator** sind und kein Live Agent-Konto für Ihre Organisation konfiguriert ist, wird im Assistenten **Agent erstellen** eine Option zum Einrichten eines Live Agent-Kontos angezeigt.
- Wenn Sie ein **Projektmanager** sind, haben Sie nicht die Möglichkeit, ein Live Agent-Konto einzurichten. Wenden Sie sich stattdessen an Ihren Administrator, um ein Live Agent-Konto für Ihre Organisation einzurichten.

Bei On-Premises-Installationen ist der Abschnitt **Live Agent** im Assistenten **Agent erstellen** nur sichtbar, wenn der Live Agent auf Infrastrukturebene konfiguriert ist, wofür die Umgebungsvariable "FEATURE_USE_COGNIGY_LIVE_AGENT" aktiviert sein muss.

Wenn das Live-Agent-Konto bereits für Ihre Organisation konfiguriert ist, können Sie einen Agenten mit einem Live-Agenten-Flow erstellen, indem Sie die folgenden Schritte ausführen:

1. Erstellen Sie einen [Live Agent-Posteingang](.. /.. /.. /live-agent/settings/inboxes.md), indem Sie **Cognigy Live Agent Posteingang erstellen** aktivieren.
2. Konfigurieren Sie [AI Copilot](.. /.. /.. /live-agent/assistants/overview.md) im Abschnitt **Copilot**, indem Sie eine der folgenden Optionen auswählen:
    - **Agent Assist deaktivieren** – Für diese Option sind keine zusätzlichen Ressourcen erforderlich. Die Funktionen von AI Copilot werden deaktiviert.
    - **Agent Assist aktivieren** – mit dieser Option wird ein AI Copilot Flow erstellt. Dieser Flow enthält einen Say-Knoten, der es dem System ermöglicht, Nachrichten zu kommunizieren. Dieser AI Copilot-Flow wird als derjenige zugewiesen, den Sie für AI Copilot-Interaktionen verwenden.
   
    <img src="{{config.site_url}}ai/resources/images/agent_wizard_setup_liveagent_inbox.png" width="80%" style="margin-bottom: 5px">

Schließen Sie die Agenteneinrichtung mit der Live-Agent-Funktion ab, indem Sie die Schritte wie bei einem [einfachen Agenten](#create-ein-Agent) ausführen.

## Agenten-Dashboard

Das Agenten-Dashboard dient als Übersichtsseite für Ihren Agenten. Es zeigt relevante Informationen über Ihren Agenten an, einschließlich Analysen, Projektmitglieder, kürzlich geänderte Ressourcen und zusätzliche Informationen über Cognigy.AI selbst.

<img class="image-center" src="{{config.site_url}}ai/resources/images/Agent_dashboard.png" width="80%">

### Analyse-Widget

Ab Version 4.10 bietet Cognigy eine völlig neu gestaltete Analytics-Lösung namens [Insights](.. /.. /.. /insights/cognigy-insights.md).

- Wenn die Insights-Anwendung in Ihrem Produkt aktiviert ist, gelangen Sie durch Klicken auf das Pfeilsymbol im Analytics-Widget im Agenten-Dashboard zum Insights-Übersichts-Dashboard.
- Wenn die Insights-Anwendung in Ihrem Produkt nicht aktiviert ist, werden Sie durch Klicken auf das Pfeilsymbol im Analytics-Widget im Agenten-Dashboard wie zuvor zur Analytics-Seite weitergeleitet.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/conversation-count-chart.png" width="100%"/>
  <figcaption>Agenten-Dashboard - Analytics-Widget</figcaption>
</figure>

Weitere Informationen zu Cognigy Analytics finden Sie auf der Seite [Agent Analytics](.. /.. /tools/analytics/analytics.md) ein.

## Obere Symbolleiste

Agenten verfügen in jeder Ansicht über eine obere Symbolleiste, die einen schnellen Zugriff auf agentenspezifische Ressourcen wie Suche, Aufgaben und den Interaktionsbereich bietet. Die obere Symbolleiste enthält auch Elemente, wie z. B. das Benutzermenü und den Interaktionsbereich, die durchgängig verfügbar sind. 

Mit Cognigy.AI Version 4.11.0 wurden Tooltips zur Symbolleiste hinzugefügt, um die Navigation durch Hover-Interaktionen zu verbessern.<div class="right-image">
<img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar.png">
</div>### Help-Center-Suche

Mit der Help-Center-Suchfunktion können Sie in der Liste der auf der Website [Cognigy Help Center](https://support.cognigy.com/) verfügbaren Artikel nach möglichen Antworten suchen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/HelpCenter_search_result.png"/>
  <figcaption>Liste der verfügbaren Help-Center-Artikel</figcaption>
</figure>

### Reisen

Journeys sind Tutorials auf dem Bildschirm, die Teil des [Cognigy Help Center](https://support.cognigy.com/hc/en-us) sind und Schritt-für-Schritt-Anleitungen direkt in der Cognigy.AI Benutzeroberfläche bieten.<div class="right-image">
 <img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar_journeys.png">
</div>Weitere Informationen finden Sie unter [Journeys](journeys.md).

### Suche

Die Suchschnittstelle kann verwendet werden, um innerhalb des Agenten nach Ressourcen zu suchen.
Es bietet eine bequeme Möglichkeit, sofort auf Ressourcen zuzugreifen, und enthält eine Autocomplete-Funktion.<div class="right-image">
  <img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar_search.png">
</div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/search.png"/>
</figure>### Aufgaben

Aufgaben sind bestimmte Aktivitäten, wie z. B. das Trainieren von Intents, das Importieren von Snapshots oder das Erstellen eines neuen Agenten. Eine Aufgabe ist ein asynchroner Prozess, der im Hintergrund ausgeführt werden kann und dem Benachrichtigungssystem zugeordnet ist.<div class="right-image">
<img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar_taskmenu.png">
</div>Gehen Sie zu den [Aufgaben](.. /.. /resources/agents/tasks.md) für weitere Informationen.

### Benutzer-Menü

Das Benutzermenü bietet Zugriff auf eine Reihe von Ansichten. <div class="right-image">
 <img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar_usermenu.png">
 </div>

 <figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/user_menu.png" />
  <figcaption>Menü "Benutzer"</figcaption>
</figure>

Gehen Sie zu [Benutzermenü](.. /.. /tools/user-menu/user-menu.md) für weitere Informationen.

### Interaktions-Panel

Über das Interaktionspanel können Sie jederzeit mit Ihrem virtuellen Agenten interagieren. Es ist ein nützliches Tool, das eine Darstellung der kanalspezifischen Ausgabe bereitstellt und detailliertere Debugging-Informationen anzeigen kann.<div class="right-image">
 <img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar_Interaction_Panel.png" style="margin-bottom: 5px">
 </div>Gehen Sie zu [Interaction Panel](.. /.. /tools/interaction-panel/interaction-panel.md) für weitere Informationen.